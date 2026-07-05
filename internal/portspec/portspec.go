// SPDX-License-Identifier: GPL-3.0-or-later

// Package portspec is the single home of the panel's port-spec syntax
// ("2012", "2012-2022", "2012,2020,2027"). The desired_ports invariant is
// enforced in two places (mitaclient heals the on-disk config before mita
// starts, api applies it over RPC at runtime); both must parse and compare
// bindings identically, so the logic lives here.
package portspec

import (
	"fmt"
	"strconv"
	"strings"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	"google.golang.org/protobuf/proto"
)

const MaxPort = 65535

// MinUIPort is the lower bound for operator-entered ports: the panel keeps
// privileged ports out of the UI. Config healing instead passes 1, accepting
// any port mita itself would run with.
const MinUIPort = 1025

// Parse parses a comma-separated port spec into TCP port bindings. Every
// port and range bound must be within [minPort, MaxPort]. Checking the
// parsed int against the bounds before narrowing to int32 keeps the
// conversions provably in range.
func Parse(spec string, minPort int) ([]*pb.PortBinding, error) {
	var out []*pb.PortBinding
	for _, tok := range strings.Split(spec, ",") {
		tok = strings.TrimSpace(tok)
		if tok == "" {
			continue
		}
		b := &pb.PortBinding{Protocol: pb.TransportProtocol_TCP.Enum()}
		if strings.Contains(tok, "-") {
			if _, _, err := ParseRange(tok, minPort); err != nil {
				return nil, err
			}
			b.PortRange = proto.String(tok)
		} else {
			p, err := strconv.Atoi(tok)
			if err != nil || p < minPort || p > MaxPort {
				return nil, fmt.Errorf("invalid port %q", tok)
			}
			b.Port = proto.Int32(int32(p))
		}
		out = append(out, b)
	}
	if len(out) == 0 {
		return nil, fmt.Errorf("no ports in %q", spec)
	}
	return out, nil
}

// ParseRange parses "lo-hi" and returns the bounds.
func ParseRange(s string, minPort int) (int32, int32, error) {
	parts := strings.SplitN(s, "-", 2)
	if len(parts) != 2 {
		return 0, 0, fmt.Errorf("port range must look like 2012-2022")
	}
	lo, err1 := strconv.Atoi(strings.TrimSpace(parts[0]))
	hi, err2 := strconv.Atoi(strings.TrimSpace(parts[1]))
	if err1 != nil || err2 != nil {
		return 0, 0, fmt.Errorf("port range must look like 2012-2022")
	}
	if lo < minPort || lo > MaxPort || hi < minPort || hi > MaxPort {
		return 0, 0, fmt.Errorf("port range must be within %d-%d", minPort, MaxPort)
	}
	if lo >= hi {
		return 0, 0, fmt.Errorf("port range start must be below end")
	}
	return int32(lo), int32(hi), nil
}

// Same reports whether two binding lists are equal (port, range, protocol).
func Same(a, b []*pb.PortBinding) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i].GetPort() != b[i].GetPort() ||
			a[i].GetPortRange() != b[i].GetPortRange() ||
			a[i].GetProtocol() != b[i].GetProtocol() {
			return false
		}
	}
	return true
}
