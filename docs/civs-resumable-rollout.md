# CIVS Resumable Rollout

CIVS remains fail-closed for production publication, but acquisition is resumable.

## Invariants

- A ticker is publishable only when `verified=true`, a local 960x540 WebP exists, SHA-256 matches, source provenance is recorded and Quality Gate is >=8/10.
- A failed ticker is persisted as `verified=false` / `pending=true` with a diagnostic error. It is never rendered as a company visual; the research card retains its report-cover fallback.
- Successful acquisitions are committed to the repository before the strict 125/125 audit. This prevents verified work from being discarded when another issuer blocks automation.
- GitHub Pages deployment remains blocked until `complete=true`, `verifiedCount=125`, `pendingCount=0` and the strict audit passes.
- TLS verification is never disabled. A broken certificate, bot gate, 403/405 response or inaccessible page must be solved with another verified official source or an issuer-authored filing, not with insecure transport bypasses.

This separation between **acquisition state** and **publication state** lets the 125-ticker rollout progress deterministically while preserving the institutional source standard.
