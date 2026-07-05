// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	"google.golang.org/protobuf/proto"

	"github.com/fjcrux/mieru-web-ui/internal/portspec"
)

type portBinding struct {
	// Port is set for a single port, PortRange ("2012-2022") for a range.
	Port      int32  `json:"port,omitempty"`
	PortRange string `json:"portRange,omitempty"`
	Protocol  string `json:"protocol"` // TCP or UDP
}

type networkConfig struct {
	PortBindings []portBinding `json:"portBindings"`
	MTU          int32         `json:"mtu"`
	LoggingLevel string        `json:"loggingLevel"`
	// PortsManaged is true when ports come from PROXY_PORTS (read-only in UI).
	PortsManaged bool `json:"portsManaged"`
}

func (s *Server) handleGetNetwork(w http.ResponseWriter, r *http.Request) {
	out := networkConfig{
		PortBindings: []portBinding{},
		MTU:          1400,
		LoggingLevel: "INFO",
		PortsManaged: s.PortsManaged,
	}
	// Ports come from the panel's desired_ports (shown even with no users, and
	// safe when mita is momentarily unreachable). MTU/logging come from mita.
	if spec, _ := s.Store.Setting("desired_ports"); spec != "" {
		if bindings, err := portspec.Parse(spec, portspec.MinUIPort); err == nil {
			for _, b := range bindings {
				out.PortBindings = append(out.PortBindings, portBinding{
					Port:      b.GetPort(),
					PortRange: b.GetPortRange(),
					Protocol:  b.GetProtocol().String(),
				})
			}
		}
	}
	if cfg, err := s.Mita.GetConfig(r.Context()); err == nil {
		out.MTU = cfg.GetMtu()
		out.LoggingLevel = cfg.GetLoggingLevel().String()
	}
	writeJSON(w, http.StatusOK, out)
}

// handlePutNetwork applies port/MTU/logging changes. Per the M1 probe,
// Reload only opens new ports and never closes removed ones, so this
// path uses Stop+Start (brief proxy interruption) to fully apply.
func (s *Server) handlePutNetwork(w http.ResponseWriter, r *http.Request) {
	var req networkConfig
	if !readJSON(w, r, &req) {
		return
	}
	// Ports are stored as desired_ports (applied to mita only when a user
	// exists). When PROXY_PORTS manages them, the UI can't change them.
	if !s.PortsManaged {
		spec, err := bindingsToSpec(req.PortBindings)
		if err != nil {
			writeErr(w, http.StatusBadRequest, err.Error())
			return
		}
		if err := s.Store.SetSetting("desired_ports", spec); err != nil {
			writeErr(w, http.StatusInternalServerError, err.Error())
			return
		}
	}
	if req.MTU != 0 && (req.MTU < 1280 || req.MTU > 1500) {
		writeErr(w, http.StatusBadRequest, "mtu must be between 1280 and 1500")
		return
	}
	level, ok := pb.LoggingLevel_value[req.LoggingLevel]
	if req.LoggingLevel != "" && !ok {
		writeErr(w, http.StatusBadRequest, "invalid logging level")
		return
	}

	ctx := r.Context()
	if req.MTU != 0 || req.LoggingLevel != "" {
		if _, err := s.Mita.UpdateConfig(ctx, func(cfg *pb.ServerConfig) error {
			if req.MTU != 0 {
				cfg.Mtu = proto.Int32(req.MTU)
			}
			if req.LoggingLevel != "" {
				cfg.LoggingLevel = pb.LoggingLevel(level).Enum()
			}
			return nil
		}); err != nil {
			writeMitaErr(w, err)
			return
		}
	}
	// Apply the ports (and restart) based on whether users exist.
	s.reconcileProxy(ctx, true)
	writeJSON(w, http.StatusOK, map[string]bool{"ok": true})
}

// bindingsToSpec turns the UI port bindings into a desired_ports spec string,
// validating each entry.
func bindingsToSpec(in []portBinding) (string, error) {
	if len(in) == 0 {
		return "", nil
	}
	var toks []string
	for _, b := range in {
		if b.Protocol != "" && b.Protocol != "TCP" {
			return "", fmt.Errorf("only TCP port bindings are supported here")
		}
		if b.PortRange != "" {
			if _, _, err := portspec.ParseRange(b.PortRange, portspec.MinUIPort); err != nil {
				return "", err
			}
			toks = append(toks, b.PortRange)
		} else {
			if err := validPort(b.Port); err != nil {
				return "", err
			}
			toks = append(toks, strconv.Itoa(int(b.Port)))
		}
	}
	spec := strings.Join(toks, ",")
	if _, err := portspec.Parse(spec, portspec.MinUIPort); err != nil {
		return "", err
	}
	return spec, nil
}

func validPort(p int32) error {
	if p < portspec.MinUIPort || p > portspec.MaxPort {
		return fmt.Errorf("port %d out of range (%d-%d)", p, portspec.MinUIPort, portspec.MaxPort)
	}
	return nil
}
