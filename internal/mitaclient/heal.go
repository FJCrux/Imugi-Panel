// SPDX-License-Identifier: GPL-3.0-or-later

package mitaclient

import (
	"fmt"
	"os"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	"google.golang.org/protobuf/proto"

	"github.com/fjcrux/mieru-web-ui/internal/portspec"
)

// HealConfigFile fixes mita's on-disk config so it can start without
// crashlooping. mita couples users and ports (it rejects users without ports
// and crashes on `run` with ports but no users), so this rewrites the port
// bindings to match: ports (from spec) when there are users, none otherwise.
//
// It edits the protobuf config file directly (mita stores it as a plain
// proto.Marshal of ServerConfig), so it must run before mita is started. User
// entries and their hashed passwords are left untouched. Reports whether it
// changed anything.
func HealConfigFile(path, spec string) (bool, error) {
	b, err := os.ReadFile(path)
	if os.IsNotExist(err) {
		return false, nil // no config yet, nothing to heal
	}
	if err != nil {
		return false, err
	}
	cfg := &pb.ServerConfig{}
	if err := proto.Unmarshal(b, cfg); err != nil {
		return false, fmt.Errorf("parse %s: %w", path, err)
	}

	var want []*pb.PortBinding
	if len(cfg.GetUsers()) > 0 {
		// Users need ports. Only rewrite from a valid spec; otherwise leave the
		// existing (valid) ports so we never break a working config.
		if spec == "" {
			return false, nil
		}
		// minPort 1: accept any port mita itself would run with, even ones the
		// UI wouldn't allow entering.
		parsed, err := portspec.Parse(spec, 1)
		if err != nil {
			return false, nil
		}
		want = parsed
	}
	// No users -> want stays nil (clear ports; this is the crashloop fix).
	if portspec.Same(cfg.GetPortBindings(), want) {
		return false, nil
	}
	cfg.PortBindings = want
	if len(want) > 0 && cfg.GetMtu() == 0 {
		cfg.Mtu = proto.Int32(1400)
	}
	nb, err := proto.Marshal(cfg)
	if err != nil {
		return false, err
	}
	return true, os.WriteFile(path, nb, 0o660)
}
