#!/usr/bin/env python3
from __future__ import annotations
import argparse, importlib.util, json
from pathlib import Path

R4_SHA256="71703fdc5fb26d83e19a65e974074a3d8c684aa921fabc359d55d80af306f9ea"
TARGET_SETTLED_DATE="2026-09-22"

def load_runner(path:Path):
    spec=importlib.util.spec_from_file_location("xsmb_promotion_gate_runner",path)
    if spec is None or spec.loader is None: raise RuntimeError(f"cannot load runner {path}")
    mod=importlib.util.module_from_spec(spec); spec.loader.exec_module(mod); return mod

def main():
    p=argparse.ArgumentParser(description="Fail-closed post-settlement gate for OPS_HARDENING promotion.")
    p.add_argument("--workbook",required=True)
    p.add_argument("--manifest-dir",required=True)
    p.add_argument("--runner",default="xsmb_runtime/xsmb_reference_runner_R4_snapshot.py")
    p.add_argument("--required-settled-date",default=TARGET_SETTLED_DATE)
    a=p.parse_args()
    core=load_runner(Path(a.runner))
    state=core.load_workbook_state(a.workbook,a.manifest_dir)
    if core.runner_sha256()!=R4_SHA256:
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","R4 runner SHA mismatch",{"observed":core.runner_sha256(),"expected":R4_SHA256})
    if state.activation.get("reference_runner_sha256")!=R4_SHA256:
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","canonical workbook is not pinned to certified R4",{"observed":state.activation.get("reference_runner_sha256")})
    if core.canonical_master_hash(state.draws)!=core.FROZEN_MASTER_1200_SHA256:
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","frozen MASTER hash mismatch")
    if state.draws.dates[-1]!=a.required_settled_date:
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","required settlement is not the latest verified draw",{"latest":state.draws.dates[-1],"required":a.required_settled_date})
    locked=[r for r in state.ledger_records if str(r.get("record_status") or "")=="LOCKED_PRE_DRAW"]
    if locked:
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","LOCKED_PRE_DRAW forecasts still exist",locked)
    rows=[r for r in state.ledger_records if r.get("forecast_date") and core.normalize_date(r["forecast_date"])==a.required_settled_date]
    if len(rows)!=1 or str(rows[0].get("record_status") or "")!="SETTLED_VERIFIED":
        raise core.RunnerError("OPS HARDENING GATE FAIL — DO NOT PROMOTE","required forecast is not uniquely SETTLED_VERIFIED",{"rows":rows})
    out={
        "status":"PASS",
        "gate":"OPS_HARDENING_POST_SETTLEMENT_V1",
        "required_settled_date":a.required_settled_date,
        "latest_verified_draw":state.draws.dates[-1],
        "locked_pre_draw_count":0,
        "active_runner_sha256":R4_SHA256,
        "workbook_sha256":state.workbook_sha256,
        "spec_hash":core.SPEC_HASH,
        "master_content_sha256":core.FROZEN_MASTER_1200_SHA256,
        "model_math_changed":False
    }
    print(json.dumps(out,ensure_ascii=False,indent=2))

if __name__=="__main__":
    main()
