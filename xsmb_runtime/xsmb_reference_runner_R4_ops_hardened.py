#!/usr/bin/env python3
"""R4-OPS-HARDENED candidate runner for XSMB MODEL_SPEC v2.1-LIVE-001.

Model mathematics are frozen. This revision changes operational controls only:
- immutable 1,200-draw MASTER fingerprint
- explicit OBSERVED_NO_FORECAST provenance
- independent source-family evidence consensus
- manifest payload hashing
- fail-closed runtime/thread/spec/data gates
- file lock + write-ahead journal + same-filesystem staging + recovery
- TOCTOU compare-before-commit
- immutable forecast fields during settlement
- no backfill
- immutable fitted-model snapshot for exact post-hoc attribution
- separated MODEL_GOVERNANCE / OPERATIONAL_STATE / RUNNER_HISTORY authority
"""
from __future__ import annotations

import os

THREAD_ENV = {
    "OMP_NUM_THREADS": "1",
    "OPENBLAS_NUM_THREADS": "1",
    "MKL_NUM_THREADS": "1",
    "NUMEXPR_NUM_THREADS": "1",
}
_bad_thread_env = {
    key: os.environ.get(key)
    for key in THREAD_ENV
    if os.environ.get(key) not in (None, "1")
}
if _bad_thread_env:
    raise RuntimeError(
        "IMPLEMENTATION GATE FAIL — DO NOT FORECAST: thread environment was not "
        f"locked before numerical imports: {_bad_thread_env}"
    )
for _key, _value in THREAD_ENV.items():
    os.environ[_key] = _value

import argparse
import contextlib
import copy
import fcntl
import hashlib
import importlib.metadata
import json
import math
import platform
import shutil
import subprocess
import sys
import tempfile
import uuid
import warnings
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from pathlib import Path
from typing import Any, Iterator, Sequence
from zoneinfo import ZoneInfo

import numpy as np
import scipy
import sklearn
from openpyxl import load_workbook
from sklearn.exceptions import ConvergenceWarning
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

SPEC_CORE: dict[str, Any] = {
    "spec_version": "v2.1-LIVE-001",
    "runtime": {
        "python": "3.12.x",
        "numpy": "2.3.5",
        "scipy": "1.17.0",
        "scikit_learn": "1.8.0",
    },
    "model": "M7_logistic_l2",
    "target": "binary_presence_of_number_00_99_in_target_draw_lotto_27",
    "feature_lookback_draws": 60,
    "feature_order": [
        "presence_lag_1", "presence_lag_2", "presence_lag_3",
        "presence_lag_4", "presence_lag_5", "presence_lag_7",
        "presence_lag_14", "presence_rate_3", "presence_rate_5",
        "presence_rate_10", "presence_rate_20", "presence_rate_60",
        "multiplicity_mean_5", "multiplicity_mean_20",
        "multiplicity_mean_60", "gap_capped_60_scaled",
        "ewma_presence_60_alpha_2_over_21", "last_draw_multiplicity_scaled_27",
    ],
    "training_window": "expanding_targets_61_through_T_minus_201",
    "calibration_window": "targets_T_minus_200_through_T_minus_1",
    "preprocessing": "StandardScaler_fit_on_model_fit_segment_only",
    "solver": "lbfgs",
    "penalty": "l2",
    "C": 1.0,
    "fit_intercept": True,
    "class_weight": None,
    "random_seed": 1729,
    "tol": 1e-10,
    "max_iter": 2000,
    "calibration": "Platt_logistic_l2_C_1000000_on_200_draw_temporal_holdout",
    "probability_clip": [1e-6, 0.999999],
    "validation": "five_expanding_draw_folds_test_size_50_gap_0_reporting_only",
    "refit": "before_each_forecast_after_latest_draw_is_SETTLED_VERIFIED",
    "tie_break": "probability_descending_then_number_ascending",
    "baseline": "M0_uniform_empirical_pooled_presence_rate_on_all_eligible_training_targets",
}

EXPECTED_SPEC_HASH = "9a830c5a5926cf7e7adc310da5c4ee0f456b5304fc0b88d4b99aa48572f04bdc"
PROMPT_REVISION = "V3.1-FINAL-20260920-R2"
BASE_DRAW_COUNT = 1200
BASE_FIRST_DATE = "2023-05-27"
BASE_LAST_DATE = "2026-09-19"
FROZEN_MASTER_1200_SHA256 = "50b00fe9d85cc951c1d4f66a5f9fd8cdd36011caea826f0dd26b922ada73b9c7"
VIETNAM_TZ = ZoneInfo("Asia/Ho_Chi_Minh")
PRE_DRAW_CUTOFF = time(18, 0, 0)
CHECKPOINTS = {50, 100, 150, 250}
RUNTIME_LOCK = {
    "python_major_minor": "3.12",
    "numpy": "2.3.5",
    "scipy": "1.17.0",
    "scikit_learn": "1.8.0",
    "openpyxl_operational": "3.1.5",
}
LEDGER_HEADERS = [
    "forecast_id", "forecast_date", "generated_at_local", "data_cutoff",
    "data_hash", "model_spec_version", "system_state", "challenger_model",
    "p00_to_p99_json", "top5_ranked", "actual_lotto_27", "hits_at_5",
    "brier", "log_loss", "settled_at_local", "record_status",
]
RECON_HEADERS = [
    "draw_index", "date", "master_prizes_27", "master_lotto_27",
    "master_row_sha256", "master_lotto_multiset_sha256", "evidence_class",
    "independent_source", "independent_reference", "status",
    "conflict_flag", "unverified_flag", "notes",
]
VALID_RESEARCH_STATES = {"NO VERIFIED EDGE", "VERIFIED EDGE"}
VALID_FIRST_FORECAST_STATES = {"NOT_STARTED", "ACTIVE"}
MODEL_GOVERNANCE_SCHEMA = "XSMB_MODEL_GOVERNANCE_V1"
OPERATIONAL_STATE_SCHEMA = "XSMB_OPERATIONAL_STATE_V1"
RUNNER_HISTORY_HEADERS = [
    "Event ID", "Event Type", "From Runner SHA256", "To Runner SHA256",
    "Operational Revision", "Test Evidence SHA256", "Certification SHA256",
    "Model Math Changed", "Event Time Local", "Source Manifest SHA256",
]
SOURCE_TYPES = {"FULL_27", "PDF_LOTO_27", "THIRD_SOURCE_FULL_27"}
OBSERVED_STATUS = "SETTLED_VERIFIED_OBSERVED_NO_FORECAST"
OBSERVED_CLASS = "PROSPECTIVE_OBSERVED_NO_FORECAST"
SETTLED_CLASS = "PROSPECTIVE_SETTLED_VERIFIED"
IMPLEMENTATION_GATE_PASS = "PASS_R3_HARDENED_TEST_EVIDENCE"
TEST_SUITE_REVISION = "OPS-HARDENED-34"
OPERATIONAL_REVISION = "R4-OPS-HARDENED"
MODEL_SNAPSHOT_SCHEMA = "XSMB_MODEL_SNAPSHOT_V1"
ALL_TEST_IDS = [f"R{i}" for i in range(1, 16)] + [f"C{i:02d}" for i in range(1, 20)]
IMMUTABLE_LEDGER_FIELDS = [
    "forecast_id", "forecast_date", "generated_at_local", "data_cutoff",
    "data_hash", "model_spec_version", "system_state", "challenger_model",
    "p00_to_p99_json", "top5_ranked",
]


def canonical_json(value: Any) -> str:
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":"))


def sha256_bytes(value: bytes) -> str:
    return hashlib.sha256(value).hexdigest()


def sha256_file(path: str | Path) -> str:
    h = hashlib.sha256()
    with Path(path).open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


SPEC_HASH = sha256_bytes(canonical_json(SPEC_CORE).encode("utf-8"))


class RunnerError(RuntimeError):
    def __init__(self, status: str, reason: str, details: Any | None = None):
        super().__init__(reason)
        self.status = status
        self.reason = reason
        self.details = details

    def payload(self) -> dict[str, Any]:
        out: dict[str, Any] = {"status": self.status, "reason": self.reason}
        if self.details is not None:
            out["details"] = self.details
        return out


class AlreadyExists(RunnerError):
    pass


@dataclass(frozen=True)
class Draws:
    dates: list[str]
    lotto: list[list[str]]
    presence: np.ndarray
    multiplicity: np.ndarray


@dataclass(frozen=True)
class WorkbookState:
    draws: Draws
    activation: dict[str, Any]
    ledger_records: list[dict[str, Any]]
    workbook_sha256: str


@dataclass(frozen=True)
class SourceConsensus:
    actual_lotto_27: list[str]
    canonical_prizes_27: list[str] | None
    winning_references: list[str]
    winning_families: list[str]
    source_summary: list[dict[str, Any]]
    mismatch_observed: bool


def runner_sha256() -> str:
    return sha256_file(Path(__file__).resolve())


def probability_sha256(probabilities: Sequence[float]) -> str:
    arr = np.asarray(probabilities, dtype="<f8")
    if arr.shape != (100,):
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "probability vector is not length 100")
    return sha256_bytes(arr.tobytes(order="C"))


def runtime_manifest() -> dict[str, Any]:
    return {
        "schema_version": "RUNTIME_MANIFEST_V1",
        "python": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}",
        "numpy": np.__version__,
        "scipy": scipy.__version__,
        "scikit_learn": sklearn.__version__,
        "openpyxl_operational": importlib.metadata.version("openpyxl"),
        "os": platform.platform(),
        "architecture": platform.machine(),
        "thread_env": {k: os.environ.get(k) for k in THREAD_ENV},
        "runner_sha256": runner_sha256(),
        "spec_hash": SPEC_HASH,
        "master_content_sha256": FROZEN_MASTER_1200_SHA256,
    }


def assert_runtime() -> dict[str, Any]:
    actual = runtime_manifest()
    problems: list[str] = []
    if f"{sys.version_info.major}.{sys.version_info.minor}" != RUNTIME_LOCK["python_major_minor"]:
        problems.append(f"python={actual['python']}")
    for package in ("numpy", "scipy", "scikit_learn", "openpyxl_operational"):
        if actual[package] != RUNTIME_LOCK[package]:
            problems.append(f"{package}={actual[package]}")
    for key, value in actual["thread_env"].items():
        if value != "1":
            problems.append(f"{key}={value}")
    if problems:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "runtime lock mismatch", problems)
    return actual


def normalize_date(value: Any) -> str:
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, date):
        return value.isoformat()
    try:
        return date.fromisoformat(str(value).strip()).isoformat()
    except Exception as exc:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"invalid ISO date: {value}") from exc


def parse_lotto_27(value: Any) -> list[str]:
    if isinstance(value, list):
        values = [str(x).strip() for x in value]
    else:
        values = str(value or "").replace(",", " ").split()
    if len(values) != 27:
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", f"lotto_27 must contain 27 values, received {len(values)}")
    if any(len(x) != 2 or not x.isdigit() or int(x) > 99 for x in values):
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", "lotto_27 contains invalid values")
    return values


def parse_prizes_27(value: Any) -> list[str]:
    if isinstance(value, list):
        values = [str(x).strip() for x in value]
    else:
        values = str(value or "").replace(",", " ").split()
    if len(values) != 27 or any(not x.isdigit() for x in values):
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", "prizes_27 must contain 27 digit strings")
    return values


def make_draws(dates: list[str], lotto: list[list[str]]) -> Draws:
    if len(dates) != len(lotto):
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "draw dates and lotto lengths differ")
    presence = np.zeros((len(lotto), 100), dtype=np.float64)
    multiplicity = np.zeros((len(lotto), 100), dtype=np.float64)
    for i, values in enumerate(lotto):
        for v in values:
            multiplicity[i, int(v)] += 1.0
        presence[i] = (multiplicity[i] > 0).astype(np.float64)
    return Draws(dates, lotto, presence, multiplicity)


def data_hash(draws: Draws, count: int | None = None) -> str:
    n = len(draws.dates) if count is None else count
    payload = {
        "schema_version": "xsmb_lotto27_v1",
        "draws": [
            {"draw_index": i + 1, "date": draws.dates[i], "lotto_27": draws.lotto[i]}
            for i in range(n)
        ],
    }
    return sha256_bytes(canonical_json(payload).encode("utf-8"))


def canonical_master_hash(draws: Draws) -> str:
    if len(draws.dates) < BASE_DRAW_COUNT:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "frozen MASTER 1,200 incomplete")
    return data_hash(draws, BASE_DRAW_COUNT)


def _sheet_key_values(sheet: Any) -> dict[str, Any]:
    out: dict[str, Any] = {}
    for row in sheet.iter_rows(min_row=2, values_only=True):
        if row[0] not in (None, ""):
            out[str(row[0]).strip()] = row[1]
    return out


def _ledger_records(sheet: Any) -> list[dict[str, Any]]:
    headers = [str(sheet.cell(1, c).value or "").strip() for c in range(1, 17)]
    if headers != LEDGER_HEADERS:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "PROSPECTIVE_LEDGER schema mismatch", {"observed": headers})
    records: list[dict[str, Any]] = []
    for r in range(2, sheet.max_row + 1):
        vals = [sheet.cell(r, c).value for c in range(1, 17)]
        if vals[0] not in (None, ""):
            rec = dict(zip(headers, vals, strict=True))
            rec["_row_number"] = r
            records.append(rec)
    return records


def _find_manifest_for_observed(manifest_dir: Path, actual_date: str) -> Path:
    return manifest_dir / f"XSMB_OBSERVED_NO_FORECAST_{actual_date.replace('-', '')}.json"


def _manifest_with_hash(payload: dict[str, Any]) -> dict[str, Any]:
    return {"payload": payload, "manifest_sha256": sha256_bytes(canonical_json(payload).encode("utf-8"))}


def _validate_payload_manifest(path: Path, expected_type: str | None = None) -> dict[str, Any]:
    if not path.exists():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", f"missing manifest: {path}")
    obj = json.loads(path.read_text(encoding="utf-8"))
    if "payload" not in obj or "manifest_sha256" not in obj:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"manifest schema invalid: {path}")
    expected = sha256_bytes(canonical_json(obj["payload"]).encode("utf-8"))
    if str(obj["manifest_sha256"]) != expected:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"manifest hash mismatch: {path}")
    if expected_type and obj["payload"].get("artifact_type") != expected_type:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"manifest type mismatch: {path}")
    return obj


def _validate_activation(activation: dict[str, Any]) -> None:
    exact = {
        "proposed_version": "v2.1-LIVE-001",
        "status": "FROZEN",
        "activation_gate": "R5 PASS",
        "spec_gate": "PASS",
        "null_control": "M0_uniform",
        "prospective_challenger": "M7_logistic_l2",
        "spec_hash": EXPECTED_SPEC_HASH,
    }
    bad = {k: {"expected": v, "observed": activation.get(k)} for k, v in exact.items() if activation.get(k) != v}
    if bad:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "MODEL_GOVERNANCE/OPERATIONAL_STATE mismatch", bad)
    if activation.get("research_state") not in VALID_RESEARCH_STATES:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "invalid research_state")
    if activation.get("first_forecast_status") not in VALID_FIRST_FORECAST_STATES:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "invalid first_forecast_status")


def load_workbook_state(workbook_path: str | Path, manifest_dir: str | Path | None = None) -> WorkbookState:
    path = Path(workbook_path)
    if not path.exists():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", f"workbook not found: {path}")
    wb = load_workbook(path, read_only=False, data_only=False, keep_links=True)
    try:
        required = {"R5_SUMMARY", "RECONCILIATION_1200", "R5_GATE", "PROSPECTIVE_LEDGER", "MODEL_GOVERNANCE", "OPERATIONAL_STATE", "RUNNER_HISTORY", "SPEC_GATE", "REPRO_TEST"}
        missing = sorted(required.difference(wb.sheetnames))
        if missing:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "missing hardened workbook sheets", missing)

        governance = _sheet_key_values(wb["MODEL_GOVERNANCE"])
        operational = _sheet_key_values(wb["OPERATIONAL_STATE"])
        if governance.get("model_governance_schema_version") != MODEL_GOVERNANCE_SCHEMA:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "MODEL_GOVERNANCE schema mismatch")
        if governance.get("model_math_changed") not in (False, 0):
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "MODEL_GOVERNANCE model_math_changed must remain false")
        if operational.get("operational_state_schema_version") != OPERATIONAL_STATE_SCHEMA:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "OPERATIONAL_STATE schema mismatch")
        if operational.get("legacy_model_activation_policy") != "READ_ONLY_ARCHIVE":
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "legacy MODEL_ACTIVATION policy mismatch")

        history = wb["RUNNER_HISTORY"]
        history_headers = [str(history.cell(1, col).value or "").strip() for col in range(1, len(RUNNER_HISTORY_HEADERS) + 1)]
        if history_headers != RUNNER_HISTORY_HEADERS:
            raise RunnerError(
                "IMPLEMENTATION GATE FAIL — DO NOT FORECAST",
                "RUNNER_HISTORY schema mismatch",
                {"observed": history_headers},
            )
        history_rows = []
        for rr in range(2, history.max_row + 1):
            event_id = str(history.cell(rr, 1).value or "").strip()
            if not event_id:
                continue
            row = {
                RUNNER_HISTORY_HEADERS[col - 1]: history.cell(rr, col).value
                for col in range(1, len(RUNNER_HISTORY_HEADERS) + 1)
            }
            history_rows.append(row)
        if not history_rows:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "RUNNER_HISTORY is empty")
        event_ids = [str(row["Event ID"]) for row in history_rows]
        if len(event_ids) != len(set(event_ids)):
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "RUNNER_HISTORY contains duplicate Event ID", event_ids)
        bad_math = [
            str(row["Event ID"]) for row in history_rows
            if row["Model Math Changed"] not in (False, 0)
        ]
        if bad_math:
            raise RunnerError(
                "IMPLEMENTATION GATE FAIL — DO NOT FORECAST",
                "RUNNER_HISTORY contains model-math-changing event",
                {"event_ids": bad_math},
            )
        active_runner = str(operational.get("active_runner_sha256") or "")
        last_to_runner = str(history_rows[-1]["To Runner SHA256"] or "")
        if last_to_runner != active_runner:
            raise RunnerError(
                "IMPLEMENTATION GATE FAIL — DO NOT FORECAST",
                "RUNNER_HISTORY tail does not match active runner",
                {"history_tail": last_to_runner, "active_runner": active_runner},
            )

        activation = dict(governance)
        activation.update({
            "research_state": operational.get("research_state") or governance.get("research_state"),
            "first_forecast_status": operational.get("first_forecast_status"),
            "implementation_gate": operational.get("implementation_gate"),
            "reference_runner_sha256": operational.get("active_runner_sha256"),
            "operational_revision": operational.get("operational_revision"),
            "runner_promotion_status": operational.get("runner_promotion_status"),
            "runner_promotion_test_evidence_manifest_sha256": operational.get("active_test_evidence_manifest_sha256"),
            "runner_promotion_certification_sha256": operational.get("active_certification_sha256"),
        })
        _validate_activation(activation)

        r5_final = None
        for row in wb["R5_GATE"].iter_rows(values_only=True):
            if str(row[0] or "").strip() == "R5 FINAL":
                r5_final = str(row[3] or "").strip()
                break
        if r5_final != "PASS":
            raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"R5 FINAL is not PASS: {r5_final}")

        ledger_records = _ledger_records(wb["PROSPECTIVE_LEDGER"])
        recon = wb["RECONCILIATION_1200"]
        headers = [str(recon.cell(1, c).value or "").strip() for c in range(1, 14)]
        if headers != RECON_HEADERS:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "RECONCILIATION_1200 schema mismatch", {"observed": headers})
        dates: list[str] = []
        lotto: list[list[str]] = []
        for r in range(2, recon.max_row + 1):
            idx = recon.cell(r, 1).value
            if idx in (None, ""):
                continue
            expected = len(dates) + 1
            if int(idx) != expected:
                raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"non-contiguous draw_index at row {r}")
            d = normalize_date(recon.cell(r, 2).value)
            if dates and date.fromisoformat(d) <= date.fromisoformat(dates[-1]):
                raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"non-increasing date at draw {idx}")
            vals = parse_lotto_27(recon.cell(r, 4).value)
            expected_row_hash = sha256_bytes(canonical_json({"draw_index": expected, "date": d, "lotto_27": vals}).encode("utf-8"))
            expected_multi_hash = sha256_bytes(canonical_json(sorted(vals)).encode("utf-8"))
            if str(recon.cell(r, 5).value or "") != expected_row_hash or str(recon.cell(r, 6).value or "") != expected_multi_hash:
                raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"reconciliation row hash mismatch at draw {idx}")
            if recon.cell(r, 11).value not in (0, False, None) or recon.cell(r, 12).value not in (0, False, None):
                raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"unresolved reconciliation flag at draw {idx}")
            if expected > BASE_DRAW_COUNT:
                status = str(recon.cell(r, 10).value or "")
                eclass = str(recon.cell(r, 7).value or "")
                forecast_rows = [x for x in ledger_records if x.get("forecast_date") and normalize_date(x["forecast_date"]) == d]
                is_forecast_backed = status == "SETTLED_VERIFIED" and eclass == SETTLED_CLASS and len(forecast_rows) == 1 and str(forecast_rows[0].get("record_status") or "") == "SETTLED_VERIFIED"
                is_observed = status == OBSERVED_STATUS and eclass == OBSERVED_CLASS and len(forecast_rows) == 0
                if is_forecast_backed:
                    if parse_lotto_27(forecast_rows[0].get("actual_lotto_27")) != vals:
                        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"Ledger actual differs from appended draw {d}")
                if is_observed:
                    if manifest_dir is None:
                        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", f"manifest_dir required to verify observed-no-forecast draw {d}")
                    m = _validate_payload_manifest(_find_manifest_for_observed(Path(manifest_dir), d), "XSMB_OBSERVED_NO_FORECAST_V1")
                    p = m["payload"]
                    if p.get("actual_date") != d or p.get("lotto_27") != vals or p.get("forecast_row_exists") is not False or p.get("p00_p99_generated") is not False or p.get("top5_generated") is not False:
                        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"observed-no-forecast manifest mismatch for {d}")
                if not (is_forecast_backed or is_observed):
                    raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", f"appended draw {idx} provenance invalid")
            dates.append(d)
            lotto.append(vals)
    finally:
        wb.close()

    draws = make_draws(dates, lotto)
    if len(draws.dates) < BASE_DRAW_COUNT or draws.dates[0] != BASE_FIRST_DATE or draws.dates[BASE_DRAW_COUNT - 1] != BASE_LAST_DATE:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "base MASTER boundary mismatch")
    if canonical_master_hash(draws) != FROZEN_MASTER_1200_SHA256:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "immutable MASTER 1,200 fingerprint mismatch", {"expected": FROZEN_MASTER_1200_SHA256, "observed": canonical_master_hash(draws)})
    return WorkbookState(draws, activation, ledger_records, sha256_file(path))


def _feature_vector(draws: Draws, target_index_1based: int, number: int) -> list[float]:
    t = target_index_1based - 1
    if target_index_1based < 61 or t > len(draws.dates):
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", "target requires 60 prior draws and cannot exceed next draw")
    p = draws.presence
    m = draws.multiplicity
    prior = p[:t, number]
    mult = m[:t, number]
    feat = [float(prior[-lag]) for lag in (1, 2, 3, 4, 5, 7, 14)]
    feat += [float(prior[-w:].mean()) for w in (3, 5, 10, 20, 60)]
    feat += [float(mult[-w:].mean()) for w in (5, 20, 60)]
    recent60 = prior[-60:]
    hits = np.flatnonzero(recent60 > 0)
    gap = 60 if len(hits) == 0 else 59 - int(hits[-1])
    feat.append(float(min(gap, 60)) / 60.0)
    alpha = 2.0 / 21.0
    ewma = 0.0
    for x in recent60:
        ewma = alpha * float(x) + (1.0 - alpha) * ewma
    feat.append(float(ewma))
    feat.append(float(mult[-1]) / 27.0)
    return feat


def feature_matrix(draws: Draws, target_index_1based: int) -> np.ndarray:
    matrix = np.asarray([_feature_vector(draws, target_index_1based, j) for j in range(100)], dtype=np.float64)
    if matrix.shape != (100, 18) or not np.isfinite(matrix).all():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "feature matrix is invalid")
    return matrix


def panel(draws: Draws, targets: Sequence[int]) -> tuple[np.ndarray, np.ndarray]:
    target_list = list(targets)
    if not target_list:
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", "empty training target range")
    xs = [feature_matrix(draws, t) for t in target_list]
    ys = [draws.presence[t - 1] for t in target_list]
    return np.vstack(xs), np.concatenate(ys)


def _fit_logistic(x: np.ndarray, y: np.ndarray, *, C: float, tol: float, max_iter: int) -> LogisticRegression:
    if np.unique(y).size != 2:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "logistic target does not contain both classes")
    with warnings.catch_warnings(record=True) as caught:
        warnings.filterwarnings("ignore", category=FutureWarning, message=".*penalty.*deprecated.*")
        warnings.simplefilter("always", ConvergenceWarning)
        model = LogisticRegression(solver="lbfgs", penalty="l2", C=C, fit_intercept=True, class_weight=None, random_state=1729, tol=tol, max_iter=max_iter)
        model.fit(x, y)
    if any(issubclass(w.category, ConvergenceWarning) for w in caught):
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "logistic convergence warning")
    if not np.isfinite(model.coef_).all() or not np.isfinite(model.intercept_).all():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "non-finite logistic coefficients")
    return model


def _fit_components(draws: Draws, target_index_1based: int) -> tuple[StandardScaler, LogisticRegression, LogisticRegression]:
    if target_index_1based < 262:
        raise RunnerError("SPEC INCOMPLETE — DO NOT FORECAST", "target index < 262")
    fit_targets = list(range(61, target_index_1based - 200))
    cal_targets = list(range(target_index_1based - 200, target_index_1based))
    x_fit, y_fit = panel(draws, fit_targets)
    x_cal, y_cal = panel(draws, cal_targets)
    scaler = StandardScaler(with_mean=True, with_std=True).fit(x_fit)
    if not np.isfinite(scaler.mean_).all() or not np.isfinite(scaler.scale_).all():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "scaler parameters are non-finite")
    base = _fit_logistic(scaler.transform(x_fit), y_fit, C=1.0, tol=1e-10, max_iter=2000)
    cal_logits = base.decision_function(scaler.transform(x_cal)).reshape(-1, 1)
    calibrator = _fit_logistic(cal_logits, y_cal, C=1_000_000.0, tol=1e-12, max_iter=1000)
    return scaler, base, calibrator


def _predict_components(draws: Draws, target_index_1based: int, scaler: StandardScaler, base: LogisticRegression, calibrator: LogisticRegression) -> np.ndarray:
    x = feature_matrix(draws, target_index_1based)
    logits = base.decision_function(scaler.transform(x)).reshape(-1, 1)
    p = calibrator.predict_proba(logits)[:, 1]
    p = np.clip(p, 1e-6, 1 - 1e-6)
    if p.shape != (100,) or not np.isfinite(p).all():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "invalid probability vector")
    return p


def _model_snapshot(
    scaler: StandardScaler,
    base: LogisticRegression,
    calibrator: LogisticRegression,
    target_index_1based: int,
) -> dict[str, Any]:
    snapshot = {
        "schema_version": MODEL_SNAPSHOT_SCHEMA,
        "operational_revision": OPERATIONAL_REVISION,
        "target_index": int(target_index_1based),
        "feature_order": list(SPEC_CORE["feature_order"]),
        "scaler_mean": [float(x) for x in np.asarray(scaler.mean_, dtype=np.float64)],
        "scaler_scale": [float(x) for x in np.asarray(scaler.scale_, dtype=np.float64)],
        "base_coef": [float(x) for x in np.asarray(base.coef_[0], dtype=np.float64)],
        "base_intercept": float(base.intercept_[0]),
        "base_classes": [int(x) for x in np.asarray(base.classes_)],
        "base_n_iter": [int(x) for x in np.asarray(base.n_iter_)],
        "calibrator_coef": [float(x) for x in np.asarray(calibrator.coef_[0], dtype=np.float64)],
        "calibrator_intercept": float(calibrator.intercept_[0]),
        "calibrator_classes": [int(x) for x in np.asarray(calibrator.classes_)],
        "calibrator_n_iter": [int(x) for x in np.asarray(calibrator.n_iter_)],
    }
    numeric = (
        snapshot["scaler_mean"] + snapshot["scaler_scale"] +
        snapshot["base_coef"] + [snapshot["base_intercept"]] +
        snapshot["calibrator_coef"] + [snapshot["calibrator_intercept"]]
    )
    if len(snapshot["scaler_mean"]) != 18 or len(snapshot["scaler_scale"]) != 18 or len(snapshot["base_coef"]) != 18:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "model snapshot shape mismatch")
    if not np.isfinite(np.asarray(numeric, dtype=np.float64)).all():
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "model snapshot contains non-finite values")
    return snapshot


def fit_predict(draws: Draws, target_index_1based: int) -> dict[str, Any]:
    scaler, base, cal = _fit_components(draws, target_index_1based)
    p = _predict_components(draws, target_index_1based, scaler, base, cal)
    order = sorted(range(100), key=lambda j: (-float(p[j]), j))
    _, y_all = panel(draws, list(range(61, target_index_1based)))
    pmap = {f"{j:02d}": float(p[j]) for j in range(100)}
    snapshot = _model_snapshot(scaler, base, cal, target_index_1based)
    snapshot_sha = sha256_bytes(canonical_json(snapshot).encode("utf-8"))
    return {
        "spec_version": SPEC_CORE["spec_version"], "spec_hash": SPEC_HASH,
        "target_index": target_index_1based, "data_cutoff_index": target_index_1based - 1,
        "data_cutoff": draws.dates[target_index_1based - 2],
        "data_hash": data_hash(draws, target_index_1based - 1), "model": "M7_logistic_l2",
        "m0_uniform": float(y_all.mean()), "probabilities": pmap,
        "probability_sha256": probability_sha256(list(pmap.values())),
        "top5": [f"{j:02d}" for j in order[:5]],
        "fit_target_range": [61, target_index_1based - 201],
        "calibration_target_range": [target_index_1based - 200, target_index_1based - 1],
        "model_snapshot": snapshot,
        "model_snapshot_sha256": snapshot_sha,
    }


def brier(y: np.ndarray, p: np.ndarray) -> float:
    return float(np.mean((p - y) ** 2))


def log_loss(y: np.ndarray, p: np.ndarray) -> float:
    q = np.clip(p, 1e-6, 1 - 1e-6)
    return float(-np.mean(y * np.log(q) + (1 - y) * np.log(1 - q)))


def ece10(y: np.ndarray, p: np.ndarray) -> float:
    total = len(y)
    result = 0.0
    for b in range(10):
        lo, hi = b / 10.0, (b + 1) / 10.0
        mask = (p >= lo) & ((p < hi) if b < 9 else (p <= hi))
        if mask.any():
            result += float(mask.sum()) / total * abs(float(y[mask].mean()) - float(p[mask].mean()))
    return result


def time_series_validation(draws: Draws, live_target_index: int) -> dict[str, Any]:
    if live_target_index < 712:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "five-fold validation requires target index >= 712")
    folds: list[dict[str, Any]] = []
    pooled_y: list[np.ndarray] = []
    pooled_p: list[np.ndarray] = []
    for fold in range(5):
        start = live_target_index - 450 + 50 * fold
        stop = start + 49
        scaler, base, cal = _fit_components(draws, start)
        ys: list[np.ndarray] = []
        ps: list[np.ndarray] = []
        hits = 0
        for t in range(start, stop + 1):
            p = _predict_components(draws, t, scaler, base, cal)
            y = draws.presence[t - 1]
            ranking = sorted(range(100), key=lambda j: (-float(p[j]), j))[:5]
            hits += int(y[ranking].sum())
            ys.append(y)
            ps.append(p)
        yv, pv = np.concatenate(ys), np.concatenate(ps)
        pooled_y.append(yv)
        pooled_p.append(pv)
        folds.append({
            "fold": fold + 1,
            "fit_target_range": [61, start - 201],
            "calibration_target_range": [start - 200, start - 1],
            "test_target_range": [start, stop],
            "brier": brier(yv, pv), "log_loss": log_loss(yv, pv),
            "hits_at_5_total": hits, "hits_at_5_mean": hits / 50.0,
            "ece10": ece10(yv, pv), "mean_bias_abs": abs(float(pv.mean()) - float(yv.mean())),
        })
    all_y, all_p = np.concatenate(pooled_y), np.concatenate(pooled_p)
    return {
        "mode": "REPORTING_ONLY_NO_TUNING",
        "live_target_index": live_target_index,
        "fold_definition": "s_i=T-450+50*i; fit=61..s_i-201; cal=s_i-200..s_i-1; test=s_i..s_i+49",
        "folds": folds,
        "pooled": {"observations": int(len(all_y)), "brier": brier(all_y, all_p), "log_loss": log_loss(all_y, all_p), "ece10": ece10(all_y, all_p), "mean_bias_abs": abs(float(all_p.mean()) - float(all_y.mean()))},
    }


def _read_evidence(evidence_json: str | Path, actual_date: str) -> tuple[SourceConsensus | None, dict[str, Any]]:
    raw = json.loads(Path(evidence_json).read_text(encoding="utf-8"))
    if raw.get("actual_date") != actual_date or not isinstance(raw.get("sources"), list):
        raise RunnerError("SETTLEMENT_BLOCKED", "evidence schema/date mismatch")
    norm: list[dict[str, Any]] = []
    groups: dict[Any, list[dict[str, Any]]] = defaultdict(list)
    refs: set[str] = set()
    families: set[str] = set()
    for source in raw["sources"]:
        st = str(source.get("source_type") or "")
        ref = str(source.get("reference") or "").strip()
        fam = str(source.get("source_family") or "").strip()
        if st not in SOURCE_TYPES or not ref or not fam:
            raise RunnerError("SETTLEMENT_BLOCKED", "invalid evidence source")
        if ref in refs:
            raise RunnerError("SETTLEMENT_BLOCKED", "duplicate evidence reference")
        refs.add(ref)
        values = parse_lotto_27(source.get("lotto_27"))
        prizes = parse_prizes_27(source.get("prizes_27")) if source.get("prizes_27") is not None else None
        if prizes is not None:
            derived = [x[-2:].zfill(2) for x in prizes]
            if derived != values:
                raise RunnerError("SETTLEMENT_BLOCKED", "FULL_27 prize-to-lotto extraction mismatch")
        retrieved_at = str(source.get("retrieved_at") or "").strip()
        raw_sha = str(source.get("raw_evidence_sha256") or "").strip().lower()
        extract_sha = str(source.get("extract_sha256") or "").strip().lower()
        if not retrieved_at or len(raw_sha) != 64 or len(extract_sha) != 64 or any(c not in "0123456789abcdef" for c in raw_sha + extract_sha):
            raise RunnerError("SETTLEMENT_BLOCKED", "evidence provenance lacks retrieved_at/raw_evidence_sha256/extract_sha256")
        expected_extract_sha = sha256_bytes(canonical_json({"prizes_27": prizes, "lotto_27": values}).encode("utf-8"))
        if extract_sha != expected_extract_sha:
            raise RunnerError("SETTLEMENT_BLOCKED", "evidence extract_sha256 mismatch")
        item = {
            "source_type": st, "reference": ref, "source_family": fam,
            "lotto_27": values, "prizes_27": prizes,
            "canonical_order": bool(source.get("canonical_order", False)),
            "retrieved_at": retrieved_at,
            "raw_evidence_sha256": raw_sha,
            "extract_sha256": extract_sha,
        }
        norm.append(item)
        groups[tuple(sorted(Counter(values).items()))].append(item)
        families.add(fam)
    if len(norm) < 2 or len(families) < 2:
        return None, {"reason": "insufficient independent source families", "sources": norm}
    ranked = sorted(groups.values(), key=len, reverse=True)
    mismatch = len(groups) > 1
    if mismatch and len(norm) < 3:
        return None, {"reason": "source mismatch requires third source", "sources": norm}
    if not ranked or len({x["source_family"] for x in ranked[0]}) < 2:
        return None, {"reason": "winning multiset lacks two independent source families", "sources": norm}
    if len(ranked) > 1 and len(ranked[0]) == len(ranked[1]):
        return None, {"reason": "ambiguous tied consensus", "sources": norm}
    winning = ranked[0]
    ordered = [x for x in winning if x["canonical_order"] and x["source_type"] in {"FULL_27", "THIRD_SOURCE_FULL_27"} and x["prizes_27"]]
    if not ordered:
        return None, {"reason": "no canonical FULL_27 source", "sources": norm}
    primary = ordered[0]
    return SourceConsensus(primary["lotto_27"], primary["prizes_27"], [x["reference"] for x in winning], sorted({x["source_family"] for x in winning}), norm, mismatch), {"sources": norm}


@contextlib.contextmanager
def workbook_lock(workbook_path: str | Path, exclusive: bool = True) -> Iterator[None]:
    lock_path = Path(str(workbook_path) + ".lock")
    lock_path.parent.mkdir(parents=True, exist_ok=True)
    with lock_path.open("a+") as f:
        try:
            fcntl.flock(f.fileno(), (fcntl.LOCK_EX if exclusive else fcntl.LOCK_SH) | fcntl.LOCK_NB)
        except BlockingIOError as exc:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "workbook lock unavailable") from exc
        try:
            yield
        finally:
            fcntl.flock(f.fileno(), fcntl.LOCK_UN)


def _copy_row_style(sheet: Any, src: int, dst: int, cols: int) -> None:
    for c in range(1, cols + 1):
        s, d = sheet.cell(src, c), sheet.cell(dst, c)
        if s.has_style:
            d._style = copy.copy(s._style)
            d.font = copy.copy(s.font)
            d.fill = copy.copy(s.fill)
            d.border = copy.copy(s.border)
            d.alignment = copy.copy(s.alignment)
            d.number_format = s.number_format
            d.protection = copy.copy(s.protection)


def _next_data_row(sheet: Any) -> int:
    r = 2
    while sheet.cell(r, 1).value not in (None, ""):
        r += 1
    return r


def _update_activation_field(wb: Any, key: str, value: Any) -> None:
    mapping = {
        "reference_runner_sha256": "active_runner_sha256",
        "runner_promotion_test_evidence_manifest_sha256": "active_test_evidence_manifest_sha256",
        "runner_promotion_certification_sha256": "active_certification_sha256",
    }
    target = mapping.get(key, key)
    if "OPERATIONAL_STATE" not in wb.sheetnames:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "OPERATIONAL_STATE missing for hardened runner")
    sh = wb["OPERATIONAL_STATE"]
    for r in range(2, sh.max_row + 1):
        if str(sh.cell(r, 1).value or "") == target:
            sh.cell(r, 2).value = value
            return
    r = sh.max_row + 1
    sh.cell(r, 1).value = target
    sh.cell(r, 2).value = value
    sh.cell(r, 3).value = "ACTIVE"
    sh.cell(r, 4).value = "Written by hardened operational runner."


def _txn_root(path: Path) -> Path:
    return path.parent / ".xsmb-transactions"


def _journal_write(path: Path, data: dict[str, Any]) -> None:
    tmp = path.with_name(path.name + f".tmp-{uuid.uuid4().hex}")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    os.replace(tmp, path)


def _fault(point: str) -> None:
    if os.environ.get("XSMB_FAULT_POINT") == point:
        raise RuntimeError(f"FAULT_INJECTION:{point}")


def recover_transactions(workbook_path: str | Path) -> list[dict[str, Any]]:
    path = Path(workbook_path)
    root = _txn_root(path)
    if not root.exists():
        return []
    recovered: list[dict[str, Any]] = []
    for journal_path in sorted(root.glob("*.journal.json")):
        j = json.loads(journal_path.read_text(encoding="utf-8"))
        if j.get("workbook_path") != str(path.resolve()) or j.get("state") in {"COMMITTED", "ROLLED_BACK"}:
            continue
        stage_wb = Path(j["staged_workbook"])
        stage_manifest = Path(j["staged_manifest"])
        final_manifest = Path(j["final_manifest"])
        backup = Path(j["backup_workbook"])
        current_hash = sha256_file(path) if path.exists() else None
        expected_before = j.get("input_workbook_sha256")
        expected_after = j.get("staged_workbook_sha256")
        manifest_hash = j.get("manifest_file_sha256")
        try:
            if current_hash == expected_after:
                if not final_manifest.exists():
                    if not stage_manifest.exists():
                        raise RunnerError("RECOVERY FAIL — DO NOT FORECAST", "staged manifest missing during recovery", j)
                    final_manifest.parent.mkdir(parents=True, exist_ok=True)
                    os.replace(stage_manifest, final_manifest)
                if sha256_file(final_manifest) != manifest_hash:
                    raise RunnerError("RECOVERY FAIL — DO NOT FORECAST", "final manifest hash mismatch during recovery", j)
                j["state"] = "COMMITTED"
                j["recovered_at"] = datetime.now(VIETNAM_TZ).isoformat()
                _journal_write(journal_path, j)
                recovered.append({"transaction_id": j["transaction_id"], "action": "COMPLETED_COMMIT"})
            elif current_hash == expected_before:
                # No workbook replacement occurred. Roll back staged files.
                if final_manifest.exists():
                    final_manifest.unlink()
                for p in (stage_wb, stage_manifest):
                    if p.exists():
                        p.unlink()
                j["state"] = "ROLLED_BACK"
                j["recovered_at"] = datetime.now(VIETNAM_TZ).isoformat()
                _journal_write(journal_path, j)
                recovered.append({"transaction_id": j["transaction_id"], "action": "ROLLED_BACK"})
            elif backup.exists() and sha256_file(backup) == expected_before:
                shutil.copy2(backup, path)
                if final_manifest.exists():
                    final_manifest.unlink()
                j["state"] = "ROLLED_BACK"
                j["recovered_at"] = datetime.now(VIETNAM_TZ).isoformat()
                _journal_write(journal_path, j)
                recovered.append({"transaction_id": j["transaction_id"], "action": "RESTORED_BACKUP"})
            else:
                raise RunnerError("RECOVERY FAIL — DO NOT FORECAST", "cannot reconcile interrupted transaction", j)
        except Exception:
            raise
    return recovered


def commit_workbook_and_manifest(workbook_path: str | Path, wb: Any, manifest_path: str | Path, manifest_obj: dict[str, Any], expected_before_sha: str, operation: str) -> dict[str, Any]:
    path = Path(workbook_path)
    manifest_path = Path(manifest_path)
    if manifest_path.exists():
        existing = json.loads(manifest_path.read_text(encoding="utf-8"))
        if existing != manifest_obj:
            raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", f"manifest already exists with different content: {manifest_path}")
    if sha256_file(path) != expected_before_sha:
        raise RunnerError("STATE CHANGED DURING RUN — ABORT — NO LEDGER WRITE", "workbook changed since preflight")

    root = _txn_root(path)
    root.mkdir(parents=True, exist_ok=True)
    txid = uuid.uuid4().hex
    stage_dir = Path(tempfile.mkdtemp(prefix=f".xsmb-stage-{txid}-", dir=str(path.parent)))
    stage_wb = stage_dir / path.name
    stage_manifest = stage_dir / manifest_path.name
    backup = stage_dir / (path.name + ".bak")
    journal_path = root / f"{txid}.journal.json"
    shutil.copy2(path, backup)
    journal = {
        "transaction_id": txid, "operation": operation,
        "started_at": datetime.now(VIETNAM_TZ).isoformat(),
        "workbook_path": str(path.resolve()), "final_manifest": str(manifest_path.resolve()),
        "input_workbook_sha256": expected_before_sha,
        "staged_workbook": str(stage_wb.resolve()), "staged_manifest": str(stage_manifest.resolve()),
        "backup_workbook": str(backup.resolve()), "state": "PREPARED",
        "runner_sha256": runner_sha256(), "spec_hash": SPEC_HASH,
    }
    _journal_write(journal_path, journal)
    wb.save(stage_wb)
    stage_manifest.write_text(json.dumps(manifest_obj, ensure_ascii=False, indent=2), encoding="utf-8")
    check = load_workbook(stage_wb, read_only=True, data_only=False)
    check.close()
    _validate_payload_manifest(stage_manifest)
    journal["staged_workbook_sha256"] = sha256_file(stage_wb)
    journal["manifest_file_sha256"] = sha256_file(stage_manifest)
    journal["state"] = "STAGED"
    _journal_write(journal_path, journal)
    _fault("AFTER_STAGE")
    if sha256_file(path) != expected_before_sha:
        journal["state"] = "ROLLING_BACK"
        _journal_write(journal_path, journal)
        shutil.rmtree(stage_dir, ignore_errors=True)
        journal["state"] = "ROLLED_BACK"
        _journal_write(journal_path, journal)
        raise RunnerError("STATE CHANGED DURING RUN — ABORT — NO LEDGER WRITE", "workbook changed between staging and commit")
    journal["state"] = "VERIFIED"
    _journal_write(journal_path, journal)
    journal["state"] = "COMMITTING"
    _journal_write(journal_path, journal)
    os.replace(stage_wb, path)
    _fault("AFTER_WORKBOOK_REPLACE")
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    os.replace(stage_manifest, manifest_path)
    _fault("AFTER_MANIFEST_REPLACE")
    if sha256_file(path) != journal["staged_workbook_sha256"] or sha256_file(manifest_path) != journal["manifest_file_sha256"]:
        if backup.exists():
            shutil.copy2(backup, path)
        if manifest_path.exists():
            manifest_path.unlink()
        journal["state"] = "ROLLED_BACK"
        _journal_write(journal_path, journal)
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "post-commit verification failed")
    journal["state"] = "COMMITTED"
    journal["committed_at"] = datetime.now(VIETNAM_TZ).isoformat()
    _journal_write(journal_path, journal)
    shutil.rmtree(stage_dir, ignore_errors=True)
    return {"transaction_id": txid, "workbook_sha256": sha256_file(path), "manifest_sha256": sha256_file(manifest_path), "journal": str(journal_path)}


def _validate_test_evidence(path: Path, expected_runner_sha: str) -> dict[str, Any]:
    m = _validate_payload_manifest(path, "TEST_EVIDENCE_MANIFEST_V1")
    p = m["payload"]
    if p.get("spec_hash") != SPEC_HASH or p.get("runner_sha256") != expected_runner_sha or p.get("master_content_sha256") != FROZEN_MASTER_1200_SHA256:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "test evidence hash anchors mismatch")
    if p.get("test_suite_revision") != TEST_SUITE_REVISION:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "test evidence revision mismatch")
    if p.get("runtime_exact_production_match") is not True:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "test evidence was not executed under the exact frozen production runtime")
    if int(p.get("passed", -1)) != 34 or int(p.get("failed", -1)) != 0:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "test evidence is not 34/34")
    tests = p.get("tests") or []
    status = {str(t.get("id")): str(t.get("status")) for t in tests if isinstance(t, dict)}
    if any(status.get(tid) != "PASS" for tid in ALL_TEST_IDS):
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "test evidence missing PASS assertions")
    return m


def validate_schedule_evidence(schedule_evidence: str | Path | None, data_cutoff: str, forecast_date: str) -> dict[str, Any] | None:
    cutoff_date = date.fromisoformat(data_cutoff)
    target_date = date.fromisoformat(forecast_date)
    gap_dates = [(cutoff_date + timedelta(days=i)).isoformat() for i in range(1, (target_date - cutoff_date).days)]
    if not gap_dates:
        return None
    if schedule_evidence is None:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "forecast date skips calendar dates but no schedule evidence was supplied", {"required_no_draw_dates": gap_dates})
    raw = json.loads(Path(schedule_evidence).read_text(encoding="utf-8"))
    if normalize_date(raw.get("data_cutoff")) != data_cutoff or normalize_date(raw.get("forecast_date")) != forecast_date:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "schedule evidence boundary mismatch")
    observed = sorted(normalize_date(x) for x in raw.get("no_draw_dates", []))
    if observed != gap_dates or not str(raw.get("source_reference") or "").strip():
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "schedule evidence incomplete")
    return {"schema_version": "XSMB_SCHEDULE_EVIDENCE_V1", "no_draw_dates": observed, "source_reference": raw["source_reference"], "evidence_file_sha256": sha256_file(schedule_evidence)}


def preflight_forecast(workbook_path: str | Path, forecast_date: str, data_cutoff_s: str, manifest_dir: str | Path, test_evidence: str | Path, now: datetime | None = None, schedule_evidence: str | Path | None = None, skip_runtime: bool = False, skip_test_evidence: bool = False) -> dict[str, Any]:
    if SPEC_HASH != EXPECTED_SPEC_HASH:
        raise RunnerError("HASH MISMATCH — DO NOT FORECAST", "SPEC_CORE hash mismatch")
    runtime = runtime_manifest() if skip_runtime else assert_runtime()
    recover_transactions(workbook_path)
    mdir = Path(manifest_dir)
    state = load_workbook_state(workbook_path, mdir)
    rsha = runner_sha256()
    if state.activation.get("reference_runner_sha256") != rsha:
        raise RunnerError("HASH MISMATCH — DO NOT FORECAST", "runner SHA mismatch", {"expected": state.activation.get("reference_runner_sha256"), "observed": rsha})
    if state.activation.get("implementation_gate") != IMPLEMENTATION_GATE_PASS:
        raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "implementation gate not PASS")
    if not skip_test_evidence:
        _validate_test_evidence(Path(test_evidence), rsha)
    forecast_date = normalize_date(forecast_date)
    data_cutoff_s = normalize_date(data_cutoff_s)
    if forecast_date in state.draws.dates:
        raise RunnerError("TARGET LEAKAGE — DO NOT FORECAST", "target result already present")
    if state.draws.dates[-1] != data_cutoff_s:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "data_cutoff is not the latest verified draw", {"latest": state.draws.dates[-1]})
    if date.fromisoformat(forecast_date) <= date.fromisoformat(data_cutoff_s):
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "forecast_date must be later than data_cutoff")
    schedule = validate_schedule_evidence(schedule_evidence, data_cutoff_s, forecast_date)
    target_index = len(state.draws.dates) + 1
    dh = data_hash(state.draws)
    fid = f"XSMB-{forecast_date.replace('-', '')}-v2.1-LIVE-001-{dh[:12]}-{SPEC_HASH[:12]}"
    duplicate: dict[str, Any] | None = None
    for r in state.ledger_records:
        rdate = normalize_date(r["forecast_date"]) if r.get("forecast_date") else None
        rstatus = str(r.get("record_status") or "")
        if rdate == forecast_date or r.get("forecast_id") == fid:
            if r.get("forecast_id") == fid and r.get("data_hash") == dh:
                duplicate = r
            else:
                raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "duplicate target date or forecast_id with different identity")
        if rdate and rdate <= data_cutoff_s and rstatus != "SETTLED_VERIFIED":
            raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "DATA CONTINUITY FAIL: prior forecast is not SETTLED_VERIFIED", {"forecast_id": r.get("forecast_id"), "record_status": rstatus})
    current = now or datetime.now(VIETNAM_TZ)
    if current.tzinfo is None:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "clock must be timezone aware")
    current = current.astimezone(VIETNAM_TZ)
    deadline = datetime.combine(date.fromisoformat(forecast_date), PRE_DRAW_CUTOFF, tzinfo=VIETNAM_TZ)
    if current >= deadline:
        raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "internal pre-draw cutoff passed")
    if duplicate:
        return {"status": "ALREADY_EXISTS", "forecast_id": duplicate["forecast_id"], "forecast_date": forecast_date, "data_hash": dh, "workbook_sha256": state.workbook_sha256, "runner_sha256": rsha, "runtime": runtime}
    return {"status": "PREFLIGHT PASS", "forecast_date": forecast_date, "data_cutoff": data_cutoff_s, "target_index": target_index, "data_hash": dh, "forecast_id": fid, "runtime": runtime, "runner_sha256": rsha, "workbook_sha256": state.workbook_sha256, "schedule_evidence": schedule}


def ingest_observed(workbook_path: str | Path, actual_date: str, evidence_json: str | Path, manifest_dir: str | Path, reason: str = "MISSED_PRE_DRAW_CUTOFF") -> dict[str, Any]:
    path, mdir = Path(workbook_path), Path(manifest_dir)
    actual_date = normalize_date(actual_date)
    with workbook_lock(path, True):
        recover_transactions(path)
        state = load_workbook_state(path, mdir)
        if actual_date in state.draws.dates:
            idx = state.draws.dates.index(actual_date) + 1
            if idx <= BASE_DRAW_COUNT:
                raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "cannot ingest over frozen MASTER")
            wb = load_workbook(path, read_only=False, data_only=False)
            sh = wb["RECONCILIATION_1200"]
            row = idx + 1
            status, vals = str(sh.cell(row, 10).value or ""), parse_lotto_27(sh.cell(row, 4).value)
            wb.close()
            consensus, _ = _read_evidence(evidence_json, actual_date)
            if consensus and status == OBSERVED_STATUS and vals == consensus.actual_lotto_27:
                _validate_payload_manifest(_find_manifest_for_observed(mdir, actual_date), "XSMB_OBSERVED_NO_FORECAST_V1")
                return {"status": "ALREADY_INGESTED", "actual_date": actual_date, "draw_index": idx}
            raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "conflicting ingest rerun")
        if any(r.get("forecast_date") and normalize_date(r["forecast_date"]) == actual_date for r in state.ledger_records):
            raise RunnerError("NO PRE-DRAW RECORD — BACKFILL FORBIDDEN", "cannot ingest observed-no-forecast when forecast row exists")
        if date.fromisoformat(actual_date) > datetime.now(VIETNAM_TZ).date():
            raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "cannot ingest future draw")
        if date.fromisoformat(actual_date) != date.fromisoformat(state.draws.dates[-1]) + timedelta(days=1):
            raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "observed draw is not next required historical date")
        consensus, detail = _read_evidence(evidence_json, actual_date)
        if consensus is None:
            raise RunnerError("SETTLEMENT_BLOCKED", detail.get("reason", "evidence consensus failed"), detail)
        before = data_hash(state.draws)
        wb = load_workbook(path, read_only=False, data_only=False, keep_links=True)
        sh = wb["RECONCILIATION_1200"]
        row = _next_data_row(sh)
        idx = row - 1
        _copy_row_style(sh, row - 1, row, 13)
        vals = consensus.actual_lotto_27
        row_hash = sha256_bytes(canonical_json({"draw_index": idx, "date": actual_date, "lotto_27": vals}).encode("utf-8"))
        multi_hash = sha256_bytes(canonical_json(sorted(vals)).encode("utf-8"))
        values = [idx, actual_date, " ".join(consensus.canonical_prizes_27 or []), " ".join(vals), row_hash, multi_hash, OBSERVED_CLASS, " | ".join(consensus.winning_families), " | ".join(consensus.winning_references), OBSERVED_STATUS, 0, 0, "Observed draw only; no pre-draw forecast; excluded from prospective scoring denominator."]
        for c, v in enumerate(values, 1):
            sh.cell(row, c).value = v
        temp_draws = make_draws(state.draws.dates + [actual_date], state.draws.lotto + [vals])
        after = data_hash(temp_draws)
        manifest = _manifest_with_hash({
            "artifact_type": "XSMB_OBSERVED_NO_FORECAST_V1", "spec_version": "v2.1-LIVE-001",
            "actual_date": actual_date, "reason": reason, "draw_index": idx,
            "prizes_27": consensus.canonical_prizes_27, "lotto_27": vals,
            "winning_references": consensus.winning_references, "winning_families": consensus.winning_families,
            "source_family_count": len(consensus.winning_families), "full27_consensus": True,
            "forecast_row_exists": False, "p00_p99_generated": False, "top5_generated": False, "forecast_id": None,
            "prospective_scoring_denominator_effect": "EXCLUDED",
            "data_hash_before": before, "data_hash_after": after,
            "master_base_rows_unchanged": BASE_DRAW_COUNT, "master_content_sha256": FROZEN_MASTER_1200_SHA256,
            "created_at_local": datetime.now(VIETNAM_TZ).isoformat(), "runner_sha256": runner_sha256(), "spec_hash": SPEC_HASH,
        })
        mpath = _find_manifest_for_observed(mdir, actual_date)
        commit = commit_workbook_and_manifest(path, wb, mpath, manifest, state.workbook_sha256, "INGEST_OBSERVED_NO_FORECAST")
        wb.close()
        return {"status": OBSERVED_STATUS, "draw_index": idx, "actual_date": actual_date, "data_hash_after": after, "manifest": str(mpath), **commit}


def run_forecast(workbook_path: str | Path, forecast_date: str, data_cutoff_s: str, manifest_dir: str | Path, test_evidence: str | Path, schedule_evidence: str | Path | None = None) -> dict[str, Any]:
    path, mdir = Path(workbook_path), Path(manifest_dir)
    with workbook_lock(path, True):
        recover_transactions(path)
        gate = preflight_forecast(path, forecast_date, data_cutoff_s, mdir, test_evidence, schedule_evidence=schedule_evidence)
        if gate["status"] == "ALREADY_EXISTS":
            return gate
        state = load_workbook_state(path, mdir)
        first = fit_predict(state.draws, gate["target_index"])
        second = fit_predict(state.draws, gate["target_index"])
        v1 = np.asarray(list(first["probabilities"].values()), dtype=np.float64)
        v2 = np.asarray(list(second["probabilities"].values()), dtype=np.float64)
        if not np.array_equal(v1, v2) or first["top5"] != second["top5"]:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "same-process reproducibility failed")
        validation = time_series_validation(state.draws, gate["target_index"])
        generated = datetime.now(VIETNAM_TZ)
        deadline = datetime.combine(date.fromisoformat(gate["forecast_date"]), PRE_DRAW_CUTOFF, tzinfo=VIETNAM_TZ)
        if generated >= deadline:
            raise RunnerError("PRE-DRAW GATE FAIL — DO NOT FORECAST", "cutoff passed before commit")
        payload = {
            "artifact_type": "XSMB_FORECAST_MANIFEST_V1",
            "command": {"name": "RUN_FORECAST", "model_spec": "v2.1-LIVE-001", "forecast_date": gate["forecast_date"], "data_cutoff": gate["data_cutoff"], "mode": "PROSPECTIVE"},
            "prompt_revision": PROMPT_REVISION, "model_spec_version": "v2.1-LIVE-001",
            "spec_hash": SPEC_HASH, "runner_sha256": gate["runner_sha256"], "runtime_versions": gate["runtime"],
            "forecast_id": gate["forecast_id"], "forecast_date": gate["forecast_date"], "generated_at_local": generated.isoformat(),
            "data_cutoff": gate["data_cutoff"], "data_hash": gate["data_hash"], "target_index": gate["target_index"],
            "model": "M7_logistic_l2", "feature_order": SPEC_CORE["feature_order"],
            "fit_target_range": first["fit_target_range"], "calibration_target_range": first["calibration_target_range"],
            "m0_uniform": first["m0_uniform"], "probabilities": first["probabilities"], "top5_ranked": first["top5"],
            "probability_sha256": first["probability_sha256"],
            "model_snapshot": first.get("model_snapshot"),
            "model_snapshot_sha256": first.get("model_snapshot_sha256"),
            "reproducibility": {"same_probabilities_bitwise": True, "same_top5": True, "max_absolute_difference": 0.0},
            "validation_report": validation, "research_state": state.activation.get("research_state", "NO VERIFIED EDGE"),
            "record_status": "LOCKED_PRE_DRAW",
        }
        manifest = _manifest_with_hash(payload)
        mpath = mdir / f"{gate['forecast_id']}.forecast.json"
        wb = load_workbook(path, read_only=False, data_only=False, keep_links=True)
        ledger = wb["PROSPECTIVE_LEDGER"]
        row = _next_data_row(ledger)
        _copy_row_style(ledger, max(2, row - 1), row, 16)
        vals = [gate["forecast_id"], gate["forecast_date"], generated.isoformat(), gate["data_cutoff"], gate["data_hash"], "v2.1-LIVE-001", state.activation.get("research_state", "NO VERIFIED EDGE"), "M7_logistic_l2", canonical_json(first["probabilities"]), canonical_json(first["top5"]), None, None, None, None, None, "LOCKED_PRE_DRAW"]
        for c, v in enumerate(vals, 1):
            ledger.cell(row, c).value = v
        _update_activation_field(wb, "first_forecast_status", "ACTIVE")
        commit = commit_workbook_and_manifest(path, wb, mpath, manifest, gate["workbook_sha256"], "RUN_FORECAST")
        wb.close()
        return {"status": "LOCKED_PRE_DRAW", "forecast_id": gate["forecast_id"], "forecast_date": gate["forecast_date"], "data_hash": gate["data_hash"], "probability_sha256": first["probability_sha256"], "model_snapshot_sha256": first.get("model_snapshot_sha256"), "top5": first["top5"], "probabilities": first["probabilities"], "forecast_manifest": str(mpath), **commit}


def _forecast_manifest_path(manifest_dir: Path, forecast_id: str) -> Path:
    return manifest_dir / f"{forecast_id}.forecast.json"


def _immutable_snapshot(record: dict[str, Any]) -> dict[str, Any]:
    return {k: record.get(k) for k in IMMUTABLE_LEDGER_FIELDS}


def _validate_forecast_record_against_manifest(record: dict[str, Any], manifest: dict[str, Any]) -> None:
    p = manifest["payload"]
    expected = {
        "forecast_id": p["forecast_id"], "forecast_date": p["forecast_date"], "generated_at_local": p["generated_at_local"],
        "data_cutoff": p["data_cutoff"], "data_hash": p["data_hash"], "model_spec_version": p["model_spec_version"],
        "system_state": p["research_state"], "challenger_model": p["model"],
        "p00_to_p99_json": canonical_json(p["probabilities"]), "top5_ranked": canonical_json(p["top5_ranked"]),
    }
    observed = _immutable_snapshot(record)
    if observed != expected:
        raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "immutable forecast fields differ from forecast manifest", {"expected": expected, "observed": observed})


def _append_reconciliation_row(sheet: Any, actual_date: str, consensus: SourceConsensus) -> int:
    row = _next_data_row(sheet)
    idx = row - 1
    _copy_row_style(sheet, row - 1, row, 13)
    vals = consensus.actual_lotto_27
    row_values = [
        idx, actual_date, " ".join(consensus.canonical_prizes_27 or []), " ".join(vals),
        sha256_bytes(canonical_json({"draw_index": idx, "date": actual_date, "lotto_27": vals}).encode("utf-8")),
        sha256_bytes(canonical_json(sorted(vals)).encode("utf-8")),
        SETTLED_CLASS, " | ".join(consensus.winning_families), " | ".join(consensus.winning_references),
        "SETTLED_VERIFIED", 0, 0, "Prospective settlement; verified by independent source families; canonical order from FULL_27.",
    ]
    for c, v in enumerate(row_values, 1):
        sheet.cell(row, c).value = v
    return idx


def _settled_checkpoint(wb: Any, manifest_dir: Path, current_research_state: str) -> dict[str, Any]:
    ledger_records = _ledger_records(wb["PROSPECTIVE_LEDGER"])
    settled = [r for r in ledger_records if str(r.get("record_status") or "") == "SETTLED_VERIFIED"]
    count = len(settled)
    if count not in CHECKPOINTS:
        return {"checkpoint": None, "calibration_status": "NOT_YET_EVALUABLE", "research_state": current_research_state}
    all_y: list[np.ndarray] = []
    all_p: list[np.ndarray] = []
    m7_b: list[float] = []
    m7_l: list[float] = []
    m0_b: list[float] = []
    m0_l: list[float] = []
    for record in settled[:count]:
        p = np.array([float(x) for x in json.loads(str(record["p00_to_p99_json"])).values()], dtype=np.float64)
        actual_vals = parse_lotto_27(record["actual_lotto_27"])
        actual = np.zeros(100, dtype=np.float64)
        for x in actual_vals:
            actual[int(x)] = 1.0
        fm = _validate_payload_manifest(_forecast_manifest_path(manifest_dir, str(record["forecast_id"])), "XSMB_FORECAST_MANIFEST_V1")["payload"]
        p0 = float(fm["m0_uniform"])
        baseline = np.full(100, p0, dtype=np.float64)
        all_y.append(actual); all_p.append(p)
        m7_b.append(brier(actual, p)); m7_l.append(log_loss(actual, p))
        m0_b.append(brier(actual, baseline)); m0_l.append(log_loss(actual, baseline))
    yv, pv = np.concatenate(all_y), np.concatenate(all_p)
    ece, bias = ece10(yv, pv), abs(float(pv.mean()) - float(yv.mean()))
    calibration = "PASS" if ece <= 0.03 and bias <= 0.01 else "FAIL"
    edge = calibration == "PASS" and float(np.mean(m7_b)) < float(np.mean(m0_b)) and float(np.mean(m7_l)) < float(np.mean(m0_l))
    return {"checkpoint": count, "calibration_status": calibration, "ece10": ece, "mean_bias_abs": bias, "cumulative_brier_m7": float(np.mean(m7_b)), "cumulative_brier_m0": float(np.mean(m0_b)), "cumulative_log_loss_m7": float(np.mean(m7_l)), "cumulative_log_loss_m0": float(np.mean(m0_l)), "research_state": "VERIFIED EDGE" if edge else "NO VERIFIED EDGE"}


def settle_forecast(workbook_path: str | Path, forecast_id: str, actual_date: str, evidence_json: str | Path, manifest_dir: str | Path) -> dict[str, Any]:
    path, mdir = Path(workbook_path), Path(manifest_dir)
    actual_date = normalize_date(actual_date)
    with workbook_lock(path, True):
        recover_transactions(path)
        state = load_workbook_state(path, mdir)
        matches = [r for r in state.ledger_records if str(r.get("forecast_id") or "") == forecast_id]
        if not matches:
            raise RunnerError("NO PRE-DRAW RECORD — BACKFILL FORBIDDEN", "forecast_id does not exist")
        if len(matches) != 1:
            raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "forecast_id is not unique")
        record = matches[0]
        if normalize_date(record["forecast_date"]) != actual_date:
            raise RunnerError("SETTLEMENT_BLOCKED", "actual_date differs from forecast_date")
        if str(record.get("record_status") or "") == "SETTLED_VERIFIED":
            return {"status": "ALREADY_SETTLED", "forecast_id": forecast_id, "actual_date": actual_date}
        if str(record.get("record_status") or "") not in {"LOCKED_PRE_DRAW", "AWAITING_RESULT", "SETTLEMENT_BLOCKED"}:
            raise RunnerError("SETTLEMENT_BLOCKED", "forecast row is not in a settleable state")
        fmanifest = _validate_payload_manifest(_forecast_manifest_path(mdir, forecast_id), "XSMB_FORECAST_MANIFEST_V1")
        _validate_forecast_record_against_manifest(record, fmanifest)
        consensus, detail = _read_evidence(evidence_json, actual_date)
        if consensus is None:
            attempt_index = 1
            while (mdir / f"{forecast_id}.settlement.attempt-{attempt_index:03d}.json").exists():
                attempt_index += 1
            attempt = _manifest_with_hash({"artifact_type": "XSMB_SETTLEMENT_ATTEMPT_V1", "forecast_id": forecast_id, "actual_date": actual_date, "reason": detail.get("reason"), "sources": detail.get("sources"), "created_at_local": datetime.now(VIETNAM_TZ).isoformat(), "runner_sha256": runner_sha256(), "spec_hash": SPEC_HASH})
            apath = mdir / f"{forecast_id}.settlement.attempt-{attempt_index:03d}.json"
            apath.parent.mkdir(parents=True, exist_ok=True)
            apath.write_text(json.dumps(attempt, ensure_ascii=False, indent=2), encoding="utf-8")
            _validate_payload_manifest(apath, "XSMB_SETTLEMENT_ATTEMPT_V1")
            raise RunnerError("SETTLEMENT_BLOCKED", detail.get("reason", "evidence consensus failed"), detail)
        # Settlement date must be the next historical draw after the current verified history.
        if date.fromisoformat(actual_date) != date.fromisoformat(state.draws.dates[-1]) + timedelta(days=1):
            raise RunnerError("SETTLEMENT_BLOCKED", "actual date is not next required historical draw")
        probabilities = np.array([float(x) for x in json.loads(str(record["p00_to_p99_json"])).values()], dtype=np.float64)
        if probabilities.shape != (100,) or not np.isfinite(probabilities).all():
            raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "stored forecast probabilities invalid")
        actual = np.zeros(100, dtype=np.float64)
        for x in consensus.actual_lotto_27:
            actual[int(x)] = 1.0
        top5 = json.loads(str(record["top5_ranked"]))
        hits = int(sum(actual[int(x)] for x in top5))
        p0 = float(fmanifest["payload"]["m0_uniform"])
        baseline = np.full(100, p0, dtype=np.float64)
        metrics = {"hits_at_5": hits, "brier_m7": brier(actual, probabilities), "log_loss_m7": log_loss(actual, probabilities), "brier_m0": brier(actual, baseline), "log_loss_m0": log_loss(actual, baseline)}
        immutable_before = _immutable_snapshot(record)
        wb = load_workbook(path, read_only=False, data_only=False, keep_links=True)
        ledger = wb["PROSPECTIVE_LEDGER"]
        row = int(record["_row_number"])
        settled_at = datetime.now(VIETNAM_TZ).isoformat()
        ledger.cell(row, 11).value = " ".join(consensus.actual_lotto_27)
        ledger.cell(row, 12).value = metrics["hits_at_5"]
        ledger.cell(row, 13).value = metrics["brier_m7"]
        ledger.cell(row, 14).value = metrics["log_loss_m7"]
        ledger.cell(row, 15).value = settled_at
        ledger.cell(row, 16).value = "SETTLED_VERIFIED"
        # Re-read immutable fields from workbook object before append.
        observed_after = dict(zip(LEDGER_HEADERS, [ledger.cell(row, c).value for c in range(1, 17)], strict=True))
        if _immutable_snapshot(observed_after) != immutable_before:
            wb.close()
            raise RunnerError("HASH/STATE CONFLICT — DO NOT FORECAST", "settlement attempted to alter immutable forecast fields")
        appended_index = _append_reconciliation_row(wb["RECONCILIATION_1200"], actual_date, consensus)
        checkpoint = _settled_checkpoint(wb, mdir, str(state.activation.get("research_state") or "NO VERIFIED EDGE"))
        _update_activation_field(wb, "research_state", checkpoint["research_state"])
        settlement = _manifest_with_hash({
            "artifact_type": "XSMB_SETTLEMENT_MANIFEST_V1",
            "command": {"name": "SETTLE_FORECAST", "model_spec": "v2.1-LIVE-001", "forecast_id": forecast_id, "actual_date": actual_date, "mode": "VERIFY_AND_SETTLE"},
            "forecast_id": forecast_id, "forecast_manifest_sha256": fmanifest["manifest_sha256"], "actual_date": actual_date,
            "actual_lotto_27": consensus.actual_lotto_27,
            "source_verification": {"winning_references": consensus.winning_references, "winning_families": consensus.winning_families, "mismatch_observed": consensus.mismatch_observed, "sources": consensus.source_summary},
            "metrics": metrics, "settled_at_local": settled_at, "appended_draw_index": appended_index, "checkpoint": checkpoint,
            "record_status": "SETTLED_VERIFIED", "runner_sha256": runner_sha256(), "spec_hash": SPEC_HASH,
        })
        spath = mdir / f"{forecast_id}.settlement.json"
        commit = commit_workbook_and_manifest(path, wb, spath, settlement, state.workbook_sha256, "SETTLE_FORECAST")
        wb.close()
        return {"status": "SETTLED_VERIFIED", "forecast_id": forecast_id, "actual_date": actual_date, "source_verification": {"winning_references": consensus.winning_references, "winning_families": consensus.winning_families, "mismatch_observed": consensus.mismatch_observed}, **metrics, **checkpoint, "settlement_manifest": str(spath), **commit}


def reproducibility_test(target_index: int, workbook_path: str, manifest_dir: str | Path, fresh_process: bool = False, skip_runtime: bool = False) -> dict[str, Any]:
    if not skip_runtime:
        assert_runtime()
    state = load_workbook_state(workbook_path, manifest_dir)
    draws = state.draws
    if len(draws.dates) >= target_index:
        draws = make_draws(draws.dates[:target_index - 1], draws.lotto[:target_index - 1])
    first, second = fit_predict(draws, target_index), fit_predict(draws, target_index)
    v1 = np.array(list(first["probabilities"].values()), dtype=np.float64)
    v2 = np.array(list(second["probabilities"].values()), dtype=np.float64)
    fresh: dict[str, Any] | None = None
    if fresh_process:
        cmd = [sys.executable, str(Path(__file__).resolve()), "_predict-json", "--workbook", str(workbook_path), "--manifest-dir", str(manifest_dir), "--target-index", str(target_index)]
        p1 = subprocess.run(cmd, check=True, capture_output=True, text=True)
        p2 = subprocess.run(cmd, check=True, capture_output=True, text=True)
        c1, c2 = json.loads(p1.stdout), json.loads(p2.stdout)
        fresh = {"run_1_probability_sha256": c1["probability_sha256"], "run_2_probability_sha256": c2["probability_sha256"], "top5_run_1": c1["top5"], "top5_run_2": c2["top5"], "status": "PASS" if c1 == c2 else "FAIL"}
    passed = bool(np.array_equal(v1, v2) and first["top5"] == second["top5"] and (fresh is None or fresh["status"] == "PASS"))
    return {"test_type": "RETROSPECTIVE_REPRODUCIBILITY_ONLY_NOT_A_PROSPECTIVE_FORECAST", "target_index": target_index, "data_cutoff": first["data_cutoff"], "data_hash": first["data_hash"], "run_1_probability_sha256": probability_sha256(v1), "run_2_probability_sha256": probability_sha256(v2), "max_absolute_difference": float(np.max(np.abs(v1 - v2))), "top5_run_1": first["top5"], "top5_run_2": second["top5"], "same_probabilities_bitwise": bool(np.array_equal(v1, v2)), "same_top5": first["top5"] == second["top5"], "fresh_process": fresh, "status": "PASS" if passed else "FAIL"}


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="XSMB R3-HARDENED controlled runner v2.1-LIVE-001")
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("print-spec")
    p = sub.add_parser("preflight")
    p.add_argument("--workbook", required=True); p.add_argument("--forecast-date", required=True); p.add_argument("--data-cutoff", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--test-evidence", required=True); p.add_argument("--testing-clock"); p.add_argument("--schedule-evidence")
    p = sub.add_parser("ingest-observed")
    p.add_argument("--workbook", required=True); p.add_argument("--actual-date", required=True); p.add_argument("--evidence-json", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--reason", default="MISSED_PRE_DRAW_CUTOFF")
    p = sub.add_parser("validate")
    p.add_argument("--workbook", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--live-target-index", type=int); p.add_argument("--output")
    p = sub.add_parser("repro-test")
    p.add_argument("--workbook", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--target-index", type=int, required=True); p.add_argument("--output", required=True); p.add_argument("--fresh-process", action="store_true")
    p = sub.add_parser("run-forecast")
    p.add_argument("--workbook", required=True); p.add_argument("--forecast-date", required=True); p.add_argument("--data-cutoff", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--test-evidence", required=True); p.add_argument("--schedule-evidence")
    p = sub.add_parser("settle-forecast")
    p.add_argument("--workbook", required=True); p.add_argument("--forecast-id", required=True); p.add_argument("--actual-date", required=True); p.add_argument("--evidence-json", required=True); p.add_argument("--manifest-dir", required=True)
    p = sub.add_parser("recover")
    p.add_argument("--workbook", required=True)
    p = sub.add_parser("_predict-json", help=argparse.SUPPRESS)
    p.add_argument("--workbook", required=True); p.add_argument("--manifest-dir", required=True); p.add_argument("--target-index", type=int, required=True)
    return parser


def main() -> None:
    args = build_parser().parse_args()
    try:
        if args.command == "print-spec":
            print(canonical_json(SPEC_CORE))
            print(SPEC_HASH)
            return
        elif args.command == "preflight":
            now = datetime.fromisoformat(args.testing_clock) if args.testing_clock else None
            result = preflight_forecast(args.workbook, args.forecast_date, args.data_cutoff, args.manifest_dir, args.test_evidence, now=now, schedule_evidence=args.schedule_evidence)
        elif args.command == "ingest-observed":
            result = ingest_observed(args.workbook, args.actual_date, args.evidence_json, args.manifest_dir, args.reason)
        elif args.command == "validate":
            assert_runtime(); state = load_workbook_state(args.workbook, args.manifest_dir); target = args.live_target_index or len(state.draws.dates) + 1; result = time_series_validation(state.draws, target); result["status"] = "PASS_REPORTING_ONLY_NO_FORECAST_GENERATED"; 
            if args.output: Path(args.output).write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
        elif args.command == "repro-test":
            result = reproducibility_test(args.target_index, args.workbook, args.manifest_dir, args.fresh_process, skip_runtime=False); Path(args.output).write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
            if result["status"] != "PASS": raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "reproducibility test failed")
        elif args.command == "run-forecast":
            result = run_forecast(args.workbook, args.forecast_date, args.data_cutoff, args.manifest_dir, args.test_evidence, args.schedule_evidence)
        elif args.command == "settle-forecast":
            result = settle_forecast(args.workbook, args.forecast_id, args.actual_date, args.evidence_json, args.manifest_dir)
        elif args.command == "recover":
            with workbook_lock(args.workbook, True): result = {"status": "RECOVERY_COMPLETE", "actions": recover_transactions(args.workbook)}
        elif args.command == "_predict-json":
            assert_runtime()
            state = load_workbook_state(args.workbook, args.manifest_dir); draws = state.draws
            if len(draws.dates) >= args.target_index: draws = make_draws(draws.dates[:args.target_index - 1], draws.lotto[:args.target_index - 1])
            pred = fit_predict(draws, args.target_index); result = {"probability_sha256": pred["probability_sha256"], "top5": pred["top5"]}
        else:
            raise RunnerError("IMPLEMENTATION GATE FAIL — DO NOT FORECAST", "unknown command")
        print(json.dumps(result, ensure_ascii=False, indent=2))
    except RunnerError as e:
        print(json.dumps(e.payload(), ensure_ascii=False, indent=2), file=sys.stderr)
        raise SystemExit(2) from e


if __name__ == "__main__":
    main()
