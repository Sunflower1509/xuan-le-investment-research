# Nhật ký nguồn nội bộ — Nhận định VN-Index 13/10/2026, chuẩn v3.3.1

Ngày phân tích và thực hiện: **13/10/2026**, thứ Ba có phiên giao dịch, VNDIRECT khóa EOD sau ATC. Mốc cắt nội dung: hết 13/10/2026 giờ Việt Nam. **Không có Sổ dữ liệu do người dùng dán vào.** Các bài web phiên trước không được xem là Sổ tự lưu theo mục XII. Nhật ký là tài liệu nội bộ, không xuất bản trên giao diện.

## A. Nhật ký nguồn, đối chiếu số lõi

| Chỉ tiêu | Giá trị | Đơn vị/phạm vi | Nguồn 1 (đã đọc) và trích nguyên văn | Nguồn 2 (đã đọc) và trích nguyên văn | Nhãn |
|---|---|---|---|---|---|
| VN-Index chốt | 1.719,42 | điểm, EOD 13/10 | VNDIRECT Finfo, GitHub EOD 15:13: `"close":1719.42` | VNIndex.ai, 15:00 13/10: `1.719,42 điểm-1,56 (-0,09%)`; Rồng Việt 13/10: `VNINDEX 1719.42-1.56` | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | -1,56 điểm, -0,090646%; hiển thị -0,09% | điểm/% 13/10 | VNDIRECT Finfo: `"change":-1.55999999999995` | VNIndex.ai: `-1,56 (-0,09%)` | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.716,87 / 1.726,35 / 1.710,95 | điểm 13/10 | VNDIRECT Finfo: `"open":1716.87,"high":1726.35,"low":1710.95` | VNIndex.ai: `Mở cửa 1.716,87`, `Cao nhất 1.726,35`, `Thấp nhất 1.710,95` | ĐÃ ĐỐI CHIẾU |
| VN30 chốt | 1.860,99; -8,39 điểm (-0,45%) | điểm 13/10 | VNDIRECT Finfo: `"close":1860.99` | CTCK Rồng Việt: `VN30 1860.99-8.39` | ĐÃ ĐỐI CHIẾU |
| HNX-Index chốt | 264,25; -0,44 (-0,17%) | điểm 13/10 | VNDIRECT Finfo: `"close":264.25` | CTCK Rồng Việt: `HNXIndex 264.25-0.44` | ĐÃ ĐỐI CHIẾU |
| Giá trị HOSE khớp lệnh | 10.882,858978 tỷ (hiển thị 10.882,86 tỷ) | nmValue VNDIRECT VNINDEX; không tính thỏa thuận | VNDIRECT Finfo history audit: `"nmValue":10882858978310` | VNIndex.ai tổng giao dịch 13,04 nghìn tỷ, **KHÁC PHẠM VI**; không thể coi số đối chiếu | 1 NGUỒN |
| Độ rộng VNDIRECT | 89 tăng / 198 giảm / 69 đứng; 2 sàn; thêm 50 không giao dịch | universe VNDIRECT (không tự quy đổi sang phạm vi 404 mã) | VNDIRECT raw quote: `"advances":89,"declines":198,"noChange":69,"noTrade":50` | VNIndex.ai universe 404 mã: `93` tăng, `201` giảm, `110` đứng — **khác phạm vi** | 1 NGUỒN |
| Khối lượng khớp VN-Index | 459.797.307 | nmVolume; không thỏa thuận | VNDIRECT history quote: `"nmVolume":459797307` | VNIndex.ai 556,95 triệu cổ phiếu **tổng giao dịch**, khác phạm vi | 1 NGUỒN |
| VNMidcap | 1.789,96 (-0,71%) | chỉ số phiên 13/10 | CTCK Rồng Việt: `VNMID 1789.96-12.89` | Không mở được nguồn thứ hai đồng phạm vi | 1 NGUỒN |
| VNSmallcap | 1.217,22 (-0,59%) | chỉ số phiên 13/10 | CTCK Rồng Việt: `VNSML 1217.22-7.20` | Không mở được nguồn thứ hai đồng phạm vi | 1 NGUỒN |

Nguồn chính VNDIRECT exact-date: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-13&size=500

Nhật ký EOD 133 mã và chỉ số VNDIRECT: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38367729620

VNIndex.ai toàn văn dữ liệu đóng cửa và top đóng góp: https://vnindex.ai/vnindex-hom-nay (cập nhật 15:00 ngày 13/10).

CTCK Rồng Việt: https://www.vdsc.com.vn/tin-tuc/tin-nghiep-vu/styles.min.c4bb6c98ac4e3ee7.css (bản trang ngày 13/10). Trang chính https://www.vdsc.com.vn/ đôi khi còn đệm dữ liệu ngày 12/10; chỉ sử dụng đường dẫn đã thực mở đúng ngày 13/10.

## B. Nhật ký tìm kiếm — đối với 1 NGUỒN và các mục thiếu

| Hạng mục | Nguồn đã thử | Kết quả |
|---|---|---|
| HOSE khớp lệnh 13/10 | VNIndex.ai https://vnindex.ai/vnindex-hom-nay | Có số 13,04 nghìn tỷ **gồm thỏa thuận**, khác phạm vi VNDIRECT nmValue |
| HOSE khớp lệnh 13/10 | VnEconomy https://vneconomy.vn/thanh-khoan-cuc-thap-vn-index-co-nguy-co-thung-day-ngan-han.htm | Chỉ có khớp lệnh **buổi sáng** 4.617 tỷ (12:01), không phải EOD |
| HOSE độ rộng | VNIndex.ai https://vnindex.ai/vnindex-hom-nay | Có 93 tăng/201 giảm/110 đứng trên **404 mã**, khác VNDIRECT 89/198/69 và không giao dịch 50 |
| HOSE độ rộng | https://web.stockbiz.vn/IndexDetail.aspx | Bảng đến 12:00, **trước EOD** |
| Khối ngoại khớp lệnh HOSE & chuỗi 5 phiên | VNIndex.ai https://vnindex.ai/vnindex-hom-nay | Ước tính khoảng -435,35 tỷ; **TẠM TÍNH**, không phải giá trị khớp lệnh chính thức và không tạo chặn cứng |
| Khối ngoại khớp lệnh HOSE & chuỗi 5 phiên | https://vietnambiz.vn/giao-dich-khoi-ngoai/giao-dich-khoi-ngoai.html | Bài gần nhất đã mở là **12/10**, không có EOD 13/10 |
| Khối ngoại khớp lệnh HOSE & chuỗi 5 phiên | https://web.stockbiz.vn/ForeignerTradingStats.aspx | Trang có bảng giao dịch trong phiên, không khóa chuỗi đúng phạm vi 13/10 |
| Tự doanh toàn phiên 13/10 | https://vietnambiz.vn/chung-khoan.htm | Trang đã mở, có số ngày 12/10, không có tổng EOD 13/10 |
| Tự doanh toàn phiên 13/10 | https://vnindex.ai/vnindex-hom-nay | Không có tổng tự doanh 13/10 |
| Tự doanh toàn phiên 13/10 | https://web.stockbiz.vn/IndexDetail.aspx | Không có tổng tự doanh cuối phiên |
| VN30F1M basis đúng hợp đồng | https://portal.hnx.vn/vi-vn/phai-sinh/thong-tin-cong-bo.html | Có công bố, không có basis EOD ngày 13/10 trong trang đã mở |
| VN30F1M basis đúng hợp đồng | https://vn.tradingview.com/symbols/HNX-VN301%21/contracts/?contract=VN30J2026 | Có lịch hợp đồng tháng 10 đáo hạn 15/10, không có basis EOD cùng ngày hợp lệ |
| VN30F1M basis đúng hợp đồng | https://web.stockbiz.vn/IndexDetail.aspx | Chỉ có chỉ số cơ sở, không có hợp đồng cùng ngày |

Kết luận: **Khối ngoại khớp lệnh chính thức, tổng 5 phiên, tự doanh, basis: CHƯA XÁC MINH** sau khi đã kiểm tra ba nguồn khác nhau. Số khối ngoại VNIndex.ai **TẠM TÍNH**, không được dùng kích hoạt chặn cứng. Mục basis không sử dụng để chấm điểm trong ba phiên trước đáo hạn tháng 10 theo V3.3.1.

## C. Chuỗi kỹ thuật nguồn duy nhất VNDIRECT — TỰ TÍNH

Gốc chuỗi (a) = bảng `vnmarket_prices` `VNINDEX` đủ **257 dòng**; ngày đầu 01/10/2025, ngày cuối 13/10/2026, không thiếu và không ghép nguồn. VNDIRECT raw trả lúc 15:07, đối chiếu khóa chính 133 mã 15:13. Log đọc đầy đủ: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38367219510

Trích đúng 2 dòng vendor đã đọc qua audit:
- `"date":"2026-10-12","open":1736.2,"high":1736.64,"low":1716.85,"close":1720.98`
- `"date":"2026-10-13","open":1716.87,"high":1726.35,"low":1710.95,"close":1719.42`

| Chỉ số | Phép tính trên nguồn VNDIRECT | Nhãn |
|---|---|---|
| MA20 | trung bình 20 giá đóng phiên đến 13/10 = 1.771,058 → **1.771,06** | TỰ TÍNH |
| MA50 | trung bình 50 close = 1.779,6384 → **1.779,64** | TỰ TÍNH |
| MA200 | trung bình 200 close = 1.797,8478 → **1.797,85** | TỰ TÍNH |
| MA20 năm phiên trước | trung bình 20 close từ trước 5 phiên = **1.790,2125** → 1.790,21 | TỰ TÍNH |
| HOSE khớp 13/10 | nmValue / 10^9 = **10.882,858978 tỷ** | 1 NGUỒN |
| TB20 khớp lệnh | bình quân 20 phiên trước 13/10 = **12.956,289444 tỷ** (12.956,29) | TỰ TÍNH |
| Bội số | 10.882,858978 / 12.956,289444 = **0,839967** → **0,840×** | TỰ TÍNH |
| So 12/10 | 10.882,858978 / 10.645,086259 − 1 = **+2,23%** | TỰ TÍNH |
| Độ rộng | 89/198 = **0,449495** → 0,449 | TỰ TÍNH |
| Vị trí nến | (1.719,42 − 1.710,95)/(1.726,35 − 1.710,95) = **0,550** trong biên phiên, vùng 1/3 giữa | TỰ TÍNH |
| Đáy 20 phiên liền trước | 1.716,85 (12/10) | TỰ TÍNH |
| Phiên phân phối thô | 9 phiên còn hiệu lực theo lịch sử 257 phiên | TỰ TÍNH |
| Phiên phân phối sau cờ ETF 18/09 | **9 phiên** vì 18/09 không còn nằm trong 25 phiên tính tới 13/10; không cộng ngày 13/10 vì giảm -0,09% < 0,2% | TỰ TÍNH |
| Điểm đồng thuận V3.3.1 | **−3/7** = giá/MA −1; thanh khoản 0 (phiên đi ngang <0,2%); độ rộng −1 (0,449 ≤ 0,67); chất lượng dòng tiền 0 (thay đổi chỉ số tuyệt đối <2 điểm); khối ngoại 0 (thiếu EOD chính thức); phân phối −1 (9 ≥5); phái sinh/vĩ mô 0 | TỰ TÍNH |
| Nền xu hướng | **XẤU**: đóng 1.719,42 dưới MA50 1.779,64; MA20 1.771,06 thấp hơn MA20 cách 5 phiên 1.790,21; dưới MA200 1.797,85 | TỰ TÍNH |
| Chặn cứng | **9 phiên phân phối ≥6/25**; không có cờ ngày 13/10 được xác minh để loại phiên ngày 13/10; chặn ngoại và Sổ cũ KHÔNG KIỂM ĐƯỢC | TỰ TÍNH |
| R:R tham khảo của chỉ số cho phiên kế tiếp | (1.771,058 − 1.719,42)/(1.719,42 − 1.710,95) ≈ **6,10**. Mốc vô hiệu 1.710,95 chỉ công bố ngày 13/10, áp dụng từ phiên sau; KHÔNG là lệnh mua | TỰ TÍNH |

**Định nghĩa phiên:** chỉ số giảm ≥0,2% mới gọi phiên giảm; phiên 13/10 chỉ -0,09% là **đi ngang** dù chỉ số đỏ. Tuy thanh khoản tăng 2,23% so với ngày trước, 13/10 **không tạo phiên phân phối mới**. Phiên 18/09 có cơ cấu VNM ETF từng được loại trong bài 12/10 nhưng hiện đã ngoài cửa sổ 25 phiên tính đến 13/10. Không thêm/loại bất kỳ phiên giao dịch chưa được đối chiếu ngày.

## D. Đóng góp chỉ số và mức độ lan tỏa

Nguồn thứ hai VNIndex.ai 13/10 15:00: Top 5 kéo lên VIC +4,80; VHM +0,85; HDB +0,67; TCB +0,51; LPS +0,16 → tổng +6,99 (TỰ TÍNH). Top 5 kéo xuống BID −0,80; VCB −0,69; MSN −0,60; LPB −0,59; STB −0,51 → tổng −3,19 (TỰ TÍNH). **Không tính tỷ lệ top 5/biến động VNINDEX** vì mức thay đổi chỉ số tuyệt đối 1,56 điểm <2 điểm, đúng mục 0.6 của V3.3.1; yếu tố 4 chấm 0.

VN30 −0,45%, VNMidcap −0,71%, VNSmallcap −0,59% cùng yếu hơn mức −0,09% của VN-Index: **độ lan tỏa yếu, trụ lớn che phần nào áp lực giá**. Chỉ riêng VIC +4,80 điểm là lớn hơn độ lớn thay đổi chỉ số; không coi đó là tiền vào diện rộng.

Bản đồ sức **giá** từ 133 mã website (không phải toàn HOSE và không thay cho bản đồ vốn ròng nhóm ngành):
- Ngân hàng: 8 tăng / 7 giảm / 3 đứng trên 18 mã; HDB +2,21%; TPB +1,74%; LPB −2,36%.
- Chứng khoán: 2 tăng / 11 giảm / 2 đứng trên 15 mã; VND −1,90%; BSI −1,85%.
- Năng lượng: 1 tăng / 9 giảm / 2 đứng trên 12 mã; PVC −1,69%; OIL −1,49%.
- Công nghiệp: 1 tăng / 6 giảm / 1 đứng trên 8 mã; MSR −6,81%; PHP −4,16%.
- Bất động sản: 5 tăng / 2 giảm / 3 đứng trên 10 mã; VHM +0,78%, KOS −6,96%.
- Nông nghiệp: 1 tăng / 5 giảm trên 6 mã.
- Công nghệ: 0 tăng / 2 giảm trên 2 mã.
- Cảng biển và logistics: 0 tăng / 4 giảm trên 4 mã; DXP −7,36%, GMD −2,96%.

Không có dữ liệu khớp lệnh nhóm so với TB20 và khối ngoại ròng theo nhóm cùng phạm vi: **CHƯA XÁC NHẬN TIỀN VÀO/RA THẬT; CHƯA CÓ NHÓM DẪN DẮT ĐƯỢC XÁC NHẬN**. Chỉ nêu phân hóa sức giá.

## E. Cổng quyết định và hành động

- Cổng số lõi **ĐẠT** với giá và % **ĐÃ ĐỐI CHIẾU**, thanh khoản và độ rộng **1 NGUỒN**; không được ghi ĐÃ ĐỐI CHIẾU cho hai số này.
- Chế độ **ĐẦY ĐỦ**: MA20/50, dốc MA20, TB20 và 25 phiên phân phối đều tính được từ 257 phiên cùng nguồn, gắn TỰ TÍNH. MA200 đầy đủ. Không có Sổ do người dùng dán vào.
- Nền xu hướng **XẤU**, điểm **−3/7**; trạng thái thô **KHÔNG** dòng 1 vì có chặn cứng 9 phiên phân phối; trần nền XẤU => **KHÔNG**; bước chống đảo chiều **bỏ qua** do không có Sổ, kết luận cuối **KHÔNG** (dòng 1). Thiếu dữ liệu không phải căn cứ kết luận yếu.
- Chặn xả cuối phiên **KHÔNG** (nến 0,550 nằm 1/3 giữa); chặn "xanh điểm/đỏ mã" **KHÔNG** (VN-Index −0,09% chứ không xanh); chặn khối ngoại và mốc cũ từ Sổ **KHÔNG KIỂM ĐƯỢC**.
- Mốc 1.710,95 thấp nhất ngày 13/10 là mốc vô hiệu mới **áp dụng từ phiên kế tiếp**; đáy trước 1.716,85 ngày 12/10 làm hỗ trợ tham chiếu cũ, không suy mốc Sổ chưa có. Kháng cự gần MA20 **1.771,06**, MA50 **1.779,64**, kháng cự mạnh MA200 **1.797,85**.
- Điều kiện bảo vệ: nếu đóng dưới 1.710,95 thì quản trị phần yếu và không bình quân giá xuống; nếu lấy lại 1.771,06–1.779,64 rồi 1.797,85 và số phân phối về ≤5, thanh khoản, độ rộng, ngoại xác nhận thì đánh giá lại, **không mặc định mở vị thế**.
- Tỷ trọng khung khi KHÔNG dòng 1: ≤20% cổ phiếu / ≥80% tiền mặt; giảm/không dùng đòn bẩy. Không có vùng mua mới.
- Cảnh báo: phiên 13/10 không có Sổ để kiểm trạng thái/kháng cự/chặn hiệu lực phiên trước. Trần chặn dữ liệu lõi 1 NGUỒN không thể cho trạng thái CÓ, nhưng độc lập có chặn phân phối thực tế nên trạng thái KHÔNG hợp quy tắc.

## F. Phần bổ sung Sổ dữ liệu (XII) — không ghi lại dòng cũ

```
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 13/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
13/10/2026;1719,42;1726,35;1710,95;-0,09;10882,858978;89;198;69;;1860,99;;;Không;1 NGUỒN:GT HOSE/độ rộng, CHƯA XÁC MINH:KN ròng/VN30F1M
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG — dòng 1, có chặn cứng
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu mới công bố: 1710,95 — đáy VNINDEX ngày 13/10/2026, áp dụng từ 14/10
Kháng cự gần: MA20 1771,06 / MA50 1779,64; mạnh MA200 1797,85
Hỗ trợ gần: 1710,95; trước đó 1716,85 (đáy 12/10)
Chặn cứng đang hiệu lực: ≥6 phiên phân phối (hiện 9 phiên/25); gỡ khi còn ≤5
Phiên phân phối còn hiệu lực: 11/09,14/09,23/09,24/09,28/09,30/09,02/10,08/10,09/10
Khối ngoại: thiếu số khớp lệnh chính thức
Basis âm hơn 1%: KHÔNG KIỂM ĐƯỢC; không dùng gần đáo hạn
PHẦN C — ĐÍNH CHÍNH
Không có đính chính dòng cũ vì không được cung cấp Sổ.
```

**Tự kiểm V3.3.1:** ngày EOD, thứ tự cổng, nhãn nguồn, 257 dòng & 2 dòng gốc, sự kiện ETF, chấm điểm, chặn cứng, ba bước trạng thái, mốc vô hiệu mới, tính R:R đều đã xử lý. **Giới hạn:** chuỗi khối ngoại/tự doanh/basis và Sổ không có, nên không đánh ĐẠT cho việc xác minh các trường đó; không suy chúng thành tín hiệu thị trường.

## G. Bảng tự kiểm v3.3.1 — 20 tiêu chí

| # | Mục | Kết quả | Ghi chú |
|---|---|---|---|
| 1 | Phiên, mốc cắt, giờ | ĐẠT | 13/10 có giao dịch, sau ATC, EOD 133/133 |
| 2 | Không dùng dữ liệu phiên tương lai | ĐẠT | Chỉ ngày 13/10 hoặc trước đó; phân biệt bản tin sáng |
| 3 | Không trích từ trí nhớ hoặc snippet | ĐẠT | API và các trang đã mở, có đoạn trích ngắn |
| 4 | Đường dẫn đã mở và có thật | ĐẠT | VNDIRECT, VNIndex.ai, Rồng Việt, HNX và các trang tìm nguồn |
| 5 | Số lõi, nguồn, phạm vi | ĐẠT CÓ GIỚI HẠN | Giá và % 2 đơn vị; thanh khoản, độ rộng gắn 1 NGUỒN |
| 6 | Nhật ký tìm nguồn số thiếu/1 NGUỒN | ĐẠT CÓ GIỚI HẠN | Ba nguồn cho KN, tự doanh và basis; thêm đối chiếu chỉ số VNMID/VNSML bên dưới |
| 7 | Chuỗi tự tính một gốc | ĐẠT | 257 dòng, 01/10/2025–13/10/2026; raw quote kiểm tra hai ngày |
| 8 | Số sử dụng truy xuất nguồn | ĐẠT | Số hiển thị có trong nhật ký EOD/chuỗi/bản đồ ngành |
| 9 | Không sửa/chép dòng Sổ cũ | ĐẠT | Người dùng chưa cung cấp Sổ, chỉ ghi một dòng bổ sung |
| 10 | Ngày theo người dùng | ĐẠT | 13/10/2026 |
| 11 | Chế độ đúng | ĐẠT | ĐẦY ĐỦ đủ MA20, MA50, dốc MA20, TB20, phân phối |
| 12 | Nền xu hướng có số | ĐẠT | XẤU, MA20/50/200 và dốc MA20 |
| 13 | Chấm 7 yếu tố đúng | ĐẠT | −3/7; ngày đi ngang <0,2%; top 5 không lấy tỷ lệ do Δindex <2 |
| 14 | Chặn mềm/cứng, điều kiện chưa kiểm | ĐẠT CÓ GIỚI HẠN | Chặn phân phối xác minh; Sổ và KN ghi KHÔNG KIỂM ĐƯỢC |
| 15 | Ba bước quy đổi | ĐẠT | KHÔNG thô → KHÔNG trần XẤU → bỏ chống đảo chiều vì thiếu Sổ |
| 16 | Vùng mua theo dòng trạng thái | ĐẠT | Dòng 1 KHÔNG, không ghi vùng mua |
| 17 | Mốc giá có xuất xứ, R:R | ĐẠT | 1.710,95 đáy 13/10 chỉ áp dụng từ hôm sau; R:R 6,10 tham chiếu |
| 18 | Bản đồ nhóm chỉ ghi có số | ĐẠT CÓ GIỚI HẠN | Chỉ sức giá 133 mã, không gán giả tiền vào/ra |
| 19 | Bài Zalo/web cùng số/trạng thái | ĐẠT | 386 từ, trạng thái KHÔNG, miễn trừ, không đổi khung |
| 20 | Sổ chỉ có bổ sung, không chép cũ | ĐẠT CÓ GIỚI HẠN | Một dòng Phần A và Phần B mới, thiếu Sổ gốc của người dùng |

**Đối chiếu bổ sung cho VNMID/VNSML:** nguồn Rồng Việt chốt 13/10 là 1 NGUỒN. Đã thử https://taichinh.com/chung-khoan (có số VNMidcap trong phiên, không phải giá chốt) và https://smoney.com.vn/chi-so/vnmidcap (phiên hiển thị 09/10, sai ngày). VNSML đã thử https://www.investing.com/indices/vn-small-cap-historical-data (bảng giá trễ, không xác nhận EOD 13/10) và https://taichinh.com/chung-khoan (không có VNSML EOD 13/10). Vì vậy không nâng nhãn 1 NGUỒN.

**Giới hạn không che giấu:** khối ngoại giao dịch khớp lệnh thực, tự doanh cuối phiên, mốc đang hiệu lực từ Sổ gốc và basis chưa xác minh đầy đủ. Các thiếu này không phải tín hiệu thị trường xấu; trạng thái KHÔNG do dữ liệu giá và số phiên phân phối đã xác minh độc lập với các thiếu trên.
