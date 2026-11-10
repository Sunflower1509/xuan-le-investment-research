# HỒ SƠ NGUỒN VÀ KIỂM TOÁN VN-INDEX — PHIÊN 10/11/2026 — v3.3.1

**Phiên phân tích:** thứ Ba 10/11/2026, có giao dịch HOSE. **Ngày thực hiện:** 10/11/2026. **Mốc cắt:** sau đóng cửa phiên 10/11, giờ Việt Nam (VNDIRECT raw 15:11:08; Thời báo Tài chính VN 17:34, bản ngoại 20:42). **Không dùng thông tin của các phiên giao dịch sau 10/11.** Không có Sổ tự lưu do người dùng dán nên **KHÔNG KIỂM ĐƯỢC** mốc vô hiệu đã công bố trong Sổ gốc; các bài lưu trên web không tự trở thành Sổ gốc.

## I. Ba lượt đọc và áp dụng Prompt đính kèm

**Nguồn yêu cầu:** `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` do người dùng đính kèm, 54.099 byte; bản quy tắc trong repo `docs/prompt-nhan-dinh-vnindex-v3.md`, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`. Đã đọc và rà ba lượt tách biệt:
1. **Lượt 1 — mục 0–I:** ngày và mốc cắt; số lõi đối chiếu hai nguồn độc lập, thứ bậc Sở/CTCK/báo, phạm vi KHỚP HOSE khác tổng giao dịch, độ rộng cùng tập, nhãn 1 NGUỒN; 277 hàng lịch sử đơn nguồn; nhật ký mọi giá trị chưa xác minh.
2. **Lượt 2 — mục II:** nền xu hướng MA20, MA50 và MA200; dốc MA20/5; 7 yếu tố ±1/0; phiên phân phối/25; chặn cứng/mềm và điều kiện gỡ; ba bước quy đổi trạng thái.
3. **Lượt 3 — mục III–XII:** sức giá ngành không tự gọi vốn ròng, các mốc với xuất xứ; kịch bản tốt/cơ sở/xấu và hành động NẾU–THÌ; nội dung web giữ khung v2.2.2; Zalo liền mạch 250–400 chữ, 20 mục tự kiểm và Sổ chỉ thêm một dòng mới. **Không sửa HTML/CSS, thứ tự các mục hay quy tắc dừng lỗ.**

## II. Nhật ký nguồn & phạm vi đúng 10/11

| Ô dữ liệu | Giá trị đúng phạm vi | Dữ liệu/nguồn 1 thực đọc | Nguồn 2 đã mở và phân xử | Nhãn |
|---|---|---|---|---|
| VN-Index đóng/% | **1.743,07; +28,75; +1,68%** | VNDIRECT raw `"close":1743.07,"change":28.75,"pctChange":1.67704979233749` | Thời báo Tài chính 17:34 `tăng 28,75 điểm (+1,68%) lên mức 1.743,07 điểm`; VNIndex.ai `1.743,07 điểm (+28,75, +1,68%)` | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp | **1.725,64 / 1.743,07 / 1.723,81** | VNDIRECT raw `"open":1725.64,"high":1743.07,"low":1723.81` | VNIndex.ai 10/11 `1.725,64 / 1.743,07 / 1.723,81`, WebGia cùng số | **ĐÃ ĐỐI CHIẾU** |
| VN30/HNX/VNMID/VNSML | **VN30 1.860,93 (+1,68%); HNX 256,26 (+0,40%); VNMID 1.873,41 (+1,57%); VNSML 1.225,23 (+0,48%)** | Bản tin HOSE 10/11 tìm thấy nguyên số; Thời báo Tài chính 10/11 có VN30/HNX | Tài chính.com/VNIndex.ai trùng VN30; VNMID/VNSML được công bố trên bản tin HOSE, không gán đối chiếu hai nguồn nếu chưa đọc toàn văn | **VN30/HNX ĐÃ ĐỐI CHIẾU; Mid/Small 1 NGUỒN** |
| Giá trị **KHỚP** VNINDEX (không gồm thỏa thuận) | **13.074,05166696 tỷ; 661.531.818 cổ phiếu** | VNDIRECT raw `"nmValue":13074051666960,"nmVolume":661531818` | VNSignal trang lịch sử `13.074.051.666.960` và `661.531.818`; Thời báo Tài chính nói khớp khoảng +4% so TB20, tương thích tỷ lệ. HOSE tổng khớp toàn sàn khoảng 13,1 nghìn tỷ, có thể khác rổ. | **ĐÃ ĐỐI CHIẾU raw với VNSignal; cùng độ chính xác số** |
| **Tổng GD VNINDEX** gồm thỏa thuận | **16.901,28156989 tỷ** | VNDIRECT raw `"accumulatedVal":16901281569890` | Thời báo Tài chính bảng đầu bài `GT: 16,901 (tỷ)`; bảng HOSE `VNINDEX ...16,901.28` (có bản tin) | **ĐÃ ĐỐI CHIẾU**; không dùng cho TB20 |
| **Độ rộng HOSE tập VNDIRECT** | **217 tăng / 92 giảm / 50 đứng**, 4 trần, 2 sàn; thêm 45 không GD | VNDIRECT raw `"advances":217,"declines":92,"noChange":50` | Thời báo Tài chính 17:34 `92 mã giảm giá, 50 mã ... 217 mã tăng giá`, VNDIRECT La bàn 10/11 cùng; VNIndex.ai đếm 404 mã 219/93/92 khác tập | **ĐÃ ĐỐI CHIẾU cùng tập**, không trộn bảng header 221/94 |
| Top5 kéo tăng | **VIC +12,09; VHM +2,69; HVN +0,93; TCB +0,87; LPB +0,73 điểm** | VNIndex.ai 10/11 có bảng đủ 5; tổng **17,31 điểm** | VNDIRECT La bàn ghi VIC dẫn dắt, Thời báo xác nhận VIC/VHM góp lớn nhưng không cùng bảng 5. Không ghép điểm từ các nguồn khác nhau. | **1 NGUỒN cho điểm từng mã**, tổng TỰ TÍNH |
| Ngành theo giá | **26/35 nhóm tăng; bất động sản, chứng khoán, cao su mạnh; dầu khí yếu** | Thời báo Tài chính 17:34 nêu đủ 26/35 và nhóm | VNIndex.ai BĐS +3,0%, ngân hàng +1,1%, thực phẩm +1,3% theo phân nhóm khác; VNDIRECT La bàn 15/19 ngành tăng với BĐS dẫn đầu nhưng khác hệ phân ngành | **ĐÃ ĐỐI CHIẾU xu hướng nhiều ngành; không suy tiền ròng cấp ngành** |
| Ngoại **tổng** HOSE | **Mua ròng ~477,6 tỷ** (mua 2.168,31; bán 1.692,83 theo báo) | Thời báo Tài chính 20:42 `mua ròng 477,6 tỷ đồng`, nguồn Dstock | VNIndex.ai nói `ước tính khoảng 474,8 tỷ`; VNDIRECT La bàn ghi `477,6 tỷ đồng`, cùng chiều nhưng ước tính khác cách tính. **Không thay tổng bằng khớp**. | **ĐÃ ĐỐI CHIẾU tổng ròng xấp xỉ** |
| Ngoại **KHỚP** HOSE/5 phiên | **Không có chuỗi đồng phương pháp 5 phiên** | Thử Thời báo TC tổng 477,6; VNIndex.ai ước tính tổng 474,8 | Thử nmquan tổng và VNDIRECT La bàn tổng; không có số 5 phiên riêng KHỚP đã khóa. | **CHƯA XÁC MINH**, yếu tố ngoại = 0 |
| VN30F1M và basis | **VN30F1M 1.856,3**, mã kỳ hạn `41I1GB000`, đáo hạn **19/11/2026**, VN30 **1.860,93**; basis **-4,63 điểm / -0,249% VN30** | iWinStock bảng phái sinh 10/11 `VN30F1M 1.856,3 ... Chênh lệch -4,63` | Stockbiz/FIREANT có `VN30F1M 1.856,3` ngày 10/11. Hai trang khác đơn vị hiển thị phù hợp cùng phiên. Chưa thấy tin vĩ mô bất lợi rõ trong các nguồn thị trường đã kiểm; không chứng minh vĩ mô 'không có rủi ro'. | **ĐÃ ĐỐI CHIẾU giá hợp đồng; basis TỰ TÍNH; yếu tố 7 +1 có giới hạn** |
| Tự doanh | **Chưa có bảng đồng phạm vi thời điểm 10/11** | nmquan tổng, Stockbiz phái sinh hiển thị dữ liệu 09/11, báo Thời báo Tài chính thiếu đủ phương pháp | Không dùng tự doanh hợp đồng hay tổng ba sàn để suy tự doanh cổ phiếu HOSE | **CHƯA XÁC MINH** |
| Cờ ETF/đáo hạn trong ngày | **Không xác lập sự kiện méo khớp 10/11** | Lịch phái sinh iWinStock VN30F1M đáo hạn 19/11, báo cáo Thời báo 10/11, thông tin HOSE 10/11 | Ngày 10/11 không nằm trong ba phiên trước ngày 19/11; không tự giả định cờ ETF nếu chưa có thông báo | **Không gắn cờ theo bằng chứng hiện có** |

**Các nguồn trực tiếp đã mở đọc/kiểm:**
- Dữ liệu EOD nguyên gốc VNDIRECT Finfo, 277 dòng và JSON thô: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42832705255 ; API `https://api-finfo.vndirect.com.vn/v4/vnmarket_prices`.
- VNSignal VNINDEX lịch sử 10/11, chính xác khớp: https://vnsignal.vn/chi-so/vnindex/lich-su-gia
- Thời báo Tài chính Việt Nam 17:34 ngày 10/11: https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-10-11-dong-tien-lan-toa-vn-index-bat-tang-manh-206703.html
- Thời báo Tài chính 20:42 ngày 10/11, ngoại tổng 477,6 tỷ: https://thoibaotaichinhvietnam.vn/khoi-ngoai-quay-lai-mua-rong-hon-460-ty-dong-tap-trung-o-nhom-bat-dong-san-206708.html
- VNIndex.ai 10/11, số cơ sở, top 5 và rổ 404: https://vnindex.ai/vnindex-hom-nay
- iWinStock phái sinh 10/11: https://www.iwinstock.com/derivatives/
- Stockbiz/FIREANT giá hợp đồng VN30F1M 10/11: https://stockbiz.vn/ma-chung-khoan/VN30F1M/giao-dich
- Tài chính.com ngày 10/11: https://taichinh.com/chung-khoan
- HOSE thông cáo 10/11 có bản trên Stockbiz/CafeF **không mở trực tiếp được** trong lượt kiểm; đã tìm và ghi nhận nhưng **không coi là nguồn mở toàn văn**: https://web.stockbiz.vn/News/2026/11/10/1923624/hose-diem-tin-giao-dich-ngay-10-11-2026.aspx

**Nhật ký tìm lại số chưa xác minh và 1 NGUỒN (đã thử ≥3 trang):**
- **Ngoại KHỚP/5 phiên:** Thời báo TC 20:42 `+477,6` thuộc tổng, VNIndex.ai `+474,8` ước tính theo giá, nmquan tổng +472,0 khác phạm vi, VNDIRECT La bàn +477,6 tổng. Không dựng chuỗi KHỚP từ tổng.
- **Tự doanh:** nmquan công bố tổng, Stockbiz/FIREANT có dòng tự doanh phái sinh 09/11 nhưng chưa cập nhật 10/11, Thời báo TC bản tổng thiếu bảng tự doanh cổ phiếu cùng phương pháp; không chấm.
- **Top5:** VNIndex.ai đủ năm mã; VNDIRECT La bàn chỉ nói VIC lớn nhất; Thời báo TC ghi VIC và VHM dẫn dắt; không đủ bảng điểm 5 mã khác nguồn để gắn nhãn hai nguồn.
- **Phái sinh:** iWinStock cho hợp đồng 41I1GB000 và basis, Stockbiz/FIREANT xác nhận giá đóng 1856,3, Thời báo TC xác nhận chỉ số cơ sở VN30 1860,93. HNX thông cáo đáo hạn riêng không mở trong lượt này; nhãn **ngày đáo hạn 1 NGUỒN iWinStock**. Điểm 7 +1 chỉ theo số basis có đối chiếu và chưa ghi nhận tin bất lợi vĩ mô rõ từ các nguồn trong ngày.
- **Rổ độ rộng:** VNDIRECT 217/92/50, Thời báo TC cùng tập, VNIndex.ai 219/93/92 (rổ 404); nmquan 221/94/51, không ép cho giống nhau.

## III. Phép tính từ một chuỗi 277 phiên VNDIRECT — không nội suy

Dữ liệu `code:VNINDEX`, **277 bản ghi** từ **01/10/2025 đến 10/11/2026**, không nối dữ liệu từ nguồn khác. Ba hàng neo nguyên gốc:
- `"date":"2026-11-06","close":1725.36,"nmValue":15152336638420`
- `"date":"2026-11-09","close":1714.32,"nmValue":10152842181990`
- `"date":"2026-11-10","open":1725.64,"high":1743.07,"low":1723.81,"close":1743.07,"nmValue":13074051666960`

| Chỉ tiêu | Phép tính / kết quả | Nhãn |
|---|---|---|
| MA20 | **1.731,0265 = 1.731,03** | TỰ TÍNH |
| MA50 / MA200 | **1.765,1526 = 1.765,15** / **1.789,47985 = 1.789,48** | TỰ TÍNH |
| Dốc MA20/5 | 1.731,0265 − 1.731,5940 = **-0,5675 điểm** | TỰ TÍNH |
| TB20 KHỚP của 20 phiên trước 10/11 | **12.589,59235730 tỷ** | TỰ TÍNH |
| Khớp hiện tại/TB20 | 13.074,05166696 / 12.589,59235730 = **1,038 lần**, **chưa đủ ≥1,2** | TỰ TÍNH |
| Khớp so 09/11 | (13.074,05166696/10.152,84218199−1)*100 = **+28,77%** | TỰ TÍNH |
| Độ rộng | 217/92 = **2,359**, ≥1,5 ⇒ **+1** | TỰ TÍNH |
| Top5 kéo tăng | 17,31 / 28,75 = **60,21%** (>50%, <70%) nên chất lượng dòng tiền phiên tăng **0** (dù nhiều ngành tăng, không đáp ứng đồng thời ≤50%). | TỰ TÍNH từ 1 NGUỒN |
| Vị trí đóng | (1743,07−1723,81)/(1743,07−1723,81) = **100%** biên độ, không xả cuối ở 1/3 dưới | TỰ TÍNH |
| Phân phối mới ngày 10/11 | **Không**, VN-Index tăng 1,68% nên không thỏa phiên giảm ≥0,2% | TỰ TÍNH |
| Phân phối còn hiệu lực/25 phiên | **6 ngày**: 08/10, 09/10, 19/10, 29/10, 02/11, 06/11; 10/11 không tạo mới, không có ngày nào đủ điều kiện rời cửa sổ/gỡ theo kiểm toán. **≥6 ⇒ CHẶN CỨNG**, chỉ gỡ khi ≤5. | TỰ TÍNH |
| Nền xu hướng | 1743,07 > MA20 **1.731,03**, nhưng < MA50 **1.765,15** và MA200 **1.789,48**, MA20 giảm 0,57 điểm/5 phiên ⇒ **XẤU**, trần **KHÔNG**. | Theo Prompt |
| 7 yếu tố | Giá/MA **0**; thanh khoản **0** (1,038×TB20); độ rộng **+1** (2,359); top5 **0** (60,21%); ngoại **0** (thiếu KHỚP 5 phiên); phân phối **−1** (6); phái sinh/vĩ mô **+1** (basis −0,249%, chưa thấy tin bất lợi rõ) ⇒ **+1/7**. | Theo Prompt, điểm 7 có giới hạn |
| Chặn mềm | Cản **1.755,61** (đóng 29/10) cách **0,72%**, MA50 **1.765,15** cách 1,27%: giá chưa vượt, ≤1,5% ⇒ chặn mềm. Không có chặn dòng tiền tập trung vì top5 không >70%. | Theo Prompt |
| Chặn cứng | **6 phân phối/25** kích hoạt độc lập, chưa được gỡ. Không xả cuối, không xanh điểm đỏ mã. Ngoại KHỚP 5 phiên và mốc vô hiệu Sổ gốc: **KHÔNG KIỂM ĐƯỢC**. | Theo Prompt |
| Ba bước kết luận | B1 có chặn cứng ⇒ **KHÔNG dòng 1**; B2 nền XẤU ⇒ KHÔNG; B3 không Sổ gốc ⇒ bỏ chống đảo chiều, **KHÔNG dòng 1**. | Theo Prompt |
| R:R của chỉ số | **KHÔNG ÁP DỤNG:** không có mốc vô hiệu Sổ gốc, không tạo lệnh mua mới trong trạng thái KHÔNG. | Theo Prompt |

## IV. Mốc có xuất xứ, hành động NẾU–THÌ

- **Hỗ trợ gần**: MA20 **1.731,03** (vừa lấy lại nhưng dốc xuống); đáy 10/11 **1.723,81** VNDIRECT/VNIndex.ai; giá đóng 09/11 **1.714,32**; đáy 09/11 **1.701,90**. Không dùng các mốc của chỉ số làm điểm dừng lỗ cổ phiếu.
- **Cản gần:** đóng 29/10 **1.755,61** (đã kiểm trong 277 dòng), **MA50 1.765,15**, **MA200 1.789,48**.
- **NẾU** giá đóng giữ trên MA20 1.731,03 nhưng phân phối còn 6 **THÌ** chỉ quan sát sức bền phiên hồi, không mở vị thế mới; giữ mã đã có theo dừng lỗ riêng.
- **NẾU** giá đóng mất MA20 1.731,03, rồi thủng 1.723,81/1.714,32 và 1.701,90 cùng độ rộng xấu đi **THÌ** rà và xử lý các cổ phiếu yếu vi phạm stop riêng, không bình quân xuống.
- **NẾU** VN-Index đóng vượt 1.755,61 và MA50 1.765,15, MA20 quay dốc lên, phân phối còn ≤5, khớp ≥1,2×TB20 và độ rộng/ngoại KHỚP được xác minh **THÌ** tính lại ba bước trạng thái, không mua tự động chỉ vì thêm phiên xanh.
- **Nhóm sức giá mạnh quan sát:** bất động sản/chứng khoán/ngân hàng và cao su theo Thời báo TC; **nhóm yếu thận trọng:** dầu khí, nước & môi trường. Không có bộ giá+khớp+ngoại cùng phạm vi để gọi tiền ròng vào hay rút khỏi ngành.

## V. Bảng tự kiểm 20 mục

| # | Hạng mục | Đánh giá | Bằng chứng hoặc giới hạn |
|---|---|---|---|
| 1 | Phiên 10/11, giờ cắt | ĐẠT | VNDIRECT 15:11:08, báo 17:34/20:42 nói về 10/11 |
| 2 | Không dùng phiên tương lai | ĐẠT | 277 dòng chỉ tới 10/11 |
| 3 | Dữ liệu không lấy từ trí nhớ/snippet | ĐẠT | JSON audit và Thời báo/VNSignal/VNIndex.ai đã mở |
| 4 | Nguồn đã mở đúng phiên | ĐẠT CÓ GIỚI HẠN | HOSE sao lưu bị lỗi mở nên không coi là nguồn mở |
| 5 | Số lõi 2 nguồn, đúng đơn vị | ĐẠT | Đóng/%/khớp/độ rộng đối chiếu đúng tập |
| 6 | Nhật ký tìm số thiếu/1 nguồn | ĐẠT | Mục II ≥3 nguồn cho mỗi nhóm thiếu |
| 7 | Chuỗi 1 gốc đủ neo, công thức | ĐẠT | VNDIRECT 277 phiên, 3 dòng neo |
| 8 | Truy số toàn bài, web, Zalo | ĐẠT | Mục II–IV |
| 9 | Không sửa Sổ gốc | ĐẠT | Chưa được cung cấp |
| 10 | Đúng ngày yêu cầu | ĐẠT | 10/11/2026 |
| 11 | Chế độ đủ MA/khớp/phân phối | ĐẠT | ĐẦY ĐỦ |
| 12 | Nền xu hướng MA20/50/200 | ĐẠT | XẤU, MA20 còn dốc xuống |
| 13 | Bảy yếu tố đúng ngưỡng | ĐẠT CÓ GIỚI HẠN | +1/7, điểm phái sinh có 2 cổng xác minh giá, vĩ mô trong nguồn đã đọc |
| 14 | Chặn cứng/mềm, hiệu lực/gỡ | ĐẠT CÓ GIỚI HẠN | 6 phân phối đã tính; ngoại khớp/Sổ chưa kiểm |
| 15 | Quy đổi trạng thái 3 bước | ĐẠT | KHÔNG dòng 1 |
| 16 | Không có vùng mua mới khi KHÔNG | ĐẠT | Chỉ mốc quan sát |
| 17 | Mốc có nguồn và R:R | ĐẠT CÓ GIỚI HẠN | R:R không áp dụng vì thiếu mốc vô hiệu Sổ |
| 18 | Nhóm ngành theo sức giá có chứng cứ | ĐẠT | Không nói tiền ròng ngành |
| 19 | Bài Zalo/web/bố cục | CHỜ HẬU KIỂM | Chỉ ĐẠT sau GitHub Pages byte verification |
| 20 | Sổ bổ sung chỉ dòng mới | ĐẠT | Mục VI |

## VI. Phần Sổ bổ sung, chỉ dành lưu nội bộ — KHÔNG đăng web/Zalo

```text
=== SỔ VNINDEX — PHIÊN 10/11/2026 ===
PHẦN A — CHỈ DÒNG MỚI
10/11/2026;1743,07;1743,07;1723,81;+1,67704979233749;13074,05166696;217;92;50;;1860,93;1856,3;;Không;ĐÃ ĐỐI CHIẾU: đóng/khớp/độ rộng/VN30; 1 NGUỒN: ngày đáo hạn; CHƯA XÁC MINH: ngoại KHỚP HOSE 5 phiên và tự doanh

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái: KHÔNG, dòng 1 (phòng thủ); điểm +1/7
Chế độ: ĐẦY ĐỦ; nền XẤU do giá dưới MA50/MA200 và MA20 giảm
Mốc vô hiệu đang hiệu lực trong Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ quan sát: MA20 1731,03; thấp 10/11 1723,81; đóng 09/11 1714,32; đáy 09/11 1701,90
Kháng cự: đóng 29/10 1755,61; MA50 1765,15; MA200 1789,48
Phân phối còn hiệu lực: 08/10;09/10;19/10;29/10;02/11;06/11
Chặn cứng: 6 phân phối/25; chỉ gỡ khi ≤5
Ngoại KHỚP 5 phiên: CHƯA XÁC MINH
VN30F1M: 1856,3; basis -4,63 điểm (−0,249% VN30); đáo hạn 19/11 theo iWinStock

PHẦN C — ĐÍNH CHÍNH
Không tự sửa Sổ gốc người dùng chưa được cung cấp.
```

## VII. Kiểm tra vận hành EOD và website

- Lúc nhận lệnh `src/data/research-data.js` vẫn ở **09/11/2026** và danh sách workflow chưa xuất hiện lượt EOD ngày 10/11 sau đóng cửa.
- Đã kích hoạt **workflow EOD xác minh sẵn có** bằng sửa đúng **một dòng chú thích đầu** `.github/workflows/eod-daily.yml`, không đổi lịch cron, script, cổng xác minh giá, danh mục, stop hay bố cục.
- EOD 10/11 đã khóa `meta.updated=2026-11-10` 133/133 mã: **133/133 giá đóng khớp CafeF trực tiếp**, 0 ngoại lệ cần KBS; khối lượng khớp trực tiếp 110/133, số chênh khối lượng đã ghi trong meta, không che khuất. Link workflow https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42832657130
- Kiểm toán lịch sử VNINDEX read-only https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42832705255 thành công: 277 dòng, không ghép nguồn; chỉ đổi 2 mốc ngày workflow chứng cứ để chạy đúng 10/11.
- **Chưa xác định nguyên nhân việc cron EOD không có run sau giờ giao dịch 10/11 trong danh sách kiểm tra** trước khi phục hồi; cần theo dõi lịch kế tiếp, không tự sửa cron. Cơ chế tự viết bài v3.3.1 hàng ngày cũng chưa có tác vụ độc lập được chứng minh. Không tuyên bố đã tự động hoá triệt để.
