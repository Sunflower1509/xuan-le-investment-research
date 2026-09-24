# Trade Ledger Exit Policy v1.0

**Effective date:** 2026-09-24  
**Scope:** `NHẬT KÝ ĐIỂM MUA ĐÃ KÍCH HOẠT` / triggered-buy ledger  
**Automation:** EOD only  
**Status:** LOCKED

## 1. Mục tiêu

Mỗi vị thế đã kích hoạt phải có vòng đời đầy đủ: **activation → monitoring → exit → closed history**.

Hệ thống không được giữ trạng thái "ĐANG MỞ" khi giá đóng cửa EOD đã vi phạm điều kiện thoát đã khóa.

## 2. Ba điều kiện đóng tự động

### A. STOPLOSS — hard risk
Đóng toàn bộ phần vị thế còn lại khi:

```
EOD close <= locked stop
```

- Chạm stop cũng được coi là kích hoạt.
- Đây là điều kiện có mức ưu tiên cao nhất.
- Lý do ghi vào ledger: `stoploss`.

### B. THỦNG CẬN DƯỚI VÙNG MUA — setup invalidation
Chỉ áp dụng với trigger dạng vùng hai phía `zoneLow–zoneHigh`.

Đóng toàn bộ phần vị thế còn lại khi:

```
EOD close < locked zoneLow
```

- Vùng mua là **inclusive**: đúng bằng `zoneLow` vẫn còn nằm trong vùng.
- Chỉ đóng khi giá đóng cửa nằm **strictly below** cận dưới.
- Không áp dụng một "zone floor" giả cho trigger một phía như `<= triggerPrice` hoặc `>= triggerPrice`.
- Lý do ledger: `zone_floor_break`.

### C. ĐẠT TARGET — profit exit
Đóng toàn bộ phần vị thế còn lại khi:

```
EOD close >= nearest positive locked target
```

- Nếu có nhiều target, dùng target gần nhất / thấp nhất làm mốc chốt tự động đầu tiên.
- Lý do ledger: `target`.

## 3. Thứ tự ưu tiên khi nhiều điều kiện cùng đúng

```
STOPLOSS > ZONE_FLOOR_BREAK > TARGET
```

Thứ tự này là deterministic và defensive. Nó chủ yếu là guard chống dữ liệu malformed hoặc các mức bị chồng lấn bất thường.

## 4. Giá chốt tham chiếu

Hệ thống chỉ dùng dữ liệu EOD, vì vậy **không giả định khớp đúng tại stop hoặc target**.

Giá sự kiện đóng được ghi là:

```
exit price = verified EOD close
```

Điều này giúp tránh backtest đẹp giả do giả định fill tại đúng ngưỡng trong những phiên gap.

`performanceBasis` tiếp tục là `gross-reference`: chưa trừ phí, thuế, trượt giá hoặc khả năng khớp thực tế.

## 5. Gap-through trên chính ngày kích hoạt

Nếu giá từ trên vùng mua rơi xuyên xuống dưới cận dưới hoặc xuống dưới stop trong cùng một EOD:

1. vẫn ghi `activated` để bảo toàn audit trail về việc trigger giá đã bị cắt qua;
2. ngay sau đó ghi `closed` cùng EOD;
3. vị thế **không** được xuất hiện ở tab đang mở.

Không được kích hoạt lại cùng mã trong cùng EOD sau khi vừa tự động đóng.

## 6. Re-entry

Sau một auto-close, mã có thể tạo trade mới ở **một EOD sau** chỉ khi:
- không còn vị thế mở;
- eligibility vẫn `active`;
- locked trigger không bị thay đổi âm thầm;
- xuất hiện một crossing mới hợp lệ theo entry policy hiện hành.

Không hồi tố và không tái kích hoạt ngay trong cùng EOD.

## 7. Data integrity / fail-closed

Mọi auto-close phải có:
- `mode: automatic-eod`;
- `exitPolicy.version`;
- `exitPolicy.basis`;
- `exitPolicy.executionPrice`;
- `exitPolicy.rule`;
- `exitPolicy.triggerPrice`;
- URL nguồn giá EOD.

Projector sẽ từ chối sự kiện auto-close nếu giá/lý do không khớp policy.

Reconciliation sẽ fail deployment nếu còn vị thế mở nào thỏa điều kiện auto-exit sau khi processor chạy.

## 8. Lưu cấu hình

Single source of truth:
- `src/scripts/trade-exit-policy.mjs`

Persisted runtime contract:
- `src/data/trade-ledger.json -> meta.automation.exitPolicy`

Processor:
- `scripts/process-trade-ledger.mjs`

Reconciliation:
- `scripts/reconcile-trade-ledger.mjs`

Backtest:
- `scripts/backtest-trade-exit-policy.mjs`
- `tests/trade-exit-policy.test.mjs`

## 9. Cơ sở phương pháp

Thiết kế bám theo nguyên tắc exit plan / bracket logic: một vị thế mua được bao bởi profit-taker phía trên và stop-loss phía dưới; exit plan nên được xác định trước khi vào lệnh. Hệ thống web này không gửi lệnh tới CTCK, nên chỉ ghi **reference exits** trên dữ liệu EOD đã xác minh.

Tham khảo:
- Fidelity — Exit Strategies: https://www.fidelity.com/learning-center/trading-investing/trading/exit-strategies
- Interactive Brokers — Bracket Orders: https://www.interactivebrokers.com/docs/general/order-types/complex-orders/bracket-orders
- Charles Schwab — Elements of a Smart Trade Plan: https://www.schwab.com/learn/story/5-elements-smart-trade-plan
