#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_dir"

site_npm_cache="${XUAN_SITE_NPM_CACHE:-/tmp/xuan-site-npm-cache}"
mkdir -p assets/css assets/js
npm --cache "$site_npm_cache" exec --yes esbuild -- src/index.js --bundle --minify --target=es2020 --outfile=assets/js/site.min.js
npm --cache "$site_npm_cache" exec --yes clean-css-cli -- --with-rebase --output assets/css/site.min.css src/index.css
