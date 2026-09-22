# XSMB v2.1 runtime and OPS_HARDENING

This directory contains the production-compatible runtime, frozen model runners,
hardening tests, operational state tools and certification evidence for
`MODEL_SPEC v2.1-LIVE-001`.

Frozen numerical runtime:
- Python 3.12.12
- NumPy 2.3.5
- SciPy 1.17.0
- scikit-learn 1.8.0
- openpyxl 3.1.5
- OMP/OPENBLAS/MKL/NUMEXPR thread counts = 1

Model mathematics remain frozen. OPS_HARDENING changes operational controls,
state authority and Drive write discipline only.

Key files:
- `xsmb_reference_runner_R3_final.py` — frozen predecessor.
- `xsmb_reference_runner_R4_snapshot.py` — certified R4 snapshot runner.
- `xsmb_reference_runner_R4_ops_hardened.py` — certified OPS_HARDENED production runner after the controlled post-settlement promotion transaction.
- `xsmb_R3_test_harness_py312.py`, `xsmb_R4_test_harness_py312.py`,
  `xsmb_OPS_test_harness_py312.py` — exact-runtime 34-test suites.
- `ops_schema_migration.py` — certified schema migration used by the completed OPS_HARDENING promotion.
- `xsmb_ops.py` — two-command wrapper bound to OPS_HARDENED after promotion; routine commands remain `update-result` and `run-next`.
- `ops_hardening_promotion_gate.py` — blocks promotion until required settlement state.
- `xsmb_state_manifest.py` — machine-generated derived state witness.
- `drive_write_gate.py` and `DRIVE_CAS_WRITE_PROTOCOL.md` — fail-closed CAS write discipline.

Dated one-off workflows and historical forensic tools do not belong in this
runtime directory; they are isolated under `archive/xsmb/`.

OPS_HARDENING may be activated only after the post-settlement gate, exact-runtime
promotion evidence, CAS write-back and read-back verification all pass. No file in this directory authorizes model tuning
or changes to M7_logistic_l2.
