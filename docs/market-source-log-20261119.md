# HỒ SƠ NGUỒN VÀ KIỂM TOÁN VN-INDEX PHIÊN 19/11/2026 — PROMPT v3.3.1

**Mốc dữ liệu:** hết phiên Thứ Năm 19/11/2026 (giờ Việt Nam); đối chiếu thực hiện chiều tối cùng ngày sau khi HOSE đăng Điểm tin lúc 16:51. Không dùng kết quả giao dịch 20/11 hoặc số sau mốc của các phiên khác. **Không có Sổ dữ liệu gốc người dùng dán**, không tự coi nhận định cũ thay thế Sổ gốc.

**Đã đọc tệp đính kèm thực tế ba lượt:** `/mnt/data/Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` — 54.099 byte, 41.504 ký tự, SHA-256 `beebdecf878237a57edcda89cd34b5d50a78d81c232859883e2f94c527070184`. Lượt 1: 0–I về cổng lõi, phạm vi và chuỗi; lượt 2: II–VI về 7 điểm, phân phối, chặn, ba bước; lượt 3: VII–XII về xuất bản web, Zalo 250–400 chữ, Sổ và bảng tự kiểm. Đối chiếu phiên bản v3.3.1 repository `docs/prompt-nhan-dinh-vnindex-v3.md` SHA GitHub `d3776d82a27f643bdc40b13729f564003417e2d0`. Bản repo có phụ lục kỹ thuật, không ghi đè luật tệp đính kèm.

## I. Cổng dữ liệu và nhật ký nguồn

| Số liệu | Giá trị / đơn vị / phạm vi | Nguồn và trích nguyên văn ngắn | Đối chiếu/khác phạm vi | Nhãn |
|---|---|---|---|---|
| VN-Index đóng & thay đổi | **1.689,62; −13,39; −0,79%** | **HOSE** Điểm tin 19/11 lúc 16:51, bản công bố nguyên văn: `VNINDEX 1,689.62 -13.39 -0.79`, https://web.stockbiz.vn/News/2026/11/19/1925885/hose-diem-tin-giao-dich-ngay-19-11-2026.aspx | **VNIndex.ai** trang khóa phiên `1.689,62-13,39 (-0,79%)`, https://vnindex.ai/vn-index/phien/19-11-2026 ; VNDIRECT Finfo nghiên cứu ngày 19/11 cũng trùng | **ĐÃ ĐỐI CHIẾU** |
| **KHỚP HOSE TOÀN SÀN** không thỏa thuận | **9.390 tỷ đồng**, 517.703.412 chứng khoán | HOSE: `Khớp lệnh 517,703,412 9,390` (đơn vị tỷ đồng) tại đường dẫn trên | SSI qua Thanh Niên ghi **9.327,9 tỷ**; VNSignal ghi **9.327,8758 tỷ**, giá trị rổ VNINDEX chứ không phải toàn sàn; khác bao phủ/chốt số, KHÔNG ép tương đương https://thanhnien.vn/vn-index-mat-them-13-diem-thung-moc-1700-diem-185261119161022859.htm ; https://vnsignal.vn/chi-so/vnindex/lich-su-gia | **1 NGUỒN** cho số chính xác toàn HOSE; ngoài nguồn HOSE có đối chiếu cùng hướng |
| Giao dịch thỏa thuận HOSE & TỔNG toàn sàn | **5.685 tỷ / 15.075 tỷ**, theo HOSE | HOSE: `Thỏa thuận 206,665,504 5,685`; `Tổng 724,368,916 15,075` | SSI báo thỏa thuận 5.680,1 tỷ / tổng 15.008 tỷ theo rổ; không đưa vào TB20 KHỚP | **1 NGUỒN** chi tiết chính thức |
| HOSE tăng / giảm / tham chiếu trong tập cổ phiếu VNDIRECT | **104 / 194 / 65**, không trộn ETF | VNDIRECT Finfo trong `src/data/research-data.js`, `marketSession.breadth` ngày 19/11: 104/194/65; nguồn `https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-19&size=500` | **SSI** trong Thanh Niên: `194 mã giảm`, `104 mã tăng`, `65 mã đứng giá`; VNIndex.ai **107/203/94** là tập 404 mã **khác phạm vi** | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.788,51; −18,03; −1,00%** | HOSE điểm tin: `VN30 1,788.51 -18.03 -1.00` | VNDIRECT EOD, Simplize cùng số | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **238,94; −3,79; −1,56%** | Stockbiz bảng chỉ số ở Điểm tin HOSE và Simplize, https://simplize.vn/chi-so/chung-khoan-viet-nam | VNDIRECT EOD cùng số | **ĐÃ ĐỐI CHIẾU** |
| VNMIDCAP, VNSMALLCAP | **1.819,71 (+0,06%); 1.181,48 (−0,28%)** | HOSE mục I chỉ số ngày 19/11, https://web.stockbiz.vn/News/2026/11/19/1925885/hose-diem-tin-giao-dich-ngay-19-11-2026.aspx | Nguồn thứ hai cùng mã và phiên chưa được mở đủ | **1 NGUỒN** |
| Giá mở, cao | **1.700,00 / 1.702,16** | VNIndex.ai EOD phiên 19/11; https://vnindex.ai/vn-index/phien/19-11-2026 | VNSignal cùng hai số; https://vnsignal.vn/chi-so/vnindex/lich-su-gia | **ĐÃ ĐỐI CHIẾU** |
| Giá thấp phiên | **CHƯA XÁC MINH** giá chính xác | VNIndex.ai EOD **1.683,43**; Thanh Niên mô tả 1.683,43; VNSignal lịch sử ghi **1.677,63**, nguồn khác cùng phiên lệch > làm tròn | Chưa có dữ liệu OHLC gốc HOSE phân xử. Không dùng giá thấp để kích hoạt xả cuối hoặc đặt stop. | **CHƯA XÁC MINH** |
| Top 5 kéo giảm điểm trên cùng một bảng | **VIC −8,05; CTG −0,81; VHM −0,69; BSR −0,57; LPB −0,50** | VNIndex.ai danh sách đóng góp 19/11, https://vnindex.ai/vn-index/phien/19-11-2026 | Thanh Niên ghi VIC ~8,11, khác phương pháp; VIC/CTG/VHM cùng chiều. **Không ghép bảng số lẻ.** | **1 NGUỒN** chi tiết điểm |
| Chỉ số ngành HOSE | **VNIT −2,47%; VNREAL −1,67%; VNENE −1,16%; VNFIN −0,60%; VNIND +0,12%; VNMAT +0,08%** | HOSE mục chỉ số ngành tại Điểm tin, URL chính thức qua Stockbiz | Báo Thanh Niên cho thấy ngành phần mềm & ngân hàng yếu, phương pháp nhóm khác, không trộn % | **1 NGUỒN** giá trị theo rổ HOSE |
| Khối ngoại **TỔNG HOSE**, gồm thỏa thuận | **bán ròng 997 tỷ đồng** theo HOSE | HOSE mục giao dịch NĐTNN, `1,120 ... 2,117 ... -997`; https://web.stockbiz.vn/News/2026/11/19/1925885/hose-diem-tin-giao-dich-ngay-19-11-2026.aspx | VNIndex.ai ước tính khoảng **−993,25 tỷ** theo khối lượng nhân giá đóng cửa, không thay giá trị KHỚP | **1 NGUỒN** chi tiết tổng HOSE |
| Ngoại ròng **KHỚP HOSE năm phiên** | **CHƯA XÁC MINH** | HOSE mục tổng chưa có chuỗi khớp đủ năm ngày; SSI/VNIndex.ai công bố tổng/ước tính | Không chuyển −997 tỷ tổng thành ngoại KHỚP, không tính chuỗi/bật veto | **CHƯA XÁC MINH** |
| Kỳ đáo hạn phái sinh | Ngày **19/11/2026**, hợp đồng **41I1GB000** | HNX công bố quy tắc **thứ Năm thứ ba tháng đáo hạn**, https://www.vp.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html ; BVSC ghi hợp đồng kỳ 19/11 https://online.bvsc.com.vn/priceboard/chung-khoan/DERIVATIVE/DERIVATIVEALL ; SHS báo hợp đồng đáo hạn cùng ngày https://www.shs.com.vn/nhan-dinh-thi-truong/ban-tin-thi-truong-ngay-19112026-vn-index-vung-can-bang-1650-diem-1680-diem | HNX quy tắc gốc; BVSC & SHS xác định kỳ thực tế. **Có cờ đáo hạn**, thanh khoản ngày này có thể méo, yếu tố thanh khoản=0. Không dùng basis ngày này. | **ĐÃ ĐỐI CHIẾU** lịch bằng quy tắc HNX + đơn vị giao dịch |
| Sổ dữ liệu gốc / mốc vô hiệu | Không có bản Sổ do người dùng cung cấp | Sổ chỉ được người dùng tự lưu và dán; báo cáo cũ không phải Sổ | Chặn cứng mang sang và mốc vô hiệu đang hiệu lực **KHÔNG KIỂM ĐƯỢC** | **CHƯA XÁC MINH** |

**Lưu ý lịch:** không dùng kết quả thị trường ngày 20/11. Không diễn giải thứ Năm thứ ba là chặn cứng tự động; chỉ là cờ phiên, hai chặn xả cuối và xanh điểm/đỏ mã có thanh khoản cao hạ mức theo Prompt.

## II. Chuỗi dữ liệu nguồn (a) và kết quả TỰ TÍNH

**Một nguồn giá duy nhất:** VNIndex.ai `https://vnindex.ai/vnindex-hom-nay`, bảng **60 hàng thực đọc** từ **25/08/2026 đến 19/11/2026** (gồm 19/11), theo thứ tự hiển thị mới nhất trước. Neo nguyên văn 2 dòng: `19/11/2026 | 1.689,62`; `18/11/2026 | 1.703,01`; giá mới nhất khớp HOSE và VNDIRECT. Cột `Giá trị GD` là **TỔNG gồm thỏa thuận**, cấm dùng cho TB20 KHỚP.

**Tự tính bằng Python** 60 giá đóng đã đọc (không làm tròn trung gian):
- MA20 = `mean(close[0:20])` = **1.735,1555 ⇒ 1.735,16** (20 phiên **23/10–19/11**).
- MA50 = `mean(close[0:50])` = **1.750,182 ⇒ 1.750,18** (50 phiên **11/09–19/11**).
- MA20 của 5 phiên trước = `mean(close[5:25])` = **1.734,948** (20 phiên 16/10–12/11); dốc MA20 trong 5 phiên = `1.735,1555−1.734,948 = +0,2075 ⇒ +0,21 điểm`.
- Độ rộng = `104/194=0,536082 ⇒ 0,536`, giảm áp đảo, yếu tố −1.
- Top 5 kéo giảm = `8,05 + 0,81 + 0,69 + 0,57 + 0,50 = 10,62` điểm; `10,62 / 13,39 = 0,793129 ⇒ 79,31%`, **chỉ một nguồn điểm đóng góp**, không có −1 bán dàn trải theo mục II.C vì >50%. VIC riêng `8,05/13,39 = 60,12%` theo cùng bảng một nguồn.
- MA200: chỉ 60 giá, CHƯA XÁC MINH và không quyết định chế độ.
- **TB20 KHỚP HOSE:** CHƯA XÁC MINH, vì thiếu 20 trị số KHỚP toàn HOSE liền trước trong một bảng nguồn đủ điều kiện neo. VNIndex.ai có 60 tổng giao dịch; VNSignal có **20 hàng 19/11→23/10**, không đủ 21 cho TB20; nmquan mở bị timeout, dữ liệu chậm ở kết quả tìm kiếm. SSI qua Thanh Niên có một *tỷ lệ* 22,1% dưới TB20 của rổ riêng, nhưng Prompt yêu cầu **phép tính từ chuỗi 21 phiên cùng nguồn** nên không gán bội số cho HOSE.
- **Phân phối trong 25 phiên:** CHƯA XÁC MINH vì thiếu chuỗi **26 phiên KHỚP đồng phương pháp** và đủ cờ ETF/đáo hạn; không nội suy. Phiên 19/11 có cờ đáo hạn nên **không đếm** phiên 19 thành phiên phân phối, không tự khẳng định số phiên còn hiệu lực.
- Giá thấp 19/11 giữa nguồn lệch thật, vị trí đóng trong biên/chặn xả cuối không thể chấm từ một giá thấp chưa phân xử.

## III. Cổng, 7 điểm, ba bước

**Cổng số lõi: ĐẠT có giới hạn.** Đóng/% đã đối chiếu HOSE/VNIndex.ai/VNDIRECT; khớp 9.390 tỷ chính xác toàn sàn **1 NGUỒN** HOSE, so với SSI/VNSignal rổ khác; độ rộng VNDIRECT **104/194/65** đã đối chiếu SSI. Có số lõi 1 NGUỒN ⇒ trần tối đa CHỜ.

**CHẾ ĐỘ RÚT GỌN — thiếu chuỗi dữ liệu: TB20 KHỚP HOSE; số phiên phân phối/25. Xu hướng nền chưa đánh giá được; trạng thái tối đa CHỜ. Đây là giới hạn dữ liệu, không phải tín hiệu thị trường xấu.**

**7 yếu tố**:
1. Giá/MA **−1**: 1.689,62 dưới MA20=1.735,16, MA50=1.750,18; MA20 +0,21 điểm/5 phiên.
2. Thanh khoản **0**: *phiên đáo hạn phái sinh có cờ sự kiện* nên chấm 0 theo Prompt; đồng thời TB20 đồng phạm vi chưa có.
3. Độ rộng **−1**: 104/194=0,536≤0,67.
4. Chất lượng dòng tiền **0**: phiên giảm, top5=79,31%>50%; VIC gánh phần lớn điểm giảm, nên không gọi bán dàn trải từ phép đóng góp.
5. Ngoại KHỚP **0**: thiếu chuỗi 5 phiên cùng phạm vi (tổng HOSE −997 tỷ không thay khớp).
6. Phân phối **0**: thiếu chuỗi KHỚP 26 ngày + cờ sự kiện, phiên này loại do đáo hạn.
7. Phái sinh/vĩ mô **0**: ngày đáo hạn không dùng basis; chưa xác minh vĩ mô bất lợi rõ trước mốc cắt.
**Tổng: −2/7.**

**Chặn mềm:** chỉ số đang dưới vùng mốc đóng 19/10 1.689,84 và vùng số tròn 1.700, đã mất hỗ trợ, mọi nhịp hồi dưới kháng cự 1.700–1.703,01 cần quan sát; kháng cự gần từ mốc đóng 18/11=1.703,01 cách 0,79%, nên **chặn mềm cản gần ≤1,5%** có mốc xuất xứ. Không có điều kiện xanh điểm/đỏ mã vì hôm nay index giảm.

**Chặn cứng:** xả cuối không đánh giá được do giá thấp nguồn lệch và TB20 KHỚP thiếu; riêng hôm nay có cờ đáo hạn nên hai chặn giá cuối ngày/xanh điểm đỏ mã với thanh khoản cao sẽ hạ thành mềm theo Prompt. Khối ngoại bán KHỚP 5 phiên + dưới MA50, ≥6 phân phối/25, mốc vô hiệu đang hiệu lực từ Sổ gốc **KHÔNG KIỂM ĐƯỢC**; không coi là đã gỡ hoặc tự kích hoạt.

**Ba bước RÚT GỌN:** B1 **KHÔNG** dòng **R2**, vì −2≤−2 (giá/MA và độ rộng); B2 nền **CHƯA ĐÁNH GIÁ**, trần CHỜ ⇒ vẫn KHÔNG; B3 không có Sổ gốc nên **bỏ chống đảo chiều**, chặn mang sang không kiểm đủ. **KẾT QUẢ KHÔNG — R2**, vì tín hiệu giá và độ rộng đã kiểm, KHÔNG phải do thiếu dữ liệu. Tỷ trọng cổ phiếu phòng thủ định hướng **≤20%** theo bảng R2, mang tính minh họa, không tự ép tài khoản; không mua mới, không tăng margin, không bình quân xuống; không bán tháo máy móc.

## IV. Mốc và kịch bản

- **Giá 1.689,62 đang sát và dưới 1.689,84**, mức đóng cửa 19/10 trên VNIndex.ai, không gọi đây là hỗ trợ đã giữ. Mốc **1.700,00** là số tròn tâm lý đã mất; **1.702,16** là giá cao 19/11, và **1.703,01** là giá đóng 18/11 (kháng cự gần).
- **1.680,62** là mức đóng cửa phiên 28/07/2026 được Thanh Niên dẫn SSI, dùng làm mốc lịch sử tham khảo phía dưới (không phải chặn vô hiệu từ Sổ).
- MA20 **1.735,16**, MA50 **1.750,18** là kháng cự kỹ thuật tính từ một chuỗi.
- **Mốc vô hiệu đang hiệu lực từ Sổ gốc:** CHƯA XÁC MINH; không đặt mới ngầm để né chặn. Không công bố vùng mua mới, R:R chỉ số **không áp dụng**.
- Kịch bản TỐT (THẤP): NẾU VN-Index đóng trở lại trên 1.700,00/1.703,01, rồi vượt MA20 1.735,16 với độ rộng và KHỚP được xác nhận, THÌ **chạy lại cả bảy yếu tố**, không tự mua trước khi chuyển CÓ.
- Kịch bản CƠ SỞ (TRUNG BÌNH): NẾU dao động dưới 1.703,01 nhưng không đóng mất 1.680,62, THÌ quản trị các mã còn giữ nền, không mở mới.
- Kịch bản XẤU (TRUNG BÌNH–CAO): NẾU đóng dưới mốc lịch sử 1.680,62 với độ rộng tiếp tục âm, THÌ ưu tiên rà cổ phiếu yếu/chạm điểm dừng lỗ riêng, không tăng đòn bẩy. Đây là kịch bản có điều kiện, không ghi xác suất.
- Bản đồ dòng tiền có số theo chỉ số ngành HOSE: VNIT −2,47%, VNREAL −1,67%, VNENE −1,16%, VNFIN −0,60% yếu; VNIND +0,12%, VNMAT +0,08% giữ sắc nhẹ, HVN/GEE là điểm sáng cá biệt. **Chưa có nhóm dẫn dắt tăng đủ đồng thuận**; không khẳng định tiền ròng vào/ra toàn nhóm vì thiếu bộ giá+khớp+ngoại cùng ngành.

## V. Nhật ký tìm kiếm cho các ô 1 NGUỒN / CHƯA XÁC MINH

| Ô | Các trang thực mở và kết quả |
|---|---|
| KHỚP HOSE 9.390 tỷ | HOSE qua Stockbiz: **có số, đã dùng**; Thanh Niên dẫn SSI 9.327,9: **có số, khác phạm vi**; VNSignal 9.327,8758 rổ VNINDEX: **có số, khác phạm vi**; Index.vn gán 14.653 tỷ thành khớp, trái bảng HOSE chính thức: **có số nhưng phạm vi sai**, không dùng |
| Giá thấp ngày 19 | VNIndex.ai 1.683,43: **có số**; VNSignal 1.677,63: **có số nhưng lệch thật**; Thanh Niên 1.683,43: **có số cùng VNIndex.ai**; bảng HOSE điểm tin chỉ có giá đóng, không có OHLC: **không có số**. Chưa phân xử được bằng OHLC trực tiếp HOSE |
| TB20 KHỚP/25 phiên phân phối | VNIndex.ai 60 hàng có **giá trị tổng**; VNSignal 20 hàng khớp rổ VNINDEX không đủ 21/26; nmquan trang 30 phiên **không mở được (timeout)**; SSI qua Thanh Niên chỉ công bố tỷ lệ TB20 của một rổ khác; HOSE chỉ bản một phiên |
| Ngoại KHỚP 5 ngày | HOSE 19/11 thống kê tổng; VNIndex.ai giá trị ước tính; VNSignal lịch sử chỉ tổng từng phiên và không có đủ nhãn khớp/đối chiếu; không ghép |
| MA200 | VNIndex.ai có 60 đóng; VNSignal 20 đóng; không có 200 giá cùng bảng đã mở, không dùng |
| Sổ gốc / chặn cứng đã kích hoạt | Hồ sơ các ngày trước chỉ là bản kiểm toán; không có Sổ người dùng dán; không tự coi đã gỡ |
| Basis ngày đáo hạn | SHS công bố hợp đồng 41I1GB000 đáo hạn, HNX quy tắc ngày, nhưng Prompt không dùng basis trong ngày đáo hạn; không điền số để đỡ nhiễu |

## VI. Tự kiểm 20 mục Prompt v3.3.1

| # | Kết quả | Ghi chú |
|---|---|---|
|1|ĐẠT|19/11 có phiên, HOSE sau chốt 16:51 |
|2|ĐẠT|Không dùng diễn biến phiên 20/11 |
|3|ĐẠT|Không lấy số lõi từ trí nhớ; số trên trang đã mở |
|4|ĐẠT CÓ GIỚI HẠN|Bản HNX product spec tìm thấy qua search nhưng trang mở lại timeout, đã đối chứng bằng BVSC/SHS + quy tắc HNX công bố |
|5|ĐẠT CÓ GIỚI HẠN|Giá/% và độ rộng đối chiếu; khớp toàn HOSE 1 NGUỒN chi tiết |
|6|ĐẠT|Có nhật ký tìm nhiều nguồn khi lệch/thiếu |
|7|ĐẠT CÓ GIỚI HẠN|60 giá VNIndex.ai tự tính; không dùng thanh khoản tổng làm khớp |
|8|ĐẠT|Con số web/Zalo từ nhật ký hoặc ngưỡng Prompt; không đăng giá thấp còn lệch |
|9|ĐẠT|Không chép/sửa Sổ cũ |
|10|ĐẠT|Ngày phân tích theo lệnh 19/11 |
|11|ĐẠT|RÚT GỌN vì thiếu TB20 và phân phối |
|12|ĐẠT|Nền chưa đánh giá, MA200 thiếu được ghi rõ |
|13|ĐẠT|7 điểm −2/7, dữ liệu thiếu chấm 0 |
|14|ĐẠT CÓ GIỚI HẠN|Chặn chưa kiểm giữ nhãn KHÔNG KIỂM ĐƯỢC |
|15|ĐẠT|R2 KHÔNG → trần CHỜ vẫn KHÔNG → thiếu Sổ nên bỏ chống đảo chiều |
|16|ĐẠT|Không có vùng mua mới |
|17|ĐẠT CÓ GIỚI HẠN|Mốc có xuất xứ; mốc vô hiệu Sổ thiếu, R:R không áp dụng |
|18|ĐẠT CÓ GIỚI HẠN|Ngành chỉ mô tả sức giá có HOSE, không suy tiền ròng thiếu chứng cứ |
|19|ĐẠT|Website và bài Zalo cùng số/kết luận, không sửa DOM/HTML/CSS |
|20|KHÔNG ĐẠT HOÀN TOÀN|Không có Sổ gốc do người dùng dán; chỉ có dòng mới/phần B được ghi |

## VII. Sổ dữ liệu tự lưu — chỉ bổ sung

```
=== SỔ DỮ LIỆU VNINDEX — đến 19/11/2026 ===
PHẦN A — DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng HOSE KHỚP;VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
19/11/2026;1689,62;1702,16;;-0,79;9390;104;194;65;;1788,51;;đáo hạn VN30F tháng 11;;ĐÃ ĐỐI CHIẾU: đóng/%, cao, độ rộng, VN30; 1 NGUỒN: KHỚP toàn HOSE; CHƯA XÁC MINH: thấp, ngoại KHỚP, F1M, phân phối
PHẦN B — TRẠNG THÁI MANG SANG
Chốt: KHÔNG — R2, điểm −2/7
Chế độ: RÚT GỌN (thiếu TB20 KHỚP toàn HOSE, phân phối/25)
Nền: CHƯA ĐÁNH GIÁ; MA20 1735,16; MA50 1750,18; dốc MA20/5 +0,21; MA200 chưa có
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Kháng cự: 1700,00 (tâm lý), 1702,16 (đỉnh 19/11), 1703,01 (đóng 18/11); MA20 1735,16
Mốc lịch sử dưới: 1680,62 (đóng 28/07 theo SSI/Thanh Niên; KHÔNG phải mốc vô hiệu)
Chặn cứng lịch sử: KHÔNG KIỂM ĐƯỢC
Phân phối/25: KHÔNG KIỂM ĐƯỢC
Khối ngoại KHỚP/5 phiên: KHÔNG KIỂM ĐƯỢC
Basis: bỏ qua ngày đáo hạn, không có chuỗi 3 phiên
PHẦN C — ĐÍNH CHÍNH
Không có Sổ gốc để lập dòng đính chính. 
```

**Giới hạn xuất bản:** chỉ thêm tệp `src/data/daily-insights-20261119.js` và một import cuối trong `src/index.js`. Không đổi HTML/CSS/thứ tự sections/menu, không sửa vùng mua/stop/target của từng mã hay nội dung các ngày đã đăng. Hồ sơ và Sổ chỉ nằm trong docs, không nạp vào khu vực Nhận định công khai.
