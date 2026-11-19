# KIỂM TOÁN NGUỒN VÀ QUYẾT ĐỊNH VN-INDEX — PHIÊN 18/11/2026 — Prompt v3.3.1

**Ngày phiên:** 18/11/2026 (thứ Tư, giao dịch HOSE). **Mốc cắt:** kết thúc phiên ngày 18/11 giờ Việt Nam. **Tác nghiệp bổ sung:** 19/11/2026 nhưng chỉ lấy dữ liệu mô tả chính phiên 18/11 và các phiên trước, **không lấy giá/nhóm/ngành/khối ngoại của phiên 19/11**. **Sổ dữ liệu gốc do người dùng dán:** không có; không tự suy chặn đã gỡ từ báo cáo web cũ.

**Ba lượt đọc trực tiếp tệp đính kèm:** `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` thực có trong /mnt/data, dung lượng 54.099 bytes, SHA256 `beebdecf878237a57edcda89cd34b5d50a78d81c232859883e2f94c527070184`. (1) Mục 0–I: lõi, nguồn, nhãn, phạm vi KHỚP, nhật ký. (2) II–VI: MA, thanh khoản, phân phối, bảy yếu tố, veto, ba bước và mốc hành động. (3) VII–XII: các phần báo cáo, Zalo 250–400 chữ, bảng kiểm, chỉ bổ sung Sổ. Đối chiếu phiên bản cùng tên v3.3.1 trong repository `docs/prompt-nhan-dinh-vnindex-v3.md` SHA GitHub `d3776d82a27f643bdc40b13729f564003417e2d0`, bản repo có phụ lục vận hành. Không để phụ lục ghi đè quy tắc gốc.

## I. Nhật ký nguồn thực đọc và phạm vi

| Chỉ tiêu | Giá trị | Nguồn 1, đoạn trích ngắn | Nguồn 2 / sai khác | Nhãn |
|---|---|---|---|---|
| VN-Index đóng/đổi | **1.703,01 điểm, −23,71, −1,37%** | HOSE điểm tin 18/11: `VNINDEX 1,703.01 -23.71 -1.37`, https://web.stockbiz.vn/News/2026/11/18/1925654/hose-diem-tin-giao-dich-ngay-18-11-2026.aspx | VNIndex.ai lịch sử ngày: `1.703,01 -23,71 (-1,37%)`, https://vnindex.ai/vn-index/phien/18-11-2026 ; VNDIRECT EOD đã khóa giống | **ĐÃ ĐỐI CHIẾU** |
| **KHỚP HOSE TOÀN SÀN**, không gồm thỏa thuận | **11.247 tỷ**, **597.577.194 chứng khoán** | Điểm tin HOSE, dòng `Khớp lệnh 597,577,194 11,247`, link HOSE trên | VTV ghi `hơn 11.150 tỷ`, https://vtv.vn/vn-index-mat-hon-23-diem-10026111816250609.htm; rổ VNINDEX theo VNSignal **11.156,59021159 tỷ** `18/11 ... 11.156.590.211.590`, https://vnsignal.vn/chi-so/vnindex/lich-su-gia ; rổ/bao phủ khác, không ép trùng. Nhân Dân ghi hơn 11.156 tỷ. | **ĐÃ ĐỐI CHIẾU ĐẾN MỨC LÀM TRÒN; 1 NGUỒN CHI TIẾT** toàn HOSE |
| Thỏa thuận / TỔNG toàn HOSE | **6.297 tỷ / 17.545 tỷ** | HOSE `Thỏa thuận ... 6,297`, `Tổng ... 17,545` | VNIndex.ai ghi **17,45 nghìn tỷ** thuộc rổ chỉ số; không dùng tổng thay khớp | **ĐÃ XÁC MINH HOSE**, khác phạm vi rổ |
| Độ rộng cổ phiếu HOSE theo VNDIRECT | **61 tăng / 267 giảm / 49 tham chiếu** | `src/data/research-data.js` `marketSession.date=2026-11-18`, `breadth.advance=61,decline=267,unchanged=49` đã khóa qua EOD VNDIRECT Finfo: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-18&size=500 | VISC 18/11 `267/61` mã giảm/tăng, https://visc.com.vn/vi/news/bao-cao-phan-tich-3155/ban-tin-thi-truong-ngay-18112026-1580.spp; VNIndex.ai đếm rổ **404 mã 64/267/73**, không dùng lẫn | **ĐÃ ĐỐI CHIẾU** tăng/giảm; đứng giá 1 NGUỒN Finfo |
| VN30 | **1.806,54; −30,59; −1,67%** | HOSE `VN30 1,806.54 -30.59 -1.67` | Finfo EOD `close=1806.54`, đúng ngày | **ĐÃ ĐỐI CHIẾU** |
| VNMIDCAP | **1.818,62; −0,94%** | HOSE `VNMIDCAP 1,818.62 -17.20 -0.94` | không có nguồn thứ hai cùng phạm vi số chính xác | **1 NGUỒN** |
| VNSMALLCAP | **1.184,80; −1,20%** | HOSE `VNSMALLCAP 1,184.80 -14.42 -1.20` | không có nguồn thứ hai cùng phạm vi số chính xác | **1 NGUỒN** |
| HNX-Index | **242,73; −2,36%** | VISC `HNX-Index -2,36% còn 242,73` | Finfo EOD website `close=242.73` | **ĐÃ ĐỐI CHIẾU** |
| Giá mở/cao 18/11 | **1.723,04 / 1.723,04** | VNIndex.ai lịch sử phiên `Mở cửa 1.723,04`, `Cao nhất 1.723,04` | VNSignal ngày 18 `1.723,04 | 1.723,04` | **ĐÃ ĐỐI CHIẾU** |
| Thấp 18/11 | — | VNIndex.ai EOD **1.701,04**; VNSignal bảng **1.675,08**, Cophieu68 báo **1.676,89** | Chênh lớn không phân xử được theo ngày; **KHÔNG** đưa giá thấp chính xác vào nhận định hoặc điểm stop | **CHƯA XÁC MINH** |
| Top 5 giảm điểm theo cùng một bảng | **VIC −4,80; VCB −2,24; VHM −1,69; VPB −1,24; LPB −1,05** | VNIndex.ai chi tiết phiên 18/11 bảng `Kéo giảm` nêu từng số | VTV nêu VIC/VCB/VHM/VPB kéo xuống; Nhân Dân nêu top 10 cùng chiều nhưng khác phương pháp đóng góp, không trộn | **1 NGUỒN** từng điểm |
| Ngành | HOSE VNIT **−3,01%**, VNFIN **−1,75%**, VNENE **−2,42%**, VNREAL **−1,11%**, VNMAT **−2,42%** | HOSE điểm tin bảng ngành 18/11 | Nhân Dân ghi nhóm phần mềm −3,14%, ngân hàng −1,83%, năng lượng −1,79% nhưng theo hệ phân loại khác; không trộn % | **1 NGUỒN** giá trị từng chỉ số ngành HOSE |
| Ngoại ròng HOSE TỔNG có thỏa thuận | **khoảng −1.115 tỷ** | HOSE bảng giao dịch nước ngoài `1,131 ... 2,245 ... -1,115` | Nhân Dân tổng ba sàn khoảng −1.151 tỷ, phạm vi khác; VISC ghi −1.153 tỷ khác phạm vi | **1 NGUỒN** tổng HOSE chính thức, không dùng ngoại KHỚP |
| Ngoại ròng **KHỚP HOSE 5 phiên** | — | HOSE chỉ có tổng từng phiên trong điểm tin, không có chuỗi 5 phiên cùng phép khớp | VNIndex.ai là ròng ước tính theo giá; Stockbiz/nhân dân là tổng | **CHƯA XÁC MINH** |
| VN30F1M basis và cờ ETF/HNX | — | Chưa có bảng hợp đồng phái sinh HOSE/HNX đúng phiên và lịch đủ gốc được đối chiếu | 19/11 nhiều nguồn nói đáo hạn, nhưng chưa đủ lịch HNX chính thức cho các cờ trong 25 phiên | **CHƯA XÁC MINH** |
| Mốc đóng 09/11 và 03/11 | **1.714,32 / 1.699,62** | VNSignal `09/11 ... 1.714,32`, `03/11 ... 1.699,62` | VNIndex.ai 60 giá 18/11 cùng số | **ĐÃ ĐỐI CHIẾU** |

**Phạm vi thanh khoản:** số HOSE **11.247 tỷ** là khớp toàn sàn; VNSignal **11.156,59 tỷ** là khớp rổ cổ phiếu VNINDEX; VNIndex.ai **17,45 nghìn tỷ** là **tổng giao dịch có thỏa thuận**. Không cộng/trừ tùy tiện 90 tỷ chênh phạm vi và không dùng TỔNG làm khớp.

## II. Gốc chuỗi, phép tính có công cụ

**Giá gốc (a):** VNIndex.ai bảng `VN-Index 60 phiên gần nhất`, đã thực đọc các hàng lịch sử **18/11/2026 trở về 25/08/2026** (59 hàng trước ngày 19/11); loại hoàn toàn hàng 19/11. Giá neo 18/11 `1.703,01`, 17/11 `1.726,72`. Hai giá khớp lõi HOSE/Finfo. Mỗi phép MA chỉ dùng bảng giá đóng này; tuyệt đối không dùng cột **Giá trị GD tổng** để tính thanh khoản KHỚP.

- **MA20 = 1.738,706 ⇒ 1.738,71**, trung bình 20 giá đóng **18/11→23/10**, TỰ TÍNH.
- **MA50 = 1.752,9742 ⇒ 1.752,97**, trung bình 50 giá đóng **18/11→10/09**, TỰ TÍNH.
- MA20 của năm phiên trước (11/11) **1.733,128**; dốc năm phiên **1.738,706 − 1.733,128 = +5,578 ⇒ +5,58 điểm**, TỰ TÍNH.
- Độ rộng tỷ lệ tăng/giảm cùng VNDIRECT = **61 / 267 = 0,22846 ⇒ 0,228**, TỰ TÍNH, yếu tố −1.
- Top 5 cùng bảng VNIndex.ai = 4,80+2,24+1,69+1,24+1,05 = **11,02 điểm**, chia tổng giảm 23,71 ⇒ **46,48%** (TỰ TÍNH). Phiên giảm với top5 ≤50% ⇒ yếu tố chất lượng **−1**, cho thấy bán dàn trải. Điểm từng mã chỉ 1 NGUỒN.
- Giá đóng 1.703,01 dưới MA20 1.738,71 và MA50 1.752,97 ⇒ yếu tố giá/MA **−1**. MA20 còn tăng +5,58 trong 5 phiên: không gọi xu hướng nền XẤU theo định nghĩa cứng khi MA200 cũng thiếu.
- **TB20 KHỚP HOSE 20 phiên trước:** CHƯA XÁC MINH, thiếu một nguồn có ít nhất 20 giá trị khớp toàn HOSE đúng phạm vi. HOSE điểm tin ngày 18 chỉ cho hiện tại, VNSignal lịch sử hiển thị 20 hàng bắt đầu 19/11 nên không đủ 21 dòng đến 18/11; nmquan trang 30 hàng mở trực tiếp bị timeout; VNIndex.ai bảng 60 là TỔNG. **Không tính bội số.**
- **Phiên phân phối/25:** CHƯA XÁC MINH vì chưa có 26 ngày khớp cùng một gốc toàn HOSE và lịch sự kiện/ETF đủ. Có thể nhận xét riêng giao dịch khớp rổ VNINDEX 18/11 (11.156,59) cao hơn 17/11 (9.596,85) theo VNSignal, nhưng **không** dùng cặp này để kết luận tổng phiên phân phối/25 hoặc gán chặn cứng.
- MA200: không đủ 200 giá từ một nguồn đã đọc, CHƯA XÁC MINH, không quyết định chế độ.

## III. Quy tắc và ba bước trạng thái

**Cổng lõi: ĐẠT có giới hạn:** đóng/% đa nguồn, khớp toàn HOSE 11.247 tỷ HOSE với báo chí làm tròn và phạm vi khác, độ rộng đúng phạm vi VNDIRECT 61/267/49 (cột đứng giá chỉ Finfo). Số chính xác khớp 1 NGUỒN ⇒ **không được CÓ**.

**Chế độ RÚT GỌN — thiếu chuỗi dữ liệu: TB20 khớp lệnh HOSE, số phiên phân phối/25. Xu hướng nền chưa đánh giá được; trạng thái tối đa CHỜ. Đây là giới hạn dữ liệu, không phải tín hiệu thị trường xấu.**

**7 yếu tố** theo đúng mục II.C: (1) Giá/MA **−1**; (2) Thanh khoản **0**, thiếu TB20 không tính bội; (3) Độ rộng **−1** (0,228≤0,67); (4) Chất lượng dòng tiền **−1** (top5 giảm 46,48%≤50%, một bảng nguồn); (5) Ngoại KHỚP **0**, thiếu chuỗi 5 phiên; (6) Phân phối **0**, thiếu 26 khớp và cờ; (7) Phái sinh/vĩ mô **0**, chưa khóa; **TỔNG −3/7**.

**Chặn mềm:** cản gần 1.714,32 (đóng 09/11) cách điểm đóng 18/11 0,66%, chưa vượt ⇒ chặn mềm kháng cự có xuất xứ; chỉ số ngày 18/11 ĐỎ nên không gắn cờ `xanh điểm/đỏ mã`. Không tự kích hoạt chặn thanh khoản khi TB20 thiếu.

**Chặn cứng:** thấp phiên 18/11 giữa nguồn không thống nhất và TB20 KHỚP thiếu ⇒ xả cuối phiên **KHÔNG KIỂM ĐƯỢC**; ≥6 phân phối trong 25 phiên không kiểm được; ngoại KHỚP 5 phiên và mốc vô hiệu từ Sổ gốc **KHÔNG KIỂM ĐƯỢC**. Thiếu không coi là đã gỡ hay mặc nhiên kích hoạt.

Ba bước RÚT GỌN: **B1 KHÔNG dòng R2** vì −3≤−2 ⇒ **B2 nền CHƯA ĐÁNH GIÁ trần CHỜ, vẫn KHÔNG** ⇒ **B3 bỏ chống đảo chiều do không có Sổ gốc** ⇒ **CHỐT KHÔNG — dòng R2**. Căn cứ đến từ giá, độ rộng và bán lan rộng đã kiểm, không vì dữ liệu thiếu.

**Khả năng giao dịch:** không mở mua mới, không tăng margin, giữ phần cổ phiếu còn đạt kỷ luật của từng mã, ưu tiên cắt giảm phần yếu theo stop riêng; tỷ trọng cổ phiếu định hướng **≤20%** theo bảng R2, mang tính khung minh họa, không phải bắt buộc một tài khoản. Không bán tháo đồng loạt. **Vùng mua mới không áp dụng; R:R chỉ số không áp dụng** vì không có mốc vô hiệu đang hiệu lực từ Sổ gốc và trạng thái KHÔNG.

## IV. Mốc giá và kịch bản có điều kiện

- **Hỗ trợ sát:** vùng **1.699,62–1.701,90**: đóng cửa 03/11 và đáy 09/11 từ bảng lịch sử; không gọi là mốc vô hiệu trong Sổ.
- **Hỗ trợ dưới:** **1.689,84**, giá đóng cửa 19/10; không tự khẳng định hỗ trợ mạnh khi thiếu xác nhận.
- **Kháng cự gần:** **1.714,32**, đóng 09/11 — vùng giá đã bị mất; **1.723,04**, đỉnh 18/11 (VNIndex.ai/VNSignal).
- **Kháng cự xu hướng:** MA20 **1.738,71** và MA50 **1.752,97** (tự tính).
- **Giá thấp chính xác 18/11 CHƯA XÁC MINH:** không dùng làm mốc trong phần công khai.
- Kịch bản TỐT — THẤP: NẾU giá phục hồi lấy lại 1.714,32, 1.723,04 rồi MA20 1.738,71, cùng KHỚP/độ rộng thực sự xác nhận và không có chặn chưa kiểm, THÌ tính lại bảy yếu tố; **chưa tự mua**.
- Kịch bản CƠ SỞ — TRUNG BÌNH: NẾU quanh 1.699,62–1.714,32 chưa xuất hiện cầu lan tỏa, THÌ không mở mua mới, chỉ quản trị vị thế sẵn có.
- Kịch bản XẤU — CAO (định tính từ sức giá và điểm −3): NẾU đóng dưới 1.699,62, sau đó kiểm tra 1.689,84, THÌ rà các cổ phiếu yếu, xử lý vị thế vi phạm stop riêng, không bình quân xuống.
- Không gắn xác suất %, không gọi vùng mua khi trạng thái KHÔNG.

**Đọc nhóm ngành thực chứng:** HOSE VNIT −3,01%, VNFIN −1,75%, VNENE −2,42%, VNREAL −1,11%, VNMAT −2,42%; VN30 −1,67%, VNMID −0,94%, VNSML −1,20%. KDH, SAB, HVN, MSB có sức giá/đóng góp tích cực riêng theo VNIndex.ai, không đủ điều kiện khẳng định dòng tiền ròng vào cả ngành. Không gọi rút vốn ròng theo ngành vì thiếu cặp số khớp/ngoại đồng nhất.

## V. Nhật ký tìm số 1 NGUỒN/CHƯA XÁC MINH

| Trường | Nguồn đã thử và giới hạn |
|---|---|
| KHỚP toàn HOSE 11.247 tỷ | HOSE toàn sàn số chi tiết; VTV hơn 11.150 làm tròn, VISC 11.157 theo rổ VNINDEX, VNSignal 11.156,59 rổ chỉ số; không trộn |
| Độ rộng 61/267/49 | Finfo 61/267/49; VISC 61/267; VNIndex.ai 64/267/73 với 404 mã; Nhân Dân 64/272/49 theo hệ đếm khác |
| VNMID/VNSML | HOSE có số; VNIndex.ai phiên 18 không công bố chỉ số; VISC chỉ nhắc VN30/HNX; không nâng nhãn |
| TB20 KHỚP, phân phối/25 | HOSE EOD riêng 18; VNSignal 20 hàng (có ngày 19); nmquan 30 hàng mở timeout; VNIndex.ai 60 hàng tổng có thỏa thuận; chưa đủ cùng phạm vi |
| Giá thấp 18/11 | VNIndex.ai 1.701,04; VNSignal 1.675,08; Cophieu68 1.676,89; không có nguồn đồng thuận, không dùng |
| Top5 điểm trụ | VNIndex.ai cung cấp từng điểm; VTV và Nhân Dân chỉ chứng minh nhóm kéo giảm, không cùng thuật toán |
| Ngoại KHỚP 5 phiên | HOSE điểm tin chỉ tổng; Nhân Dân ba sàn; VNIndex.ai ước tính theo giá; không có 5 phiên KHỚP cùng gốc |
| Phái sinh/lịch ETF | Báo cáo VISC không khóa basis; trang HOSE điểm tin không chứa bảng F1M; thiếu lịch HNX + thông báo quỹ gốc, không gắn cờ tùy tiện |
| Sổ gốc | Người dùng chưa cung cấp Sổ gốc; bản web 17/11 là nhận định chứ không thay Sổ |

## VI. Bảng tự kiểm 20 mục

| # | Trạng thái | Ghi chú |
|---|---|---|
| 1 | ĐẠT | Ngày 18/11 có phiên HOSE, mốc cắt ngày 18 |
| 2 | ĐẠT | Không dùng số phiên 19 trong nhận định |
| 3 | ĐẠT | Số lõi từ bài nguồn đã mở, không dựa snippet đơn độc |
| 4 | ĐẠT | Nguồn HOSE/VNIndex.ai/VISC/VNSignal đã mở |
| 5 | ĐẠT CÓ GIỚI HẠN | Khớp chi tiết 1 NGUỒN HOSE, độ rộng đứng giá 1 NGUỒN; không ép phạm vi |
| 6 | ĐẠT | Nhật ký tìm >3 trang cho thiếu số |
| 7 | ĐẠT CÓ GIỚI HẠN | MA từ 59 giá đủ cho MA50; không tính TB20 khớp/ phân phối |
| 8 | ĐẠT | Số công khai có nguồn hoặc phép tính |
| 9 | ĐẠT | Không sao hoặc sửa Sổ cũ |
| 10 | ĐẠT | Ngày phân tích theo yêu cầu mới nhất |
| 11 | ĐẠT | Chế độ RÚT GỌN |
| 12 | ĐẠT | Nền chưa đánh giá, MA200 thiếu |
| 13 | ĐẠT | Tính 7 yếu tố -3/7; yếu tố thiếu =0 |
| 14 | ĐẠT CÓ GIỚI HẠN | Chặn từ Sổ/khớp/ngoại KHÔNG KIỂM ĐƯỢC |
| 15 | ĐẠT | Thô KHÔNG R2 → trần CHỜ vẫn KHÔNG → bỏ chống đảo chiều |
| 16 | ĐẠT | Không có vùng mua mới |
| 17 | ĐẠT CÓ GIỚI HẠN | Mốc kỹ thuật có xuất xứ; R:R không áp dụng vì Sổ thiếu |
| 18 | ĐẠT | Chỉ nói sức giá nhóm ngành, không suy tiền ròng |
| 19 | ĐẠT CÓ GIỚI HẠN | Web/Zalo cùng số; Zalo không dùng số chưa xác minh; giữ nguyên layout |
| 20 | KHÔNG ĐẠT HOÀN TOÀN | Không có Sổ gốc, chỉ bổ sung dòng 18 và trạng thái có giới hạn |

## VII. Sổ tự lưu — chỉ bổ sung, không chép lịch sử

```
=== SỔ DỮ LIỆU VNINDEX — đến phiên 18/11/2026 ===
PHẦN A — DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng KHỚP HOSE;VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
18/11/2026;1703,01;1723,04;;-1,37;11247;61;267;49;;1806,54;;;;ĐÃ ĐỐI CHIẾU: đóng/%, cao, VN30, tăng/giảm; 1 NGUỒN: khớp toàn HOSE chính xác và đứng giá; CHƯA XÁC MINH: thấp, ngoại khớp, F1M, phân phối
PHẦN B — TRẠNG THÁI
Trạng thái: KHÔNG (R2, −3/7)
Chế độ: RÚT GỌN, thiếu TB20 KHỚP/phiên phân phối trong 25 ngày
Nền: CHƯA ĐÁNH GIÁ, MA20 1738,71, MA50 1752,97, dốc MA20/5 +5,58; MA200 CHƯA XÁC MINH
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Kháng cự gần: 1714,32, 1723,04; cản xu hướng 1738,71
Hỗ trợ tham khảo: 1699,62–1701,90, sau đó 1689,84 (đều là mốc lịch sử, không tự đổi Sổ gốc)
Chặn cứng mang sang: KHÔNG KIỂM ĐƯỢC
Phiên phân phối/25: KHÔNG KIỂM ĐƯỢC
Ngoại KHỚP 5 phiên: KHÔNG KIỂM ĐƯỢC
PHẦN C — ĐÍNH CHÍNH
Chưa có Sổ gốc để đính chính; không tự sửa thầm dữ liệu cũ.
```

**Giới hạn xuất bản:** chỉ thêm module dữ liệu nhận định 18/11 và một dòng import sau 17/11; không sửa HTML, CSS, cấu trúc menu, vị thế, vùng mua/target/stop của cổ phiếu. Sổ và nhật ký chỉ trong docs, không đưa lên trang nhận định công khai.
