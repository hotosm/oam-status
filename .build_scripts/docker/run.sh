#!/bin/bash

PORT="${PORT:-3000}"

exec docker run \
  -e NEW_RELIC_APP_ID \
  -e NEW_RELIC_API_KEY \
  -e NEW_RELIC_LICENSE_KEY \
  -e CATALOG_URL \
  -p $PORT:3000 \
  -d oam-status