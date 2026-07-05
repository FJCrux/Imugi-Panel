// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"testing"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	"google.golang.org/protobuf/proto"
)

func TestAdvancedToProtoDefaultsAreNil(t *testing.T) {
	var req advancedConfig
	req.DNS.DualStack = "USE_FIRST_IP"
	req.TrafficPattern.Nonce.Type = "NONCE_TYPE_RANDOM"
	dns, adv, tp, err := req.toProto()
	if err != nil {
		t.Fatal(err)
	}
	if dns != nil || adv != nil || tp != nil {
		t.Fatalf("expected all nil for defaults, got %v %v %v", dns, adv, tp)
	}
}

func TestAdvancedToProtoRoundTrip(t *testing.T) {
	var req advancedConfig
	req.DNS.DualStack = "PREFER_IPv4"
	req.DNS.Hosts = map[string]string{"example.com": "10.0.0.1"}
	req.MetricsLoggingInterval = "5m"
	req.UserHintIsMandatory = true
	req.TrafficPattern.Seed = proto.Int32(42)
	req.TrafficPattern.TCPFragment.Enable = true
	req.TrafficPattern.Nonce.Type = "NONCE_TYPE_FIXED"
	req.TrafficPattern.Nonce.CustomHexStrings = []string{"00010203"}
	req.TrafficPattern.Padding.MaxEndPaddingLen = proto.Int32(100)

	dns, adv, tp, err := req.toProto()
	if err != nil {
		t.Fatal(err)
	}
	if dns.GetDualStack() != pb.DualStack_PREFER_IPv4 || dns.GetHosts()["example.com"] != "10.0.0.1" {
		t.Errorf("dns mismatch: %v", dns)
	}
	if adv.GetMetricsLoggingInterval() != "5m" || !adv.GetUserHintIsMandatory() {
		t.Errorf("advanced mismatch: %v", adv)
	}
	if tp.GetSeed() != 42 || !tp.GetTcpFragment().GetEnable() ||
		tp.GetNonce().GetType() != pb.NonceType_NONCE_TYPE_FIXED ||
		tp.GetPadding().GetMaxEndPaddingLen() != 100 {
		t.Errorf("traffic pattern mismatch: %v", tp)
	}
}

func TestAdvancedToProtoRejectsBadInput(t *testing.T) {
	bad := []func(*advancedConfig){
		func(a *advancedConfig) { a.DNS.DualStack = "SOMETIMES" },
		func(a *advancedConfig) { a.DNS.Hosts = map[string]string{"example.com": "not-an-ip"} },
		func(a *advancedConfig) { a.MetricsLoggingInterval = "yearly" },
		func(a *advancedConfig) { a.TrafficPattern.TCPFragment.MaxSleepMs = proto.Int32(500) },
		func(a *advancedConfig) { a.TrafficPattern.Nonce.Type = "NONCE_TYPE_NOISY" },
		func(a *advancedConfig) { a.TrafficPattern.Nonce.MinLen = proto.Int32(13) },
		func(a *advancedConfig) {
			a.TrafficPattern.Nonce.MinLen = proto.Int32(5)
			a.TrafficPattern.Nonce.MaxLen = proto.Int32(2)
		},
		func(a *advancedConfig) { a.TrafficPattern.Nonce.CustomHexStrings = []string{"zz"} },
		func(a *advancedConfig) {
			a.TrafficPattern.Nonce.CustomHexStrings = []string{"000102030405060708090a0b0c"}
		},
		func(a *advancedConfig) { a.TrafficPattern.Padding.MaxEndPaddingLen = proto.Int32(300) },
	}
	for i, mutate := range bad {
		var req advancedConfig
		mutate(&req)
		if _, _, _, err := req.toProto(); err == nil {
			t.Errorf("case %d: expected validation error", i)
		}
	}
}
