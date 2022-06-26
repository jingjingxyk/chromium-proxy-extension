#!/bin/bash

set -eux

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

cp -f proxy.js proxy.pac

python3 -m http.server 8000
