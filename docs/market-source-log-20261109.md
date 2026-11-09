# HỒ SƠ NGUỒN, KẾT QUẢ VNINDEX 09/11/2026 — PROMPT v3.3.1

**Ngày phân tích và mốc cắt:** hết phiên thứ Hai 09/11/2026 theo giờ Việt Nam (VNDIRECT bản cuối phiên 15:11:08, báo Thời báo Tài chính 17:32, Nhân Dân 17:23). **Ngày xử lý:** 09/11/2026. Không sử dụng dữ liệu phiên tương lai. **Sổ gốc người dùng:** chưa được cung cấp, không tự nhận bản web ngày 06/11 là Sổ gốc.

## 1. Đọc nguồn Prompt trong ba lượt

**Đính kèm gốc** `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` (54.099 byte) và bản quy tắc chính `docs/prompt-nhan-dinh-vnindex-v3.md` SHA `d3776d82a27f643bdc40b13729f564003417e2d0`. Đã đọc và thực thi riêng ba lượt:

1. **Lượt cổng dữ liệu 0–I:** xác minh ngày có phiên, điểm đóng và %, KHỚP HOSE không lẫn thỏa thuận, độ rộng theo *một tập*, ≥2 nguồn cho số lõi, ghi chênh số, kiểm 276 dòng lịch sử, cấm trộn nguồn hoặc dùng đoạn tìm kiếm chưa mở.
2. **Lượt quyết định II:** tính MA20/50/200, độ dốc MA20 trong 5 phiên, khớp/TB20, 7 yếu tố ±1/0, phân phối/25, chặn cứng/mềm, hiệu lực và bảng quy đổi trạng thái ba bước; thiếu dữ liệu chấm 0.
3. **Lượt báo cáo III–XII và phụ lục:** phân tích ngành và mốc có nguồn, ba kịch bản NẾU–THÌ, không tạo vùng mua/R:R khi KHÔNG, bài Zalo 250–400 chữ, bảng tự kiểm 20 mục, Sổ chỉ bổ sung; bảo toàn `market-decision-brief-standard.md` v2.2.2 và CSS/HTML.

## 2. Nhật ký nguồn đúng phiên 09/11 và tính nhất quán phạm vi

| Ô dữ liệu | Giá trị & phạm vi | Trích/nguồn 1 đã đọc | Nguồn 2 và đánh giá | Nhãn |
|---|---|---|---|---|
| VN-Index đóng/% | **1.714,32; −11,04; −0,64%** | VNDIRECT `"close":1714.32,"change":-11.04,"pctChange":-0.639866462651273` | VNIndex.ai bản 09/11 `1.714,32 -11,04 (-0,64%)`; Thời báo Tài chính 17:32 và Nhân Dân 17:23 cùng phiên | **ĐÃ ĐỐI CHIẾU** |
| VN30/HNX/VNMID/VNSML | **VN30 1.830,13 (−0,88%); HNX 255,24 (−0,58%); VNMID 1.844,50 (−0,74%); VNSML 1.219,37 (−0,16%)** | Thời báo Tài chính 17:32, VNIndex.ai và taichinh.com chỉ số, cổng CafeF bản tin HOSE cung cấp cùng giá và ngày | VN30/HNX từ Thời báo Tài chính/Vietstock/taichinh.com, Mid/small cùng giá HOSE được CaféF đăng nhưng không mở được nội dung trực tiếp | **VN30/HNX ĐÃ ĐỐI CHIẾU; Mid/small 1 NGUỒN bản công bố** |
| OHLC | **Mở/cao 1.728,27; thấp 1.701,90; đóng 1.714,32** | VNDIRECT `"open":1728.27,"high":1728.27,"low":1701.9` | VNIndex.ai, WebGia cùng phiên và cùng số | **ĐÃ ĐỐI CHIẾU** |
| **Giá trị KHỚP VNINDEX** | **10.152,84218199 tỷ; 498.610.877 CP**, không gồm thỏa thuận | VNDIRECT `"nmValue":10152842181990,"nmVolume":498610877` | VNDIRECT La bàn thị trường công bố khớp HOSE **10,2 nghìn tỷ** (làm tròn); Vietstock 09/11 ghi **498 triệu** cổ phiếu khớp; HOSE toàn thị trường **10.225 tỷ** khác tập | **1 NGUỒN chính xác theo VNDIRECT, đối chiếu mức làm tròn** |
| **Tổng giao dịch VNINDEX** | **13.826,48043228 tỷ**, gồm thỏa thuận | Raw `"accumulatedVal":13826480432280` | VNIndex.ai 13,83 nghìn tỷ và Thời báo Tài chính 13.826 tỷ | **ĐÃ ĐỐI CHIẾU, không thay số KHỚP** |
| **Độ rộng cùng tập VNDIRECT** | **125 tăng / 181 giảm / 58 đứng**, 4 trần, 6 sàn, 36 không giao dịch | `"advances":125,"declines":181,"noChange":58` raw VNDIRECT | Thời báo Tài chính bài 17:32 `125 mã tăng`, `181 mã giảm`, `58 mã giữ giá`; Ginìty/VNDIRECT cùng tập. Header bài báo có số đếm 129/187 theo cách lọc khác, không dùng. VNIndex.ai 404 mã 128/184/92 khác tập | **ĐÃ ĐỐI CHIẾU theo nội dung bài, ghi khác tập** |
| Top 5 mã ghì chỉ số | **VHM −2,88; MCH −1,02; STB −0,58; GAS −0,55; HPG −0,52 điểm** | VNIndex.ai 09/11 bảng đóng góp có đủ năm mã | Index.vn 09/11 cùng VHM −2,88/MCH −1,02/STB −0,58/GAS −0,55 nhưng không có đủ top5 đồng phương pháp. Không tự ghép từ hai nguồn. | **1 NGUỒN bảng đủ 5** |
| Sức giá các nhóm | Chứng khoán yếu; y tế và dược có sắc xanh tương đối; thực phẩm và bất động sản tiêu cực | Thời báo Tài chính 09/11: **25/35 nhóm ngành giảm**, y tế/dược tăng; Vietstock đăng 09/11: nhóm chứng khoán giảm, SSI/VIX/VND giảm | VNIndex.ai nhóm dịch vụ tài chính **−2,0%**, thực phẩm **−1,7%**, bất động sản **−0,6%** (phân ngành khác); chỉ mô tả sức giá, không khẳng định vốn ròng rút ra | **Sức giá được xác minh; không chứng minh vốn ròng** |
| Ngoại HOSE tổng | **Bán ròng khoảng 807 tỷ** (mua khoảng 1.155, bán khoảng 1.962 theo thông cáo HOSE được CaféF ghi lại) | VNIndex.ai đầu bài `khối ngoại bán ròng 807 tỷ trên HOSE` và VNDIRECT báo **806,4 tỷ** | Vietstock 09/11 nói **>805 tỷ**; Index.vn tổng **797,9 tỷ** là phương pháp khác; VNIndex.ai bảng ước tính −783,4 tỷ tính theo giá đóng | **Số tổng gần −807 tỷ, phạm vi/phương pháp khác nhau, không lấy làm chuỗi KHỚP** |
| Ngoại **KHỚP** HOSE 3–5 phiên | **Không có bảng đủ chuỗi đồng kỳ và cùng phương pháp** | Đã kiểm VNIndex.ai (ước tính tổng), Vietstock Daily (tổng), Thời báo Tài chính (tổng) | Đã kiểm Index.vn (tổng) và VNDIRECT La bàn (bán ròng toàn phiên); chưa có bảng chuỗi riêng KHỚP đúng định nghĩa | **CHƯA XÁC MINH** |
| Tự doanh / basis VN30F1M | **Chưa kiểm được chuỗi cuối phiên theo đúng hợp đồng và phạm vi** | Thử bài Vietstock Daily 10/11 (bản ghi cho 09), Thời báo Tài chính, VNIndex.ai | Không đủ giá hợp đồng/basis được khóa cùng giờ, hoặc bảng tự doanh đúng rổ; không suy theo VN30 cơ sở | **CHƯA XÁC MINH** |
| Cờ sự kiện thanh khoản 09/11 | **Chưa xác lập sự kiện ETF/đáo hạn làm méo khớp** | Bản tin 09/11 của Vietstock, Thời báo Tài chính, lịch sự kiện HNX từng ghi đáo hạn 15/10 | Không gắn cờ tùy ý; thiếu lịch không tự tạo cờ | **Không áp dụng cờ theo chứng cứ hiện có** |

**URL nguồn đã thực sự mở và đọc trực tiếp / hoặc audit nguyên gốc:**
1. VNDIRECT Finfo: `https://api-finfo.vndirect.com.vn/v4/vnmarket_prices`, audit **276 dòng** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42645983196
2. VNIndex.ai phiên 09/11: https://vnindex.ai/vnindex-hom-nay (bảng ảnh hưởng/top5 có số)
3. Thời báo Tài chính Việt Nam 17:32 09/11: https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-9-11-ap-luc-ban-lan-at-vn-index-lui-ve-sat-vung-ho-tro-206641.html
4. Báo Nhân Dân 17:23 09/11: https://nhandan.vn/chung-khoan-ngay-911-co-phieu-chung-khoan-giam-sau-vn-index-mat-hon-11-diem-post1001213.html
5. Vietstock bài 18:47 09/11 cho **phiên 09/11**: https://vn.investing.com/news/stock-market-news/vietstock-daily-10112026-dong-tien-de-dat-2759044
6. taichinh.com 15:05 09/11: https://taichinh.com/chung-khoan
7. OpenBDS / công bố VNDIRECT rổ đếm 125/181/58: https://openbds.com.vn/nhan-dinh-thi-truong/2026-11-09
8. VNDIRECT la bàn ngày 09/11, kết quả số phiên nhưng web trực tiếp từ chối truy cập trong lượt này, **không coi là trang đã mở**: https://www.vndirect.com.vn/la-ban-thi-truong-09-11-2026-vn-index-giam-06-sac-do-lan-rong-toan-thi-truong/
9. CafeF sao thông cáo HOSE 09/11, web trực tiếp từ chối truy cập, **chỉ làm gợi ý tìm nguồn, không coi đã mở**: https://cafef.vn/du-lieu/hose-3018086/hose-diem-tin-giao-dich-ngay-09112026.chn

**Nhật ký tìm lại số chưa xác minh / sai phạm vi:**
- Khớp: VNDIRECT gốc 10.152,84 tỷ; VNDIRECT La bàn 10,2 nghìn tỷ làm tròn (trang không mở trực tiếp được), Vietstock KL khớp 498 triệu, HOSE khớp toàn sàn 10.225 tỷ (chỉ từ kết quả tìm kiếm), VNIndex.ai 13.826 tỷ là **tổng gồm thỏa thuận**. **Không thay khớp bằng tổng.**
- Độ rộng: VNDIRECT 125/181/58; Thời báo Tài chính bài chính 125/181/58; VNIndex.ai tập 404 mã 128/184/92; Nhân Dân 129/187/58; Index.vn 129/187. **Khác tập, không gộp.**
- Top5: VNIndex.ai đủ 5; Index.vn chỉ liệt kê 4 mã; Thời báo Tài chính nêu ba mã chính không có điểm; chất lượng chấm theo **bảng VNIndex.ai 1 NGUỒN**.
- Ngoại KHỚP: thử VNIndex.ai, Vietstock, Thời báo Tài chính, Index.vn, kết quả tổng/ước tính khác phương pháp; chưa có bảng KHỚP cùng phạm vi 3–5 phiên; yếu tố ngoại chấm 0.
- Phái sinh/basis: Vietstock có thông tin giá phái sinh chung, VNIndex.ai cơ sở, Thời báo Tài chính VN30; thiếu chuỗi basis cùng kỳ đúng giờ nên yếu tố 7 =0; không suy tin vĩ mô.
- Tự doanh: Vietstock, Thời báo Tài chính, VNIndex.ai không có bảng đủ giao dịch tự doanh khớp cùng phương pháp; không đưa con số chưa khóa.

## 3. Kiểm toán 276 phiên, tính theo chuỗi VNDIRECT một gốc

Chuỗi lấy từ `vnmarket_prices`, **276 dòng thực** ngày đầu **01/10/2025**, ngày cuối **09/11/2026**; dùng `close` và `nmValue` không gồm thỏa thuận. Các dòng neo có số:
- `"date":"2026-11-05","close":1740.73,"nmValue":13892042115920`
- `"date":"2026-11-06","close":1725.36,"nmValue":15152336638420`
- `"date":"2026-11-09","close":1714.32,"nmValue":10152842181990`.

| Chỉ tiêu | Phép tính và kết quả | Nhãn |
|---|---|---|
| MA20, gồm 09/11 | **1.729,844 → 1.729,84** | TỰ TÍNH |
| MA50 / MA200 | **1.766,9224 → 1.766,92**; **1.790,24745 → 1.790,25** | TỰ TÍNH |
| Độ dốc MA20/5 | 1.729,844−1.734,567=**-4,723 điểm**, dốc xuống | TỰ TÍNH |
| Khớp TB20 phiên **trước 09/11** | **12.614,20456 tỷ** | TỰ TÍNH |
| Khớp/bình quân 20 | 10.152,84218/12.614,20456=**0,805 lần** | TỰ TÍNH |
| So khớp 06/11 | (10.152,84218/15.152,33664−1)*100=**-32,99%** | TỰ TÍNH |
| Độ rộng cùng rổ | 125/181=**0,691**, **>0,67** và <1,5 → 0 (không tự làm tròn thành −1) | TỰ TÍNH |
| Đóng góp top5 giảm | 2,88+1,02+0,58+0,55+0,52=**5,55 điểm**, tỷ trọng **50,27%** mức giảm 11,04, **>50%**, nên theo luật phiên giảm yếu tố chất lượng **0**, không chấm −1 bán dàn trải. Chỉ 1 NGUỒN cho bảng top5. | TỰ TÍNH |
| Vị trí đóng nến | (1714,32−1701,90)/(1728,27−1701,90)=**47,10%** biên độ, trên 1/3 thấp; khớp 0,805×TB20 <1,0, nên **không kích hoạt xả cuối**. | TỰ TÍNH |
| Phân phối ngày 09/11? | Giá giảm −0,64%, **nhưng khớp 10.152,84 < 15.152,34 tỷ** 06/11 ⇒ **KHÔNG phát sinh mới** | TỰ TÍNH |
| Phân phối trong 25 phiên | **6 phiên**: 08/10, 09/10, 19/10, 29/10, 02/11, 06/11; chưa thêm 09/11, chưa có phiên phân phối nào ra cửa sổ. **≥6 chặn cứng; chỉ gỡ khi ≤5** | TỰ TÍNH |
| Nền thị trường | Đóng 1714,32 < MA20 1.729,84, MA50 1.766,92, MA200 1.790,25 và MA20 đang dốc xuống -4,72 điểm/5 phiên → **XẤU**, trần KHÔNG. | Theo Prompt |
| 7 yếu tố | Giá/MA **−1**; thanh khoản **0** (phiên giảm, 0,805×TB20); độ rộng **0** (0,691); chất lượng trụ **0** (50,27% >50); ngoại **0** (thiếu chuỗi khớp); phân phối **−1** (6); phái sinh/vĩ mô **0** (thiếu basis) ⇒ **−2/7**. | Theo Prompt |
| Chặn | **CHẶN CỨNG** do phân phối 6/25. **CHẶN MỀM** vì giá dưới kháng cự có xuất xứ MA20 1.729,84, cách chỉ **0,91%** (<1,5%). Chặn xả cuối không có, không xanh điểm đỏ mã, ngoại KHỚP và mốc vô hiệu Sổ gốc **KHÔNG KIỂM ĐƯỢC**. | Theo Prompt |
| Ba bước | B1 chặn cứng ⇒ **KHÔNG dòng 1**; B2 nền XẤU ⇒ trần KHÔNG; B3 thiếu Sổ tự lưu gốc ⇒ không chạy chống đảo chiều, kết quả cuối **KHÔNG**. | Theo Prompt |
| R:R | Không áp dụng khi không mở vị thế và Sổ gốc thiếu mốc vô hiệu đã công bố. Không tự thay bằng đáy hiện tại. | Theo Prompt |

## 4. Mốc kỹ thuật có nguồn và hành động NẾU–THÌ

- **Hỗ trợ quan sát**: 1.701,90 (đáy 09/11, VNDIRECT/VNIndex.ai/WebGia khớp), khu vực tâm lý 1.700 theo Thời báo Tài chính và VNDIRECT; 1.677,19 (đáy 20 phiên trước theo chuỗi VNDIRECT, một nguồn).
- **Cản gần**: giá đóng 06/11 1.725,36, MA20 1.729,84 (MA 20 phiên VNDIRECT), đỉnh 09/11 1.728,27, MA50 1.766,92. Các mốc chỉ số **không thay mức dừng lỗ riêng từng mã**.
- **NẾU** đóng tiếp dưới 1.701,90/1.700 **THÌ** xem lại rủi ro ở mã đang nắm, thực hiện mức dừng lỗ riêng của cổ phiếu yếu, không bình quân giá xuống, không tăng đòn bẩy.
- **NẾU** giá giữ trên 1.701,90 nhưng chưa lấy lại 1.725,36 và MA20 1.729,84 **THÌ** chế độ phòng thủ, không mở mới; hồi nhẹ không đủ chứng nhận dòng tiền quay lại.
- **NẾU** giá đóng lấy lại MA20 1.729,84 rồi MA50 1.766,92, MA20 quay lên, phân phối giảm còn tối đa 5 và thanh khoản/độ rộng/ngoại KHỚP xác nhận **THÌ** tính lại toàn bộ cổng để xem có được mở mua; không mua tự động.
- **Nhóm nên quan sát:** y tế/dược, truyền thông có sức giá tương đối tốt theo báo Thời báo Tài chính và VNDIRECT; **nhóm yếu cần thận trọng:** chứng khoán/dịch vụ tài chính, bất động sản, thực phẩm. Đó chỉ là phân hóa **giá**, không phải xác nhận dòng vốn ròng cả nhóm. Không khẳng định ngành nào có tiền vào thật khi thiếu chuỗi giá, khớp, ngoại cùng cấp ngành.

## 5. Bảng tự kiểm 20 mục

| # | Hạng mục | Kết quả | Bằng chứng / giới hạn |
|---|---|---|---|
| 1 | Phiên 09/11 và mốc cắt | ĐẠT | VNDIRECT 15:11:08, web 15:00/17:32 đúng ngày |
| 2 | Không dùng tương lai | ĐẠT | Chuỗi chỉ đến 09/11, Vietstock 10/11 là tên bản tin nhưng đăng tối 09 và phân tích phiên 09 |
| 3 | Không bịa số hoặc trích snippet chưa mở | ĐẠT | Raw VNDIRECT và web đã thực sự mở |
| 4 | Nguồn tên/link/phiên thật | ĐẠT | Mục 2 |
| 5 | Số lõi đối chiếu, đúng phạm vi | ĐẠT CÓ GIỚI HẠN | Đóng/% nhiều nguồn, khớp raw có đối chiếu làm tròn, độ rộng VNDIRECT/thông tin bài báo đúng rổ |
| 6 | Tìm lại số liệu chưa xác minh | ĐẠT | Mục 2, ≥3 nguồn |
| 7 | Chuỗi đồng nhất, neo 2+ dòng | ĐẠT | 276 dòng 01/10/2025–09/11/2026 |
| 8 | Số báo cáo truy về dòng chứng cứ | ĐẠT | Mục 2–4 |
| 9 | Không sửa Sổ gốc | ĐẠT | Chưa có Sổ người dùng |
| 10 | Đúng ngày người dùng yêu cầu | ĐẠT | 09/11/2026 |
| 11 | Chế độ ĐẦY ĐỦ hoặc RÚT GỌN | ĐẠT | ĐẦY ĐỦ: MA20, MA50, dốc, TB20, phân phối |
| 12 | Nền xu hướng | ĐẠT | XẤU |
| 13 | Điểm 7 yếu tố thiếu=0 | ĐẠT | −2/7 |
| 14 | Chặn cứng và cách gỡ | ĐẠT CÓ GIỚI HẠN | 6 phân phối đã kiểm; Sổ gốc/ngoại KHỚP thiếu |
| 15 | Ba bước trạng thái | ĐẠT | KHÔNG dòng 1 |
| 16 | Không có vùng mua khi KHÔNG | ĐẠT | Không đưa vùng mua |
| 17 | Mốc, kịch bản, R:R | ĐẠT CÓ GIỚI HẠN | R:R không áp dụng, mốc vô hiệu Sổ không có |
| 18 | Nhóm ngành không bịa tiền ròng | ĐẠT | Chỉ nói sức giá và cảnh báo ngành |
| 19 | Web, Zalo, giữ bố cục | CHỜ HẬU KIỂM | Chỉ nâng ĐẠT khi Pages/byte audit xong |
| 20 | Sổ chỉ bổ sung dòng mới | ĐẠT | Mục 6 |

## 6. Sổ dữ liệu bổ sung nội bộ — KHÔNG đăng web/Zalo

```text
=== SỔ VNINDEX — PHIÊN 09/11/2026 ===
PHẦN A — CHỈ DÒNG MỚI
09/11/2026;1714,32;1728,27;1701,90;-0,639866462651273;10152,84218199;125;181;58;;1830,13;;;Không;ĐÃ ĐỐI CHIẾU chỉ số/độ rộng; khớp 1 NGUỒN chính xác; CHƯA XÁC MINH: ngoại KHỚP liên tiếp, tự doanh và basis

PHẦN B — TRẠNG THÁI MANG SANG
Chế độ: ĐẦY ĐỦ; Nền: XẤU; Điểm: −2/7; Trạng thái: KHÔNG (dòng 1)
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ: 1701,90 (đáy 09/11); 1700 (tâm lý); 1677,19 (đáy 20 phiên trước, 1 NGUỒN)
Cản: 1725,36 (đóng 06/11); 1729,84 (MA20); 1766,92 (MA50)
Phân phối: 08/10;09/10;19/10;29/10;02/11;06/11
Cổng cứng: 6 phân phối/25; chỉ gỡ khi ≤5
Ngoại KHỚP HOSE liên tiếp: CHƯA XÁC MINH
VN30F1M basis: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không có đính chính từ Sổ gốc chưa được cung cấp.
```

## 7. Giá, đồng bộ và xuất bản

- Lúc bắt đầu nghiên cứu, kho giá ở phiên **06/11/2026**. Đã kích hoạt workflow EOD sẵn có bằng **thay duy nhất một dòng chú thích đầu `.github/workflows/eod-daily.yml`** từ ngày 02/11 sang 09/11, không thay cron, script hay cổng giá.
- Workflow EOD https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42645844382 **SUCCESS**: 133/133 mã, **131 khớp CafeF trực tiếp**, MSR/VGI CafeF chênh giá nhưng KBS từng ngày 09/11 xác nhận đúng VNDIRECT; 110 mã khớp chính xác khối lượng, các trường hợp khác biệt khối lượng được ghi vào meta. 181/181 kiểm thử đạt 0 fail. Giá mới được lưu `src/data/research-data.js` `updated=2026-11-09`, sổ sự kiện vị thế 68. **133 báo cáo, 133 logo, 133 ảnh bìa** đạt. HTML/CSS và byte sau deploy được kiểm; CSS SHA256 `c70d18bba556b3f426bfb9a5e094a18727e5d9765d857bd0e9f167fb3e9472bb` **không đổi**.
- Kiểm toán VNINDEX riêng https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42645983196 **SUCCESS**, đọc một chuỗi 276 phiên; workflow chỉ đổi đúng hai ngày tham số từ 06/11 sang 09/11 để kích hoạt **read-only**.
- Lịch EOD tự động từng có các lượt thành công trước đó, nhưng **không phát hiện lượt 09/11 theo cron** trước khi kích hoạt thủ công trong yêu cầu này. Đây là **vấn đề lịch chạy/khả năng trễ GitHub Actions cần tiếp tục theo dõi**, không tự ý thay đổi thời điểm cron hoặc workflow logic trong lượt này. Watchdog 09/11 cũng chưa có log tại lúc chốt nghiên cứu. Không được báo sai là lịch chạy 09/11 đã tự thành công.
- Lịch tự sinh **nhận định v3.3.1** độc lập vẫn chưa được chứng minh hoạt động. Yêu cầu này tạo bản 09/11 thủ công theo quy trình có kiểm toán, chỉ thêm entry ngày mới, giữ cấu trúc HTML/CSS/chuẩn dàn chữ.
