// SPDX-License-Identifier: GPL-3.0-or-later

package backup

import (
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
)

// ApplyPending moves files staged by the restore endpoint into their live
// locations, then clears the staging dir. It must run before the store is
// opened so replacing the live panel.db is safe. A missing staging dir is a
// no-op.
func ApplyPending(p Paths) error {
	staging := p.RestoreStaging
	if _, err := os.Stat(staging); err != nil {
		return nil
	}
	log.Print("restore: applying staged backup")
	if err := replaceFile(filepath.Join(staging, "panel.db"), p.DBPath); err != nil {
		return fmt.Errorf("restore panel.db: %w", err)
	}
	// Drop the old WAL/SHM sidecars so they don't fight the restored db.
	_ = os.Remove(p.DBPath + "-wal")
	_ = os.Remove(p.DBPath + "-shm")

	if src := filepath.Join(staging, "mita", "server.conf.pb"); fileExists(src) {
		if err := replaceFile(src, p.MitaConfig); err != nil {
			return fmt.Errorf("restore mita config: %w", err)
		}
	}
	if err := replaceDir(filepath.Join(staging, "geoip"), p.GeoDir); err != nil {
		return fmt.Errorf("restore geoip: %w", err)
	}
	if err := replaceDir(filepath.Join(staging, "peers"), p.PeersDir); err != nil {
		return fmt.Errorf("restore peers: %w", err)
	}
	if err := os.RemoveAll(staging); err != nil {
		return err
	}
	log.Print("restore: applied successfully")
	return nil
}

func fileExists(p string) bool { _, err := os.Stat(p); return err == nil }

// replaceFile copies src over dst atomically (copy to a temp then rename),
// which is safe even when src and dst are on different filesystems.
func replaceFile(src, dst string) error {
	if err := os.MkdirAll(filepath.Dir(dst), 0o700); err != nil {
		return err
	}
	tmp := dst + ".restore-tmp"
	if err := copyFile(src, tmp); err != nil {
		return err
	}
	return os.Rename(tmp, dst)
}

// replaceDir replaces dst with the contents of src (a no-op if src is absent).
func replaceDir(src, dst string) error {
	if _, err := os.Stat(src); err != nil {
		return nil
	}
	if err := os.RemoveAll(dst); err != nil {
		return err
	}
	return copyTree(src, dst)
}

func copyFile(src, dst string) error {
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()
	out, err := os.OpenFile(dst, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o600)
	if err != nil {
		return err
	}
	if _, err := io.Copy(out, in); err != nil {
		out.Close()
		return err
	}
	return out.Close()
}

func copyTree(src, dst string) error {
	if err := os.MkdirAll(dst, 0o700); err != nil {
		return err
	}
	entries, err := os.ReadDir(src)
	if err != nil {
		return err
	}
	for _, e := range entries {
		s, d := filepath.Join(src, e.Name()), filepath.Join(dst, e.Name())
		if e.IsDir() {
			if err := copyTree(s, d); err != nil {
				return err
			}
			continue
		}
		if err := copyFile(s, d); err != nil {
			return err
		}
	}
	return nil
}
