#!/usr/bin/env bash
set -euo pipefail
node --version
npm --version
npm install
npm test
npm run build
