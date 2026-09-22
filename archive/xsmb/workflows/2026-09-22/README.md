# Archived XSMB workflows — 2026-09-22

Audit/history only. Files in this directory are intentionally outside `.github/workflows` and are not active GitHub Actions workflows.

Completed one-off operations:
- `xsmb-daily-settle-20260922.yml` — settlement of the locked 2026-09-22 forecast.
- `xsmb-daily-promote-run-next-20260923.yml` — post-settlement OPS_HARDENING promotion and prospective 2026-09-23 forecast.
- `xsmb-post-promotion-wrapper-smoke.yml` — idempotency smoke test for the hardened two-command wrapper.

Do not reactivate these dated workflows for routine production use. Future daily operations must use the currently certified runtime/wrapper and current live state.
