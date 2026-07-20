#!/usr/bin/env bash
set -euo pipefail

HOME_DIR="$HOME"
ENV_FILE="$HOME_DIR/.env"
COMPOSE_FILE="$HOME_DIR/docker-compose.yml"

echo "== Bale Belajar deploy script =="

if [ -f "$ENV_FILE" ]; then
  echo "-> .env sudah ada, dilewati (tidak ditimpa)."
else
  echo "-> Membuat .env dengan secret production baru (acak)..."
  cat > "$ENV_FILE" << EOF
POSTGRES_PASSWORD=$(openssl rand -hex 24)
JWT_ACCESS_SECRET=$(openssl rand -hex 32)
JWT_REFRESH_SECRET=$(openssl rand -hex 32)
EOF
  chmod 600 "$ENV_FILE"
fi

echo "-> Menulis docker-compose.yml..."
cat > "$COMPOSE_FILE" << 'COMPOSEEOF'
services:
  postgres:
    image: postgres:16-alpine
    container_name: bale-belajar-postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: bale_belajar
    volumes:
      - bale_belajar_postgres:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d bale_belajar"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - bale-belajar

  be:
    build:
      context: ./bale-belajar-be
    container_name: bale-belajar-be
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      NODE_ENV: production
      PORT: 4000
      API_PREFIX: api/v1
      DATABASE_URL: postgresql://postgres:${POSTGRES_PASSWORD}@postgres:5432/bale_belajar
      JWT_ACCESS_SECRET: ${JWT_ACCESS_SECRET}
      JWT_REFRESH_SECRET: ${JWT_REFRESH_SECRET}
      JWT_ACCESS_EXPIRES_IN: 15m
      JWT_REFRESH_EXPIRES_IN: 7d
      FRONTEND_URL: https://app.balebelajar.com
      PROFILE_URL: https://balebelajar.com
      UPLOAD_DIR: uploads
      MAX_FILE_SIZE_MB: 5
    ports:
      - "127.0.0.1:4000:4000"
    networks:
      - bale-belajar

  fe:
    build:
      context: ./bale-belajar-fe
      args:
        NEXT_PUBLIC_API_URL: https://api.balebelajar.com/api/v1
        NEXT_PUBLIC_PROFILE_URL: https://balebelajar.com
        NEXT_PUBLIC_APP_NAME: BaleBelajar
    container_name: bale-belajar-fe
    restart: unless-stopped
    depends_on:
      - be
    ports:
      - "127.0.0.1:3000:3000"
    networks:
      - bale-belajar

  profile:
    build:
      context: ./bale-belajar-profile
      args:
        NEXT_PUBLIC_API_URL: https://api.balebelajar.com/api/v1
        NEXT_PUBLIC_APP_URL: https://app.balebelajar.com
        NEXT_PUBLIC_SITE_URL: https://balebelajar.com
        NEXT_PUBLIC_WHATSAPP_NUMBER: ""
    container_name: bale-belajar-profile
    restart: unless-stopped
    depends_on:
      - be
    ports:
      - "127.0.0.1:3001:3001"
    networks:
      - bale-belajar

networks:
  bale-belajar:

volumes:
  bale_belajar_postgres:
COMPOSEEOF

for repo in bale-belajar-be bale-belajar-fe bale-belajar-profile; do
  if [ -d "$HOME_DIR/$repo" ]; then
    echo "-> git pull $repo..."
    (cd "$HOME_DIR/$repo" && git pull --ff-only)
  else
    echo "!! Folder $repo tidak ditemukan di $HOME_DIR. Clone dulu:" >&2
    echo "   git clone https://github.com/nizamajem/$repo.git $HOME_DIR/$repo" >&2
    exit 1
  fi
done

echo "-> docker compose up -d --build (bisa beberapa menit)..."
cd "$HOME_DIR"
docker compose up -d --build

echo
echo "-> Status container:"
docker compose ps

echo
echo "== Selesai =="
