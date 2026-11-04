# NHẬT KÝ NGUỒN VN-INDEX 03/11/2026 — v3.3.1

**Ngày phân tích:** 03/11/2026, có giao dịch (HOSE tin 16:49 ngày 03/11/2026). **Ngày thực hiện nghiên cứu:** 04/11/2026. **Mốc cắt:** hết phiên ngày 03/11 giờ Việt Nam. Chỉ dùng bài xuất bản sau đó khi bài chứa **số lịch sử của chính 03/11**, không dùng dữ liệu, giá hoặc diễn biến ngày 04/11 để kết luận ngày 03/11. **Không có Sổ dữ liệu người dùng**; lịch sử nhận định web không thay thế Sổ gốc.

**Nguồn quy tắc:** `docs/prompt-nhan-dinh-vnindex-v3.md`, v3.3.1, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`. Đã đọc theo ba lượt: (1) phần 0–I: cổng dữ liệu, 2 nguồn, lịch sử, thiếu dữ liệu và nhật ký; (2) phần II: MA, 7 yếu tố, phân phối, chặn, 3 bước trạng thái; (3) phần III–XII/phụ lục: mốc có nguồn, kịch bản, bảng hành động, bài Zalo 250–400 chữ, 20 tự kiểm, giữ layout v2.2.2. Không đổi cấu trúc website, không đổi ngưỡng điểm hay luật dừng lỗ.

## A. Nhật ký nguồn, phạm vi và bằng chứng nguyên gốc

| Số liệu | Giá trị | Phạm vi | Nguồn và trích trực tiếp có số | Đối chiếu và trích số | Nhãn |
|---|---|---|---|---|---|
| VN-Index EOD | **1.699,62 điểm, −11,10 điểm, −0,65%** | Chính phiên 03/11 | VNDIRECT raw `"close":1699.62,"change":-11.1000000000001,"pctChange":-0.648849607182944` | HOSE `VNINDEX 1,699.62 -11.10 -0.65`; VNIndex.ai `1.699,62-11,10 (-0,65%)` | **ĐÃ ĐỐI CHIẾU** |
| VN30, VNMID, VNSML | **1.815,60 (+0,12%); 1.787,49 (+0,21%); 1.204,82 (+0,05%)** | HOSE các nhóm chỉ số | HOSE `VN30 1,815.60 2.19 0.12`, `VNMIDCAP 1,787.49 3.81 0.21`, `VNSMALLCAP 1,204.82 0.55 0.05` | FireAnt đóng VN30 1.815,60 (+0,12%); không có nguồn thứ hai cùng phương pháp cho VNMID/VNSML | VN30 **ĐÃ ĐỐI CHIẾU**; VNMID/VNSML **1 NGUỒN** |
| HNX-Index | **251,42; +0,87; +0,35%** | HNX riêng | VNDIRECT marketSession `"close":251.42,"change":0.87` | FireAnt `251,42 điểm, tăng 0,87 điểm (+0,35%)` | **ĐÃ ĐỐI CHIẾU** |
| Mở / đỉnh / đáy | Mở **1.710,04**, cao **1.713,02**, đáy **BẤT ĐỒNG: 1.689,32 hoặc 1.696,23** | VNINDEX | VNDIRECT raw `"open":1710.04,"high":1713.02,"low":1689.32` | VNIndex.ai `1.710,04 / 1.713,02 / 1.696,23`; FireAnt `1.696,23`, nmquan `1.696,23`. **Không hòa giải chênh lệch bằng suy đoán.** | Mở/cao **ĐÃ ĐỐI CHIẾU**; thấp **CHƯA ĐỒNG NHẤT** |
| **Giá trị KHỚP** | **10.474,10378 tỷ**, KL **515.501.785** cổ phiếu | nmValue trong tập VNINDEX của VNDIRECT, không gồm thỏa thuận | VNDIRECT `"nmValue":10474103780060,"nmVolume":515501785` | FireAnt ghi **10.474 tỷ** (làm tròn) cho VN-Index; nmquan **10.477,7 tỷ** (tập tất cả mã sàn); HOSE `Khớp lệnh ... 10,531` (tổng toàn thị trường khác phạm vi) | **1 NGUỒN CHUẨN** cho chuỗi; không tuyên bố cùng phạm vi tuyệt đối với mọi nguồn |
| **Tổng GTGD** | **12.939,637671779 tỷ** | VNINDEX VNDIRECT gồm thỏa thuận | Raw `"accumulatedVal":12939637671779` | HOSE dòng chỉ số `12,939.64`; VNIndex.ai `12,94 nghìn tỷ` | **ĐÃ ĐỐI CHIẾU**, KHÔNG thay cho KHỚP |
| **Độ rộng cùng tập** | **152 tăng / 135 giảm / 72 đứng**, 6 giảm sàn | VNDIRECT VNINDEX (43 không giao dịch ngoài tập đang giao dịch) | Raw `"advances":152,"declines":135,"noChange":72,"floorStocks":6` | VNIndex.ai tập 404 mã `152 tăng/139 giảm/113 đứng`, nmquan 155/141/71 trên tập toàn HOSE; không trộn tập | **1 NGUỒN đúng tập** |
| Top 5 mã gây giảm điểm | **VIC −12,80; BSR −0,83; GAS −0,80; VPB −0,72; BVH −0,60** | Bảng đóng góp chỉ số theo VNIndex.ai | VNIndex.ai bảng `VIC −12,80`, `BSR −0,83`, `GAS −0,80`, `VPB −0,72`, `BVH −0,60` | HOSE báo giá top khối lượng, không phải đóng góp; FireAnt phiên 03 không hiển thị cùng bảng | **1 NGUỒN** |
| Nhóm ngành nổi bật | **VNREAL −2,18%; VNENE −1,24%; VNFIN +0,37%; VNMAT +3,29%** | Các chỉ số ngành HOSE | HOSE `VNREAL 3,119.10 -69.66 -2.18`, `VNMAT 1,914.22 60.94 3.29` | VNIndex.ai ngành bất động sản −2,3%, ngân hàng +0,2% (khác phương pháp), không quy đổi thành dòng vốn ròng | **1 NGUỒN cho chỉ số ngành HOSE** |
| Ngoại HOSE **tổng** | **Mua 1.921; bán 2.423; ròng −502 tỷ** | Gồm giao dịch ngoại tổng trong bảng HOSE, không chứng minh ngoại KHỚP riêng | HOSE `GTGD (tỷ đồng) 1,921 14.67% 2,423 18.50% -502` | FireAnt tổng ròng −502 tỷ; nmquan −502,4 tỷ tổng, làm tròn | **ĐÃ ĐỐI CHIẾU — TỔNG, KHÔNG PHẢI KHỚP** |
| Ngoại **KHỚP HOSE** chuỗi 3–5 phiên | **Không chốt được đúng phạm vi** | Ngoại mua/bán khớp HOSE liên tiếp | HOSE tin tổng ngoại; VNIndex.ai ròng tổng 500 tỷ; nmquan ngoại tổng và Stockfly số khác tập | Chưa có chuỗi riêng khớp và đồng phạm vi để kiểm điều kiện chặn | **CHƯA XÁC MINH** |
| Tự doanh và basis VN30F1M | **Không đủ đối chiếu cuối phiên cùng kỳ/phạm vi** | Tự doanh khớp HOSE và giá hợp đồng VN30F1M | FireAnt tổng tự doanh −31 tỷ; nmquan ròng tổng −118,5 tỷ (khác cách thống kê); HOSE tin không có basis; VNIndex.ai không có basis đúng kỳ | Không kết hợp hai con số hoặc suy chặn âm 3 phiên | **CHƯA XÁC MINH** |
| Cờ sự kiện ảnh hưởng khớp 03/11 | **Không có cờ chung được xác minh** | Đáo hạn/ETF có làm méo giá trị khớp | HOSE tin 03/11, VNIndex.ai bản phiên; lịch HNX đáo hạn tháng 10 là 15/10 | Không tự gán cờ ngày 03/11; chưa thể khẳng định đã kiểm hết mọi lịch | **KHÔNG GẮN CỜ theo chứng cứ hiện có** |

**Nguồn đã thực sự mở và đọc toàn văn / mục đúng phiên:**
1. HOSE tổng kết 03/11/2026 lúc 16:49: https://web.stockbiz.vn/News/2026/11/3/1921463/hose-diem-tin-giao-dich-ngay-03-11-2026.aspx
2. VNIndex.ai lưu trữ **riêng** phiên 03/11: https://vnindex.ai/vn-index/phien/03-11-2026
3. FireAnt phiên 03/11: https://fireant.vn/thi-truong/phien/2026-11-03
4. nmquan lịch sử, dùng **chỉ dòng ngày 03/11**, tuyệt đối không dùng dữ liệu ngày 04/11 cho nhận định 03: https://nmquan.vn/data/chi-so/vn-index/lich-su
5. VNDIRECT Finfo nguồn gốc cùng tập: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices ; JSON 272 phiên kiểm toán **đọc chỉ đến 03/11**: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41825427138
6. EOD riêng 133 giá/giám sát cập nhật: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41679414567

**Nhật ký tìm kiếm bắt buộc cho số chỉ 1 nguồn hoặc thiếu:**

| Ô | Các trang đã thử mở và kết quả |
|---|---|
| Khớp HOSE | VNDIRECT raw: **có số, đã dùng**; FireAnt: có 10.474 tỷ làm tròn, không chứng minh chi tiết cấu phần; HOSE 10.531 tỷ: **có số, khác phạm vi**; nmquan 10.477,7 tỷ: khác tập mã; VNIndex.ai 12,94 nghìn tỷ: **tổng giao dịch**, không phải khớp |
| Độ rộng | VNDIRECT 152/135/72: **có số, đã dùng**; VNIndex.ai 152/139/113: **khác tập**; nmquan 155/141/71: khác tập; HOSE không có hàng độ rộng đúng phạm vi |
| Top mã đóng góp | VNIndex.ai: có số, đã dùng; HOSE tin chỉ top khối lượng/tăng giảm; FireAnt bản phiên không có bảng đóng góp điểm cùng công thức |
| Ngoại khớp | HOSE bản tin: **tổng GD**, VNIndex.ai: tổng, nmquan: tổng, FireAnt: tổng ⇒ chưa xác minh chuỗi KHỚP |
| Tự doanh / basis | FireAnt tự doanh tổng −31 tỷ; nmquan tự doanh tổng −118,5 tỷ; HOSE tin 03 không có basis; VNIndex.ai không công bố đúng hợp đồng ⇒ không xác minh |
| Giá thấp | VNDIRECT 1.689,32; VNIndex.ai, FireAnt, nmquan 1.696,23; thực sự lệch nên **không dùng kích hoạt chặn từ hình nến** |

## B. Tính lại từ chuỗi một nguồn (không nối chuỗi và không nội suy)

Nguồn (a): VNDIRECT `vnmarket_prices`, log **https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41825427138**. **272 hàng thực**, ngày đầu **01/10/2025**, ngày cuối **03/11/2026**; cùng `close` và `nmValue` không tính thỏa thuận. Dòng neo chép từ raw:
- `"date":"2026-10-30","close":1741.62,"nmValue":11950466727210`
- `"date":"2026-11-02","close":1710.72,"nmValue":15840068619090`
- `"date":"2026-11-03","close":1699.62,"nmValue":10474103780060`.

| Phép tính | Kết quả / cách tính | Nhãn |
|---|---|---|
| MA20 | TB 20 giá đóng gồm 03/11 = **1.731,5940 → 1.731,59** | **TỰ TÍNH** |
| MA50 | TB 50 giá đóng = **1.772,0464 → 1.772,05** | **TỰ TÍNH** |
| MA200 | TB 200 giá đóng = **1.793,3868 → 1.793,39** | **TỰ TÍNH** |
| MA20 dốc 5 phiên | 1.731,5940 − 1.736,2785 = **-4,6845 điểm** (đang dốc xuống) | **TỰ TÍNH** |
| Khớp bình quân 20 phiên trước | **12.593,99629 tỷ** | **TỰ TÍNH**, đúng cùng chuỗi |
| Bội số khớp hôm nay | 10.474,10378 / 12.593,99629 = **0,832 lần** | **TỰ TÍNH** |
| Khớp thay đổi so 02/11 | (10.474,10378 / 15.840,06862 − 1)×100 = **-33,88%** | **TỰ TÍNH** |
| Độ rộng | 152/135 = **1,126** (không chạm ≤0,67 hay ≥1,5) ⇒ **0** | **TỰ TÍNH**, 1 NGUỒN |
| Top5 chiều giảm | 12,80+0,83+0,80+0,72+0,60 = **15,75 điểm**, bằng **141,89%** mức giảm 11,10. Vì **>50%**, yếu tố 4 của *phiên giảm* chấm **0**; VIC một mình −12,80 > mức giảm toàn chỉ số. | **TỰ TÍNH trên 1 NGUỒN** |
| Phân phối mới 03/11? | Giảm −0,65% nhưng khớp **10.474,10 < 15.840,07 tỷ của 02/11** ⇒ **KHÔNG** phát sinh phiên phân phối | **TỰ TÍNH** |
| Phân phối còn hiệu lực trong 25 phiên | **7**: 30/09; 02/10; 08/10; 09/10; 19/10; 29/10; 02/11. Phiên 03/11 giảm nhưng khớp không tăng; không thêm phân phối. Ngưỡng ≥6 ⇒ **CHẶN CỨNG**, chỉ gỡ khi số còn ≤5. 15/10 có cờ đáo hạn theo sổ nhật ký nguồn cũ; không tự áp cờ ngày 03. | **TỰ TÍNH** |
| Giá thấp và chặn xả cuối | Thấp nhất giữa các nguồn **BẤT ĐỒNG**, không tự kết luận vị trí nến. Tuy nhiên **khớp 0,832×TB20 < 1,0×**, nên chặn xả cuối yêu cầu **hai điều kiện đồng thời** không thể kích hoạt, dù chọn đáy nào. | **TỰ TÍNH + giới hạn xác minh** |
| Nền xu hướng | Đóng **1.699,62 < MA50 1.772,05** và **MA20 giảm 4,68 điểm**; dưới MA200 1.793,39 ⇒ **XẤU**, trần KHÔNG. | **TỰ TÍNH** |
| Điểm đồng thuận 7 yếu tố | Giá/MA **−1**, thanh khoản **0**, độ rộng **0**, chất lượng trụ phiên giảm **0**, ngoại **0 do thiếu phạm vi khớp**, sức khỏe xu hướng **−1**, phái sinh/vĩ mô **0 chưa đủ nguồn** = **−2/7**. | Theo v3.3.1 |
| Chặn cứng / chặn mềm | **Cứng:** 7 phiên phân phối. **Mềm:** đóng dưới giá chốt 02/11 **1.710,72**, cách 0,65%, là kháng cự ngắn hạn có xuất xứ chưa vượt. Số ngoại KHỚP và mốc vô hiệu Sổ gốc: **KHÔNG KIỂM ĐƯỢC**, không được coi đã gỡ. | Theo v3.3.1 |
| 3 bước chốt | **B1** có chặn cứng → **KHÔNG (dòng 1)**; **B2** trần nền XẤU → vẫn KHÔNG; **B3** không có Sổ người dùng → không áp dụng chống đảo chiều. Kết luận **KHÔNG**. | Theo v3.3.1 |
| R:R chỉ số | **Không áp dụng**: trạng thái KHÔNG và mốc vô hiệu theo Sổ trước không có. Không tự lấy đáy phiên đang tranh chấp làm stop. | Theo v3.3.1 |

## C. Kế hoạch thực hành và điều kiện thay đổi

- **Hỗ trợ tham khảo:** vùng đáy công bố 03/11 **1.696,23** theo VNIndex.ai/FireAnt/nmquan, **nhưng** VNDIRECT báo 1.689,32: chưa đồng nhất; **không dùng con số này làm mốc cắt lỗ cứng**. Đáy 02/11 **1.693,75** cũng được đối chiếu và gần vùng này, là vùng quan sát rủi ro; đáy 20 phiên trước **1.677,19** từ VNDIRECT, 1 NGUỒN.
- **Kháng cự:** 1.710,72 (đóng 02/11, đã đối chiếu), 1.713,02 (đỉnh 03/11, đối chiếu), MA20 1.731,59, MA50 1.772,05 và MA200 1.793,39.
- **NẾU** VN-Index chưa lấy lại **1.710,72**, và các phiên phân phối còn ≥6 **THÌ** giữ chế độ phòng thủ, không tăng tỷ trọng.
- **NẾU** đóng dưới **1.693,75** trong một phiên tới **THÌ** rà soát rủi ro từng vị thế và chấp hành dừng lỗ **riêng từng mã**; không biến điều kiện thị trường thành lệnh bán đồng loạt.
- **NẾU** vượt MA50 **1.772,05**, MA20 quay lên, phân phối giảm còn ≤5, khớp/độ rộng/ngoại được xác minh cùng phạm vi **THÌ** tính lại trạng thái; một phiên phục hồi riêng lẻ chưa tạo lệnh mua.
- **Nhóm quan sát:** nguyên vật liệu (VN MATS +3,29%) và tài chính (+0,37%) có **sức giá tương đối tốt**, không đủ chứng cứ giá+khớp+ngoại ở cấp nhóm để gọi là tiền vào thật; bất động sản (VNREAL −2,18%) và năng lượng (VNENE −1,24%) yếu về giá. Không được dùng nhóm tốt làm khuyến nghị mua trước khi gỡ chặn.

## D. Bảng tự kiểm 20 mục (theo bản v3.3.1)

| # | Mục | Kết quả | Chứng cứ |
|---|---|---|---|
| 1 | Phiên thực, ngày phân tích và giờ chốt | ĐẠT | HOSE đóng 03/11; VNDIRECT 15:11:09 |
| 2 | Không dùng số phiên 04/11 | ĐẠT | Đọc chuỗi VNDIRECT chỉ đến 03; nguồn lịch sử chỉ dùng dòng 03 |
| 3 | Không suy/nhớ số làm bằng chứng | ĐẠT | JSON raw và các nguồn web đã mở |
| 4 | Đúng phiên và nguồn thật | ĐẠT | Links mục A |
| 5 | Đối chiếu số lõi đúng phạm vi | ĐẠT CÓ GIỚI HẠN | Đóng/% nhiều nguồn; khớp/độ rộng 1 NGUỒN đúng tập |
| 6 | Nhật ký tìm lại ô thiếu | ĐẠT | Mục A đủ ít nhất 3 trang |
| 7 | Chuỗi đủ phiên, không ghép | ĐẠT | 272 phiên VNDIRECT, 2+ dòng neo |
| 8 | Số công bố nằm trong nhật ký | ĐẠT | Mục A/B/C |
| 9 | Không sửa thầm Sổ | ĐẠT | Không có Sổ gốc |
| 10 | Ngày trong yêu cầu | ĐẠT | 03/11 |
| 11 | ĐẦY ĐỦ hay RÚT GỌN | ĐẠT | ĐẦY ĐỦ, MA20/50/dốc/TB20/phân phối đều tính |
| 12 | Nền xu hướng | ĐẠT | XẤU |
| 13 | Bảy điểm, thiếu chấm 0 | ĐẠT | −2/7 |
| 14 | Chặn cứng, mềm và hiệu lực | ĐẠT CÓ GIỚI HẠN | 7 phân phối xác minh; mốc vô hiệu Sổ/ngoại thiếu |
| 15 | Ba bước trạng thái | ĐẠT | KHÔNG dòng 1 |
| 16 | Không đăng vùng mua khi KHÔNG | ĐẠT | Không có vùng mua |
| 17 | Nguồn mốc và R:R | ĐẠT CÓ GIỚI HẠN | Mốc đáy bất đồng; R:R không áp dụng |
| 18 | Không suy dòng tiền ngành | ĐẠT | Chỉ sức giá ngành HOSE |
| 19 | Bài web/Zalo, giữ layout | ĐẠT | Pages 41826290155: 181/181 test, byte HTML/JS/CSS đúng, 133 bìa và 133 logo, tổng 56 nhận định; guard cấu trúc thành công |
| 20 | Chỉ bổ sung dòng Sổ mới | ĐẠT | Phần E, không chép lịch sử |

## E. Sổ dữ liệu tự lưu — phần bổ sung, **không đưa lên web/Zalo**

```text
=== SỔ VNINDEX — BỔ SUNG PHIÊN 03/11/2026 ===
PHẦN A — CHỈ DÒNG MỚI
03/11/2026;1699,62;1713,02;;-0,648849607182944;10474,10378006;152;135;72;;1815,60;;;Không;1 NGUỒN khớp/độ rộng; CHƯA XÁC MINH thấp nhất, ngoại KHỚP, tự doanh, basis

PHẦN B — TRẠNG THÁI CẦN MANG SANG
Trạng thái chốt: KHÔNG
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu theo Sổ người dùng: KHÔNG KIỂM ĐƯỢC
Hỗ trợ quan sát: 1693,75 (đáy 02/11); 1677,19 (đáy 20 phiên trước)
Kháng cự: 1710,72 (đóng 02/11); 1713,02 (đỉnh 03/11); 1731,59 (MA20); 1772,05 (MA50)
Chặn cứng: 7 phiên phân phối/25; gỡ khi ≤5
Phiên phân phối: 30/09;02/10;08/10;09/10;19/10;29/10;02/11
Ngoại KHỚP HOSE 3–5 phiên: CHƯA XÁC MINH
Basis VN30F1M đúng kỳ: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không sửa các dòng cũ do không có Sổ gốc người dùng.
```

**Tính đúng nguyên tắc:** Không đưa sự kiện 04/11 vào bài ngày 03; không suy chỉ số giảm đồng nghĩa phần lớn cổ phiếu giảm; không coi số liệu thiếu là tiêu cực. Chặn cứng 7 phân phối là căn cứ độc lập đã kiểm được.

## F. Kết quả cập nhật và triển khai thực tế

- **Giá EOD đã được hệ thống tự khóa ngày 03/11**, trước khi thực hiện lượt nghiên cứu này: `src/data/research-data.js` `meta.updated=2026-11-03`, 133/133 cổ phiếu đã kiểm phiên, trong đó 131 đóng khớp trực tiếp CafeF, PHP và QNS được đối chiếu KBS khi CafeF lệch; giá sử dụng VNDIRECT đã có xác nhận. Không cần ghi đè thủ công giá, không chạy lại tác vụ EOD. Nguồn: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41679414567.
- **Luồng EOD & watchdog:** hai lượt EOD 41673644543, 41679414567 thành công; hai lượt watchdog 41683611288, 41688297970 hoàn thành, không báo lỗi. Kiểm thử toàn bộ 181/181 đạt, 0 thất bại, 133 báo cáo, 133 mã, 55 bài nhận định trước khi thêm bản 03/11.
- **Kiểm toán riêng 03/11:** run https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41825427138 **SUCCESS**, đọc 272 phiên một nguồn VNDIRECT và kiểm MA, TB20, chặn, phân phối theo v3.3.1. Thay đổi duy nhất trong workflow kiểm toán là 2 giá trị ngày mục tiêu từ 02/11 sang 03/11; không sửa script, logic EOD hay cấu trúc web.
- **Nhận định:** bổ sung entry `market-view-20261103` tại đầu `src/data/daily-insights-auto.js`, số 53; giữ nguyên tất cả bài cũ và trường dữ liệu; bài Zalo cùng số nằm trong `zaloPost`, dài **351 chữ** (không tính tiêu đề ngoài bài).
- **Deploy:** run https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41826290155 **SUCCESS**. **181/181 kiểm thử đạt, 0 lỗi.** `Site audit passed: 133 báo cáo, 133 mã, 56 nhận định, 65 sự kiện vị thế`. Guard public layout and mutation scope hoàn tất. Post-deploy byte verification thành công ngay lần thử đầu: `index.html`, `assets/js/site.min.js`, `assets/css/site.min.css`. 133 ảnh bìa, 133 logo được xác minh; CSS SHA256 `c70d18bba556b3f426bfb9a5e094a18727e5d9765d857bd0e9f167fb3e9472bb` **không đổi**.
- **Không sửa bố cục:** HTML/CSS, thứ tự mục, giới hạn dòng và dàn chữ v2.2.2 được giữ nguyên. Không thay đổi chính sách stop −5%/−7%, không thay lịch chạy EOD/watchdog, không thay Sổ lịch sử đã ghi.
- **Điểm chưa tự động hóa:** hiện chưa xác minh được luồng **tự sinh và tự đăng nhận định v3.3.1** theo lịch độc lập. Bản ngày 03/11 được bổ sung từ yêu cầu này. Không coi việc EOD chạy tự động là bằng chứng bài nhận định tự chạy.
- **Giới hạn dữ liệu vẫn công khai:** đáy VNINDEX 03/11 khác nhau giữa nguồn, khớp/độ rộng khác phạm vi, ngoại KHỚP, tự doanh và basis chưa xác minh cùng phương pháp; không được biến thành con số chắc chắn.
