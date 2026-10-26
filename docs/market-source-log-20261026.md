# NHẬT KÝ KIỂM TOÁN NGUỒN — VN-INDEX 26/10/2026 · Prompt V3.3.1

**Ngày nhận định:** Thứ Hai 26/10/2026, có giao dịch chứng khoán. **Giờ khóa EOD của nguồn chính:** VNDIRECT Finfo phiên 26/10 lúc **15:02 giờ Việt Nam** (sau ATC), giá chỉ số đối chiếu Stockbiz ở ảnh đóng cửa **14:46**. **Giới hạn thông tin:** số/thông báo được xác minh đến thời điểm lập báo cáo sau 15:02 ngày 26/10; tuyệt đối không đưa tin phiên tương lai. Không có **Sổ dữ liệu tự lưu do người dùng cung cấp**; bản tin website không phải Sổ gốc. Dữ liệu qua GitHub Actions được gọi đúng là kết quả kiểm toán API, không mạo nhận truy vấn API bằng trình duyệt.

**Prompt:** Tệp gốc đang lưu tại `docs/prompt-nhan-dinh-vnindex-v3.md`, **v3.3.1**, băm GitHub `d3776d82a27f643bdc40b13729f564003417e2d0`. Đọc ba lượt độc lập: **(1)** cổng nguồn/độ tin cậy/chuỗi; **(2)** tính toán 7 yếu tố/phân phối/chặn/quy đổi; **(3)** chuẩn nội dung Việt hóa, Sổ mới, 20 tự kiểm, phụ lục giữ nguyên bố cục. Không có Sổ người dùng → không tự điền mốc vô hiệu chính thức.

## I. Nhật ký số liệu, phạm vi, trích từ nguồn

| Dữ kiện | Kết quả | Nguồn 1 (trích dữ liệu nguyên gốc ngắn) | Nguồn 2 / phạm vi khác | Nhãn |
|---|---|---|---|---|
| VN-Index đóng và % | **1.763,55 điểm; −10,60; −0,60%** | VNDIRECT Finfo raw 26/10 `"close":1763.55,"pctChange":-0.597469210607904` | Stockbiz 26/10 14:46 `1.763,55 -10,60/-0,60%` | **ĐÃ ĐỐI CHIẾU** |
| VN30 đóng và % | **1.889,53; −17,56; −0,92%** | VNDIRECT marketSession `"close":1889.53` | Stockbiz 14:46 `VN30 1.889,53 -17,56/-0,92%` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **259,32; −3,38; −1,29%** | VNDIRECT marketSession `"close":259.32` | Stockbiz 14:46 `HNX-INDEX 259,32 -3,38/-1,29%` | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.773,75 / 1.781,45 / 1.759,84** | VNDIRECT Finfo raw 15:02 `"open":1773.75,"high":1781.45,"low":1759.84` | VNIndex.ai bản **14:44** chỉ đối chiếu cao/thấp/mở: 1773,75 / 1781,45 / 1759,84; không dùng giá đóng cửa chưa kết thúc ATC | **ĐÃ ĐỐI CHIẾU OHLC**, giới hạn giá trong phiên nguồn 2 |
| Giá trị khớp **tập VNINDEX VNDIRECT** | **11.874,73449606 tỷ đồng / 518.996.420 CP** | VNDIRECT Finfo raw `"nmValue":11874734496060,"nmVolume":518996420` | Stockbiz IndicesStats 14:21 **tổng giao dịch 11.058,33 tỷ**, không cùng giờ/phạm vi; VNIndex.ai 14:44 **tổng giao dịch 12,39 nghìn tỷ**, không cùng phạm vi. Không dùng chúng tính TB20 | **1 NGUỒN** |
| Độ rộng **tập VNINDEX VNDIRECT** | **97 tăng / 203 giảm / 65 đứng / 2 sàn** | VNDIRECT Finfo raw `"advances":97,"declines":203,"noChange":65` và marketSession `floor:2` | VNIndex.ai 14:44 có 101 tăng/215 giảm/88 đứng **trên 404 mã**, giờ/tập khác; Stockbiz thiếu bảng cùng tập | **1 NGUỒN** |
| EOD 133 mã theo dõi | **133/133 giá cuối phiên 26/10** | EOD workflow 40289671779, mọi `coverage.priceDate=2026-10-26`, nguồn chính VNDIRECT | KBS đúng ngày xác nhận **giá đóng 133/133**; CafeF chưa có EOD. Khối lượng 129/133 trùng; BVS, CEO, DXP, SHS có lệch KL, website lấy VNDIRECT theo quy tắc | **ĐÃ ĐỐI CHIẾU GIÁ**, lưu sai lệch KL |
| Top 5 mã **góp điểm giảm** EOD | **Không công bố trị số chưa khóa** | VNIndex.ai 14:44 có dữ liệu top5 trong phiên **chưa phải EOD** | Stockbiz IndicesStats không có bảng điểm kéo; BSC báo cáo cuối ngày 26/10 chưa có bản đủ kiểm tại thời điểm lập | **CHƯA XÁC MINH** |
| Khối ngoại ròng **khớp lệnh HOSE** EOD và 5 phiên | **Không lấy số tạm làm số chốt** | HODL 26/10 ghi **−839,4 tỷ** nhưng đánh dấu `(tạm)`, `Phiên chưa kết thúc`; KHÔNG dùng làm giá trị chốt | VNIndex.ai 14:44 ghi bán ròng 942 tỷ (chưa đóng), Stockbiz thống kê mua/bán **tổng GD** 14:21 không cùng phạm vi; đã thử 3 trang | **CHƯA XÁC MINH** |
| Tự doanh EOD 26/10 | **Không có ròng cùng phạm vi đủ xác minh** | Smoney tự doanh mới nhất **23/10** khi kiểm tra | Thử nmquan thị trường và HODL (chưa có 26/10 EOD cùng phạm vi) | **CHƯA XÁC MINH** |
| Basis VN30F1M 26/10 | **Không đủ hai nguồn cuối ngày cùng kỳ hạn** | Thử Stockbiz IndexDetail chỉ số; Investing.com VN30 không phải hợp đồng | Thử các trang HNX/phái sinh hoặc nhà CTCK, chưa có bảng đúng phiên/giờ để khóa | **CHƯA XÁC MINH** |
| Cờ ETF/đáo hạn | **Chưa có cờ sự kiện 26/10 được xác minh** | Đáo hạn tháng 10 ngày 15/10 là phiên khác; không chuyển cờ tùy tiện | Chưa có thông báo cơ cấu chứng minh giao dịch 26/10 là phiên đặc thù | **KHÔNG GẮN CỜ** |

### Đường dẫn nguồn đã truy cập và kiểm tra

1. **Stockbiz EOD đúng chỉ số 26/10 ở mốc 14:46:** https://web.stockbiz.vn/News/2026/10/26/1917850/phh-bao-cao-tai-chinh-quy-3-2026.aspx — chỉ dùng **banner chỉ số cập nhật 14:46**, không dùng nội dung báo cáo PHH làm thông tin VNINDEX.
2. **Stockbiz IndexStats (số tổng GD ngày 26/10 khi mới 14:21, không phải EOD):** https://web.stockbiz.vn/IndicesStats.aspx
3. **VNIndex.ai ảnh chụp 26/10 lúc 14:44, chưa chốt ATC:** https://vnindex.ai/vnindex-hom-nay — dùng đối chiếu OHLC, ngành, không dùng số chốt/top5.
4. **Audit VNDIRECT Finfo 266 hàng gốc, 15:02:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40289685224 — log `SOURCE_HISTORY_ROWS_JSON`, `VERIFIED_MARKET_EVIDENCE_JSON`, `RAW_VENDOR_INDEX_QUOTE`.
5. **EOD 133 mã và đồng bộ có điều kiện:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/40289671779
6. **HODL khối ngoại trong phiên (tạm):** https://hodl.vn/indices/vnindex
7. **Smoney tự doanh, trang còn ở 23/10:** https://smoney.com.vn/giao-dich/tu-doanh
8. **nmquan lịch sử chỉ số (bản truy cập chưa có hàng 26/10):** https://nmquan.vn/data/chi-so/vn-index/lich-su
9. **Stockbiz IndexDetail (giữa phiên, không phải phái sinh):** https://web.stockbiz.vn/IndexDetail.aspx
10. **Investing.com (dữ liệu 11:24/13:51, chưa chốt):** https://vn.investing.com/indices/vn-historical-data
11. **HNX phái sinh:** chưa mở được bảng basis đúng ngày/hợp đồng, không bịa đường dẫn báo cáo.

**Nhật ký truy nguồn thiếu:** `1 NGUỒN` GT khớp: VNDIRECT raw (đủ) + Stockbiz tổng GD 14:21 (khác phạm vi) + VNIndex.ai tổng GD 14:44 (khác phạm vi). `1 NGUỒN` độ rộng: VNDIRECT đủ + VNIndex.ai 404 mã (khác tập) + Stockbiz thống kê chỉ số (thiếu đúng tập). `CHƯA XÁC MINH` ngoại: HODL còn tạm, VNIndex.ai trong phiên, Stockbiz mua/bán tổng khác khớp. Tự doanh: Smoney mới 23/10, nmquan chưa đủ 26/10, HODL cũng không có ròng tự doanh ngày 26 EOD. Basis: tìm Stockbiz IndexDetail, VN30 không phải futures từ Investing, HNX/phái sinh chưa có hai nguồn cùng hợp đồng và thời điểm. Top5: VNIndex.ai 14:44 (trong phiên), Stockbiz không bảng cùng chuẩn, báo cáo CTCK EOD đúng ngày chưa có.

## II. Chuỗi đồng nhất 266 phiên và tính toán

Nguồn (a) `VNDIRECT Finfo vnmarket_prices`, **266 dòng thực đọc**, từ **01/10/2025 đến 26/10/2026**, cùng giá đóng và `nmValue`, không nội suy và không ghép với tổng giao dịch. Hai hàng neo: `"date":"2026-10-23","close":1774.15` và `"date":"2026-10-26","close":1763.55`.

| Chỉ tiêu | Kết quả và cách tính | Nhãn |
|---|---|---|
| MA20 | TB 20 đóng cửa đến 26/10: **1.737,0715 → 1.737,07** | TỰ TÍNH |
| MA50 | TB 50 đóng cửa: **1.771,6270 → 1.771,63** | TỰ TÍNH |
| MA200 | TB 200 đóng cửa: **1.796,54155 → 1.796,54** | TỰ TÍNH |
| Dốc MA20/5 | 1.737,0715 − MA20 cách 5 phiên 1.748,5960 = **−11,5245 điểm**, xu hướng MA20 giảm | TỰ TÍNH |
| TB20 GT khớp liền trước | **12.358,229223619 tỷ**, 20 phiên không gồm 26/10, cùng nguồn VNDIRECT | TỰ TÍNH |
| Bội số GT khớp | 11.874,73449606 / 12.358,229223619 = **0,9608767 → 0,961×** | TỰ TÍNH |
| Khớp so 23/10 | 11.874,73449606/14.123,09041997−1 = **−15,92%** | TỰ TÍNH |
| Độ rộng | 97/203 = **0,4778** ≤0,67 ⇒ yếu tố 3 **−1** | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | (1.763,55−1.759,84)/(1.781,45−1.759,84) = **0,17168** → 1/3 dưới; **không tự kích hoạt chặn xả cuối** vì GT khớp/TB20 = 0,961<1 | TỰ TÍNH |
| Đáy 20 phiên trước | **1.677,19** ngày 20/10 (từ chuỗi lịch sử) | TỰ TÍNH |
| Phân phối còn hiệu lực/25 | **8 phiên:** 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Phiên 26/10 giảm −0,60% nhưng khớp 11.874,73 tỷ **thấp** hơn khớp 23/10 14.123,09 tỷ → **không tạo phân phối mới**; số phiên còn 8. Ngày 15/10 loại cờ đáo hạn đã xác minh; chưa đủ tăng 5% để gỡ các phiên cũ. | TỰ TÍNH |
| Nền xu hướng | **XẤU**: đóng 1.763,55 **dưới MA50 1.771,63**, MA20 **dốc xuống**, và dưới MA200 1.796,54; giá còn trên MA20 1.737,07 không làm nền đổi sang TRUNG TÍNH | TỰ TÍNH |
| 7 yếu tố | Giá/MA **0** (trên MA20, dưới MA50 và không thủng đáy 20); thanh khoản **0** (phiên giảm khớp 0,961<1,2); độ rộng **−1** (0,478); chất lượng Top5 **0** (bảng EOD thiếu chuẩn, không lấy 14:44); ngoại **0** (khớp EOD chưa khóa), phân phối **−1** (8≥5), phái sinh/vĩ mô **0** (basis thiếu đủ). **TỔNG −2/7**. | TỰ TÍNH |
| Chặn mềm | **Có kháng cự gần có xuất xứ** MA50 1.771,63 ở trên giá đóng 1.763,55, cách **0,46% ≤1,5%**. Không gắn chặn mềm "xanh điểm/đỏ mã" vì 26/10 chỉ số đỏ. | TỰ TÍNH |
| Chặn cứng | **Có 8 phân phối/25 ≥6**, điều kiện giữ đến khi còn ≤5. Chặn xả cuối **không đạt** vì khớp 0,961×TB20<1; chặn xanh điểm/đỏ mã **không áp dụng** vì chỉ số đỏ; chặn ngoại 5 phiên+MA50 và mốc vô hiệu Sổ gốc **KHÔNG KIỂM ĐƯỢC**. | TỰ TÍNH |
| Ba bước quy đổi | **Chế độ ĐẦY ĐỦ** (MA20/50, dốc MA20, khớp TB20 và phân phối đủ) → trạng thái thô **KHÔNG dòng 1** (chặn cứng) → trần nền **XẤU/KHÔNG** → thiếu Sổ tự lưu nên bỏ chống đảo chiều → **KHÔNG dòng 1**. | Theo V3.3.1 |
| R:R chỉ số | **Không áp dụng** vì KHÔNG mua mới và không có mốc vô hiệu chính thức từ Sổ gốc; không dựng R:R hoặc vùng mua giả. | Theo V3.3.1 |

## III. Sức giá ngành (chỉ dữ liệu mẫu 133 mã)

Theo bộ 133 mã của website, **không phải toàn HOSE**:
- Ngân hàng **1 tăng / 15 giảm / 2 đứng** trong 18 mã.
- Chứng khoán **4 tăng / 11 giảm / 0 đứng** trong 15 mã.
- Năng lượng **7 tăng / 2 giảm / 3 đứng** trong 12 mã.
- Bất động sản tổng hợp **3 tăng / 7 giảm** trong 10 mã; bất động sản nhà ở phân loại riêng **0 tăng / 4 giảm** trong 4 mã.
- Công nghiệp **1 tăng / 7 giảm** trong 8 mã; cảng biển/logistics **2 tăng / 2 giảm** trong 4 mã.

Không có bảng vốn ròng theo ngành khớp và ngoại đủ đối chiếu; cấm gọi các tỷ lệ giá này là **tiền ròng vào/ra ngành**. VNIndex.ai 14:44 cho ngân hàng −1,1%, bất động sản −0,4% theo chỉ số gia quyền, **là ảnh chụp trong phiên và khác tập thống kê**.

## IV. Kế hoạch điều kiện

- **NẾU** chỉ số còn dưới MA50 **1.771,63** và có 8 phân phối/25 **THÌ KHÔNG mua mới**; ưu tiên phòng thủ theo các điểm dừng lỗ riêng từng mã, hạn chế/không dùng đòn bẩy.
- **NẾU** phiên tới đóng thủng đáy 26/10 **1.759,84** hoặc mốc tham chiếu trước **1.750,83** thì đánh giá rủi ro tăng, giảm các mã yếu **chỉ khi mã vi phạm stop của chính mã**, không dịch stop để né chặn. Đáy 26/10 là mốc kỹ thuật mới dùng quan sát từ phiên sau, không thay mốc Sổ người dùng.
- **NẾU** lấy lại MA50 **1.771,63**, MA200 **1.796,54**, MA20 dốc lên và phân phối giảm còn ≤5, có thanh khoản/độ rộng xác nhận và chặn ngoại đã kiểm đủ, **THÌ** đánh giá lại trạng thái EOD; không tự mua.
- Tỷ trọng tham khảo **≤20% cổ phiếu** theo dòng 1 của Prompt trong bối cảnh chặn cứng, tùy tài khoản. Không chỉnh vùng mua/giá hợp lý/target/stop của 133 mã.

## V. Bổ sung một dòng Sổ mới (nội bộ, không sao Sổ cũ)

```text
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 26/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
26/10/2026;1763,55;1781,45;1759,84;-0,60;11874,73449606;97;203;65;;1889,53;;;Không;1 NGUỒN:GT khớp VNINDEX/độ rộng; CHƯA XÁC MINH:ngoại khớp/tự doanh/basis
PHẦN B — TRẠNG THÁI MANG SANG
Chốt KHÔNG — dòng 1; chế độ ĐẦY ĐỦ; nền XẤU; điểm −2/7
MA20 1737,07; MA50 1771,63; MA200 1796,54; MA20 giảm 11,52 điểm/5 phiên
Chặn cứng: 8 phân phối/25; điều kiện gỡ ≤5
Các phiên phân phối: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10
Chặn mềm: kháng cự MA50 còn cách 0,46%
Hỗ trợ kiểm soát mới: đáy 26/10 1759,84 (từ phiên sau); đáy 23/10 1750,83 (đã công bố), không tự thay stop
Ngoại khớp 5 phiên, chặn Sổ gốc và mốc vô hiệu: KHÔNG KIỂM ĐƯỢC
Basis 26/10 và tự doanh đúng giờ EOD: CHƯA XÁC MINH
Chống đảo chiều: bỏ khi không có Sổ tự lưu
PHẦN C — ĐÍNH CHÍNH
Không điều chỉnh dòng cũ từ Sổ người dùng chưa cung cấp.
```

## VI. Bảng tự kiểm 20 điều kiện

| # | Điều kiện | Kết quả |
|---|---|---|
| 1 | Phiên có giao dịch thật, mốc giờ EOD | ĐẠT |
| 2 | Không dùng dữ liệu/tin phiên tương lai | ĐẠT |
| 3 | Không lấy giá trong phiên để chốt | ĐẠT |
| 4 | Nguồn có thật, đúng URL, phân biệt GitHub audit | ĐẠT |
| 5 | 2 nguồn độc lập cho số lõi | **CÓ GIỚI HẠN:** chỉ số/giá đối chiếu; khớp và độ rộng 1 NGUỒN |
| 6 | Nhật ký tìm lại số 1 NGUỒN và thiếu EOD | ĐẠT có giới hạn basis, ngoại và top5 |
| 7 | 266 hàng lịch sử gốc, 2 neo, không nội suy | ĐẠT |
| 8 | Các số đăng web truy vết và có nhãn | ĐẠT trong giới hạn một nguồn |
| 9 | Không giả/sửa Sổ cũ | ĐẠT |
| 10 | Đúng 26/10, không lùi phiên | ĐẠT |
| 11 | 5 chỉ báo đủ, chế độ ĐẦY ĐỦ | ĐẠT |
| 12 | Nền XẤU, các MA và dốc thực tính | ĐẠT |
| 13 | 7 yếu tố tổng −2/7 đúng ngưỡng | ĐẠT |
| 14 | Quét chặn cứng/mềm và chưa kiểm | ĐẠT có giới hạn ngoại/Sổ gốc |
| 15 | Quy đổi 3 bước, dòng 1 KHÔNG | ĐẠT |
| 16 | Không phát vùng mua mới khi KHÔNG | ĐẠT |
| 17 | Mốc xuất xứ, không hạ stop, R:R không áp dụng | ĐẠT |
| 18 | Ngành chỉ gọi sức giá, không gọi vốn ròng | ĐẠT |
| 19 | Kiểm tra deploy/đồng bộ nội dung và giữ layout | CHỜ kiểm thử bản nhận định sau xuất bản |
| 20 | Sổ chỉ bổ sung dòng 26/10, không sao Sổ cũ | ĐẠT |
