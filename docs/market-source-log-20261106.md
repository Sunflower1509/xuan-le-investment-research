# HỒ SƠ NGUỒN VN-INDEX — 06/11/2026 — v3.3.1

**Phiên phân tích:** Thứ Sáu, 06/11/2026; đã xác minh có giao dịch qua HOSE. **Ngày thực hiện:** 09/11/2026. **Mốc dữ liệu phân tích:** đóng cửa phiên 06/11 giờ Việt Nam. Tài liệu/bảng lịch sử tải sau đó chỉ dùng **bản ghi chính phiên 06/11**, tuyệt đối không dùng diễn biến phiên 09/11. **Sổ tự lưu gốc của người dùng:** không được cung cấp; nhận định 05/11 của website không thay Sổ gốc, chỉ dùng làm đối chứng lịch sử.

## I. Đọc Prompt ba lượt độc lập trước phân tích

**Tệp đính kèm người dùng:** `Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md` v3.3.1 (589 dòng, 54.099 byte UTF-8). Bản chuẩn trong repo `docs/prompt-nhan-dinh-vnindex-v3.md` có thêm phụ lục kỹ thuật bố cục. Các ngưỡng chấm theo tệp đính kèm, không tự cập nhật quy tắc.

1. **Lượt 1 — Cổng dữ liệu 0–I:** định nghĩa dữ liệu lõi, đối chiếu 2 nguồn độc lập, phân biệt **khớp lệnh** / tổng giao dịch, thống nhất phạm vi độ rộng và ngoại KHỚP, số thiếu/1 NGUỒN, trích ngắn từ trang mở, mốc cắt, kiểm toán một chuỗi lịch sử.
2. **Lượt 2 — Logic II:** nền MA20/50/200, bảy yếu tố ±1/0, phân phối 25 phiên, chặn mềm/cứng và điều kiện gỡ, ba bước quy đổi; thiếu dữ liệu là 0, không tự khẳng định đã qua chặn.
3. **Lượt 3 — Đầu ra III–XII:** nguồn từng mốc, điều kiện NẾU–THÌ, kịch bản tốt/cơ sở/xấu, trạng thái KHÔNG không mở vùng mua mới, Zalo **250–400 chữ** không thuật ngữ nội bộ, bảng tự kiểm 20 mục, Sổ chỉ nối dòng mới. Bảo toàn khung kỹ thuật `market-decision-brief-standard.md` v2.2.2, **không sửa HTML/CSS**.

## II. Sổ nguồn ngày 06/11 — mọi số liệu có xuất xứ

| Ô dữ liệu | Số liệu, phạm vi | Trích có số của nguồn 1 đã đọc | Nguồn 2 đã đọc và xử lý khác phạm vi | Nhãn |
|---|---|---|---|---|
| VN-Index | **1.725,36; −15,37; −0,88%** | VNDIRECT raw `"date":"2026-11-06","close":1725.36,"pctChange":-0.882962894877448` | HOSE 06/11 `VNINDEX 1,725.36 -15.37 -0.88`; VNIndex.ai `1.725,36-15,37 (-0,88%)` | **ĐÃ ĐỐI CHIẾU** |
| Chỉ số khác | **VN30 1.846,39 (−1,01%); VNMID 1.858,16 (−0,03%); VNSML 1.221,30 (−0,72%); HNX 256,73 (+0,05%)** | HOSE tin `VN30 1,846.39 -18.84 -1.01`, `VNMIDCAP 1,858.16 -0.57 -0.03`, `VNSMALLCAP 1,221.30 -8.88 -0.72` | FILI 15:35 xác nhận HNX `256.73`; VNIndex.ai đúng VN30, Mid/small HOSE một nguồn cùng phương pháp | **VN30/HNX ĐÃ ĐỐI CHIẾU; Mid/Small 1 NGUỒN HOSE** |
| OHLC | **Mở 1.713,46; cao 1.734,42; thấp 1.713,46; đóng 1.725,36** | VNDIRECT raw `"open":1713.46,"high":1734.42,"low":1713.46` | VNIndex.ai lịch sử: `1.713,46` / `1.734,42` / `1.713,46`; nmquan 06/11 cùng | **ĐÃ ĐỐI CHIẾU** |
| Giá trị **KHỚP** VNINDEX (không gồm thỏa thuận) | **15.152,33663842 tỷ; 786.033.737 CP** | VNDIRECT raw `"nmValue":15152336638420,"nmVolume":786033737` | Stockfly `15.152 tỷ`, báo Nhân Dân 18:41 `hơn 15.152 tỷ`, VNsignal khớp đúng raw. HOSE `15.233 tỷ` thuộc phạm vi khớp toàn thị trường, không cùng tập chỉ số. | **ĐÃ ĐỐI CHIẾU theo làm tròn, số chính xác theo VNDIRECT** |
| Tổng GD VNINDEX | **18.799,442969401 tỷ; 984.184.812 CP** | Raw VNDIRECT `"accumulatedVal":18799442969401,"accumulatedVol":984184812` | HOSE VNINDEX `18,799.44`, VNIndex.ai `18,8 nghìn tỷ` | **ĐÃ ĐỐI CHIẾU**; KHÔNG dùng thay KHỚP |
| Độ rộng cùng tập VNINDEX VNDIRECT | **99 tăng / 206 giảm / 55 đứng**; 2 trần, 6 sàn, 42 không giao dịch | Raw `"advances":99,"declines":206,"noChange":55,"ceilingStocks":2,"floorStocks":6` | VNIndex.ai đếm **404 mã**: `99/211/94`; nmquan 101/212/57 tập rộng hơn; HOSE tin không công bố đếm cùng tập. Không gộp rổ. | **1 NGUỒN cùng tập** |
| Top 5 mã kéo giảm | **VIC −5,61; VHM −2,03; VCB −1,03; MCH −0,86; FPT −0,82 điểm** | VNIndex.ai 06/11: `VIC -5,61`, `VHM -2,03`, `VCB -1,03`, `MCH -0,86`, `FPT -0,82` | FILI xác nhận top4 ghì `hơn 9.54 điểm`; Index.vn có VIC −5,61, VHM −2,03, VCB −1,03 và MCH −0,86. Không có bảng đủ 5 cùng phương pháp khác. | **1 NGUỒN bảng top5; nhiều nguồn cho chiều giảm** |
| Chỉ số ngành HOSE | **VNIT công nghệ −3,84%; VNREAL bất động sản −1,30%; VNMAT vật liệu −1,34%; VNENE năng lượng −0,79%; VNFIN tài chính −0,36%; VNCONS tiêu dùng +0,23%** | HOSE 06/11 bảng ngành: `VNIT 2,664.32 -106.39 -3.84`, `VNREAL 3,150.30 -41.37 -1.30` | VNIndex.ai ngành theo vốn hóa riêng `Bất động sản -1,4%`, `Dịch vụ tài chính +0,5%`; không gộp chỉ số VNFIN với ngành dịch vụ tài chính. | **Chỉ số ngành HOSE 1 NGUỒN; khác rổ theo đơn vị** |
| Ngoại HOSE **tổng** | **+394 tỷ, mua 2.419; bán 2.025 tỷ** | HOSE `2,419 12.78% 2,025 10.70% 394` trong mục ngoại **tổng** | Stockfly `+394 tỷ`, nmquan `+393,5`, báo Nhân Dân ròng ba sàn +435 tỷ khác phạm vi | **ĐÃ ĐỐI CHIẾU TỔNG**, **KHÔNG chứng minh chuỗi ngoại KHỚP** |
| Ngoại **KHỚP** 3–5 phiên HOSE | **Chưa có chuỗi đồng nhất phạm vi để khóa chấm điểm hoặc cổng chặn** | Thử HOSE bản tổng, Stockfly tổng và rổ 120, VNIndex.ai tổng/ước tính | nmquan báo tổng; không cộng ngược tổng thành ròng khớp, không dùng 394 tỷ thay số khớp | **CHƯA XÁC MINH** |
| Tự doanh, basis VN30F1M đúng kỳ | **Chưa đủ bảng cuối phiên + chuỗi đúng định nghĩa** | Thử Stockfly tự doanh tổng và khớp `+405/+228 tỷ`, nmquan ròng +278,5 tỷ, VNIndex.ai không có basis | Hai cách thống kê tự doanh khác phạm vi; không tính basis từ giá cơ sở thay thế | **CHƯA XÁC MINH** |
| Cờ sự kiện ngoại lệ 06/11 | **Chưa xác lập cờ ETF/đáo hạn tác động thanh khoản** | Thử HOSE tin sự kiện, FILI, HNX lịch phái sinh | Đã xác lập loại sự kiện 15/10 trong kỳ trước; không tự áp cho 06/11 | **Không gắn cờ theo dữ liệu hiện có** |

**URL nguồn đã mở và đọc đúng phiên:**
1. VNDIRECT raw 275 phiên và audit máy: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42539562621 ; API https://api-finfo.vndirect.com.vn/v4/vnmarket_prices
2. **HOSE chính thức** (Stockbiz sao lưu thông tin, 06/11 16:47): https://web.stockbiz.vn/News/2026/11/6/1922750/hose-diem-tin-giao-dich-ngay-06-11-2026.aspx
3. VNIndex.ai **bản riêng 06/11**, không dùng nội dung ngày 09/11: https://vnindex.ai/vn-index/phien/06-11-2026
4. Báo Nhân Dân **06/11 18:41**: https://nhandan.vn/chung-khoan-ngay-611-vn-index-giam-hon-15-diem-khoi-ngoai-mua-rong-tro-lai-post1000698.html
5. Tạp chí Fili **06/11 15:35**: https://fili.vn/2026/11/nhip-dap-thi-truong-0611-tru-lon-de-nang-vn-index-giam-hon-21-diem-dau-phien-1636-1512213.htm
6. Stockfly, lưu trữ ngày 06/11: https://stockfly.me/thi-truong/2026-11-06
7. Bảng nmquan, chỉ dùng dòng **06-11-2026**: https://nmquan.vn/data/chi-so/vn-index/lich-su
8. VNsignal VNINDEX lịch sử `06/11/2026 ... 15.152.336.638.420`: https://vnsignal.vn/chi-so/vnindex/lich-su-gia

**Nhật ký tìm lại ô thiếu/1 NGUỒN (mỗi nhóm đã thử ≥3 trang):**
- Khớp: VNDIRECT raw **có số, đã dùng**; Stockfly **có số làm tròn, đã dùng**; HOSE toàn thị trường **có số, khác phạm vi**; VNIndex.ai **chỉ tổng**, không sử dụng; báo Nhân Dân **khớp làm tròn, đã dùng**.
- Độ rộng: VNDIRECT **99/206/55 có số, đã dùng**; VNIndex.ai tập 404 mã **99/211/94 có số khác phạm vi**; nmquan **101/212/57 có số khác phạm vi**; HOSE **không ghi bảng độ rộng cùng tập**. Chọn một tập duy nhất.
- Top 5: VNIndex.ai **đủ 5 mã**; FILI **top 4, tổng 9,54**; Index.vn **top 4**; không tự ghép từng điểm từ các nguồn khác nhau.
- Ngoại khớp: HOSE **tổng**, Stockfly **tổng và rổ 120 mã khác**, VNIndex.ai **tổng/ước tính**, nmquan **tổng**. Không có chuỗi 5 phiên đúng phạm vi để chấm +1 dù ngày 06/11 ngoại tổng mua ròng.
- Tự doanh/basis: Stockfly **khớp/tổng khác phương pháp**, nmquan **tổng khác tập**, HOSE tin cơ sở **không có basis**, VNIndex.ai **không có basis đúng kỳ**. Chấm 0, không tự đoán hợp đồng.

## III. Chỉ báo tự tính, toàn bộ trên một gốc duy nhất

**Gốc chuỗi (a):** VNDIRECT Finfo `code=VNINDEX`, **275 dòng** từ **01/10/2025** đến **06/11/2026**, không nối nguồn. Có 2+ dòng raw:
- `"date":"2026-11-03","close":1699.62,"nmValue":10474103780060`
- `"date":"2026-11-05","close":1740.73,"nmValue":13892042115920`
- `"date":"2026-11-06","close":1725.36,"nmValue":15152336638420`

| Phép tính | Số | Nhãn |
|---|---|---|
| MA20/MA50/MA200 gồm 06/11 | **1.730,1770 / 1.769,0624 / 1.791,0715**, hiển thị **1.730,18 / 1.769,06 / 1.791,07** | **TỰ TÍNH** |
| MA20 dốc so 5 phiên | 1.730,1770 − 1.736,6910 = **-6,5140 điểm** | **TỰ TÍNH** |
| TB20 KHỚP (20 phiên trước 06/11, không gồm 06/11) | **12.591,312052 tỷ** | **TỰ TÍNH** |
| Giá trị khớp / TB20 | 15.152,33663842 / 12.591,312052 = **1,203 lần** | **TỰ TÍNH** |
| Khớp so 05/11 | (15.152,33663842 / 13.892,04211592−1)×100 = **+9,07%** | **TỰ TÍNH** |
| Tỷ lệ độ rộng cùng tập | 99/206 = **0,481**, ≤0,67 → **−1** | **TỰ TÍNH** |
| Top 5 ghì giảm | 5,61+2,03+1,03+0,86+0,82 = **10,35**; 10,35/15,37 = **67,34%** >50% → **0** cho yếu tố 4 phiên giảm, không chấm −1 bán dàn trải | **TỰ TÍNH** từ bảng 1 NGUỒN |
| Vị trí đóng trong biên độ | (1.725,36−1.713,46)/(1.734,42−1.713,46) = **56,77%**. **Không nằm 1/3 cuối**, nên không kích hoạt chặn cứng xả cuối theo công thức. | **TỰ TÍNH**, OHLC hai nguồn |
| Tạo phân phối mới? | Giảm **−0,883%** và khớp **15.152,34 > 13.892,04 tỷ của 05/11** ⇒ **Có phân phối mới** | **TỰ TÍNH** |
| Phân phối còn hiệu lực 25 phiên | **6**: 08/10, 09/10, 19/10, 29/10, 02/11, **06/11 mới**. Ngày **02/10 rời** cửa sổ 25, nên số vẫn 6, không phải 7; 15/10 có cờ đáo hạn đã được loại theo nhật ký trước. **≥6 = chặn cứng, chỉ gỡ khi ≤5.** | **TỰ TÍNH** |
| Nền xu hướng | Giá 1.725,36 **dưới MA20 1.730,18**, **MA50 1.769,06**, **MA200 1.791,07**, MA20 dốc xuống **6,51 điểm** trong 5 phiên → **XẤU**, trần **KHÔNG** | Theo Prompt |
| Điểm bảy yếu tố | Giá/MA **−1**, thanh khoản **−1** (giảm khi khớp 1,203×TB20), độ rộng **−1** (0,481), chất lượng top5 **0** (67,34% >50%, không đủ chấm bán dàn trải), ngoại KHỚP **0** (thiếu chuỗi), sức khỏe xu hướng **−1** (6 phân phối), phái sinh/vĩ mô **0** (chưa đủ) ⇒ **−4/7** | Theo Prompt |
| Cổng chặn | **Cứng 6 phân phối/25**; không xả cuối, không xanh điểm đỏ mã. Ngoại KHỚP liên tiếp, chặn vô hiệu từ Sổ người dùng: **KHÔNG KIỂM ĐƯỢC**. Chặn cứng phân phối đủ độc lập để trạng thái KHÔNG. | Theo Prompt |
| Ba bước trạng thái | **B1 KHÔNG (dòng 1)** vì chặn cứng; **B2 KHÔNG** vì nền XẤU; **B3 bỏ qua** vì không có Sổ người dùng; kết quả **KHÔNG dòng 1, PHÒNG THỦ**. | Theo Prompt |
| R:R | **KHÔNG ÁP DỤNG** do không có mốc vô hiệu đang hiệu lực của Sổ người dùng; không tự tạo stop từ đáy hôm nay. | Theo Prompt |

## IV. Hành động theo mốc có xuất xứ

- **Hỗ trợ quan sát:** đáy **1.713,46** ngày 06/11 (VNDIRECT, VNIndex.ai và nmquan), giá đóng **1.710,72** của ngày 02/11, đáy 20 phiên trước **1.677,19** (VNDIRECT, 1 nguồn). **Đây không phải stop tự động cho mọi mã.**
- **Kháng cự gần:** MA20 **1.730,18**, đỉnh 06/11 **1.734,42**, giá đóng 05/11 **1.740,73**, MA50 **1.769,06**, MA200 **1.791,07**.
- **NẾU** vẫn dưới MA20 và số phân phối ≥6 **THÌ** không mua đuổi/bình quân xuống, giảm sử dụng đòn bẩy.
- **NẾU** chỉ số đóng dưới đáy 06/11 **1.713,46** rồi dưới giá đóng 02/11 **1.710,72** **THÌ** kiểm tra mã yếu và xử lý những vị thế vi phạm **stop riêng đã đặt**; không buộc bán toàn bộ mã khỏe chỉ do chỉ số.
- **NẾU** lấy lại MA20 **1.730,18** và đóng trên MA50 **1.769,06**, MA20 quay lên, phân phối ≤5, khớp và độ rộng/ngoại KHỚP xác nhận **THÌ** đánh giá lại cổng trạng thái trước khi xét mua; không mua tự động.
- **Bản đồ ngành:** công nghệ **−3,84%** và bất động sản **−1,30%** theo chỉ số ngành HOSE yếu; dịch vụ tài chính theo VNIndex.ai **+0,5%** có sức giá chọn lọc, một số VND/VIX/KDH tăng trong phiên (từng mã không đại diện ngành). **Chưa ngành nào đủ ba dữ liệu giá+khớp+ngoại cùng rổ để khẳng định tiền ròng vào/ra cả nhóm**. Không tự gọi tên luân chuyển tiền X→Y.

## V. Tự kiểm 20 yêu cầu v3.3.1

| # | Mục | Đánh giá | Ghi chú |
|---|---|---|---|
| 1 | Có phiên 06/11, mốc cắt | ĐẠT | HOSE 06/11, VNDIRECT 15:11:10 |
| 2 | Không dùng dữ liệu các phiên sau | ĐẠT | Audit chỉ tới 06/11; nguồn lịch sử chỉ dùng dòng 06 |
| 3 | Số lõi có trích nguồn thật | ĐẠT | JSON raw và các trang mở HOSE/VNIndex.ai |
| 4 | Link nguồn đã mở đúng phiên | ĐẠT | Mục II có URL |
| 5 | Đúng 2 nguồn, rõ phạm vi | ĐẠT CÓ GIỚI HẠN | Đóng/% 2 nguồn; độ rộng 1 NGUỒN; khớp có đối chiếu làm tròn |
| 6 | Nhật ký tìm lại số 1 NGUỒN/thiếu | ĐẠT | Mục II nêu ít nhất 3 nguồn/tập |
| 7 | Chuỗi đồng nhất, 2+ neo, tính bằng công cụ | ĐẠT | 275 phiên VNDIRECT, 01/10/2025–06/11/2026 |
| 8 | Mọi số trong web/Zalo có dòng nhật ký | ĐẠT | Mục II–IV |
| 9 | Không sửa Sổ gốc | ĐẠT | Không có Sổ người dùng |
| 10 | Ngày đúng lệnh 06/11 | ĐẠT | Không dùng phiên 09/11 |
| 11 | ĐẦY ĐỦ/RÚT GỌN đúng | ĐẠT | Có MA20, MA50, dốc, TB20 và phân phối |
| 12 | Nền xu hướng đủ MA | ĐẠT | XẤU, đóng dưới 3 MA, MA20 giảm |
| 13 | 7 yếu tố/0 cho dữ liệu thiếu | ĐẠT | −4/7 |
| 14 | Chặn, hiệu lực và gỡ | ĐẠT CÓ GIỚI HẠN | Chặn 6 phân phối, ngoại KHỚP/Sổ không kiểm được |
| 15 | Ba bước trạng thái/dòng 1 | ĐẠT | KHÔNG dòng 1 |
| 16 | Không đăng vùng mua mới khi KHÔNG | ĐẠT | Không có vùng mua |
| 17 | Mốc có nguồn; R:R và 3 kịch bản | ĐẠT CÓ GIỚI HẠN | R:R không áp dụng vì thiếu mốc vô hiệu Sổ |
| 18 | Ngành không suy tiền ròng | ĐẠT | Chỉ công bố sức giá ngành có nguồn |
| 19 | Bài Zalo, web đúng khung và số | CHỜ HẬU KIỂM | Chỉ ĐẠT sau Github Pages thành công và byte audit |
| 20 | Sổ chỉ bổ sung mới, không chép dòng cũ | ĐẠT | Mục VI |

## VI. Sổ tự lưu bổ sung chỉ dành cho người dùng, KHÔNG đăng web/Zalo

```text
=== SỔ VNINDEX — PHIÊN 06/11/2026 ===
PHẦN A — DÒNG MỚI
06/11/2026;1725,36;1734,42;1713,46;-0,882962894877448;15152,33663842;99;206;55;;1846,39;;;Có;1 NGUỒN: độ rộng đúng tập; CHƯA XÁC MINH: ngoại KHỚP liên tiếp, phái sinh basis

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG (dòng 1), phòng thủ
Chế độ: ĐẦY ĐỦ; nền XẤU; điểm −4/7
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ: 1713,46 (đáy 06/11); 1710,72 (đóng 02/11); 1677,19 (đáy 20 phiên trước)
Kháng cự: 1730,18 (MA20); 1734,42 (đỉnh 06/11); 1740,73 (đóng 05/11); 1769,06 (MA50)
Phân phối còn hiệu lực: 08/10;09/10;19/10;29/10;02/11;06/11
Chặn cứng: phân phối 6/25; chỉ gỡ khi ≤5
Ngoại KHỚP liên tiếp: CHƯA XÁC MINH
VN30F1M basis: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Chưa sửa dòng nào vì không có Sổ gốc người dùng.
```

## VII. Giám sát hoạt động giá và website

- EOD **06/11** đã được khóa ở `src/data/research-data.js` (`updated=2026-11-06`), 133 mã, **131 giá đóng khớp CafeF trực tiếp, DRI và MSR được KBS xác nhận giá VNDIRECT**. Workflow đã SUCCESS và kiểm thử 181/181, byte hậu triển khai khớp: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42254736511
- Workflow đầu ngày **06/11 bị lỗi tại Deploy to GitHub Pages do GitHub Pages giữ trạng thái `deployment_queued` đến timeout**, **không phải lỗi xác minh EOD**. https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42248825829. Workflow sau đó **SUCCESS**, không cần can thiệp/đổi logic; không xóa lịch sử lỗi, không nới cổng Data Gate.
- Watchdog sau EOD ngày 06/11, runs 42257078887 và 42262375507, **SUCCESS**. Đồng bộ giá và trạng thái sau xuất bản đã được đối chiếu.
- **Không sửa** các workflow EOD/watchdog, script kiểm chứng giá, cấu trúc web, CSS, HTML hay quy tắc dừng lỗ. Workflow audit *chỉ đọc* thay 2 mốc ngày từ 05 sang 06 để lấy đúng 275 phiên, không sửa thuật toán.
- **Chưa xác minh lịch độc lập sinh bài v3.3.1 tự động hằng ngày**, không đồng nhất EOD đã tự khóa với bài nhận định tự sinh.
