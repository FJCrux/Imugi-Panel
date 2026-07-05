// SPDX-License-Identifier: GPL-3.0-or-later

package api

import "testing"

func TestSemverNewer(t *testing.T) {
	cases := []struct {
		cur, latest string
		want        bool
	}{
		{"v1.0.2", "v1.0.3", true},
		{"v1.0.3", "v1.0.3", false},
		{"v1.0.3", "v1.0.2", false},
		{"v1.0.9", "v1.1.0", true},
		{"v1.9.0", "v2.0.0", true},
		{"1.0.2", "v1.0.3", true},       // mixed v prefix
		{"v1.0.3-rc1", "v1.0.3", false}, // suffix stripped -> equal
		{"dev", "v1.0.3", false},        // unversioned build
		{"v1.0.3", "garbage", false},
	}
	for _, c := range cases {
		if got := semverNewer(c.cur, c.latest); got != c.want {
			t.Errorf("semverNewer(%q,%q)=%v want %v", c.cur, c.latest, got, c.want)
		}
	}
}
