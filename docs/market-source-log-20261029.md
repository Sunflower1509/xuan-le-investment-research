# NHẬT KÝ NGUỒN — NHẬN ĐỊNH VN-INDEX 29/10/2026 · V3.3.1

**Phiên nghiên cứu:** Thứ Năm 29/10/2026 (HOSE xác nhận có giao dịch). **Ngày thực hiện:** 30/10/2026. **Mốc cắt:** hết ngày 29/10/2026, giờ Việt Nam; chỉ chấp nhận thông tin đăng sau mốc này để kiểm số của **chính phiên 29/10**. **Sổ dữ liệu tự lưu của người dùng:** không được cung cấp, không tự thay bằng bài đăng trên web. **Quy tắc:** `docs/prompt-nhan-dinh-vnindex-v3.md`, v3.3.1, SHA-1 `d3776d82a27f643bdc40b13729f564003417e2d0`.

**Ba lượt đọc bắt buộc:** (1) phần 0–I: nguồn, đối chiếu, đơn vị, chuỗi, ngày, nhãn thiếu; (2) II: bảy yếu tố, MA, phiên phân phối, chặn, quy đổi ba bước; (3) III–XII/phụ lục: hành động, Zalo, dữ liệu web, 20 kiểm tra, Sổ và khóa bố cục.

## A. Nhật ký nguồn phiên 29/10

| Chỉ tiêu | Giá trị 29/10 | Nguồn chính và trích nguyên gốc | Nguồn đối chiếu và phạm vi | Nhãn |
|---|---|---|---|---|
| VN-Index đóng cửa, mức đổi | **1.755,61; −11,04; −0,62%** | VNDIRECT Finfo `"close":1755.61,"change":-11.0400000000002,"pctChange":-0.624911555769403` | **HOSE**, tin tổng kết 29/10: `"VNINDEX 1,755.61 -11.04 -0.62 14,505.31"`; VNIndex.ai chốt `1.755,61 điểm -11,04 (-0,62%)` | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.877,18; −13,04; −0,69%** | HOSE `"VN30 1,877.18 -13.04 -0.69"` | Simplize chốt phiên 29/10 `1.877,18 (-0,69%)` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **256,61; −3,25; −1,25%** | Stockbiz bảng chỉ số 29/10 `256,61 -3,25/-1,25%` | Simplize chốt phiên 29/10 `256,61 (-1,25%)` | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp | **1.769,55 / 1.769,55 / 1.747,34** theo gốc VNDIRECT | Raw `"open":1769.55,"high":1769.55,"low":1747.34` | Investing 29/10 `open 1766.65/high 1773.56/low 1747.34`; VNIndex.ai `open 1769.08/high 1769.08/low 1751.67`. **Có sai khác thật ở open/high/low**; chỉ **low=1.747,34** khớp hai nguồn VNDIRECT–Investing. | **MỞ/CAO CHƯA XÁC MINH**; thấp **ĐÃ ĐỐI CHIẾU** |
| Giá trị **KHỚP** tập VNINDEX (không tính thỏa thuận) | **12.452,81946259 tỷ đồng**, KL **549.740.358 cổ phiếu** | VNDIRECT raw `"nmValue":12452819462590,"nmVolume":549740358` | Báo Nhân Dân 29/10: `giá trị khớp lệnh ... hơn 12.452 tỷ đồng` cùng sàn HOSE, làm tròn ở tỷ; không dùng tổng GTGD làm khớp. | **ĐÃ ĐỐI CHIẾU phạm vi nhưng nguồn phụ làm tròn**; chuỗi tính dùng VNDIRECT |
| **Tổng GD HOSE** | **14.505,31 tỷ**, KL **637.062.831** | HOSE tin EOD `14,505.31`; VNDIRECT raw `"accumulatedVal":14505313143900,"accumulatedVol":637062831` | VietnamPlus/TTXVN `14.505,3 tỷ`; **không dùng tổng này thay cho KHỚP** | **ĐÃ ĐỐI CHIẾU** |
| Độ rộng **tập VNINDEX VNDIRECT** | **93 tăng / 209 giảm / 56 đứng / 6 sàn** | `"advances":93,"declines":209,"noChange":56,"floorStocks":6` | Taichinh.com 29/10 có `93 tăng / 209 giảm / 56 đứng` cùng số; VNIndex.ai **404 mã** `97 tăng/214 giảm/93 đứng`, khác tập, không trộn | **ĐÃ ĐỐI CHIẾU VNDIRECT–Taichinh; phạm vi VNIndex.ai khác** |
| VNMIDCAP/VNSMALLCAP | **1.838,55 (−0,91%) / 1.233,17 (−0,89%)** | HOSE tin tổng kết 29/10 `VNMIDCAP 1838.55 -0.91`; `VNSMALLCAP 1233.17 -0.89` | Chưa có nguồn thứ hai cùng phạm vi/mốc chốt | **1 NGUỒN** |
| Top 5 mã kéo **giảm** | **VHM −2,40; BSR −1,15; GAS −0,85; MCH −0,68; MSN −0,64 điểm** | VNIndex.ai phiên 29/10 bảng ảnh hưởng điểm theo vốn hóa | HOSE không công bố bảng cùng phương pháp | **1 NGUỒN** |
| Ngoại HOSE tổng | **Mua 1.711 tỷ / bán 2.170 tỷ; ròng −459 tỷ** | **HOSE**, tin tổng kết 29/10 `"Trading val ... 1,711 ... 2,170 ... -459"` | VNIndex.ai bản tóm tắt `-459 tỷ`; danh sách mã riêng là ước tính `-447,79 tỷ` nên không đồng nhất | **HOSE TỔNG**; **không giả là ròng KHỚP** |
| Ngoại HOSE **khớp** và chuỗi 5 phiên | **Chưa xác minh** | Đã mở HOSE tổng, VNIndex.ai ước tính, báo Nhân Dân toàn 3 sàn, VietnamPlus toàn thị trường | Không đủ bảng ròng khớp HOSE kèm chuỗi 5 phiên cùng phạm vi | **CHƯA XÁC MINH** |
| Tự doanh HOSE, basis VN30F1M 29/10 | **Chưa xác minh** | Thử Stockbiz tin riêng tự doanh; VNIndex.ai; HOSE tổng hợp; HNX/phái sinh | Không có hai nguồn khớp đúng ngày/giờ và kỳ hợp đồng trong lần này | **CHƯA XÁC MINH** |
| Cờ ETF/phái sinh | **Không gắn cờ** | HOSE tổng kết, lịch HNX đáo hạn tháng 10 là 15/10, không phải 29/10 | Không suy ngày ETF chỉ từ một tin hoán đổi trong ngày trước | **KHÔNG GẮN CỜ** |

**Liên kết nguồn đã mở và đọc:** 
- Raw 269 dòng một gốc VNDIRECT Finfo, nhật ký JSON: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40940109153 — `SOURCE_HISTORY_ROWS_JSON`, `RAW_VENDOR_INDEX_QUOTE`, `VERIFIED_MARKET_EVIDENCE_JSON`.
- Sở Giao dịch Chứng khoán TP.HCM (HOSE) qua tin đăng lại nguyên văn: https://web.stockbiz.vn/News/2026/10/29/1919404/hose-diem-tin-giao-dich-ngay-29-10-2026.aspx
- Báo Nhân Dân, tin phiên 29/10: https://nhandan.vn/chung-khoan-ngay-2910-sac-do-lan-rong-vn-index-giam-hon-11-diem-post998754.html
- VietnamPlus / TTXVN: https://www.vietnamplus.vn/chung-khoan-2910-dau-khi-lao-doc-vn-index-mat-hon-11-diem-post1145028.vnp
- VNIndex.ai bảng chiều trụ, trạng thái đóng 29/10: https://vnindex.ai/vnindex-hom-nay
- Investing 29/10 dữ liệu lịch sử: https://vn.investing.com/indices/vn-historical-data
- Simplize chỉ số đóng 29/10: https://simplize.vn/chi-so/chung-khoan-viet-nam
- Taichinh.com giá và độ rộng tập VNDIRECT: https://taichinh.com/chung-khoan

**Nhật ký tìm lại ba nguồn đối với ô chưa đủ:**
- Giá mở/cao/thấp: VNDIRECT raw; Investing lịch sử; VNIndex.ai lúc 15:00. Mở/cao lệch không thể phân xử, thấp khớp VNDIRECT–Investing; không dùng biên độ làm chặn xả cuối mang tính quyết định.
- Khớp HOSE: VNDIRECT `nmValue` dùng; Nhân Dân số KHỚP `hơn 12.452 tỷ`; HOSE tổng 14.505,31 và VNIndex.ai tổng 14,51 nghìn tỷ có gồm thỏa thuận, không so trực tiếp.
- Độ rộng: VNDIRECT `93/209/56`; Taichinh.com cùng giá `93/209/56`; VNIndex.ai 404 mã `97/214/93`; VietnamPlus đếm `97/215/56` khác phạm vi, không gộp.
- Ngoại KHỚP: HOSE giá trị **tổng** −459; VNIndex.ai ước tính −447,79; Nhân Dân và VietnamPlus **toàn thị trường 3 sàn** hơn 430 tỷ; đều không là khớp HOSE đúng chuẩn.
- Tự doanh và basis: HOSE tin thị trường, VNIndex.ai, Stockbiz mục tự doanh, HNX mục phái sinh; thiếu bảng đồng kỳ, chốt đúng phiên để chấm → 0 điểm, không đưa số chưa đối chiếu.
- Nhóm ngành: VietnamPlus giá từng mã dầu khí PVT/PVP/BSR/PLX, ngành; VNIndex.ai ngành; HOSE điểm tác động; không có đồng thời giá + khớp + ngoại cấp ngành đủ để tuyên bố tiền vào/ra ròng.

## B. Chuỗi đồng nhất và phép tính máy

Gốc **(a)**: `https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-29&size=500`. Đọc đủ **269 dòng** từ **01/10/2025–29/10/2026**, giá đóng và `nmValue` cùng đơn vị. Không nối dữ liệu ngoài. Hai dòng neo nguyên gốc rút gọn:
- `"date":"2026-10-27","close":1761.87,"nmValue":10254684932030`
- `"date":"2026-10-28","close":1766.65,"nmValue":12186465422820`
- Ngày cuối `"date":"2026-10-29","close":1755.61,"nmValue":12452819462590`.

| Phép tính | Kết quả | Nhãn |
|---|---|---|
| MA20 (gồm phiên 29/10) | **1.736,4955 → 1.736,50** | TỰ TÍNH |
| MA50 | **1.772,8662 → 1.772,87** | TỰ TÍNH |
| MA200 | **1.795,63095 → 1.795,63** | TỰ TÍNH |
| MA20 hôm nay trừ MA20 cách 5 phiên | **1.736,4955−1.738,4760 = −1,9805**, còn dốc xuống | TỰ TÍNH |
| TB20 KHỚP liền trước (không gồm 29/10) | **12.369,800104614 tỷ** | TỰ TÍNH |
| Khớp phiên / TB20 | **12.452,81946259 / 12.369,800104614 = 1,006711455 → 1,007×** | TỰ TÍNH |
| Khớp so 28/10 | **(12.452,81946259 / 12.186,46542282 −1) ×100 ≈ +2,19%** | TỰ TÍNH |
| Tăng/giảm HOSE cùng tập | **93/209 = 0,44498**, yếu tố độ rộng **−1** | TỰ TÍNH |
| Top 5 giảm | **2,40+1,15+0,85+0,68+0,64 = 5,72** điểm, bằng **5,72/11,04 = 51,81%** mức giảm, không chạm ngưỡng ≤50% của yếu tố 4 (chấm 0) | TỰ TÍNH từ 1 NGUỒN |
| 25 phiên phân phối còn hiệu lực | **7**: 28/09, 30/09, 02/10, 08/10, 09/10, 19/10 và **29/10**. Phiên 24/09 vừa ra khỏi cửa sổ 25 ngày. Loại 15/10 theo cờ đáo hạn đã chứng minh trong nhật ký kỳ trước. 29/10 giảm −0,625% và khớp tăng so 28/10: **phân phối mới**. | TỰ TÍNH |
| Chặn xả cuối phiên | VNDIRECT biên độ 1.747,34–1.769,55 cho vị trí 37,24% (không ở 1/3 dưới), nhưng Investing cho đỉnh 1.773,56 khiến vị trí 31,54% (ở 1/3 dưới). Vì **đỉnh chưa đối chiếu**, không dùng phép tính này kết luận cổng chặn. | **KHÔNG KIỂM ĐƯỢC** |
| Nền xu hướng | Đóng **1.755,61** dưới MA50 **1.772,87** và MA200 **1.795,63**, MA20 giảm → **XẤU**, trần **KHÔNG** | TỰ TÍNH |
| Điểm 7 yếu tố | Giá/MA **0** (trên MA20, dưới MA50, không thủng đáy 20 ngày); thanh khoản **0** (giảm nhưng chưa đạt 1,2×); độ rộng **−1**; chất lượng trụ **0** (phiên giảm top5 =51,81% >50%); ngoại **0** (thiếu chuỗi khớp); phân phối **−1**; phái sinh/vĩ mô **0** (thiếu) → **−2/7** | Theo V3.3.1 |
| Chặn mềm | Kháng cự MA50 **1.772,87** cách giá đóng khoảng 0,98% chưa vượt. Không gắn chặn dòng tiền co cụm ở **phiên tăng** cho ngày giảm. | TỰ TÍNH |
| Chặn cứng | **7 phân phối/25 ≥6**; số phân phối xuống ≤5 mới gỡ. Không suy chặn xả cuối; không kiểm được ngoại 5 phiên khớp và mốc vô hiệu theo Sổ. | TỰ TÍNH |
| Quy đổi ba bước | **Bước 1 KHÔNG (dòng 1)** do có chặn cứng; **Bước 2 KHÔNG** do nền XẤU; **Bước 3 bỏ qua** do thiếu Sổ gốc; trạng thái chốt **KHÔNG (dòng 1)**. | Theo V3.3.1 |
| R:R | **Không áp dụng** — KHÔNG mua mới và không có mốc vô hiệu đang hiệu lực trong Sổ gốc. | Theo V3.3.1 |

## C. Hành động và khung trang

- Mốc có xuất xứ: hỗ trợ **1.747,34** (đáy 29/10, VNDIRECT–Investing), **1.736,50** (MA20) và **1.677,19** (đáy 20 phiên trước, ngày 20/10). Kháng cự **1.772,87** (MA50), **1.795,63** (MA200); không dùng đỉnh 29 làm kháng cự chuẩn vì dữ liệu cao nhất khác nguồn.
- NẾU đóng thủng 1.747,34 THÌ xem xét giảm mã yếu khi vi phạm điểm dừng lỗ đã thiết lập, không dịch stop xuống hoặc bình quân; NẾU vượt 1.772,87, MA20 quay lên, phân phối còn ≤5 và độ rộng/khớp đồng thuận THÌ **đánh giá lại**, không tự động đổi sang CÓ.
- Không đăng vùng mua mới, vì trạng thái chốt KHÔNG. R:R chỉ số không áp dụng.
- Dòng tiền: VN30 −0,69%, VNMID −0,91%, VNSMALL −0,89% (HOSE, phiên 29); số mã giảm áp đảo, dầu khí và công nghiệp chịu áp lực theo giá mã cụ thể. **Không nhóm nào đủ ba chứng cứ giá, khớp và ngoại để khẳng định vào/ra ròng toàn ngành**.
- Web: chỉ chèn một bản ngày 29/10 vào `src/data/daily-insights-auto.js` (khung hiện có); không thay đổi HTML/CSS, bố cục, hoặc lịch sử. Đăng chỉ sau EOD 133/133 và kiểm thử đầy đủ; workflow tự kiểm chứng byte sau deploy.
- Bài Zalo đi kèm trong entry phải đạt 250–400 chữ và mang cùng số với bài đăng, không đưa số chưa xác minh.

## D. Tự kiểm 20 mục theo Prompt

| # | Kiểm soát | Trạng thái | Ghi chú |
|---|---|---|---|
| 1 | Ngày phân tích, phiên và giờ chốt | ĐẠT | HOSE ngày 29/10; VNDIRECT 15:10:08 |
| 2 | Không dùng dữ liệu phiên sau | ĐẠT | Chỉ số cùng phiên 29/10 |
| 3 | Không dùng trí nhớ / đoạn tìm kiếm chưa mở | ĐẠT | Nguồn HOSE, VNIndex.ai và raw 269 dòng |
| 4 | Mọi nguồn thực đọc, đường dẫn thật | ĐẠT | Mục A |
| 5 | Số lõi 2 nguồn & đúng đơn vị | ĐẠT CÓ GIỚI HẠN | Close/% 3 nguồn; khớp Nhân Dân làm tròn; độ rộng VNDIRECT và Taichinh; OHLC cao/mở lệch |
| 6 | Chưa xác minh/1 nguồn có nhật ký tìm lại | ĐẠT | Mục A có ≥3 trang |
| 7 | Tính bằng công cụ, đủ chuỗi một gốc | ĐẠT | 269 phiên VNDIRECT, 2 hàng neo |
| 8 | Mỗi số bài có mục nhật ký | ĐẠT | Mục A/B/C |
| 9 | Không sửa Sổ dữ liệu trước | ĐẠT | Không có Sổ người dùng |
| 10 | Dùng đúng ngày lệnh | ĐẠT | 29/10 |
| 11 | Chế độ | ĐẠT | ĐẦY ĐỦ, đủ năm chỉ báo |
| 12 | Nền, MA & dốc | ĐẠT | XẤU, số đã ghi |
| 13 | Bảy điểm, thiếu chấm 0 | ĐẠT | −2/7 |
| 14 | Kiểm hết chặn và hiệu lực | ĐẠT CÓ GIỚI HẠN | 7 phân phối đã kiểm; xả cuối/ngoại/Sổ chưa kiểm được |
| 15 | Ba bước chốt và số lõi 1 nguồn | ĐẠT | KHÔNG dòng 1 do chặn cứng thực |
| 16 | Không lập vùng mua mới khi KHÔNG | ĐẠT | Theo VI |
| 17 | Mốc có nguồn, R:R minh bạch | ĐẠT CÓ GIỚI HẠN | Sổ gốc không có nên R:R không áp dụng |
| 18 | Không bịa nhóm tiền thật | ĐẠT | Chỉ nói sức giá nhóm |
| 19 | Đồng nhất bài web/Zalo, giữ bố cục | CẦN XÁC NHẬN SAU TRIỂN KHAI | Ghi kết quả deploy cụ thể khi có |
| 20 | Một dòng Sổ mới, không chép Sổ cũ | ĐẠT | Phần E |

## E. Sổ dữ liệu tự lưu — **chỉ bổ sung mới** (không đăng website)

```
=== SỔ DỮ LIỆU VNINDEX — bổ sung 29/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
29/10/2026;1755,61; ;1747,34;-0,624911555769403;12452,81946259;93;209;56;;1877,18;;;Có;1 NGUỒN: một phần ngoại/đóng góp mã; CHƯA XÁC MINH: mức cao, ngoại KHỚP, phái sinh

PHẦN B — THAY THẾ TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu đang hiệu lực: KHÔNG KIỂM ĐƯỢC (không có Sổ gốc người dùng)
Hỗ trợ gần: 1747,34 (đáy 29/10), 1736,50 (MA20)
Kháng cự gần: 1772,87 (MA50), 1795,63 (MA200)
Chặn cứng: >=6 phiên phân phối/25 (hiện 7); gỡ khi còn <=5
Phiên phân phối còn hiệu lực: 28/09,30/09,02/10,08/10,09/10,19/10,29/10
Khối ngoại khớp HOSE liên tiếp: CHƯA XÁC MINH
Basis VN30F1M âm >1% liên tiếp: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không có đính chính; thiếu Sổ gốc.
```

**Lưu ý:** ô “Cao” chưa kiểm chứng thống nhất do VNDIRECT–Investing–VNIndex.ai khác nhau. Mức thấp 1747,34 đã có hai nguồn. Không dùng ô “Cao” để suy chặn xả cuối.
