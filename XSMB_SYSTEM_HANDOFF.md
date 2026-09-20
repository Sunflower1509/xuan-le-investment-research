# XSMB_SYSTEM_HANDOFF.md

> **Purpose:** Single bootstrap / continuity document for the XSMB quantitative production system.
>
> **Rule:** This file is an index and recovery map. It MUST NOT override the authoritative MODEL_SPEC, pinned hashes, canonical production workbook, PROSPECTIVE_LEDGER, immutable manifests, or exact-runtime test evidence.

## 1. System identity

- System: **XSMB QUANT EDGE DAILY**
- MODEL_SPEC: **v2.1-LIVE-001**
- Active model: **M7_logistic_l2**
- Model mathematics: **FROZEN**
- Tuning / model replacement / feature expansion: **NOT AUTHORIZED**
- Prompt revision: **V3.1-FINAL-20260920-R2**
- Timezone: **Asia/Ho_Chi_Minh**
- Pre-draw cutoff: **18:00:00**
- Research state at this handoff snapshot: **NO VERIFIED EDGE**

### Frozen integrity pins

- SPEC_HASH: `9a830c5a5926cf7e7adc310da5c4ee0f456b5304fc0b88d4b99aa48572f04bdc`
- MASTER first 1,200 draws SHA256: `50b00fe9d85cc951c1d4f66a5f9fd8cdd36011caea826f0dd26b922ada73b9c7`
- Runner content SHA256: `7c9f1bf773a484c20a09942a90a31613179963869dca30e65be8541d5bc7fd7b`

## 2. Canonical production locations

### Google Drive — canonical operational storage

Folder:
- ID: `12cglwUqellMQJj0seymzW_mgwGOxFM31`
- URL: https://drive.google.com/drive/folders/12cglwUqellMQJj0seymzW_mgwGOxFM31

Current canonical production workbook:
- File: `XSMB_RECONCILIATION_R5_1200_v2_1_PRODUCTION.xlsx`
- Drive file ID: `1UYD3egf24aUfblq6laJE2FFLMEiZrAob`
- URL: https://docs.google.com/spreadsheets/d/1UYD3egf24aUfblq6laJE2FFLMEiZrAob/edit
- Locked-forecast workbook SHA256 at this snapshot: `c475234e8a9acca5b6043f98164418b4b63a3fb13e7b705dd193293dc5eee9d1`

Key audit/evidence artifacts in the same Drive folder:
- `xsmb-r3-python312-34-tests_PASS.zip` — ID `19kMu5hyE8E7LyM92ARlNjM7pSx94zUZ6`
- `xsmb-run-forecast-20260921-locked.zip` — ID `1pwqL46-lux9eoiy9THkzJFc418KoEX2c`
- `xsmb-audit-10-rounds-replay-20260921_PASS.zip` — ID `1iH17nPhP2dcEnwTdvlAhncy_3Qb30dQW`

### GitHub — production code / workflow reference

Repository:
- `Sunflower1509/xuan-le-investment-research`

Operational branch:
- `xsmb-v2.1-python312-runtime`
- Branch head observed immediately before this handoff was created: `61591ec2c850ab13d2d31137f9829a037fc58994`
- Treat branch head as a snapshot only. The authoritative code pin is the runner content SHA256 above.

Runner:
- Path: `xsmb_runtime/xsmb_reference_runner_R3_final.py`
- SHA256: `7c9f1bf773a484c20a09942a90a31613179963869dca30e65be8541d5bc7fd7b`

Two-command wrapper:
- Path: `xsmb_runtime/xsmb_ops.py`

Operational documentation:
- Path: `xsmb_runtime/TWO_COMMAND_OPERATIONS.md`

## 3. Exact production runtime

Production authorization requires all of the following:

- Python **3.12.x**; audited runtime: **3.12.12**
- NumPy **2.3.5**
- SciPy **1.17.0**
- scikit-learn **1.8.0**
- openpyxl **3.1.5**
- `OMP_NUM_THREADS=1`
- `OPENBLAS_NUM_THREADS=1`
- `MKL_NUM_THREADS=1`
- `NUMEXPR_NUM_THREADS=1`

Latest exact-runtime hardening evidence:
- **R1-R15 + C01-C19 = 34/34 PASS**
- Test-evidence manifest SHA256: `99e6d549963f887acb560a0f7647ab5426d3842cc53e9f1be972fb0d1b1915a4`

Any runtime mismatch is fail-closed.

## 4. Current live-state snapshot

This section is informational and may become stale. On every new chat or operational run, re-read the canonical workbook + Ledger + manifests before acting.

Latest verified draw in the production data at this snapshot:
- Date: **2026-09-20**
- Provenance: **PROSPECTIVE_OBSERVED_NO_FORECAST**
- Backfill: **FORBIDDEN**
- Independent source families recorded: `ketqua16.net`, `xsmn.mobi`, `xoso.com.vn`, `minhngoc.net`

Current prospective forecast:
- Forecast date: **2026-09-21**
- Status: **LOCKED_PRE_DRAW**
- Forecast ID: `XSMB-20260921-v2.1-LIVE-001-824bf0c9f304-9a830c5a5926`
- Data cutoff: **2026-09-20**
- Data hash: `824bf0c9f30475477ca904ff442f331741c7287d8c21c2df6f128e446278ffff`
- TOP5: **09, 07, 34, 82, 80**
- Probability SHA256: `e0db1ad1c5353741d0aa1f01a615af346e9b243a58d30977398dc59335401a33`
- Forecast-manifest file SHA256: `ed95f5f56f0ae9ee06d58435f53fb408dc2653a5c6d44b6951b6cf41d49a9457`
- Forecast-manifest payload SHA256: `d9339229c6704826ab22daf293bdc1869fa442c0252fa5f0868cf49398e52dde`

Final deep audit:
- **10/10 PASS**
- Duplicate forecast protection: **PASS / ALREADY_EXISTS / workbook unchanged**
- Final replay: **REPLAY_IDENTICAL**
- `probabilities_exact_json_equal = true`
- `max_absolute_probability_difference = 0.0`

## 5. Authority hierarchy

When sources disagree, use this hierarchy. Do not use chat memory to override it.

1. **Frozen MODEL_SPEC + SPEC_HASH** — defines model mathematics and allowed behavior.
2. **Pinned runner SHA256** — defines the authorized implementation.
3. **Frozen MASTER first-1,200 hash** — protects the immutable research base.
4. **Current canonical production workbook on Drive** — live data container.
5. **PROSPECTIVE_LEDGER + immutable per-run manifests** — authoritative live forecast/settlement state.
6. **Exact-runtime TEST_EVIDENCE_MANIFEST** — authorizes execution environment.
7. **Audit artifacts / transaction journals / backups** — recovery and forensic evidence.
8. **This handoff file** — discovery map only.
9. **Chat history / memory** — convenience context only; never authoritative.

If any higher-authority item conflicts with a lower-authority item, stop and investigate. Never silently reconcile by guesswork.

## 6. Fail-closed rules

The system MUST NOT forecast when any of the following is true:

- MODEL_SPEC or SPEC_HASH mismatch.
- Runner SHA256 mismatch.
- Frozen MASTER hash mismatch.
- Python/package/thread runtime mismatch.
- Exact-runtime 34-test evidence is absent, invalid, or not fully PASS.
- Canonical workbook / Ledger / manifest state conflicts.
- Missing prior verified draw or broken data continuity.
- Target-date result is already present in the input data (target leakage risk).
- Current local time is at or after the frozen 18:00 Asia/Ho_Chi_Minh cutoff.
- Duplicate/conflicting forecast row exists.
- Workbook changes between validation and commit (TOCTOU).
- Transaction recovery cannot reconcile workbook/manifest state.

Settlement / result update MUST be blocked when:
- Evidence is malformed.
- Fewer than two independent source families support the winning result.
- Sources disagree without sufficient independent tie-breaking evidence.
- FULL_27 prize extraction does not match lotto_27.
- Settlement attempts to mutate locked P00-P99, TOP5, forecast ID, data hash, model spec, or other immutable pre-draw fields.

Absolute rules:
- **NO BACKFILL FORECAST.**
- **NO MANUAL P00-P99/TOP5 SUBSTITUTION.**
- **NO OVERWRITE OF LOCKED_PRE_DRAW FORECAST.**
- **NO MODEL TUNING OR M7 CHANGE UNDER THIS SPEC.**
- **NO INVENTED DATA.**

## 7. The only two routine user commands

### Command 1 — update the published result

```text
UPDATE_RESULT actual_date=YYYY-MM-DD @Tìm kiếm
```

The executor must automatically:
- fetch the current canonical production workbook;
- search/verify the published XSMB result using independent source families;
- persist evidence provenance and hashes;
- resolve the correct forecast row automatically;
- settle an existing LOCKED_PRE_DRAW forecast, or use OBSERVED_NO_FORECAST if no valid pre-draw forecast exists;
- update Hits@5 / Brier / LogLoss when applicable;
- append the verified draw exactly once;
- commit workbook + manifest transactionally;
- save the new canonical workbook back to Drive;
- make identical reruns idempotent.

The user should NOT need to provide forecast_id, workbook path, source URLs, manifest path, or data hash.

### Command 2 — run the next prospective forecast

```text
RUN_NEXT forecast_date=YYYY-MM-DD @Tìm kiếm
```

The executor must automatically:
- fetch the current canonical production workbook;
- derive `data_cutoff` from the latest verified draw;
- verify SPEC, runner, MASTER, runtime, exact-runtime test evidence, continuity and cutoff;
- run preflight fail-closed;
- return existing locked forecast on an identical rerun instead of duplicating it;
- if PASS, run frozen M7, write exactly one LOCKED_PRE_DRAW Ledger row and one immutable forecast manifest;
- save the new canonical workbook back to Drive.

The user should NOT need to provide model_spec, data_cutoff, workbook path, manifest path, runtime arguments, or forecast_id.

## 8. Resume procedure in a completely new chat

Preferred location: open a new chat inside the same ChatGPT Project.

First message to send:

```text
RESUME XSMB v2.1-LIVE-001.

Read XSMB_SYSTEM_HANDOFF.md from Drive/GitHub first.
Then verify the current canonical production workbook on Drive, PROSPECTIVE_LEDGER,
immutable manifests, pinned hashes and latest exact-runtime test evidence.

Do not rely on chat memory as authority.
Do not run a forecast or settlement until live state is reconciled and all
required gates PASS.

Report CURRENT_SYSTEM_STATE first, then accept only the routine commands
UPDATE_RESULT and RUN_NEXT.

@Tìm kiếm
```

After the state is confirmed, routine operation returns to the two commands in Section 7.

## 9. New-chat recovery checklist

A new chat MUST establish these facts before doing any write:

- It found this handoff file.
- It found the canonical Drive folder.
- It found exactly one active canonical production workbook.
- It read current Ledger/manifest state rather than trusting the snapshot in this file.
- It verified SPEC_HASH, runner SHA256 and frozen MASTER hash.
- It verified the current exact-runtime authorization evidence.
- It determined the latest verified draw.
- It determined whether a LOCKED_PRE_DRAW forecast already exists for the requested date.
- It confirmed no target leakage and no cutoff violation.
- It reports discrepancies and stops rather than repairing them by assumption.

## 10. Operational recovery policy

If a chat, session, machine or CI job ends unexpectedly:

1. Do not recreate forecast values from chat text.
2. Reopen the canonical Drive workbook.
3. Inspect transaction journals and immutable manifests.
4. Run the runner's recovery / validation path.
5. Verify hashes and Ledger state.
6. If a forecast is already LOCKED_PRE_DRAW, preserve it and return ALREADY_EXISTS.
7. If a result was published but no valid pre-draw forecast exists, use OBSERVED_NO_FORECAST; never backfill.
8. Resume normal operation only after fail-closed gates PASS.

## 11. Product-continuity note

OpenAI's official Projects documentation states that Projects keep related chats,
files and instructions together and, subject to the user's memory/project
settings, chats can use context from other conversations in the same Project.

Official reference:
- https://help.openai.com/en/articles/10169521-projects-in-chatgpt

This capability is useful for continuity but is deliberately NOT part of the
XSMB authority hierarchy. The XSMB production state must be recovered from the
handoff pointers + canonical artifacts, not inferred from conversational memory.

## 12. Change control

This handoff may be updated only for operational metadata such as:
- canonical file IDs/paths;
- latest audited runtime evidence;
- runner branch/path after an explicitly approved hardening change;
- current operational command syntax;
- authority/recovery documentation.

Changing M7 mathematics, features, hyperparameters, target, calibration,
training windows, cutoff, or the frozen 1,200 MASTER is outside this handoff and
requires an explicit new model/spec governance process.

---

**HANDOFF REVISION:** `H1-20260920`

**STATUS:** `ACTIVE_BOOTSTRAP_POINTER`

**DO NOT TREAT THIS FILE AS A SUBSTITUTE FOR LIVE CANONICAL STATE VALIDATION.**
