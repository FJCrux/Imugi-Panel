// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"archive/tar"
	"compress/gzip"
	"crypto/aes"
	"crypto/cipher"
	"crypto/hmac"
	"crypto/rand"
	"crypto/sha256"
	"crypto/subtle"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"golang.org/x/crypto/scrypt"
)

// BackupPaths tells the backup/restore handlers where the panel's state lives.
// When nil, the endpoints report 501.
type BackupPaths struct {
	DBPath     string // panel.db
	GeoDir     string // geoip datasets dir
	PeersDir   string // chain peers dir
	MitaConfig string // mita server.conf.pb
	// RestoreStaging is where an uploaded restore is unpacked; the panel
	// applies it on the next start (see ApplyPendingRestore). It must live on
	// the same filesystem as the targets so the swap is an atomic rename.
	RestoreStaging string
}

// Archive layout (inside the .tar.gz):
//
//	manifest.json          format/version + timestamp
//	panel.db               consistent VACUUM INTO snapshot
//	mita/server.conf.pb    mita daemon config
//	geoip/<name>.dat       geoip datasets
//	peers/...              chain peer state
const backupFormat = "imugi-panel-backup/1"

type backupManifest struct {
	Format       string `json:"format"`
	CreatedAt    string `json:"createdAt"`
	PanelVersion string `json:"panelVersion"`
}

// --- encryption (optional, passphrase-based) ---
//
// Encrypted layout: magic || salt(16) || iv(16) || AES-256-CTR(body) ||
// HMAC-SHA256(32) over everything before the trailer. Encrypt-then-MAC with
// independent keys derived via scrypt. Chosen over GCM so we can stream
// arbitrarily large archives (geoip datasets) without buffering in memory.
const (
	backupMagic = "IMUGIBK1"
	scryptN     = 1 << 15
	scryptR     = 8
	scryptP     = 1
	saltLen     = 16
	ivLen       = 16
	macLen      = 32
)

func deriveKeys(passphrase string, salt []byte) (encKey, macKey []byte, err error) {
	dk, err := scrypt.Key([]byte(passphrase), salt, scryptN, scryptR, scryptP, 64)
	if err != nil {
		return nil, nil, err
	}
	return dk[:32], dk[32:], nil
}

func (s *Server) handleBackup(w http.ResponseWriter, r *http.Request) {
	if s.Backup == nil {
		writeErr(w, http.StatusNotImplemented, "backup is not available")
		return
	}
	passphrase := r.URL.Query().Get("passphrase")

	tmp, err := os.CreateTemp("", "imugi-backup-*.tar.gz")
	if err != nil {
		writeErr(w, http.StatusInternalServerError, err.Error())
		return
	}
	defer os.Remove(tmp.Name())
	defer tmp.Close()

	if err := s.buildArchive(tmp); err != nil {
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
		if err := encryptStream(tmp, enc, passphrase); err != nil {
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

// buildArchive writes the tar.gz backup to w.
func (s *Server) buildArchive(w io.Writer) error {
	gz := gzip.NewWriter(w)
	tw := tar.NewWriter(gz)

	// Manifest.
	manifest, _ := json.Marshal(backupManifest{
		Format:       backupFormat,
		CreatedAt:    time.Now().UTC().Format(time.RFC3339),
		PanelVersion: s.Version,
	})
	if err := writeTarBytes(tw, "manifest.json", manifest); err != nil {
		return err
	}

	// panel.db — consistent snapshot via VACUUM INTO.
	snap := s.Backup.DBPath + ".backup-" + fmt.Sprint(time.Now().UnixNano())
	if err := s.Store.Backup(snap); err != nil {
		return fmt.Errorf("snapshot db: %w", err)
	}
	defer os.Remove(snap)
	if err := writeTarFile(tw, "panel.db", snap); err != nil {
		return err
	}

	// mita config (single file, may be absent on a fresh install).
	if s.Backup.MitaConfig != "" {
		if _, err := os.Stat(s.Backup.MitaConfig); err == nil {
			if err := writeTarFile(tw, "mita/server.conf.pb", s.Backup.MitaConfig); err != nil {
				return err
			}
		}
	}

	// geoip and peers directories (optional).
	if err := writeTarDir(tw, "geoip", s.Backup.GeoDir); err != nil {
		return err
	}
	if err := writeTarDir(tw, "peers", s.Backup.PeersDir); err != nil {
		return err
	}

	if err := tw.Close(); err != nil {
		return err
	}
	return gz.Close()
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
	if enc, _ := isEncrypted(up); enc {
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
		if err := decryptStream(up, dec, passphrase); err != nil {
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
	if err := extractArchive(archive, staging); err != nil {
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

// --- tar helpers ---

func writeTarBytes(tw *tar.Writer, name string, data []byte) error {
	if err := tw.WriteHeader(&tar.Header{Name: name, Mode: 0o600, Size: int64(len(data)), ModTime: time.Now()}); err != nil {
		return err
	}
	_, err := tw.Write(data)
	return err
}

func writeTarFile(tw *tar.Writer, name, path string) error {
	f, err := os.Open(path)
	if err != nil {
		return err
	}
	defer f.Close()
	info, err := f.Stat()
	if err != nil {
		return err
	}
	if err := tw.WriteHeader(&tar.Header{Name: name, Mode: 0o600, Size: info.Size(), ModTime: info.ModTime()}); err != nil {
		return err
	}
	_, err = io.Copy(tw, f)
	return err
}

func writeTarDir(tw *tar.Writer, prefix, dir string) error {
	if dir == "" {
		return nil
	}
	entries, err := os.ReadDir(dir)
	if os.IsNotExist(err) {
		return nil
	}
	if err != nil {
		return err
	}
	for _, e := range entries {
		if e.IsDir() {
			if err := writeTarDir(tw, prefix+"/"+e.Name(), filepath.Join(dir, e.Name())); err != nil {
				return err
			}
			continue
		}
		if err := writeTarFile(tw, prefix+"/"+e.Name(), filepath.Join(dir, e.Name())); err != nil {
			return err
		}
	}
	return nil
}

// extractArchive unpacks a tar.gz into dst, rejecting path traversal.
func extractArchive(r io.Reader, dst string) error {
	gz, err := gzip.NewReader(r)
	if err != nil {
		return fmt.Errorf("not a gzip archive: %w", err)
	}
	defer gz.Close()
	tr := tar.NewReader(gz)
	for {
		hdr, err := tr.Next()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}
		// Reject absolute paths and traversal (".." components).
		clean := filepath.Clean(hdr.Name)
		if strings.HasPrefix(clean, "..") || strings.HasPrefix(clean, "/") || strings.Contains(clean, ".."+string(os.PathSeparator)) {
			return fmt.Errorf("unsafe path in archive: %q", hdr.Name)
		}
		target := filepath.Join(dst, clean)
		if hdr.FileInfo().IsDir() {
			if err := os.MkdirAll(target, 0o700); err != nil {
				return err
			}
			continue
		}
		if err := os.MkdirAll(filepath.Dir(target), 0o700); err != nil {
			return err
		}
		out, err := os.OpenFile(target, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o600)
		if err != nil {
			return err
		}
		if _, err := io.Copy(out, tr); err != nil {
			out.Close()
			return err
		}
		out.Close()
	}
}

// --- encryption helpers ---

func isEncrypted(f *os.File) (bool, error) {
	if _, err := f.Seek(0, io.SeekStart); err != nil {
		return false, err
	}
	buf := make([]byte, len(backupMagic))
	if _, err := io.ReadFull(f, buf); err != nil {
		return false, nil // too short to be our format
	}
	return string(buf) == backupMagic, nil
}

func encryptStream(in io.Reader, out io.Writer, passphrase string) error {
	salt := make([]byte, saltLen)
	iv := make([]byte, ivLen)
	if _, err := rand.Read(salt); err != nil {
		return err
	}
	if _, err := rand.Read(iv); err != nil {
		return err
	}
	encKey, macKey, err := deriveKeys(passphrase, salt)
	if err != nil {
		return err
	}
	block, err := aes.NewCipher(encKey)
	if err != nil {
		return err
	}
	mac := hmac.New(sha256.New, macKey)
	header := append([]byte(backupMagic), append(salt, iv...)...)
	if _, err := out.Write(header); err != nil {
		return err
	}
	mac.Write(header)

	// Encrypt-then-MAC: MAC covers the ciphertext as it is written.
	stream := cipher.NewCTR(block, iv)
	tee := io.MultiWriter(out, mac) // ciphertext goes to output and the MAC
	writer := &cipher.StreamWriter{S: stream, W: tee}
	if _, err := io.Copy(writer, in); err != nil {
		return err
	}
	_, err = out.Write(mac.Sum(nil))
	return err
}

func decryptStream(in *os.File, out io.Writer, passphrase string) error {
	info, err := in.Stat()
	if err != nil {
		return err
	}
	headerLen := int64(len(backupMagic) + saltLen + ivLen)
	if info.Size() < headerLen+macLen {
		return fmt.Errorf("file too short")
	}
	if _, err := in.Seek(0, io.SeekStart); err != nil {
		return err
	}
	header := make([]byte, headerLen)
	if _, err := io.ReadFull(in, header); err != nil {
		return err
	}
	salt := header[len(backupMagic) : len(backupMagic)+saltLen]
	iv := header[len(backupMagic)+saltLen:]
	encKey, macKey, err := deriveKeys(passphrase, salt)
	if err != nil {
		return err
	}

	// Verify the MAC over header+ciphertext before decrypting anything.
	bodyLen := info.Size() - headerLen - macLen
	mac := hmac.New(sha256.New, macKey)
	mac.Write(header)
	if _, err := io.Copy(mac, io.NewSectionReader(in, headerLen, bodyLen)); err != nil {
		return err
	}
	want := make([]byte, macLen)
	if _, err := in.ReadAt(want, headerLen+bodyLen); err != nil {
		return err
	}
	if subtle.ConstantTimeCompare(mac.Sum(nil), want) != 1 {
		return fmt.Errorf("authentication failed")
	}

	// Decrypt the body.
	block, err := aes.NewCipher(encKey)
	if err != nil {
		return err
	}
	stream := cipher.NewCTR(block, iv)
	reader := &cipher.StreamReader{S: stream, R: io.NewSectionReader(in, headerLen, bodyLen)}
	_, err = io.Copy(out, reader)
	return err
}
