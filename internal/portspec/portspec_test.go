// SPDX-License-Identifier: GPL-3.0-or-later

package portspec

import "testing"

func TestParse(t *testing.T) {
	cases := []struct {
		spec    string
		minPort int
		want    int // binding count; -1 = expect error
	}{
		{"2012", MinUIPort, 1},
		{"2012-2022", MinUIPort, 1},
		{"2012, 2020 ,2027", MinUIPort, 3},
		{"2012,2100-2200", MinUIPort, 2},
		{"80", 1, 1},          // healing accepts low ports
		{"80", MinUIPort, -1}, // the UI does not
		{"", MinUIPort, -1},
		{" , ", MinUIPort, -1},
		{"abc", MinUIPort, -1},
		{"0", 1, -1},
		{"65536", 1, -1},
		{"2022-2012", MinUIPort, -1}, // inverted range
		{"2012-", MinUIPort, -1},     // half-open range
		{"2012-2012", MinUIPort, -1},
	}
	for _, c := range cases {
		got, err := Parse(c.spec, c.minPort)
		if c.want == -1 {
			if err == nil {
				t.Errorf("Parse(%q, %d): want error, got %d bindings", c.spec, c.minPort, len(got))
			}
			continue
		}
		if err != nil {
			t.Errorf("Parse(%q, %d): %v", c.spec, c.minPort, err)
			continue
		}
		if len(got) != c.want {
			t.Errorf("Parse(%q, %d): want %d bindings, got %d", c.spec, c.minPort, c.want, len(got))
		}
	}
}

func TestSame(t *testing.T) {
	a, _ := Parse("2012,2100-2200", 1)
	b, _ := Parse("2012,2100-2200", 1)
	c, _ := Parse("2012", 1)
	d, _ := Parse("2013,2100-2200", 1)
	if !Same(a, b) {
		t.Error("identical specs should compare equal")
	}
	if Same(a, c) || Same(a, d) {
		t.Error("different specs should not compare equal")
	}
	if !Same(nil, nil) {
		t.Error("nil == nil")
	}
	if Same(a, nil) {
		t.Error("bindings != nil")
	}
}
