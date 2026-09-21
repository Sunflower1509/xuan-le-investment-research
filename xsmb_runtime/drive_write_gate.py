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
    file_id:str
    revision_id:str
    version:int
    content_sha256:str

    @classmethod
    def from_dict(cls,x:dict[str,Any]):
        return cls(
            file_id=str(x.get("file_id") or ""),
            revision_id=str(x.get("revision_id") or ""),
            version=int(x.get("version") or 0),
            content_sha256=str(x.get("content_sha256") or "")
        )

def sha256_file(path:Path)->str:
    h=hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda:f.read(1024*1024),b""): h.update(chunk)
    return h.hexdigest()

def validate_certification(cert:dict[str,Any])->None:
    required={
        "schema_version":"XSMB_DRIVE_WRITE_CERTIFICATION_V1",
        "status":"PASS",
        "atomic_stale_write_rejection":True,
        "single_writer_acl_verified":True,
        "github_concurrency_verified":True,
        "rollback_revision_verified":True,
        "post_write_readback_verified":True,
    }
    bad={k:{"expected":v,"observed":cert.get(k)} for k,v in required.items() if cert.get(k)!=v}
    if bad:
        raise DriveWriteGateError(f"DRIVE WRITE GATE FAIL — certification incomplete: {bad}")
    if not str(cert.get("canonical_file_id") or ""):
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — canonical_file_id missing")
    if not str(cert.get("certification_evidence_sha256") or ""):
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — certification_evidence_sha256 missing")

def pre_write_gate(expected:DriveFingerprint, observed:DriveFingerprint, cert:dict[str,Any])->None:
    validate_certification(cert)
    if cert["canonical_file_id"]!=expected.file_id or observed.file_id!=expected.file_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — file identity mismatch")
    if observed!=expected:
        raise DriveWriteGateError(f"DRIVE WRITE GATE FAIL — stale or changed remote state: expected={expected} observed={observed}")

def post_write_gate(before:DriveFingerprint, after:DriveFingerprint, expected_output_sha256:str)->None:
    if after.file_id!=before.file_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — file ID changed")
    if after.revision_id==before.revision_id:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — revision did not advance")
    if after.version<=before.version:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — Drive version did not advance")
    if after.content_sha256!=expected_output_sha256:
        raise DriveWriteGateError("DRIVE WRITE GATE FAIL — read-back SHA256 mismatch")

def main():
    p=argparse.ArgumentParser(description="Fail-closed Drive production write gate; it does not perform network writes.")
    p.add_argument("--certification",required=True)
    p.add_argument("--expected-before",required=True)
    p.add_argument("--observed-before",required=True)
    p.add_argument("--observed-after")
    p.add_argument("--expected-output")
    a=p.parse_args()
    cert=json.loads(Path(a.certification).read_text())
    expected=DriveFingerprint.from_dict(json.loads(Path(a.expected_before).read_text()))
    observed=DriveFingerprint.from_dict(json.loads(Path(a.observed_before).read_text()))
    pre_write_gate(expected,observed,cert)
    if a.observed_after or a.expected_output:
        if not (a.observed_after and a.expected_output):
            raise SystemExit("both --observed-after and --expected-output are required for post-write gate")
        after=DriveFingerprint.from_dict(json.loads(Path(a.observed_after).read_text()))
        post_write_gate(expected,after,sha256_file(Path(a.expected_output)))
    print(json.dumps({"status":"PASS","note":"Protocol gate only; network writer must separately prove atomic stale-write rejection."},indent=2))

if __name__=="__main__":
    main()
