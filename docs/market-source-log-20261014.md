# Nhật ký nguồn nội bộ — VN-Index 14/10/2026 (V3.3.1)

**Ngày phân tích và thực hiện:** 14/10/2026. **Mốc cắt:** hết phiên 14/10 tại Việt Nam. VNDIRECT có dòng phiên lúc 15:04; 133/133 giá cổ phiếu được khóa hậu ATC và byte-verified sau triển khai. **Không có Sổ dữ liệu gốc do người dùng cung cấp**; không mạo nhận nhận định cũ là Sổ.

## A. Nhật ký nguồn, trích gốc và phạm vi

| Chỉ tiêu | Số đã dùng | Phạm vi | Nguồn 1 và trích số gốc | Nguồn 2 và trích số | Nhãn |
|---|---|---|---|---|---|
| VN-Index đóng cửa | **1.704,87** | điểm EOD 14/10 | VNDIRECT Finfo raw vendor: `"date":"2026-10-14","close":1704.87` | VNIndex.ai EOD 15:00: `1.704,87 điểm-14,55 (-0,85%)` | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | **−14,55; −0,85%** | điểm, % EOD | VNDIRECT `"pctChange":-0.846215584324961` | VNIndex.ai `-14,55 (-0,85%)` | ĐÃ ĐỐI CHIẾU |
| Mở/cao/thấp | **1.720,91 / 1.722,65 / 1.699,23** | điểm EOD | VNDIRECT `"open":1720.91,"high":1722.65,"low":1699.23` | VNIndex.ai `1.720,91`, `1.722,65`, `1.699,23` | ĐÃ ĐỐI CHIẾU |
| VN30 | **1.852,44, −8,55 (−0,46%)** | điểm EOD | VNDIRECT marketSession `"close":1852.44` | Investing.com bảng trước mốc EOD, không dùng | 1 NGUỒN |
| HNX-Index | **265,16, +0,91 (+0,34%)** | điểm EOD | VNDIRECT marketSession `"close":265.16` | Stockbiz trang mở trong phiên, không dùng | 1 NGUỒN |
| HOSE khớp lệnh | **10.479,473081 tỷ đồng** | `nmValue`, không bao gồm thỏa thuận | VNDIRECT `"nmValue":10479473080820` | VNIndex.ai `13,53 nghìn tỷ` **TỔNG giao dịch**, khác phạm vi | 1 NGUỒN |
| Khối lượng khớp | **446.355.129 cổ phiếu** | `nmVolume`, không thỏa thuận | VNDIRECT `"nmVolume":446355129` | VNIndex.ai `579,99 triệu` tổng, khác phạm vi | 1 NGUỒN |
| Độ rộng HOSE | **119 tăng / 158 giảm / 60 đứng / 5 sàn** | Universe `vnmarket_prices`; sàn là tập con của giảm | VNDIRECT `"advances":119,"declines":158,"noChange":60`, `"floorStocks":5` | VNIndex.ai 404 mã `128` tăng, `162` giảm, `114` đứng — khác tập đếm | 1 NGUỒN |
| Ngoại khối HOSE khớp ròng/chuỗi 5 phiên | Chưa xác minh | khớp lệnh, EOD | VNIndex.ai `ước tính khoảng 694,85 tỷ` nhưng tóm tắt `772 tỷ` (tạm tính, mâu thuẫn) | Stockbiz/Vietnambiz không có số đồng phạm vi | CHƯA XÁC MINH |
| Tự doanh toàn phiên | Chưa xác minh | khớp lệnh EOD | Vietnambiz chuyên mục chưa có EOD cùng phạm vi | Stockbiz/VNIndex.ai không có số tổng xác minh | CHƯA XÁC MINH |
| Basis VN30F1M | Chưa xác minh | đúng hợp đồng EOD | HNX thông tin phái sinh không trích được số EOD | Investing VN30/VNIndex.ai không có giá hợp đồng EOD cùng kỳ | CHƯA XÁC MINH |

**Các trang và dữ liệu đã mở:** VNDIRECT raw https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-14&size=500 ; GitHub đọc đủ 258 bản ghi https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38532674509 ; khóa 133 mã và marketSession https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38534278663 ; VNIndex.ai EOD https://vnindex.ai/vnindex-hom-nay ; Stockbiz https://web.stockbiz.vn/IndexDetail.aspx và https://web.stockbiz.vn/IndicesStats.aspx ; Investing https://vn.investing.com/indices/vn-historical-data ; Cophieu68 ICG https://cophieu68.vn/quote/history.php?id=ICG .

**Nhật ký tìm kiếm các số còn thiếu/1 NGUỒN:**
- HOSE khớp lệnh: VNIndex.ai có **tổng giao dịch** không cùng phạm vi; Stockbiz có giá trị giao dịch bao gồm thỏa thuận hoặc thời điểm chưa chốt. Độ rộng: VNIndex.ai 404 mã khác universe; Stockbiz số trong phiên, không đối chiếu đúng cùng tập đếm.
- Khối ngoại: VNIndex.ai EOD có ước tính tự mâu thuẫn giữa 694,85 và 772 tỷ, không được lấy thành số chính thức khớp lệnh; Stockbiz https://web.stockbiz.vn/ForeignerTradingStats.aspx không xác nhận ròng chính thức cùng phạm vi; Vietnambiz https://vietnambiz.vn/giao-dich-khoi-ngoai/giao-dich-khoi-ngoai.html không khóa được số 14/10. **Không kích hoạt chặn cứng dựa trên các ước tính này.**
- Tự doanh: đã thử VNIndex.ai, Stockbiz https://web.stockbiz.vn/IndexDetail.aspx và Vietnambiz https://vietnambiz.vn/chung-khoan.htm, không xác minh toàn EOD đúng ngày.
- Basis: thử HNX https://portal.hnx.vn/vi-vn/phai-sinh/thong-tin-cong-bo.html (không có số cuối ngày đọc được), Investing VN30 và VNIndex.ai (không có hợp đồng/basis EOD đúng kỳ).
- VN30/HNX-Index 1 NGUỒN đúng ngày: đã thử Investing và Stockbiz, số không cùng mốc khóa EOD hoặc không đủ đối chiếu. Không tự nâng nhãn.

## B. Phép tính trên chuỗi duy nhất, không nội suy

Gốc (a) VNDIRECT Finfo lịch sử VNINDEX **258 dòng thực đọc**, 01/10/2025–14/10/2026, đúng ngày cuối, thanh khoản `nmValue` chỉ khớp lệnh. Hai dòng neo (trích ngắn nguyên gốc):
- `"date":"2026-10-13","close":1719.42`
- `"date":"2026-10-14","close":1704.87`

| Chỉ báo | Kết quả và phép tính | Nhãn |
|---|---|---|
| MA20 | bình quân 20 giá đóng gần nhất = 1.765,796 → **1.765,80** | TỰ TÍNH |
| MA50 | bình quân 50 giá đóng = 1.779,0202 → **1.779,02** | TỰ TÍNH |
| MA200 | bình quân 200 giá đóng = 1.797,8506 → **1.797,85** | TỰ TÍNH |
| MA20 cách 5 phiên | bình quân đóng từ −25 đến −5 = 1.786,526 → **1.786,53** | TỰ TÍNH |
| TB20 khớp lệnh | trung bình 20 `nmValue` liền trước, loại 14/10 = **12.827,03 tỷ đồng** | TỰ TÍNH |
| Bội số | 10.479,473081 / 12.827,029591 = **0,817×** | TỰ TÍNH |
| So ngày 13/10 | (10.479,473081 / 10.882,858978 − 1)×100 = **−3,71%** | TỰ TÍNH |
| Độ rộng | 119/158 = **0,753** | TỰ TÍNH |
| Vị trí giá đóng | (1.704,87−1.699,23)/(1.722,65−1.699,23) = **0,241**, nằm 1/3 dưới biên ngày | TỰ TÍNH |
| Đáy 20 phiên liền trước | **1.710,95** (13/10), 14/10 đã đóng thấp hơn | TỰ TÍNH |
| Phiên phân phối còn hiệu lực | **9/25 phiên:** 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10 | TỰ TÍNH |
| Phiên 14/10 là phân phối mới? | **Không:** giảm −0,85% nhưng khớp lệnh 10.479,47 tỷ thấp hơn 10.882,86 tỷ ngày 13/10 | TỰ TÍNH |
| ETF 18/09 | đã không nằm trong 25 phiên xét ở ngày 14/10; đã kiểm cờ sự kiện trong mã | TỰ TÍNH |
| Chất lượng dòng tiền theo điểm đóng góp | top 5 giảm: VIC −5,76; VHM −5,76; VPL −0,96; GVR −0,78; LPB −0,74 = **−14,00 điểm**; tỷ lệ 14/14,55=**96,2%**, không phải bán dàn trải theo tiêu chí này; top 5 tăng MBB+0,62 HPG+0,61 FPT+0,31 CTG+0,24 BVH+0,21 = **+1,99 điểm** | TỰ TÍNH từ VNIndex.ai EOD |
| Điểm 7 yếu tố | Giá −1; thanh khoản 0 (giảm nhưng 0,817 <1,2); độ rộng 0 (0,753 >0,67); chất lượng 0 (tập trung); ngoại 0 (thiếu); phân phối −1; phái sinh/vĩ mô 0 = **−2/7** | TỰ TÍNH |
| Nền xu hướng | **XẤU:** đóng dưới MA50, MA20 dốc xuống (1.765,80 <1.786,53) và dưới MA200 | TỰ TÍNH |
| Chặn cứng | **9 phân phối ≥6**, xác minh; nến 1/3 dưới nhưng GT khớp 0,817× TB20 <1, không tạo chặn xả cuối phiên. Các chặn khối ngoại/mốc Sổ cũ KHÔNG KIỂM ĐƯỢC. | TỰ TÍNH |
| R:R tham khảo VN-Index | (MA20 1.765,796−1.704,87)/(1.704,87−đáy mới 1.699,23) = **10,80**; KHÔNG được dùng để mở mua vì chặn cứng. | TỰ TÍNH |

**Quyết định v3.3.1:** chế độ ĐẦY ĐỦ → điểm −2/7, nền XẤU → **trạng thái thô KHÔNG (dòng 1 do chặn cứng 9 phân phối) → trần nền KHÔNG → bước chống đảo chiều bỏ qua vì không có Sổ → chốt KHÔNG dòng 1.** Tỷ trọng cổ phiếu định hướng ≤20%, giảm hoặc không dùng đòn bẩy, không đưa vùng mua mới. Thiếu dữ liệu không được biến thành tín hiệu giảm.

## C. Chỉ ghi sức giá theo ngành — 133 mã website, không phải dòng tiền ròng HOSE

- Ngân hàng (18): 7 tăng, 6 giảm, 5 đứng; MBB +1,57%, VIB +1,09%, SSB −4,28%, LPB −3,05%.
- Chứng khoán (15): 9 tăng, 3 giảm, 3 đứng; FTS +3,75%, TVS +3,17%, SHS +2,56%.
- Bất động sản (10): 1 tăng, 7 giảm, 2 đứng; CEO +1,90%, KOS −6,92%, VHM −5,28%, NVL −3,59%.
- Công nghiệp (8): 5 tăng, 3 giảm; VGS +7,74%, HSG +4,48%, GEE −6,04%.
- Năng lượng (12): 4 tăng, 6 giảm, 2 đứng.
- Cảng biển–logistics (4): 2 tăng, 2 giảm, HAH +1,47%, GMD +0,95%.
- Tiêu dùng (3): 0 tăng, 3 giảm; PNJ −2,86%.
- ICG không phát sinh khớp lệnh 14/10, giá 10.400đ và KL=0 theo VNDIRECT và Cophieu68; KBS không có cây nến cùng ngày; quyết định xác minh độc lập, không tự sinh giá.

**Không có chứng cứ GT khớp lệnh 20 phiên và ngoại ròng theo nhóm để gọi đây là dòng tiền vào/ra thật.**

## D. Kế hoạch NẾU–THÌ, không thay Sổ cũ

- Nếu VN-Index **giữ 1.699,23** nhưng vẫn dưới MA20 1.765,80: KHÔNG mua mới, quản trị hàng khỏe.
- Nếu **đóng dưới 1.699,23** từ phiên tiếp theo: giảm phần yếu, không bình quân giá xuống. Mốc 1.699,23 mới công bố ngày 14/10, không coi là mốc vô hiệu đang hiệu lực của Sổ cũ.
- Nếu lấy lại **MA20 1.765,80**, **MA50 1.779,02**, rồi **MA200 1.797,85** cùng độ rộng/khớp lệnh xác nhận và số phân phối về ≤5: tính lại trạng thái, không tự động mở mua.
- Số tròn 1.700 chỉ là tham chiếu tâm lý, không xác nhận là vùng mua/hỗ trợ vững.
- Chặn cứng từ Sổ trước KHÔNG KIỂM ĐƯỢC do không có Sổ. Không tự gọi là được gỡ.

## E. Chỉ bổ sung Sổ mới, không chép dòng cũ

```
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 14/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
14/10/2026;1704,87;1722,65;1699,23;-0,85;10479,473081;119;158;60;;1852,44;;;Không;1 NGUỒN: GT HOSE khớp/độ rộng, CHƯA XÁC MINH: KN/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG (dòng 1)
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu mới công bố: 1699,23 — đáy 14/10 — áp dụng từ phiên sau
Mốc vô hiệu theo Sổ cũ: KHÔNG KIỂM ĐƯỢC
Kháng cự gần: 1765,80 (MA20), 1779,02 (MA50); kháng cự mạnh: 1797,85 (MA200)
Chặn cứng: ≥6 phiên phân phối, hiện 9 phiên còn hiệu lực; điều kiện gỡ ≤5
Danh sách phân phối còn hiệu lực: 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10
Khối ngoại ròng 5 phiên: KHÔNG KIỂM ĐƯỢC
Basis VN30F1M: KHÔNG KIỂM ĐƯỢC
PHẦN C — ĐÍNH CHÍNH
Không sửa bất kỳ dòng Sổ cũ nào vì người dùng chưa cung cấp.
```

## F. Bảng tự kiểm 20 mục, không đánh "đạt" khi còn giới hạn

| # | Mục | Kết quả | Giải thích |
|---|---|---|---|
| 1 | Ngày có giao dịch, mốc cắt | ĐẠT | EOD 14/10 từ VNDIRECT 15:04 |
| 2 | Không dùng dữ liệu các phiên sau | ĐẠT | chỉ dữ liệu 14/10 và trước |
| 3 | Không lấy giá từ trí nhớ/snippet | ĐẠT | Raw log và trang đã mở |
| 4 | Nguồn thật, đã mở | ĐẠT | VNDIRECT Actions, VNIndex.ai, Cophieu68 |
| 5 | Số lõi đối chiếu đầy đủ | KHÔNG ĐẠT ĐẦY ĐỦ | Giá & % ≥2 nguồn; khớp lệnh/độ rộng 1 NGUỒN |
| 6 | Nhật ký tìm nguồn thiếu | ĐẠT CÓ GIỚI HẠN | đã thử các trang khác phạm vi và chưa chốt |
| 7 | Chuỗi 1 gốc, neo gốc, không ghép | ĐẠT | 258 dòng VNDIRECT, 2 dòng neo |
| 8 | Mọi con số truy nguồn | ĐẠT CÓ GIỚI HẠN | Số thiếu không công bố |
| 9 | Sổ cũ không sao chép/sửa | ĐẠT | không có Sổ gốc |
| 10 | Đúng ngày người dùng yêu cầu | ĐẠT | 14/10/2026 |
| 11 | Chế độ vận hành | ĐẠT | ĐẦY ĐỦ |
| 12 | Nền xu hướng & MA200 | ĐẠT | XẤU, có 200 phiên |
| 13 | Điểm đồng thuận có lý do | ĐẠT | −2/7, thiếu điểm chấm 0 |
| 14 | Cổng chặn & tồn tại từ trước | ĐẠT CÓ GIỚI HẠN | chặn phân phối 9; thiếu Sổ/ngoại không giả là gỡ |
| 15 | 3 bước quy đổi trạng thái | ĐẠT | KHÔNG → KHÔNG → bỏ bước chống đảo chiều |
| 16 | Vùng mua đúng dòng | ĐẠT | Không vùng mua khi KHÔNG |
| 17 | Mốc nguồn, R:R không quyết định | ĐẠT | MA và đáy 14/10, 10,80 chỉ tham khảo |
| 18 | Dòng tiền từng ngành | KHÔNG ĐẠT | chỉ công bố sức giá 133 mã, không gán dòng tiền thật |
| 19 | Bài web và Zalo đồng số, giữ khung | KIỂM SAU ĐĂNG | không tự tuyên bố đã đăng/kiểm trước khi thành công |
| 20 | Sổ chỉ dòng mới | ĐẠT | cột 15 và phần B mới; không chép cũ |
