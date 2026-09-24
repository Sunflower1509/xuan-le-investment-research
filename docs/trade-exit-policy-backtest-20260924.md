# Trade Exit Policy v1 — Current-Ledger Replay 24/09/2026

**Dataset:** verified EOD 24/09/2026  
**Input open positions:** 21  
**Policy candidates:** 10  
**Remain open:** 11

> Đây là **policy replay / state-machine backtest trên ledger hiện hữu**, không phải backtest hiệu suất lịch sử nhiều năm. Repository hiện chỉ giữ snapshot EOD hiện tại + event ledger, nên không được giả tạo chuỗi OHLC quá khứ để suy diễn fills lịch sử.

## Kết quả

| Mã | Giá kích hoạt | EOD 24/09 | Stop | Cận dưới vùng mua | Target gần nhất | Rule đóng | Hiệu suất tham chiếu |
|---|---:|---:|---:|---:|---:|---|---:|
| HDC | 11.900 | 11.500 | 11.200 | 11.600 | 13.200 | zone_floor_break | -3,36% |
| TCH | 11.950 | 11.250 | — | 12.142 | — | zone_floor_break | -5,86% |
| VCG | 15.650 | 14.050 | 14.700 | 15.400 | 17.200 | stoploss | -10,22% |
| CEO | 12.800 | 11.500 | 11.900 | 12.500 | 14.400 | stoploss | -10,16% |
| DIG | 10.250 | 9.830 | 10.300 | 10.750 | 12.000 | stoploss | -4,10% |
| KBC | 27.000 | 26.000 | 25.800 | 26.600 | 28.300 | zone_floor_break | -3,70% |
| NVL | 12.900 | 12.200 | 12.100 | 12.750 | 14.200 | zone_floor_break | -5,43% |
| IDC | 30.000 | 33.600 | 28.500 | 29.500 | 33.500 | target | +12,00% |
| PHR | 32.800 | 32.000 | — | 36.665 | 52.379 | zone_floor_break | -2,44% |
| VDS | 11.000 | 10.500 | 10.600 | 11.200 | 12.400 | stoploss | -4,55% |

### Breakdown
- `target`: **1**
- `stoploss`: **4**
- `zone_floor_break`: **5**
- Mean reference P/L của 10 vị thế đóng theo replay: khoảng **-3,78%**
- Median: khoảng **-4,32%**

Các con số P/L trên là gross reference từ giá kích hoạt tới EOD close, chưa trừ phí/thuế/trượt giá.

## Boundary backtest đã khóa trong unit tests

- `close == stop` → đóng stoploss.
- `close < stop` → đóng stoploss.
- `close == zoneLow` → **không** đóng theo zone floor.
- `close < zoneLow` → đóng zone floor.
- `close == nearest target` → đóng target.
- Gap vượt target → dùng EOD close làm giá reference, không giả định fill tại target.
- One-sided trigger → không tự chế zone floor.
- Stop + zone cùng vi phạm → stop thắng.
- Same-EOD activation xuyên vùng/stop → activation audit + immediate close.
- Rerun cùng EOD → idempotent, không tạo close trùng.
- Auto-close cùng EOD → chặn reactivation ngay phiên đó.
- Forged automatic close không khớp policy → projector reject.

## Kết luận

Policy v1 loại bỏ trạng thái treo "đã chạm target/stop nhưng vẫn đang mở" và thêm một guard mới cho setup đã xuống dưới cận dưới vùng mua. Sau khi processor chạy, reconciliation yêu cầu **0 unresolved exit violations** trước khi deploy.
