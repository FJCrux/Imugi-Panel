// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/fjcrux/mieru-web-ui/internal/backup"
)

func (s *Server) handleBackup(w http.ResponseWriter, r *http.Request) {
	if s.Backup == nil {
		writeErr(w, http.StatusNotImplemented, "backup is not available")
		return
	}
	// The passphrase travels in the POST body, never in the URL, so it can't
	// end up in reverse-proxy access logs or browser history.
	var req struct {
		Passphrase string `json:"passphrase"`
	}
	if !readJSON(w, r, &req) {
		return
	}
	passphrase := req.Passphrase

	tmp, err := os.CreateTemp("", "imugi-backup-*.tar.gz")
	if err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer os.Remove(tmp.Name())
	defer tmp.Close()

	if err := backup.Build(tmp, s.Store, *s.Backup, s.Version); err != nil {
		writeErr(w, http.StatusInternalServerError, "build backup: "+err.Error())
		return
	}

	// Optionally encrypt the archive to a second temp file.
	out := tmp
	ext := "tar.gz"
	if passphrase != "" {
		enc, err := os.CreateTemp("", "imugi-backup-*.enc")
		if err != nil {
			writeErr(w, http.StatusInternalServerError, err.Error())
			return
		}
		defer os.Remove(enc.Name())
		defer enc.Close()
		if _, err := tmp.Seek(0, io.SeekStart); err != nil {
			writeErr(w, http.StatusInternalServerError, err.Error())
			return
		}
		if err := backup.Encrypt(tmp, enc, passphrase); err != nil {
			writeErr(w, http.StatusInternalServerError, "encrypt: "+err.Error())
			return
		}
		out = enc
		ext = "imugi"
	}

	if _, err := out.Seek(0, io.SeekStart); err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	name := fmt.Sprintf("imugi-panel-backup-%s.%s", time.Now().UTC().Format("20060102-150405"), ext)
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Header().Set("Content-Disposition", "attachment; filename=\""+name+"\"")
	_, _ = io.Copy(w, out)
}

func (s *Server) handleRestore(w http.ResponseWriter, r *http.Request) {
	if s.Backup == nil || s.Restart == nil {
		writeErr(w, http.StatusNotImplemented, "restore is not available")
		return
	}
	// Up to 512 MiB upload (geoip datasets can be large).
	if err := r.ParseMultipartForm(1 << 20); err != nil {
		writeErr(w, http.StatusBadRequest, "invalid upload: "+err.Error())
		return
	}
	passphrase := r.FormValue("passphrase")
	file, _, err := r.FormFile("archive")
	if err != nil {
		writeErr(w, http.StatusBadRequest, "no archive uploaded")
		return
	}
	defer file.Close()

	// Save the upload to a temp file so we can re-read it (decrypt needs two
	// passes for MAC verification).
	up, err := os.CreateTemp("", "imugi-restore-*.bin")
	if err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer os.Remove(up.Name())
	defer up.Close()
	if _, err := io.Copy(up, io.LimitReader(file, 512<<20)); err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}

	// Decrypt if the file carries our magic header.
	archive := up
	if enc, _ := backup.IsEncrypted(up); enc {
		if passphrase == "" {
			writeErr(w, http.StatusBadRequest, "this backup is encrypted; a passphrase is required")
			return
		}
		dec, err := os.CreateTemp("", "imugi-restore-*.tar.gz")
		if err != nil {
			writeErr(w, http.StatusInternalServerError, err.Error())
			return
		}
		defer os.Remove(dec.Name())
		defer dec.Close()
		if err := backup.Decrypt(up, dec, passphrase); err != nil {
			writeErr(w, http.StatusBadRequest, "decrypt failed (wrong passphrase or corrupt file)")
			return
		}
		archive = dec
	}

	// Unpack into a fresh staging dir, validating as we go.
	staging := s.Backup.RestoreStaging
	_ = os.RemoveAll(staging)
	if _, err := archive.Seek(0, io.SeekStart); err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	if err := backup.Extract(archive, staging); err != nil {
		_ = os.RemoveAll(staging)
		writeErr(w, http.StatusBadRequest, "invalid backup: "+err.Error())
		return
	}
	if _, err := os.Stat(filepath.Join(staging, "panel.db")); err != nil {
		_ = os.RemoveAll(staging)
		writeErr(w, http.StatusBadRequest, "backup is missing panel.db")
		return
	}

	// The staged files are applied on the next start (before the DB is
	// opened), then the panel restarts to pick them up.
	writeJSON(w, http.StatusOK, map[string]bool{"ok": true})
	go func() {
		time.Sleep(300 * time.Millisecond)
		s.Restart()
	}()
}
