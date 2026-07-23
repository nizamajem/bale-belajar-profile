#!/usr/bin/env bash
# Menambahkan FIREBASE_PROJECT_ID/FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY
# ke ~/.env dari file service-account JSON Firebase, tanpa perlu paste manual
# teks private key yang panjang.
#
# Pemakaian:
#   bash setup-firebase-env.sh /path/ke/balebelajar-xxxx-firebase-adminsdk-xxxx.json
set -euo pipefail

JSON_FILE="${1:-}"
ENV_FILE="$HOME/.env"

if [ -z "$JSON_FILE" ] || [ ! -f "$JSON_FILE" ]; then
  echo "Pemakaian: bash setup-firebase-env.sh /path/ke/service-account.json" >&2
  echo "File tidak ditemukan: $JSON_FILE" >&2
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
  echo "node tidak ditemukan di PATH. Perlu Node.js untuk parsing JSON dengan aman." >&2
  exit 1
fi

PROJECT_ID=$(node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8')).project_id)" "$JSON_FILE")
CLIENT_EMAIL=$(node -e "console.log(JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8')).client_email)" "$JSON_FILE")
PRIVATE_KEY=$(node -e "console.log(JSON.stringify(JSON.parse(require('fs').readFileSync(process.argv[1], 'utf8')).private_key))" "$JSON_FILE")
# PRIVATE_KEY di atas hasil JSON.stringify -> sudah dalam bentuk string berkutip
# ganda dengan \n literal, persis format yang dibutuhkan dotenv.

if [ -z "$PROJECT_ID" ] || [ -z "$CLIENT_EMAIL" ] || [ -z "$PRIVATE_KEY" ]; then
  echo "Gagal membaca project_id/client_email/private_key dari $JSON_FILE" >&2
  exit 1
fi

# Hapus baris FIREBASE_* lama (kalau ada) supaya tidak dobel, lalu tambahkan yang baru.
if [ -f "$ENV_FILE" ]; then
  TMP_FILE=$(mktemp)
  grep -v -E '^(FIREBASE_PROJECT_ID|FIREBASE_CLIENT_EMAIL|FIREBASE_PRIVATE_KEY)=' "$ENV_FILE" > "$TMP_FILE" || true
  mv "$TMP_FILE" "$ENV_FILE"
else
  touch "$ENV_FILE"
fi

{
  echo "FIREBASE_PROJECT_ID=$PROJECT_ID"
  echo "FIREBASE_CLIENT_EMAIL=$CLIENT_EMAIL"
  echo "FIREBASE_PRIVATE_KEY=$PRIVATE_KEY"
} >> "$ENV_FILE"
chmod 600 "$ENV_FILE"

echo "-> Berhasil menulis FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY ke $ENV_FILE"
echo "-> project_id: $PROJECT_ID"
echo "-> client_email: $CLIENT_EMAIL"
echo "-> Jalankan 'docker compose up -d --force-recreate be' (atau deploy.sh lagi) untuk menerapkan."
