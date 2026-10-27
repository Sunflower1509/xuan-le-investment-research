# NHẬT KÝ NGUỒN — NHẬN ĐỊNH VN-INDEX 27/10/2026 · V3.3.1

**Phiên phân tích:** Thứ Ba 27/10/2026, có giao dịch. **Mốc khóa nguồn chính:** VNDIRECT Finfo `15:19` giờ Việt Nam, sau ATC; VNIndex.ai `đã đóng cửa · 15:00`; Stockbiz chỉ số `14:55` và bảng thị trường `14:58`. Giới hạn toàn bộ chứng cứ ở **hết ngày 27/10/2026**, không đưa tin hoặc số phiên sau. **Sổ dữ liệu tự lưu của người dùng không được cung cấp**, không tự thay bằng bài đăng website.

**Đọc Prompt ba lượt riêng:** (1) mục 0–I: cổng số lõi, tối thiểu 2 nguồn, một nguồn, nhãn thiếu, lịch sử 21/26 phiên; (2) mục II: nền, chấm 7 yếu tố, phân phối, chặn mềm/cứng, 3 bước trạng thái; (3) mục III–XII và phụ lục: kế hoạch hành động, câu chữ Việt hóa, nhật ký và một dòng Sổ mới, 20 tự kiểm, không sửa cấu trúc. Bản kiểm: `docs/prompt-nhan-dinh-vnindex-v3.md` SHA `d3776d82a27f643bdc40b13729f564003417e2d0`.

## I. Nguồn lõi và phạm vi, trích dẫn đúng phiên

| Chỉ tiêu | Giá trị 27/10 | Nguồn 1 / bằng chứng ngắn | Nguồn đối chiếu / sai khác | Nhãn |
|---|---|---|---|---|
| VN-Index đóng và thay đổi | **1.761,87; −1,68 điểm; −0,10%** | VNDIRECT raw `"close":1761.87,"pctChange":-0.0952623968699551` | Stockbiz `27/10/2026 1761,87 -1,68(-0,10%)`; VNIndex.ai `1.761,87 điểm (-1,68, -0,10%)` | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.888,40; −1,13; −0,06%** | VNDIRECT marketSession `"close":1888.4` | Stockbiz sau ATC `VN30 1.888,40 -1,13/-0,06%` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **259,50; +0,18; +0,07%** | VNDIRECT marketSession `"close":259.5` | Stockbiz `HNX-INDEX 259,50 +0,18/+0,07%` | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp VN-Index | **1.763,46 / 1.772,62 / 1.758,60** | VNDIRECT Finfo `"open":1763.46,"high":1772.62,"low":1758.6` | VNIndex.ai `1.763,46` mở và `1.772,62` cao **trùng**; nhưng **thấp 1.759,11**, lệch 0,51 điểm. Không giả đã đối chiếu mức thấp. | **ĐÃ ĐỐI CHIẾU mở/cao**, **1 NGUỒN cho thấp** |
| **Giá trị và khối lượng KHỚP** tập VNINDEX theo VNDIRECT | **10.254,68493203 tỷ đồng / 468.766.835 CP** | VNDIRECT raw `"nmValue":10254684932030,"nmVolume":468766835`; chuỗi 267 phiên cùng trường | Stockbiz bảng 27/10 ghi **13.497,73 tỷ** là **tổng giao dịch**; VNIndex.ai **13,92 nghìn tỷ** cũng tổng GD, không so đồng phạm vi với khớp lệnh | **1 NGUỒN** |
| Độ rộng **tập VNINDEX VNDIRECT** | **118 tăng / 192 giảm / 56 đứng / 5 sàn** | VNDIRECT raw `"advances":118,"declines":192,"noChange":56`, marketSession `floor:5` | VNIndex.ai 404 mã: `123 tăng / 195 giảm / 86 đứng` (khác tập), không gọi là 2 nguồn tương ứng | **1 NGUỒN** |
| 133 giá EOD website | **133/133 mã đúng ngày 27/10** | GitHub EOD khóa 40472826314 `coverage.priceDate=2026-10-27`, nguồn gốc VNDIRECT | KBS có EOD đúng ngày và **133/133 giá đóng trùng**; CafeF không có hàng đúng ngày lúc khóa. Khối lượng **131/133** trùng, **CEO** chênh 100 CP và **PVS** chênh 2.000 CP; website dùng KL nguồn chính | **ĐÃ ĐỐI CHIẾU GIÁ** |
| Top mã kéo/đè | VIC +5,12; VPL +0,37; MWG +0,27; VPB −0,82; GAS −0,80; VHM −0,68 (điểm) | VNIndex.ai bảng `Đã đóng cửa · 15:00`, một nguồn | Stockbiz không có bảng đối chiếu trọng số đúng phương pháp, báo cáo CTCK 27/10 chưa có bản đủ khóa khi tra; phiên **đi ngang ±0,2%** → **yếu tố 4 chấm 0**, không chia tổng top5 cho biến động chỉ số âm | **1 NGUỒN cho bảng Top**, **TỰ TÍNH 0 theo quy tắc** |
| Khối ngoại HOSE **TỔNG giao dịch** | Stockbiz **mua 1.179,45 tỷ / bán 1.429,82 tỷ, ròng −250,37 tỷ** | Stockbiz IndexStats hàng 27/10: `1.179,45 tỷ` / `1.429,82 tỷ` | VNIndex.ai báo **−444,37 tỷ ƯỚC TÍNH**, khác cách tính/tập; không tuyên bố đây là ròng khớp HOSE | **1 NGUỒN tổng**, VNIndex.ai **TẠM TÍNH** |
| Khối ngoại **ròng KHỚP HOSE** và chuỗi 5 phiên | **Không khóa được hai nguồn đồng phạm vi/giờ** | Stockbiz số mua/bán là tổng; VNIndex.ai ước tính −444,37; HODL lúc kiểm vẫn ghi `Trong phiên 27/10` nên không là khóa EOD | Không điền giá trị giả; không dùng số thiếu xác nhận điều kiện chặn ngoại 5 phiên | **CHƯA XÁC MINH** |
| Tự doanh ròng HOSE 27/10 | **Không có dữ liệu đúng phiên đã đối chiếu** | Đã thử Smoney (403 khi mở), nmquan tới 26/10, HODL (không có bảng 27/10 EOD đúng phạm vi) | Không chấm điểm tự doanh | **CHƯA XÁC MINH** |
| Basis VN30F1M đúng ngày và hợp đồng 27/10 | **Không có hai nguồn cùng kỳ/giờ khóa EOD** | Đã thử Stockbiz IndexStats (không có phái sinh), HODL (chỉ thị trường), tìm HNX/phái sinh (chưa mở đúng nguồn cuối phiên), không suy giá từ VN30 | Không dùng hợp đồng sai tháng/giờ | **CHƯA XÁC MINH** |
| Sự kiện có thể méo thanh khoản 27/10 | **Chưa xác minh cờ đặc thù** | Không suy ngày 27/10 là đáo hạn 15/10 hoặc phiên ETF chỉ từ thông tin hoán đổi 26/10 | Không tự gắn cờ | **KHÔNG GẮN CỜ** |

### Các trang và bản ghi thực sử dụng

- Stockbiz bảng chỉ số **27/10**, cập nhật 14:55–14:58: https://web.stockbiz.vn/IndicesStats.aspx (giá và % chốt trùng; **tổng giao dịch** 13.497,73 tỷ, không dùng làm khớp).
- VNIndex.ai **Đã đóng cửa 15:00** 27/10: https://vnindex.ai/vnindex-hom-nay (giá 1.761,87, bảng top5 1 nguồn, phạm vi rộng 404 mã; **đáy 1.759,11 lệch VNDIRECT 1.758,60**).
- Read-only kiểm toán VNDIRECT, **267 hàng nguyên gốc**: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40472835290 — `SOURCE_HISTORY_ROWS_JSON` và `RAW_VENDOR_INDEX_QUOTE`.
- Giá EOD 133/133, VNDIRECT–KBS và đối chiếu sau triển khai: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40472826314
- HODL VNINDEX: https://hodl.vn/indices/vnindex — lúc mở ghi **Trong phiên 27/10**, không chốt ngoại khớp.
- Smoney: https://smoney.com.vn/giao-dich/tu-doanh — truy cập web 403, không chứng minh có dữ liệu 27/10.
- nmquan tự doanh: https://nmquan.vn/data/tu-doanh — trang tới 26/10.
- Trang Stockbiz không có basis: https://web.stockbiz.vn/IndexDetail.aspx.
- Không tìm ra báo cáo HOSE PDF số khớp, basis và bản tự doanh EOD hai nguồn đúng phiên đã mở; không bịa URL hoặc số.

**Nhật ký tìm lại:** `1 NGUỒN` khớp: thử VNDIRECT raw (dùng), Stockbiz tổng GD và VNIndex.ai tổng GD (khác tập); `1 NGUỒN` độ rộng: thử VNDIRECT raw (dùng), VNIndex.ai tập 404 mã và Stockbiz thống kê chỉ số; `1 NGUỒN` đáy: VNDIRECT 1.758,60, VNIndex.ai 1.759,11, Stockbiz IndexStats không có thấp đúng phiên. `CHƯA XÁC MINH` ngoại khớp: Stockbiz tổng, VNIndex.ai ước tính, HODL trong phiên. Tự doanh: Smoney lỗi 403, nmquan mới 26/10, HODL không đủ khớp. Basis: Stockbiz IndexStats, HODL và tìm HNX/phái sinh chưa ra số EOD cùng kỳ/giờ.

## II. Tính toán 267 phiên đồng nhất

**Nguồn (a):** VNDIRECT Finfo `vnmarket_prices`, **267 hàng đã đọc** từ **01/10/2025 đến 27/10/2026**, đồng nhất giá và `nmValue`; không nối nguồn, không nội suy, không trộn giá trị giao dịch tổng. Hai hàng neo `"date":"2026-10-26","close":1763.55` và `"date":"2026-10-27","close":1761.87`. Đóng cửa 27/10 đã đối chiếu hai nguồn độc lập.

| Phép tính | Dữ kiện và kết quả | Nhãn |
|---|---|---|
| MA20 | TB20 đóng cửa kể cả 27/10: **1.736,2785 → 1.736,28** | TỰ TÍNH |
| MA50 | TB50 đóng cửa: **1.771,5518 → 1.771,55** | TỰ TÍNH |
| MA200 | TB200 đóng cửa: **1.796,4089 → 1.796,41** | TỰ TÍNH |
| Dốc MA20 | **1.736,2785 − 1.742,3480 = −6,0695 điểm** so cách 5 phiên → vẫn dốc xuống | TỰ TÍNH |
| TB20 khớp lệnh liền trước | 20 phiên giao dịch thực **29/09–26/10**, không gồm 27/10: **12.329,578014951 tỷ** | TỰ TÍNH |
| Bội số khớp | **10.254,68493203 / 12.329,578014951 = 0,831714 → 0,832 lần** | TỰ TÍNH |
| So phiên 26/10 | **10.254,68493203 / 11.874,73449606 − 1 ≈ −13,64%** | TỰ TÍNH |
| Độ rộng | **118/192 = 0,61458**, đủ ngưỡng yếu tố 3 **−1** (≤0,67) | TỰ TÍNH |
| Phân loại biến động phiên | **−0,09526%** chưa tới giảm −0,2% theo II.A ⇒ phiên **ĐI NGANG**, mặc dù VN-Index giảm 1,68 điểm | TỰ TÍNH |
| Nến theo VNDIRECT | (1.761,87−1.758,60)/(1.772,62−1.758,60) = **0,23324**, 1/3 dưới, **đáy VNDIRECT 1 NGUỒN** do VNIndex.ai ghi đáy khác | TỰ TÍNH |
| Đáy 20 phiên trước | **1.677,19**, ngày 20/10, dữ liệu VNDIRECT cùng gốc | TỰ TÍNH |
| Phân phối 25 phiên | **8/25:** 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. 27/10 là đi ngang theo ngưỡng, khớp thấp hơn phiên trước nên **không có phân phối mới**. Không có phiên đang hiệu lực được gỡ; 15/10 loại theo cờ đáo hạn ngày cũ. | TỰ TÍNH |
| Nền | **XẤU**: đóng 1.761,87 thấp hơn MA50 1.771,55, MA20 dốc xuống, giá còn dưới MA200 1.796,41 | TỰ TÍNH |
| Điểm bảy yếu tố | Giá/MA **0** (trên MA20, dưới MA50, không thủng đáy 20); khớp **0** (phiên đi ngang, không chấm theo bội số); độ rộng **−1** (0,615); chất lượng trụ **0** (phiên đi ngang); ngoại **0** (thiếu ròng khớp); phân phối **−1** (8/25); phái sinh/vĩ mô **0** (chưa đủ basis/tin cụ thể). **TỔNG = −2/7.** | TỰ TÍNH |
| Chặn mềm | **Có:** MA50 **1.771,55** là kháng cự có xuất xứ nằm trên đóng cửa **9,68 điểm / 0,55%**, ≤1,5%; chưa vượt. Không ghi chặn xanh điểm/đỏ mã vì chỉ số giảm. | TỰ TÍNH |
| Chặn cứng | **Có 8 phân phối hợp lệ/25 ≥6**; gỡ khi còn ≤5. Chặn xả cuối **KHÔNG** kích hoạt dù đóng ở 1/3 dưới, bởi bội số **0,832 <1**. Chặn xanh điểm/đỏ mã không áp dụng vì VN-Index không xanh. Chặn ngoại 5 phiên và mốc vô hiệu Sổ gốc **KHÔNG KIỂM ĐƯỢC**, không mặc định đã gỡ. | TỰ TÍNH |
| Quy đổi trạng thái | **ĐẦY ĐỦ** đủ MA20, MA50, dốc MA20, khớp TB20, phân phối. **Bước 1 KHÔNG dòng 1** do chặn cứng ⇒ **Bước 2 trần nền XẤU vẫn KHÔNG** ⇒ **Bước 3 không có Sổ gốc nên bỏ chống đảo chiều** ⇒ **KHÔNG dòng 1**. | Theo V3.3.1 |
| R:R | **Không áp dụng**, vì không mở mua mới và mốc vô hiệu chính thức của Sổ người dùng chưa có. Không tạo tỷ số giả định. | Theo V3.3.1 |

## III. Các nhóm ngành và thực chiến có điều kiện

Trong **mẫu 133 mã theo dõi của website, không phải toàn HOSE**: ngân hàng **5 tăng/11 giảm/2 đứng** (18); chứng khoán **3 tăng/9 giảm/3 đứng** (15); năng lượng **0 tăng/12 giảm/0 đứng** (12); cảng biển/logistics **0 tăng/4 giảm** (4); nông nghiệp **0 tăng/6 giảm** (6); bất động sản nhóm tổng hợp **1 tăng/8 giảm/1 đứng** (10); công nghiệp **5 tăng/3 giảm** (8). Đây là **sức GIÁ**, không phải tiền RÒNG vào hoặc ra nhóm ngành; chưa có giá trị khớp ngành/ngoại ngành cùng phạm vi đủ xác minh.

Theo VNIndex.ai EOD 27/10, trong **bảng Top kéo** VIC +5,12, VPL +0,37, MWG +0,27 điểm; **Top giảm** VPB −0,82, GAS −0,80, VHM −0,68 điểm. Đây là một nguồn về sức kéo mã, không chứng minh vốn ròng; **không tính tỷ lệ top5/biến động −1,68 điểm trong phiên đi ngang**.

- **NẾU** đóng dưới MA50 **1.771,55** và 8 phân phối/25 chưa gỡ **THÌ KHÔNG mua mới**, không dùng đòn bẩy, bảo vệ rủi ro từng mã.
- **NẾU** phiên kế tiếp đóng dưới mốc đáy **26/10 là 1.759,84** (mốc kỹ thuật có sẵn, không phải stop Sổ chính thức) **THÌ** rà soát hạ phần yếu **khi chính mã đó chạm mức dừng lỗ đã lập**. **Đáy riêng 27/10 của VNDIRECT 1.758,60 đang lệch nguồn khác**, chỉ dùng tham chiếu và ghi giới hạn; **không tự dời stop xuống**.
- **NẾU** vượt MA50 **1.771,55**, MA200 **1.796,41**, MA20 dốc lên, phân phối còn **≤5**, thanh khoản/độ rộng/ngoại được xác nhận **THÌ** tính lại trạng thái; chưa tự phát tín hiệu mua.
- Tỷ trọng định hướng dòng 1 **≤20% cổ phiếu**, phần còn lại tiền mặt, tùy tài khoản; không sửa vùng mua, fair value, target và stop của 133 mã.

## IV. Sổ phiên 27/10 — chỉ một dòng mới (lưu nội bộ)

```text
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 27/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
27/10/2026;1761,87;1772,62;1758,60;-0,10;10254,68493203;118;192;56;;1888,40;;;Không;1 NGUỒN: GT khớp, độ rộng, đáy VNDIRECT; CHƯA XÁC MINH: ngoại khớp/tự doanh/basis
PHẦN B — TRẠNG THÁI MANG SANG
KHÔNG — dòng 1, chế độ ĐẦY ĐỦ, nền XẤU, −2/7
MA20 1736,28, MA50 1771,55, MA200 1796,41, MA20 dốc xuống 6,07 điểm/5 phiên
Phân phối còn 8/25: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10; chặn cứng từ 6, gỡ còn ≤5
Chặn mềm sát MA50 (cách 0,55%). Xả cuối không kích hoạt vì khớp 0,832×TB20
Mốc hỗ trợ đang theo dõi từ phiên trước: 1759,84 (đáy 26/10)
Đáy 27/10 VNDIRECT 1758,60 nhưng VNIndex.ai 1759,11, chưa thống nhất; KHÔNG tự chọn làm mốc Sổ chính thức
Chặn ngoại 5 phiên, mốc vô hiệu Sổ người dùng: KHÔNG KIỂM ĐƯỢC
Không chạy chống đảo chiều khi chưa có Sổ người dùng
PHẦN C — ĐÍNH CHÍNH
Không điều chỉnh hoặc chép dòng Sổ gốc chưa được cung cấp.
```

## V. Bảng tự kiểm 20 tiêu chí

| # | Kiểm tra | Kết quả |
|---|---|---|
| 1 | Có phiên 27/10 và chốt sau ATC | ĐẠT |
| 2 | Không dùng thông tin phiên tương lai | ĐẠT |
| 3 | Số lõi truy nguồn thực, không dùng số tạm làm EOD | ĐẠT |
| 4 | Nguồn truy cập có thật, đối chiếu đúng đơn vị | ĐẠT |
| 5 | Số lõi đủ 2 nguồn cùng phạm vi hoặc nhãn đúng | GIỚI HẠN: chỉ số và đóng cửa đạt, khớp/độ rộng 1 NGUỒN |
| 6 | Nhật ký tìm cho dữ liệu 1 NGUỒN/CHƯA XÁC MINH | ĐẠT có giới hạn; basis/tự doanh chưa đối chiếu |
| 7 | 267 hàng một nguồn, 2 neo, không nội suy | ĐẠT |
| 8 | Số đăng web theo đúng nhật ký | ĐẠT trong phạm vi nhãn |
| 9 | Không giả/ghi đè Sổ cũ | ĐẠT |
| 10 | Đúng ngày được yêu cầu, không lùi phiên | ĐẠT |
| 11 | Đủ MA20, MA50, dốc, TB20, phân phối | ĐẠT: ĐẦY ĐỦ |
| 12 | Nền XẤU và MA cụ thể, dốc thật | ĐẠT |
| 13 | 7 yếu tố có số, tổng −2/7 | ĐẠT |
| 14 | Chặn cứng 8 phân phối và chặn mềm; dữ liệu thiếu không coi đã gỡ | ĐẠT |
| 15 | Thực hiện ba bước trạng thái đúng dòng 1 | ĐẠT |
| 16 | Không ghi vùng mua mới trong KHÔNG | ĐẠT |
| 17 | Mốc xuất xứ, xử lý đáy lệch, R:R không dựng | ĐẠT |
| 18 | Ngành chỉ nói sức giá, không tự nhận vốn ròng | ĐẠT |
| 19 | Nội dung web, bố cục và kiểm tra sau triển khai | **CHỜ kiểm chứng chạy Pages mới** |
| 20 | Sổ bổ sung chỉ một dòng mới | ĐẠT |
