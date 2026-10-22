# NHẬT KÝ KIỂM TOÁN — VN-INDEX 22/10/2026, Prompt v3.3.1

**Ngày phân tích:** thứ Năm, 22/10/2026; có giao dịch thật. **Mốc cắt:** hết ngày 22/10/2026 giờ Việt Nam. **Dữ liệu EOD:** VNDIRECT Finfo raw lúc 15:33 (đủ cuối phiên), Stockbiz IndexStats ghi ngày 22/10 và chỉ số 15:25, VNIndex.ai ghi đóng cửa 15:00. Không sử dụng tin về các phiên sau 22/10. **Không có Sổ dữ liệu tự lưu do người dùng dán vào**; bản tin 21/10 trên web chỉ là lịch sử đăng, không thay Sổ người dùng.

**Ba lượt đọc Prompt đính kèm thực hiện ngày 22/10:** (1) cổng dữ liệu, thời điểm, nhãn nguồn và chuỗi đồng nhất; (2) MA, 7 yếu tố, phân phối, điều kiện chặn và 3 bước quy đổi; (3) định dạng báo cáo, bài Zalo, 20 phép tự kiểm, sổ bổ sung và quy tắc không thay đổi khung web. File gốc người dùng: `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md`, 589 dòng.

## I. Nhật ký nguồn theo mục 0.8 — cùng phiên, cùng phạm vi

| Dữ kiện | Kết quả sử dụng | Nguồn 1 / trích nguyên văn ngắn | Nguồn 2 / trích nguyên văn ngắn | Nhãn và giới hạn |
|---|---|---|---|---|
| VN-Index EOD 22/10 | **1.760,63 điểm, +21,96 (+1,26%)** | VNDIRECT Finfo phiên 22/10 `"close":1760.63,"pctChange":1.26303438835431` | Stockbiz IndexStats hàng 22/10: `1760,63 +21,96(+1,26%)`; VNIndex.ai ngày 22/10: `1.760,63 điểm (+21,96, +1,26%)` | **ĐÃ ĐỐI CHIẾU** |
| VN30 22/10 | **1.892,98; +12,41 (+0,66%)** | VNDIRECT marketSession phiên 22/10 `"close":1892.98` | Stockbiz IndexStats (cập nhật 15:25) `VN30 1.892,98 +12,41/+0,66%` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index 22/10 | **261,08; −0,59 (−0,23%)** | VNDIRECT marketSession `"close":261.08` | Stockbiz `HNX-INDEX 261,08 -0,59/-0,23%` | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.746,15 / 1.763,55 / 1.746,15** | VNDIRECT Finfo raw `"open":1746.15,"high":1763.55,"low":1746.15` | VNIndex.ai phiên 22/10 `Mở cửa 1.746,15 Cao nhất 1.763,55 Thấp nhất 1.746,15` | **ĐÃ ĐỐI CHIẾU OHLC** |
| GT/KL **khớp lệnh VNINDEX** | **13.300,61523103 tỷ đồng / 571.952.962 CP** | VNDIRECT raw `"nmValue":13300615231030,"nmVolume":571952962` | Stockbiz IndexStats hàng ngày ghi **15.299,76 tỷ** là **tổng giao dịch VN-Index**, VNIndex.ai **15,3 nghìn tỷ** cũng là tổng; không cùng phạm vi khớp | **1 NGUỒN** cho khớp; không hòa trộn |
| Độ rộng theo **tập VNINDEX VNDIRECT** | **147 tăng, 164 giảm, 57 đứng**, **3 mã sàn** | VNDIRECT raw VNINDEX `"advances":147,"declines":164,"noChange":57`; marketSession có floor 3 | VNIndex.ai 22/10 đếm **149 tăng, 165 giảm, 90 đứng** (tập 404 mã), không cùng phạm vi | **1 NGUỒN** theo VNDIRECT |
| Top 5 **mã góp điểm tăng**, phiên 22/10 | **VIC +14,90; VHM +3,73; BSR +1,14; VPL +0,74; TCX +0,58 điểm**, tổng **21,09** | VNIndex.ai trang đã mở hiển thị ngày **22/10, đóng cửa 15:00**, bảng `VIC +14,90`, `VHM +3,73` cùng các dòng khác | Stockbiz IndexStats không đăng top5; BSC 22/10/2026 chưa có báo cáo được mở, không dùng bản 21/10 để đối chiếu | **1 NGUỒN** cho top5; tỷ lệ **TỰ TÍNH** |
| Giao dịch **khối ngoại tổng HOSE** | **Mua 2.291,39 tỷ? KHÔNG**, đó là số 22/10 từ hàng Stockbiz? Kiểm tra lại: hàng Stockbiz **22/10 ghi mua 2.291,39 tỷ và bán 1.951,39 tỷ**, mua ròng **+340,00 tỷ** trong tổng giao dịch, không khẳng định khớp | Stockbiz IndexStats: `2.291,39 tỷ` / `1.951,39 tỷ` | VNIndex.ai thông báo `ước tính khoảng 330,2 tỷ` theo cách nội suy giá/khớp | **1 NGUỒN tổng**, **TẠM TÍNH** nếu dùng số VNIndex.ai; không dùng số khớp thiếu chuẩn kích hoạt chặn |
| Khối ngoại **khớp lệnh HOSE** và chuỗi 5 phiên | **CHƯA XÁC MINH** khớp lệnh cùng phạm vi | Stockbiz IndexStats là tổng; VNIndex.ai ghi **ước tính**; HODL trang được mở vẫn lưu thông tin phiên khác (không có bản EOD 22/10 trong lần mở) | Đã thử 3 trang, không điền số và không kích hoạt/gỡ chặn cứng bằng ngoại | **CHƯA XÁC MINH** |
| Tự doanh HOSE ròng 22/10 | **CHƯA XÁC MINH** | Smoney tự doanh khi mở mới nhất 21/10; nmquan dữ liệu 21/10; Stockbiz IndexDetail không đăng tổng tự doanh đúng phiên; 3 trang đã thử | Không đăng số | **CHƯA XÁC MINH** |
| Basis VN30F1M đúng ngày/giờ EOD | **CHƯA XÁC MINH** | Mofi phái sinh khi mở mới có phiên 14/10; Stockbiz IndexDetail không có bảng F1M đóng 22/10; HNX/chứng khoán phái sinh đã tìm nhưng chưa có giá đúng kỳ EOD đủ đối chiếu | Không suy hợp đồng, không chấm điểm | **CHƯA XÁC MINH** |
| Cờ đặc thù đáo hạn phái sinh/quỹ ETF | **Chưa có sự kiện 22/10 được xác minh** | 15/10 là ngày đáo hạn tháng 10 đã xác minh cho phiên cũ; chưa đọc được công bố ETF/quỹ chứng minh 22/10 là phiên tái cơ cấu | Không tự suy 22/10 có sự kiện | **LỊCH SỰ KIỆN CHƯA XÁC MINH**, không tự gắn cờ |
| EOD **133 cổ phiếu** web | **133/133 đúng 22/10** | GitHub Actions khóa 22/10 run `39748971542`, `meta.updated:2026-10-22`, toàn bộ `coverage.priceDate` = 22/10 | VNDIRECT–KBS đóng cửa khớp từng mã 133/133, CafeF thiếu hàng EOD đúng ngày; 5 mã còn lệch KL nhỏ giữa hai nhà cung cấp, web giữ KL nguồn chính VNDIRECT | **ĐÃ ĐỐI CHIẾU giá**, KL khác nhỏ có log |

### Những đường dẫn đã thực mở/kiểm tra

- **Stockbiz IndexStats EOD:** https://web.stockbiz.vn/IndicesStats.aspx (hàng 22/10/2026, VN-Index và ngoại **tổng giao dịch**, không phải khớp).
- **Stockbiz IndexDetail:** https://web.stockbiz.vn/IndexDetail.aspx (giá chỉ số, không có phái sinh đúng kỳ và tổng tự doanh cần thiết).
- **VNIndex.ai phiên 22/10:** https://vnindex.ai/vnindex-hom-nay (dấu đóng cửa 15:00, OHLC, độ rộng bộ 404 mã, bảng top 5 và khối ngoại **ước tính**).
- **Read-only VNDIRECT Finfo kiểm toán 264 hàng:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39749055774 (log `SOURCE_HISTORY_ROWS_JSON`, `RAW_VENDOR_INDEX_QUOTE`, `VERIFIED_MARKET_EVIDENCE_JSON`, thực đọc 264 hàng nguyên gốc).
- **Khóa EOD 133/133 và triển khai:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39748971542.
- **HODL:** https://hodl.vn/indices/vnindex/ (trang mở không có khớp HOSE EOD đủ chuẩn ngày 22/10).
- **Smoney tự doanh:** https://smoney.com.vn/giao-dich/tu-doanh (mới nhất 21/10 khi thử).
- **nmquan tự doanh:** https://nmquan.vn/data/tu-doanh (mới nhất 21/10 khi thử).
- **Mofi phái sinh:** https://mofi.vn/phai-sinh (bản đã mở mới nhất 14/10).
- **BSC ngày 21/10:** https://www.bsc.com.vn/bao-cao/16064-bsc-brief-21-10-vn-index-hoi-phuc-an-tuong-do-lan-toa-cai-thien/ — chỉ để kiểm tra khuôn nguồn, **không dùng số 21/10 thay 22/10**.
- **HOSE tin chính thức 22/10:** chưa tìm và mở được bản tin cuối phiên tại thời điểm kiểm; **không tạo URL tưởng tượng**.

### Nhật ký tìm lại số thiếu và số một nguồn

- Khớp HOSE: thử VNDIRECT raw (có, dùng một chuỗi), Stockbiz IndexStats (có **tổng giao dịch**, khác phạm vi), VNIndex.ai (tổng giao dịch, khác phạm vi), BSC (chưa mở được 22/10) ⇒ **1 NGUỒN**.
- Độ rộng: VNDIRECT 147/164/57 (dùng), VNIndex.ai 149/165/90 (tập 404, khác), Stockbiz (chỉ số, không có đúng tập VNDIRECT) ⇒ **1 NGUỒN**.
- Ngoại khớp 22/10 + chuỗi 5 phiên: Stockbiz (tổng mua/bán), VNIndex.ai (ròng ước tính), HODL (dữ liệu khác giờ/phiên) ⇒ **CHƯA XÁC MINH**.
- Tự doanh: Smoney (21/10), nmquan (21/10), Stockbiz IndexDetail (không có đúng phạm vi 22/10) ⇒ **CHƯA XÁC MINH**.
- Phái sinh: Mofi (14/10), Stockbiz IndexDetail (không có giá hợp đồng), tìm HNX (chưa có báo cáo phiên 22 đúng kỳ) ⇒ **CHƯA XÁC MINH**.
- Top5: VNIndex.ai có bảng đóng cửa 22/10; Stockbiz không có, BSC chưa có báo cáo 22/10 đã mở. Dùng **1 NGUỒN**, không nâng nhãn.

## II. Chuỗi 264 phiên một gốc và phép tính bắt buộc

Gốc dữ liệu **(a) VNDIRECT Finfo**, **264 hàng thực đọc**, từ **01/10/2025 đến 22/10/2026**, không nội suy, không ghép nguồn. Hai hàng neo thực đọc: `"date":"2026-10-21","close":1738.67`, `"date":"2026-10-22","close":1760.63`. Khớp ngày 22/10 với Stockbiz và VNIndex.ai.

| Phép tính | Công thức / kết quả | Nhãn |
|---|---|---|
| MA20 | TB 20 phiên bao gồm 22/10: **1.738,476 → 1.738,48** | TỰ TÍNH |
| MA50 | TB 50 phiên: **1.772,2048 → 1.772,20** | TỰ TÍNH |
| MA200 | TB 200 phiên: **1.796,6100 → 1.796,61** | TỰ TÍNH |
| Dốc MA20 | MA20 hiện 1.738,476 − MA20 cách 5 phiên 1.759,575 = **−21,099 điểm**, đang dốc xuống | TỰ TÍNH |
| GT khớp TB20 liền trước | Trung bình 20 phiên 21/09–21/10 theo bảng VNDIRECT: **12.236,93274889 tỷ** (20 phiên giao dịch, không gồm 22/10, mốc đầu chuẩn là hàng ngày thứ 21 từ cuối chuỗi, không giả ngày đầu nếu cần lọc lịch) | TỰ TÍNH |
| Khớp / TB20 | 13.300,61523103 / 12.236,93274889 = **1,086924 → 1,087×** | TỰ TÍNH |
| Khớp so phiên 21/10 | 13.300,61523103 / 17.071,09779449 − 1 = **−22,09%** | TỰ TÍNH |
| Độ rộng / chất lượng xanh | 147/164 = **0,8963** <1,5 và >0,67: yếu tố 3 **0**; chỉ số xanh nhưng **mã giảm nhiều hơn tăng** → chặn mềm | TỰ TÍNH |
| Chất lượng kéo trụ | (14,90+3,73+1,14+0,74+0,58) / 21,96 = 21,09/21,96 = **96,04%**; yếu tố 4 **−1** (>70%, top5 thuộc VNIndex.ai **1 NGUỒN**, cùng bộ số) | TỰ TÍNH |
| Vị trí đóng trong biên phiên | (1.760,63−1.746,15)/(1.763,55−1.746,15) = **0,83218**, trong 1/3 phía trên | TỰ TÍNH |
| Đáy 20 phiên trước | **1.677,19**, ngày 20/10 | TỰ TÍNH |
| Phân phối còn hiệu lực/25 phiên | **8** phiên: 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10; 22/10 chỉ số tăng, **không sinh phân phối mới**. Ngày đáo hạn 15/10 loại theo cờ đã xác minh phiên cũ. Chưa đủ tăng 5% từ các ngày đang hiệu lực; số còn **8**, cao hơn ngưỡng chặn ≥6. | TỰ TÍNH |
| Nền | **XẤU**: 1.760,63 dưới MA50 1.772,20, MA20 dốc giảm 21,099 điểm sau 5 phiên, chỉ số dưới MA200 1.796,61. Dù đã vượt MA20 1.738,48, chưa thỏa nền TRUNG TÍNH/TỐT. | TỰ TÍNH |
| Điểm 7 yếu tố | Giá/MA **0** (đã trên MA20 nhưng dưới MA50, không thủng đáy 20); thanh khoản **0** (phiên tăng +1,26% nhưng 1,087× không đạt +1 ≥1,2 và chưa chạm −1 <0,8); độ rộng **0** (0,896); chất lượng điểm kéo **−1** (96,04%, một nguồn); ngoại **0** (không có ròng khớp và chuỗi 5 phiên đủ nguồn); phân phối **−1** (8 phiên ≥5); phái sinh/vĩ mô **0** (basis chưa khóa, chưa có tin đủ căn cứ). ⇒ **−2/7**, ghi giới hạn một nguồn yếu tố 4. Loại yếu tố 4, chỉ còn −1/7 nhưng chặn phân phối không đổi trạng thái. | TỰ TÍNH |
| Cổng chặn mềm | **Có:** xanh chỉ số +1,26% nhưng 164 giảm >147 tăng; kháng cự MA50 **1.772,20** phía trên, cách chỉ số **0,66%** ≤1,5%, chưa vượt. Không có chặn thanh khoản suy yếu theo mục II.E vì 1,087 không phải yếu tố 2 = −1 (ngưỡng <0,8). | TỰ TÍNH |
| Cổng chặn cứng | **Có:** 8 phiên phân phối/25 ≥6. Không có chặn xả cuối (đóng phần trên, không phải 1/3 dưới); không có chặn xanh điểm đỏ mã **kèm bội số ≥1,2**, vì bội số chỉ 1,087. Ngoại 5 phiên, mốc vô hiệu Sổ người dùng **KHÔNG KIỂM ĐƯỢC**, không mặc nhận được gỡ. | TỰ TÍNH |
| Trạng thái 3 bước | **ĐẦY ĐỦ**: 5 chỉ số MA20/50, dốc MA20, TB20, phân phối đều có. Thô **KHÔNG dòng 1** do chặn cứng → trần nền **XẤU/KHÔNG** → thiếu Sổ, bỏ chống đảo chiều → **KHÔNG dòng 1**. | TỰ TÍNH |
| R:R | **Không áp dụng**: chưa có mốc vô hiệu chính thức mang sang từ Sổ người dùng, không tự chọn đáy mới thay stop đang hiệu lực. | theo Prompt |

## III. Sức giá ngành và hành động kiểm soát rủi ro

Theo **bộ mẫu 133 mã của website**, không phải toàn HOSE: năng lượng **10 tăng/2 giảm** (12 mã), cảng biển–logistics **4 tăng/0 giảm** (4), nhóm KCN **4 tăng/0 giảm** (4), ngân hàng **8 tăng/9 giảm/1 đứng** (18), chứng khoán **4 tăng/10 giảm/1 đứng** (15), bất động sản trong phân ngành riêng **4 tăng/6 giảm** (10). Đây là **sức giá**, chưa được gọi "TIỀN VÀO/TIỀN RA ròng" vì thiếu giá trị khớp ngành và ngoại ngành đủ đối chiếu. VNIndex.ai EOD nhận xét bất động sản gia quyền tăng +3,5% và ngân hàng −0,2% là **chỉ số ngành vốn hóa** khác tập 133.

- **NẾU** VN-Index còn dưới **MA50 1.772,20** và chặn 8 phân phối/25 chưa gỡ, **THÌ KHÔNG MUA MỚI**, không mua đuổi theo trụ.
- **NẾU** VN-Index đóng dưới đáy phiên 22/10 là **1.746,15** từ phiên kế tiếp, **THÌ** rà và giảm phần cổ phiếu yếu **theo stop của từng mã**, không bình quân xuống; đáy này chỉ là tham chiếu kỹ thuật mới, không thay mốc Sổ gốc.
- **NẾU** vượt MA50 **1.772,20**, MA200 **1.796,61**, MA20 không còn dốc xuống và phân phối còn **≤5** cùng chứng cứ thanh khoản/độ rộng/khối ngoại phù hợp, **THÌ** tính lại trạng thái, không tự mở lệnh mua ngay.
- Tỷ trọng theo dòng 1 chỉ **mức định hướng ≤20% cổ phiếu**, hạn chế đòn bẩy, không chỉnh dừng lỗ/target/vùng mua của cổ phiếu trên website.

## IV. Sổ bổ sung nội bộ — chỉ phiên 22/10

```text
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 22/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
22/10/2026;1760,63;1763,55;1746,15;1,26;13300,61523103;147;164;57;;1892,98;;;Không;1 NGUỒN:GT khớp VNINDEX/độ rộng; CHƯA XÁC MINH:KN khớp/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG (dòng 1); chế độ ĐẦY ĐỦ; nền XẤU; điểm -2/7 có yếu tố Top5 1 NGUỒN
Mốc vô hiệu Sổ gốc: KHÔNG KIỂM ĐƯỢC
Mốc kỹ thuật đã công bố 22/10: đáy 1746,15, chỉ kiểm từ phiên sau, không tự sửa mốc cũ
Hỗ trợ/kháng cự: MA20 1738,48, đáy 21/10 1695,95; kháng cự MA50 1772,20, MA200 1796,61
Chặn cứng: 8 phiên phân phối/25; gỡ khi còn <=5
Chặn mềm: xanh điểm đỏ mã 147 tăng/164 giảm; sát MA50 còn cách 0,66%
Các phiên phân phối còn hiệu lực: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10
Khối ngoại khớp 5 phiên và chặn từ Sổ trước: KHÔNG KIỂM ĐƯỢC
Basis VN30F1M: CHƯA XÁC MINH
Chống đảo chiều: bỏ qua khi không có Sổ tự lưu
PHẦN C — ĐÍNH CHÍNH
Không có dòng Sổ người dùng để sửa.
```

## V. Bảng 20 tiêu chí tự kiểm trung thực

| # | Mục | Kết quả |
|---|---|---|
| 1 | Đúng ngày, có phiên và giờ EOD | ĐẠT |
| 2 | Không dùng diễn biến sau ngày 22/10 | ĐẠT |
| 3 | Không bịa số; trích gốc thật cho số lõi | ĐẠT theo chứng cứ web/log đã thực mở |
| 4 | Không ghi nguồn tưởng tượng | ĐẠT |
| 5 | Số lõi khớp ≥2 nguồn khi có, nhãn đúng phạm vi | CÓ GIỚI HẠN: GT khớp/độ rộng VNDIRECT chỉ **1 NGUỒN** |
| 6 | Có log tìm kiếm các số một nguồn/chưa xác minh | ĐẠT theo các trang liệt kê; chưa có kết quả phái sinh cùng hợp đồng |
| 7 | 264 hàng nguyên gốc, hai neo, một nguồn, không nội suy | ĐẠT |
| 8 | Số xuất bản có thể truy ngược | ĐẠT trong giới hạn nhãn |
| 9 | Không sửa/chép Sổ cũ | ĐẠT |
| 10 | Đúng phiên yêu cầu | ĐẠT |
| 11 | Chế độ 5 chỉ số | ĐẠT: ĐẦY ĐỦ |
| 12 | MA20/50/200, dốc và nền có số | ĐẠT |
| 13 | 7 yếu tố: 0,0,0,-1,0,-1,0 | ĐẠT có giới hạn Top5 một nguồn |
| 14 | Đã rà chặn mềm/cứng và chưa kiểm | ĐẠT; chặn ngoại/Sổ KHÔNG KIỂM ĐƯỢC |
| 15 | Đúng 3 bước KHÔNG dòng 1 | ĐẠT |
| 16 | Không ghi vùng mua mới khi KHÔNG | ĐẠT |
| 17 | Mốc giá có xuất xứ, R:R không tự dựng | ĐẠT |
| 18 | Ngành chỉ ghi sức giá khi không có tiền ròng | ĐẠT, không mạo nhận dòng vốn |
| 19 | Triển khai, bố cục và đối chiếu tệp sau xuất bản | CHỜ xác minh deploy bản nhận định 22/10 |
| 20 | Chỉ bổ sung 1 dòng Sổ mới, không sao Sổ cũ | ĐẠT |
