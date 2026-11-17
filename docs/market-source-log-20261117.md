# KIỂM TOÁN NGUỒN & NHẬN ĐỊNH VN-INDEX — PHIÊN 17/11/2026 — PROMPT v3.3.1

**Ngày phân tích:** Thứ Ba 17/11/2026. **Giờ cắt:** kết thúc phiên 17/11 giờ Việt Nam; lượt đối chiếu bổ sung sau giờ đóng, dùng dữ liệu của CHÍNH phiên này, không dùng ngày giao dịch tương lai. **Sổ dữ liệu tự lưu người dùng dán:** KHÔNG CÓ. Không thay Sổ gốc bằng bản nhận định ngày 16/11 hoặc hồ sơ kiểm toán.

**Prompt đính kèm đã được đọc trực tiếp đủ ba lượt:** `/mnt/data/Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` (54.099 byte, 41.504 ký tự, SHA-256 `beebdecf878237a57edcda89cd34b5d50a78d81c232859883e2f94c527070184`). Lượt 1: đọc mục 0–I, cổng dữ liệu và phạm vi khớp lệnh; lượt 2: II–VI, 7 yếu tố, nền, phân phối, veto, ba bước; lượt 3: VII–XII, khuôn website, văn phong Zalo, tự kiểm 20 mục, Sổ và bảo vệ bố cục. Đối chiếu tài liệu điều khiển cùng phiên bản trên website `docs/prompt-nhan-dinh-vnindex-v3.md` (SHA GitHub `d3776d82a27f643bdc40b13729f564003417e2d0`); tài liệu kho có phần phụ lục kỹ thuật dài hơn, không sử dụng để thay quy tắc của tệp đính kèm.

## I. Cổng số liệu lõi, nguyên văn và phạm vi

| Ô số liệu | Giá trị (đơn vị/phạm vi) | Nguồn 1 + trích ngắn thực mở | Nguồn 2 + trích ngắn thực mở | Nhãn |
|---|---|---|---|---|
| VN-Index đóng/đổi | **1.726,72 điểm; −10,17; −0,59%** | VNIndex.ai EOD 17/11 lúc 15:00: `1.726,72 điểm-10,17 (-0,59%)`, https://vnindex.ai/vnindex-hom-nay | VNSignal lịch sử `17/11/2026 ... 1.726,72 ... -0.59%`, https://vnsignal.vn/chi-so/vnindex/lich-su-gia ; Stockbiz cùng 1.726,72 | **ĐÃ ĐỐI CHIẾU** |
| **KHỚP LỆNH HOSE** chính xác, không thỏa thuận, toàn HOSE | **9.607,97 tỷ đồng** | Vietnam.vn đăng lại **Thời báo Ngân hàng** ngày 17/11: `giao dịch khớp lệnh đạt hơn 9.607,97 tỷ đồng`; https://www.vietnam.vn/vn-index-mat-moc-1-730-diem-dong-tien-tiep-tuc-dung-ngoai | VNSignal 17/11 ghi `9.596.847.153.780` đồng (~9.596,85 tỷ) là **giá trị rổ chỉ số VNINDEX**, không bao gồm toàn bộ chứng khoán giao dịch HOSE; không ép khác phạm vi thành 2 nguồn cùng số. Tin nhanh Chứng khoán báo tổng 14.961,5 tỷ và thỏa thuận 5.362 tỷ, khác cách tổng hợp, không là số KHỚP trực tiếp. | **1 NGUỒN** cho số chính xác toàn HOSE |
| Độ rộng HOSE theo tập VNDIRECT, mã cổ phiếu | **107 tăng / 199 giảm / 62 đứng giá** | Dữ liệu VNDIRECT Finfo khóa EOD 17/11 `marketSession.breadth` 107/199/62, https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/src/data/research-data.js | Tài chính.com EOD 17/11: `8 sàn199 giảm62 đứng107 tăng3 trần`, https://taichinh.com/chung-khoan ; Thời báo Tài chính 17:23 cũng nêu 199 giảm/62 tham chiếu/107 tăng | **ĐÃ ĐỐI CHIẾU**, cùng cách đếm |
| Độ rộng tập khác | VNIndex.ai **110 tăng/202 giảm/92 đứng, 404 mã** | VNIndex.ai EOD `404 mã` `110` `202` `92`, https://vnindex.ai/vnindex-hom-nay | Tin nhanh Chứng khoán đếm **110 tăng/207 giảm** toàn HOSE theo phạm vi khác; không trộn với VNDIRECT | 1 NGUỒN cho phạm vi 404 mã; chỉ minh họa chênh phạm vi |
| Giá mở/cao phiên 17/11 | **1.733,58 / 1.735,04** | VNIndex.ai EOD `Mở cửa 1.733,58` / `Cao nhất 1.735,04` | VNSignal lịch sử 17/11 `1.733,58` / `1.735,04` | **ĐÃ ĐỐI CHIẾU** |
| Thấp phiên 17/11 | **CHƯA XÁC MINH** (không công bố một giá tuyệt đối) | VNIndex.ai EOD **1.717,16** | VNSignal bảng lịch sử **1.711,37**, lệch thật; Thời báo Ngân hàng mô tả `vùng 1.717`; không nâng nhãn số thấp, không gán stop | **CHƯA XÁC MINH** |
| VN30 | **1.837,13; −0,39%** | Stockbiz EOD 17/11 `VN30 1.837,13▼7,12 (−0,39%)`, https://stockbiz.vn/thi-truong | Finfo trong research-data.js `close:1837.13`, `changePct:-0.386...` | **ĐÃ ĐỐI CHIẾU** |
| HNX | **248,60; −2,48%** | Stockbiz `HNX-Index 248,60▼6,31 (−2,48%)` | Finfo nghiên cứu ngày 17/11 `close:248.6` | **ĐÃ ĐỐI CHIẾU** |
| Tổng giao dịch HOSE, có thỏa thuận | Thời báo NH **khoảng 14.638,59 tỷ**, thỏa thuận **khoảng 5.030,63 tỷ** | Thời báo NH qua Vietnam.vn `14.638,59 tỷ đồng`, `5.030,63 tỷ đồng`; URL phía trên | Tin nhanh Chứng khoán 15:29 `14.961,5 tỷ đồng` `5.362 tỷ đồng`, khác phạm vi/thời điểm; VNIndex.ai ghi `14,96 nghìn tỷ` tổng | **1 NGUỒN** số chi tiết; không dùng tổng làm KHỚP |
| Giao dịch ròng nước ngoài HOSE TỔNG, có thỏa thuận | Thời báo NH khoảng **−420,8 tỷ**, không phải KHỚP | Vietnam.vn: `bán ròng khoảng 420,8 tỷ đồng` | Thời báo Tài chính 17:23 `-360 tỷ đồng`, khác phạm vi/cách chốt; không tự đồng nhất | **1 NGUỒN** từng phương pháp, không chấm ngoại KHỚP |
| Ngoại **KHỚP HOSE** chuỗi năm phiên | — | Stockbiz chỉ tổng ròng; VNIndex.ai ước tính theo giá; Thời báo Ngân hàng tổng có thỏa thuận | Không đủ chuỗi đúng phạm vi | **CHƯA XÁC MINH** |
| Top5 mã kéo giảm, cùng một bảng VNIndex.ai | VCB −1,89; GAS −1,34; BSR −1,24; VHM −1,19; BID −1,04 (điểm) | VNIndex.ai mục `Ghì chỉ số giảm`, https://vnindex.ai/vnindex-hom-nay | Thời báo NH và Thời báo Tài chính xác nhận VCB/GAS/BID cùng chiều nhưng không có bảng đóng góp điểm cùng phép tính | **1 NGUỒN** cho điểm cụ thể |
| Ngành sức giá | Ngân hàng, dầu khí yếu; nhóm điện, KDH, POW, DBC có điểm sáng riêng | Thời báo Tài chính 17:23 ghi `27/35 nhóm ngành đóng cửa giảm điểm`, ngân hàng/dầu khí giảm; https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-17-11-ap-luc-ban-gia-tang-vn-index-giam-diem-tro-lai-207104.html | Thời báo Ngân hàng ghi POW +3,11%, KDH +3,64%, PVT −5,26%; cùng chủ đề nhưng không khẳng định tiền vào ròng toàn ngành | ĐÃ ĐỐI CHIẾU về chiều diễn biến |
| Hỗ trợ dưới chỉ số | **1.701,90** — thấp phiên 09/11 | VNSignal lịch sử `9/11/2026 ... 1.701,9`, https://vnsignal.vn/chi-so/vnindex/lich-su-gia | Dữ liệu hồ sơ thị trường 09/11 trong các bản kiểm toán cũ, có nguồn lịch sử same; đây là mốc hỗ trợ kỹ thuật, **không** tự ghi thành mốc vô hiệu từ Sổ | 1 NGUỒN truy xuất trực tiếp hiện tại |
| Cờ ETF/đáo hạn và basis 17/11 | — | Tin nhanh Chứng khoán ngày 17/11 cho hợp đồng 41I1GB000 1.837,3; Thời báo Tài chính không ghi basis | Chưa có lịch HNX chính thức đầy đủ và chuỗi 3 phiên; không chấm điểm phái sinh | **CHƯA XÁC MINH** |

**Khác phạm vi không được lấp khoảng trống:** con số **9.607,97** là toàn HOSE theo Thời báo Ngân hàng; số VNSignal **9.596,84715378** tỷ ghi trên **bảng VNINDEX** — khác 11,12 tỷ. Tin nhanh Chứng khoán còn có tổng giao dịch khác ~323 tỷ. Không trộn các trường trên để kết luận khớp 2 nguồn, không tạo nguồn đối chiếu giả.

## II. Chuỗi lịch sử đủ cho MA, thiếu cho thanh khoản

**Gốc giá (a):** VNIndex.ai `VN-Index 60 phiên gần nhất`; thực đọc **60 dòng**, từ **21/08/2026 tới 17/11/2026**, khóa ngày mới nhất `17/11/2026 | 1.726,72` và dòng thứ hai `16/11/2026 | 1.736,89`. Giá mới nhất khớp lõi đã đối chiếu. Chuỗi dùng **giá đóng**, không dùng cột giá trị giao dịch của VNIndex.ai vì là **tổng gồm thỏa thuận**.

TÍNH BẰNG CÔNG CỤ PYTHON (giá mới nhất trước, gồm ngày 17/11):
- MA20 = trung bình giá 20 phiên 21/10–17/11 = **1.740,489 -> 1.740,49** (TỰ TÍNH).
- MA50 = trung bình giá 50 phiên 09/09–17/11 = **1.755,4564 -> 1.755,46** (TỰ TÍNH).
- MA20 5 phiên trước = trung bình 20 giá từ 14/10–10/11 = **1.731,0265**; dốc MA20 = 1.740,489 - 1.731,0265 = **+9,4625 -> +9,46 điểm** (TỰ TÍNH).
- MA200 không đủ 200 dòng từ một nguồn đã đọc ⇒ CHƯA XÁC MINH; không quyết định chế độ.
- Độ rộng ratio = **107/199 = 0,537688 -> 0,538** ⇒ −1 (TỰ TÍNH).
- Top 5 mã kéo giảm theo một bảng VNIndex.ai = 1,89+1,34+1,24+1,19+1,04 = **6,70 điểm**; tỷ lệ = 6,70/10,17 = **65,88%** (TỰ TÍNH). Phiên giảm không đạt ngưỡng bán dàn trải ≤50% ⇒ điểm chất lượng 0, không phải +1.
- Chỉ số **1.726,72** nằm dưới cả MA20 1.740,49 và MA50 1.755,46 ⇒ điểm giá/MA = −1.
- Giá trị khớp HOSE **9.607,97** có một nguồn đúng phạm vi và đúng phiên, **NHƯNG** chưa có chuỗi KHỚP **cùng một gốc** đủ 21 và 26 phiên. VNSignal hiển thị bảng 20 dòng, dòng 20/10 thuộc trang khác không mở trực tiếp; nmquan trang lịch sử timeout; bảng VNIndex.ai 60 phiên là giá trị TỔNG. Không dùng TB20 KHỚP hay phiên phân phối/25 từ nhiều nguồn ghép bất hợp lệ.
- **TB20 KHỚP, bội số, số phiên phân phối/25: CHƯA XÁC MINH**. Không khẳng định phiên 17 mới phát sinh phân phối hay chặn ≥6. Dữ liệu hồ sơ ngày 16/11 ghi năm phân phối có nguồn khác nhưng không thay Sổ gốc.

## III. Cổng, chế độ và 7 yếu tố

**Cổng lõi: ĐẠT có giới hạn** — đóng/% đa nguồn; độ rộng Finfo + Tài chính.com; khớp toàn HOSE 9.607,97 tỷ **1 NGUỒN** có trích nguyên văn thực mở. Quy tắc 0.7 cho 1 NGUỒN qua cổng nhưng **không được trạng thái CÓ**.

**CHẾ ĐỘ RÚT GỌN — thiếu chuỗi dữ liệu: TB20 khớp lệnh HOSE, số phiên phân phối/25. Xu hướng nền chưa đánh giá được; trạng thái tối đa CHỜ. Đây là giới hạn dữ liệu, không phải tín hiệu thị trường xấu.**

Bảy yếu tố chính xác:
1. Giá/MA **−1**: dưới cả MA20 và MA50, có chuỗi 60 giá để kiểm.
2. Thanh khoản **0**: thiếu TB20 KHỚP, không chia tổng, không tự chấm −1 chỉ vì thanh khoản có vẻ thấp.
3. Độ rộng **−1**: 107/199 = 0,538 ≤0,67.
4. Chất lượng dòng tiền **0**: phiên giảm, top 5 ghì 65,88% > ngưỡng ≤50% để chấm bán dàn trải; số điểm thuộc một nguồn.
5. Ngoại KHỚP **0**: chưa có chuỗi giao dịch khớp đồng phạm vi.
6. Sức khỏe xu hướng **0**: thiếu 26 khớp cùng gốc tính phân phối/25.
7. Phái sinh/vĩ mô **0**: chưa khóa lịch hợp đồng và basis theo lịch HNX, không có đánh giá vĩ mô đã đủ nguồn để chấm +1.
**Tổng = −2/7**.

**Chặn mềm:** giá dưới các kháng cự gần 1.735,04/MA20 1.740,49; chưa có căn cứ chặn mềm tăng điểm với mã giảm bởi chỉ số phiên này **đỏ**. **Chặn cứng:** không đủ dữ liệu bội số khớp/biên thấp (thấp ngày 17 bị lệch giữa nguồn), không kiểm được chặn ngoại khớp 5 phiên hay phân phối ≥6, chặn mang sang từ Sổ gốc **KHÔNG KIỂM ĐƯỢC**. Thiếu điều kiện không được coi là đã qua hay tự kích hoạt.

Ba bước trạng thái theo II.H **RÚT GỌN**:
- Bước 1: **KHÔNG — dòng R2** vì tổng −2≤−2, có căn cứ từ giá/MA và độ rộng.
- Bước 2: nền **CHƯA ĐÁNH GIÁ**, trần **CHỜ** ⇒ giữ mức thấp hơn là **KHÔNG**.
- Bước 3: chống đảo chiều **bỏ qua vì không có Sổ gốc**, không coi chặn cũ đã gỡ ⇒ **CHỐT KHÔNG — R2**.
- **Không có vùng mua mới; R:R chỉ số KHÔNG ÁP DỤNG** do không có mốc vô hiệu đang hiệu lực từ Sổ gốc và KHÔNG cho phép mở mua.
- **Định hướng phòng thủ ≤20% cổ phiếu**, không tăng margin, ưu tiên xử lý mã đã mất cấu trúc/vi phạm dừng lỗ riêng (theo 3–7% từng mã nếu áp dụng), không bán tháo đồng loạt.

## IV. Mốc kỹ thuật và ba kịch bản NẾU–THÌ

Các mốc được dùng trong báo cáo:
- Hỗ trợ dưới có xuất xứ: **1.701,90**, thấp 09/11 VNSignal; giá thấp ngày 17/11 đang **CHƯA XÁC MINH** (nguồn lệch), không dùng để đặt lệnh.
- Cản sát: **1.735,04**, cao 17/11 được VNIndex.ai và VNSignal đối chiếu.
- Cản kế: **1.740,49**, MA20 TỰ TÍNH; tiếp theo **1.755,46**, MA50 TỰ TÍNH.

TỐT — khả năng **THẤP**: NẾU đóng vượt 1.740,49 rồi MA50 1.755,46 cùng thanh khoản KHỚP và độ rộng cải thiện, toàn bộ cổng chặn rà được ⇒ THÌ tính lại 7 yếu tố và ba bước; không tự mua khi chưa chuyển CÓ.

CƠ SỞ — khả năng **TRUNG BÌNH**: NẾU giằng co giữa hỗ trợ 1.701,90 và vùng cản 1.735,04–1.740,49, KHỚP chưa xác nhận TB20 ⇒ THÌ không mở mua, chỉ quản trị vị thế hiện hữu.

XẤU — khả năng **TRUNG BÌNH/CAO** định tính dựa trên −2 và sức giá yếu: NẾU đóng dưới hỗ trợ 1.701,90 với nhiều mã giảm ⇒ THÌ giảm các mã yếu có tín hiệu vi phạm stop riêng và không dùng margin/bình quân xuống. Không ghi xác suất phần trăm.

**Dòng tiền ngành (chỉ nói sức giá, không suy vốn ròng):** ngân hàng lớn VCB/BID yếu, dầu khí GAS/BSR/PVT giảm; sức giá riêng tại POW, KDH, DBC, điện và một số bất động sản. Không kết luận tiền ròng vào toàn ngành vì thiếu bảng giá + KHỚP + ngoại đồng phạm vi. Giá ngành/vốn ngoại phần thiếu không bịa.

## V. Nhật ký tìm số 1 NGUỒN / CHƯA XÁC MINH

| Trường | Trang đã thử và kết quả |
|---|---|
| Khớp HOSE 9.607,97 tỷ | Vietnam.vn/Thời báo NH có số, đã dùng; VNSignal 9.596,84715378 tỷ giá trị VNINDEX khác rổ; Tin nhanh Chứng khoán tổng 14.961,5 và thỏa thuận 5.362 khác phạm vi; VNIndex.ai chỉ có tổng ~14,96 nghìn tỷ; nmquan timeout |
| Giá thấp ngày 17 | VNIndex.ai 1.717,16; VNSignal 1.711,37; Thời báo Ngân hàng mô tả vùng 1.717, không xác nhận đủ độ chính xác; không dùng |
| TB20 KHỚP / phân phối | VNSignal hiển thị 20 hàng, chưa mở được đủ 21/26; nmquan lịch sử timeout; VNIndex.ai bảng 60 là tổng có thỏa thuận; Dalink biểu đồ lịch sử theo tháng thiếu 26 giá trị KHỚP |
| Ngoại KHỚP HOSE 5 phiên | Thời báo NH có tổng giao dịch; VNIndex.ai giá trị ròng ước tính từ khối lượng nhân giá; Stockbiz có tổng giao dịch; không có chuỗi khớp đầy đủ |
| Basis, HNX đáo hạn chính thức | Tin nhanh Chứng khoán có hợp đồng 41I1GB000, chỉ 1 nguồn về giá; iWinStock là công bố khác, chưa khóa lịch HNX gốc; Stockbiz phái sinh không đủ phép phân xử; yếu tố 0 |
| MA200 | VNIndex.ai 60 giá, VNSignal 20 giá; nmquan truy xuất timeout; không có bảng một gốc 200 ngày |
| Mốc vô hiệu/chặn đang hiệu lực từ Sổ gốc | Không có Sổ người dùng cung cấp; hồ sơ web các phiên trước không thay thế Sổ; không tự tuyên bố gỡ |

## VI. Bảng tự kiểm 20 tiêu chí

| # | Kết quả | Ghi chú |
|---|---|---|
| 1 | ĐẠT | Đúng phiên 17/11, sau giờ giao dịch |
| 2 | ĐẠT | Không dùng dữ kiện phiên sau |
| 3 | ĐẠT | Số lõi trích nguyên văn ngắn thực đọc |
| 4 | ĐẠT | URL đã mở qua web; nguồn bank đọc tại bản đăng lại được nêu rõ |
| 5 | ĐẠT CÓ GIỚI HẠN | Giá, độ rộng đối chiếu; KHỚP 1 NGUỒN và nhãn có giới hạn |
| 6 | ĐẠT | Có nhật ký >=2–3 nguồn thử cho các ô thiếu |
| 7 | ĐẠT CÓ GIỚI HẠN | MA dùng 60 giá một gốc; không tính TB20/phân phối thiếu chuỗi |
| 8 | ĐẠT | Số dùng trong báo cáo có trong log hoặc ngưỡng Prompt |
| 9 | ĐẠT | Không sao/sửa Sổ cũ |
| 10 | ĐẠT | Ngày phân tích từ lệnh user |
| 11 | ĐẠT | RÚT GỌN vì thiếu TB20 + phân phối |
| 12 | ĐẠT | Nền chưa đánh giá, MA200 thiếu rõ |
| 13 | ĐẠT | 7 yếu tố −2/7, thiếu chấm 0 |
| 14 | ĐẠT CÓ GIỚI HẠN | Veto thiếu không coi đã gỡ, không suy kích hoạt |
| 15 | ĐẠT | R2 KHÔNG → trần CHỜ vẫn KHÔNG → bỏ chống đảo chiều |
| 16 | ĐẠT | Không ghi vùng mua mới |
| 17 | ĐẠT CÓ GIỚI HẠN | Mốc từ dữ liệu; không áp R:R thiếu Sổ |
| 18 | ĐẠT | Ghi nhóm sức giá, không suy vốn ròng |
| 19 | ĐẠT | Website + Zalo đồng bộ số, không hứa lợi nhuận, giữ khuôn |
| 20 | KHÔNG ĐẠT HOÀN TOÀN | Sổ gốc không được dán, chỉ bổ sung được dòng mới có nhãn và Phần B có giới hạn |

## VII. Sổ dữ liệu tự lưu — chỉ bổ sung, không chép cũ

```
=== SỔ DỮ LIỆU VNINDEX — cập nhật đến phiên 17/11/2026 ===
PHẦN A — DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng KHỚP HOSE (tỷ);VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
17/11/2026;1726,72;1735,04;;-0,59;9607,97;107;199;62;;1837,13;;;;ĐÃ ĐỐI CHIẾU: đóng/%, cao, độ rộng, VN30; 1 NGUỒN: KHỚP HOSE; CHƯA XÁC MINH: thấp, ngoại KHỚP, phái sinh, phân phối
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG (R2, -2/7)
Chế độ: RÚT GỌN (thiếu TB20 khớp, phân phối/25)
Nền: CHƯA ĐÁNH GIÁ; MA20 1740,49; MA50 1755,46; dốc MA20/5 +9,46; MA200 chưa có
Mốc vô hiệu đang hiệu lực của Sổ gốc: KHÔNG KIỂM ĐƯỢC
Kháng cự gần: 1735,04, sau đó MA20 1740,49 / MA50 1755,46
Hỗ trợ: 1701,90, thấp phiên 09/11
Chặn cứng từ phiên trước: KHÔNG KIỂM ĐƯỢC vì không có Sổ gốc
Phiên phân phối còn hiệu lực: KHÔNG KIỂM ĐƯỢC
Khối ngoại KHỚP 5 phiên: KHÔNG KIỂM ĐƯỢC
Basis 3 phiên: KHÔNG KIỂM ĐƯỢC
PHẦN C — ĐÍNH CHÍNH
Không có Sổ gốc để lập dòng đính chính.
```

**Giới hạn thao tác web:** chỉ thêm một module dữ liệu nhận định 17/11 và một dòng nạp vào src/index.js; không thay HTML/CSS/khung, không sửa giá EOD, vùng mua, target, stoploss hoặc nội dung lịch sử. Đầu ra Zalo biên tập từ chính các số và trạng thái nêu trên.
