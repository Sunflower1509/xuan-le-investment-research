# XSMB Drive CAS Write Protocol V1

This protocol hardens only the operational write path. It does **not** change
MODEL_SPEC v2.1-LIVE-001, M7_logistic_l2 mathematics, the frozen MASTER, or any
previously locked forecast.

## Stable production objects

- Canonical workbook file ID: `1UYD3egf24aUfblq6laJE2FFLMEiZrAob`
- CAS lock Google Doc ID: `1DLWoCsG43VbEgrNSIYhlYw1S3x5Sct_3jeTGQMMKe-c`
- Lock protocol: `XSMB_DRIVE_CAS_LOCK_V1`
- Durable rollback anchor ID (pre-OPS_HARDENING):
  `1CsOPqGjHcJX8BSNkiEl-fLXA6MEL3GkC`
- Rollback anchor SHA256:
  `5041ffa925154a1100b4ed21aff766ef0e79ac492703af5685e153ccea65953f`

The canonical workbook remains authoritative for data. The CAS lock is
transaction authority only.

## Why a separate CAS lock is required

The connected Drive blob update action preserves the same file ID and creates a
new blob revision, but it does not expose an atomic conditional-content-write
parameter. Google Docs batchUpdate does expose `requiredRevisionId`, and a
stale revision was experimentally rejected. Therefore the lock document is used
as the compare-and-swap serialization authority for every production blob
write.

## Mandatory production-write sequence

1. **Read lock**
   - Fetch the CAS lock document and its current Docs revision ID.
   - Require `state=RELEASED`.
   - Require lock canonical file ID to equal the canonical workbook file ID.

2. **Read canonical fingerprint**
   - Download the canonical workbook.
   - Compute SHA256 from downloaded bytes.
   - List Drive revisions and record `currentRevisionId` and revision count.
   - Require SHA/revision to match the state recorded in the released lock.

3. **Verify rollback**
   - Verify the durable rollback anchor exists.
   - Download and SHA256 it.
   - Require the expected rollback-anchor SHA.
   - If a future connector exposes `keepRevisionForever`, pin the pre-write
     blob revision in addition to the independent rollback anchor.

4. **CAS acquire**
   - Use Docs batchUpdate with `writeControl.requiredRevisionId` equal to the
     revision read in step 1.
   - Set lock state to `HELD`.
   - Record a unique transaction ID, expected pre-write SHA, expected
     pre-write Drive revision and approved output SHA.
   - A stale lock revision MUST fail.

5. **Second pre-write read**
   - Re-download/re-hash the canonical workbook and list revisions again.
   - Require byte SHA, current revision and revision count to be identical to
     step 2.
   - Validate with `drive_write_gate.py`.
   - Any mismatch aborts before the Drive blob write.

6. **Exactly one blob write**
   - Replace bytes in the existing canonical Drive file ID exactly once.
   - No rename, copy-swap or second write is allowed inside the same transaction.

7. **Post-write read-back**
   - Re-download the canonical file.
   - Recompute SHA256.
   - List revisions.
   - Require:
     - file ID unchanged,
     - current revision changed,
     - revision count = pre-write count + 1,
     - previousRevisionId = pre-write currentRevisionId,
     - SHA256 = approved output SHA.
   - Any mismatch is a production fault and blocks all subsequent commands.

8. **CAS release**
   - Release the lock using the exact Docs revision returned by CAS acquire.
   - Advance epoch by exactly one.
   - Store the new canonical SHA and Drive revision.
   - Clear transaction ID/writer and return `state=RELEASED`.

9. **Failure/recovery**
   - If failure occurs before the blob write, release/abort the lock without
     changing the canonical workbook.
   - If failure occurs after the blob write, leave the system fail-closed,
     preserve evidence and recover from the verified rollback anchor under a
     separately logged CAS recovery transaction.
   - Never continue to UPDATE_RESULT or RUN_NEXT while lock state is HELD,
     ERROR or recovery is unresolved.

## Independent certification evidence

- Production CAS stale-revision rejection was tested on the real lock document.
- A non-production blob transaction proved:
  - CAS acquire/release,
  - one Drive revision created,
  - revision count delta exactly +1,
  - read-back SHA equals expected output SHA.
- Evidence is recorded in
  `xsmb_runtime/certification/DRIVE_CAS_WRITER_CERTIFICATION_V1.json`.

## GitHub Actions serialization

All future production writer workflows must use the same fixed concurrency
group (for example `xsmb-production-writer`) so GitHub cannot run two protocol
writers at the same time. The Drive CAS lock remains mandatory even when GitHub
concurrency is enabled because it protects across separate clients.

## Rollback revision limitation

Google Drive supports `keepRevisionForever` for blob revisions, but the
currently connected Drive action does not expose that parameter. Until that
capability is available, production uses a separately verified immutable
rollback-anchor copy and remains explicit about the absence of a native
keepForever pin. This limitation must never be silently reported as a pinned
Drive revision.
