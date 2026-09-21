#!/usr/bin/env python3
from __future__ import annotations
import ast
import hashlib
import json
import re
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
RUNTIME=ROOT/"xsmb_runtime"
WORKFLOWS=ROOT/".github"/"workflows"
ARCHIVE=ROOT/"archive"/"xsmb"

EXPECTED_R3="7c9f1bf773a484c20a09942a90a31613179963869dca30e65be8541d5bc7fd7b"
EXPECTED_R4="71703fdc5fb26d83e19a65e974074a3d8c684aa921fabc359d55d80af306f9ea"

def sha(path:Path)->str:
    return hashlib.sha256(path.read_bytes()).hexdigest()

def record(rows,check_id,name,fn):
    try:
        details=fn()
        rows.append({"id":check_id,"name":name,"status":"PASS","details":details})
    except Exception as e:
        rows.append({"id":check_id,"name":name,"status":"FAIL","error":f"{type(e).__name__}: {e}"})

def python_files(base:Path):
    return sorted(p for p in base.rglob("*.py") if "__pycache__" not in p.parts)

def parse_all(paths):
    parsed={}
    for p in paths:
        parsed[p]=ast.parse(p.read_text(encoding="utf-8"),filename=str(p))
    return parsed

def main():
    rows=[]

    def a01():
        files=python_files(RUNTIME)+python_files(ARCHIVE/"tools")
        parse_all(files)
        return {"python_files":len(files)}
    record(rows,"A01","Python syntax/AST parses for runtime and archived tools",a01)

    def a02():
        files=python_files(RUNTIME)
        offenders=[]
        for p in files:
            tree=ast.parse(p.read_text(encoding="utf-8"),filename=str(p))
            seen=set()
            # Only module-level imports define repository hygiene. Function-local
            # imports are allowed in test subprocess helpers and isolation probes.
            for n in tree.body:
                if isinstance(n,ast.Import):
                    names=[a.name for a in n.names]
                    if len(names)!=len(set(names)):
                        offenders.append(f"{p.relative_to(ROOT)} duplicate names in one import")
                    for name in names:
                        key=("import",name)
                        if key in seen: offenders.append(f"{p.relative_to(ROOT)} repeated module import {name}")
                        seen.add(key)
                elif isinstance(n,ast.ImportFrom):
                    names=[a.name for a in n.names]
                    if len(names)!=len(set(names)):
                        offenders.append(f"{p.relative_to(ROOT)} duplicate from-import names")
                    key=("from",n.module,tuple(names))
                    if key in seen: offenders.append(f"{p.relative_to(ROOT)} repeated module from-import {n.module}")
                    seen.add(key)
        assert not offenders,offenders
        return {"offenders":0}
    record(rows,"A02","Duplicate-import audit",a02)

    def a03():
        bad=[]
        rx=re.compile(r"\b(TODO|FIXME|HACK|XXX)\b")
        for p in sorted(RUNTIME.rglob("*")):
            if p.resolve()==Path(__file__).resolve():
                continue
            if p.is_file() and p.suffix in {".py",".md",".json",".txt"}:
                if rx.search(p.read_text(encoding="utf-8",errors="ignore")):
                    bad.append(str(p.relative_to(ROOT)))
        assert not bad,bad
        return {"markers":0}
    record(rows,"A03","No unresolved TODO/FIXME/HACK/XXX in runtime",a03)

    def a04():
        dated=[]
        for p in sorted(WORKFLOWS.glob("xsmb-*.yml")):
            if re.search(r"20\d{6}",p.name):
                dated.append(p.name)
        assert not dated,dated
        return {"active_xsmb_workflows":[p.name for p in sorted(WORKFLOWS.glob("xsmb-*.yml"))]}
    record(rows,"A04","No dated one-off XSMB workflow remains active",a04)

    def a05():
        dated=[p.name for p in RUNTIME.glob("*.py") if re.search(r"20\d{6}",p.name)]
        assert not dated,dated
        return {"dated_runtime_executables":0}
    record(rows,"A05","No dated historical executable remains in production runtime",a05)

    def a06():
        s=(RUNTIME/"xsmb_state_manifest.py").read_text(encoding="utf-8")
        w=(WORKFLOWS/"xsmb-ops-hardening-certification.yml").read_text(encoding="utf-8")
        assert 'source_context' in s
        assert 'FIXTURE_TEST' in s
        assert 'XSMB_CURRENT_SYSTEM_STATE_FIXTURE_V1.json' in w
        assert '--context FIXTURE_TEST' in w
        assert 'XSMB_CURRENT_SYSTEM_STATE_V1.json' not in w
        return {"fixture_state_explicit":True}
    record(rows,"A06","Fixture/live-state artifacts are explicitly separated",a06)

    def a07():
        wf=ARCHIVE/"workflows"/"2026-09-21"/"xsmb-feature-attribution-20260921.yml"
        tool=ARCHIVE/"tools"/"2026-09-21"/"xsmb_feature_attribution_20260921.py"
        assert wf.exists() and tool.exists()
        txt=wf.read_text(encoding="utf-8")
        assert "archive/xsmb/tools/2026-09-21/xsmb_feature_attribution_20260921.py" in txt
        assert "xsmb_runtime/xsmb_feature_attribution_20260921.py" not in txt
        return {"archived_tool_self_contained":True}
    record(rows,"A07","Historical attribution replay is isolated and self-contained",a07)

    def a08():
        ops=(RUNTIME/"xsmb_ops.py").read_text(encoding="utf-8")
        assert "import xsmb_reference_runner_R4_snapshot as core" in ops
        assert "xsmb_reference_runner_R4_ops_hardened as core" not in ops
        return {"pre_settlement_wrapper_remains_r4":True}
    record(rows,"A08","No premature switch of production two-command wrapper",a08)

    def a09():
        required=[
          RUNTIME/"certification"/"DRIVE_CAS_LOCK_CERTIFICATION_V1.json",
          RUNTIME/"certification"/"DRIVE_CAS_WRITER_CERTIFICATION_V1.json",
          RUNTIME/"certification"/"DRIVE_WRITE_CERTIFICATION_V2.json",
          RUNTIME/"certification"/"ROLLBACK_ANCHOR_CERTIFICATION_V1.json",
          RUNTIME/"DRIVE_CAS_WRITE_PROTOCOL.md",
          RUNTIME/"xsmb_reference_runner_R4_ops_hardened.py",
          RUNTIME/"xsmb_OPS_test_harness_py312.py",
        ]
        missing=[str(p.relative_to(ROOT)) for p in required if not p.exists()]
        assert not missing,missing
        assert sha(RUNTIME/"xsmb_reference_runner_R3_final.py")==EXPECTED_R3
        assert sha(RUNTIME/"xsmb_reference_runner_R4_snapshot.py")==EXPECTED_R4
        return {"required_anchors":len(required),"r3_r4_unchanged":True}
    record(rows,"A09","Certification anchors exist; frozen production runners unchanged",a09)

    def a10():
        h=(ROOT/"XSMB_SYSTEM_HANDOFF.md").read_text(encoding="utf-8")
        assert "Live operational state — never copy into this static handoff" in h
        forbidden=[
          "CURRENT FORECAST 2026-09-21 REMAINS R3-LOCKED",
          "Latest verified draw currently in production data:",
          "Locked-forecast workbook SHA256 re-verified after storage consolidation:"
        ]
        hit=[x for x in forbidden if x in h]
        assert not hit,hit
        return {"static_bootstrap":True}
    record(rows,"A10","Static handoff contains no copied live-state snapshot",a10)

    passed=sum(x["status"]=="PASS" for x in rows)
    failed=len(rows)-passed
    report={
      "schema_version":"XSMB_REPOSITORY_HYGIENE_AUDIT_V1",
      "status":"PASS" if failed==0 else "FAIL",
      "passed":passed,
      "failed":failed,
      "checks":rows
    }
    out=ROOT/"REPOSITORY_HYGIENE_AUDIT_V1.json"
    out.write_text(json.dumps(report,indent=2,ensure_ascii=False),encoding="utf-8")
    print(json.dumps(report,indent=2,ensure_ascii=False))
    if failed:
        raise SystemExit(2)

if __name__=="__main__":
    main()
