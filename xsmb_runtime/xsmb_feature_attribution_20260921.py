#!/usr/bin/env python3
from __future__ import annotations
import json, sys
from pathlib import Path
import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
import xsmb_reference_runner_R3_final as core

WORKBOOK = sys.argv[1]
MANIFEST_DIR = sys.argv[2]
TARGET = 1202
TOP = [9, 7, 34, 82, 80]

state = core.load_workbook_state(WORKBOOK, MANIFEST_DIR)
scaler, base, cal = core._fit_components(state.draws, TARGET)
x = core.feature_matrix(state.draws, TARGET)
xs = scaler.transform(x)
base_logits = base.decision_function(xs)
p = cal.predict_proba(base_logits.reshape(-1, 1))[:, 1]
order = sorted(range(100), key=lambda j: (-float(p[j]), j))
features = core.SPEC_CORE["feature_order"]
beta = base.coef_[0]
cal_slope = float(cal.coef_[0, 0])
cal_intercept = float(cal.intercept_[0])

rows = []
for j in TOP:
    contrib = xs[j] * beta
    cal_contrib = cal_slope * contrib
    d = {
        "number": f"{j:02d}",
        "rank": order.index(j) + 1,
        "probability": float(p[j]),
        "base_logit": float(base_logits[j]),
        "calibrated_logit": float(cal_intercept + cal_slope * base_logits[j]),
        "features": [],
    }
    for k, name in enumerate(features):
        d["features"].append({
            "feature": name,
            "raw": float(x[j, k]),
            "standardized": float(xs[j, k]),
            "beta_base": float(beta[k]),
            "base_logit_contribution": float(contrib[k]),
            "calibrated_logit_contribution": float(cal_contrib[k]),
        })
    rows.append(d)

report = {
    "schema": "XSMB_FEATURE_ATTRIBUTION_V1",
    "model_spec": core.SPEC_CORE["spec_version"],
    "spec_hash": core.SPEC_HASH,
    "runner_sha256": core.runner_sha256(),
    "target_index": TARGET,
    "data_cutoff": state.draws.dates[TARGET - 2],
    "data_hash": core.data_hash(state.draws, TARGET - 1),
    "top10": [
        {"number": f"{j:02d}", "p": float(p[j]), "base_logit": float(base_logits[j])}
        for j in order[:10]
    ],
    "base_intercept": float(base.intercept_[0]),
    "base_coefficients": dict(zip(features, map(float, beta))),
    "calibrator_slope": cal_slope,
    "calibrator_intercept": cal_intercept,
    "calibrator_monotonic_direction": (
        "increasing" if cal_slope > 0 else "decreasing" if cal_slope < 0 else "flat"
    ),
    "attribution_note": (
        "Additive contributions are exact for the base linear logit. Multiplying "
        "them by the calibrator slope gives additive contributions to the calibrated "
        "logit. Features are correlated, so contributions are model decomposition, "
        "not causal effects."
    ),
    "numbers": rows,
}
Path("FEATURE_ATTRIBUTION_20260921.json").write_text(
    json.dumps(report, indent=2, ensure_ascii=False), encoding="utf-8"
)
print(json.dumps({
    "top5": [f"{j:02d}" for j in order[:5]],
    "probability_sha256": core.probability_sha256(p),
    "calibrator_slope": cal_slope,
    "calibrator_intercept": cal_intercept,
    "data_hash": report["data_hash"],
    "runner_sha256": report["runner_sha256"],
}, indent=2))
