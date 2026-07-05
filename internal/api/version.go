// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"context"
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
	"sync"
	"time"
)

// latestReleaseURL is the GitHub API endpoint for the newest published release.
// It is a fixed host (no user input), so this is not an SSRF surface.
const latestReleaseURL = "https://api.github.com/repos/FJCrux/mieru-web-ui/releases/latest"

// updateCheckTTL bounds how often the panel contacts GitHub for the latest
// release, so opening the UI repeatedly does not hammer the API.
const updateCheckTTL = 6 * time.Hour

type versionResponse struct {
	// Current is the running panel version ("dev" for unversioned builds).
	Current string `json:"current"`
	// Latest is the newest published release tag, when the check ran.
	Latest string `json:"latest,omitempty"`
	// UpdateAvailable is true when Latest is newer than Current.
	UpdateAvailable bool `json:"updateAvailable"`
	// ReleaseURL links to the latest release page.
	ReleaseURL string `json:"releaseUrl,omitempty"`
	// Checked is false when the remote check is disabled or hasn't run.
	Checked bool `json:"checked"`
}

// updateChecker caches the latest-release lookup behind a TTL.
type updateChecker struct {
	enabled bool
	client  *http.Client

	mu      sync.Mutex
	at      time.Time
	tag     string
	htmlURL string
}

// NewUpdateChecker returns a checker that queries GitHub for the latest
// release. When enabled is false, the panel never contacts GitHub.
func NewUpdateChecker(enabled bool) *updateChecker {
	return &updateChecker{enabled: enabled, client: &http.Client{Timeout: 8 * time.Second}}
}

// latest returns the cached latest tag and its URL, refreshing past the TTL.
// It fails soft: on any error the previous cache (possibly empty) is returned.
func (u *updateChecker) latest(ctx context.Context) (tag, htmlURL string) {
	u.mu.Lock()
	defer u.mu.Unlock()
	if !u.at.IsZero() && time.Since(u.at) < updateCheckTTL {
		return u.tag, u.htmlURL
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, latestReleaseURL, nil)
	if err != nil {
		return u.tag, u.htmlURL
	}
	req.Header.Set("Accept", "application/vnd.github+json")
	resp, err := u.client.Do(req)
	if err != nil {
		return u.tag, u.htmlURL
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		// Record the attempt so a rate-limited API isn't retried every request.
		u.at = time.Now()
		return u.tag, u.htmlURL
	}
	var body struct {
		TagName string `json:"tag_name"`
		HTMLURL string `json:"html_url"`
	}
	if json.NewDecoder(resp.Body).Decode(&body) == nil && body.TagName != "" {
		u.tag, u.htmlURL = body.TagName, body.HTMLURL
	}
	u.at = time.Now()
	return u.tag, u.htmlURL
}

func (s *Server) handleVersion(w http.ResponseWriter, r *http.Request) {
	out := versionResponse{Current: s.Version}
	if s.Updates != nil && s.Updates.enabled {
		if tag, url := s.Updates.latest(r.Context()); tag != "" {
			out.Latest = tag
			out.ReleaseURL = url
			out.Checked = true
			out.UpdateAvailable = semverNewer(s.Version, tag)
		}
	}
	writeJSON(w, http.StatusOK, out)
}

// semverNewer reports whether latest is a newer semantic version than current.
// Non-release builds (e.g. "dev") never report an update.
func semverNewer(current, latest string) bool {
	c, ok1 := parseSemver(current)
	l, ok2 := parseSemver(latest)
	if !ok1 || !ok2 {
		return false
	}
	for i := 0; i < 3; i++ {
		if l[i] != c[i] {
			return l[i] > c[i]
		}
	}
	return false
}

// parseSemver parses "v1.2.3" (any pre-release/build suffix ignored) into
// [major, minor, patch].
func parseSemver(v string) ([3]int, bool) {
	var out [3]int
	v = strings.TrimPrefix(strings.TrimSpace(v), "v")
	if i := strings.IndexAny(v, "-+"); i >= 0 {
		v = v[:i]
	}
	parts := strings.Split(v, ".")
	if len(parts) != 3 {
		return out, false
	}
	for i, p := range parts {
		n, err := strconv.Atoi(p)
		if err != nil || n < 0 {
			return out, false
		}
		out[i] = n
	}
	return out, true
}
