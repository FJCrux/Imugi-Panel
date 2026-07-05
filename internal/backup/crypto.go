// SPDX-License-Identifier: GPL-3.0-or-later

package backup

// Optional passphrase-based encryption of the backup archive.
//
// Encrypted layout: magic || salt(16) || iv(16) || AES-256-CTR(body) ||
// HMAC-SHA256(32) over everything before the trailer. Encrypt-then-MAC with
// independent keys derived via scrypt. Chosen over GCM so we can stream
// arbitrarily large archives (geoip datasets) without buffering in memory.

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/hmac"
	"crypto/rand"
	"crypto/sha256"
	"crypto/subtle"
	"fmt"
	"io"
	"os"

	"golang.org/x/crypto/scrypt"
)

const (
	magic   = "IMUGIBK1"
	scryptN = 1 << 15
	scryptR = 8
	scryptP = 1
	saltLen = 16
	ivLen   = 16
	macLen  = 32
)

func deriveKeys(passphrase string, salt []byte) (encKey, macKey []byte, err error) {
	dk, err := scrypt.Key([]byte(passphrase), salt, scryptN, scryptR, scryptP, 64)
	if err != nil {
		return nil, nil, err
	}
	return dk[:32], dk[32:], nil
}

// IsEncrypted reports whether f starts with the encrypted-backup magic.
func IsEncrypted(f *os.File) (bool, error) {
	if _, err := f.Seek(0, io.SeekStart); err != nil {
		return false, err
	}
	buf := make([]byte, len(magic))
	if _, err := io.ReadFull(f, buf); err != nil {
		return false, nil // too short to be our format
	}
	return string(buf) == magic, nil
}

// Encrypt streams in to out under the passphrase.
func Encrypt(in io.Reader, out io.Writer, passphrase string) error {
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
	header := append([]byte(magic), append(salt, iv...)...)
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

// Decrypt verifies the MAC and streams the plaintext of in to out. It needs
// a file (not a reader) because MAC verification is a separate first pass.
func Decrypt(in *os.File, out io.Writer, passphrase string) error {
	info, err := in.Stat()
	if err != nil {
		return err
	}
	headerLen := int64(len(magic) + saltLen + ivLen)
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
	salt := header[len(magic) : len(magic)+saltLen]
	iv := header[len(magic)+saltLen:]
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
