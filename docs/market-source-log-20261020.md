# NHẬT KÝ NGUỒN VN-INDEX — phiên 20/10/2026 — V3.3.1

**Ngày phân tích:** 20/10/2026, thứ Ba, có phiên giao dịch. **Mốc dữ liệu giá:** hết phiên 20/10/2026 theo khóa VNDIRECT Finfo lúc 15:08 giờ Việt Nam và bảng Stockbiz cập nhật 14:52. **Mốc sự kiện và tin tức:** hết ngày 20/10/2026; không đưa dữ liệu tương lai. **Không có Sổ dữ liệu tự lưu của người dùng**; các bản nhận định trên website không tự động thay thế Sổ gốc.

Đã đối chiếu Prompt `docs/prompt-nhan-dinh-vnindex-v3.md` ba lượt: (1) cổng và nguồn; (2) chấm điểm/đếm phân phối/chặn; (3) nhận định/bản đăng/bảng tự kiểm/Sổ và khóa bố cục.

## A. Nhật ký nguồn số lõi (trích ngắn từ nguồn thực đọc)

| Dữ kiện | Giá trị và phạm vi | Nguồn đã mở / bằng chứng ngắn | Nhãn |
|---|---|---|---|
| VN-Index đóng cửa và thay đổi | **1.691,97; +2,13 điểm; +0,13%** | VNDIRECT Finfo, tệp log RAW_VENDOR_INDEX_QUOTE, phiên 20/10, lúc 15:08: `"close":1691.97`, `"pctChange":0.126047436443688`. Stockbiz IndexStats ngày 20/10, cập nhật 14:52: `20/10/2026 1691,97 +2,13(+0,13%)`. | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.845,51; +6,33; +0,34%** | VNDIRECT marketSession `"close":1845.51`; Stockbiz 14:52 `VN30 1.845,51 +6,33/+0,34%`. | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **257,96; +0,05; +0,02%** | VNDIRECT marketSession `"close":257.96`; Stockbiz 14:52 `HNX-INDEX 257,96 +0,05/+0,02%`. | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.692,73 / 1.695,48 / 1.677,19** | VNDIRECT thô phiên 20/10: `"open":1692.73,"high":1695.48,"low":1677.19`; VNIndex.ai ảnh chụp 14:22 cùng bộ OHLC (nhưng giá đóng tại 14:22 KHÔNG phải EOD). | **ĐÃ ĐỐI CHIẾU phần OHLC** |
| Giá trị khớp **VNINDEX VNDIRECT** | **11.161,45413595 tỷ đồng**, KL khớp **488.370.161 CP** | VNDIRECT Finfo raw 20/10 `"nmValue":11161454135950`, `"nmVolume":488370161`. Dùng một chuỗi này cho TB20, bội số, phân phối. | **1 NGUỒN** |
| Độ rộng **tập VNDIRECT VNINDEX** | **178 tăng/109 giảm/65 đứng/6 sàn** | GitHub khóa marketSession 20/10 `"advance":178,"unchanged":65,"decline":109,"floor":6`; raw vendor `"advances":178,"declines":109,"noChange":65`. Số 404 mã trong VNIndex.ai 14:22 thuộc tập/giờ khác, không đối chiếu cùng phạm vi. | **1 NGUỒN** |
| 133 cổ phiếu được khóa giá | **133/133, đúng ngày 20/10/2026** | GitHub Actions EOD run 39391083035: VNDIRECT từng mã đối chiếu KBS exact-date 133/133 (CafeF chưa có dòng 20/10). | **ĐÃ ĐỐI CHIẾU từng mã VNDIRECT–KBS** |
| Khối ngoại **khớp HOSE cuối phiên + 5 phiên** | **Không có số cuối ngày đạt chuẩn hai nguồn** | Stockbiz IndexStats 20/10 có mua/bán **tổng giao dịch**, khác số khớp. VNIndex.ai báo số **ước tính giữa phiên**; HODL tại lúc kiểm tra còn dữ liệu 19/10, gắn tạm. Không dùng để kích hoạt chặn ngoại 5 phiên. | **CHƯA XÁC MINH** |
| Tự doanh khớp ròng cuối phiên | **Chưa có số đủ đối chiếu** | HODL vẫn 15/10; Stockbiz trang dữ liệu tổng không có số tự doanh khớp; VNIndex.ai không có ròng tự doanh EOD cùng phạm vi. | **CHƯA XÁC MINH** |
| Basis hợp đồng VN30F1M | **Chưa đủ hai nguồn có mốc giờ EOD** | HNX/phái sinh, Stockbiz và VNIndex.ai chưa cho basis cùng hợp đồng và thời điểm EOD được mở, kiểm. | **CHƯA XÁC MINH** |
| Cờ ngày đáo hạn 20/10 | **Không gắn cờ dựa suy đoán** | Ngày đáo hạn phái sinh VN30 tháng 10 đã được xác minh là 15/10; chưa có chứng cứ sự kiện đặc thù 20/10 làm méo khớp lệnh. | **Không ghi cờ** |

## B. Nhật ký tìm kiếm và các nguồn đã thử

- **Stockbiz bảng giá (mở, đọc đầy đủ hàng 20/10 14:52):** https://web.stockbiz.vn/IndicesStats.aspx — đối chiếu đúng đóng cửa chỉ số và %; chỉ có **tổng giá trị GD** 12.993,98 tỷ, không cùng phạm vi khớp VNDIRECT.
- **VNDIRECT API nguyên gốc qua quy trình kiểm toán đọc và ghi 262 hàng:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39391337887 — `SOURCE_HISTORY_ROWS_JSON`, `RAW_VENDOR_INDEX_QUOTE`, `VERIFIED_MARKET_EVIDENCE_JSON`; không nói rằng API đã trực tiếp mở được từ công cụ tìm web.
- **Khóa giá và triển khai EOD:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39391083035.
- **VNIndex.ai snapshot giữa phiên:** https://vnindex.ai/vnindex-hom-nay — đã mở ảnh chụp **14:22**, thiếu EOD tại lúc mở; chỉ đối chiếu OHLC, không sử dụng đóng cửa/ngoại/độ rộng/tổng GD 14:22.
- **Investing.com giá lịch sử:** https://vn.investing.com/indices/vn-historical-data — tại lúc tìm hiển thị ảnh chụp **13:43**, không được dùng thay số chốt 15:08.
- **HODL theo dõi khối ngoại và tự doanh:** https://hodl.vn/indices/vnindex/ — lúc mở vẫn ghi phiên 19/10 `(tạm)`, không đủ xác minh 20/10.
- **Taichinh.com:** https://taichinh.com/chung-khoan — cập nhật 13:51, không phải EOD.
- **HOSE bản tin chính thức ngày 20/10:** chưa đọc được bản tin cuối phiên lúc khóa dữ liệu; không ghi giả đường dẫn. Giá VNDIRECT+Stockbiz đủ 2 nguồn, nhưng khớp HOSE và độ rộng chưa đủ nguồn thứ hai đồng phạm vi.

**Nhật ký số 1 NGUỒN:** (i) GT khớp VNINDEX: thử Stockbiz (chỉ tổng GD), VNIndex.ai 14:22 (khác giờ/tổng), VNDIRECT Finfo (đúng phạm vi dùng); (ii) Độ rộng: VNDIRECT đúng phiên và tập riêng, VNIndex.ai 14:22 404 mã khác mốc, Stockbiz IndexStats thiếu bảng độ rộng tương ứng. **CHƯA XÁC MINH:** (iii) ngoại: HODL thiếu 20/10, Stockbiz chỉ tổng GD, VNIndex.ai 14:22 ước tính; (iv) tự doanh: HODL cũ, Stockbiz IndexStats thiếu, VNIndex.ai thiếu; (v) basis: không có ba chứng cứ độc lập cùng mã hợp đồng/giờ nên không chấm điểm. Mục chưa xác minh ghi rõ tên, tuyệt đối không tạo số ước tính.

## C. Tính toán đồng nhất từ 262 phiên VNDIRECT Finfo

**Gốc bảng:** 262 dòng thực đọc, từ **01/10/2025 đến 20/10/2026**, không ghép nguồn, không nội suy. Hai dòng neo (trích từ bản ghi đúng ngày): `"date":"2026-10-19","close":1689.84`; `"date":"2026-10-20","close":1691.97`.

| Phép tính | Công thức và kết quả | Nhãn |
|---|---|---|
| MA20 | TB 20 giá đóng cửa gồm 20/10: **1.742,348 = 1.742,35** | TỰ TÍNH |
| MA50 | TB 50 đóng cửa: **1.773,1154 = 1.773,12** | TỰ TÍNH |
| MA200 | TB 200 đóng cửa: **1.796,5367 = 1.796,54** | TỰ TÍNH |
| Dốc MA20 5 phiên | **1.742,348 − 1.771,058 = −28,710** điểm: dốc xuống | TỰ TÍNH |
| TB20 khớp VNINDEX | Trung bình 20 phiên **liền trước** 20/10: **11.968,05229446 tỷ** | TỰ TÍNH |
| Bội số khớp | **11.161,45413595 / 11.968,05229446 = 0,932604 → 0,933×** | TỰ TÍNH |
| Khớp ngày/phiên trước | **11.161,45413595 / 11.323,15122708 − 1 ≈ −1,43%** | TỰ TÍNH |
| Độ rộng | **178/109 = 1,633**, điểm **+1** (vượt ngưỡng ≥1,5) | TỰ TÍNH |
| Nến | `(1691,97−1677,19)/(1695,48−1677,19)=0,80809`, đóng trong **1/3 phía trên** biên phiên | TỰ TÍNH |
| Đáy 20 phiên trước | **1.682,54** ngày 19/10; phiên 20/10 có đáy mới **1.677,19** nhưng đóng **cao hơn** đáy cũ | TỰ TÍNH |
| Số phân phối còn hiệu lực | **8/25:** 23/09; 24/09; 28/09; 30/09; 02/10; 08/10; 09/10; 19/10. Phiên 20/10 **đi ngang theo quy tắc** (chỉ +0,126% <+0,2%) nên không phát sinh phân phối mới; không có phiên nào ở đầu cửa sổ đủ điều kiện rơi ra trong đợt này; loại phiên đáo hạn 15/10. | TỰ TÍNH |
| Nền | **XẤU**: đóng 1.691,97 dưới MA50 1.773,12, MA20 dốc xuống, cũng dưới MA200 1.796,54. | TỰ TÍNH |
| Điểm 7 yếu tố | Giá/MA **−1**; thanh khoản **0** vì phiên **đi ngang** (0,126% <0,2%); độ rộng **+1** (178/109); chất lượng dòng tiền **0** vì phiên đi ngang và chưa đủ đóng góp top 5 EOD; ngoại **0** vì thiếu dữ liệu đúng khớp; phân phối **−1** vì 8≥5; phái sinh/vĩ mô **0** vì thiếu basis tin đủ kiểm → **−1/7**. | TỰ TÍNH |
| Chặn cứng | **8 phiên phân phối/25 ≥6** còn hiệu lực, bắt buộc **KHÔNG**. Không chặn xả cuối phiên vì đóng ở phần ba trên. Cổng khối ngoại và mốc vô hiệu Sổ cũ: **KHÔNG KIỂM ĐƯỢC**, không coi đã gỡ. | TỰ TÍNH |
| Đường đi trạng thái | Chế độ **ĐẦY ĐỦ**, trạng thái thô **KHÔNG dòng 1** (chặn cứng) → trần nền XẤU **KHÔNG** → không có Sổ người dùng nên **bỏ chống đảo chiều** → **KHÔNG dòng 1**. | TỰ TÍNH |
| R:R chỉ số | **KHÔNG ÁP DỤNG** vì mốc vô hiệu trong Sổ gốc chưa kiểm được; không tự dựng mức dừng cho VN-Index. | theo V3.3.1 |

## D. Kế hoạch vận hành và nguồn sức giá

- Nhịp ngày 20/10 là **giằng co hồi trong xu hướng yếu**, không phải xác nhận đảo chiều: VNINDEX đóng phía cao của ngày nhưng thấp hơn MA20/MA50/MA200 và 8 phân phối/25 chưa gỡ.
- Nhóm **có sức giá trong tập 133 mã**: chứng khoán 10 tăng/3 giảm/2 đứng, nông nghiệp 6/0/0, cảng biển & logistics 4/0/0, khu công nghiệp 4/0/0, công nghiệp 6/1/1. Ngân hàng phân hóa 5 tăng/6 giảm/7 đứng; bất động sản 6 tăng/3 giảm/1 đứng nhưng VHM giảm 4,15%, KOS giảm 6,99%. Đây là tập con, **không gán tiền ròng theo toàn ngành**.
- Mốc kỹ thuật: **1.677,19** (đáy ngày 20/10 mới công bố, theo quy tắc chỉ có hiệu lực kiểm chặn từ phiên sau nếu được chọn mốc vô hiệu); **1.682,54** (đáy 19/10), **1.690,56** (đáy 15/10 từng công bố, 19/10 thủng; 20/10 lần đầu đóng lại phía trên). Chỉ số đóng 20/10 **1.691,97**. Không tự xác nhận chặn Sổ gốc đã được gỡ khi chưa có 2 phiên liên tiếp và chưa được cung cấp Sổ.
- NẾU phiên tới mất **1.677,19** trên giá đóng, THÌ kiểm tra ngay mã yếu, giảm rủi ro theo stop riêng; không bắt đáy.
- NẾU VNINDEX còn dưới **MA20 1.742,35**, THÌ **KHÔNG** mua mới khi chặn 8 phân phối chưa gỡ; không đuổi cổ phiếu hồi.
- NẾU lấy lại MA20 **1.742,35**, MA50 **1.773,12**, MA200 **1.796,54**, phân phối còn **≤5** và thanh khoản, độ rộng, dòng tiền đủ xác nhận, THÌ mới tính lại trạng thái, không tự sinh lệnh.
- Tỷ trọng cổ phiếu chỉ **mức định hướng ≤20%** trong trạng thái KHÔNG theo Prompt, tùy tài khoản và không thay stop/target cổ phiếu sẵn có.

## E. Dòng bổ sung Sổ phiên 20/10 — không chép lịch sử

```text
PHẦN A — DÒNG MỚI DUY NHẤT
20/10/2026;1691,97;1695,48;1677,19;+0,13;11161,45413595;178;109;65;;1845,51;;;Không;1 NGUỒN:GT khớp/độ rộng;CHƯA XÁC MINH:ngoại khớp/tự doanh/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái KHÔNG — dòng 1; chế độ ĐẦY ĐỦ, nền XẤU
Điểm −1/7; phân phối 8/25: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10
MA20 1742,35; MA50 1773,12; MA200 1796,54
Đáy mới 1677,19 chỉ áp dụng làm mốc kiểm từ phiên sau nếu xác lập; đáy 1682,54 ngày 19/10
Mốc 1690,56 từng xuất bản 15/10, đã thủng 19/10; ngày 20/10 mới phục hồi 1 lần, KHÔNG tự báo gỡ chặn
Sổ gốc người dùng chưa cung cấp: mốc vô hiệu chính thức, khối ngoại khớp và các chặn cũ KHÔNG KIỂM ĐƯỢC
PHẦN C — ĐÍNH CHÍNH
Không chỉnh các dòng Sổ gốc không được cung cấp.
```

## F. Bảng tự kiểm 20 tiêu chí — trung thực

| # | Mục | Kết quả |
|---|---|---|
| 1 | Ngày phân tích 20/10 có phiên, chốt 15:08 | ĐẠT |
| 2 | Không dùng dữ liệu phiên tương lai | ĐẠT |
| 3 | Không dùng giá giữa phiên cho EOD | ĐẠT |
| 4 | Nguồn đã mở thật, GitHub raw thay cho API không mở trực tiếp | ĐẠT |
| 5 | Số lõi đủ 2 nguồn | KHÔNG ĐẦY ĐỦ: giá/index đạt, GT khớp và độ rộng một nguồn |
| 6 | Nhật ký tìm kiếm đủ đường dẫn và lý do khác phạm vi | ĐẠT CÓ GIỚI HẠN |
| 7 | Chuỗi 262 hàng/2 neo/thống nhất một gốc và công thức | ĐẠT |
| 8 | Mọi con số web theo nhật ký | ĐẠT CÓ GIỚI HẠN nguồn một đơn vị |
| 9 | Không sửa Sổ cũ | ĐẠT |
| 10 | Đúng ngày người dùng yêu cầu | ĐẠT |
| 11 | Chế độ đủ 5 phép tính | ĐẠT: ĐẦY ĐỦ |
| 12 | Nền giá/MA/dốc kèm trị số | ĐẠT |
| 13 | Bảy yếu tố đúng ngưỡng phiên đi ngang | ĐẠT |
| 14 | Chặn cứng 8 phân phối; chặn chưa kiểm ghi rõ | ĐẠT CÓ GIỚI HẠN |
| 15 | Trạng thái ba bước, chỉ một dòng áp dụng | ĐẠT: KHÔNG dòng 1 |
| 16 | Không sinh vùng mua mới trong trạng thái KHÔNG | ĐẠT |
| 17 | Mốc lấy từ giá thực, không dời stop; R:R chưa áp dụng | ĐẠT |
| 18 | Nhóm ngành không mạo nhận tiền ròng | ĐẠT khi ghi sức GIÁ, không ghi tiền ròng |
| 19 | Bản tin khớp website, bố cục và deploy | CHƯA KIỂM — cập nhật sau triển khai |
| 20 | Sổ mới chỉ một dòng, không chép lịch sử | ĐẠT |
