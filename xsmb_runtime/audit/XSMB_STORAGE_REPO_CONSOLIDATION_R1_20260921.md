# XSMB STORAGE & REPO CONSOLIDATION R1 — 2026-09-21

## Scope
Administrative cleanup only. No change to:
- MODEL_SPEC v2.1-LIVE-001
- M7_logistic_l2 mathematics
- frozen MASTER first 1,200 draws
- current 2026-09-21 LOCKED_PRE_DRAW forecast
- P00-P99 / TOP5 / forecast_id / data_hash

## Google Drive consolidation
Root folder: 12cglwUqellMQJj0seymzW_mgwGOxFM31

Created top-level folders:
- 00_PRODUCTION
- 01_CURRENT_EVIDENCE
- 02_SETTLEMENT_EVIDENCE
- 03_AUDIT_ARTIFACTS
- 90_ARCHIVE
- 99_LEGACY_WORKING

Canonical production workbook moved metadata-only into 00_PRODUCTION.
Drive file ID is unchanged: 1UYD3egf24aUfblq6laJE2FFLMEiZrAob.
Post-move SHA256 re-verification:
c475234e8a9acca5b6043f98164418b4b63a3fb13e7b705dd193293dc5eee9d1
Size: 344313 bytes.

XSMB_SYSTEM_HANDOFF.md remains the bootstrap pointer and is stored with the canonical workbook in 00_PRODUCTION.

Two same-named PRE_FORECAST XLSX files were checked before consolidation and their complete base64 payloads were exactly identical. One is retained in the build archive; the second is isolated under 90_ARCHIVE/DUPLICATES and explicitly renamed with DUPLICATE_EXACT__.

No Drive file was deleted during R1.

## GitHub workflow consolidation
Completed date-specific workflows were moved outside .github/workflows into:
archive/xsmb/workflows/2026-09-21/

Archived one-off workflows:
- xsmb-audit-replay-20260921.yml
- xsmb-export-handoff.yml
- xsmb-feature-attribution-20260921.yml
- xsmb-preflight-20260921.yml
- xsmb-run-forecast-20260921.yml

They remain in Git history/audit storage but are no longer executable as active workflows.

Active XSMB workflows retained:
- xsmb-runtime-gate.yml
- xsmb-r3-full-suite.yml
- xsmb-r3-to-r4-transition-test.yml
- xsmb-r4-snapshot-certification.yml
- xsmb-r4-two-command-smoke.yml

## Workflow hardening
All active XSMB third-party Actions were changed from mutable major-version tags to full immutable commit SHAs:
- actions/checkout: 11d5960a326750d5838078e36cf38b85af677262
- actions/setup-python: a26af69be951a213d495a4c3e4e4022e16d87065
- actions/upload-artifact: ea165f8d65b6e75b540449e92b4886f43607fa02
- actions/download-artifact: d3f86a106a0bac45b974a628896c90dbdf5c8093

Explicit least-privilege workflow permissions were added:
- contents: read
- actions: read only where cross-run artifact download is required

R4 smoke workflow no longer depends on an expiring Adobe short-link fixture. It now prepares a self-contained repository fixture for software-only validation.

## Post-cleanup workflow verification
All active control workflows completed successfully after hardening:

- XSMB Python 3.12 Runtime Gate — run 35553782789 — SUCCESS
- XSMB R3 Full Suite Python 3.12 — run 35553769086 — SUCCESS
- XSMB R3 to R4 Transition Test — run 35553771923 — SUCCESS
- XSMB R4 Snapshot Certification — run 35553776608 — SUCCESS
- XSMB R4 Two-Command Smoke — run 35553919297 — SUCCESS

## Current production state preserved
Forecast date: 2026-09-21
Status: LOCKED_PRE_DRAW
Runner authority: R3
TOP5: 09, 07, 34, 82, 80
Probability SHA256:
e0db1ad1c5353741d0aa1f01a615af346e9b243a58d30977398dc59335401a33

The current locked forecast was not rerun, rewritten, moved between Ledger states, or otherwise altered by this consolidation.

## Final result
STORAGE_REPO_CONSOLIDATION_R1 = PASS

Drive is now organized by authority/lifecycle.
GitHub active workflow surface is reduced to the continuing controls.
Historical evidence is preserved instead of deleted.
The canonical workbook remains byte-identical.
Model mathematics and forecast state remain unchanged.
