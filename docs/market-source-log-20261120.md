# KIỂM TOÁN NGUỒN & NHẬN ĐỊNH VN-INDEX — PHIÊN 20/11/2026 — PROMPT v3.3.1

**Ngày phân tích:** thứ Sáu 20/11/2026, có giao dịch thực, HOSE công bố Điểm tin lúc 17:03 cùng ngày. **Mốc cắt:** hết phiên 20/11 giờ Việt Nam, chỉ dùng các chỉ tiêu của phiên này và dữ kiện quá khứ, không dùng diễn biến phiên sau. **Ngày xử lý:** 20/11/2026 sau giờ chốt. **Sổ dữ liệu tự lưu người dùng dán:** KHÔNG CÓ; không mặc nhiên lấy báo cáo web cũ làm Sổ.

**Prompt:** tệp đính kèm thực mở tại /mnt/data/Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md, 54.099 bytes, 41.504 ký tự, SHA256 beebdecf878237a57edcda89cd34b5d50a78d81c232859883e2f94c527070184. Đã đọc lại 3 lượt theo (1) 0–I nguồn/cổng/chuỗi, (2) II–VI chỉ báo/điểm/chặn/trạng thái, (3) VII–XII định dạng web/Zalo, bảng kiểm và Sổ. Đối chiếu cùng quy tắc v3.3.1 lưu tại docs/prompt-nhan-dinh-vnindex-v3.md (GitHub blob SHA d3776d82a27f643bdc40b13729f564003417e2d0); phần phụ lục kỹ thuật repository không sửa logic của prompt đính kèm.

## I. Số lõi và phạm vi đối chiếu

| Chỉ tiêu | Giá trị / nguồn thực đọc | Đối chiếu, nhãn |
|---|---|---|
| VNINDEX 20/11 | **1.688,79 điểm, −0,83 điểm, −0,05%**; bản gốc **HOSE**, công bố ngày 20/11 17:03: `VNINDEX 1,688.79 -0.83 -0.05`, https://web.stockbiz.vn/News/2026/11/20/1926324/hose-diem-tin-giao-dich-ngay-20-11-2026.aspx | VNIndex.ai chi tiết phiên https://vnindex.ai/vn-index/phien/20-11-2026 và VNDIRECT Finfo EOD 20/11 đều ghi cùng số. **ĐÃ ĐỐI CHIẾU** |
| HOSE khớp lệnh đúng phạm vi | **10.809 tỷ đồng**, 608.922.411 chứng khoán; HOSE bảng **Khớp lệnh**, URL trên | BSC Research báo **10.769 tỷ** là `giá trị khớp lệnh VN-Index`, https://www.bsc.com.vn/Report/ReportFile/16192 ; nmquan **10.667,7 tỷ** trên bộ tổng hợp riêng, https://nmquan.vn/data/chi-so/vn-index/lich-su. **1 NGUỒN CHI TIẾT toàn HOSE**; không ép các số khác phạm vi thành trùng tuyệt đối |
| Thỏa thuận/tổng giao dịch | HOSE **5.253 tỷ / 16.062 tỷ** bảng `Thỏa thuận/Tổng` | VNIndex.ai cho **15,93 nghìn tỷ** theo rổ, BSC tổng **16.022 tỷ** khác phạm vi. Không được đưa tổng vào TB20 KHỚP |
| Độ rộng **chỉ cổ phiếu HOSE theo VNDIRECT** | **91 tăng / 206 giảm / 65 tham chiếu** từ `src/data/research-data.js` `marketSession.breadth` EOD, gốc VNDIRECT Finfo: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-20&size=500 | Thời báo Tài chính ngày 20/11 17:47 https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-20-11-luc-mua-cuoi-phien-giup-vn-index-thu-hep-da-giam-207320.html và bảng giá VNDIRECT báo đúng **91/206/65**; **ĐÃ ĐỐI CHIẾU** cùng tập. BSC đếm 96/216/95 và VNIndex.ai đếm 96/212/96 do rổ khác, **không trộn** |
| VN30/VNMID/VNSML | **VN30 1.786,84 −0,09%; VNMIDCAP 1.807,88 −0,65%; VNSMALLCAP 1.174,92 −0,56%** | HOSE bảng `VN30/VNMIDCAP/VNSMALLCAP`, URL trên. VN30 cũng trùng VNDIRECT, VNMID/VNSML số chi tiết HOSE 1 NGUỒN |
| HNX-Index | **234,59, −4,35, −1,82%** | BSC Research và VNDIRECT Finfo cùng ngày. **ĐÃ ĐỐI CHIẾU** |
| OHLC VNINDEX | VNIndex.ai **mở 1.671,25; cao 1.688,79; thấp 1.666,41**; VNSignal thấp 1.666,41 nhưng cao 1.689,18 | **Thấp 1.666,41 ĐÃ ĐỐI CHIẾU** (VNIndex.ai + nmquan). **Cao chính xác còn lệch**, không dùng để nhận định nến đóng ở đúng đỉnh |
| Tác động năm mã trụ | BSC top kéo tăng VIC +3,08, TCB +0,91, STB +0,72, GAS +0,61, VPL +0,60; top kéo giảm VCB −1,03, MBB −0,92, VPB −0,81, BID −0,80, ACB −0,53 | VNIndex.ai riêng top VIC +3,04, TCB +1,31, STB +0,70 và trụ giảm gần tương đương nhưng khác thuật toán. **KHÔNG dùng tỷ lệ top5 vì chỉ số thay đổi |−0,83| < 2 điểm**, mục 0.6 |
| Khối ngoại **tổng HOSE** (cả khớp và thỏa thuận) | HOSE mua **1.412 tỷ**, bán **2.253 tỷ**, ròng **−841 tỷ**, theo bảng HOSE; BSC **−840,98 tỷ**, Thời báo Tài chính **−841 tỷ** | **ĐÃ ĐỐI CHIẾU cho tổng ròng**, **KHÔNG** thay bằng khối ngoại KHỚP 5 phiên. BSC ghi 4 phiên liên tiếp tổng, không dùng chấm chặn KHỚP |
| Tự doanh | nmquan **−246,0 tỷ**, gồm khớp & thỏa thuận, 1 nguồn; https://nmquan.vn/data/chi-so/vn-index/lich-su | Không suy riêng KHỚP; không gọi là dòng tiền ngành |
| Sức giá ngành theo HOSE | **VNENE +1,22%; VNREAL +0,35%; VNFIN −0,12%; VNIT −1,60%; VNIND −0,77%; VNMAT −0,22%; VNHEAL −1,77%** | Bảng ngành HOSE (URL trên). Thời báo Tài chính cùng chiều nói nhóm năng lượng/bất động sản tích cực, công nghệ/công nghiệp yếu nhưng khác hệ phân ngành. **1 NGUỒN** tỷ lệ ngành chính xác |
| Kỳ ETF và phái sinh | Thời báo Tài chính dẫn SSI Research nêu quỹ cơ cấu **13/11**, hiệu lực bộ chỉ số **16/11**, https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html; MBS/DSC đối chiếu đáo hạn HĐTL tháng 11 vào **19/11**, https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-19-11-2026-bien-dong-kho-luong-phien-dao-han/ | Hai phiên sự kiện **13/11, 19/11** thuộc cửa sổ/được gắn cờ; **không phải ứng viên phân phối** theo định nghĩa bởi giá không giảm ≥0,2% vào 13/11, và khớp giảm ngày 19. Các sự kiện quỹ khác chưa có lịch đầy đủ cho mọi quỹ. Không có cờ đã xác minh 20/11 |
| Sổ gốc, ngưỡng vô hiệu, ngoại KHỚP 5 phiên, basis phái sinh 3 phiên | **KHÔNG KIỂM ĐƯỢC** vì không có Sổ gốc và chuỗi ngoại KHỚP/basis cùng chuẩn | Không chuyển bán ròng tổng HOSE sang KHỚP, không xem chặn cũ đã tự gỡ |

**Phạm vi trọng yếu:** HOSE chính thức khớp **10.809 tỷ** khác số **10.667,7 tỷ** trong chuỗi nmquan, lệch **141,3 tỷ (1,31%)**. Chưa phân giải nguyên nhân chi tiết; không hòa giải bằng ước đoán. Để bảo toàn phép tính **một gốc**, chỉ dùng **30 giá trị KHỚP nmquan** cho TB20 và phiên phân phối, đồng thời công bố con số HOSE chính thức riêng.

## II. Hai chuỗi một gốc và phép tính bằng công cụ

**Gốc (a1):** Bảng VNIndex.ai 60 phiên trên https://vnindex.ai/vnindex-hom-nay, đã mở và đọc **60 hàng** từ **26/08/2026 đến 20/11/2026**, mới nhất trước. Hai neo nguyên văn:
- `20/11/2026 | 1.688,79 | -0,83 | -0,05%`
- `19/11/2026 | 1.689,62 | -13,39 | -0,79%`
Đóng mới nhất khớp HOSE/VNDIRECT. Cột `Giá trị GD` có thỏa thuận, **không** dùng cho TB20.

- MA20 = trung bình 20 giá đóng mới nhất 20/11–26/10 = **1.730,8875 → 1.730,89** (TỰ TÍNH, Python).
- MA50 = trung bình 50 giá đóng mới nhất 20/11–14/09 = **1.748,0536 → 1.748,05** (TỰ TÍNH).
- MA20 của 5 phiên trước = trung bình 20 giá đóng từ 13/11 tới 19/10 = **1.736,399** (TỰ TÍNH); dốc MA20 5 phiên = **−5,5115 → −5,51 điểm**.
- MA200 chỉ có 60 phiên, **CHƯA XÁC MINH**; không quyết định chế độ.

**Gốc (a2):** Bảng nmquan https://nmquan.vn/data/chi-so/vn-index/lich-su, **30 hàng thực đọc** từ 12/10 đến 20/11/2026, `GT khớp lệnh (tỉ)` dùng cùng cách thống kê nmquan tất cả các phiên. Hai neo nguyên văn:
- `20-11-2026 | 1.688,79 | ... | 10.667,7` (KHỚP tỷ đồng)
- `19-11-2026 | 1.689,62 | ... | 9.333,8`
Giá đóng trong bảng trùng HOSE/VNDIRECT.

- TB20 KHỚP **20 phiên liền trước không tính 20/11** (từ 23/10/2026 đến 19/11/2026) = **11.779,565 → 11.779,57 tỷ đồng** (TỰ TÍNH, Python).
- Bội số KHỚP theo cùng nmquan = **10.667,7 / 11.779,565 = 0,90561069 → 0,906×TB20** (TỰ TÍNH). Không lấy 10.809 HOSE chia TB20 nmquan.
- Khớp hôm nay so ngay 19/11 cùng nmquan = **+14,29%** (10.667,7 / 9.333,8 − 1; TỰ TÍNH).
- Độ rộng theo VNDIRECT = **91/206 = 0,44174757 → 0,442** (TỰ TÍNH).
- Phiên 20/11 giảm **−0,05%**, dưới ngưỡng định nghĩa phiên giảm ≥0,2%, nên **không** là phiên phân phối dù khớp tăng 14,29%.

**Phân phối trong 25 phiên** (gồm 20/11) từ **19/10–20/11**, cần 26 hàng tới 16/10 so phiên liền trước, tính tự động theo định nghĩa % giảm ≥0,2% và khớp cao hơn phiên liền trước:
- Có 7 ứng viên, **19/10, 29/10, 02/11, 06/11, 12/11, 17/11, 18/11**. 19/11 đáo hạn không thỏa điều kiện (khớp thấp hơn 18/11); 13/11 cơ cấu không thỏa giảm ≥0,2%. Không có ứng viên 20/11.
- Cả 7 phiên **chưa hết hiệu lực theo +5%**. Riêng 19/10 đóng 1.689,84, mốc xóa phải **1.774,332**; mức đóng cao nhất sau đó **1.774,15** ngày 23/10, chưa đạt +5%. Các ngày còn lại cũng không đạt +5%; tất cả trong cửa sổ 25 phiên.
- **7 phân phối còn hiệu lực / 25 phiên**, theo lịch sự kiện đã xác nhận cho 13/11 và 19/11; nếu xuất hiện chứng cứ chính thức về ngày sự kiện của quỹ khác liên quan tới 7 ứng viên thì phải tính lại. Phân phối **−1** cho điểm và **kích hoạt CHẶN CỨNG ≥6** theo Prompt.

## III. Chế độ, nền, điểm số và trạng thái cuối

- **Cổng số lõi ĐẠT có giới hạn 1 NGUỒN** ở trị số KHỚP chính xác toàn HOSE. Giá/% và độ rộng VNDIRECT đều có ít nhất hai đơn vị công bố độc lập. Khớp chính thức 10.809 tỷ là nguồn cao nhất, khác gốc nmquan 10.667,7 tỷ chưa lý giải hoàn toàn. Trạng thái CÓ bị giới hạn ngay cả không có chặn.
- **CHẾ ĐỘ ĐẦY ĐỦ:** có MA20, MA50, độ dốc MA20/5, TB20 KHỚP và số phiên phân phối/25. MA200 chưa xác minh, không quyết định chế độ.
- **Nền XẤU**, trần KHÔNG: đóng **1.688,79** thấp hơn MA50 **1.748,05** và MA20 dốc **−5,51** trong năm phiên. Không cần MA200 để đủ vế XẤU.
- **7 điểm**: (1) Giá/MA **−1** (dưới MA20 và MA50); (2) thanh khoản **0** vì phiên thay đổi −0,05% là **đi ngang**, dù bội số 0,906; (3) độ rộng **−1** vì 91/206=0,442≤0,67; (4) chất lượng **0** do phiên đi ngang và |−0,83|<2 điểm, KHÔNG dùng tỷ lệ top5; (5) ngoại KHỚP **0** do thiếu chuỗi; (6) phân phối **−1** vì 7 phiên còn hiệu lực ≥5; (7) phái sinh/vĩ mô **0** vì không có xác nhận basis 3 ngày hoặc vĩ mô bất lợi rõ đúng mốc. **TỔNG −3/7**.
- **Cổng mềm:** giá ở dưới kháng cự gần 1.689,62 (đóng 19/11, cách 0,05%) và mốc tâm lý 1.700,00; giá gần kháng cự ≤1,5%; không gán cờ `xanh điểm đỏ mã` khi VNINDEX đang giảm.
- **CHẶN CỨNG mới ĐÃ KIỂM:** **7 phân phối còn hiệu lực/25 phiên ≥6**, kéo trạng thái KHÔNG; không tự suy giảm vị thế hàng loạt. Chặn xả cuối phiên không thấy vì đóng 1.688,79 nằm rất xa phía trên đáy 1.666,41 và khớp 0,906×TB20; giá cao giữa nguồn có lệch 0,39 điểm nhưng không ảnh hưởng đánh giá này. Các chặn cứng ngoại KHỚP/5 phiên và mốc vô hiệu gốc **KHÔNG KIỂM ĐƯỢC**, không coi đã gỡ.
- **Ba bước ĐẦY ĐỦ:** thô **KHÔNG theo dòng 1 (có chặn cứng ≥6 phân phối)** → trần nền **XẤU** vẫn **KHÔNG** → bỏ bước chống đảo chiều vì không có Sổ gốc → **KHÔNG dòng 1**.
- **Hành động:** không mở mua mới; không tăng margin; giảm dần phần yếu theo điểm dừng lỗ từng cổ phiếu, ưu tiên bảo vệ vốn, không bán tháo máy móc. Tỷ trọng cổ phiếu định hướng **≤20%**, chỉ là khung tham khảo của dòng 1, không phải lệnh phân bổ cho mọi tài khoản. Vùng mua mới **KHÔNG ÁP DỤNG**. R:R chỉ số **KHÔNG ÁP DỤNG** vì không có mốc vô hiệu đang hiệu lực do người dùng dán từ Sổ gốc.

## IV. Mốc giá, ngành, ba kịch bản NẾU–THÌ

- **Hỗ trợ kiểm định gần:** **1.666,41**, đáy 20/11 được VNIndex.ai + nmquan ghi đúng. **Không** tự coi đây là mốc vô hiệu từ Sổ gốc.
- **Kháng cự rất gần:** **1.689,62** là đóng cửa 19/11; **1.700,00** là số tròn tâm lý đã mất. Cao 20/11 có số 1.688,79 ở VNIndex.ai và 1.689,18 ở VNSignal; số cao chính xác chưa phân xử, không dùng làm mốc.
- **Kháng cự xu hướng:** MA20 **1.730,89**, MA50 **1.748,05** tự tính. Hỗ trợ sâu hơn **không tự đặt** nếu thiếu mốc có xuất xứ.
- **TỐT — THẤP:** NẾU đóng trên 1.700,00, rồi MA20 1.730,89 với thanh khoản KHỚP/độ rộng được xác minh cải thiện và phân phối hiệu lực còn ≤5 để gỡ chặn cứng, THÌ chạy lại ba bước; không tự cho phép mua đến khi trạng thái chốt CÓ.
- **CƠ SỞ — TRUNG BÌNH:** NẾU giữ trên vùng thấp phiên 1.666,41 nhưng vẫn dưới 1.700/MA20, THÌ quản trị vị thế đang giữ theo điểm dừng lỗ mã, không mở mua mới.
- **XẤU — CAO (định tính):** NẾU đóng dưới 1.666,41 và đa số cổ phiếu tiếp tục giảm, THÌ rà các mã mất nền, ưu tiên xử lý phần vi phạm dừng lỗ riêng và giảm đòn bẩy, không bình quân giá xuống. Không ghi % xác suất.

**Bản đồ ngành có bằng chứng:** HOSE công nghệ (VNIT) −1,60%, công nghiệp (VNIND) −0,77%, sức giá yếu, ngân hàng phân hóa (VCB/MBB/VPB giảm, TCB/STB tăng). Năng lượng (VNENE) +1,22%, bất động sản (VNREAL) +0,35% được hỗ trợ bởi một số mã trụ, chưa có bảng cùng phương pháp `giá + KHỚP + ngoại` theo cả ngành nên **không khẳng định tiền ròng VÀO/RA**; **chưa có nhóm dẫn dắt rõ**. Khối ngoại bán ròng HOSE **tổng −841 tỷ**, tập trung bán FPT/ACB/HDB, mua POW/TCH; đây là số tổng, chưa phải chuỗi KHỚP.

## V. Nhật ký thử nguồn thiếu/chênh

| Ô | Nguồn đã mở và lý do giới hạn |
|---|---|
| KHỚP chính thức 10.809 tỷ | HOSE đầy đủ (10.809); BSC 10.769 rổ VNINDEX; nmquan 10.667,7 theo chuẩn hóa riêng; FireAnt trang khóa EOD 10.681; không ghép làm 2 nguồn cùng số |
| Cao phiên 20/11 | VNIndex.ai 1.688,79; VNSignal 1.689,18; nmquan ghi 1.688,79; sự lệch không giải thích hết; không ghi mốc cao như giá xác minh tuyệt đối |
| Ngoại KHỚP 5 phiên | HOSE bảng tổng ngày; BSC tổng/chuỗi bốn ngày tổng; VNIndex.ai ước tính; nmquan là tổng gồm thỏa thuận; không có chuỗi KHỚP đủ gốc |
| Basis phái sinh | BSC nhận định hợp đồng nhưng không có chuỗi 3 ngày và lịch rollover HNX cho kỳ tháng 12; MBS chỉ ghi kỳ 19/11, bỏ ngưỡng nếu không chắc |
| MA200 | VNIndex.ai 60 giá; nmquan 30 hàng; VNSignal 20 hàng; không đủ 200 một gốc |
| Sổ gốc/chặn mang sang | Người dùng không dán Sổ; báo cáo đã đăng không được tự coi Sổ. Không kiểm được tồn tại/gỡ chặn khác từ các phiên trước |
| Lịch sự kiện khác | Tài chính Việt Nam/SSI ghi ETF 13/11, MBS/HNX đáo hạn 19/11; chưa tìm được lịch đầy đủ tất cả các quỹ, nếu có sự kiện ngày ứng viên cần sửa đếm trước khi nâng trạng thái |

## VI. Tự kiểm 20 tiêu chí

| # | Kết quả | Ghi chú |
|---|---|---|
|1|ĐẠT|Ngày phân tích có phiên, HOSE công bố sau phiên ngày 20/11|
|2|ĐẠT|Không dùng dữ liệu phiên sau|
|3|ĐẠT|Mọi số lõi trích bảng đã mở HOSE/VNDIRECT/nmquan|
|4|ĐẠT|Nguồn URL thực mở; PDF BSC truy xuất một phần, số từ HOSE là nguồn chính|
|5|ĐẠT CÓ GIỚI HẠN|Khớp chính xác HOSE 1 NGUỒN, nguồn khác phạm vi|
|6|ĐẠT|Nhật ký nguồn và giới hạn cho các số còn thiếu|
|7|ĐẠT|60 giá một gốc, 30 KHỚP một gốc; phép tính bằng công cụ|
|8|ĐẠT|Số web/Zalo có trong hồ sơ hoặc phép TỰ TÍNH|
|9|ĐẠT|Không sửa thầm Sổ người dùng (không có)|
|10|ĐẠT|20/11 theo yêu cầu|
|11|ĐẠT|ĐẦY ĐỦ đủ năm chỉ báo|
|12|ĐẠT|Nền XẤU vì dưới MA50 và MA20 dốc xuống; MA200 thiếu có nhãn|
|13|ĐẠT|7 yếu tố −3/7, đi ngang/|Δ|<2 không dùng top5|
|14|ĐẠT CÓ GIỚI HẠN|Có chặn cứng mới 7 phân phối; chặn gốc thiếu Sổ chưa quét đủ|
|15|ĐẠT|Ba bước KHÔNG dòng 1|
|16|ĐẠT|Không viết vùng mua mới|
|17|ĐẠT CÓ GIỚI HẠN|Hỗ trợ/cản có xuất xứ, R:R không áp dụng do thiếu Sổ|
|18|ĐẠT CÓ GIỚI HẠN|Không tuyên bố tiền ròng ngành khi thiếu khớp/ngoại từng nhóm|
|19|ĐẠT|Nhất quán web/Zalo, không sửa cấu trúc trang|
|20|KHÔNG ĐẠT HOÀN TOÀN|Không có Sổ gốc; chỉ tạo dòng 20/11 và Phần B. Có bảng lịch sử 30 hàng để người dùng tự khởi tạo, nhưng chưa được người dùng dán làm Sổ|

## VII. Sổ bổ sung phiên (không chép lịch sử)

```
=== SỔ DỮ LIỆU VNINDEX — đến phiên 20/11/2026 ===
PHẦN A — DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng HOSE KHỚP;VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
20/11/2026;1688,79;;1666,41;-0,05;10809;91;206;65;;1786,84;;;Không;ĐÃ ĐỐI CHIẾU: đóng/%, thấp, độ rộng, VN30; 1 NGUỒN: KHỚP HOSE toàn sàn 10809; CHƯA XÁC MINH: cao, KN KHỚP, basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG — dòng 1, −3/7
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU; MA20 1730,89; MA50 1748,05; dốc MA20/5 −5,51; MA200 chưa có
Mốc vô hiệu đang hiệu lực: KHÔNG KIỂM ĐƯỢC vì không có Sổ gốc
Kháng cự: 1689,62 (đóng 19/11), 1700,00 (số tròn), MA20 1730,89
Hỗ trợ: 1666,41 (đáy 20/11), chưa công bố thành mốc vô hiệu
Chặn cứng đang hiệu lực: 7 phân phối/25 ≥6 (chưa gỡ; điều kiện gỡ còn ≤5); chặn gốc khác KHÔNG KIỂM ĐƯỢC
Phiên phân phối còn hiệu lực: 19/10–1689,84;29/10–1755,61;02/11–1710,72;06/11–1725,36;12/11–1734,75;17/11–1726,72;18/11–1703,01
Khối ngoại KHỚP 5 phiên: KHÔNG KIỂM ĐƯỢC
Basis âm hơn 1% VN30: KHÔNG KIỂM ĐƯỢC
PHẦN C — ĐÍNH CHÍNH
Không có dòng đính chính vì không có Sổ gốc.
```

**Phạm vi cập nhật website:** chỉ bổ sung `src/data/daily-insights-20261120.js` và một dòng import trong `src/index.js`. Không sửa HTML/CSS/menu, layout, vùng mua, target, stoploss từng mã hoặc các báo cáo lịch sử. Docs nội bộ không nạp lên website.
