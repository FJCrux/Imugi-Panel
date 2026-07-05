// SPDX-License-Identifier: GPL-3.0-or-later

package geoip

import (
	"context"
	"net"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"strings"
	"testing"

	"google.golang.org/protobuf/encoding/protowire"
)

// buildDat encodes a minimal geoip.dat with the given category -> CIDRs.
func buildDat(t *testing.T, cats map[string][]string) []byte {
	t.Helper()
	var out []byte
	for code, cidrs := range cats {
		var geoip []byte
		geoip = protowire.AppendTag(geoip, 1, protowire.BytesType)
		geoip = protowire.AppendBytes(geoip, []byte(code))
		for _, c := range cidrs {
			_, ipnet, err := net.ParseCIDR(c)
			if err != nil {
				t.Fatal(err)
			}
			ip := ipnet.IP.To4()
			if ip == nil {
				ip = ipnet.IP.To16()
			}
			ones, _ := ipnet.Mask.Size()
			var cidr []byte
			cidr = protowire.AppendTag(cidr, 1, protowire.BytesType)
			cidr = protowire.AppendBytes(cidr, ip)
			cidr = protowire.AppendTag(cidr, 2, protowire.VarintType)
			cidr = protowire.AppendVarint(cidr, uint64(ones))
			geoip = protowire.AppendTag(geoip, 2, protowire.BytesType)
			geoip = protowire.AppendBytes(geoip, cidr)
		}
		out = protowire.AppendTag(out, 1, protowire.BytesType)
		out = protowire.AppendBytes(out, geoip)
	}
	return out
}

func TestParseAndExpand(t *testing.T) {
	dir := t.TempDir()
	dat := buildDat(t, map[string][]string{
		"CN": {"1.0.1.0/24", "1.0.2.0/23"},
		"RU": {"2.56.0.0/16"},
	})
	if err := os.WriteFile(filepath.Join(dir, "countries.dat"), dat, 0o644); err != nil {
		t.Fatal(err)
	}
	m, err := New(dir)
	if err != nil {
		t.Fatal(err)
	}

	cn, err := m.CIDRs("cn") // case-insensitive
	if err != nil {
		t.Fatal(err)
	}
	if len(cn) != 2 || cn[0] != "1.0.1.0/24" {
		t.Fatalf("got %v", cn)
	}
	if _, err := m.CIDRs("us"); err == nil {
		t.Fatal("expected error for missing category")
	}

	cats, err := m.Categories()
	if err != nil {
		t.Fatal(err)
	}
	if len(cats) != 2 {
		t.Fatalf("got %+v", cats)
	}
}

func TestMergeAcrossDatasets(t *testing.T) {
	dir := t.TempDir()
	os.WriteFile(filepath.Join(dir, "a.dat"), buildDat(t, map[string][]string{"cn": {"1.0.1.0/24"}}), 0o644)
	os.WriteFile(filepath.Join(dir, "b.dat"), buildDat(t, map[string][]string{"ru-blocked": {"2.56.0.0/16"}}), 0o644)
	m, _ := New(dir)

	ds, err := m.Datasets()
	if err != nil || len(ds) != 2 {
		t.Fatalf("datasets: %v %+v", err, ds)
	}
	blocked, err := m.CIDRs("ru-blocked")
	if err != nil || len(blocked) != 1 {
		t.Fatalf("got %v %v", blocked, err)
	}
}

func TestIsPublicIP(t *testing.T) {
	cases := map[string]bool{
		"8.8.8.8":         true,
		"1.1.1.1":         true,
		"2606:4700::1111": true,
		"127.0.0.1":       false, // loopback
		"10.0.0.5":        false, // RFC1918
		"192.168.1.1":     false,
		"172.16.0.1":      false,
		"169.254.169.254": false, // cloud metadata (link-local)
		"0.0.0.0":         false, // unspecified
		"::1":             false, // IPv6 loopback
		"fd00::1":         false, // IPv6 unique-local
		"fe80::1":         false, // IPv6 link-local
	}
	for s, want := range cases {
		if got := isPublicIP(net.ParseIP(s)); got != want {
			t.Errorf("isPublicIP(%s) = %v, want %v", s, got, want)
		}
	}
}

func TestAddDatasetRejects(t *testing.T) {
	m, err := New(t.TempDir())
	if err != nil {
		t.Fatal(err)
	}
	ctx := context.Background()

	// A server on loopback must be refused at dial time (SSRF guard).
	srv := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.Write([]byte("should never be reached"))
	}))
	defer srv.Close()
	if err := m.AddDataset(ctx, "loop", srv.URL); err == nil {
		t.Error("expected loopback URL to be blocked, got nil")
	} else if !strings.Contains(err.Error(), "non-public") {
		t.Errorf("expected non-public block, got: %v", err)
	}

	// Non-http schemes are rejected before any dial.
	if err := m.AddDataset(ctx, "file", "file:///etc/passwd"); err == nil {
		t.Error("expected file:// scheme to be rejected")
	}
}
