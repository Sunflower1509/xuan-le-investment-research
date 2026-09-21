# XSMB v2.1 production runtime gate

This branch isolates the runtime gate for MODEL_SPEC v2.1-LIVE-001.

Frozen runtime requirements:
- Python 3.12.x
- NumPy 2.3.5
- SciPy 1.17.0
- scikit-learn 1.8.0
- openpyxl 3.1.5
- OMP/OPENBLAS/MKL/NUMEXPR thread counts = 1

This gate does not run a forecast and does not modify the XSMB model mathematics.
It only proves that an exact production-compatible runtime can be provisioned.
