# HỒ SƠ NGUỒN & NHẬN ĐỊNH VN-INDEX — PHIÊN 23/11/2026 — PROMPT v3.3.1

**Mốc phân tích:** thứ Hai, 23/11/2026; HOSE công bố bản chốt phiên lúc **17:06:42 giờ Việt Nam** ngày 23/11; chỉ dùng diễn biến phiên 23/11 hoặc trước. **Thời điểm tác nghiệp:** tối 23/11. **Dữ liệu trên website:** giá 136/136 mã đã khóa EOD ngày 23/11 theo VNDIRECT + CafeF/KBS. **Sổ gốc người dùng dán:** KHÔNG CÓ; báo cáo cũ không phải Sổ nên không được coi chặn cứng từ các phiên trước đã tự gỡ.

**Tệp Prompt đính kèm đọc trực tiếp ba lượt:** `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md`, /mnt/data, **54.099 byte / 41.504 ký tự**, SHA256 `beebdecf878237a57edcda89cd34b5d50a78d81c232859883e2f94c527070184`. Lượt 1: 0–I nguồn, xác minh lõi, khớp/thỏa thuận, chuỗi cùng gốc; lượt 2: II–VI nền, 7 yếu tố, phân phối, chặn cứng/mềm, ba bước; lượt 3: VII–XII khuôn website và Zalo, 20 mục tự kiểm, Sổ. Bản repository `docs/prompt-nhan-dinh-vnindex-v3.md` là tài liệu tham chiếu cùng phiên bản, **không thay thế** tệp đính kèm.

## I. Nhật ký nguồn — nguyên văn ngắn, ngày và phạm vi

| Số liệu | Giá trị / phạm vi | Nguồn 1 + trích ngắn đã mở | Nguồn 2 + trích ngắn đã mở / phạm vi | Nhãn |
|---|---|---|---|---|
| VN-Index đóng / thay đổi 23/11 | **1.697,14, +8,35, +0,49%** | **HOSE** 17:06:42 ngày 23/11, `VNINDEX 1,697.14 8.35 0.49`; https://web.stockbiz.vn/News/2026/11/23/1926706/hose-diem-tin-giao-dich-ngay-23-11-2026.aspx | **VNIndex.ai** 23/11: `1.697,14+8,35 (+0,49%)`; https://vnindex.ai/vn-index/phien/23-11-2026; **BSC** `VN-Index +8.35 điểm, đóng cửa tại 1,697.14 điểm`; https://www.bsc.com.vn/bao-cao/16206-bsc-brief-23-11-nhip-hoi-phuc-con-yeu-rui-ro-dieu-chinh-van-huu/ | **ĐÃ ĐỐI CHIẾU** |
| **KHỚP LỆNH TOÀN HOSE, tỷ đồng, không thỏa thuận** | **8.758 tỷ** (510.553.990 chứng khoán) | **HOSE** bản chính thức 23/11: `Khớp lệnh 510,553,990 8,758`; URL HOSE phía trên | **BSC** `Giá trị khớp lệnh của VN-Index đạt 8,714 tỷ đồng` — khác **phạm vi rổ VN-Index**, không đồng nhất toàn HOSE; **nmquan** riêng 8.636,2 tỷ có phương pháp tổng hợp khác; https://nmquan.vn/data/chi-so/vn-index/lich-su | **1 NGUỒN** cho số chính xác TOÀN HOSE, không gọi 2 nguồn trùng |
| HOSE thỏa thuận / tổng toàn sàn | **4.040 tỷ / 12.798 tỷ** | HOSE 23/11: `Thỏa thuận 186,621,122 4,040`, `Tổng 697,175,112 12,798` | VNIndex.ai `12,69 nghìn tỷ` là giá trị rổ VNINDEX, không tương đương toàn sàn; BSC `12,754 tỷ` theo rổ; KHÔNG dùng để tính TB20 KHỚP | **1 NGUỒN** số chính xác toàn HOSE |
| **Độ rộng chỉ cổ phiếu HOSE theo VNDIRECT** | **162 tăng / 127 giảm / 68 đứng giá** | **VNDIRECT Finfo EOD** 23/11 trong `src/data/research-data.js`, `advance:162, decline:127, unchanged:68`; https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-23&size=500 | **Thời báo Tài chính** 17:07 ngày 23/11: `127 mã giảm giá, 68 mã giữ giá tham chiếu và 162 mã tăng giá`; https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-23-11-vn-index-dao-chieu-tang-diem-thanh-khoan-van-thap-207432.html | **ĐÃ ĐỐI CHIẾU** đồng phạm vi |
| Độ rộng rổ khác | **161 tăng / 132 giảm / 111 đứng trên 404 mã** | VNIndex.ai EOD 23/11: `161 mã tăng`, `132 mã giảm`, `111 mã đứng giá`; https://vnindex.ai/vnindex-hom-nay | Nhóm **404 mã** khác tập VNDIRECT 357 mã có giá; KHÔNG trộn | **1 NGUỒN**, chỉ làm chú giải |
| VN30 | **1.791,12; +4,28; +0,24%** | HOSE 23/11 `VN30 1,791.12 4.28 0.24` | VNDIRECT Finfo EOD ngày 23/11 `close:1791.12, change:4.28` | **ĐÃ ĐỐI CHIẾU** |
| VNMIDCAP / VNSMALLCAP | **1.811,39 (+0,19%) / 1.171,32 (−0,31%)** | HOSE `VNMIDCAP 1,811.39 3.51 0.19`, `VNSMALLCAP 1,171.32 -3.60 -0.31` | Không có hai nguồn độc lập cùng mã chính xác đã mở | **1 NGUỒN** số chỉ số chi tiết |
| HNX-Index | **232,23; −2,36; −1,01%** | BSC 23/11 `HNX-Index -2.36 điểm, đóng cửa tại 232.23 điểm` | VNDIRECT Finfo EOD 23/11: `close:232.23` | **ĐÃ ĐỐI CHIẾU** |
| Giá mở/cao/thấp VNINDEX | **1.680,15 / 1.698,19 / 1.671,72** | VNIndex.ai chi tiết 23/11 `Mở cửa 1.680,15`, `Cao nhất 1.698,19`, `Thấp nhất 1.671,72`; https://vnindex.ai/vn-index/phien/23-11-2026 | VNSignal lịch sử `23/11/2026 1.680,15 1.698,19 1.671,72 1.697,14`; https://vnsignal.vn/chi-so/vnindex/lich-su-gia | **ĐÃ ĐỐI CHIẾU** |
| Top 5 trụ kéo tăng (cùng một phương pháp BSC) | **VIC +6,18; VHM +1,90; FPT +0,75; HVN +0,53; GVR +0,46 điểm** | BSC 23/11 mục Điểm nhấn: `VIC (+6.18), VHM (+1.90), FPT (+0.75), HVN (+0.53), GVR (+0.46)` | VNIndex.ai riêng `VIC +6,06, VHM +1,86, FPT +0,72, HVN +0,51, GVR +0,45`: khác thuật toán, không ghép | **1 NGUỒN** chi tiết điểm BSC |
| Top 5 trụ kéo giảm (cùng BSC) | **TCB −0,64; GAS −0,59; STB −0,42; MBB −0,31; MSN −0,25 điểm** | BSC 23/11: `TCB (-0.64), GAS (-0.59), STB (-0.42), MBB (-0.31), MSN (-0.25)` | VNIndex.ai đưa TCB −0,99, GAS −0,60, STB −0,43, MBB −0,31, MWG −0,24; khác phương pháp và thứ tự | **1 NGUỒN** chi tiết điểm BSC |
| **Ngoại ròng TỔNG HOSE**, có cả thỏa thuận | **−419 tỷ đồng** | HOSE 23/11 bảng ngoại: `Trading val. (bil. Dongs) 1,464 11.44% 1,884 14.72% -419` | BSC **−418,93 tỷ**, Thời báo Tài chính **−442 tỷ**, khác chốt giờ/phạm vi; dùng số HOSE | **ĐÃ ĐỐI CHIẾU** đến làm tròn BSC cho **TỔNG**, KHÔNG dùng để chấm KHỚP |
| Ngoại **KHỚP HOSE** liên tiếp / 5 phiên | — | HOSE chỉ có **tổng** giao dịch 23/11; BSC tổng/khối ngoại; VNIndex.ai ước tính từ KL ròng × giá đóng | KHÔNG có năm số ngoại **KHỚP** cùng một định nghĩa đã kiểm | **CHƯA XÁC MINH** |
| Tự doanh TỔNG HOSE | **+357,5 tỷ** | nmquan bảng lịch sử 23/11: `874,6 517,1 ▲ +357,5`, https://nmquan.vn/data/chi-so/vn-index/lich-su | Không có đối chiếu toàn bộ số tự doanh ở nguồn thứ hai | **1 NGUỒN** tổng, không tuyên bố khớp ròng |
| Nhóm ngành theo chỉ số HOSE | **VNIT +3,83%; VNREAL +1,33%; VNIND +0,55%; VNFIN −0,36%; VNHEAL −4,50%; VNMAT −0,12%; VNENE +0,13%** | HOSE mục chỉ số ngành 23/11, URL HOSE trên | BSC độc lập: công nghệ gần +4%, bất động sản và công nghiệp tăng; cùng chiều, số ngành riêng là một nguồn chính xác | **1 NGUỒN** cho từng số ngành HOSE |
| Lịch phái sinh/ETF giai đoạn | **15/10 đáo hạn VN30F tháng 10; 13/11 cơ cấu ETF lớn; 19/11 đáo hạn VN30F tháng 11** | Tài liệu Mirae Asset 03/11 xác minh cơ cấu **09–13/11**, https://static1.vietstock.vn/edocs/22836/1793689249045_202611ETFreviewin4Q26VN.pdf ; Thời báo Tài chính/SSI ghi 13/11; HNX quy định kỳ đáo hạn thứ Năm thứ ba, dữ liệu iWinStock ghi 19/11 https://www.iwinstock.com/derivatives/ | Lịch các **quỹ ETF khác** (nhất là các quỹ ngoài VN30/VNDiamond/VNFINLead) chưa kiểm tra bao phủ hết mọi ngày. **Không tự gắn cờ** cho 29/10,02/11,06/11,12/11,17/11,18/11 vì không có chứng cứ phiên cơ cấu cụ thể | **ĐÃ ĐỐI CHIẾU** ngày chính, **CHƯA XÁC MINH** lịch tuyệt đối tất cả quỹ |
| Hợp đồng F1M/basis 23/11 & 5 phiên | — | BSC 23/11 chỉ nói các HĐTL tăng; iWinStock có dữ liệu kỳ 19/11, không đủ F1M 23/11 và chuỗi ba ngày đúng kỳ; HNX chưa có bảng đã mở đủ | Không điền basis số, yếu tố 7 =0 vì chưa có thông tin vĩ mô bất lợi rõ đã kiểm | **CHƯA XÁC MINH** |
| Sổ dữ liệu gốc/mốc vô hiệu đang hiệu lực | — | Không có Sổ gốc người dùng cung cấp; không suy từ bản nhận định web các ngày trước | Chặn cứng mang sang ngoài phép phân phối mới: **KHÔNG KIỂM ĐƯỢC** | **CHƯA XÁC MINH** |

## II. Gốc chuỗi và tính toán TỰ TÍNH

**Chuỗi giá (a1):** VNIndex.ai bảng **60 giá đóng**, thực đọc từ **27/08/2026–23/11/2026**, ngày mới nhất trước, trên https://vnindex.ai/vnindex-hom-nay. Neo: `23/11/2026 | 1.697,14`; `20/11/2026 | 1.688,79`, đều khớp giá lõi HOSE. Cột `Giá trị GD` của VNIndex.ai là **tổng có thỏa thuận**, KHÔNG dùng cho tính KHỚP.
- MA20 = mean 20 giá đóng **27/10–23/11**, **1.727,567 ⇒ 1.727,57 điểm** (Python, TỰ TÍNH).
- MA50 = mean 50 giá đóng **15/09–23/11**, **1.746,2318 ⇒ 1.746,23 điểm** (Python, TỰ TÍNH).
- MA20 cách 5 phiên = mean 20 giá từ **20/10–16/11** = **1.738,7515**; dốc 5 phiên = 1.727,567 − 1.738,7515 = **−11,1845 ⇒ −11,18 điểm** (Python, TỰ TÍNH).
- MA200 không đủ 200 giá từ bảng một gốc ⇒ CHƯA XÁC MINH, không cản chế độ ĐẦY ĐỦ.

**Chuỗi KHỚP (a2):** nmquan bảng **30 dòng** từ **13/10–23/11/2026**, URL https://nmquan.vn/data/chi-so/vn-index/lich-su. Bảng ghi `GT khớp lệnh (tỉ)`, tổng toàn HOSE gồm các chứng khoán theo phương pháp nmquan. Neo `23-11-2026 | 1.697,14 | ... | 8.636,2`, `20-11-2026 | 1.688,79 | ... | 10.752,6`, đồng thời giá đóng khớp HOSE. Chênh HOSE chính thức 8.758 vs nmquan 8.636,2 = **121,8 tỷ (~1,39%)** chưa phân xử. Bản nhận định website **20/11** trước đây ghi nmquan ngày 20/11 là **10.667,7 tỷ**; bảng nmquan mở lại giờ ghi **10.752,6 tỷ**. Đây là **đính chính khác biệt nguồn theo thời điểm**, không sửa thầm tài liệu 20/11; mọi phép tính ngày 23 dùng cùng một bản bảng nmquan đang hiển thị.
- TB20 KHỚP **20 phiên LIỀN TRƯỚC 23/11**, từ **26/10–20/11**, mean = **11.611,305 ⇒ 11.611,31 tỷ** (Python, TỰ TÍNH).
- Bội số đúng cùng gốc nmquan = **8.636,2 ÷ 11.611,305 = 0,743775 ⇒ 0,744 lần** (Python, TỰ TÍNH). KHÔNG lấy 8.758 HOSE chia TB20 nmquan.
- Thay đổi KHỚP từ phiên trước cùng nmquan = **(8.636,2/10.752,6−1)×100 ≈ −19,68%** (Python).
- Độ rộng VNDIRECT: **162/127 = 1,2755905 ⇒ 1,276** (Python, TỰ TÍNH), **0 điểm** vì chưa đạt 1,5.
- Top 5 kéo tăng theo **duy nhất bảng BSC** = 6,18+1,90+0,75+0,53+0,46 = **9,82 điểm**, tỷ lệ = **9,82/8,35 = 117,60%** (Python, TỰ TÍNH); có thể >100% vì phần còn lại giảm. Phiên tăng, >70% ⇒ điểm chất lượng **−1**. Không trộn giá trị điểm BSC với VNIndex.ai.
- Vị trí đóng trong biên: `(1697,14−1671,72)/(1698,19−1671,72) ≈ 0,9603` ⇒ ở **1/3 trên** của biên, không phải xả cuối.

**Phân phối theo 25 phiên (a2), tính trên 30 dòng hiển thị:** cửa sổ **20/10–23/11/2026** gồm 25 phiên, so với phiên trước đó 19/10 khi cần; định nghĩa: ngày giảm ≥0,2% và KHỚP hôm đó lớn hơn ngày liền trước; loại cờ sự kiện có chứng cứ; xóa nếu đã qua 25 phiên hoặc tăng ≥5% từ điểm đóng của phiên ấy.
- Các ngày còn hiệu lực thỏa **điều kiện giá + KHỚP**: **29/10, 02/11, 06/11, 12/11, 17/11, 18/11** (6 ứng viên). Cả sáu chưa xuất hiện giá đóng tăng trở lại 5% tính từ chính ngày đó. **Phiên 19/10 rời cửa sổ 25 phiên**, nên không đưa từ ngày trước sang.
- Ngày ETF 13/11 và đáo hạn phái sinh 19/11 đã có nguồn, **không nằm trong sáu ngày trên**; lịch quỹ khác không bao phủ tuyệt đối, vì vậy khuyến cáo hiệu lực số 6 phụ thuộc xuất hiện bằng chứng phiên cơ cấu khác.
- Với lịch hiện đã kiểm, **6 phân phối hiệu lực/25 phiên**, chấm **−1** và có **CHẶN CỨNG ≥6** theo Prompt. Nếu phát hiện cờ sự kiện chính thức cho bất kỳ ứng viên nào, phải đếm lại; trạng thái KHÔNG hôm nay vẫn có độc lập từ yếu tố giá, thanh khoản và tập trung kéo trụ.

## III. Cổng, nền, bảy yếu tố, chặn và ba bước

- **Cổng số lõi: ĐẠT có giới hạn:** đóng/% HOSE, VNIndex.ai, BSC; độ rộng chỉ cổ phiếu VNDIRECT và Thời báo Tài chính trùng; KHỚP toàn HOSE chính xác **8.758 tỷ 1 NGUỒN** (BSC 8.714 thuộc rổ, nmquan 8.636,2 khác phương pháp). Không cho trạng thái CÓ khi số lõi còn 1 NGUỒN.
- **Chế độ ĐẦY ĐỦ:** tính được MA20/MA50/dốc MA20/5 từ nguồn (a1) và TB20, phân phối/25 từ nguồn (a2). MA200 chưa xác minh nhưng không quyết định chế độ.
- **Nền XẤU** vì đóng **1.697,14 dưới MA50 1.746,23** và dốc MA20 **−11,18** âm; trần trạng thái **KHÔNG**.
- 7 yếu tố: (1) giá/MA **−1** (dưới cả MA20 và MA50); (2) thanh khoản **−1** vì phiên tăng +0,49% nhưng bội số 0,744 < 0,8; (3) độ rộng **0** vì 1,276 chưa đạt +1 ≥1,5 và không ≤0,67; (4) chất lượng dòng tiền **−1** vì top 5 BSC 117,60% >70%; (5) ngoại KHỚP **0** vì thiếu chuỗi; (6) phân phối **−1** với sáu phiên theo lịch đã kiểm; (7) phái sinh/vĩ mô **0** vì basis chưa xác minh, không có vĩ mô bất lợi chắc đã kiểm. **Tổng −4/7**.
- **Chặn mềm:** thanh khoản không xác nhận phiên tăng (2=−1); nhóm trụ quá tập trung (4=−1); giá đóng **1.697,14** dưới mốc số tròn 1.700,00 khoảng **0,17%**, chưa vượt. Không gắn chặn xanh điểm/đỏ mã vì VNDIRECT 162 tăng >127 giảm.
- **Chặn cứng đã kiểm theo dữ liệu/lịch hiện có:** **6 phiên phân phối hiệu lực/25** (có điều kiện đính chính lịch quỹ khác). Chặn xả cuối không kích hoạt vì đóng gần đỉnh biên và bội số 0,744<1. Chặn xanh điểm/đỏ mã bội số ≥1,2 không kích hoạt. Ngoại KHỚP 5 phiên + dưới MA50, mốc vô hiệu từ Sổ và các chặn mang sang khác **KHÔNG KIỂM ĐƯỢC**, không coi đã gỡ.
- Ba bước **ĐẦY ĐỦ**: B1 **KHÔNG dòng 1** (chặn cứng phân phối ≥6; kể cả gỡ một ứng viên điểm các yếu tố còn lại đã đủ âm để KHÔNG dòng 2) → B2 trần nền **XẤU**, vẫn **KHÔNG** → B3 không áp chống đảo chiều vì không có Sổ gốc ⇒ **KHÔNG cuối cùng, dòng 1 theo lịch đã kiểm**.
- **Khả năng giao dịch:** Phòng thủ, KHÔNG mở mua mới; giữ các vị thế còn khỏe nếu chưa chạm stop riêng, rà/giảm mã đã mất nền, không tăng margin và không bình quân xuống. Tỷ trọng cổ phiếu định hướng **≤20%** theo Prompt, không phải lệnh bán mọi tài khoản. Vùng mua mới **KHÔNG ÁP DỤNG**; R:R chỉ số **KHÔNG ÁP DỤNG** do mốc vô hiệu đang hiệu lực từ Sổ gốc chưa có.

## IV. Mốc kỹ thuật và ba kịch bản NẾU–THÌ

| Mốc | Xuất xứ rõ |
|---|---|
| **1.671,72** | Thấp phiên 23/11, VNIndex.ai/VNSignal cùng ghi |
| **1.666,41** | Thấp phiên 20/11 trong nmquan và VNIndex.ai |
| **1.698,19** | Cao phiên 23/11, VNIndex.ai/VNSignal cùng ghi |
| **1.700,00** | Số tròn tâm lý phía trên, không phải mốc chưa từng được công bố |
| **1.727,57** | MA20 tự tính từ 60 giá đóng VNIndex.ai |
| **1.746,23** | MA50 tự tính từ 60 giá đóng VNIndex.ai |

**TỐT — THẤP:** NẾU đóng vượt 1.700 rồi MA20 1.727,57 cùng khớp/độ rộng đạt tín hiệu xác nhận và số phân phối còn hiệu lực giảm ≤5, các chặn cứng khác kiểm đủ ⇒ THÌ tính lại bảy yếu tố, ba bước, KHÔNG tự mua trước khi trạng thái chốt thực sự CÓ.

**CƠ SỞ — TRUNG BÌNH:** NẾU giữ được vùng thấp 23/11 là 1.671,72 và đáy 20/11 là 1.666,41 nhưng chưa vượt 1.700, MA20 ⇒ THÌ giữ những mã còn khỏe theo stop từng mã, hạn chế đòn bẩy và không mở vị thế mới.

**XẤU — CAO (định tính từ nền XẤU, điểm −4, phân phối):** NẾU đóng dưới **1.666,41** và độ rộng chuyển bất lợi ⇒ THÌ ưu tiên xử lý cổ phiếu vi phạm dừng lỗ riêng, giảm phần mất nền từng bước, không bình quân giá xuống. Không ghi xác suất %.

**Đọc ngành có số:** công nghệ HOSE VNIT +3,83%, bất động sản VNREAL +1,33%, công nghiệp VNIND +0,55%, nhưng VNFIN −0,36% và chăm sóc sức khỏe VNHEAL −4,50%; VNSML −0,31%. Chưa đủ đồng bộ bộ ba **giá + khớp + ngoại** theo ngành nên **không được gọi tiền ròng thực sự vào/ra**; lực tăng tập trung VIC, VHM, FPT (BSC), chưa có nhóm dẫn dắt đủ khỏe để mua mới. Khối ngoại tổng HOSE −419 tỷ, tự doanh tổng +357,5 tỷ một nguồn; chưa có ngoại KHỚP năm phiên.

## V. Nhật ký tìm số chưa có / khác phạm vi (ít nhất 3 nguồn khi CHƯA XÁC MINH)

| Ô | Trang đã thử, kết quả |
|---|---|
| KHỚP toàn HOSE 8.758 tỷ chính xác (1 NGUỒN) | HOSE/Stockbiz: **có số, đã dùng**; BSC: **có số, khác phạm vi (8.714 rổ chỉ số)**; nmquan: **có số, khác chuẩn tổng hợp 8.636,2**; VNIndex.ai: **có tổng có thỏa thuận, khác phạm vi** |
| Ngoại KHỚP HOSE trong 5 phiên | HOSE bảng 23/11: **không có số khớp tách riêng**; BSC 23/11: **có tổng, khác phạm vi**; VNIndex.ai: **ước tính từ KL, không có số KHỚP chuẩn**; nmquan: **ngoại tổng gồm thỏa thuận, khác phạm vi** |
| F1M/basis và chuỗi 3 phiên | BSC 23/11: **không có số F1M đủ chuỗi**; HNX bảng lịch hợp đồng 19/11: **có kỳ cũ, sai kỳ 23/11**; iWinStock trang phái sinh: **không lấy được đủ giá đóng tháng 12 cho 23/11 và 3 phiên** |
| MA200 | VNIndex.ai **60 dòng**; nmquan **30 dòng**; VNSignal lịch sử **20 dòng**, thiếu 200 giá cùng một nguồn hiển thị |
| Lịch sự kiện ETF ngoài nhóm lớn | Mirae Asset 03/11: **có kỳ 09–13/11 đã dùng**; TBTC/SSI 09/11: **xác nhận kỳ 13/11**; HNX/iWinStock: **xác nhận đáo hạn 19/11**; các quỹ ETF khác không có danh sách phủ đủ mọi phiên; không gắn cờ cho ngày không có thông báo |
| Chặn từ Sổ người dùng | Không có Sổ gốc trong tệp đính kèm hoặc dòng người dùng, các bản web 20/11 và trước **không thể thay Sổ**. Điều kiện gỡ chặn lịch sử ngoài chuỗi vừa tính chưa kiểm được |
| Sai khác số KHỚP ngày 20/11 so báo cáo cũ | Nhật ký 20/11 đã ghi 10.667,7 của nmquan, nhưng nmquan 23/11 đang hiển thị ngày 20/11 **10.752,6**; **đính chính ở hồ sơ mới, không sửa số cũ thầm**, phải kiểm lại nếu người dùng có Sổ riêng |

## VI. Bảng tự kiểm 20 tiêu chí Prompt

| # | Kết quả | Ghi chú |
|---|---|---|
| 1 | ĐẠT | Ngày 23/11 có giao dịch; HOSE công bố 17:06:42 |
| 2 | ĐẠT | Không dùng diễn biến sau phiên 23/11 |
| 3 | ĐẠT | Số lõi, ngoại có trích trực tiếp nguồn đã mở |
| 4 | ĐẠT | Trang chính đã thực mở/đọc; tên URL thật |
| 5 | ĐẠT CÓ GIỚI HẠN | Khớp HOSE chính xác 1 NGUỒN, không nhận BSC khác rổ thành đối chiếu |
| 6 | ĐẠT | Nhật ký tìm nguồn cho số thiếu/chênh |
| 7 | ĐẠT | 60 giá VNIndex.ai; 30 KHỚP nmquan cùng chuẩn, không trộn khi tính |
| 8 | ĐẠT | Các số xuất bản ghi nguồn hoặc phép tính trong hồ sơ |
| 9 | ĐẠT | Không sửa thầm Sổ cũ hoặc báo cáo 20/11 dù có chênh lịch sử |
| 10 | ĐẠT | Ngày từ yêu cầu 23/11 |
| 11 | ĐẠT | ĐẦY ĐỦ đủ 5 chỉ báo, MA200 không quyết định |
| 12 | ĐẠT | Nền XẤU dưới MA50, MA20 dốc âm, có ghi thiếu MA200 |
| 13 | ĐẠT | 7 yếu tố −4; 5 thiếu thì 0 |
| 14 | ĐẠT CÓ GIỚI HẠN | 6 phân phối theo lịch sự kiện đã kiểm, nhưng lịch mọi quỹ và chặn mang từ Sổ gốc chưa đầy đủ |
| 15 | ĐẠT | Thô KHÔNG → trần XẤU KHÔNG → bỏ chống đảo chiều vì thiếu Sổ |
| 16 | ĐẠT | Không ghi vùng mua mới |
| 17 | ĐẠT CÓ GIỚI HẠN | Mốc giá có xuất xứ, không có mốc vô hiệu từ Sổ để tính R:R |
| 18 | ĐẠT CÓ GIỚI HẠN | Có nhóm ngành theo chỉ số HOSE, không suy tiền ròng thiếu ba thành phần |
| 19 | ĐẠT | Web/Zalo cùng số và trạng thái; chỉ thêm module JS và một import |
| 20 | KHÔNG ĐẠT HOÀN TOÀN | Không có Sổ gốc; chỉ có dòng mới/Phần B và cảnh báo đính chính để người dùng áp dụng |

## VII. Sổ dữ liệu tự lưu — chỉ dòng mới, không chép cũ

```
=== SỔ DỮ LIỆU VNINDEX — bổ sung 23/11/2026 ===
PHẦN A — DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;Ngoại ròng KHỚP HOSE;VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
23/11/2026;1697,14;1698,19;1671,72;+0,49;8758;162;127;68;;1791,12;;lịch quỹ ngoài nhóm lớn chưa đủ;Không;ĐÃ ĐỐI CHIẾU đóng/%, OHLC, độ rộng, VN30; 1 NGUỒN khớp HOSE
PHẦN B — TRẠNG THÁI
Trạng thái: KHÔNG dòng 1, −4/7; ĐẦY ĐỦ, nền XẤU; MA20 1727,57, MA50 1746,23, dốc MA20/5 −11,18, MA200 chưa xác minh
TB20 KHỚP một nguồn nmquan (26/10–20/11): 11611,31 tỷ; ngày 23 khớp cùng nmquan 8636,2 tỷ = 0,744×TB20
Phân phối còn hiệu lực theo lịch hiện đã kiểm: 6 phiên (29/10, 02/11, 06/11, 12/11, 17/11, 18/11), chặn cứng ≥6; kiểm lại nếu có sự kiện ETF khác cùng ngày
Ngoại KHỚP 5 phiên và basis VN30F1M/3 phiên: KHÔNG KIỂM ĐƯỢC
Chặn cứng khác từ Sổ gốc/mốc vô hiệu đang hiệu lực: KHÔNG KIỂM ĐƯỢC
Hỗ trợ quan sát: 1671,72, sau đó 1666,41 (không tự chuyển thành mốc vô hiệu)
Kháng cự gần: 1698,19; 1700,00; MA20 1727,57; MA50 1746,23
Tỷ trọng phòng thủ tham khảo: ≤20%, không tăng margin, không có vùng mua mới/R:R chỉ số
PHẦN C — GHI CHÚ ĐÍNH CHÍNH
Bản nhật ký ngày 20/11 ghi KHỚP nmquan ngày 20/11 10667,7 tỷ; bảng nmquan mới đọc ngày 23/11 ghi 10752,6 tỷ. Không tự sửa Sổ chưa được người dùng cung cấp; nếu có dòng cũ cần ghi đính chính riêng, không sửa thầm.
```

**Phạm vi cập nhật GitHub:** bổ sung tệp `src/data/daily-insights-20261123.js` và một dòng import trong `src/index.js`, không đổi HTML/CSS, thứ tự section, mức mua/target/stop từng cổ phiếu, không động vào lịch EOD hoặc kiến trúc. Lưu hồ sơ nguồn trong docs, KHÔNG nạp Sổ gốc lên trang.
