# NHẬT KÝ NGUỒN — VN-INDEX 05/11/2026 — v3.3.1

**Phiên phân tích:** Thứ Năm, 05/11/2026. **Ngày thực hiện:** 09/11/2026. **Mốc cắt phân tích:** sau đóng cửa ngày 05/11, giờ Việt Nam. **Không dùng diễn biến 06/11 hoặc 09/11 để suy ra tín hiệu của 05/11**; chỉ dùng các trang lịch sử hiển thị đúng bản ghi ngày 05/11 và tin phát trong ngày. **Sổ gốc người dùng:** không được cung cấp; bài web 04/11 không được mặc nhiên coi là Sổ tự lưu.

Prompt được kiểm theo **ba lượt độc lập** (tệp `docs/prompt-nhan-dinh-vnindex-v3.md`, SHA d3776d82a27f643bdc40b13729f564003417e2d0):
1. **Lượt I — mục 0–I:** dữ liệu lõi, mốc cắt, nguồn độc lập, khớp HOSE không gồm thỏa thuận, độ rộng cùng tập, 1 NGUỒN, tìm ít nhất ba trang cho số chưa xác minh, chuỗi một gốc.
2. **Lượt II — mục II:** MA20/MA50/MA200, dốc MA20, TB20, 7 yếu tố, phân phối 25 phiên, chặn mềm/cứng và quy đổi trạng thái ba bước.
3. **Lượt III — mục III–XII + phụ lục:** tình huống NẾU–THÌ, mốc có nguồn, Zalo 250–400 chữ không thuật ngữ nội bộ, giữ nguyên `market-decision-brief-standard.md` v2.2.2, 20 kiểm soát và Sổ chỉ bổ sung dòng mới.

## A. Nhật ký nguồn đúng ngày và phạm vi

| Số liệu | Giá trị và đơn vị | Nguồn 1: trích đoạn có số | Nguồn 2: trích đoạn có số / phân giải | Nhãn |
|---|---|---|---|---|
| VN-Index đóng/% | **1.740,73; +7,71; +0,44%** | VNDIRECT raw `"close":1740.73,"pctChange":0.444888114389918` (15:11:10 05/11) | HOSE `VNINDEX 1,740.73 7.71 0.44`; BSC `VN-Index +7.71 điểm`; FireAnt `1.740,73 điểm` | **ĐÃ ĐỐI CHIẾU** |
| VN30/HNX/VNMID/VNSML | **VN30 1.865,23 (+0,17%); HNX 256,61 (−0,49%); VNMID 1.858,73 (+0,46%); VNSML 1.230,18 (+0,14%)** | HOSE `VN30 1,865.23 3.16 0.17`, `VNMIDCAP 1,858.73 8.45 0.46` | FireAnt VN30 `1.865,23`, HNX `256,61`; hai rổ mid/small dùng bản HOSE | VN30/HNX **ĐÃ ĐỐI CHIẾU**; VNMID/VNSML **1 NGUỒN HOSE** |
| Mở, cao, thấp | **Mở 1.745,03; cao 1.753,15; thấp BẤT ĐỒNG** | VNDIRECT raw `"open":1745.03,"high":1753.15,"low":1731.68` | VNIndex.ai/FireAnt `1.745,03 / 1.753,15 / 1.736,26` (thấp lệch 4,58). **Không tự phân xử thấp từ nguồn khác.** | Mở/cao **ĐÃ ĐỐI CHIẾU**, thấp **CHƯA XÁC MINH** |
| **Khớp lệnh VNINDEX** | **13.892,04211592 tỷ; 673.228.995 cp**, không gồm thỏa thuận | VNDIRECT `"nmValue":13892042115920,"nmVolume":673228995` | FireAnt `13.892 tỷ đồng` (làm tròn); BSC `13,911 tỷ` và HOSE `13,960` khác phạm vi/khâu tập hợp. Không trộn. | **ĐÃ ĐỐI CHIẾU ở mức làm tròn; số gốc theo VNDIRECT** |
| **Tổng GD VNINDEX** | **15.829,78060977 tỷ**, gồm thỏa thuận | VNDIRECT `"accumulatedVal":15829780609770` | HOSE dòng VNINDEX `15,829.78` | **ĐÃ ĐỐI CHIẾU**; không dùng làm TB20 |
| **Độ rộng VNINDEX VNDIRECT** | **163 tăng / 137 giảm / 64 đứng**, 5 trần, 2 sàn | VNDIRECT `"advances":163,"declines":137,"noChange":64` | OpenBDS/VNIndex.ai thống kê 163/137/64 ở bảng tổng hợp nguồn VNDIRECT; BSC 163/139/100 khác tập; VISC 168/139/64 khác tập. Chỉ tính theo VNDIRECT. | **1 NGUỒN đúng tập; các bảng khác không đồng phạm vi** |
| Top5 đóng góp tăng | **VIC +6,54; CTG +0,90; STB +0,60; VPL +0,55; MBB +0,53** | BSC Brief ngày 05/11: `VIC (+6.54), CTG (+0.90), STB (+0.60)` | VNIndex.ai VIC `+6,40`, OpenBDS VIC `+6,3`; có chênh do phương pháp; dùng bảng BSC nhất quán. | **1 NGUỒN chính cho top5 cụ thể** |
| Chỉ số ngành HOSE | **VNREAL +1,30%; VNFIN +0,43%; VNIND +0,64%; VNIT −1,80%; VNENE −0,87%; VNMAT −0,70%** | HOSE `VNREAL 3,191.67 41.09 1.30`; `VNIT 2,770.71 -50.71 -1.80` | BSC ghi 11/18 ngành tăng và công nghệ giảm hơn 1%; VNIndex.ai bất động sản +1,3%. Không kết luận vốn ròng của ngành từ chỉ số giá. | **HOSE 1 NGUỒN theo phân ngành, xác nhận xu hướng chung BSC** |
| Ngoại HOSE tổng | **−171 tỷ (mua 2.319, bán 2.489)** | HOSE `GTGD ... 2,319 ... 2,489 ... -171` | BSC `-171.47 tỷ đồng`; FireAnt `171 tỷ đồng`. **Đây là tổng, không chứng minh riêng khớp.** | **ĐÃ ĐỐI CHIẾU TỔNG** |
| Ngoại **KHỚP** HOSE liên tiếp | **Chưa xác minh đồng phạm vi 3–5 phiên** | Thử HOSE tổng, BSC tổng, FireAnt tổng | VNIndex.ai ước tính ròng -239 tỷ khác phương pháp; không tự biến “bán tổng phiên thứ 10” thành điều kiện bán **khớp** liên tiếp. | **CHƯA XÁC MINH** |
| Tự doanh và basis VN30F1M | **Chưa xác minh đồng phạm vi và đúng hợp đồng cuối phiên** | Thử HOSE tổng kết, BSC Brief, FireAnt tổng tự doanh | Không có bảng basis đồng thời VN30F1M đúng kỳ với chuỗi; nguồn tự doanh khác phạm vi | **CHƯA XÁC MINH** |
| Cờ sự kiện thanh khoản chung | **Chưa có sự kiện chung đã xác minh ảnh hưởng phương pháp phân phối** | HOSE mục sự kiện ECO, BSC và FireAnt; lịch HNX đáo hạn tháng 10 ngày 15/10 | Không suy cờ từ việc ngày giao dịch thứ Năm | **Không gắn cờ theo chứng cứ hiện có** |

**Các trang được mở đọc, đúng phiên và quyền truy vết:**
- VNDIRECT Finfo `vnmarket_prices` khóa **274 phiên** trong audit đọc độc lập: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42537583243
- HOSE tổng kết chính thức 05/11 lúc 16:52, bản sao: https://web.stockbiz.vn/News/2026/11/5/1922228/hose-diem-tin-giao-dich-ngay-05-11-2026.aspx
- BSC Brief báo cáo 05/11: https://www.bsc.com.vn/bao-cao/16126-bsc-brief-05-11-vn-index-giang-co-tam-ly-than-trong-van-chi-phoi/
- FireAnt bản riêng 05/11: https://fireant.vn/thi-truong/phien/2026-11-05
- VNIndex.ai bản lịch sử riêng 05/11: https://vnindex.ai/vn-index/phien/05-11-2026
- Công ty chứng khoán VISC, 05/11 17:26: https://visc.com.vn/vi/news/bao-cao-phan-tich-3155/ban-tin-thi-truong-ngay-05112026-1574.spp
- OpenBDS phiên 05/11, chỉ dùng các số 05/11 và ghi rõ bài nhận định tạo tự động: https://openbds.com.vn/nhan-dinh-thi-truong/2026-11-05

**Nhật ký tìm lại số 1 NGUỒN và CHƯA XÁC MINH:**
- Thấp: VNDIRECT 1.731,68, VNIndex.ai 1.736,26, FireAnt 1.736,26, nmquan 1.736,26. Chênh thật, ghi cả hai; bỏ số thấp khỏi hệ thống kích hoạt, không suy một nguồn đúng.
- Độ rộng: VNDIRECT 163/137/64, BSC 163/139/100, VISC 168/139/64, VNIndex.ai 166/139/99. Khác phạm vi (rổ đếm), không ép bằng nhau; trong Sổ dùng phạm vi VNDIRECT.
- Top5: BSC cho đủ 5 mã; VNIndex.ai có VIC +6,40 và OpenBDS +6,3 nhưng không có cùng bảng điểm 5 mã. Tỷ lệ top5 **1 NGUỒN** là phép tính từ BSC; kết luận tập trung vẫn vững vì một VIC đã >70% mức tăng chỉ số.
- Ngoại KHỚP: HOSE, BSC, FireAnt, VNIndex.ai đều có số tổng hay ước tính khác phạm vi; không có chuỗi mua/bán ròng **khớp lệnh** cùng phương pháp, ghi thiếu.
- Basis: HOSE cơ sở, BSC mô tả hợp đồng cùng chiều, FireAnt thống kê cơ sở, lịch HNX đáo hạn không có chuỗi basis cùng kỳ → chưa xác minh.
- Tự doanh: FireAnt tổng +254, BSC không có bảng đồng phạm vi; HODL tổng +337 khác cách thống kê → không chấm.
- VNMID/VNSML: HOSE công bố theo danh sách riêng; VISC không có hai chỉ số này và FireAnt không hiển thị cùng bảng; đúng số nhưng không tự dán nhãn hai nguồn.

## B. Phép tính từ 274 phiên một gốc VNDIRECT, không nội suy

Lịch sử **274 dòng** thực, 01/10/2025 – 05/11/2026, chỉ `code=VNINDEX` và `nmValue` (khớp) cùng nguồn. Hai dòng gốc truy vết:
- `"date":"2026-11-03","close":1699.62,"nmValue":10474103780060`
- `"date":"2026-11-04","close":1733.02,"nmValue":15284017390270`
- Dòng phân tích `"date":"2026-11-05","open":1745.03,"high":1753.15,"low":1731.68,"close":1740.73,"nmValue":13892042115920`.

| Phép tính | Kết quả | Nhãn |
|---|---|---|
| MA20 (gồm 05/11) | **1.730,6635 → 1.730,66** | TỰ TÍNH |
| MA50 | **1.770,3834 → 1.770,38** | TỰ TÍNH |
| MA200 | **1.791,7687 → 1.791,77** | TỰ TÍNH |
| Dốc MA20 trong 5 phiên | 1.730,6635 − 1.736,4955 = **-5,8320 điểm**, tiếp tục hướng xuống | TỰ TÍNH |
| TB20 khớp (20 phiên **trước** 05/11) | **12.533,748401 tỷ** | TỰ TÍNH |
| Khớp/TB20 | 13.892,04211592/12.533,748401 = **1,108×** | TỰ TÍNH |
| Khớp so ngày 04/11 | **-9,11%** | TỰ TÍNH |
| Độ rộng | 163/137 = **1,190**, trong (0,67;1,5) ⇒ **0** | TỰ TÍNH |
| Top5 (BSC) | 6,54+0,90+0,60+0,55+0,53 = **9,12 điểm**; /7,71 = **118,29%** >70% ⇒ yếu tố 4 **−1** | TỰ TÍNH từ số 1 NGUỒN |
| Nến giá | Mở 1.745,03, cao 1.753,15, thấp nguồn 1 1.731,68 / nguồn khác 1.736,26, đóng 1.740,73. **Không đủ đồng thuận để chốt vị trí nến**, nhưng bội số 1,108×TB20 không chạm ngưỡng khớp cần cho xả cuối nếu phần nến thấp không thỏa; phải đánh giá trên hai biến chứ không suy từ một con số. | KHÔNG TÍNH CHẶN XẢ CUỐI khi giá thấp bất đồng |
| Phân phối mới? | Chỉ số **tăng +0,44%**, không phải phiên giảm ≥0,2% ⇒ **KHÔNG** tạo phân phối mới | TỰ TÍNH |
| Phân phối/25 | **6** ngày: 02/10; 08/10; 09/10; 19/10; 29/10; 02/11. **≥6 ⇒ CHẶN CỨNG**. Không gỡ chỉ vì 05/11 tăng hoặc phiên trước tăng; gỡ khi còn tối đa 5. | TỰ TÍNH |
| Nền xu hướng | 1.740,73 > MA20 1.730,66 nhưng < MA50 1.770,38 và MA200 1.791,77, MA20 dốc **-5,83** điểm so 5 phiên ⇒ **XẤU**, trần KHÔNG. | Theo v3.3.1 |
| 7 yếu tố | Giá/MA **0**; khớp **0** (phiên tăng, 1,108× TB20); độ rộng **0** (1,190); chất lượng tập trung trụ **−1** (118,29%); ngoại **0** (thiếu KHỚP); phân phối **−1** (6); phái sinh/vĩ mô **0** (thiếu) ⇒ **−2/7**. | Theo v3.3.1 |
| Chặn mềm | Top5 kéo điểm >70% ⇒ **CHẶN MỀM**; giá còn dưới đỉnh 05/11 1.753,15 (cách 0,71%) và dưới giá đóng 29/10 1.755,61 (mốc có xuất xứ); mua mới bị cấm. Ngoại KHỚP 5 phiên chưa kiểm được. | Theo v3.3.1 |
| Chặn cứng | **6 phiên phân phối/25** xác lập độc lập. Xanh điểm đỏ mã **không** vì 163 tăng >137 giảm. Xả cuối **không kết luận từ nến thấp khác nhau**. Ngoại KHỚP và Sổ gốc **KHÔNG KIỂM ĐƯỢC**; không coi đã qua. | Theo v3.3.1 |
| Ba bước | B1 chặn cứng → **KHÔNG, dòng 1**; B2 nền XẤU → vẫn KHÔNG; B3 không có Sổ gốc nên không chạy chống đảo chiều, chốt **KHÔNG dòng 1**. | Theo v3.3.1 |
| R:R của chỉ số | **Không áp dụng** khi thiếu mốc vô hiệu đã công bố trong Sổ gốc. Không tự dời stop từ giá thấp 05/11 đang tranh chấp. | Theo v3.3.1 |

## C. Kịch bản và hành động, không dùng dữ liệu 06/11

- Hỗ trợ quan sát **MA20 1.730,66** (VNDIRECT, đang giảm), **1.733,02** (giá đóng 04/11), **1.710,72** (đóng 02/11 đã đối chiếu). Không dùng thấp 05/11 do bất đồng nguồn.
- Cản gần **1.753,15** (đỉnh 05/11 VNDIRECT/FireAnt/VNIndex.ai cùng số), **1.755,61** (đóng 29/10), **MA50 1.770,38**, **MA200 1.791,77**.
- **NẾU** giữ được MA20 **1.730,66** THÌ giữ các mã đã có còn khỏe theo stop riêng và quan sát khớp, **không mở mua mới** vì chặn 6 phân phối.
- **NẾU** VN-Index mất MA20 **1.730,66** và đóng lại dưới 1.710,72 THÌ rà trước các vị thế yếu, giảm khi vi phạm stop riêng; không bình quân giá xuống.
- **NẾU** VN-Index vượt đỉnh **1.753,15**, tiếp đó lấy lại MA50 **1.770,38**, MA20 quay dốc lên, phân phối còn ≤5, độ rộng và tiền khớp/ngoại đủ đối chiếu THÌ tính lại 7 yếu tố và chặn. Không tự mở mua chỉ nhờ vượt cản phiên.
- **Nhóm quan sát, không mua theo giá:** bất động sản +1,30%, tài chính +0,43%, công nghiệp +0,64% sức giá đỡ thị trường; công nghệ −1,80%, năng lượng −0,87%, nguyên vật liệu −0,70% còn yếu theo HOSE. Không có đủ giá + khớp + ngoại cùng cấp ngành để gọi vốn ròng vào/ra.

## D. Bảng tự kiểm 20 mục

| # | Mục kiểm | Kết quả | Căn cứ |
|---|---|---|---|
| 1 | Ngày/giờ phiên, mốc cắt | ĐẠT | HOSE 05/11, VNDIRECT 15:11:10 |
| 2 | Không dùng phiên sau mốc | ĐẠT | Kiểm toán chỉ tới 05/11; không lấy giao dịch 06/11 |
| 3 | Số lõi trích nguồn thật | ĐẠT | VNDIRECT raw và HOSE/BSC/FireAnt; có trích |
| 4 | Trang nguồn đã mở | ĐẠT | A, đầy đủ link |
| 5 | Số lõi 2 nguồn / dán nhãn đúng | ĐẠT CÓ GIỚI HẠN | Giá/% 2+; khớp làm tròn, độ rộng chỉ 1 NGUỒN cùng tập |
| 6 | Nhật ký tìm lại số thiếu | ĐẠT | Các nguồn phạm vi khác theo A |
| 7 | Chuỗi một gốc và neo | ĐẠT | 274 phiên, 3 dòng raw đã ghi |
| 8 | Số website/Zalo truy ra nhật ký | ĐẠT | A/B/C |
| 9 | Bảo toàn Sổ gốc | ĐẠT | Không có Sổ gốc, không sao chép |
| 10 | Ngày theo lệnh người dùng | ĐẠT | 05/11/2026 |
| 11 | Chế độ đúng | ĐẠT | ĐẦY ĐỦ |
| 12 | MA/nền xu hướng | ĐẠT | XẤU |
| 13 | 7 yếu tố đúng ngưỡng, thiếu=0 | ĐẠT | −2/7 |
| 14 | Kiểm chặn và điều kiện gỡ | ĐẠT CÓ GIỚI HẠN | Chặn phân phối 6 đã kiểm; thiếu ngoại KHỚP, Sổ |
| 15 | Ba bước và dòng cuối | ĐẠT | KHÔNG dòng 1 |
| 16 | Không ghi vùng mua khi KHÔNG | ĐẠT | Không tạo điểm mua |
| 17 | Mốc/R:R và ba kịch bản | ĐẠT CÓ GIỚI HẠN | Thấp 05 bất đồng; R:R không áp dụng |
| 18 | Nhóm ngành chỉ theo bằng chứng | ĐẠT | Mô tả sức giá ngành HOSE |
| 19 | Giữ khung web và trùng Zalo | ĐẠT | Pages 42538046322: 181/181 kiểm thử, 58 bài; byte HTML/JS/CSS khớp sau triển khai, 133 bìa + 133 logo, guard bố cục thành công |
| 20 | Sổ mới giữ cũ | ĐẠT | E |

## E. Sổ tự lưu bổ sung — **không xuất bản website/Zalo**

```text
=== SỔ VNINDEX BỔ SUNG PHIÊN 05/11/2026 ===
PHẦN A — CHỈ MỘT DÒNG MỚI
05/11/2026;1740,73;1753,15;;+0,444888114389918;13892,04211592;163;137;64;;1865,23;;;Không;khớp VNDIRECT/làm tròn FireAnt; độ rộng 1 NGUỒN; thấp, ngoại KHỚP, basis chưa đồng nhất

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái: KHÔNG (dòng 1), chặn cứng đã xác minh 6 phân phối/25
Chế độ: ĐẦY ĐỦ, nền XẤU, MA20 dốc xuống
Mốc vô hiệu từ Sổ gốc: KHÔNG KIỂM ĐƯỢC
Hỗ trợ quan sát: MA20 1730,66; đóng 04/11 1733,02; đóng 02/11 1710,72
Kháng cự: 1753,15 (đỉnh 05/11); 1755,61 (đóng 29/10); MA50 1770,38
Các phiên phân phối: 02/10;08/10;09/10;19/10;29/10;02/11
Chặn chỉ gỡ khi: số phiên phân phối còn ≤5
Ngoại KHỚP liên tiếp: CHƯA XÁC MINH
Basis VN30F1M: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không tự ý sửa Sổ gốc chưa được cung cấp.
```

## F. Trạng thái vận hành EOD và bản cập nhật mới hơn

- **Khóa EOD 05/11 đã thành công:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42066208013, **133/133 giá đóng**, 131 khớp CafeF trực tiếp; **OIL 12.900** (CafeF 12.800) và **VGI 75.500** (CafeF 75.600) được KBS date-specific đối chiếu trùng VNDIRECT. **181/181 kiểm thử**, 0 lỗi; byte HTML/JS/CSS sau triển khai đúng, 133 ảnh bìa, 133 logo.
- **Lượt EOD 05/11 tái kiểm thất bại:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42073050388, verified=131/133; `OIL KBS missing row`, `VGI KBS missing row`. Lỗi dịch vụ nguồn kiểm tra phụ ở thời điểm mới; không xóa bản EOD đã khóa, không bỏ qua cổng xác minh.
- **Watchdog 05/11:** 42076905522 và 42080460021 SUCCESS, thông báo dữ liệu đã đúng ngày.
- **Giá mới hơn đã tự cập nhật:** ngày 06/11 có run 42254736511 SUCCESS, khóa đủ 133/133 giá và 181 kiểm thử, byte hậu triển khai đạt. `src/data/research-data.js` hiện có `meta.updated=2026-11-06`. **Không được quay ngược dữ liệu sang 05/11** để phục vụ bài nhận định lịch sử.
- **Kiểm toán thị trường 05/11 độc lập:** run https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42537583243 SUCCESS, 274 dòng. Bản nhận định sẽ chèn riêng entry 05/11 trên `src/data/daily-insights-auto.js`, giữ toàn bộ bài cũ và khóa giao diện.
- **Cơ chế tự động tạo bài v3.3.1 theo lịch:** chưa có workflow đã xác minh; EOD tự chạy không đồng nghĩa bài nhận định đã tự sinh. Không báo sai là đã tự động hóa hoàn toàn.

## G. Kết quả xác minh Pages sau xuất bản (hoàn thành)

- Đã thêm đúng một bản `market-view-20261105` vào đầu `src/data/daily-insights-auto.js` cùng bài Zalo **365 chữ**, giữ 57 bản cũ, tổng **58** bài. Mục phân tích phản ánh **chỉ phiên 05/11** trong khi tệp giá website được giữ mới hơn ở **06/11**. Phạm vi thay đổi đã qua guard, không sửa HTML/CSS hoặc quy tắc quản trị.
- GitHub Pages deploy https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/42538046322 **SUCCESS** sau khi kiểm byte hậu triển khai: **181/181 kiểm thử đạt, 0 fail**; `Site audit passed: 133 báo cáo, 133 mã, 58 nhận định, 67 sự kiện vị thế`. SHA-256 `index.html`, `assets/js/site.min.js`, `assets/css/site.min.css` khớp bản live lần thử **1**. **133 ảnh bìa và 133 logo** xác minh đạt. CSS SHA256 `c70d18bba556b3f426bfb9a5e094a18727e5d9765d857bd0e9f167fb3e9472bb` không đổi.
- Không thay đổi cấu trúc 6 khu vực công khai, thứ tự mục, dàn chữ, kiểu trang, quy tắc dừng lỗ hay lịch EOD/watchdog. Chỉ ghi nhật ký, đổi 2 giá trị ngày workflow **read-only**, thêm một entry nhận định có nguồn.
- **Giới hạn chưa giải quyết:** giá thấp ngày 05/11 còn bất đồng nguồn và các điều kiện ngoại KHỚP/basis chưa xác minh; nguồn KBS tạm thiếu dữ liệu OIL/VGI trong lần tái kiểm EOD 05/11 nhưng phiên đã được khóa chính xác từ lượt SUCCESS. Đây không phải lý do hợp lệ để nới cổng xác minh. Luồng tự tạo nhận định v3.3.1 hàng ngày chưa có lịch độc lập đã xác minh.
