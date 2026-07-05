// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"encoding/hex"
	"fmt"
	"net"
	"net/http"
	"strings"
	"time"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	"google.golang.org/protobuf/proto"
)

// Nullable numbers distinguish "not set, let mita pick a default" (null in
// JSON) from an explicit value, mirroring the optional proto fields.

type dnsConfig struct {
	// DualStack picks the IP family when a domain resolves to both A and AAAA.
	DualStack string `json:"dualStack"`
	// Hosts are static domain→IP overrides, like /etc/hosts.
	Hosts map[string]string `json:"hosts"`
}

type tcpFragmentConfig struct {
	Enable     bool   `json:"enable"`
	MaxSleepMs *int32 `json:"maxSleepMs"`
}

type nonceConfig struct {
	Type                string   `json:"type"`
	ApplyToAllUDPPacket bool     `json:"applyToAllUDPPacket"`
	MinLen              *int32   `json:"minLen"`
	MaxLen              *int32   `json:"maxLen"`
	CustomHexStrings    []string `json:"customHexStrings"`
}

type paddingConfig struct {
	MaxMiddlePaddingLen *int32 `json:"maxMiddlePaddingLen"`
	MaxEndPaddingLen    *int32 `json:"maxEndPaddingLen"`
}

type trafficPatternConfig struct {
	Seed        *int32            `json:"seed"`
	UnlockAll   bool              `json:"unlockAll"`
	TCPFragment tcpFragmentConfig `json:"tcpFragment"`
	Nonce       nonceConfig       `json:"nonce"`
	Padding     paddingConfig     `json:"padding"`
}

type advancedConfig struct {
	DNS dnsConfig `json:"dns"`
	// MetricsLoggingInterval is a Go duration string ("30s", "5m"); empty
	// keeps mita's default.
	MetricsLoggingInterval string               `json:"metricsLoggingInterval"`
	UserHintIsMandatory    bool                 `json:"userHintIsMandatory"`
	TrafficPattern         trafficPatternConfig `json:"trafficPattern"`
}

func (s *Server) handleGetAdvanced(w http.ResponseWriter, r *http.Request) {
	cfg, err := s.Mita.GetConfig(r.Context())
	if err != nil {
		writeMitaErr(w, err)
		return
	}
	out := advancedConfig{
		DNS: dnsConfig{
			DualStack: cfg.GetDns().GetDualStack().String(),
			Hosts:     map[string]string{},
		},
		MetricsLoggingInterval: cfg.GetAdvancedSettings().GetMetricsLoggingInterval(),
		UserHintIsMandatory:    cfg.GetAdvancedSettings().GetUserHintIsMandatory(),
		TrafficPattern: trafficPatternConfig{
			UnlockAll: cfg.GetTrafficPattern().GetUnlockAll(),
			TCPFragment: tcpFragmentConfig{
				Enable: cfg.GetTrafficPattern().GetTcpFragment().GetEnable(),
			},
			Nonce: nonceConfig{
				Type:                cfg.GetTrafficPattern().GetNonce().GetType().String(),
				ApplyToAllUDPPacket: cfg.GetTrafficPattern().GetNonce().GetApplyToAllUDPPacket(),
				CustomHexStrings:    []string{},
			},
			Padding: paddingConfig{},
		},
	}
	for k, v := range cfg.GetDns().GetHosts() {
		out.DNS.Hosts[k] = v
	}
	if tp := cfg.GetTrafficPattern(); tp != nil {
		if tp.Seed != nil {
			out.TrafficPattern.Seed = proto.Int32(tp.GetSeed())
		}
		if f := tp.GetTcpFragment(); f != nil && f.MaxSleepMs != nil {
			out.TrafficPattern.TCPFragment.MaxSleepMs = proto.Int32(f.GetMaxSleepMs())
		}
		if n := tp.GetNonce(); n != nil {
			if n.MinLen != nil {
				out.TrafficPattern.Nonce.MinLen = proto.Int32(n.GetMinLen())
			}
			if n.MaxLen != nil {
				out.TrafficPattern.Nonce.MaxLen = proto.Int32(n.GetMaxLen())
			}
			out.TrafficPattern.Nonce.CustomHexStrings = append(out.TrafficPattern.Nonce.CustomHexStrings, n.GetCustomHexStrings()...)
		}
		if p := tp.GetPadding(); p != nil {
			if p.MaxMiddlePaddingLen != nil {
				out.TrafficPattern.Padding.MaxMiddlePaddingLen = proto.Int32(p.GetMaxMiddlePaddingLen())
			}
			if p.MaxEndPaddingLen != nil {
				out.TrafficPattern.Padding.MaxEndPaddingLen = proto.Int32(p.GetMaxEndPaddingLen())
			}
		}
	}
	writeJSON(w, http.StatusOK, out)
}

func (s *Server) handlePutAdvanced(w http.ResponseWriter, r *http.Request) {
	var req advancedConfig
	if !readJSON(w, r, &req) {
		return
	}
	dns, advanced, pattern, err := req.toProto()
	if err != nil {
		writeErr(w, http.StatusBadRequest, err.Error())
		return
	}
	if _, err := s.Mita.UpdateConfig(r.Context(), func(cfg *pb.ServerConfig) error {
		cfg.Dns = dns
		cfg.AdvancedSettings = advanced
		cfg.TrafficPattern = pattern
		return nil
	}); err != nil {
		writeMitaErr(w, err)
		return
	}
	writeJSON(w, http.StatusOK, map[string]bool{"ok": true})
}

// toProto validates the request and builds the three optional config
// sections. Sections whose every field is at its default become nil so the
// stored config stays minimal.
func (a advancedConfig) toProto() (*pb.DNS, *pb.ServerAdvancedSettings, *pb.TrafficPattern, error) {
	// DNS
	ds, ok := pb.DualStack_value[a.DNS.DualStack]
	if a.DNS.DualStack != "" && !ok {
		return nil, nil, nil, fmt.Errorf("invalid dual stack preference %q", a.DNS.DualStack)
	}
	hosts := map[string]string{}
	for domain, ip := range a.DNS.Hosts {
		domain = strings.TrimSpace(domain)
		ip = strings.TrimSpace(ip)
		if domain == "" {
			return nil, nil, nil, fmt.Errorf("DNS host entry has an empty domain")
		}
		if net.ParseIP(ip) == nil {
			return nil, nil, nil, fmt.Errorf("DNS host %q has an invalid IP %q", domain, ip)
		}
		hosts[domain] = ip
	}
	var dns *pb.DNS
	if ds != 0 || len(hosts) > 0 {
		dns = &pb.DNS{Hosts: hosts}
		if ds != 0 {
			dns.DualStack = pb.DualStack(ds).Enum()
		}
	}

	// Advanced settings
	interval := strings.TrimSpace(a.MetricsLoggingInterval)
	if interval != "" {
		if d, err := time.ParseDuration(interval); err != nil || d <= 0 {
			return nil, nil, nil, fmt.Errorf("metrics logging interval must be a positive duration like 30s or 5m")
		}
	}
	var advanced *pb.ServerAdvancedSettings
	if interval != "" || a.UserHintIsMandatory {
		advanced = &pb.ServerAdvancedSettings{}
		if interval != "" {
			advanced.MetricsLoggingInterval = proto.String(interval)
		}
		if a.UserHintIsMandatory {
			advanced.UserHintIsMandatory = proto.Bool(true)
		}
	}

	// Traffic pattern
	pattern, err := a.TrafficPattern.toProto()
	if err != nil {
		return nil, nil, nil, err
	}
	return dns, advanced, pattern, nil
}

func (t trafficPatternConfig) toProto() (*pb.TrafficPattern, error) {
	out := &pb.TrafficPattern{}
	if t.Seed != nil {
		out.Seed = proto.Int32(*t.Seed)
	}
	if t.UnlockAll {
		out.UnlockAll = proto.Bool(true)
	}

	if t.TCPFragment.MaxSleepMs != nil && (*t.TCPFragment.MaxSleepMs < 0 || *t.TCPFragment.MaxSleepMs > 100) {
		return nil, fmt.Errorf("TCP fragment max sleep must be between 0 and 100 ms")
	}
	if t.TCPFragment.Enable || t.TCPFragment.MaxSleepMs != nil {
		out.TcpFragment = &pb.TCPFragment{}
		if t.TCPFragment.Enable {
			out.TcpFragment.Enable = proto.Bool(true)
		}
		if t.TCPFragment.MaxSleepMs != nil {
			out.TcpFragment.MaxSleepMs = proto.Int32(*t.TCPFragment.MaxSleepMs)
		}
	}

	nonce, err := t.Nonce.toProto()
	if err != nil {
		return nil, err
	}
	out.Nonce = nonce

	if err := validRange0to255("middle padding", t.Padding.MaxMiddlePaddingLen); err != nil {
		return nil, err
	}
	if err := validRange0to255("end padding", t.Padding.MaxEndPaddingLen); err != nil {
		return nil, err
	}
	if t.Padding.MaxMiddlePaddingLen != nil || t.Padding.MaxEndPaddingLen != nil {
		out.Padding = &pb.PaddingPattern{}
		if t.Padding.MaxMiddlePaddingLen != nil {
			out.Padding.MaxMiddlePaddingLen = proto.Int32(*t.Padding.MaxMiddlePaddingLen)
		}
		if t.Padding.MaxEndPaddingLen != nil {
			out.Padding.MaxEndPaddingLen = proto.Int32(*t.Padding.MaxEndPaddingLen)
		}
	}

	if proto.Equal(out, &pb.TrafficPattern{}) {
		return nil, nil
	}
	return out, nil
}

func (n nonceConfig) toProto() (*pb.NoncePattern, error) {
	typ, ok := pb.NonceType_value[n.Type]
	if n.Type != "" && !ok {
		return nil, fmt.Errorf("invalid nonce type %q", n.Type)
	}
	if n.MinLen != nil && (*n.MinLen < 0 || *n.MinLen > 12) {
		return nil, fmt.Errorf("nonce min length must be between 0 and 12")
	}
	if n.MaxLen != nil && (*n.MaxLen < 0 || *n.MaxLen > 12) {
		return nil, fmt.Errorf("nonce max length must be between 0 and 12")
	}
	if n.MinLen != nil && n.MaxLen != nil && *n.MinLen > *n.MaxLen {
		return nil, fmt.Errorf("nonce min length must not exceed max length")
	}
	var hexes []string
	for _, h := range n.CustomHexStrings {
		h = strings.ToLower(strings.TrimSpace(h))
		if h == "" {
			continue
		}
		b, err := hex.DecodeString(h)
		if err != nil {
			return nil, fmt.Errorf("nonce prefix %q is not a hex string", h)
		}
		if len(b) > 12 {
			return nil, fmt.Errorf("nonce prefix %q exceeds 12 bytes", h)
		}
		hexes = append(hexes, h)
	}

	out := &pb.NoncePattern{CustomHexStrings: hexes}
	if typ != 0 {
		out.Type = pb.NonceType(typ).Enum()
	}
	if n.ApplyToAllUDPPacket {
		out.ApplyToAllUDPPacket = proto.Bool(true)
	}
	if n.MinLen != nil {
		out.MinLen = proto.Int32(*n.MinLen)
	}
	if n.MaxLen != nil {
		out.MaxLen = proto.Int32(*n.MaxLen)
	}
	if proto.Equal(out, &pb.NoncePattern{}) {
		return nil, nil
	}
	return out, nil
}

func validRange0to255(what string, v *int32) error {
	if v != nil && (*v < 0 || *v > 255) {
		return fmt.Errorf("max %s length must be between 0 and 255", what)
	}
	return nil
}
