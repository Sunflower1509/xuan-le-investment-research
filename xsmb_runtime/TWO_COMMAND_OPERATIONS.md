# XSMB v2.1 — Two-command production operation

MODEL_SPEC v2.1-LIVE-001 and M7_logistic_l2 remain frozen. This document defines
only the user-facing operational layer; it does not change model mathematics.

## Command 1 — UPDATE_RESULT

User-facing syntax:

    UPDATE_RESULT actual_date=YYYY-MM-DD @Tìm kiếm

Executor responsibilities:
1. Acquire the certified Drive CAS production lock and fetch the current
   canonical workbook fingerprint (file ID, current revision, revision count,
   byte SHA256). Verify the durable rollback anchor before any write.
2. Search and verify the published XSMB result using at least two independent
   source families; persist retrieval time, raw evidence hash and extraction
   hash. Any disagreement remains fail-closed.
3. Resolve the forecast row for actual_date automatically.
4. If a pre-draw forecast exists, execute SETTLE_FORECAST and preserve all
   immutable pre-draw fields.
5. If no pre-draw forecast exists, execute OBSERVED_NO_FORECAST only; never
   backfill P00-P99/TOP5/forecast_id.
6. Append the verified draw exactly once, update metrics/checkpoints when
   applicable, and commit workbook + immutable manifest transactionally.
7. Before Drive write-back, re-read the canonical fingerprint and fail closed
   on any change. Replace canonical bytes exactly once, then re-download and
   require file ID unchanged, revision count +1, previous revision identity,
   and output SHA256 equality before CAS-releasing the lock.
8. Identical rerun is idempotent (ALREADY_SETTLED / ALREADY_INGESTED).

The user does not need to provide forecast_id, workbook path, evidence JSON or
source URLs.

## Command 2 — RUN_NEXT

User-facing syntax:

    RUN_NEXT forecast_date=YYYY-MM-DD @Tìm kiếm

Executor responsibilities:
1. Acquire the certified Drive CAS production lock and fetch/verify the
   canonical workbook fingerprint plus durable rollback anchor.
2. Derive data_cutoff from the latest verified draw; do not accept a manually
   invented cutoff.
3. Verify frozen SPEC hash, runner hash, immutable MASTER hash, exact Python
   3.12 runtime, 34/34 hardening evidence, data continuity and the 18:00
   Asia/Ho_Chi_Minh pre-draw cutoff.
4. Preflight fail-closed. If the same forecast already exists, return the
   existing locked record without duplicate write.
5. If PASS, run M7_logistic_l2 and write exactly one LOCKED_PRE_DRAW ledger
   row plus one immutable forecast manifest.
6. Re-read the Drive fingerprint immediately before write-back, replace
   canonical bytes exactly once, then post-read the file and revisions. Require
   revision count +1 and SHA256 equality before CAS-releasing the lock.
7. Never use post-draw target data and never overwrite a locked forecast.

The user does not need to provide model_spec, data_cutoff, workbook path,
manifest paths or runtime arguments.

## Authority and audit

Authoritative live state is:
- canonical production workbook,
- PROSPECTIVE_LEDGER,
- immutable manifests,
- MODEL_GOVERNANCE + OPERATIONAL_STATE + RUNNER_HISTORY after OPS_HARDENING
  promotion (MODEL_ACTIVATION remains read-only historical compatibility),
- externally pinned hashes/test evidence,
- the CAS lock only as transaction authority, never as data authority.

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


## OPS_HARDENING Drive write discipline

No production workbook write is valid unless it follows
`DRIVE_CAS_WRITE_PROTOCOL.md`. The stable production CAS lock document ID is
`1DLWoCsG43VbEgrNSIYhlYw1S3x5Sct_3jeTGQMMKe-c`.

Google Drive's connected blob action currently does not expose
`keepRevisionForever`. Until that changes, the system uses a byte-verified
durable rollback-anchor copy and must report this accurately rather than
claiming a native pinned revision.
