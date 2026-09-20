# XSMB v2.1 — Two-command production operation

MODEL_SPEC v2.1-LIVE-001 and M7_logistic_l2 remain frozen. This document defines
only the user-facing operational layer; it does not change model mathematics.

## Command 1 — UPDATE_RESULT

User-facing syntax:

    UPDATE_RESULT actual_date=YYYY-MM-DD @Tìm kiếm

Executor responsibilities:
1. Fetch the current canonical production workbook from Drive and preserve a
   pre-write version.
2. Search and verify the published XSMB result using at least two independent
   source families; persist retrieval time, raw evidence hash and extraction
   hash. Any disagreement remains fail-closed.
3. Resolve the forecast row for actual_date automatically.
4. If a pre-draw forecast exists, execute SETTLE_FORECAST and preserve all
   immutable pre-draw fields.
5. If no pre-draw forecast exists, execute OBSERVED_NO_FORECAST only; never
   backfill P00-P99/TOP5/forecast_id.
6. Append the verified draw exactly once, update metrics/checkpoints when
   applicable, commit workbook + immutable manifest transactionally, and save
   the new canonical workbook back to Drive.
7. Identical rerun is idempotent (ALREADY_SETTLED / ALREADY_INGESTED).

The user does not need to provide forecast_id, workbook path, evidence JSON or
source URLs.

## Command 2 — RUN_NEXT

User-facing syntax:

    RUN_NEXT forecast_date=YYYY-MM-DD @Tìm kiếm

Executor responsibilities:
1. Fetch the current canonical production workbook from Drive and verify its
   input SHA before write.
2. Derive data_cutoff from the latest verified draw; do not accept a manually
   invented cutoff.
3. Verify frozen SPEC hash, runner hash, immutable MASTER hash, exact Python
   3.12 runtime, 34/34 hardening evidence, data continuity and the 18:00
   Asia/Ho_Chi_Minh pre-draw cutoff.
4. Preflight fail-closed. If the same forecast already exists, return the
   existing locked record without duplicate write.
5. If PASS, run M7_logistic_l2, write one LOCKED_PRE_DRAW ledger row and one
   immutable forecast manifest, then save the new canonical workbook to Drive.
6. Never use post-draw target data and never overwrite a locked forecast.

The user does not need to provide model_spec, data_cutoff, workbook path,
manifest paths or runtime arguments.

## Authority and audit

Authoritative live state is:
- canonical production workbook,
- PROSPECTIVE_LEDGER,
- immutable manifests,
- required MODEL_ACTIVATION fields,
- externally pinned hashes/test evidence.

R3_HARDENING and CANONICAL_BRIDGE are certification/audit snapshots and are not
authoritative live-state gates.

Hash terminology:
- manifest_file_sha256 = SHA256 of serialized manifest file bytes.
- manifest_payload_sha256 = SHA256 of canonical JSON payload.

Cross-host numerical note:
Raw floating-point bitwise identity can depend on CPU/BLAS dispatch on ephemeral
hosts. Production never overwrites an existing LOCKED_PRE_DRAW record. Same-host
reproducibility remains exact; cross-host replay is audited separately for
forecast identity, ranking and numerical drift. A persistent/self-hosted
production runner is the preferred future P1 hardening if bitwise cross-host
identity is required.
