# HỒ SƠ KIỂM CHỨNG VN-INDEX — PHIÊN 11/11/2026 — v3.3.1

Ngày phân tích: 11/11/2026 (phiên HOSE có giao dịch, đóng +3,83). Ngày thực hiện: 11/11/2026 sau giờ giao dịch. Mốc cắt: chỉ số liệu của phiên 11/11 và công bố trước thời điểm lập báo cáo tối ngày 11/11 giờ Việt Nam. Không sử dụng phiên sau. Không có Sổ dữ liệu tự lưu do người dùng dán; không thay Sổ bằng báo cáo phiên 10/11 đã lưu trong repository.

## I. Rà prompt ba lượt

1. Lượt nguồn: cổng dữ liệu, độc lập nguồn, phân biệt khớp lệnh và tổng giao dịch, nhãn dữ liệu và nhật ký tìm kiếm.
2. Lượt quyết định: MA20/50/200, dốc MA20/5, TB20 khớp, phiên phân phối, bảy yếu tố, chặn cứng/mềm, quy đổi trạng thái.
3. Lượt đầu ra: các mốc có xuất xứ, kịch bản NẾU–THÌ, giữ cấu trúc website, bài Zalo, Sổ và 20 mục tự kiểm.

## II. Nhật ký nguồn đã đọc toàn văn

| Mục | Giá trị, phạm vi | Nguồn 1 và trích nguyên văn | Nguồn 2 và trích nguyên văn | Nhãn |
|---|---|---|---|---|
| VNINDEX đóng/% | 1.746,90 / +3,83 / +0,22% | VNSignal bảng lịch sử 11/11: "1.746,9" "+3,83" "+0.22%", https://vnsignal.vn/chi-so/vnindex/lich-su-gia | Tuổi Trẻ 15:53 ngày 11/11: "3,83 điểm (0,22%), lên 1.746,90 điểm", https://tuoitre.vn/vn-index-chung-nhip-sau-phien-but-pha-thanh-khoan-am-dam-10026111115412924.htm | ĐÃ ĐỐI CHIẾU |
| Mở/cao/thấp | 1.742,67 / 1.751,57 / 1.734,25 | VNSignal bảng 11/11: "1.742,67" "1.751,57" "1.734,25" | VNIndex.ai 11/11: "Mở cửa 1.742,67", "Cao nhất 1.751,57", "Thấp nhất 1.734,25", https://vnindex.ai/vn-index/phien/11-11-2026 | ĐÃ ĐỐI CHIẾU |
| KHỚP VNINDEX/rổ cổ phiếu, không thỏa thuận | 9.946,44670919 tỷ | VNSignal 11/11: "9.946.446.709.190" tại https://vnsignal.vn/chi-so/vnindex/lich-su-gia | Dalink 11/11: "Giá trị khớp lệnh (tỷ đồng) 9.946" (làm tròn tới tỷ), https://dalink.net/thi-truong/chi-so/VNINDEX?range=1m; báo Hà Nội Mới cũng ghi 9.946,45 tỷ | ĐÃ ĐỐI CHIẾU với độ chính xác làm tròn nguồn 2 |
| KHỚP VNINDEX phiên 10/11 | 13.074,05166696 tỷ | VNSignal bảng 10/11: "13.074.051.666.960" | Hồ sơ đối chiếu ngày 10/11 trong docs/market-source-log-20261110.md dẫn VNDIRECT raw cùng số | ĐÃ ĐỐI CHIẾU |
| Độ rộng HOSE tập VNDIRECT | 134 tăng/154 giảm/76 đứng | Tài chính.com mục độ rộng 15:05: "154 giảm76 đứng134 tăng", https://taichinh.com/chung-khoan | Dữ liệu EOD Finfo khóa trong src/data/research-data.js, marketSession.breadth 134/154/76, https://github.com/Sunflower1509/xuan-le-investment-research/blob/main/src/data/research-data.js | ĐÃ ĐỐI CHIẾU |
| Độ rộng rổ rộng hơn | 136/155/113, 404 mã | VNIndex.ai 11/11 nêu "404 mã" và ba số; https://vnindex.ai/vn-index/phien/11-11-2026 | Không trộn tập này vào tập VNDIRECT 364 mã | 1 NGUỒN, khác phạm vi |
| Tổng giao dịch có thỏa thuận | khoảng 13.844,23 tỷ | Tuổi Trẻ 15:53 ngày 11/11: "13.844 tỉ đồng" | VNIndex.ai 11/11: "13,84 nghìn tỷ" | ĐÃ ĐỐI CHIẾU ở độ làm tròn; KHÔNG dùng cho TB20 khớp |
| VN30 | 1.855,27 / −5,66 / −0,30% | Tài chính.com ngày 11/11: "1.855,27 điểm" "−0,3%" | Tuổi Trẻ 11/11: "giảm 5,66 điểm (0,30%)" | ĐÃ ĐỐI CHIẾU |
| VNMID | 1.872,83 / −0,03% | Tài chính.com ngày 11/11: "1.872,83 điểm" | HOSE bản sao đã tìm thấy nhưng không mở toàn văn, không tự nâng nhãn | 1 NGUỒN |
| VNSML | chưa dùng số | HOSE bản sao không mở toàn văn | Chưa có nguồn độc lập trực tiếp | CHƯA XÁC MINH |
| Top5 kéo tăng điểm | VIC +4,81; VHM +0,76; GAS +0,62; VCB +0,61; BID +0,36 | VNIndex.ai 11/11 bảng điểm từng mã: https://vnindex.ai/vn-index/phien/11-11-2026 | Tuổi Trẻ ghi cùng nhóm nhưng VIC +5,21, VHM +0,86; sai khác phương pháp, không trộn điểm của hai bảng | 1 NGUỒN cho giá trị từng mã; hai nguồn cùng chứng minh kéo trụ |
| Giá ngành | BĐS +1,0%; thực phẩm −1,5%; dịch vụ tài chính −0,3%; bán lẻ +0,5% | VNIndex.ai 11/11 công bố gia quyền vốn hóa | Tuổi Trẻ 11/11 ghi giá nhiều mã trong BĐS/ngân hàng/chứng khoán; cách phân ngành khác nên không ép số | 1 NGUỒN cho tỷ lệ nhóm |
| Ngoại khớp HOSE và 5 phiên | không có chuỗi đủ đúng phạm vi | VNIndex.ai ghi ước tính, không phải bảng khớp giao dịch thực | Tuổi Trẻ ghi ròng 3 sàn; Stockbiz ghi tổng HOSE; cả hai không phải chuỗi khớp cùng phạm vi | CHƯA XÁC MINH |
| Tự doanh HOSE 11/11 | chưa dùng | Stockbiz phái sinh dữ liệu tự doanh mới đến 10/11, sai phiên | VNIndex.ai/Tuổi Trẻ không có bảng cùng phạm vi | CHƯA XÁC MINH |
| VN30F1M basis và đáo hạn | chưa dùng | Stockbiz phái sinh 11/11 tiêu đề ghi 1.848,3 nhưng bảng lịch sử ghi 1.846,3, lệch số | HNX không có bảng đúng phiên được mở để phân xử; không tự suy đáo hạn | CHƯA XÁC MINH |
| Lịch sự kiện | chưa xác minh cờ | chưa có thông báo gốc ETF/HNX đọc đủ | không tự đánh dấu có/không | CHƯA XÁC MINH |

**Ghi chú phạm vi:** dữ liệu VNDIRECT ghi rổ 364 mã 134/154/76; VNIndex.ai tính 404 mã 136/155/113. Khớp 9.946,44670919 tỷ là giá trị khớp rổ VNINDEX/VNSignal, không cộng thỏa thuận. Bản sao điểm tin HOSE được tìm trên Stockbiz nhưng mở thất bại, vì thế không đưa số liệu chưa đọc toàn văn vào kết quả. Dữ liệu EOD 134/134 mã của website đã được workflow chính thức khóa, xem https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/43002921554.

**Bổ sung đối chiếu cho các ô 1 NGUỒN:** bảng top5 điểm VNIndex.ai đã thử đối chiếu với (a) Tuổi Trẻ cùng phiên — có các mã nhưng điểm từng mã khác phương pháp; (b) Tài chính.com ngày 11/11 — không công bố bảng điểm đóng góp top5 cùng phạm vi. VNMID đã thử đối chiếu thêm Tuổi Trẻ (không công bố VNMID) và bản tin HOSE qua Stockbiz (không mở được). Nhóm ngành gia quyền đã thử với Tuổi Trẻ (khác hệ phân ngành) và Tài chính.com (không có bảng ngành cùng phương pháp). Không tự nâng nhãn 1 NGUỒN.

## III. Chuỗi giá cùng một gốc và phép tính bằng Python

Nguồn (a) = https://vnindex.ai/vnindex-hom-nay, mục "VN-Index 60 phiên gần nhất", **đã đọc đủ 60 hàng thực hiển thị** từ 17/08/2026 đến 11/11/2026. Hai hàng neo nguyên văn: "11/11/2026 | 1.746,90 | +3,83"; "10/11/2026 | 1.743,07 | +28,75". Hàng cuối: "17/08/2026 | 1.727,46". Giá cuối trùng số lõi đã đối chiếu.

- MA20 = trung bình 20 giá đóng mới nhất từ 15/10 đến 11/11 = **1.733,128** → hiển thị **1.733,13**, TỰ TÍNH.
- MA50 = trung bình 50 giá đóng mới nhất từ 03/09 đến 11/11 = **1.763,4482** → **1.763,45**, TỰ TÍNH.
- MA20 5 phiên trước = trung bình 20 giá đóng 08/10 đến 05/11 = **1.730,5755**. Độ dốc MA20/5 = 1733,128 − 1730,5755 = **+2,5525** → **+2,55 điểm**, TỰ TÍNH.
- Bội số thanh khoản KHỚP/TB20: **CHƯA XÁC MINH**, vì cột giá trị trong bảng 60 phiên VNIndex.ai gồm thỏa thuận; tuyệt đối không dùng.
- MA200: **CHƯA XÁC MINH** vì bảng chỉ có 60 hàng.
- Số phân phối/25: **CHƯA XÁC MINH** vì thiếu 26 giá trị KHỚP cùng một gốc; hồ sơ phiên 10/11 có kiểm toán riêng nhưng không thay cho Sổ gốc hoặc chuỗi 11/11 theo Prompt.
- Khớp ngày 11/11 so 10/11 = (9946,44670919/13074,05166696−1)×100 = **−23,92223%** → **−23,92%**, TỰ TÍNH từ hai hàng liền nhau VNSignal.
- Độ rộng = 134/154 = **0,8701**, TỰ TÍNH, không đủ ngưỡng +1 (1,5) hoặc −1 (0,67).
- Top5 từ một bảng VNIndex.ai = 4,81+0,76+0,62+0,61+0,36 = **7,16**; 7,16/3,83×100 = **186,95%** (có thể trên 100% vì phần mã còn lại đè điểm), TỰ TÍNH. Tuổi Trẻ dùng phương pháp khác, tổng 5 mã là 7,84; không ghép hai nguồn.
- Đóng cửa vị trí (1746,9−1734,25)/(1751,57−1734,25)×100 = **73,04%** biên độ, phía 1/3 trên.
- Kháng cự 1.751,57 (đỉnh phiên 11/11); 1.755,61 (đóng 29/10 từ bảng 60 phiên); 1.763,45 (MA50). Hỗ trợ 1.734,25 (đáy 11/11); 1.733,13 (MA20); đáy 09/11 1.701,90 (VNSignal).

## IV. Quy đổi trạng thái chính xác theo Prompt

Cổng lõi: **ĐẠT**. Chế độ **RÚT GỌN — thiếu chuỗi KHỚP đủ kỳ để tính TB20 và phiên phân phối/25; MA200 chưa xác minh.** Xu hướng nền **CHƯA ĐÁNH GIÁ**, đây chỉ là giới hạn dữ liệu. Chặn từ Sổ gốc **KHÔNG KIỂM ĐƯỢC**.

Điểm 7 yếu tố: (1) Giá/MA = 0, vì trên MA20 nhưng dưới MA50; (2) thanh khoản = 0, TB20 khớp thiếu; (3) độ rộng = 0, tỷ lệ 0,8701; (4) chất lượng = **−1**, top5 186,95% >70%; (5) ngoại = 0, thiếu chuỗi khớp 5 phiên; (6) phân phối = 0, thiếu chuỗi khớp 26 phiên; (7) phái sinh/vĩ mô = 0, basis không khóa. **Tổng = −1/7**.

Chặn mềm kiểm được: VNINDEX xanh nhưng 154 mã giảm nhiều hơn 134 mã tăng; dòng tiền tập trung trụ; chưa vượt cản 1.751,57 cách khoảng 0,27%. Chặn cứng phát sinh mới và chặn quá khứ từ Sổ: **KHÔNG KIỂM ĐƯỢC**, không khẳng định đã qua, không tự kích hoạt vì thiếu.

Ba bước: Trạng thái thô **KHÔNG (R3, điểm −1)** → sau trần nền CHƯA ĐÁNH GIÁ vẫn **KHÔNG** → chống đảo chiều **bỏ qua, không có Sổ gốc** → trạng thái cuối **KHÔNG (R3)**. Kết quả KHÔNG do **tập trung dòng tiền đã kiểm**, không do chuỗi thiếu. Tỷ trọng minh họa theo R3: hạ dần phần yếu để về **20–30% cổ phiếu**, không bán tháo; không tăng margin, không mua mới.

Mốc vô hiệu đang hiệu lực của Sổ gốc không có; **R:R không áp dụng**. Không ghi vùng mua mới theo mục VI.

## V. Bản đồ nhóm ngành và ba kịch bản

**Giá tăng nhưng chưa xác nhận tiền vào ròng toàn ngành:** bất động sản +1,0% gia quyền (VNIndex.ai) trong khi theo Tuổi Trẻ VIC +1,32%, VHM +0,81% đối nghịch KDH −2,52%, NVL −2,76%, DXG −0,88%, DIG −1,41%. Ngân hàng phân hóa: TPB +3,15%, SHB +2,29% trong khi VPB −1,11%, STB −1,72%. **Giá yếu:** thực phẩm −1,5%, dịch vụ tài chính −0,3% gia quyền. Không đủ thông tin giá+khớp+ngoại theo ngành để gọi tiền vào/ra ròng.

Kịch bản **TỐT (THẤP)**: đóng trên 1.751,57 rồi MA50 1.763,45, đồng thời xác minh thanh khoản/độ rộng/phân phối và tính lại trạng thái; không tự động mua. Kịch bản **CƠ SỞ (TRUNG BÌNH)**: giữ MA20 1.733,13 nhưng chưa lấy lại MA50 1.763,45, duy trì quản trị mã riêng. Kịch bản **XẤU (TRUNG BÌNH)**: đóng dưới 1.733,13 rồi kiểm định 1.701,90; rà mã vi phạm stop, hạ đòn bẩy. Mọi mức là định tính, không có xác suất số.

Kết luận: **KHÔNG mở mua mới**. Rủi ro lớn nhất: chỉ số xanh do trụ nhưng số mã giảm nhiều và khớp giảm. Muốn đổi quan điểm phải có giá vượt mốc 1.751,57 và MA50 1.763,45 đồng thời bộ cổng được tái kiểm; kịch bản gãy hỗ trợ 1.733,13 yêu cầu phòng thủ.

## VI. Nhật ký tìm số thiếu (ít nhất 3 nơi kiểm từng nhóm)

- MA200: VNIndex.ai 60 hàng (thiếu 200); VNSignal 20 hàng (thiếu 200); Investing.com lịch sử ngày trong kỳ ngắn, không đủ 200.
- TB20 khớp/phân phối: VNSignal 20 hàng (<21/26); VNIndex.ai 60 hàng nhưng là TỔNG; Dalink 1 tháng có giá/khối lượng, không đủ chuỗi 26 giá trị KHỚP.
- Khối ngoại KHỚP HOSE liên tiếp: VNIndex.ai dùng ước tính; Tuổi Trẻ là tổng 3 sàn; Stockbiz hiển thị tổng HOSE, không có 5 phiên khớp cùng phạm vi.
- Phái sinh: Stockbiz VN30F1M ngày 11/11 có giá tiêu đề/bảng lệch nhau; chưa xác minh bằng dữ liệu hợp đồng HNX; iWinStock không có bảng đúng phiên đã khóa.
- Tự doanh 11/11: Stockbiz bảng chỉ đến 10/11; Tuổi Trẻ 11/11 không có bảng tự doanh HOSE; VNIndex.ai chưa có dữ liệu.
- Cờ ETF/đáo hạn: Stockbiz hợp đồng không thay lịch HNX; Tuổi Trẻ bài 11/11 không chứa xác nhận ETF; VNIndex.ai không có lịch chính thức.

## VII. Bảng tự kiểm đủ 20 mục

| # | Đạt? | Ghi chú |
|---|---|---|
|1|ĐẠT|Đúng phiên 11/11 và mốc cắt|
|2|ĐẠT|Không sử dụng dữ liệu phiên tương lai|
|3|ĐẠT|Số liệu từ trang thực mở, không dùng trí nhớ/snippet|
|4|ĐẠT|Không tính HOSE bản sao không mở làm nguồn|
|5|ĐẠT CÓ GIỚI HẠN|Số lõi đối chiếu, phạm vi 364 khác 404|
|6|ĐẠT|Nhật ký thiếu dữ liệu có ít nhất 3 trang đã thử|
|7|ĐẠT CÓ GIỚI HẠN|MA20/50/dốc một gốc, không tự tính TB20 KHỚP khi thiếu|
|8|ĐẠT|Mọi số xuất bản có nguồn hoặc phép tính/điều khoản prompt|
|9|ĐẠT|Không chép Sổ cũ|
|10|ĐẠT|Lấy ngày theo lệnh|
|11|ĐẠT|Chế độ RÚT GỌN|
|12|ĐẠT CÓ GIỚI HẠN|MA200 chưa có, nền chưa đánh giá|
|13|ĐẠT CÓ GIỚI HẠN|Thiếu yếu tố thì 0; basis không đoán|
|14|KHÔNG ĐẠT HOÀN TOÀN|Chặn từ Sổ gốc và phân phối/25 không kiểm được|
|15|ĐẠT|R3 −1 có căn cứ, không dùng thiếu dữ liệu làm KHÔNG|
|16|ĐẠT|Không có vùng mua mới|
|17|ĐẠT CÓ GIỚI HẠN|Mốc có xuất xứ; R:R không áp dụng|
|18|ĐẠT|Không suy tiền ròng cấp ngành|
|19|ĐẠT|Website giữ khung, bài Zalo đồng bộ với số có nguồn|
|20|KHÔNG ĐẠT HOÀN TOÀN|Không có Sổ gốc để rà Phần B chặn cứng|

## VIII. Sổ dữ liệu — chỉ phần bổ sung, KHÔNG chép lại dòng cũ

PHẦN A — dòng mới:

Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng HOSE (tỷ);VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn

11/11/2026;1746,9;1751,57;1734,25;0,22;9946,44670919;134;154;76;;1855,27;;;;ĐÃ ĐỐI CHIẾU: số lõi; CHƯA XÁC MINH: KN KHỚP, VN30F1M, cờ sự kiện, phân phối

PHẦN B — trạng thái mang sang: KHÔNG; RÚT GỌN; nền CHƯA ĐÁNH GIÁ; MA20 1733,13; MA50 1763,45; chưa có MA200; mốc vô hiệu Sổ gốc KHÔNG KIỂM ĐƯỢC; kháng cự 1751,57; hỗ trợ MA20 1733,13; chặn cứng từ Sổ trước KHÔNG KIỂM ĐƯỢC; chuỗi ngoại KHỚP và phân phối KHÔNG KIỂM ĐƯỢC.

PHẦN C — không có dữ liệu Sổ gốc để đính chính; không sửa thầm dữ liệu cũ.

**Ràng buộc xuất bản:** chỉ thêm module dữ liệu phiên 11/11 và khai báo import sau archive; không chỉnh HTML, CSS, giao diện, thứ tự section, vùng mua hay nguyên tắc stoploss của mã riêng.
