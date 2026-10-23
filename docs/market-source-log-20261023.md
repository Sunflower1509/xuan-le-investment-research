# NHẬT KÝ KIỂM TOÁN NGUỒN — VN-INDEX 23/10/2026 · Prompt V3.3.1

**Ngày phân tích:** Thứ Sáu 23/10/2026, có phiên giao dịch. **Mốc cắt giá:** hết phiên 23/10, nguồn VNDIRECT Finfo cập nhật 15:17 giờ Việt Nam, Stockbiz có hàng thống kê 23/10, VNIndex.ai ghi ĐÃ ĐÓNG CỬA 15:00. **Không đưa dữ liệu phiên 26/10 hoặc thông tin sau mốc cắt vào nhận định.**

**Prompt:** `docs/prompt-nhan-dinh-vnindex-v3.md` v3.3.1, bản trong kho mã nguồn, đọc ba lượt độc lập: (1) cổng dữ liệu/nguồn và chế độ; (2) tính toán, 7 yếu tố, phân phối, các cổng và trạng thái; (3) phân tích, xuất bản, 20 tự kiểm, bổ sung Sổ, khóa bố cục. **Không có Sổ dữ liệu tự lưu do người dùng cung cấp**, không tự nhận bản tin web là Sổ gốc; điều kiện chặn từ Sổ gốc ghi KHÔNG KIỂM ĐƯỢC.

## 1. Bảng nguồn — số lõi, đơn vị và phạm vi

| Dữ kiện | Kết quả sử dụng | Nguồn 1 / bằng chứng nguyên gốc ngắn | Nguồn 2 / kết quả đối chiếu | Nhãn |
|---|---|---|---|---|
| VN-Index chốt 23/10 | **1.774,15; +13,52; +0,77%** | VNDIRECT Finfo `"close":1774.15,"pctChange":0.767906942401297` | Stockbiz IndexStats `23/10/2026 1774,15 +13,52(+0,77%)`; VNIndex.ai `1.774,15 điểm (+13,52, +0,77%)` | **ĐÃ ĐỐI CHIẾU** |
| VN30 EOD | **1.907,09; +14,11; +0,75%** | VNDIRECT marketSession `"close":1907.09` | Stockbiz 23/10 `VN30 1.907,09 +14,11/+0,75%` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index EOD | **262,70; +1,62; +0,62%** | VNDIRECT marketSession `"close":262.7` | Stockbiz 23/10 `HNX-INDEX 262,70 +1,62/+0,62%` | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.757,60 / 1.775,19 / 1.750,83** | VNDIRECT raw lúc 15:17 `"open":1757.6,"high":1775.19,"low":1750.83` | VNIndex.ai bản sau đóng cửa `1.757,60`, `1.775,19`, `1.750,83` | **ĐÃ ĐỐI CHIẾU** |
| Giá trị/khối lượng **khớp VNINDEX theo VNDIRECT** | **14.123,09041997 tỷ đồng; 640.986.900 CP** | VNDIRECT raw `"nmValue":14123090419970,"nmVolume":640986900` | Stockbiz IndexStats `15.208,98 tỷ` là **tổng giao dịch**, VNIndex.ai `16,33 nghìn tỷ` là **giá trị giao dịch tổng** (khác phạm vi), không dùng để tính cùng chuỗi | **1 NGUỒN** |
| Độ rộng **tập VNINDEX VNDIRECT** | **137 tăng / 153 giảm / 73 đứng, 3 sàn** | VNDIRECT raw `"advances":137,"declines":153,"noChange":73` và marketSession có `floor:3` | VNIndex.ai 143/156/105 theo **404 mã**, không cùng phạm vi VNDIRECT | **1 NGUỒN** |
| Top 5 kéo điểm tăng cuối phiên | **VIC +5,76, STB +1,71, ACB +0,96, LPB +0,86, VCB +0,86** | VNIndex.ai phiên 23/10 `Đã đóng cửa · 15:00`, bảng Top 5 cùng một bộ thước đo | Stockbiz không có bảng góp điểm cùng phương pháp; BSC báo cáo đúng phiên chưa mở đủ xác minh | **1 NGUỒN**, tính tỷ lệ từ số trên |
| Tổng NN trên HOSE (KHÔNG phải khớp) | **Mua 1.495,60 tỷ; bán 1.978,69 tỷ; ròng −483,09 tỷ** | Stockbiz IndexStats cột `Giá trị NN mua`, `Giá trị NN bán`, ngày 23/10 | VNIndex.ai nêu khoảng **bán ròng 480 tỷ**, không xác định trùng phạm vi hoặc cách tính với số Stockbiz | **1 NGUỒN TỔNG**; KHÔNG dùng thay số khớp |
| Ngoại ròng **KHỚP HOSE và chuỗi 5 phiên** | **Không có số đã đối chiếu đúng đồng phạm vi EOD** | Thử Stockbiz: tổng GD; VNIndex.ai: nhận định ròng nhưng không bảo đảm phạm vi khớp; HODL: trang mở còn dữ liệu cũ | Không tự ghi số thiếu hoặc cho rằng cổng khối ngoại đã gỡ | **CHƯA XÁC MINH** |
| Tự doanh ròng HOSE | **Không có dữ liệu cuối phiên đúng phạm vi** | Thử Smoney dữ liệu mới đến 22/10; nmquan đến 21/10; HODL có dữ liệu quá khứ/trong phiên | Không tự tạo ròng mới từ các phiên trước | **CHƯA XÁC MINH** |
| Basis VN30F1M 23/10 đúng kỳ/giờ | **Không có hai nguồn EOD cùng hợp đồng** | Thử tin EnTrade 23/10 nhưng là báo cáo **phiên 22/10**, Stockbiz IndexStats không có F1M, HNX báo cáo đúng kỳ chưa mở được | Không chấm phái sinh | **CHƯA XÁC MINH** |
| Cờ đáo hạn, quỹ cơ cấu | **Chưa có sự kiện ngày 23/10 được xác minh** | Ngày đáo hạn tháng 10 đã qua 15/10; không được tự suy từ thông báo ETF hoán đổi hằng ngày | Không gắn cờ sự kiện cho ngày 23/10 | **CHƯA CÓ CỜ ĐƯỢC XÁC MINH** |
| EOD cổ phiếu website | **133/133, đúng 23/10**, giá trùng VNDIRECT–KBS | GitHub Actions EOD run 39923758751 và `research-data.js`: mọi `priceDate=2026-10-23` | KBS có giá EOD đúng phiên khớp 133/133; CafeF chưa có hàng đúng ngày lúc khóa; **KL 130/133** trùng, CEO/PVS/SHS lệch nhẹ (ghi ở metadata) | **ĐÃ ĐỐI CHIẾU GIÁ**, KL ghi ngoại lệ |

**Nguồn đã mở thật:**
- Stockbiz IndicesStats: https://web.stockbiz.vn/IndicesStats.aspx — đúng hàng 23/10, có giá VNINDEX/VN30/HNX và NN **tổng**, không dùng số tổng làm khớp.
- VNIndex.ai: https://vnindex.ai/vnindex-hom-nay — ngày 23/10, `Đã đóng cửa · 15:00`, OHLC, top 5, độ rộng **tập 404 mã**, ngoại tổng mô tả.
- GitHub Actions kiểm toán VNDIRECT 265 phiên: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39923768392 — log `SOURCE_HISTORY_ROWS_JSON`, `VERIFIED_MARKET_EVIDENCE_JSON`, `RAW_VENDOR_INDEX_QUOTE`. Đã đọc log API gốc, **không mạo nhận công cụ web đọc API trực tiếp**.
- GitHub Actions khóa giá EOD 133 mã: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39923758751
- Trang theo dõi NN HODL: https://hodl.vn/indices/vnindex/
- Smoney tự doanh: https://smoney.com.vn/giao-dich/tu-doanh (dữ liệu mới nhất ngày 22/10 lúc kiểm).
- nmquan tự doanh: https://nmquan.vn/data/tu-doanh (mới nhất 21/10 theo kết quả tìm).
- Tin EnTrade phái sinh cho ngày 23 nhưng mô tả kết quả 22/10: https://blog.entrade.com.vn/ban-tin-phai-sinh-23-10-2026-vn30f1m-ap-sat-1-900-phe-long-cho-tin-hieu-but-pha/ ; **KHÔNG dùng basis này thay basis 23/10**.
- Stockbiz không có F1M EOD 23/10: https://web.stockbiz.vn/IndexDetail.aspx

**Nhật ký thử đối chiếu:** giá trị khớp thử VNDIRECT (sử dụng), Stockbiz (tổng), VNIndex.ai (tổng khác tập); độ rộng VNDIRECT (sử dụng), VNIndex.ai (404 mã khác), Stockbiz (không cung cấp cùng tập); NN thử Stockbiz tổng, VNIndex.ai ròng thiếu phương pháp, HODL cũ; tự doanh thử Smoney, nmquan, HODL; phái sinh thử tin EnTrade của phiên 22, Stockbiz và tìm HNX. Cấm tự nâng nhãn `1 NGUỒN` lên `ĐÃ ĐỐI CHIẾU` khi khác tập, khác thời điểm.

## 2. Chuỗi 265 phiên VNDIRECT đồng nhất và số tự tính

Nguồn (a) VNDIRECT Finfo 265 dòng từ **01/10/2025–23/10/2026**, đã đọc trong workflow read-only; không nội suy phiên, không ghép giá trị GD tổng Stockbiz vào khớp VNDIRECT. Hai neo: `"date":"2026-10-22","close":1760.63` và `"date":"2026-10-23","close":1774.15`.

| Hạng mục | Công thức và trị số | Nhãn |
|---|---|---|
| MA20 | TB 20 giá đóng cửa đến 23/10: **1.737,928 → 1.737,93** | TỰ TÍNH |
| MA50 | TB 50 giá đóng cửa: **1.772,2196 → 1.772,22** | TỰ TÍNH |
| MA200 | TB 200 giá đóng cửa: **1.796,64625 → 1.796,65** | TỰ TÍNH |
| Độ dốc MA20 | MA20 23/10 1.737,928 trừ MA20 cách 5 phiên 1.754,0875 = **−16,1595 điểm** → vẫn dốc xuống | TỰ TÍNH |
| Khớp TB20 liền trước | TB 20 phiên thực **25/09–22/10**: **12.231,40367179 tỷ** | TỰ TÍNH |
| Bội số khớp | 14.123,09041997 / 12.231,40367179 = **1,154658 → 1,155 lần** | TỰ TÍNH |
| Khớp so 22/10 | 14.123,09041997 / 13.300,61523103 − 1 = **+6,18%** | TỰ TÍNH |
| Độ rộng | 137/153 = **0,8954** → điểm 0, chặn mềm chỉ số xanh nhưng số mã giảm lớn hơn tăng | TỰ TÍNH |
| Chất lượng Top5 | (5,76 + 1,71 + 0,96 + 0,86 + 0,86) / 13,52 = **10,15/13,52 = 75,07%** → điểm **−1**; giới hạn bảng top5 **1 NGUỒN** | TỰ TÍNH |
| Nến | (1.774,15 − 1.750,83) / (1.775,19 − 1.750,83) = **95,73%**, đóng trong 1/3 trên | TỰ TÍNH |
| Đáy 20 phiên trước | **1.677,19** ngày 20/10/2026 | TỰ TÍNH |
| Phân phối | **8 phiên còn hiệu lực/25**: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; ngày 23/10 tăng 0,77% nên không thêm phân phối, không có phiên cũ nào đạt điều kiện gỡ theo dữ liệu gốc | TỰ TÍNH |
| Nền xu hướng | **TRUNG TÍNH**: đóng 1.774,15 >MA50 1.772,22 và >MA20 1.737,93, nhưng MA20 **dốc xuống**, phân phối 8>4 và giá còn <MA200 1.796,65; không đủ nền TỐT, không thuộc XẤU vì không dưới MA50 | TỰ TÍNH |
| 7 yếu tố | Giá/MA **0** (trên MA20/50 nhưng MA20 dốc xuống); thanh khoản **0** (phiên +0,77% nhưng 1,155<1,2 và >0,8); độ rộng **0** (0,895); chất lượng Top5 **−1** (75,07%, 1 nguồn); khối ngoại **0** (chưa xác minh khớp/5 phiên); sức khỏe xu hướng **−1** (8 phân phối); phái sinh/vĩ mô **0** (chưa khóa basis) ⇒ **−2/7**. Nếu bỏ top5 1 nguồn, điểm còn **−1/7** nhưng trạng thái không đổi do chặn phân phối. | TỰ TÍNH |
| Chặn mềm | **CÓ**: chỉ số xanh, 153 giảm >137 tăng; Top5 góp >70%; MA200 1.796,65 đang phía trên giá 1.774,15 **1,27%**, nhỏ hơn ngưỡng 1,5% | TỰ TÍNH |
| Chặn cứng | **CÓ 8 phân phối/25 ≥6**. Không kích hoạt điều kiện kéo chỉ số xanh/mã đỏ **kèm khớp ≥1,2** vì 1,155<1,2; không có xả cuối nến vì đóng trong 1/3 trên. Các chặn ngoại và Sổ gốc KHÔNG KIỂM ĐƯỢC. | TỰ TÍNH |
| Chế độ và 3 bước | **ĐẦY ĐỦ** đủ MA20, MA50, dốc MA20, khớp TB20 và phân phối. Bước 1 **KHÔNG dòng 1** do chặn cứng; Bước 2 trần nền **TRUNG TÍNH/CHỜ**, trạng thái KHÔNG vẫn thấp hơn; Bước 3 không có Sổ gốc nên bỏ chống đảo chiều → **KHÔNG dòng 1**. | Theo V3.3.1 |
| R:R | **Không áp dụng**: không có mốc vô hiệu trong Sổ người dùng để đối chiếu; không tự tạo stop mới và không phát vùng mua khi KHÔNG | Theo V3.3.1 |

## 3. Diễn biến ngành — chỉ gọi SỨC GIÁ, không suy vốn ròng

Bộ mẫu **133 cổ phiếu trên website (KHÔNG phải toàn HOSE)**:
- Ngân hàng 17 tăng / 1 giảm / 0 đứng (18 mã), STB +6,86%, EIB +5,31% là mã tăng nhiều nhất trong nhóm mẫu.
- Chứng khoán 7 tăng / 6 giảm / 2 đứng (15 mã).
- Năng lượng 3 tăng / 8 giảm / 1 đứng (12 mã).
- Bất động sản nhóm tổng hợp 3 tăng / 5 giảm / 2 đứng (10 mã); bất động sản nhà ở nhóm phân loại riêng 4 tăng / 0 giảm (4 mã).
- Cảng biển và logistics 2 tăng / 2 giảm (4 mã), bất động sản KCN 2 tăng / 2 giảm (4 mã).
Không có GT khớp **ngành** và giao dịch NN theo ngành hai nguồn đồng phạm vi; **không gán cụm TIỀN VÀO/RA ròng**. VNIndex.ai báo ngân hàng +1,5%, bất động sản +1,2% là **chỉ số ngành gia quyền**, khác mẫu 133 mã.

## 4. Kịch bản giao dịch điều kiện

- **NẾU** VN-Index còn 8 phiên phân phối/25, **THÌ KHÔNG mua mới** dù đã vượt MA50; ưu tiên quản trị dừng lỗ từng mã, không dùng đòn bẩy; tỷ trọng tham chiếu theo dòng 1 ≤20% cổ phiếu.
- **NẾU** phiên kế tiếp đóng dưới **1.750,83** (đáy phiên 23/10, đã xác minh OHLC), **THÌ** rà vị thế yếu và giảm phần vi phạm quy tắc dừng lỗ riêng, không bình quân xuống. Mốc này **không thay stop trong Sổ gốc**, vốn chưa được cung cấp.
- **NẾU** đóng trên MA200 **1.796,65**, MA20 dốc lên, số phiên phân phối giảm còn ≤5, thanh khoản/độ rộng khớp được xác nhận và các chặn khác đã được kiểm chứng, **THÌ** tính lại trạng thái, không tự phát lệnh mua.

## 5. Chỉ bổ sung dòng Sổ mới (nội bộ; không chép lịch sử)

```text
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 23/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
23/10/2026;1774,15;1775,19;1750,83;+0,77;14123,09041997;137;153;73;;1907,09;;;Không;1 NGUỒN: GT khớp VNINDEX/độ rộng/top5;CHƯA XÁC MINH:ngoại khớp/tự doanh/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt KHÔNG — dòng 1; chế độ ĐẦY ĐỦ; nền TRUNG TÍNH; điểm -2/7 có giới hạn top5 1 NGUỒN
MA20 1737,93, MA50 1772,22, MA200 1796,65; MA20 đang dốc xuống
Chặn cứng đang có: 8 phiên phân phối/25 (ngưỡng >=6); gỡ khi còn <=5
Phân phối hợp lệ: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10
Chặn mềm: xanh chỉ số nhưng 153 mã giảm >137 mã tăng; top5 kéo 75,07%; MA200 cách đóng 1,27%
Mốc hỗ trợ tham chiếu mới 1750,83 (đáy phiên 23/10), chỉ quan sát từ phiên sau, không thay stop Sổ
Mốc vô hiệu và chặn cứng từ Sổ người dùng: KHÔNG KIỂM ĐƯỢC
Khối ngoại KHỚP HOSE 5 phiên: CHƯA XÁC MINH; basis VN30F1M: CHƯA XÁC MINH
Chống đảo chiều: không áp dụng vì Sổ gốc chưa được cung cấp
PHẦN C — ĐÍNH CHÍNH
Không sửa bất cứ dòng Sổ người dùng nào khi chưa có Sổ gốc.
```

## 6. Bảng tự kiểm 20 tiêu chí

| # | Tiêu chí | Kết quả |
|---|---|---|
| 1 | Ngày có phiên, mốc cắt và giờ EOD | ĐẠT |
| 2 | Không dùng dữ liệu phiên sau | ĐẠT |
| 3 | Giá không lấy ảnh chụp trong phiên | ĐẠT |
| 4 | Mọi nguồn được ghi đường dẫn thật và trạng thái mở | ĐẠT |
| 5 | Các số lõi đã đối chiếu 2 nguồn đúng phạm vi | **GIỚI HẠN:** giá và chỉ số đạt; khớp, độ rộng, top5 chỉ 1 NGUỒN |
| 6 | Nhật ký thử trang cho số 1 nguồn/chưa xác minh | ĐẠT có giới hạn phái sinh/ngoại |
| 7 | Chuỗi 265 hàng, cùng nguồn và hai neo thật | ĐẠT |
| 8 | Mọi số đưa lên web truy ngược được | ĐẠT có nhãn giới hạn |
| 9 | Không ghi đè/chế Sổ gốc | ĐẠT |
| 10 | Ngày đúng yêu cầu | ĐẠT |
| 11 | 5 chỉ báo và chế độ ĐẦY ĐỦ | ĐẠT |
| 12 | Xu hướng nền TRUNG TÍNH đúng MA50 | ĐẠT |
| 13 | Bảy yếu tố đúng tổng −2/7 | ĐẠT có nguồn top5 |
| 14 | Chặn mềm, cứng và KHÔNG KIỂM ĐƯỢC | ĐẠT có giới hạn Sổ |
| 15 | Ba bước, chốt KHÔNG dòng 1 | ĐẠT |
| 16 | Không phát vùng mua mới khi KHÔNG | ĐẠT |
| 17 | Mốc có xuất xứ; không thay stop; R:R không dựng | ĐẠT |
| 18 | Ngành chỉ ghi sức giá khi thiếu vốn ròng | ĐẠT |
| 19 | Xuất bản, bố cục và kiểm tra triển khai | CHỜ xác minh Pages và đối chiếu tệp |
| 20 | Sổ bổ sung chỉ dòng mới, không chép lịch sử | ĐẠT |
