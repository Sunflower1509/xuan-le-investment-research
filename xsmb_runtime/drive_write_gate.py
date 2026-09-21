#!/usr/bin/env python3
from __future__ import annotations
import argparse, hashlib, json
from dataclasses import dataclass
from pathlib import Path
from typing import Any

class DriveWriteGateError(RuntimeError):
    pass

@dataclass(frozen=True)
class DriveFingerprint:
    file_id: str
    revision_id: str
    revision_count: int
    content_sha256: str
    size_bytes: int

    @classmethod
    def from_dict(cls, x: dict[str, Any]):
        return cls(
            file_id=str(x.get("file_id") or ""),
            revision_id=str(x.get("revision_id") or ""),
            revision_count=int(x.get("revision_count") or 0),
            content_sha256=str(x.get("content_sha256") or ""),
            size_bytes=int(x.get("size_bytes") or 0),
        )

@dataclass(frozen=True)
class LockState:
    document_id: str
    state: str
    epoch: int
    transaction_id: str
    canonical_file_id: str
    canonical_workbook_sha256: str
    canonical_drive_revision_id: str

    @classmethod
    def from_dict(cls, x: dict[str, Any]):
        return cls(
            document_id=str(x.get("document_id") or ""),
            state=str(x.get("state") or ""),
            epoch=int(x.get("epoch") or 0),
            transaction_id=str(x.get("transaction_id") or ""),
            canonical_file_id=str(x.get("canonical_file_id") or ""),
            canonical_workbook_sha256=str(x.get("canonical_workbook_sha256") or ""),
            canonical_drive_revision_id=str(x.get("canonical_drive_revision_id") or ""),
        )

def sha256_file(path: Path) -> str:
    h=hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda:f.read(1024*1024),b""):
            h.update(chunk)
    return h.hexdigest()

def validate_certification(cert: dict[str, Any]) -> None:
    required={
        "schema_version":"XSMB_DRIVE_WRITE_CERTIFICATION_V2",
        "status":"PASS",
        "cas_lock_authority_certified":True,
        "stale_lock_revision_rejected":True,
        "single_writer_acl_verified":True,
        "cross_client_serialization_verified":True,
        "durable_rollback_anchor_verified":True,
        "post_write_readback_verified":True,
        "revision_count_guard_verified":True,
    }
    bad={k:{"expected":v,"observed":cert.get(k)} for k,v in required.items() if cert.get(k)!=v}
    if bad:
        raise DriveWriteGateError(f"DRIVE WRITE GATE FAIL — certification incomplete: {bad}")
    for key in ("canonical_file_id","cas_lock_document_id","rollback_anchor_file_id","certification_evidence_sha256"):
        if not str(cert.get(key) or ""):
            raise DriveWriteGateError(f"DRIVE WRITE GATE FAIL — {key} missing")

def validate_held_lock(lock: LockState, expected: DriveFingerprint, cert: dict[str, Any]) -> None:
    if lock.document_id != str(cert["cas_lock_document_id"]):
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — CAS lock document mismatch")
    if lock.state != "HELD" or not lock.transaction_id or lock.transaction_id == "NONE":
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — CAS lock is not HELD by an active transaction")
    if lock.canonical_file_id != expected.file_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — lock canonical file ID mismatch")
    if lock.canonical_workbook_sha256 != expected.content_sha256:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — lock expected workbook SHA mismatch")
    if lock.canonical_drive_revision_id != expected.revision_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — lock expected revision mismatch")

def pre_write_gate(expected: DriveFingerprint, observed: DriveFingerprint, lock: LockState, cert: dict[str, Any]) -> None:
    validate_certification(cert)
    if cert["canonical_file_id"] != expected.file_id or observed.file_id != expected.file_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — file identity mismatch")
    validate_held_lock(lock, expected, cert)
    if observed != expected:
        raise DriveWriteGateError(f"DRIVE WRITE GATE FAIL — stale or changed remote state: expected={expected} observed={observed}")

def post_write_gate(before: DriveFingerprint, after: DriveFingerprint, expected_output_sha256: str) -> None:
    if after.file_id != before.file_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — file ID changed")
    if after.revision_id == before.revision_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — revision did not advance")
    if after.revision_count != before.revision_count + 1:
        raise DriveWriteGateError(
            f"DRIVE WRITE GATE FAIL — unexpected revision delta: before={before.revision_count} after={after.revision_count}"
        )
    if after.content_sha256 != expected_output_sha256:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — read-back SHA256 mismatch")
    if after.size_bytes <= 0:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — invalid post-write size")

def main():
    p=argparse.ArgumentParser(description="Fail-closed validator for CAS-guarded Drive production writes.")
    p.add_argument("--certification",required=True)
    p.add_argument("--expected-before",required=True)
    p.add_argument("--observed-before",required=True)
    p.add_argument("--lock-state",required=True)
    p.add_argument("--observed-after")
    p.add_argument("--expected-output")
    a=p.parse_args()

    cert=json.loads(Path(a.certification).read_text())
    expected=DriveFingerprint.from_dict(json.loads(Path(a.expected_before).read_text()))
    observed=DriveFingerprint.from_dict(json.loads(Path(a.observed_before).read_text()))
    lock=LockState.from_dict(json.loads(Path(a.lock_state).read_text()))
    pre_write_gate(expected,observed,lock,cert)

    if a.observed_after or a.expected_output:
        if not (a.observed_after and a.expected_output):
            raise SystemExit("both --observed-after and --expected-output are required for post-write gate")
        after=DriveFingerprint.from_dict(json.loads(Path(a.observed_after).read_text()))
        post_write_gate(expected,after,sha256_file(Path(a.expected_output)))

    print(json.dumps({
        "status":"PASS",
        "gate":"XSMB_DRIVE_WRITE_GATE_V2",
        "transaction_id":lock.transaction_id,
        "note":"Network writer must hold the certified CAS lock and release it with requiredRevisionId after successful read-back verification."
    },indent=2))

if __name__=="__main__":
    main()
