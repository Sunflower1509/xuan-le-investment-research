#!/usr/bin/env python3
"""High-level operational wrapper for XSMB v2.1-LIVE-001 after OPS_HARDENING.

User-facing operations remain:
  1) UPDATE_RESULT -> update-result
  2) RUN_NEXT      -> run-next

This wrapper is valid only after the certified OPS_HARDENING promotion. It does
not change M7 mathematics and delegates all model/data integrity decisions to
xsmb_reference_runner_R4_ops_hardened.py.
"""
from __future__ import annotations

import argparse
import json
from datetime import date, timedelta
from typing import Any

import xsmb_reference_runner_R4_ops_hardened as core

DEFAULT_WORKBOOK = "XSMB_RECONCILIATION_R5_1200_v2_1_PRODUCTION.xlsx"
DEFAULT_MANIFEST_DIR = "manifests"
DEFAULT_TEST_EVIDENCE = "test-evidence/OPS_TEST_EVIDENCE_MANIFEST_V1.json"


def _latest_and_rows(workbook: str, manifest_dir: str) -> tuple[core.WorkbookState, str]:
    state = core.load_workbook_state(workbook, manifest_dir)
    if not state.draws.dates:
        raise core.RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "no verified draws in production workbook")
    if state.activation.get("reference_runner_sha256") != core.runner_sha256():
        raise core.RunnerError(
            "HASH MISMATCH — DO NOT FORECAST",
            "OPS_HARDENING wrapper runner does not match active workbook runner",
            {
                "workbook_runner_sha256": state.activation.get("reference_runner_sha256"),
                "wrapper_runner_sha256": core.runner_sha256(),
            },
        )
    if state.activation.get("operational_revision") != core.OPERATIONAL_REVISION:
        raise core.RunnerError(
            "IMPLEMENTATION GATE FAIL — DO NOT FORECAST",
            "unexpected operational revision for OPS_HARDENING wrapper",
            {
                "observed": state.activation.get("operational_revision"),
                "expected": core.OPERATIONAL_REVISION,
            },
        )
    return state, state.draws.dates[-1]


def update_result(
    workbook: str,
    actual_date: str,
    evidence_json: str,
    manifest_dir: str,
) -> dict[str, Any]:
    """Settle an existing forecast or ingest a missed draw without backfill."""
    actual_date = core.normalize_date(actual_date)
    state, latest = _latest_and_rows(workbook, manifest_dir)

    rows = [
        r for r in state.ledger_records
        if r.get("forecast_date") and core.normalize_date(r["forecast_date"]) == actual_date
    ]
    if len(rows) > 1:
        raise core.RunnerError(
            "HASH/STATE CONFLICT — DO NOT FORECAST",
            "multiple forecast rows exist for actual_date",
            {"actual_date": actual_date, "count": len(rows)},
        )

    if len(rows) == 1:
        result = core.settle_forecast(
            workbook_path=workbook,
            forecast_id=str(rows[0]["forecast_id"]),
            actual_date=actual_date,
            evidence_json=evidence_json,
            manifest_dir=manifest_dir,
        )
        mode = "SETTLE_EXISTING_FORECAST"
    else:
        result = core.ingest_observed(
            workbook_path=workbook,
            actual_date=actual_date,
            evidence_json=evidence_json,
            manifest_dir=manifest_dir,
            reason="MISSED_PRE_DRAW_CUTOFF",
        )
        mode = "INGEST_OBSERVED_NO_FORECAST"

    new_state, new_latest = _latest_and_rows(workbook, manifest_dir)
    next_date = (date.fromisoformat(new_latest) + timedelta(days=1)).isoformat()
    return {
        "operation": "UPDATE_RESULT",
        "mode": mode,
        "actual_date": actual_date,
        "previous_latest_verified_date": latest,
        "latest_verified_date": new_latest,
        "next_forecast_date": next_date,
        "research_state": new_state.activation.get("research_state"),
        "active_runner_sha256": core.runner_sha256(),
        "operational_revision": core.OPERATIONAL_REVISION,
        "result": result,
    }


def run_next(
    workbook: str,
    manifest_dir: str,
    test_evidence: str,
    forecast_date: str | None = None,
    schedule_evidence: str | None = None,
) -> dict[str, Any]:
    """Run the next prospective forecast from the latest verified draw."""
    state, cutoff = _latest_and_rows(workbook, manifest_dir)
    target = core.normalize_date(forecast_date) if forecast_date else (
        date.fromisoformat(cutoff) + timedelta(days=1)
    ).isoformat()

    result = core.run_forecast(
        workbook_path=workbook,
        forecast_date=target,
        data_cutoff_s=cutoff,
        manifest_dir=manifest_dir,
        test_evidence=test_evidence,
        schedule_evidence=schedule_evidence,
    )
    return {
        "operation": "RUN_NEXT",
        "forecast_date": target,
        "data_cutoff": cutoff,
        "research_state": state.activation.get("research_state"),
        "active_runner_sha256": core.runner_sha256(),
        "operational_revision": core.OPERATIONAL_REVISION,
        "result": result,
    }


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="XSMB two-command OPS_HARDENED operational wrapper")
    sub = p.add_subparsers(dest="command", required=True)

    u = sub.add_parser("update-result")
    u.add_argument("--actual-date", required=True)
    u.add_argument("--evidence-json", required=True)
    u.add_argument("--workbook", default=DEFAULT_WORKBOOK)
    u.add_argument("--manifest-dir", default=DEFAULT_MANIFEST_DIR)

    r = sub.add_parser("run-next")
    r.add_argument("--forecast-date")
    r.add_argument("--workbook", default=DEFAULT_WORKBOOK)
    r.add_argument("--manifest-dir", default=DEFAULT_MANIFEST_DIR)
    r.add_argument("--test-evidence", default=DEFAULT_TEST_EVIDENCE)
    r.add_argument("--schedule-evidence")

    return p


def main() -> None:
    args = build_parser().parse_args()
    try:
        if args.command == "update-result":
            result = update_result(args.workbook, args.actual_date, args.evidence_json, args.manifest_dir)
        elif args.command == "run-next":
            result = run_next(
                args.workbook, args.manifest_dir, args.test_evidence,
                args.forecast_date, args.schedule_evidence,
            )
        else:
            raise core.RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "unknown ops command")
        print(json.dumps(result, ensure_ascii=False, indent=2))
    except core.RunnerError as exc:
        print(json.dumps(exc.payload(), ensure_ascii=False, indent=2))
        raise SystemExit(2) from exc


if __name__ == "__main__":
    main()
