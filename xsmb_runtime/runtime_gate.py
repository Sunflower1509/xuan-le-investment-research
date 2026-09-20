import json
import os
import platform
import sys
from importlib.metadata import version

EXPECTED = {
    "python_major_minor": "3.12",
    "numpy": "2.3.5",
    "scipy": "1.17.0",
    "scikit-learn": "1.8.0",
    "openpyxl": "3.1.5",
}
THREAD_VARS = (
    "OMP_NUM_THREADS",
    "OPENBLAS_NUM_THREADS",
    "MKL_NUM_THREADS",
    "NUMEXPR_NUM_THREADS",
)

observed = {
    "python": platform.python_version(),
    "numpy": version("numpy"),
    "scipy": version("scipy"),
    "scikit-learn": version("scikit-learn"),
    "openpyxl": version("openpyxl"),
    "thread_env": {k: os.environ.get(k) for k in THREAD_VARS},
}

checks = {
    "python_3_12_x": f"{sys.version_info.major}.{sys.version_info.minor}" == EXPECTED["python_major_minor"],
    "numpy": observed["numpy"] == EXPECTED["numpy"],
    "scipy": observed["scipy"] == EXPECTED["scipy"],
    "scikit-learn": observed["scikit-learn"] == EXPECTED["scikit-learn"],
    "openpyxl": observed["openpyxl"] == EXPECTED["openpyxl"],
    "thread_env": all(observed["thread_env"][k] == "1" for k in THREAD_VARS),
}

payload = {
    "schema": "XSMB_RUNTIME_GATE_V1",
    "expected": EXPECTED,
    "observed": observed,
    "checks": checks,
    "pass": all(checks.values()),
}
print(json.dumps(payload, indent=2, sort_keys=True))
if not payload["pass"]:
    raise SystemExit(2)
