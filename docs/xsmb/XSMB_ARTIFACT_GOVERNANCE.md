---
artifact_type: XSMB_ARTIFACT_GOVERNANCE
policy_version: "1.0.0"
system: "XSMB QUANT EDGE DAILY"
model_spec: "v2.1-LIVE-001"
status: "ACTIVE_POLICY"
created_date: "2026-09-22"
---

# XSMB ARTIFACT GOVERNANCE

## 1. Mục đích

Policy này phân tách cứng các artifact của XSMB QUANT EDGE DAILY để tránh nhầm lẫn giữa **file đang thi hành production**, **file chứng cứ**, **file phục hồi**, **file audit/rollback**, **archive** và **legacy**.

Nguyên tắc bắt buộc: **một artifact chỉ có một usage class chính**. Vị trí lưu trữ không được làm thay đổi authority class của artifact.

## 2. Usage classes

### A. PRODUCTION_RUNTIME

Chỉ các thành phần được active/pin/certify mới được thi hành hoặc thay đổi production state.

Bao gồm theo từng thời điểm active:
- canonical production workbook;
- active production runner đã được pin trong operational state;
- production wrapper/command implementation đã được certify;
- production CAS lock / write protocol;
- frozen MODEL_SPEC và các pin/hash bắt buộc;
- exact-runtime evidence/certification mà active runner yêu cầu.

Quy tắc:
- Có thể đọc/ghi production chỉ qua certified path.
- Không được tự động đọc file RECOVERY_REFERENCE.
- Không được lấy chat, tài liệu mô tả hoặc archive làm live authority.

### B. PRODUCTION_BOOTSTRAP_REFERENCE

Tài liệu định vị/bootstrap, ví dụ `XSMB_SYSTEM_HANDOFF.md`.

Quy tắc:
- Không executable.
- Không chứa live-state snapshot làm authority.
- Chỉ giúp tìm canonical artifacts và authority hierarchy.
- Nếu mâu thuẫn với live workbook/ledger/manifest thì live authority thắng.

### C. RECOVERY_REFERENCE

Dùng duy nhất khi cần phục hồi/tái dựng hệ thống sau sự cố nghiêm trọng, mất cấu hình hoặc mất repository/runtime artifacts.

Artifact chính:
- `XSMB_QUANT_EDGE_DAILY_FULL_EXECUTION_PROMPT_RECOVERY_REFERENCE.md`

Quy tắc bắt buộc:
- `execution_role = NONE`.
- `production_authority = false`.
- Không được runtime, wrapper, workflow hoặc daily cycle tự động import/read/execute.
- Không được đặt trong `00_PRODUCTION`.
- Không được đặt dưới `xsmb_runtime/` hoặc `.github/workflows/`.
- Chỉ sử dụng thủ công trong **incident/recovery process**.
- Khi dùng để tái dựng: tạo recovery branch riêng → lấy live/frozen pins từ authority còn tồn tại → rebuild → exact-runtime test → reconciliation → certification → controlled promotion. Không copy thẳng recovery prompt thành production config.
- Mọi thay đổi semantic phải tăng `document_version`, commit Git và đồng bộ Drive.

### D. CURRENT_EVIDENCE / SETTLEMENT_EVIDENCE

Chứng cứ để xác minh operation và settlement.

Quy tắc:
- Không executable.
- Không thay thế canonical workbook/ledger.
- Có thể được production runner validate nếu schema/certification yêu cầu.
- Evidence lịch sử không được dùng như live state nếu đã có evidence mới hơn được active pin.

### E. AUDIT_ROLLBACK

Bao gồm audit artifacts, transaction evidence và rollback anchors.

Quy tắc:
- Không phải live data authority.
- Rollback chỉ dùng theo controlled recovery transaction.
- Không overwrite rollback anchor đã chứng nhận.

### F. ARCHIVE

Lưu historical workflow/code/evidence phục vụ forensic replay.

Quy tắc:
- Không executable tự động.
- Dated workflows phải nằm ngoài `.github/workflows/`.
- Không được active lại nếu không có explicit forensic/recovery approval.

### G. LEGACY_WORKING

Tài liệu/workbook/code cũ hoặc chưa chuẩn hóa.

Quy tắc:
- Không production authority.
- Không dùng cho forecast/settlement trừ khi được reconcile, certify và promotion chính thức.

## 3. Drive folder mapping

- `00_PRODUCTION` → chỉ production runtime objects + bootstrap reference cần thiết.
- `01_CURRENT_EVIDENCE` → current certification/evidence.
- `02_SETTLEMENT_EVIDENCE` → immutable settlement evidence.
- `03_AUDIT_ARTIFACTS` → audit + rollback anchors.
- `04_RECOVERY_REFERENCE` → recovery/reference artifacts; **không executable**.
- `90_ARCHIVE` → historical archive.
- `99_LEGACY_WORKING` → legacy/non-authoritative working artifacts.

## 4. GitHub path mapping

- `xsmb_runtime/` → runtime code, gates, tests và runtime certification files.
- `.github/workflows/` → chỉ active workflows thực sự cần thiết.
- `docs/xsmb/recovery/` → recovery reference only.
- `docs/xsmb/` → governance/static documentation.
- `archive/xsmb/` → historical/non-active artifacts.

Recovery reference **không được** nằm trong `xsmb_runtime/` hoặc `.github/workflows/`.

## 5. Authority rule

Thứ tự authority khi có xung đột:

1. Frozen MODEL_SPEC + SPEC_HASH.
2. Active runner pin / operational state đã certify.
3. Frozen MASTER hash.
4. Current canonical production workbook.
5. PROSPECTIVE_LEDGER + immutable per-run manifests.
6. Active exact-runtime evidence/certification.
7. Transaction journal / rollback / audit artifacts.
8. Static bootstrap/governance documentation.
9. Recovery reference.
10. Chat history/memory.

RECOVERY_REFERENCE luôn thấp hơn live production authority và **không được override live state**.

## 6. Recovery activation protocol

Chỉ được sử dụng recovery reference khi có explicit incident/recovery decision.

Bắt buộc:
1. Freeze production writes.
2. Ghi incident/recovery ID.
3. Tạo recovery branch/workspace riêng.
4. Đọc recovery reference như specification hỗ trợ tái dựng, không phải executable.
5. Thu lại pins/hash/live data từ authority còn tồn tại.
6. Rebuild runtime/workbook/state.
7. Chạy full exact-runtime tests và reconciliation.
8. So sánh model math/output identity khi applicable.
9. Tạo certification artifact mới.
10. Chỉ promotion qua controlled transaction sau tất cả gate PASS.

Nếu không đủ bằng chứng để tái dựng chính xác: **FAIL CLOSED**.

## 7. Anti-confusion controls

CI/repository audit phải FAIL nếu:
- recovery prompt xuất hiện trong `xsmb_runtime/`;
- recovery prompt xuất hiện trong `.github/workflows/`;
- recovery prompt không có `execution_role: NONE`;
- recovery prompt có `production_authority: true`;
- recovery prompt thiếu cảnh báo `DO NOT EXECUTE DIRECTLY`;
- active runtime code import/read đường dẫn `docs/xsmb/recovery/`;
- dated one-off workflow quay lại active Actions ngoài explicit forensic replay.

Drive audit phải FAIL/raise finding nếu recovery prompt nằm trong `00_PRODUCTION`.

## 8. Change control

- Production runtime change và recovery-reference change là **hai change streams khác nhau**.
- Sửa recovery prompt không tự động thay production behavior.
- Sửa production runtime không tự động sửa recovery prompt.
- Khi có thay đổi kiến trúc được promotion, recovery prompt chỉ cập nhật sau khi thay đổi đó đã được certify; version của recovery prompt tăng riêng.
- Không dùng cùng một filename/path cho cả runtime executable và recovery reference.

## 9. Trạng thái hiện hành

`XSMB_QUANT_EDGE_DAILY_FULL_EXECUTION_PROMPT_RECOVERY_REFERENCE.md` được phân loại:

- usage_class: `RECOVERY_REFERENCE`
- execution_role: `NONE`
- production_authority: `false`
- automatic_runtime_consumption: `PROHIBITED`

Nó không phải file thi hành daily forecast.
