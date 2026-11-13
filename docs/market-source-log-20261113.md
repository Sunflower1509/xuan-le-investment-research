# NHẬT KÝ NGUỒN VÀ KIỂM TOÁN VN-INDEX — PHIÊN 13/11/2026 — v3.3.1

**Ngày phân tích:** thứ Sáu 13/11/2026, phiên có giao dịch. **Thời điểm thực hiện:** sau khi đóng cửa chiều 13/11/2026 (giờ Việt Nam). **Mốc cắt:** hết ngày 13/11/2026, chỉ sử dụng thông tin về chính phiên hoặc trước đó; những nguồn xuất bản sau giờ đóng chỉ được dùng khi nhắc lại số của phiên 13/11. **Không có Sổ dữ liệu tự lưu của người dùng.** Báo cáo lưu trong kho mã không được coi là Sổ gốc.

**Bản quy tắc đã rà ba lượt độc lập:** docs/prompt-nhan-dinh-vnindex-v3.md, tiêu đề v3.3.1 (SHA d3776d82a27f643bdc40b13729f564003417e2d0). Lượt 1: các mục 0–I (cổng, nguồn, đối chiếu, nhật ký). Lượt 2: II–VI (nền, 7 yếu tố, 25 phiên phân phối, chặn, điều kiện gỡ, 3 bước trạng thái). Lượt 3: VII–XII (web, Zalo 250–400 chữ, bảng 20 tiêu chí, Sổ và quy tắc giữ nguyên bố cục). Người dùng chưa đính kèm lại bản gốc tách biệt trong lượt này; bản có sẵn cùng số phiên bản trong repository là tài liệu điều khiển đang dùng.

## I. Nhật ký nguồn thực mở, đối chiếu số cùng phạm vi

| Trường | Giá trị (đơn vị/phạm vi) | Nguồn 1 và trích nguyên văn dưới 15 từ | Nguồn 2 và trích nguyên văn dưới 15 từ | Nhãn |
|---|---|---|---|---|
| VN-Index đóng / đổi | 1.734,93, +0,18, +0,01% | VNIndex.ai, 13/11: "1.734,93 điểm+0,18 (+0,01%)", https://vnindex.ai/vnindex-hom-nay | Stockbiz, sau phiên 13/11: "VN-Index tăng 0,18 điểm (+0,01%) lên 1.734,93", https://stockbiz.vn/thi-truong | ĐÃ ĐỐI CHIẾU |
| Giá mở / cao / thấp | 1.727,31 / 1.737,36 / 1.724,03 | VNIndex.ai 13/11: "Mở cửa 1.727,31", "Cao nhất 1.737,36", "Thấp nhất 1.724,03" | nmquan, ngày 13-11: "1.727,31 | 1.737,36 | 1.724,03", https://nmquan.vn/data/chi-so/vn-index/lich-su | ĐÃ ĐỐI CHIẾU |
| Khớp lệnh HOSE, không bao gồm thỏa thuận | 9.757,8 tỷ, gồm cổ phiếu và các sản phẩm sàn được nmquan ghi trong cột KHỚP | nmquan, 13-11: "9.757,8", cột "Giá trị khớp lệnh (tỷ đồng)", https://nmquan.vn/data/chi-so/vn-index/lich-su | Vietstock sau phiên: "giá trị khớp lệnh chưa tới 9,770 tỷ đồng", https://fili.vn/2026/11/nhip-dap-thi-truong-1311-ap-luc-tu-nhom-tru-ghim-chan-vn-index-dong-tien-phan-hoa-manh-theo-tin-doanh-nghiep-1636-1514517.htm | ĐÃ ĐỐI CHIẾU theo độ chính xác làm tròn / khác rổ, giá trị chi tiết 1 NGUỒN |
| Tổng giao dịch có thỏa thuận | 15.138 tỷ theo Stockbiz, 15,14 nghìn tỷ VNIndex.ai | Stockbiz: "Thanh khoản nhóm VN-Index đạt 15.138 tỷ đồng", https://stockbiz.vn/thi-truong | VNIndex.ai: "Giá trị giao dịch 15,14 nghìn tỷ", https://vnindex.ai/vnindex-hom-nay | ĐÃ ĐỐI CHIẾU theo làm tròn nhưng không dùng cho TB20 KHỚP |
| Độ rộng HOSE chỉ cổ phiếu có giao dịch khớp (nmquan) | 108 tăng, 192 giảm, 69 đứng giá | nmquan 13-11: "108" "192" "69" ở ba cột tăng / giảm / đứng, https://nmquan.vn/data/chi-so/vn-index/lich-su | Thời báo Tài chính, bảng HOSE sau phiên "108 69 192 Đóng cửa", https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html | ĐÃ ĐỐI CHIẾU theo cùng cách đếm; 2 nguồn hiện thị |
| Độ rộng ở phạm vi khác | VNDIRECT 100/189/69; VNIndex.ai rổ 404 mã 106/191/107 | VNDIRECT Finfo EOD trong src/data/research-data.js, 13/11 | VNIndex.ai, mục "Độ rộng thị trường · HOSE 404 mã" | KHÁC PHẠM VI, tuyệt đối không trộn |
| VN30 | 1.844,91; +5,48 (+0,30%) | iWinStock bảng ngày 13/11: "1.844,91 +5,48 (+0,30%)", https://www.iwinstock.com/derivatives/ | Stockbiz: "VN30 1.844,91▲5,48 (+0,30%)", https://stockbiz.vn/thi-truong | ĐÃ ĐỐI CHIẾU |
| HNX-Index | 254,98; −1,64 (−0,64%) | Stockbiz: "HNX-Index 254,98▼1,64 (−0,64%)", https://stockbiz.vn/thi-truong | Website Finfo đã khóa 13/11, marketSession HNX 254.98 / -1.64 | ĐÃ ĐỐI CHIẾU |
| VNMID, VNSML EOD | chưa tìm được bảng đúng phiên cùng giờ chốt | VNIndex.ai chỉ hiển thị VNIndex và ngành | Stockbiz chỉ VN30/HNX; nmquan lịch sử là VNINDEX | CHƯA XÁC MINH |
| Top 5 kéo tăng | STB +0,89; TCB +0,65; VJC +0,46; VPB +0,41; POW +0,28 điểm | VNIndex.ai 13/11 bảng điểm tác động của năm mã, https://vnindex.ai/vnindex-hom-nay | Vietstock nêu STB/TCB/VJC/VPB tăng giá, không có bảng điểm cùng thuật toán; không trộn | 1 NGUỒN cho số điểm cụ thể |
| Top 5 kéo giảm | BID −0,40; VNM −0,26; GAS −0,25; DMX −0,24; VCB −0,18 điểm | VNIndex.ai 13/11 bảng đóng góp điểm | Vietstock nêu BID/VNM/GAS gây áp lực, không có đủ bảng năm mã cùng đơn vị | 1 NGUỒN cho số điểm cụ thể |
| Diễn biến ngành | Stockbiz 12/20 ngành giảm; viễn thông +0,99%, bảo hiểm +0,79%, ngân hàng +0,22%, công nghệ +0,36%, dịch vụ tài chính −0,30%, năng lượng −0,36%, bất động sản −0,08% | Stockbiz, bản đồ nhiệt 13/11, https://stockbiz.vn/thi-truong | VNIndex.ai BĐS gần 0, ngân hàng +0,3%, thực phẩm −0,3%; khác hệ phân ngành, không ghép giá | 1 NGUỒN đối với tỷ lệ từng ngành |
| Ngoại tổng HOSE, gồm thỏa thuận | nmquan +337,5 tỷ, VnEconomy/Vietstock thống kê khác phương pháp | nmquan 13-11: "+337,5", cột tổng ngoại ròng, https://nmquan.vn/data/chi-so/vn-index/lich-su | Vietstock sau phiên tổng HOSE khoảng +320,88, https://fili.vn/2026/11/nhip-dap-thi-truong-1311-ap-luc-tu-nhom-tru-ghim-chan-vn-index-dong-tien-phan-hoa-manh-theo-tin-doanh-nghiep-1636-1514517.htm | XÁC NHẬN CÙNG CHIỀU, khác phạm vi; không dùng chấm ngoại KHỚP |
| Ngoại KHỚP HOSE + 5 phiên liền nhau | chưa có chuỗi đồng phương pháp đủ 5 ngày | nmquan cột NGOẠI TỔNG gồm thỏa thuận, không phải khớp | Vietstock có tổng 1 phiên, iWinStock thống kê rổ VN30/phái sinh không phải HOSE KHỚP; Stockbiz top mã không phải chuỗi khớp | CHƯA XÁC MINH |
| Tự doanh cổ phiếu HOSE 13/11 | chưa có EOD | Stockbiz trang thị trường ghi "Tự doanh Phiên 12/11/2026" | nmquan hàng 13/11 chưa có; VNIndex.ai không có bảng | CHƯA XÁC MINH |
| Hợp đồng VN30F1M | giá đóng 1.851,0; basis +6,09 (+0,3301% VN30) | iWinStock ngày 13/11: "1.851,0" "Chênh lệch +6,09", https://www.iwinstock.com/derivatives/ | Stockbiz VN30F1M 13/11: "1.851,0▲+8,7", https://stockbiz.vn/ma-chung-khoan/VN30F1M/giao-dich | ĐÃ ĐỐI CHIẾU giá; basis TỰ TÍNH |
| Ngày đáo hạn tháng VN30F1M | 19/11/2026, mã 41I1GB000 | iWinStock bảng hợp đồng "đáo hạn 19/11/2026" | HNX thông báo gốc chưa mở; không xác nhận chính thức theo lịch HNX | 1 NGUỒN, không tự coi lịch HNX đã khóa |
| Cờ phái sinh 15/10/2026 | đã đáo hạn tháng 10 | MBS bản tin 15/10: "phiên đáo hạn", https://www.mbs.com.vn/ban-tin-phai-sinh-ngay-15-10-2026-bien-dong-kho-luong-phien-dao-han/ | iWinStock bảng hợp đồng ngày 15/10/2026 ở lịch sử, https://www.iwinstock.com/derivatives/ | ĐÃ ĐỐI CHIẾU sự kiện lịch sử |
| Cờ ETF ngày 13/11 | Kỳ cơ cấu quỹ dự kiến 13/11, ATC có ảnh hưởng được báo chí xác nhận | Thời báo Tài chính 09/11 dẫn SSI Research "dự kiến thực hiện tái cơ cấu danh mục vào ngày 13/11", https://thoibaotaichinhvietnam.vn/cac-quy-etf-du-kien-giao-dich-gan-1-000-ty-dong-trong-ky-co-cau-thang-11-206639.html | Người Quan Sát 13/11 15:43 nêu "kéo lên trong phiên ATC cơ cấu quỹ", https://nguoiquansat.vn/vn-index-thoat-hiem-cuoi-phien-tien-ngoai-gom-manh-gan-23-trieu-co-phieu-vix-327936.html | CỜ SỰ KIỆN CÓ CĂN CỨ; lịch từng quỹ theo thông báo trực tiếp chưa đầy đủ |

**Nguyên tắc diễn giải:** không thay KHỚP 9.757,8 tỷ bằng TỔNG 15.138 tỷ. Không so sánh độ rộng 108/192/69 với 106/191/107 như thể cùng rổ. Không gọi khối ngoại +337,5 tỷ là ròng KHỚP HOSE. Mốc cắt dữ liệu được giữ sau phiên 13/11, không dùng tin của phiên sau.

## II. Gốc chuỗi, số phiên, phép tính bằng công cụ

**Gốc (a) đóng cửa:** bảng VNIndex.ai 60 hàng thực hiển thị từ 19/08/2026 đến 13/11/2026. Neo nguyên văn: "13/11/2026 | 1.734,93 | +0,18" và "12/11/2026 | 1.734,75 | -12,15". Đóng phiên mới nhất khớp bảng lõi 2 nguồn. Cột Giá trị GD của VNIndex.ai là TỔNG, KHÔNG được dùng làm thanh khoản khớp.

**Gốc (a) KHỚP HOSE:** bảng nmquan lịch sử 30 hàng từ 05/10/2026 đến 13/11/2026, mở đọc toàn văn. Neo: "13-11-2026 | 1.734,93 | ▲ +0,18 ... 9.757,8" và "12-11-2026 | 1.734,75 | ▼ −12,15 ... 10.367,7". Cột "Giá trị khớp lệnh" ghi rõ tách thỏa thuận. Không ghép 2 gốc trong **cùng phép tính**.

| Chỉ báo | Phép tính trên chuỗi phù hợp | Kết quả | Nhãn |
|---|---|---|---|
| MA20 | TB 20 đóng cửa 17/10? bảng 20 phiên 13/11→19/10; dùng 20 hàng mới nhất VNIndex.ai | 1.736,399 → **1.736,40** | TỰ TÍNH |
| MA50 | TB 50 đóng cửa 13/11→05/09 theo dãy đủ 50 phiên | 1.759,2258 → **1.759,23** | TỰ TÍNH |
| MA20 lùi 5 phiên | TB 20 đóng cửa 06/11 và 19 phiên trước đó cùng VNIndex.ai | 1.730,177 | TỰ TÍNH |
| Dốc MA20 / 5 | 1.736,399 − 1.730,177 | **+6,222 → +6,22 điểm** | TỰ TÍNH |
| MA200 | Không có 200 hàng liên tục từ một gốc đã đọc | —, chưa có MA200; không quyết định chế độ | CHƯA XÁC MINH |
| TB20 KHỚP HOSE | TB 20 giá trị khớp 12/11 về 16/10 cùng nmquan | **12.497,41 tỷ** | TỰ TÍNH |
| Bội số KHỚP | 9.757,8 / 12.497,41 | **0,7807858 ≈ 0,781 lần** | TỰ TÍNH |
| So khớp phiên liền trước | (9.757,8 / 10.367,7 − 1) ×100 | **−5,88%** | TỰ TÍNH |
| Độ rộng tăng/giảm | 108/192 | **0,5625** | TỰ TÍNH |
| Điểm top5 cùng chiều | Tổng +0,89+0,65+0,46+0,41+0,28=+2,69; ngày chỉ +0,18 điểm, tuyệt đối <2 | **KHÔNG ĐƯỢC dùng tỷ lệ top5** theo mục 0.6, chất lượng =0 | TỰ TÍNH từ 1 nguồn, vô hiệu tỷ lệ |
| Vị trí giá đóng | (1734,93−1724,03)/(1737,36−1724,03) | 81,77% biên phiên, trong 1/3 trên, không xả cuối | TỰ TÍNH |
| 25 phiên phân phối gồm ngày 13/11 | Theo 26 hàng nmquan (13/11→ ngày để so phiên đầu), giảm ≥0,2% và khớp > phiên trước | Sáu ứng viên **15/10,19/10,29/10,02/11,06/11,12/11**; loại 15/10 đáo hạn xác minh → **5 phiên còn hiệu lực**: 19/10,29/10,02/11,06/11,12/11 | TỰ TÍNH |
| Điều kiện hết hiệu lực | 25 phiên hoặc đóng tăng ≥5% từ ngày phân phối | Chưa có phiên nào trong 5 phiên vượt điều kiện; 19/10 giá 1.689,84, ngưỡng +5%=1.774,332 trong khi đỉnh đóng sau đó 1.774,15, chưa qua | TỰ TÍNH |

**Lưu ý:** Cờ ETF 13/11 đã xác nhận theo báo chí dẫn SSI Research, phiên 13/11 không có phân phối mới vì +0,01%. Các phiên ETF trước đó trong cửa sổ chưa có lịch thông báo đầy đủ; nếu có bằng chứng chính thức sau này, phải ghi đính chính và tính lại 5 phiên. Đáo hạn 15/10 có hai nguồn lịch sử để loại trừ. **Không được khẳng định chặn cứng ≥6 đã gỡ hết khi còn chặn cứng khác từ Sổ gốc không được cung cấp.**

## III. Cổng dữ liệu, chấm điểm, ba bước chốt

**Số lõi:** giá và % có hai nguồn; khớp HOSE 9.757,8 (nmquan, Vietstock mức làm tròn gần 9.770); độ rộng 108/192/69 có nmquan + Thời báo Tài chính hiển thị cùng số. **Cổng ĐẠT có lưu ý** phần khớp giá trị chi tiết 1 NGUỒN. Chế độ **ĐẦY ĐỦ**: đủ MA20, MA50, dốc MA20/5, TB20 KHỚP, số phân phối/25. MA200 chưa có; bỏ vế MA200 theo mục II.B.

**Nền xu hướng TRUNG TÍNH (trần CHỜ):** 1.734,93 dưới MA20 1.736,40 và MA50 1.759,23; nhưng MA20 dốc **lên** +6,22, MA200 chưa có nên không thỏa nền XẤU (đòi dốc giảm hoặc giá dưới MA200). Không thỏa nền TỐT vì chưa trên MA50. Không tự gọi nền xấu chỉ vì dưới MA50.

**Điểm 7 yếu tố:**
1. Giá/MA = **−1**: dưới MA20 và MA50 (không cần 20-session low).
2. Thanh khoản = **0**: chỉ số tăng +0,01% nhưng 13/11 là phiên ETF có cờ, quy tắc điểm phiên cờ =0 (nếu bỏ cờ, bội số 0,781<0,8 cũng sẽ là −1; không làm vậy).
3. Độ rộng = **−1**: 108/192=0,5625 ≤0,67.
4. Chất lượng dòng tiền = **0**: |+0,18 điểm|<2 điểm, tỷ lệ top5 cấm dùng; không thể chấm −1 chỉ vì 2,69 điểm trụ.
5. Ngoại KHỚP = **0**, thiếu chuỗi ròng 5 phiên.
6. Sức khỏe phân phối = **−1**: 5 phiên/25 (ngưỡng ≥5).
7. Phái sinh/vĩ mô = **0**: basis 13/11 =+6,09/+0,330%; tuy nhiên quy tắc 3 phiên trước đáo hạn chỉ theo lịch HNX chính thức chưa khóa và chưa đánh giá tin vĩ mô đầy đủ; không tự cộng +1. Không có tin vĩ mô bất lợi rõ được xác minh trong các trang đã đọc (không chứng minh không có).
**Tổng = −3/7** (nếu xét thanh khoản phiên tăng chưa xác nhận trong ngày không gắn cờ, điểm trừ mạnh hơn; hiện giữ đúng cờ).

**Chặn mềm:** chỉ số dương +0,01% nhưng 192 mã giảm so 108 mã tăng, đã kiểm; cản trước mắt cao phiên 13/11=1.737,36, cách giá đóng 0,14%; MA50 1.759,23, cách 1,40%, chưa vượt. ETF ATC có thể méo tín hiệu. Chặn cứng đã kiểm mới: không xả cuối (giá đóng vùng 1/3 trên, khớp dưới TB20); xanh điểm đỏ mã KHỚP cao không áp dụng vì 0,781<1,2, vả lại có cờ ETF; phân phối 5 (<6), không đủ chặn cứng; ngoại 5 phiên + dưới MA50 chưa kiểm được; mốc vô hiệu từ Sổ gốc **KHÔNG KIỂM ĐƯỢC**. Chặn phân phối ≥6 từ những phiên trước đã đủ điều kiện gỡ về 5 **trong chuỗi hiện mở**, không khẳng định các chặn lịch sử khác đã gỡ.

**Ba bước II.H**: Bước 1 **KHÔNG, dòng 2** theo bảng ĐẦY ĐỦ vì điểm −3≤−2. Bước 2 nền TRUNG TÍNH trần CHỜ → **KHÔNG** (mức thấp hơn). Bước 3 chống đảo chiều **không áp dụng** vì không có Sổ gốc → **KHÔNG, dòng 2**. Trạng thái cuối do điểm đã kiểm, không phải do thiếu Sổ/MA200.

**Giao dịch và rủi ro:** không mở mua mới, không tăng margin, hạ dần phần yếu, định hướng ≤20% cổ phiếu theo dòng 2 (minh họa không phải bắt buộc với mọi danh mục). Mọi điểm stoploss của từng cổ phiếu giữ nguyên 3–7% tùy cấu trúc; không tự áp mốc chỉ số vào điểm cắt lỗ mã. Vùng mua mới: KHÔNG ÁP DỤNG. R:R của chỉ số: KHÔNG ÁP DỤNG vì thiếu mốc vô hiệu Sổ gốc và chế độ KHÔNG.

## IV. Mốc giá truy xuất và kịch bản IF–THEN

- **Hỗ trợ gần:** đáy phiên 13/11 **1.724,03**, nếu đóng dưới => gia tăng rủi ro. Kế tiếp **1.701,90** đáy 09/11. Mốc tâm lý 1.700 chỉ ghi nếu có lý do tâm lý số tròn, không dùng làm vô hiệu Sổ gốc.
- **Kháng cự gần:** đỉnh 13/11 **1.737,36**; **MA20 1.736,40** sát vùng hồi; cản tiếp **1.751,57** đỉnh 11/11; **MA50 1.759,23**.
- **Mốc vô hiệu đang hiệu lực:** KHÔNG KIỂM ĐƯỢC do không có Sổ gốc. Đáy 1.724,03 chỉ là mốc theo dõi rủi ro, không tự sửa mốc vô hiệu lịch sử.
- **Tốt — khả năng THẤP:** đóng vượt 1.737,36 và sau đó vượt MA50 1.759,23; tăng bội số KHỚP từ 0,781 lên ≥1,2 cùng độ rộng ≥1,5, số phân phối ≤4 và kiểm được mốc ngoại Sổ; THÌ tính lại cổng, không tự mua trước khi trạng thái CÓ.
- **Cơ sở — khả năng TRUNG BÌNH:** giữ được đáy 1.724,03 nhưng còn dưới MA50 1.759,23, khớp thấp, nhóm trụ luân phiên; THÌ giữ vị thế riêng còn đúng cấu trúc, không tăng tỷ trọng.
- **Xấu — khả năng TRUNG BÌNH/CAO do điểm −3:** đóng dưới 1.724,03 và tiến tới 1.701,90 cùng số mã giảm áp đảo; THÌ giảm phần yếu vi phạm stop riêng và không bình quân giá xuống.
Không có xác suất định lượng.

**Nhóm ngành:** ngân hàng +0,22% theo Stockbiz, STB +3,34% và TCB, VPB có đóng góp kéo điểm; viễn thông +0,99%, bảo hiểm +0,79%, công nghệ +0,36% (FPT +1,11%) là **sức giá riêng cần quan sát**, không khẳng định tiền ròng vào cả nhóm. Năng lượng −0,36%, tài chính −0,30%, bất động sản −0,08%, công nghiệp −0,69% theo Stockbiz là nhóm sức giá thận trọng. VN30 +0,30% > VNINDEX +0,01% nhưng HNX −0,64% và độ rộng HOSE âm: phục hồi trụ thiếu đồng thuận. Chưa xác minh VNMID/VNSML nên không gán lan tỏa theo hai chỉ số này.

## V. Nhật ký tìm 1 NGUỒN / CHƯA XÁC MINH

| Chỉ tiêu | Trang thực mở và kết quả |
|---|---|
| Khớp HOSE 9.757,8 | nmquan có số đúng và cột KHỚP; Vietstock gần 9.770 tỷ sau phiên làm tròn; Stockbiz ghi TỔNG 15.138 tỷ khác phạm vi; VNIndex.ai 15,14 nghìn tỷ là TỔNG khác phạm vi |
| Độ rộng 108/192/69 | nmquan 108/192/69 chỉ có giao dịch khớp; Thời báo Tài chính HOSE đầu trang 108/69/192; VNIndex.ai có 106/191/107 rổ 404 khác phạm vi; Finfo trên website 100/189/69 khác phạm vi |
| Top5 điểm tác động | VNIndex.ai đủ 5 giá trị; Stockbiz có top mã/giá nhưng không có bảng năm mã đóng góp cùng phương pháp; Vietstock có vài mã hỗ trợ nhưng không đủ số điểm đồng phương pháp |
| Ngành theo Stockbiz | Stockbiz có bảng 20 ngành; VNIndex.ai nhóm ngành khác hệ phân loại, không thể so giá chính xác; VnEconomy chỉ nói ngành có giao dịch tích cực không có bảng số theo Stockbiz |
| Ngoại KHỚP HOSE 5 phiên | nmquan ghi ngoại TỔNG có thỏa thuận, không tách matched; Vietstock giá trị tổng 13/11; Stockbiz chỉ top mua/bán theo mã và phần thống kê tổng; iWinStock ròng VN30/phái sinh khác phạm vi |
| Tự doanh 13/11 | Stockbiz ghi tự doanh 12/11 (sai phiên); nmquan chưa có số; VNIndex.ai không công bố theo HOSE khớp |
| VNMID/VNSML | VNIndex.ai chỉ VNINDEX/VN30 trong trang đọc; Stockbiz thị trường chỉ VN30/HNX/HNX30/UPCoM; nmquan lịch sử VNINDEX không có |
| MA200 | VNIndex.ai chỉ 60 giá đã mở; nmquan lịch sử chỉ 30 hàng đã mở; VNSignal lịch sử có dưới 200 hàng; không ghép nguồn để tính |
| Cờ ETF lịch các ngày khác trong cửa sổ | SSI Research qua Thời báo Tài chính nêu 13/11; Người Quan Sát xác nhận ATC 13/11; Stockbiz mục lịch không có thông cáo trực tiếp quỹ cho các ngày 12/11 hoặc trước; không gắn cờ ngày khác |
| Cổng mốc vô hiệu Sổ gốc | Không có Sổ do người dùng dán; trang web có bản nhận định cũ nhưng không thay Sổ; docs/market-source-log-20261112.md là hồ sơ kiểm toán, không thay Sổ |

## VI. Bảng tự kiểm 20 mục

| # | Kết quả | Lý do / giới hạn |
|---|---|---|
|1|ĐẠT|Nguồn hai bên xác nhận phiên 13/11 đã đóng|
|2|ĐẠT|Không dùng diễn biến phiên sau 13/11|
|3|ĐẠT|Không có con số từ trí nhớ; số lõi trích trang trực tiếp|
|4|ĐẠT|Các URL nêu trong bảng được mở, ngày phiên được nhận diện|
|5|ĐẠT CÓ GIỚI HẠN|Giá/độ rộng khớp hai nguồn; KHỚP tỷ chính xác 1 nguồn, nguồn khác làm tròn|
|6|ĐẠT|Nhật ký các nguồn thử và lý do sai phạm vi|
|7|ĐẠT|60 giá VNIndex.ai cho MA; 30 phiên KHỚP nmquan cho TB20/phân phối; không ghép trong cùng phép tính|
|8|ĐẠT|Mỗi con số được ghi trong nguồn hoặc bảng phép tính, quy tắc|
|9|ĐẠT|Không sao Sổ cũ, không sửa thầm|
|10|ĐẠT|Ngày theo lệnh người dùng|
|11|ĐẠT|ĐẦY ĐỦ đủ 5 chỉ số bắt buộc dù MA200 thiếu|
|12|ĐẠT|Nền trung tính, thiếu MA200 được ghi|
|13|ĐẠT|7 yếu tố đúng cờ ETF; top5 ngày chỉ đổi 0,18 không có tỷ lệ|
|14|ĐẠT CÓ GIỚI HẠN|5 phân phối có căn cứ; chặn từ Sổ/ngoại 5 ngày không kiểm được|
|15|ĐẠT|Thô KHÔNG → trần TRUNG TÍNH vẫn KHÔNG → không có Sổ bỏ chống đảo chiều → dòng 2|
|16|ĐẠT|Không có vùng mua mới|
|17|ĐẠT CÓ GIỚI HẠN|Mốc có xuất xứ; R:R không áp dụng thiếu mốc vô hiệu|
|18|ĐẠT|Không gắn tiền VÀO/RA theo giá ngành khi không có khớp/ngoại cấp ngành đồng nhất|
|19|ĐẠT|Nhận định web/Zalo sử dụng đúng số, không sửa giao diện, giữ trạng thái KHÔNG|
|20|KHÔNG ĐẠT HOÀN TOÀN|Người dùng không cung cấp Sổ gốc, không kiểm chặn mang sang|

## VII. Dòng Sổ **chỉ bổ sung**; KHÔNG chép bản cũ

PHẦN A — một dòng mới:

Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng khớp HOSE;VN30;VN30F1M;Cờ sự kiện;Phiên phân phối;Nhãn

13/11/2026;1734,93;1737,36;1724,03;+0,01;9757,8;108;192;69;;1844,91;1851,0;ETF cơ cấu 13/11 có căn cứ;Không phát sinh vì chỉ số tăng;ĐÃ ĐỐI CHIẾU: chỉ số/độ rộng; 1 NGUỒN: khớp chi tiết; CHƯA XÁC MINH: ngoại khớp/Sổ

PHẦN B — tình trạng mới từ báo cáo hôm nay: **KHÔNG, dòng 2**; CHẾ ĐỘ ĐẦY ĐỦ; nền **TRUNG TÍNH**, MA20 1.736,40, MA50 1.759,23, dốc MA20/5 +6,22, MA200 không có; TB20 KHỚP 12.497,41 tỷ; 5 phiên phân phối có chứng cứ 19/10,29/10,02/11,06/11,12/11; chặn cứng ≥6 theo số phiên phân phối đã rời điều kiện trong chuỗi, các chặn cứng khác quá khứ **KHÔNG KIỂM ĐƯỢC** vì Sổ gốc không có; Mốc vô hiệu đang hiệu lực **KHÔNG KIỂM ĐƯỢC**; đóng 1.734,93; hỗ trợ 1.724,03; kháng cự 1.737,36; ngoại KHỚP 5 phiên KHÔNG KIỂM ĐƯỢC.

PHẦN C — chưa có Sổ gốc để đối chiếu các dòng cũ, không tự tạo đính chính.

**Phạm vi thay đổi website:** chỉ thêm một module dữ liệu phiên 13/11 trong src/data và một dòng import trong src/index.js; không sửa index.html, CSS, thứ tự section, bản nhận định cũ, vùng mua hay cắt lỗ của cổ phiếu.
