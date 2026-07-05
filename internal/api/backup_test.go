// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"archive/tar"
	"bytes"
	"compress/gzip"
	"os"
	"path/filepath"
	"testing"
)

func TestEncryptDecryptRoundTrip(t *testing.T) {
	plain := bytes.Repeat([]byte("imugi-secret-data-0123456789"), 5000) // ~140KB
	dir := t.TempDir()

	src := filepath.Join(dir, "plain")
	if err := os.WriteFile(src, plain, 0o600); err != nil {
		t.Fatal(err)
	}
	in, _ := os.Open(src)
	defer in.Close()
	enc, _ := os.Create(filepath.Join(dir, "enc"))
	if err := encryptStream(in, enc, "correct horse"); err != nil {
		t.Fatal(err)
	}
	enc.Close()

	encFile, _ := os.Open(filepath.Join(dir, "enc"))
	defer encFile.Close()
	if ok, _ := isEncrypted(encFile); !ok {
		t.Fatal("encrypted file not detected by magic header")
	}

	// Correct passphrase recovers the plaintext.
	var out bytes.Buffer
	if err := decryptStream(encFile, &out, "correct horse"); err != nil {
		t.Fatalf("decrypt: %v", err)
	}
	if !bytes.Equal(out.Bytes(), plain) {
		t.Fatal("round-trip mismatch")
	}

	// Wrong passphrase must fail authentication, not return garbage.
	var bad bytes.Buffer
	if err := decryptStream(encFile, &bad, "wrong"); err == nil {
		t.Fatal("expected auth failure with wrong passphrase")
	}
}

func TestExtractArchiveRejectsTraversal(t *testing.T) {
	var buf bytes.Buffer
	gz := gzip.NewWriter(&buf)
	tw := tar.NewWriter(gz)
	_ = tw.WriteHeader(&tar.Header{Name: "../evil.txt", Mode: 0o600, Size: 3})
	_, _ = tw.Write([]byte("bad"))
	tw.Close()
	gz.Close()

	if err := extractArchive(&buf, t.TempDir()); err == nil {
		t.Fatal("expected path-traversal rejection")
	}
}
