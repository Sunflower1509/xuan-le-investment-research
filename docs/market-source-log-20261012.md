# Nhật ký nguồn nội bộ — Nhận định VN-Index 12/10/2026 (v3.3.1)

**Ngày phân tích:** 12/10/2026. **Ngày thực hiện:** 12/10/2026. **Mốc cắt:** hết phiên 12/10/2026 (Việt Nam), khóa VNDIRECT sau ATC 15:16–15:20. **Sổ người dùng:** KHÔNG CÓ SỔ DỮ LIỆU tự lưu. Không coi bài nhận định cũ là Sổ.

## A. Nhật ký nguồn — số lõi

| Chỉ tiêu | Giá trị | Phạm vi | Nguồn 1 đã thực sự đọc | Trích nguyên văn (ngắn) | Nguồn 2 đã thử | Trích nguyên văn nguồn 2 | Nhãn |
|---|---:|---|---|---|---|---|---|
| Đóng cửa VN-Index | 1.720,98 | điểm, EOD 12/10 | VNDIRECT Finfo, GitHub job log EOD 12/10 (15:16) | `"close":1720.98,"change":-14.1099999999999` | VNIndex.ai, phiên 12/10 nhưng trang mở vẫn là 11:30 | Không có EOD | 1 NGUỒN |
| Biến động | −14,11 điểm; −0,8132143% (hiển thị −0,81%) | EOD 12/10 | VNDIRECT Finfo, job log EOD 12/10 | `"changePct":-0.813214300122755` | Stockbiz, trang còn mốc 13:48 | Không có EOD | 1 NGUỒN |
| Mở/cao/thấp/đóng | 1.736,20 / 1.736,64 / 1.716,85 / 1.720,98 | điểm, 12/10 | VNDIRECT Finfo, job log 256 phiên | `"high":1736.64,"low":1716.85,"close":1720.98` | Investing.com, trích khung intraday khác thời điểm | Không có EOD | 1 NGUỒN |
| Giá trị khớp lệnh HOSE | 10.645,086259 tỷ (hiển thị 10.645,09) | VNDIRECT VNINDEX nmValue, chỉ khớp lệnh, không gồm thỏa thuận | VNDIRECT Finfo job log lịch sử 256 phiên | `"nmValue":10645086258530` | Stockbiz ghi tổng giao dịch, khác phạm vi | Không đối chiếu cùng phạm vi | 1 NGUỒN |
| Độ rộng HOSE | 154 tăng / 148 giảm / 60 đứng / 6 sàn | Universe vnmarket_prices VNDIRECT; không coi số sàn là cộng thêm vào 148 | VNDIRECT Finfo, log EOD 12/10 | `"breadth":{"advance":154,"unchanged":60,"decline":148,"floor":6}` | VNIndex.ai 11:30, tổng 404 mã và chỉ phiên sáng | Không có EOD | 1 NGUỒN |
| VN30 | 1.869,38; giảm 4,05 điểm (−0,22%) | EOD 12/10 | VNDIRECT Finfo log market session | `"close":1869.38,"change":-4.04999999999995` | VNIndex.ai EOD chưa cập nhật | Không có | 1 NGUỒN |
| HNX-Index | 264,69; tăng 3,09 điểm (+1,18%) | EOD 12/10 | VNDIRECT Finfo log market session | `"close":264.69,"change":3.08999999999997` | Stockbiz chưa chốt | Không có | 1 NGUỒN |

**Nguồn cấp dữ liệu VNDIRECT:** https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-12&size=500

**Nhật ký GitHub — đã nhận và đọc toàn bộ phản hồi nguồn qua bước khóa EOD:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38222487241

**Dữ liệu lịch sử 256 phiên VNDIRECT:** https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-12&size=500

**GitHub audit đọc đầy đủ 256 dòng + trích 2 hàng gốc ngày 09/10 và 12/10:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38222793205

Hai hàng neo nguyên văn của phản hồi bảng lịch sử (trong log GitHub):
- `"date":"2026-10-09","open":1737.63,"high":1744.89,"low":1724.17,"close":1735.09`
- `"date":"2026-10-12","open":1736.2,"high":1736.64,"low":1716.85,"close":1720.98`

## B. Nhật ký tìm kiếm — nguồn khác và chỉ tiêu thiếu

| Chỉ tiêu | Trang đã thực sự mở, ngày/giờ thể hiện | Kết quả |
|---|---|---|
| Lõi EOD | https://vnindex.ai/vnindex-hom-nay — 12/10 11:30 | Có số nhưng sai giờ, chưa hết phiên |
| Lõi EOD | https://web.stockbiz.vn/IndicesStats.aspx — 12/10 13:48 | Có số nhưng chưa hết phiên |
| Lõi EOD | https://vn.investing.com/indices/vn-historical-data — bảng intraday, mốc 12:58 | Có số nhưng chưa hết phiên |
| Giá trị HOSE khớp lệnh | https://vnindex.ai/vnindex-hom-nay | Có giá trị giao dịch toàn bộ, khác phạm vi |
| Giá trị HOSE khớp lệnh | https://web.stockbiz.vn/IndicesStats.aspx | Có giá trị giao dịch gồm thỏa thuận, khác phạm vi |
| Khối ngoại HOSE khớp lệnh chính thức và tổng 5 phiên | https://vnindex.ai/vnindex-hom-nay — cập nhật 11:30 | Có số nhưng chưa hết phiên, không dùng |
| Khối ngoại HOSE khớp lệnh chính thức và tổng 5 phiên | https://web.stockbiz.vn/ForeignerTradingStats.aspx — cập nhật 10:38 | Có số nhưng chưa hết phiên, không dùng |
| Khối ngoại HOSE khớp lệnh chính thức và tổng 5 phiên | https://vneconomy.vn/thanh-khoan-rat-thap-co-phieu-lon-dang-ep-diem-so.htm — 12:00 12/10 | Có số nhưng chỉ phiên sáng, không dùng |
| Basis VN30F1M | https://www.dnse.com.vn/senses/hop-dong-tuong-lai-VN30F2309 | Có thông tin hợp đồng, chưa có basis EOD 12/10 |
| Basis VN30F1M | https://portal.hnx.vn/vi-vn/phai-sinh/thong-tin-cong-bo.html | Không có số basis cuối 12/10 trên trang được mở |
| Basis VN30F1M | https://www.hnx.vn/vi-vn/trai-phieu/thong-ke-giao-dich.html | Sai phạm vi (trái phiếu), không dùng |
| Tự doanh 12/10 | https://vneconomy.vn/chung-khoan.htm | Không có tổng EOD 12/10 |
| Tự doanh 12/10 | https://vnindex.ai/vnindex-hom-nay | Không có số |
| Tự doanh 12/10 | https://web.stockbiz.vn/IndicesStats.aspx | Không có số |

**Cảnh báo:** Tất cả những số nguồn phụ trên được nhìn thấy là *trong phiên*, tuyệt đối không đưa vào kết luận EOD, bảng hành động hoặc bài Zalo. Giá trị nguồn lõi EOD chỉ có một đơn vị công bố (VNDIRECT), nên trần trạng thái không thể là CÓ theo v3.3.1.

## C. Bảng chuỗi kỹ thuật — TỰ TÍNH từ 256 phiên nguồn VNDIRECT, 01/10/2025 → 12/10/2026

| Chỉ tiêu | Tính toán / giá trị | Nhãn |
|---|---|---|
| MA20 | trung bình 20 close đến 12/10 = 1.775,6445, hiển thị 1.775,64 | TỰ TÍNH |
| MA50 | trung bình 50 close đến 12/10 = 1.780,1432, hiển thị 1.780,14 | TỰ TÍNH |
| MA200 | trung bình 200 close đến 12/10 = 1.797,6356, hiển thị 1.797,64 | TỰ TÍNH |
| MA20 năm phiên trước | trung bình 20 close chốt trước 5 phiên = 1.793,7805, hiển thị 1.793,78 | TỰ TÍNH |
| TB20 khớp lệnh | trung bình nmValue 20 phiên 14/09–09/10 (loại 12/10) = 13.198,069166 tỷ, hiển thị 13.198,07 | TỰ TÍNH |
| Bội số | 10.645,086259 / 13.198,069166 = 0,806564 lần, hiển thị 0,807 lần | TỰ TÍNH |
| So phiên liền trước | 10.645,086259 / 14.694,486447 − 1 = −27,5573%, hiển thị −27,56% | TỰ TÍNH |
| Vị trí giá đóng trong nến | (1720,98 − 1716,85) ÷ (1736,64 − 1716,85) = 0,20869, thuộc 1/3 dưới | TỰ TÍNH |
| Đáy 20 phiên trước | 1.724,17 (phiên 09/10) | TỰ TÍNH |
| Tỷ lệ độ rộng | 154 / 148 = 1,041 | TỰ TÍNH |
| Số phiên phân phối giá–thanh khoản có hiệu lực | 10 trong 25 phiên trước khi loại cờ ETF | TỰ TÍNH |
| Loại cờ ETF theo V3.3.1 | 18/09/2026: phiên cơ cấu quỹ VNM ETF đã xác nhận, **không tính** phân phối dù giảm giá/thanh khoản đạt định nghĩa cũ | ĐÃ XÁC MINH SỰ KIỆN |
| Số phiên phân phối hợp lệ sau loại ETF | 9 trong 25 phiên gần nhất: 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10 | TỰ TÍNH |
| Phiên 12/10 có phải phân phối mới? | KHÔNG: −0,81% nhưng khớp lệnh 10.645,09 tỷ < 14.694,49 tỷ 09/10 | TỰ TÍNH |
| Điểm đồng thuận | −2/7 = −1 (giá dưới MA20+MA50), 0 (thanh khoản 0,807), 0 (độ rộng 1,041), 0 (chất lượng dòng tiền chưa đủ), 0 (khối ngoại thiếu), −1 (9 phiên phân phối), 0 (phái sinh/vĩ mô chưa đủ) | TỰ TÍNH |
| Nền xu hướng | **XẤU**: 1720,98 dưới MA50 1780,14; MA20 1775,64 < 1793,78 cách 5 phiên; dưới MA200 1797,64 | TỰ TÍNH |
| Cổng chặn | CHẶN CỨNG phiên phân phối ≥6 vì 9 còn hiệu lực. Xả cuối phiên không kích hoạt: vị trí nến 0,209 ở đáy nhưng 0,807 TB20 thấp hơn 1,0. Các chặn khối ngoại / mốc Sổ trước: KHÔNG KIỂM ĐƯỢC | TỰ TÍNH |
| R:R chỉ số tham khảo phiên sau | (1775,6445 − 1720,98) / (1720,98 − 1716,85) = 13,236 (~13,24). Chỉ số quá gần mức vô hiệu nên R:R cao **không phải tín hiệu mua**; có CHẶN CỨNG | TỰ TÍNH |

Bảng 256 phiên đã được GitHub audit đọc đủ, mã nguồn và log hiện có; đủ chế độ **ĐẦY ĐỦ** về MA20/MA50, dốc MA20, TB20, số phân phối sau loại ETF; thiếu Sổ người dùng nghĩa là không kiểm chứng được cổng chặn được mang sang theo sổ.

### Nhật ký sự kiện

- 18/09/2026: VNM ETF cơ cấu được xác nhận từ https://www.seabank.com.vn/tin-tuc/tin-seabank/news/ssb-la-co-phieu-duy-nhat-duoc-them-vao-ro-marketvector-vietnam-local-index (15/09/2026) và https://doanhnhanvn.vn/danh-muc-vnm-etf-bien-dong-ra-sao-trong-phien-co-cau-thang-9.html (22/09/2026 chỉ xác nhận giao dịch 18/09, không sử dụng nhận định thị trường của 22/09).
- 15/10/2026: ngày đáo hạn hợp đồng VN30F2610 theo https://www.dnse.com.vn/senses/hop-dong-tuong-lai-VN30F2309 và https://www.dsc.com.vn/kien-thuc/dao-han-phai-sinh-la-gi; 12/10 nằm trong 3 phiên giao dịch trước đáo hạn, yếu tố basis không được dùng chấm điểm theo v3.3.1.
- **Không có Sổ**: Không khẳng định mốc vô hiệu cũ đã mang sang đúng quy tắc. Mốc **1.716,85** được công bố mới hôm nay, áp dụng từ phiên sau; không sửa ngược mốc cũ để né cổng.

## D. Bản đồ sức giá trong 133 mã (không được mạo nhận là dòng tiền theo ngành HOSE)

Đọc trực tiếp `src/data/research-data.js` sau khóa EOD 12/10; xác nhận 133 mã đối chiếu VNDIRECT–KBS. Chỉ biểu thị tăng/giảm giá, **không** khẳng định tiền vào/ra vì thiếu GT khớp nhóm và mua bán ngoại:
- Ngân hàng 18 mã: 11 tăng / 5 giảm / 2 đứng; SHB +4,00%; VPB +2,52%; ACB +1,49%.
- Chứng khoán 15 mã: 8 tăng / 6 giảm / 1 đứng; VDS +1,48%; TVS −2,69%.
- Công nghiệp 8 mã: 5 tăng / 3 giảm; HPG +2,99%, HSG +3,54%, VGS +7,64%.
- Năng lượng 12 mã: 1 tăng / 9 giảm / 2 đứng; PLX −3,08%, GAS −2,11%.
- Nông nghiệp 6 mã: 0 tăng / 6 giảm.
- Bất động sản 10 mã: 5 tăng / 3 giảm / 2 đứng; NVL +1,83%, VHM −3,18%, KOS −6,96%.
- Công nghệ 2 mã: 0 tăng / 2 giảm.
- Cảng biển & logistics 4 mã: 1 tăng / 3 giảm; GMD −1,64%, HAH −2,78%.

## E. Logic v3.3.1

- Cổng dữ liệu: **ĐẠT với nhãn 1 NGUỒN** cho các số lõi; các nguồn intraday không được tính nguồn EOD độc lập. Không giả là `ĐÃ ĐỐI CHIẾU`.
- Chế độ **ĐẦY ĐỦ**, nền **XẤU**, điểm **−2/7**; cổng cứng theo **9 phiên phân phối đã lọc ETF**; raw KHÔNG → sau trần nền KHÔNG → bỏ qua chống đảo chiều vì không có Sổ → **KHÔNG (dòng 1)**, phòng thủ.
- Nếu đóng cửa dưới 1.716,85 trong các phiên tới: hạ rủi ro, không bình quân; nếu lấy lại 1.775,64–1.780,14 và 1.797,64 thì chỉ xét lại khi cổng chặn 9 phân phối giảm còn ≤5 và nguồn lõi đủ đối chiếu. Không ghi vùng mua khi trạng thái KHÔNG.
- Không có khối ngoại HOSE khớp lệnh chính thức, tự doanh EOD hoặc basis EOD: **không ghi số**; các cổng phụ thuộc dữ liệu này `KHÔNG KIỂM ĐƯỢC`. Thiếu dữ liệu không phải yếu tố xấu để trừ điểm.
- Ba kịch bản dùng khả năng định tính TỐT THẤP, CƠ SỞ CAO, XẤU TRUNG BÌNH (đây là phân loại định tính, không phải xác suất thống kê).
