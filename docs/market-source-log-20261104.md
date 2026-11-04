# NHẬT KÝ NGUỒN & KIỂM SOÁT VN-INDEX — PHIÊN 04/11/2026 — v3.3.1

**Ngày phân tích:** thứ Tư 04/11/2026 (HOSE có phiên). **Ngày xử lý:** 05/11/2026. **Mốc cắt:** hết 04/11/2026 theo giờ Việt Nam. Bài về số **của phiên 04/11** xuất bản sau giờ ATC có thể dùng đối chứng số của phiên, tuyệt đối không dùng giá/sự kiện của phiên 05/11. **Sổ dữ liệu người dùng của ngày trước:** không được dán trong lượt này; nhận định website ngày 03/11 không mặc nhiên là Sổ gốc.

**Prompt nguồn:** `docs/prompt-nhan-dinh-vnindex-v3.md`, v3.3.1, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`. Đã đọc và rà soát ba lượt độc lập:
1. **Cổng dữ liệu, 0–I:** phiên có giao dịch, ngày và mốc cắt, ít nhất hai nguồn, quy ước HOSE **khớp** không gồm thỏa thuận, độ rộng cùng tập, nhãn 1 NGUỒN, không lấp số thiếu, 273 dòng lịch sử một nguồn.
2. **Logic II:** nền MA/dốc, 7 yếu tố, phiên phân phối/25, 2 loại chặn, hiệu lực/gỡ và 3 bước chốt.
3. **Xuất bản III–XII/phụ lục:** mốc có nguồn, NẾU–THÌ, không mua khi KHÔNG, Zalo 250–400 chữ, 20 tự kiểm, Sổ chỉ thêm dữ liệu mới, KHÔNG thay bố cục v2.2.2.

## A. Nhật ký nguồn lõi — đối chiếu phiên 04/11

| Dữ liệu | Giá trị / đơn vị, đúng phạm vi | Nguồn 1 (nguyên gốc, trích có số) | Nguồn 2 và phân xử | Nhãn |
|---|---|---|---|---|
| VN-Index đóng cửa | **1.733,02, tăng 33,40 điểm (+1,97%)** | VNDIRECT raw `"close":1733.02,"change":33.4000000000001,"pctChange":1.96514515009238` | HOSE tin 04/11 `VNINDEX 1,733.02 33.40 1.97` (cổng Stockbiz/CafeF); VietnamPlus 16:29 `1.733,02`, VNIndex.ai `1.733,02 ... +1,97%` | **ĐÃ ĐỐI CHIẾU** |
| VN30/HNX/VNMID/VNSML | VN30 **1.862,07 (+2,56%)**; HNX **257,88 (+2,57%)**; VNMID **1.850,28 (+3,51%)**; VNSML **1.228,40 (+1,96%)** | HOSE tin `VN30 1,862.07 46.47 2.56`, `VNMIDCAP 1,850.28 62.79 3.51`, `VNSMALLCAP 1,228.40 23.58 1.96` | VietnamPlus 16:29 trùng VN30/HNX, Taichinh.com EOD trùng cả nhóm | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp | **1.697,71 / 1.738,24 / 1.692,36** (VNDIRECT) | Raw `"open":1697.71,"high":1738.24,"low":1692.36` | VNIndex.ai/Stockfly/nmquan cùng mở/thấp, nhưng **cao** ghi 1.738,20; có độ chênh 0,04 điểm. Không dùng giá cao chưa đồng thuận để đặt trigger nhạy cảm; dùng mốc 1.741,62 phiên cũ và MA để hành động. | **Mở/thấp ĐÃ ĐỐI CHIẾU; cao 1 NGUỒN VNDIRECT, sai khác 0,04** |
| **Khớp lệnh VNINDEX** | **15.284,01739027 tỷ**, KL **785.061.515 cổ phiếu** | VNDIRECT Finfo raw `"nmValue":15284017390270,"nmVolume":785061515` | Stockfly/Thời báo tài chính/Nhân Dân nói **15.284 tỷ** làm tròn, Finhay 15.263,26 tỷ chỉ cổ phiếu (loại ETF/chứng quyền), HOSE tin `15.361` trên tập giao dịch lớn hơn. Không tự lấy tổng thay khớp. | **ĐÃ ĐỐI CHIẾU mức làm tròn, số gốc theo 1 nguồn VNDIRECT** |
| **Tổng VNINDEX, gồm thỏa thuận** | **17.954,95107739 tỷ**, KL **908.590.883** | VNDIRECT `"accumulatedVal":17954951077390,"accumulatedVol":908590883` | HOSE tin `VNINDEX ...17,954.95`; Nhân Dân `17.954,95` | **ĐÃ ĐỐI CHIẾU**; không dùng để tính TB20 |
| **Độ rộng HOSE cùng tập VNDIRECT** | **247 tăng / 68 giảm / 40 đứng**, 21 trần, 4 sàn | VNDIRECT raw `"advances":247,"declines":68,"noChange":40,"ceilingStocks":21,"floorStocks":4` | Thời báo Tài chính 17:27 `247 tăng, 68 giảm, 40 giữ giá` và Taichinh.com cùng tập; VNIndex.ai tập 404 mã `266/71/67` khác đếm. | **ĐÃ ĐỐI CHIẾU cùng tập** |
| Top 5 kéo điểm tăng | **VCB +2,24; VHM +2,20; VPB +1,96; CTG +1,60; FPT +1,36**, tổng **9,36 điểm** | VNIndex.ai bản 04/11, bảng điểm các mã | VietnamPlus ghi **2,27/2,23/2,03/1,64/1,44**, tổng **9,61 điểm** (lệch nhẹ do cách cập nhật/ước lượng). Cả hai cho tỷ lệ top5 <50%; dùng số VNIndex.ai chính và gắn 1 NGUỒN. | **1 NGUỒN số cụ thể**; kết luận phân tán được hai nguồn ủng hộ |
| Chỉ số ngành HOSE | **VNFIN +2,90%; VNIT +6,69%; VNIND +3,59%; VNMAT +2,09%; VNREAL +1,01%** | HOSE bảng ngành trong điểm tin 04/11, số theo chỉ số ngành | Thời báo Tài chính 32/35 nhóm tăng; VietnamPlus ghi các nhóm chứng khoán/công nghệ/ngân hàng cùng tăng | **ĐÃ ĐỐI CHIẾU có ≥3 nhóm tăng; chỉ số ngành gốc 1 NGUỒN** |
| Ngoại HOSE **tổng**, không thay ngoại **KHỚP** | **Ròng gần −66 tỷ**, nhiều bài có mức **−66,19 đến −66,3**, một nguồn là toàn sàn gồm thỏa thuận | Thời báo Tài chính `-66 tỷ`, Fili/Vietstock `66.19 tỷ`, Nhân Dân `66,3 tỷ` | Stockfly `-65 tỷ` làm tròn, HODL/Finhay `mua 2131,59 bán 2176,38` thuộc phương pháp chỉ khớp; không gộp các phạm vi | **SỐ TỔNG NHẤT QUÁN XẤP XỈ, ngoại KHỚP chuỗi không xác minh** |
| Ngoại KHỚP HOSE chuỗi 3–5 phiên | **Không đủ dữ liệu đồng phạm vi từ ba nguồn** | Thử báo HOSE bản tổng; Stockfly chỉ phiên và rổ 119; nmquan tổng và chuỗi phương pháp khác | Không suy 5 phiên bán khớp chỉ từ “9 phiên bán tổng” hoặc bài khác | **CHƯA XÁC MINH** |
| Tự doanh và basis VN30F1M | **Thiếu bảng đủ chuỗi cùng định nghĩa/hợp đồng** | Thử Stockfly tự doanh khớp +265, tổng +299; Finhay tổng cổ phiếu khác tập; HNX lịch phái sinh và VietnamPlus chỉ cơ sở | Không gán basis cuối phiên hoặc kết luận tự doanh toàn ngành từ hai dòng khác phương pháp | **CHƯA XÁC MINH** |
| Cờ sự kiện tác động ngày 04/11 | **Chưa có bằng chứng xác lập sự kiện ETF/đáo hạn khiến méo giao dịch toàn sàn** | Tin HOSE, HNX lịch đáo hạn (tháng 10 ngày 15/10), VNIndex.ai cập nhật 04/11 | Không gắn cờ suy diễn; rà các bản thông báo có trong nhật ký nguồn | **Không gắn cờ dựa trên bằng chứng hiện có** |

**Nguồn cụ thể đã đọc và đối chiếu:**
- Raw API lịch sử VNDIRECT đủ 273 dòng + kết quả máy đọc: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41930602779 ; API https://api-finfo.vndirect.com.vn/v4/vnmarket_prices.
- HOSE tổng kết 04/11, bản sao kết quả nguồn Sở: https://web.stockbiz.vn/News/2026/11/4/1921844/hose-diem-tin-giao-dich-ngay-04-11-2026.aspx (cổng trang **không mở trực tiếp được** trong lần này; đối chiếu thêm các báo có nội dung nguyên số).
- VietnamPlus/TTXVN 04/11 16:29 (đã mở): https://www.vietnamplus.vn/chung-khoan-ngay-411-vn-index-vot-tang-hon-33-diem-sau-4-phien-giam-lien-tiep-post1146154.vnp
- Báo Nhân Dân 04/11 16:33 (đã mở): https://nhandan.vn/chung-khoan-ngay-411-vn-index-but-pha-hon-33-diem-sac-xanh-phu-rong-thi-truong-post1000113.html
- Thời báo Tài chính VN 04/11 17:27 (đã mở): https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-4-11-co-phieu-dong-loat-bat-tang-vn-index-phuc-hoi-manh-206424.html
- VNIndex.ai phiên 04/11 (đã mở): https://vnindex.ai/vnindex-hom-nay
- Stockfly theo phút và khớp (đã mở): https://stockfly.me/thi-truong
- Dữ liệu lịch sử riêng phiên 04/11 của nmquan (đã mở): https://nmquan.vn/data/chi-so/vn-index/lich-su

**Nhật ký tìm lại số 1 NGUỒN/chưa xác minh:**
- *Khớp*: VNDIRECT 15.284,01739027 tỷ; Stockfly/Nhân Dân/Thời báo Tài chính 15.284 tỷ làm tròn; Finhay 15.263,26 tỷ tập riêng cổ phiếu; HOSE 15.361 tỷ phạm vi tổng khớp khác, không ép số về nhau.
- *Mức cao*: VNDIRECT 1.738,24, VNIndex.ai + Stockfly/nmquan 1.738,20; không dùng làm mốc kích hoạt mua/bán.
- *Top5*: VNIndex.ai 9,36; VietnamPlus 9,61; vì khác mức điểm chính xác, không nói đã khóa từng mã bằng 2 nguồn; cả hai đều dưới 50% mức tăng.
- *Ngoại khớp*: thử Thời báo Tài chính -66 tổng; Fili -66,19 tổng; nmquan -66,3 tổng; Stockfly -65 tổng; Finhay/HODL -44,79 khớp không có chuỗi 5 phiên cùng phương pháp.
- *Tự doanh/basis*: Stockfly (+265 khớp, +299 tổng), Finhay (khác phương pháp), HNX lịch, VNIndex.ai chỉ giá cơ sở. Không chốt chuỗi 3 phiên hợp đồng VN30F1M.
- *Độ rộng*: VNDIRECT 247/68/40; Thời báo Tài chính cùng; Taichinh.com cùng; VNIndex.ai tập 404 mã 266/71/67; VietnamPlus 505/170 toàn nhóm giao dịch khác.

## B. Tính toán kiểm toán 273 phiên (không nội suy)

Nguồn chuỗi **(a)**: VNDIRECT `vnmarket_prices`, đủ **273 dòng** từ **01/10/2025** đến **04/11/2026**. Các phép tính dùng `close` và `nmValue` cùng một nguồn, có 2 hàng neo nguyên gốc:
- `"date":"2026-11-02","close":1710.72,"nmValue":15840068619090`
- `"date":"2026-11-03","close":1699.62,"nmValue":10474103780060`
- Dòng khóa `"date":"2026-11-04","open":1697.71,"high":1738.24,"low":1692.36,"close":1733.02,"nmValue":15284017390270`.

| Phép tính | Giá trị | Nhãn |
|---|---|---|
| MA20 (gồm 04/11) | **1.730,5755 → 1.730,58** | TỰ TÍNH |
| MA50 | **1.771,3444 → 1.771,34** | TỰ TÍNH |
| MA200 | **1.792,53725 → 1.792,54** | TỰ TÍNH |
| Dốc MA20 so 5 phiên trước | 1.730,5755 − 1.736,1800 = **-5,6045 điểm**; còn dốc xuống | TỰ TÍNH |
| TB20 khớp 20 phiên liền trước không gồm 04/11 | **12.393,239148 tỷ** | TỰ TÍNH |
| Khớp/TB20 | 15.284,01739027 / 12.393,239148 = **1,233×** | TỰ TÍNH |
| Thay đổi khớp vs 03/11 | (15.284,01739027 / 10.474,10378006 −1)×100 = **+45,92%** | TỰ TÍNH |
| Độ rộng | 247/68 = **3,632** ≥1,5 → **+1** | TỰ TÍNH |
| Top 5 đóng góp cùng chiều | 9,36 / 33,40 = **28,02%**, ≤50% và trên 3 nhóm ngành tăng ⇒ **+1**. Dữ liệu top5 VNIndex.ai một nguồn; VietnamPlus tổng 9,61 vẫn ≤50%. | TỰ TÍNH, nguồn đóng góp 1 NGUỒN |
| Đóng ở phần nến trên | (1.733,02−1.692,36)/(1.738,24−1.692,36) = **88,62%** vị trí biên; đóng cao, không chạm chặn xả cuối | TỰ TÍNH trên OHLC VNDIRECT |
| Phân phối mới | **KHÔNG**: 04/11 tăng +1,97%, không thỏa phiên giảm ≥0,2% | TỰ TÍNH |
| Phân phối còn hiệu lực | **6** ngày: 02/10; 08/10; 09/10; 19/10; 29/10; 02/11. **30/09 rời** cửa sổ 25. Không có ngày nào đã tăng 5% so giá đóng của phiên phân phối mà đủ để gỡ ngoài việc ra cửa sổ; lịch 15/10 đáo hạn đã loại từ kiểm toán trước. | TỰ TÍNH |
| Nền xu hướng | VN-Index **1.733,02 > MA20 1.730,58**, nhưng **< MA50 1.771,34**, **< MA200 1.792,54** và MA20 dốc xuống ⇒ **XẤU** (trần KHÔNG) | TỰ TÍNH |
| 7 điểm | Giá/MA **0**; khớp **+1**; độ rộng **+1**; chất lượng kéo điểm **+1**; ngoại **0** thiếu chuỗi khớp; phân phối **−1**; phái sinh/vĩ mô **0** thiếu ⇒ **+2/7** | Theo v3.3.1 |
| Cổng cứng | **6 phân phối/25 ≥6: CHẶN CỨNG**. Chặn xả cuối **không kích hoạt**. Ngoại KHỚP + mốc vô hiệu Sổ cũ: **KHÔNG KIỂM ĐƯỢC**; không coi đã qua. | Theo v3.3.1 |
| Trạng thái 3 bước | Bước 1: chặn cứng ⇒ **KHÔNG dòng 1** dù điểm +2; Bước 2: nền XẤU ⇒ **KHÔNG**; Bước 3: không Sổ người dùng nên bỏ chống đảo chiều ⇒ **KHÔNG dòng 1**. | Theo v3.3.1 |
| R:R | **Không áp dụng**, thiếu mốc vô hiệu Sổ gốc, không mở vị thế mới. | Theo v3.3.1 |

## C. Hành động thực chiến NẾU – THÌ

- **Mốc gần:** MA20 **1.730,58** vừa được lấy lại, hỗ trợ quan sát kỹ thuật, không phải điểm mua. Vùng cần kiểm khi suy yếu: **1.699,62** (đóng 03/11), **1.692,36** (đáy 04/11 đã có VNDIRECT/VNIndex.ai) và **1.677,19** (đáy 20 phiên trước, VNDIRECT).
- **Cản rõ ràng có nguồn:** mốc **1.741,62** (đóng 30/10); MA50 **1.771,34**; MA200 **1.792,54**. Đỉnh 04/11 khác nhau 0,04 nên không lấy làm trigger chắc chắn.
- **NẾU** giá đóng giữ trên MA20 **1.730,58** và độ rộng/khớp tiếp tục tích cực **THÌ** ưu tiên giữ các mã thực sự khỏe đang có, **KHÔNG mở mới** khi phân phối vẫn 6 và nền XẤU.
- **NẾU** đóng dưới **1.699,62**, hoặc thủng **1.692,36** cùng độ rộng xấu đi **THÌ** kiểm tra từng vị thế, thực hiện đúng stop của mã vi phạm, không bình quân giá xuống.
- **NẾU** giá đóng vượt MA50 **1.771,34**, MA20 đổi dốc lên, phân phối còn ≤5 và ngoại KHỚP/dòng tiền xác minh **THÌ** tái đánh giá toàn bộ chặn và điểm; không tự chuyển CÓ chỉ do phiên bật mạnh.
- **Nhóm cần theo dõi, không mua theo chỉ số:** chứng khoán, công nghệ và ngân hàng đang có giá tốt và độ rộng thuận theo nguồn TTXVN/Thời báo Tài chính; y tế và một số ngành công nghiệp đơn lẻ tương đối yếu. Không suy có dòng tiền **ròng** từng ngành chỉ từ sức giá một phiên.

## D. Bảng tự kiểm 20 mục

| # | Kiểm soát | Kết quả | Chứng cứ |
|---|---|---|---|
| 1 | Xác nhận ngày có phiên, mốc cắt | ĐẠT | HOSE 04/11, raw 15:11:09 |
| 2 | Không dùng phiên sau 04/11 | ĐẠT | audit raw chỉ tới 04/11 |
| 3 | Không lấy trí nhớ/snippet làm nguồn dữ liệu | ĐẠT | JSON gốc + VietnamPlus, Nhân Dân, Thời báo Tài chính, VNIndex.ai đã mở |
| 4 | Nguồn và link thật, đúng phiên | ĐẠT CÓ GIỚI HẠN | HOSE tin có kết quả nguyên số nhưng mở trực tiếp bị lỗi; số đối chiếu ở 3 báo mở được |
| 5 | Số lõi đối chiếu và đơn vị | ĐẠT CÓ GIỚI HẠN | Đóng/% nhiều nguồn, khớp nguyên gốc VNDIRECT + làm tròn bên ngoài; độ rộng đúng tập |
| 6 | Nhật ký tìm lại số thiếu | ĐẠT | phần A có ≥3 trang |
| 7 | Chuỗi một gốc đủ số phiên | ĐẠT | 273 hàng, 2+ dòng neo |
| 8 | Mọi con số công bố truy ngược được | ĐẠT | A/B/C |
| 9 | Không sửa Sổ cũ | ĐẠT | Không được cung cấp Sổ của người dùng |
| 10 | Đúng ngày được yêu cầu | ĐẠT | 04/11/2026 |
| 11 | Chế độ | ĐẠT | ĐẦY ĐỦ: MA20/50/dốc/TB20/phân phối |
| 12 | Nền xu hướng và MA | ĐẠT | XẤU, MA20 vẫn âm |
| 13 | Bảy yếu tố đúng ngưỡng | ĐẠT | +2/7 |
| 14 | Chặn mềm/cứng và hiệu lực | ĐẠT CÓ GIỚI HẠN | 6 phân phối chặn cứng, ngoại KHỚP/Sổ chưa kiểm được |
| 15 | Ba bước trạng thái | ĐẠT | KHÔNG dòng 1 |
| 16 | Không mua trong trạng thái KHÔNG | ĐẠT | Không có vùng mua mới |
| 17 | Mốc có nguồn, R:R | ĐẠT CÓ GIỚI HẠN | R:R không áp dụng vì Sổ gốc không có |
| 18 | Nói đúng ngành, không bịa tiền ròng | ĐẠT | Chỉ sức giá và sự tham gia theo giá/khớp/ngoại trong rổ cụ thể, không suy toàn ngành |
| 19 | Web/Zalo trùng số, đúng bố cục | ĐẠT | Pages 41931323603 hoàn thành: 181/181 kiểm thử, 57 nhận định, 133 ảnh+logo và đối chiếu byte HTML/JS/CSS thành công |
| 20 | Sổ chỉ một dòng mới và trạng thái mang sang | ĐẠT | Phần E |

## E. Sổ tự lưu chỉ bổ sung mới (không đăng website hoặc Zalo)

```text
=== SỔ VNINDEX — BỔ SUNG 04/11/2026 ===
PHẦN A — DÒNG MỚI
04/11/2026;1733,02;;1692,36;+1,96514515009238;15284,01739027;247;68;40;;1862,07;;;Không;ĐÃ ĐỐI CHIẾU đóng/% và độ rộng; khớp nguyên gốc 1 nguồn có các báo làm tròn; CHƯA XÁC MINH ngoại KHỚP, tự doanh, basis

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG — dòng 1, chặn cứng
Chế độ: ĐẦY ĐỦ; Nền xu hướng: XẤU
Mốc vô hiệu đang hiệu lực theo Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ: MA20 1730,58; đóng 03/11 1699,62; đáy 04/11 1692,36
Kháng cự: đóng 30/10 1741,62; MA50 1771,34; MA200 1792,54
Phân phối còn hiệu lực: 02/10;08/10;09/10;19/10;29/10;02/11
Chặn cứng: phân phối 6/25, gỡ khi ≤5
Ngoại KHỚP liên tiếp: CHƯA XÁC MINH
Basis VN30F1M: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không có đính chính đối với Sổ gốc chưa được cung cấp.
```

**Quyết định không bị đánh tráo:** Điểm +2/7 mô tả phiên bật có sức rộng hơn trước, nhưng nền XẤU và 6 phân phối là hai điều kiện định lượng đã kiểm khiến trạng thái cuối KHÔNG. Không biến dữ liệu thiếu thành chặn cứng, không tự sáng tạo điểm mua.

## F. Báo cáo chạy thực tế, đồng bộ và giới hạn vận hành

- **Giá EOD đã hoàn tất trước yêu cầu:** dữ liệu `src/data/research-data.js` có meta.updated và meta.release **2026-11-04**, 133/133 giá đóng được khóa. Nguồn chính VNDIRECT, 131/133 giá trùng CafeF, 2 ngoại lệ MSR/OIL đã có KBS xác nhận. Cửa kiểm thử 181/181, 0 fail và đối chiếu byte website thành công trong workflow https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41867307696. Trang đã có phiên đúng nên không ghi đè giá.
- **Một lần chạy trùng bị lỗi do bên thứ ba:** EOD https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41873447290 đã báo **FAIL** ở cổng dữ liệu, `verified=131/133`, hai lỗi `MSR KBS missing row` và `OIL KBS missing row`. Đây là sự cố trả dòng từ nguồn KBS tại thời điểm tái kiểm tra, không phải việc mất giá đã xác minh từ lần chạy trước. Không bỏ qua, sửa giả hay nới cổng giá để biến FAIL thành PASS. Watchdog tiếp theo (runs 41878690261, 41882549417) đều **SUCCESS**, ghi **EOD already current for 2026-11-04**; tình trạng đồng bộ đang đúng phiên. Lưu ngoại lệ để quan sát nếu nguồn KBS tiếp tục chập chờn trong các kỳ sau.
- **Kiểm toán chỉ đọc:** workflow https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41930602779 **SUCCESS**, đọc 273 dòng lịch sử VNINDEX, không dùng giá 05/11. Thay đổi workflow kiểm toán đúng 2 chuỗi ngày mục tiêu; giữ toàn bộ thuật toán.
- **Nhận định:** bổ sung một entry ngày 04/11, mã `market-view-20261104`, bản số 54, tại đầu `src/data/daily-insights-auto.js`. Giữ nguyên 56 entry trước; bài Zalo trong trường `zaloPost` dài 354 chữ, cùng ngày/trạng thái/mốc với web.
- **GitHub Pages:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41931323603 **SUCCESS**. **181/181 kiểm thử, 0 fail**; `Site audit passed: 133 báo cáo, 133 mã, 57 nhận định, 66 sự kiện vị thế`. Guard cấu trúc và phạm vi thay đổi thành công, SHA-256 HTML/JS/CSS so với trang đang chạy đạt trong lần thử đầu. **133 bìa báo cáo, 133 logo** đối chiếu. CSS SHA256 `c70d18bba556b3f426bfb9a5e094a18727e5d9765d857bd0e9f167fb3e9472bb` **không thay đổi**.
- **Bố cục:** không chỉnh CSS, HTML, thứ tự khu vực, cỡ chữ, tràn dòng, khoảng cách hay khóa tên phần. Không thay quy tắc loại mã theo ngưỡng 5–7% hoặc thay lịch chạy EOD và watchdog.
- **Tự tạo bản nhận định theo lịch:** không có bằng chứng đã chạy tác vụ độc lập sinh bài v3.3.1 hằng ngày. Bài này được xuất bản theo yêu cầu, không báo sai là tự sinh. Dữ liệu khớp/bộ lọc phạm vi khác các đơn vị, ngoại khớp liên tiếp và basis chưa đủ khóa được ghi rõ, không thay bằng tổng GD hoặc nội suy.
