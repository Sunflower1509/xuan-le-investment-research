# HỒ SƠ NGUỒN VN-INDEX — PHIÊN 16/11/2026 — QUY TẮC v3.3.1

**Phiên phân tích:** 16/11/2026 (thứ Hai, đã có giao dịch); **ngày thực hiện:** 16/11/2026 sau phiên; **mốc cắt:** kết thúc 16/11 theo giờ Việt Nam, không dùng diễn biến các phiên sau. Bài xuất bản trong ngày được dùng chỉ để xác minh dữ liệu phiên này. **Không có Sổ dữ liệu tự lưu do người dùng dán**; không lén coi nhật ký nguồn/website cũ là Sổ gốc.

Tài liệu quy tắc đã đọc ba lượt từ docs/prompt-nhan-dinh-vnindex-v3.md, tiêu đề v3.3.1, SHA d3776d82a27f643bdc40b13729f564003417e2d0. Lượt 1: cổng dữ liệu, 2 nguồn, phạm vi KHỚP và nhật ký; lượt 2: 5 chỉ số, 7 yếu tố, phân phối/25, veto, 3 bước; lượt 3: định dạng web/Zalo, không sửa bố cục, Sổ và tự kiểm 20 mục. Tệp đính kèm cùng tên chưa hiện riêng trong Files ở lượt này; quy tắc trong repository là bản gốc có thể mở đang điều khiển website.

## I. Bảng nguồn và khác biệt phạm vi

| Số liệu | Giá trị / phạm vi | Nguồn trực tiếp đã mở (trích ngắn từ bảng thật) | Đối chiếu và giới hạn | Nhãn |
|---|---|---|---|---|
| VNINDEX đóng / thay đổi | 1.736,89, +1,96, +0,11% | HOSE tổng hợp 16/11 trên CafeF CDN, dòng "VNINDEX 1,736.89 1.96 0.11"; https://cafefnew.mediacdn.vn/download/161126/hose-iem-tin-giao-dich-ngay-16-11-2026-0.pdf | VNIndex.ai 16/11 "1.736,89 điểm+1,96 (+0,11%)" https://vnindex.ai/vnindex-hom-nay; Vietstock 16/11 "tăng 1.96 điểm (+0.11%), lên mức 1,736.89" https://fili.vn/2026/11/nhip-dap-thi-truong-1611-thanh-khoan-tiep-tuc-can-kiet-vn-index-van-trong-the-giang-co-1636-1515036.htm | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.733,71 / 1.753,01 / 1.733,71 | VNIndex.ai "Mở cửa 1.733,71" "Cao nhất 1.753,01" "Thấp nhất 1.733,71" | nmquan dòng 16-11: "1.733,71 | 1.753,01 | 1.733,71"; https://nmquan.vn/data/chi-so/vn-index/lich-su | ĐÃ ĐỐI CHIẾU |
| Khớp HOSE — chỉ số CHÍNH THỨC | 8.587 tỷ (453.636.542 chứng khoán), toàn sàn | HOSE bản Tổng hợp giao dịch 16/11 mục "Khớp lệnh ... 8,587", trên PDF CafeF CDN ở URL trên | Vietstock cùng phiên "hơn 8.5 ngàn tỷ đồng" (làm tròn). Không đồng nhất tuyệt đối với nmquan vì phạm vi chuẩn hóa khác | ĐÃ ĐỐI CHIẾU đến độ làm tròn |
| Khớp HOSE — CHUỖI MỘT GỐC để tính TB20/phân phối | **8.524,4 tỷ** HOSE gồm ETF/CCQ, không thỏa thuận | nmquan cột "GT khớp lệnh (tỉ)", 16-11: "8.524,4"; https://nmquan.vn/data/chi-so/vn-index/lich-su | HOSE 8.587 tỷ (lệch 62,6 tỷ), Vietstock hơn 8.500 tỷ; dùng nmquan **chỉ trong các phép tính cùng gốc**. Không giả định lệch đã giải thích hoàn toàn | **1 NGUỒN** cho số chi tiết |
| Tổng giao dịch, có thỏa thuận | HOSE 11.923 tỷ, thỏa thuận 3.337 tỷ | HOSE PDF: "Thỏa thuận ... 3,337" và "Tổng ... 11,923" | VNIndex.ai báo 11,88 nghìn tỷ trong rổ theo phương pháp riêng, nmquan tổng 11.860,9 tỷ; **KHÔNG dùng tổng cho TB20** | Có nguồn HOSE, phạm vi khác |
| Độ rộng HOSE **chỉ cổ phiếu có khớp** (nmquan) | 102 tăng / 220 giảm / 51 đứng, không ETF/CCQ | nmquan dòng 16-11: "... 102 | 220 | 51 | 4 | 4 ..." | VNDIRECT Finfo trên website 97/216/51 rổ khác; VNIndex.ai 100/217/87 rổ 404 mã khác phạm vi; Index.vn 101/220/51 cách đếm hơi khác. Không ép khớp | **1 NGUỒN** đúng phạm vi đã chọn |
| VN30 | 1.844,25; −0,66; −0,04% | HOSE PDF "VN30 1,844.25 -0.66 -0.04" | taichinh.com 16/11 "VN30 1.844,25 ... −0,04%" https://taichinh.com/chung-khoan; VNDIRECT Finfo EOD giống | ĐÃ ĐỐI CHIẾU |
| VNMIDCAP | 1.841,64; −22,53; −1,21% | HOSE PDF "VNMIDCAP 1,841.64 -22.53 -1.21" | taichinh.com 16/11 "VNMidcap 1.841,64 ... −1,21%" | ĐÃ ĐỐI CHIẾU |
| VNSMALLCAP | 1.204,89; −12,03; −0,99% | HOSE PDF "VNSMALLCAP 1,204.89 -12.03 -0.99" | Không có nguồn thứ hai cùng chỉ số tại hai trang taichinh.com và VNIndex.ai | **1 NGUỒN** |
| HNX-Index | 254,91, −0,07, −0,03% | Vietstock sau phiên "giảm 0.07 điểm (-0.03%), xuống mức 254.91" | VNDIRECT Finfo trong src/data/research-data.js EOD 16/11; đối chiếu | ĐÃ ĐỐI CHIẾU |
| Top năm kéo tăng | VIC +8,00; MCH +1,75; DMX +0,63; LPB +0,55; VHM +0,51 điểm | VNIndex.ai 16/11 bảng "Kéo chỉ số tăng", tổng +11,44 điểm; https://vnindex.ai/vnindex-hom-nay | Vietstock độc lập ghi VIC/MCH/DMX/LPB >11,31 điểm theo cách tính của họ; không ghép bảng | 1 NGUỒN cho từng điểm |
| Top năm kéo giảm | TCB −1,20; VCB −1,03; VPB −0,82; TCX −0,48; CTG −0,48 | VNIndex.ai 16/11 bảng "Ghì chỉ số giảm" | Vietstock nêu VCB/VPB/TCB/CTG nhưng không bảng năm mã cùng phương pháp | 1 NGUỒN |
| Ngành | HOSE VNREAL +1,34%, VNCONS +1,06%; VNFIN −0,84%, VNIND −1,56%, VNIT −1,13%, VNENE −0,10% | HOSE PDF bảng chỉ số ngành 16/11 | Vietstock 16/11 ghi bất động sản +1,31%, tiêu dùng thiết yếu +1,29% với hệ ngành khác; không trộn | ĐÃ ĐỐI CHIẾU về xu hướng, giá trị chính xác theo HOSE |
| Khối ngoại **TỔNG** HOSE | HOSE PDF khoảng +21 tỷ, nmquan +10,2 tỷ, Index.vn gần +21 | HOSE PDF "GTGD ... 1,417 ... 1,396 ... 21"; https://cafefnew.mediacdn.vn/download/161126/hose-iem-tin-giao-dich-ngay-16-11-2026-0.pdf | nmquan 16-11 tổng "+10,2"; Index.vn 16/11 "mua ròng gần 21 tỷ đồng trên HOSE"; chênh phương pháp, không trộn, KHÔNG thay khớp | CHỈ tổng, không dùng yếu tố ngoại |
| **KHỚP NGOẠI HOSE / tổng khớp 5 phiên** | Chưa có chuỗi tin cậy cùng phương pháp | nmquan cột tổng gồm thỏa thuận; VNSignal báo tổng 3 sàn lúc 14:35; Vietstock/Index.vn báo tổng HOSE; hodl.vn tạm tính theo mã lúc phiên, chưa khóa như sổ khớp | Không suy, không kích hoạt veto ngoại | CHƯA XÁC MINH |
| Tự doanh HOSE | −33,7 tỷ, bao gồm khớp và thỏa thuận | nmquan dòng 16-11 "191,1 | 224,8 | −33,7", cột tự doanh | Trang Stockbiz trước đó chỉ hiển thị phiên cũ; không là dòng tiền KHỚP | 1 NGUỒN, phụ |
| VN30F1M 16/11 | Các nguồn chưa đồng nhất: Stockbiz 1.855,1, Mofi 1.850,2; HNX trang giao dịch chung hiển thị 1.851 nhưng chưa khóa được ngày ứng với hàng | Stockbiz https://stockbiz.vn/ma-chung-khoan/VN30F1M/giao-dich; Mofi https://mofi.vn/phai-sinh; HNX https://cms.hnx.vn/vi-vn/m-phai-sinh/hop-dong-tuong-lai-cscp.html | **Không công bố basis 16/11** do chưa phân xử giá đóng, điểm yếu tố 7 =0. Tháng đáo hạn 11/2026, lịch dự kiến 19/11 theo DSC và Mofi; cần lịch HNX đúng hợp đồng | CHƯA XÁC MINH |
| Cờ sự kiện trong 25 phiên | Đáo hạn phái sinh ngày 15/10 đã được xác nhận; kỳ ETF cơ cấu 13/11 đã có chứng cứ từ SSI Research/Thời báo Tài chính và diễn biến ATC; 16/11 không có căn cứ cho thấy ETF giao dịch cơ cấu ngay phiên này | MBS bản tin ngày 15/10, https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-16-10-2026-kho-khan-van-deo-bam/; Thời báo Tài chính bài trước 13/11, https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html | Lịch ETF của mọi quỹ trong 25 phiên chưa kiểm hết; nếu có cờ chính thức áp dụng phải tính lại | Cờ 15/10 đã đối chiếu; phần còn lại giới hạn kiểm chứng |

**Phạm vi:** nmquan khớp = HOSE all mã đang niêm yết gồm ETF/CCQ, loại thỏa thuận; độ rộng nmquan chỉ cổ phiếu có khớp, không ETF/CCQ. HOSE PDF tổng khớp 8.587 vs nmquan 8.524,4: **chênh 62,6 tỷ (0,73%)**, không xóa bằng suy đoán. Mọi phép tính TB20 và phân phối sử dụng **một gốc nmquan**, không ghép số HOSE PDF vào.

## II. Chuỗi gốc và kết quả tính bằng Python

**Gốc (a1) cho trung bình động:** VNIndex.ai https://vnindex.ai/vnindex-hom-nay, **60 giá đóng thực đọc**, từ **20/08/2026 đến 16/11/2026** theo thứ tự giảm dần. Neo 1: "16/11/2026 | 1.736,89 | +1,96"; neo 2: "13/11/2026 | 1.734,93 | +0,18". Giá 16/11 trùng HOSE chính thức. Cột Giá trị GD của nguồn này gồm thỏa thuận => KHÔNG dùng tính KHỚP.

**Gốc (a2) cho thanh khoản và phân phối:** nmquan https://nmquan.vn/data/chi-so/vn-index/lich-su, **30 hàng thực đọc**, từ **06/10/2026 đến 16/11/2026**. Neo 1: "16-11-2026 | 1.736,89 | ▲ +1,96 | ▲ +0,11% ... 8.524,4"; neo 2: "13-11-2026 | 1.734,93 | ▲ +0,18 | ▲ +0,01% ... 9.788,4". Giá đóng dòng 16/11 trùng hai nguồn lõi HOSE/VNIndex.ai. KHỚP phân biệt rõ với thỏa thuận, không ghép hai bảng trong một phép tính.

| Công thức, cửa sổ | Kết quả (TỰ TÍNH bằng Python) |
|---|---|
| MA20 = trung bình 20 đóng mới nhất từ 20/10 đến 16/11, gồm 16/11 | **1.738,7515 → 1.738,75** |
| MA50 = trung bình 50 đóng từ 08/09 đến 16/11, gồm 16/11 | **1.757,5308 → 1.757,53** |
| MA20 năm phiên trước = trung bình 20 đóng từ 13/10 đến 09/11 | **1.729,844** |
| Dốc MA20 trong 5 phiên = 1.738,7515 − 1.729,844 | **+8,9075 → +8,91 điểm** |
| TB20 KHỚP HOSE 20 phiên trước từ 19/10 đến 13/11 | **12.491,04 tỷ** |
| Bội số KHỚP = 8.524,4 / 12.491,04 | **0,682441 → 0,682×TB20** |
| Khớp so phiên 13/11 = 8.524,4 / 9.788,4 −1 | **−12,91%** |
| Độ rộng cùng nmquan = 102 tăng / 220 giảm | **0,463636 → 0,464** |
| Vị trí đóng trong biên phiên = (1.736,89−1.733,71)/(1.753,01−1.733,71) | **16,48%**, 1/3 dưới |
| Top5 kéo tăng cùng VNIndex.ai = 8,00 +1,75 +0,63 +0,55 +0,51 | **11,44 điểm**, nhưng thay đổi VNINDEX chỉ +1,96 (<2): **CẤM tỷ lệ top5** theo mục 0.6 |
| Phiên phân phối trong 25 phiên từ 13/10 đến 16/11; dùng 26 hàng tới 12/10 để so phiên liền trước | 6 ứng viên **15/10, 19/10, 29/10, 02/11, 06/11, 12/11**; **loại 15/10 là đáo hạn** ⇒ **5 phiên hiệu lực** |
| Hiệu lực +5% | 19/10 đóng 1.689,84; cần 1.774,332 để hết hiệu lực, cao nhất đóng sau đó 1.774,15 không đạt. Các ứng viên còn lại cũng chưa tăng ≥5%; chưa qua 25 phiên | **5 còn hiệu lực** |
| Đáy 20 phiên trước (không tính 16/11), nếu dùng nmquan OHLC | **chưa tính thành chỉ báo dùng trong báo cáo**; yếu tố 1 đã thỏa điều kiện dưới MA20 và MA50 | KHÔNG CẦN DÙNG |
| MA200 | bảng dài nhất mở đủ 60 giá, không đủ 200; bỏ vế MA200 theo Prompt | CHƯA XÁC MINH, KHÔNG quyết định chế độ |

## III. Cổng dữ liệu và trạng thái theo đúng II.H

- **Cổng số lõi: ĐẠT có giới hạn 1 NGUỒN ở khớp chi tiết và phạm vi đếm độ rộng**. Điểm/%, cao/thấp và VN30 từ HOSE + hai đơn vị khác. Khớp chính thức HOSE đối chiếu Vietstock mức làm tròn, nhưng TB20 dùng nmquan riêng. Không gọi nguồn khác phạm vi là trùng chính xác.
- **Chế độ ĐẦY ĐỦ**: đủ MA20, MA50, dốc MA20/5, TB20 KHỚP, phân phối/25. MA200 chưa có; quy tắc cho phép đánh giá nền mà không cần MA200.
- **Nền TRUNG TÍNH, trần CHỜ**: 1.736,89 dưới MA20 1.738,75 và MA50 1.757,53, MA20 dốc lên +8,91. Với MA200 không có, chưa đủ điều kiện XẤU (đòi dưới MA50 và dốc xuống hoặc dưới MA200); không TỐT vì dưới MA50.
- **7 điểm**: (1) Giá/MA **−1**, dưới MA20/MA50; (2) Thanh khoản **−1**, phiên tăng +0,11% với 0,682×TB20 <0,8, không có bằng chứng cờ cơ cấu ngày 16; (3) Độ rộng **−1**, 102/220=0,464≤0,67; (4) Chất lượng **0**, chỉ số +1,96 điểm <2 điểm nên tỷ lệ top5 bị cấm, không có đúng một nhóm ngành duy nhất gánh; (5) Ngoại KHỚP **0**, thiếu chuỗi HOSE 5 phiên; (6) Phân phối **−1**, 5 phân phối/25≥5; (7) Phái sinh/vĩ mô **0**, giá VN30F1M chưa phân xử, ngày 16/11 nằm gần tuần đáo hạn tháng 11, không dùng basis khi lịch chính thức chưa khóa. **Tổng = −4/7.**
- **Chặn mềm đã kiểm:** xanh điểm (1.736,89 +0,11%) nhưng giảm 220 > tăng 102; giá đóng sát trên cụm cản MA20 1.738,75/đỉnh 1.753,01, chưa vượt. Yếu tố thanh khoản −1 còn là chặn mềm. **Không tự coi VIC kéo điểm là chặn cứng.**
- **Chặn cứng mới:** vị trí đóng 1/3 dưới nhưng bội số 0,682<1 nên **không xả cuối theo định nghĩa**; xanh điểm/đỏ mã có nhưng 0,682<1,2 nên không chặn cứng; phân phối 5<6; ngoại KHỚP 5 phiên + dưới MA50 KHÔNG KIỂM ĐƯỢC; mốc vô hiệu từ Sổ gốc KHÔNG KIỂM ĐƯỢC. Chặn cứng mang sang khác từ Sổ gốc KHÔNG KIỂM ĐƯỢC, không tuyên bố đã gỡ.
- **Ba bước**: trạng thái thô **KHÔNG, bảng ĐẦY ĐỦ dòng 2 (điểm−4≤−2)** → sau trần nền TRUNG TÍNH vẫn **KHÔNG** → không áp dụng chống đảo chiều vì không có Sổ gốc → trạng thái **KHÔNG, dòng 2**. Không kết luận KHÔNG vì dữ liệu thiếu.
- **Quản trị**: không mở mua mới, không tăng margin; rà mã yếu vi phạm mốc dừng lỗ riêng, tỷ trọng cổ phiếu định hướng ≤20% theo dòng 2 (chỉ khung tham khảo, không bán tháo). Vùng mua mới **KHÔNG ÁP DỤNG**. R:R chỉ số **KHÔNG ÁP DỤNG**, thiếu mốc vô hiệu đang hiệu lực từ Sổ và không có kịch bản mua.
- **Ngành**: HOSE VNREAL +1,34%, VNCONS +1,06% là sức giá tập trung vào vài trụ/nhóm, không tự gọi tiền ròng vào ngành; VNFIN −0,84%, VNIND −1,56%, VNIT −1,13% yếu; VN30 −0,04%, VNMID −1,21%, VNSML −0,99% phản ánh sự kém đồng thuận của thị trường.

## IV. Mốc có xuất xứ, kịch bản

- **Hỗ trợ gần:** đáy phiên 16/11 **1.733,71** (VNIndex.ai và nmquan). Tiếp theo đáy phiên 13/11 **1.724,03**; đáy 09/11 **1.701,90**.
- **Cản sát:** **1.738,75** (MA20 tự tính), **1.753,01** (đỉnh 16/11), **1.757,53** (MA50 tự tính); không tự đặt mốc không xuất xứ.
- Mốc vô hiệu **đang hiệu lực từ Sổ**: KHÔNG KIỂM ĐƯỢC. Không tự biến 1.733,71 thành stop hiện hành; chỉ là mốc kiểm tra rủi ro ngày sau.
- **TỐT (khả năng THẤP):** đóng vượt 1.753,01 và MA50 1.757,53, KHỚP/TB20 ≥1,2, độ rộng tăng/giảm ≥1,5, số phân phối ≤4, các chặn được kiểm đủ; THÌ chạy lại 3 bước, chưa mua cho đến khi trạng thái chốt CÓ.
- **CƠ SỞ (khả năng TRUNG BÌNH):** giữ trên đáy 1.733,71, hồi không vượt MA50, bội số khớp thấp; THÌ giữ các mã chưa phá nền, không mua thêm.
- **XẤU (khả năng CAO định tính theo điểm−4):** đóng dưới 1.733,71 rồi kiểm định 1.724,03/1.701,90, độ rộng vẫn yếu; THÌ giảm vị thế yếu đúng stop mã, không bình quân giá xuống. Không có tỷ lệ xác suất định lượng.

## V. Nhật ký thử đối chiếu 1 NGUỒN / CHƯA XÁC MINH

| Nội dung | Những trang đã đọc / lý do chưa dùng |
|---|---|
| KHỚP chính xác nmquan 8.524,4 | nmquan (có); HOSE PDF (có 8.587 nhưng chênh 62,6); Vietstock (hơn 8.500, số làm tròn), VNIndex.ai 11,88 nghìn tỷ là **tổng** không phải khớp |
| Độ rộng nmquan 102/220/51 | nmquan (có, chỉ cổ phiếu có khớp); VNDIRECT EOD 97/216/51 (khác cách đếm); VNIndex.ai 100/217/87 trong rổ 404 mã (khác phạm vi); Index.vn 101/220/51 (phương pháp khác) |
| VNSMALLCAP 1.204,89 | HOSE PDF có; taichinh.com không công bố VNSMALLCAP; VNIndex.ai không có dòng VNSMALLCAP; Vietstock bài sau phiên chỉ VN30/HNX (chưa đối chiếu được dòng cùng phạm vi) |
| Top5 điểm | VNIndex.ai có bảng; Vietstock có 4 mã và >11,31 điểm không cùng mẫu top5; báo sáng Index.vn là phiên sáng, không dùng để khóa sau phiên |
| Tự doanh HOSE | nmquan có tổng −33,7; Stockbiz hiển thị chậm, trang sau phiên chưa xác minh cùng số; HOSE PDF chỉ dữ liệu tự doanh không đầy đủ theo kỳ |
| Ngoại **KHỚP** HOSE 5 phiên | nmquan số TỔNG có thỏa thuận; Vietstock/Index.vn là tổng HOSE; VNSignal toàn 3 sàn; hodl.vn có số provisional nhưng không cùng kỳ khóa; không có gốc chắc chắn KHỚP liên tiếp |
| Basis VN30F1M | Stockbiz 1.855,1 EOD; Mofi 1.850,2 EOD; HNX có 1.851 trên trang nhưng không xác định rõ ngày dữ liệu từ trang đã mở; không chọn giá tiện tay; giá basis CHƯA XÁC MINH |
| MA200 | VNIndex.ai 60 giá; nmquan 30 dòng; VNSignal 20 phiên, không đủ một chuỗi 200 |
| Lịch ETF ngoài 13/11 và phái sinh 19/11 | Thời báo Tài chính dẫn SSI Research xác minh lịch dự kiến ETF 13/11; Yuanta ghi hiệu lực 16/11 nhưng không ghi ETF giao dịch cơ cấu 16/11, https://finance.vietstock.vn/downloadedoc/22992; HNX có hợp đồng đáo hạn 2611 nhưng không khóa ngày cuối trong bảng đã mở; DSC/Mofi ghi 19/11, https://www.dsc.com.vn/kien-thuc/dao-han-phai-sinh-la-gi |
| Sổ gốc / chặn cứng mang sang | Không có Sổ người dùng gửi; bản log 13/11 chỉ là tài liệu kiểm toán không thay Sổ gốc; không tự đính chính lịch sử |

## VI. Bảng tự kiểm 20 mục

| # | Kết quả | Ghi chú |
|---|---|---|
|1|ĐẠT|16/11 có giao dịch, khóa sau phiên và đúng ngày|
|2|ĐẠT|Không dùng giao dịch ngày 17/11 trở đi|
|3|ĐẠT|Không dùng trí nhớ, nguồn số là trang thực mở|
|4|ĐẠT CÓ GIỚI HẠN|HOSE PDF đã mở nội dung; chế độ screenshot web bị hạn chế; bảng vẫn có dữ liệu chữ|
|5|ĐẠT CÓ GIỚI HẠN|Giá/% hai nguồn; KHỚP số chi tiết và độ rộng chỉ 1 nguồn; không tự nâng nhãn|
|6|ĐẠT|Nhật ký nhiều nguồn và lệch phạm vi|
|7|ĐẠT|60 giá, 30 KHỚP, mỗi phép dùng một chuỗi duy nhất; tính bằng Python|
|8|ĐẠT|Số trong báo cáo/web/Zalo đều ghi trong log hoặc là ngưỡng quy tắc|
|9|ĐẠT|Không chép hay sửa Sổ cũ|
|10|ĐẠT|Ngày theo lệnh 16/11|
|11|ĐẠT|ĐẦY ĐỦ năm chỉ số, MA200 thiếu không quyết định chế độ|
|12|ĐẠT|Nền TRUNG TÍNH tính đúng dốc lên và thiếu MA200|
|13|ĐẠT|7 yếu tố −4/7; index tăng 1,96 nên không dùng tỷ lệ top5|
|14|ĐẠT CÓ GIỚI HẠN|Veto lịch sử từ Sổ và ngoại KHỚP KHÔNG KIỂM ĐƯỢC|
|15|ĐẠT|KHÔNG dòng2 do điểm −4 đã kiểm; không do thiếu dữ liệu|
|16|ĐẠT|Không có vùng mua mới|
|17|ĐẠT CÓ GIỚI HẠN|Mốc có xuất xứ; R:R không áp dụng thiếu Sổ|
|18|ĐẠT|Chỉ nêu sức giá ngành, không suy tiền ròng ngành|
|19|ĐẠT|Số/trạng thái cùng website và Zalo; không sửa HTML/CSS|
|20|KHÔNG ĐẠT HOÀN TOÀN|Không có Sổ gốc để rà đủ chặn mang sang, không thể hoàn thành đầy đủ Phần B|

## VII. Bổ sung Sổ (chỉ dòng MỚI)

PHẦN A — Dòng ngày 16/11 mới; không chép dòng cũ:

Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng KHỚP HOSE;VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
16/11/2026;1736,89;1753,01;1733,71;+0,11;8524,4;102;220;51;;1844,25;;;Không phát sinh;Giá/%, OHLC/VN30 ĐÃ ĐỐI CHIẾU; KHỚP chi tiết và độ rộng 1 NGUỒN; ngoại KHỚP/derivatives CHƯA XÁC MINH

PHẦN B — Trạng thái mới KHÔNG, bảng ĐẦY ĐỦ dòng 2, điểm−4/7. Nền TRUNG TÍNH, MA20=1.738,75, MA50=1.757,53, dốc +8,91, MA200 chưa có. KHỚP 8.524,4; TB20 12.491,04; bội 0,682. Phân phối 5 phiên: 19/10,29/10,02/11,06/11,12/11 sau loại 15/10 đáo hạn. Chặn cứng từ Sổ gốc và mốc vô hiệu KHÔNG KIỂM ĐƯỢC; ngoại KHỚP 5 phiên KHÔNG KIỂM ĐƯỢC. Hỗ trợ 1.733,71 và 1.724,03; kháng cự 1.753,01 và MA50 1.757,53. R:R KHÔNG ÁP DỤNG.

PHẦN C — Không có Sổ gốc để đính chính; không tạo đính chính giả.

**Bảo toàn cấu trúc:** chỉ thêm module dữ liệu 16/11 và import sau 13/11 trong src/index.js, không sửa HTML/CSS, khu vực, vùng mua, mục tiêu hay stoploss từng mã.
