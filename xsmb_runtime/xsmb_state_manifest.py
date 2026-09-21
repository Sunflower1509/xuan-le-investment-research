#!/usr/bin/env python3
from __future__ import annotations
import argparse, importlib.util, json, sys, sys
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any

def load_runner(path: Path):
    spec=importlib.util.spec_from_file_location("xsmb_state_runner",path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"cannot load runner: {path}")
    mod=importlib.util.module_from_spec(spec)
    sys.modules[spec.name]=mod
    spec.loader.exec_module(mod)
    return mod

def build_state(core: Any, workbook: Path, manifest_dir: Path, expected_sha: str|None=None)->dict[str,Any]:
    core.recover_transactions(workbook)
    state=core.load_workbook_state(workbook,manifest_dir)
    if expected_sha and state.workbook_sha256 != expected_sha:
        raise core.RunnerError("STATE MANIFEST FAIL — DO NOT WRITE","canonical workbook SHA mismatch",{"expected":expected_sha,"observed":state.workbook_sha256})
    records=[dict(r) for r in state.ledger_records]
    locked=[r for r in records if str(r.get("record_status") or "")=="LOCKED_PRE_DRAW"]
    if len(locked)>1:
        raise core.RunnerError("STATE MANIFEST FAIL — DO NOT WRITE","more than one LOCKED_PRE_DRAW forecast",{"locked":locked})
    latest=state.draws.dates[-1]
    for r in records:
        d=core.normalize_date(r["forecast_date"]) if r.get("forecast_date") else None
        if d and d <= latest and str(r.get("record_status") or "")!="SETTLED_VERIFIED":
            raise core.RunnerError("STATE MANIFEST FAIL — DO NOT WRITE","prior forecast not settled",{"forecast_id":r.get("forecast_id"),"forecast_date":d,"record_status":r.get("record_status")})
    ledger_tail=records[-5:]
    ledger_tail_sha=core.sha256_bytes(core.canonical_json(ledger_tail).encode("utf-8"))
    lock=locked[0] if locked else None
    if lock:
        next_action=f"UPDATE_RESULT actual_date={core.normalize_date(lock['forecast_date'])}"
    else:
        next_action=f"RUN_NEXT forecast_date={(date.fromisoformat(latest)+timedelta(days=1)).isoformat()}"
    activation=state.activation
    payload={
        "schema_version":"XSMB_CURRENT_SYSTEM_STATE_V1",
        "generated_at_local":datetime.now(core.VIETNAM_TZ).isoformat(),
        "canonical_workbook_path":str(workbook.resolve()),
        "canonical_workbook_sha256":state.workbook_sha256,
        "spec_hash":core.SPEC_HASH,
        "master_content_sha256":core.FROZEN_MASTER_1200_SHA256,
        "latest_verified_draw":latest,
        "draw_count":len(state.draws.dates),
        "ledger_record_count":len(records),
        "ledger_tail_sha256":ledger_tail_sha,
        "active_runner_sha256":str(activation.get("reference_runner_sha256") or ""),
        "operational_revision":str(activation.get("operational_revision") or ""),
        "research_state":str(activation.get("research_state") or "NO VERIFIED EDGE"),
        "active_test_evidence_manifest_sha256":str(activation.get("runner_promotion_test_evidence_manifest_sha256") or activation.get("test_evidence_manifest_sha256") or ""),
        "active_certification_sha256":str(activation.get("runner_promotion_certification_sha256") or ""),
        "locked_pre_draw_count":len(locked),
        "locked_forecast_id":lock.get("forecast_id") if lock else None,
        "locked_forecast_date":core.normalize_date(lock["forecast_date"]) if lock else None,
        "locked_forecast_data_hash":lock.get("data_hash") if lock else None,
        "next_expected_action":next_action,
        "authority_note":"Derived witness only. Canonical workbook + Ledger + immutable manifests remain authoritative."
    }
    return {"artifact_type":"XSMB_CURRENT_SYSTEM_STATE_V1","manifest_sha256":core.sha256_bytes(core.canonical_json(payload).encode("utf-8")),"payload":payload}

def main():
    p=argparse.ArgumentParser()
    p.add_argument("--workbook",required=True)
    p.add_argument("--manifest-dir",required=True)
    p.add_argument("--runner",default="xsmb_runtime/xsmb_reference_runner_R4_snapshot.py")
    p.add_argument("--output",required=True)
    p.add_argument("--expected-workbook-sha256")
    a=p.parse_args()
    core=load_runner(Path(a.runner))
    obj=build_state(core,Path(a.workbook),Path(a.manifest_dir),a.expected_workbook_sha256)
    out=Path(a.output); out.parent.mkdir(parents=True,exist_ok=True)
    out.write_text(json.dumps(obj,ensure_ascii=False,indent=2),encoding="utf-8")
    check=json.loads(out.read_text(encoding="utf-8"))
    calc=core.sha256_bytes(core.canonical_json(check["payload"]).encode("utf-8"))
    if calc!=check["manifest_sha256"]:
        raise SystemExit("STATE MANIFEST SELF-HASH FAIL")
    print(json.dumps(obj,ensure_ascii=False,indent=2))

if __name__=="__main__":
    main()
