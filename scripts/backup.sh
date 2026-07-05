#!/usr/bin/env sh
# Host-side full backup of an Imugi Panel docker-compose deployment.
#
# Unlike the in-panel "Download backup" (which snapshots panel state only), this
# also captures .env — the deployment config that lives on the host and the
# panel process cannot read. Use this for a complete "move to a new host" bundle.
#
#   sh scripts/backup.sh                 # writes imugi-panel-backup-<ts>.tar.gz
#   sh scripts/backup.sh /path/out.tgz   # custom output path
#
# For a transactionally consistent panel.db, stop the stack first
# (docker compose stop) or use the in-panel backup, which does VACUUM INTO.
set -eu

cd "$(CDPATH= cd "$(dirname "$0")/.." && pwd)"

DATA_DIR="${PANEL_DATA_DIR_HOST:-panel-data}"
MITA_DIR="${MITA_DIR_HOST:-mita-config}"
OUT="${1:-imugi-panel-backup-$(date -u +%Y%m%d-%H%M%S).tar.gz}"

set --
[ -f .env ] && set -- "$@" .env
[ -d "$DATA_DIR" ] && set -- "$@" "$DATA_DIR"
[ -d "$MITA_DIR" ] && set -- "$@" "$MITA_DIR"

if [ "$#" -eq 0 ]; then
  echo "nothing to back up (no .env / $DATA_DIR / $MITA_DIR found here)" >&2
  exit 1
fi

tar czf "$OUT" "$@"
echo "Wrote $OUT (includes: $*)"
echo
echo "Restore on a new host: copy $OUT next to docker-compose.yml, then:"
echo "  docker compose down"
echo "  tar xzf $OUT"
echo "  docker compose up -d"
