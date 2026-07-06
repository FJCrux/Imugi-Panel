# Backup & restore

A backup is a full, portable snapshot of the panel — restore it on any server
to move the whole setup.

## What a backup contains

- **panel.db** — admin account, mieru users and their passwords, all settings
  (public host, panel/paths, routing rules), share tokens, chain peers.
- **mita config** (`server.conf.pb`) — ports, users, DNS, traffic obfuscation.
- **GeoIP datasets** and **chain peer** state.

**Not included: `.env`.** It lives on the host and the panel process (inside the
container) can't read it. Everything the panel *runs on* is already in
`panel.db`, so a restore works without it — but keep your `.env` too if you want
to reproduce the exact deployment (published ports, TLS paths, image tag). The
host script below bundles `.env` for you.

The backup contains **plaintext user passwords** — treat the file as a secret,
and prefer the encrypted option.

## Option A: from the panel (Settings → Backup & restore)

- **Download backup** — optionally set a passphrase to encrypt it (AES-256; the
  same passphrase is required to restore). Encrypted files end in `.imugi`,
  plain ones in `.tar.gz`. The snapshot of `panel.db` is transactionally
  consistent (taken with `VACUUM INTO`), so you can back up while running.
- **Restore** — upload a backup file (and its passphrase, if encrypted). The
  panel stages the files, then restarts and applies them before reopening the
  database. This **overwrites all current data**.

Do this over HTTPS — the download stream contains credentials.

## Option B: from the host (includes `.env`)

For a complete "move to a new server" bundle:

```sh
sh scripts/backup.sh
```

It writes `imugi-panel-backup-<timestamp>.tar.gz` with `.env`, `panel-data/`,
and `mita-config/` inside. For a fully consistent `panel.db`, stop the stack
first (`docker compose stop`) or use Option A.

Restore on the new host — replace the file name with your actual backup:

```sh
docker compose down &&
tar xzf imugi-panel-backup-<timestamp>.tar.gz &&
docker compose up -d
```

## Moving to a new server — checklist

1. On the new host: clone the repo, `cp .env.example .env` (or restore your old
   `.env` from the host backup).
2. Restore the backup (Option A upload, or Option B extract).
3. Start the stack. Users, settings, routing and config come back as-is; share
   links keep working as long as the public host / panel URL match.
