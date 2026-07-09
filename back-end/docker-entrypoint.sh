#!/bin/sh

set -e

CONN_STRING="$ConnectionStrings__DefaultConnection"

DB_HOST=${CONN_STRING#*Host=}
DB_HOST=${DB_HOST%%;*}

DB_PORT=${CONN_STRING#*Port=}
DB_PORT=${DB_PORT%%;*}

DB_NAME=${CONN_STRING#*Database=}
DB_NAME=${DB_NAME%%;*}

DB_USER=${CONN_STRING#*Username=}
DB_USER=${DB_USER%%;*}

DB_PASSWORD=${CONN_STRING#*Password=}
DB_PASSWORD=${DB_PASSWORD%%;*}

echo "Waiting for PostgreSQL database at ${DB_HOST}:${DB_PORT}..."

until PGPASSWORD=$DB_PASSWORD psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" -c '\q'; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done

echo "PostgreSQL is up - database will be created automatically by the application"

exec "$@"
