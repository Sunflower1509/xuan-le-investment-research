#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ $# -ne 1 ]]; then
  printf 'Usage: %s EMPTY_STAGE_DIRECTORY\n' "$0" >&2
  exit 2
fi

stage_dir="$(realpath -m "$1")"
if [[ "$stage_dir" == "/" || "$stage_dir" == "$repo_dir" ]]; then
  printf 'Refusing unsafe stage directory: %s\n' "$stage_dir" >&2
  exit 2
fi

if [[ -d "$stage_dir" ]] && [[ -n "$(find "$stage_dir" -mindepth 1 -print -quit)" ]]; then
  printf 'Stage directory must be empty: %s\n' "$stage_dir" >&2
  exit 2
fi

mkdir -p "$stage_dir"
cd "$repo_dir"

runtime_paths=(
  .nojekyll
  favicon.svg
  index.html
  assets
  reports
)

for path in "${runtime_paths[@]}"; do
  if [[ ! -e "$path" ]]; then
    printf 'Missing required runtime path: %s\n' "$path" >&2
    exit 1
  fi
  cp -a "$path" "$stage_dir/"
done

printf 'Prepared production artifact at %s\n' "$stage_dir"
