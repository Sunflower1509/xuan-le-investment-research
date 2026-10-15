# Nhật ký nguồn kiểm soát nội bộ — VN-Index 15/10/2026, Prompt V3.3.1

**Ngày phân tích, ngày thực hiện:** 15/10/2026, thứ Năm, có phiên EOD đã xác minh. **Mốc cắt:** hết ngày 15/10/2026, giờ Việt Nam. Nguồn chính VNDIRECT Finfo raw VNINDEX chốt mốc 15:04; 133/133 cổ phiếu EOD có giá đối chiếu độc lập KBS, kiểm tra GitHub Actions thành công sau ATC. **Không có Sổ dữ liệu tự lưu người dùng dán vào**; nhận định cũ trên trang không thay thế Sổ do người dùng lưu.

## A. Nhật ký nguồn số gốc

| Dữ kiện | Số được dùng | Phạm vi/đơn vị | Nguồn 1, trích nguyên văn đoạn số ngắn | Nguồn 2 đã mở, trích số ngắn | Nhãn |
|---|---|---|---|---|---|
| VN-Index đóng cửa | **1.698,35** | điểm EOD 15/10 | VNDIRECT VNINDEX: `"date":"2026-10-15","close":1698.35` | Stockbiz thống kê EOD 15/10: `15/10/2026 1698,35 -6,52(-0,38%)` | ĐÃ ĐỐI CHIẾU |
| Điểm, % thay đổi | **−6,52; −0,38%** | EOD so 14/10 | VNDIRECT: `"pctChange":-0.382433851261388` | Stockbiz: `-6,52(-0,38%)` | ĐÃ ĐỐI CHIẾU |
| Mở, cao, thấp | **1.701,20 / 1.709,54 / 1.690,56** | điểm EOD | VNDIRECT: `"open":1701.2,"high":1709.54,"low":1690.56` | VNIndex.ai 14:39 thể hiện `1.701,20`, `1.709,54`, `1.690,56`, đúng biên nhưng không phải chốt giá ATC | 1 NGUỒN giá OHLC trọn vẹn EOD |
| VN30 | **1.843,71; −8,73 (−0,47%)** | điểm EOD | VNDIRECT marketSession `"close":1843.71` | Stockbiz: `1.843,71 -8,73/-0,47%` | ĐÃ ĐỐI CHIẾU |
| HNX-Index | **259,29; −5,87 (−2,21%)** | điểm EOD | VNDIRECT marketSession `"close":259.29` | Stockbiz: `259,29 -5,87/-2,21%` | ĐÃ ĐỐI CHIẾU |
| GT khớp lệnh HOSE | **14.017,479245 tỷ** | VNINDEX VNDIRECT `nmValue/10^9`, không thỏa thuận | VNDIRECT: `"nmValue":14017479245210` | Stockbiz bảng `14.804,06 tỷ`, là giá trị GD tổng gồm thỏa thuận/khác phạm vi; VNIndex.ai bảng `13,62 nghìn tỷ` lúc 14:39, khác mốc | **1 NGUỒN** |
| KL khớp lệnh HOSE | **635.720.836 cổ phiếu** | VNINDEX VNDIRECT `nmVolume`, không thỏa thuận | VNDIRECT: `"nmVolume":635720836` | Stockbiz tổng KL `676.625.207`; khác phạm vi | **1 NGUỒN** |
| Độ rộng theo VNDIRECT | **152 tăng / 147 giảm / 51 đứng**, 6 mã sàn | Phạm vi `vnmarket_prices`; sàn thuộc tập giảm | `"advances":152,"declines":147,"noChange":51,"floorStocks":6` | VNIndex.ai lúc 14:39 trên 404 mã: 152/152/100; khác giờ và tập đếm | **1 NGUỒN** |
| Khối ngoại HOSE ròng khớp & chuỗi 5 phiên | Chưa xác minh phạm vi khớp chính thức | EOD | Stockbiz bảng giá trị mua 1.591,15 tỷ, bán 2.276,70 tỷ là mục NĐTNN của bảng tổng, chưa chứng minh chỉ khớp lệnh | VNIndex.ai 14:39 chỉ giá trị ước tính −582,96 tỷ; HODL 15/10 ghi `(tạm)`; không đồng phạm vi | CHƯA XÁC MINH |
| Tự doanh toàn phiên | Chưa xác minh | EOD HOSE, cả hai chiều | Stockbiz bảng chỉ số không có số tự doanh EOD cùng phạm vi | VNIndex.ai không có tổng tự doanh EOD; Vietnambiz chưa xác định tổng 15/10 cùng phạm vi | CHƯA XÁC MINH |
| Basis VN30F1M đúng kỳ EOD | Không dùng chấm điểm | Phiên đáo hạn VN30F2610 | HNX quy tắc hợp đồng tương lai VN30: `Ngày Thứ Năm thứ ba trong tháng đáo hạn` | CTCK DSC lịch VN30F2610: `15/10/2026` | ĐÃ XÁC MINH cờ sự kiện, không dùng basis |

**Các nguồn đã thực sự đọc:** VNDIRECT chuỗi raw 259 dòng: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-15&size=500 ; GitHub job kiểm toán 259 dòng và hai dòng neo https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38703757255 ; khóa 133/133 cổ phiếu và đối chiếu tệp sau deploy https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/38703307264 ; Stockbiz thống kê cuối phiên https://web.stockbiz.vn/IndicesStats.aspx ; VNIndex.ai lưu snapshot 14:39 (không lấy giá đóng cuối phiên) https://vnindex.ai/vnindex-hom-nay ; HNX mẫu hợp đồng https://eoffice.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html ; DSC lịch VN30F2610 https://www.dsc.com.vn/kien-thuc/dao-han-phai-sinh-la-gi .

**Nhật ký tìm kiếm khi chỉ có 1 NGUỒN:** thử Stockbiz IndicesStats và VNIndex.ai: khác phạm vi thanh khoản tổng vs khớp lệnh; độ rộng VNIndex.ai tính 404 mã tại 14:39, khác tập và thời gian; không trộn. **Khối ngoại:** đã mở VNIndex.ai (ước tính giữa phiên), HODL https://hodl.vn/indices/vnindex (tạm), Stockbiz NĐTNN https://web.stockbiz.vn/ForeignerTradingStats.aspx (không chứng minh chỉ khớp EOD); không có chuỗi ròng 5 phiên cùng phạm vi. **Tự doanh:** đã thử Stockbiz, VNIndex.ai, Vietnambiz https://vietnambiz.vn/chung-khoan.htm, không đọc được số EOD xác minh. **Basis:** đã thử HNX https://www.hnx.vn/vi-vn/m-phai-sinh/hop-dong-tuong-lai-cscp.html và trang công bố https://ny.hnx.vn/vi-vn/phai-sinh/thong-tin-cong-bo.html, thông tin hợp đồng đúng ngày chưa đủ khóa basis; theo V3.3.1 yếu tố 7 không dùng basis vào ngày đáo hạn.

## B. Một gốc tính toán (a), 259 phiên đúng lịch sử

Gốc VNDIRECT VNINDEX `vnmarket_prices`, **259 bản ghi** thực đọc **01/10/2025 → 15/10/2026**, có OHLC và `nmValue` khớp lệnh, không ghép nguồn. Hai hàng neo nguyên văn:
- `"date":"2026-10-14","close":1704.87`
- `"date":"2026-10-15","close":1698.35`

| Thông số | Công thức, kết quả | Nhãn |
|---|---|---|
| MA20 | bình quân 20 close gồm 15/10 = **1.759,575 → 1.759,58** | TỰ TÍNH |
| MA50 | bình quân 50 close = **1.777,7304 → 1.777,73** | TỰ TÍNH |
| MA200 | bình quân 200 close = **1.797,5872 → 1.797,59** | TỰ TÍNH |
| Dốc MA20 | MA20 cách 5 phiên 1.782,013; hôm nay 1.759,575 thấp hơn **22,438 điểm**, dốc xuống | TỰ TÍNH |
| TB20 khớp lệnh HOSE | bình quân 20 phiên trước 15/10, không gồm ngày 15: **12.751,050632 tỷ** | TỰ TÍNH |
| Bội số khớp lệnh | 14.017,479245/12.751,050632 = **1,09931955× → 1,099×** | TỰ TÍNH |
| So phiên 14/10 | (14.017,479245/10.479,473081−1)×100 = **+33,7613% → +33,76%** | TỰ TÍNH |
| Độ rộng | 152/147= **1,0340** | TỰ TÍNH |
| Vị trí giá đóng | (1.698,35−1.690,56)/(1.709,54−1.690,56) = **0,4104** trong 1/3 giữa | TỰ TÍNH |
| Đáy 20 phiên trước | **1.699,23** (ngày 14/10), giá đóng 15/10 ở dưới | TỰ TÍNH |
| Tín hiệu phân phối thô phiên 15/10 | GIẢM ≥0,2% và giá trị khớp tăng so với 14/10 → thỏa điều kiện giá/khớp | TỰ TÍNH |
| Cờ đáo hạn VN30F2610 | **15/10/2026**, xác minh bởi quy tắc HNX + lịch CTCK DSC: **PHẢI LOẠI** phiên 15/10 khỏi đếm phân phối, yếu tố 2 thanh khoản = 0, 2 chặn cứng xả cuối và kéo điểm nếu có phải hạ mềm | ĐÃ XÁC MINH |
| Phân phối hợp lệ/25 | **9 phiên**, 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10. 15/10 **loại vì đáo hạn**, 18/09 ETF cũng loại cờ sự kiện | TỰ TÍNH |
| Điểm đồng thuận V3.3.1 | Giá −1, thanh khoản 0 (**đáo hạn**), độ rộng 0 (1,034), chất lượng dòng tiền 0 (không có top5 EOD đáng tin), ngoại 0 (thiếu cùng phạm vi), phân phối −1 (9 ≥5), phái sinh/vĩ mô 0 (basis bỏ vì đáo hạn) → **−2/7** | TỰ TÍNH |
| Nền xu hướng | **XẤU**: giá 1.698,35 dưới MA50 1.777,73, MA20 1.759,58 dốc xuống, giá dưới MA200 1.797,59 | TỰ TÍNH |
| CHẶN CỨNG | **9 phiên phân phối còn hiệu lực ≥6**; chặn xả cuối nến KHÔNG (giá đóng 0,4104 không ở 1/3 dưới); chặn ngoại/mốc cũ từ Sổ KHÔNG KIỂM ĐƯỢC | TỰ TÍNH |
| R:R chỉ số tham khảo | (MA20 1.759,575−giá 1.698,35)/(giá 1.698,35−mốc mới 1.690,56) = **7,86**, không cho phép mua khi CHẶN CỨNG còn | TỰ TÍNH |

**Quyết định:** Chế độ **ĐẦY ĐỦ**, nền **XẤU**, điểm **−2/7**. Có chặn cứng **9 phiên phân phối/25** → thô **KHÔNG** (dòng 1) → trần nền **KHÔNG** → thiếu Sổ gốc bỏ bước chống đảo chiều → chốt **KHÔNG dòng 1**, tỷ trọng cổ phiếu định hướng ≤20%, không mua mới. Việc thiếu khối ngoại/tự doanh/basis KHÔNG phải lý do cho kết luận KHÔNG.

## C. Bản đồ SỨC GIÁ 133 mã có giao dịch, không mạo nhận vốn ròng

Từ `src/data/research-data.js` meta.updated 2026-10-15; 133/133 giá VNDIRECT–KBS đã được khóa:
- Ngân hàng 18 mã: **11 tăng / 6 giảm / 1 đứng**; MBB +2,84%, SSB +1,60%, SHB +0,97%; STB −2,79%, LPB −2,36%.
- Chứng khoán 15 mã: **15 tăng / 0 giảm / 0 đứng**; BSI +6,95%, BVS +3,92%, HCM +3,90%.
- Năng lượng 12 mã: **1 tăng / 11 giảm / 0 đứng**; BSR −6,31%, PVP −4,97%, PVT −4,25%.
- Bất động sản 10 mã: **6 tăng / 4 giảm**; SJS +6,97%, CEO +2,80%, VHM −3,44%, KOS −6,95%.
- Công nghiệp 8 mã: **5 tăng / 3 giảm**; MSR +2,97%, HPG −0,24%.
- Cảng biển–logistics 4 mã: 1 tăng / 1 giảm / 2 đứng; GMD đứng giá, HAH −0,31%.
**Không có chuỗi GT khớp lệnh theo ngành 20 phiên và khối ngoại ròng ngành đồng phạm vi; chỉ đánh giá sức giá, KHÔNG gọi tiền vào/ra thật.**

## D. Kịch bản, điều kiện và Sổ bổ sung

- **TỐT — THẤP:** chỉ khi VN-Index lần lượt lấy lại MA20 **1.759,58**, MA50 **1.777,73**, MA200 **1.797,59**, có độ rộng/khớp lệnh EOD chứng thực, số phân phối xuống ≤5 và các cổng ngoại/mốc cũ đã kiểm được. THEN mới đánh giá lại; không tự mua.
- **CƠ SỞ — CAO:** còn trên đáy ngày 15/10 **1.690,56** nhưng dưới MA20 **1.759,58** và chặn cứng còn hiệu lực. THEN **KHÔNG** mua mới; giữ kỷ luật stop riêng mã.
- **XẤU — TRUNG BÌNH:** nếu phiên tới đóng dưới **1.690,56**, THEN giảm vị thế yếu; không bình quân và không tự đặt hỗ trợ xa.
- **Mốc 1.699,23** là đáy 14/10 có nguồn, đóng cửa 15/10 đã thấp hơn; **không tự coi mốc này là mốc vô hiệu trong Sổ gốc**, vì người dùng chưa dán Sổ. Mốc mới **1.690,56** công bố 15/10, chỉ áp dụng từ phiên sau.

### Sổ mới — không sao chép dòng cũ
```
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 15/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
15/10/2026;1698,35;1709,54;1690,56;-0,38;14017,479245;152;147;51;;1843,71;;Đáo hạn VN30F2610;Không;1 NGUỒN:GT HOSE/độ rộng, CHƯA XÁC MINH:KN/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG — dòng 1
Chế độ: ĐẦY ĐỦ
Nền xu hướng: XẤU
Mốc vô hiệu mới công bố: 1690,56 — đáy ngày 15/10/2026; hiệu lực từ phiên sau
Mốc vô hiệu đã có trong Sổ cũ: KHÔNG KIỂM ĐƯỢC
Kháng cự gần: 1759,58 (MA20), 1777,73 (MA50); mạnh 1797,59 (MA200)
Chặn cứng đang hiệu lực: 9 phiên phân phối/25, gỡ khi còn ≤5
Phiên phân phối hợp lệ: 11/09, 14/09, 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10
Cờ sự kiện phiên: 15/10 đáo hạn VN30F2610 — loại phép đếm phiên phân phối
Khối ngoại chính thức 5 phiên: KHÔNG KIỂM ĐƯỢC
Basis hợp đồng: không dùng trong ngày đáo hạn
PHẦN C — ĐÍNH CHÍNH
Không sửa bất kỳ dòng lịch sử gốc do chưa được cung cấp Sổ.
```

## E. Bảng tự kiểm 20 tiêu chí

| # | Hạng mục | Kết quả |
|---|---|---|
| 1 | Ngày giao dịch, giờ mốc cắt | ĐẠT: đúng EOD 15/10 |
| 2 | Không dùng số phiên sau | ĐẠT |
| 3 | Không dùng số trí nhớ/snippet | ĐẠT: VNDIRECT log, Stockbiz đọc toàn văn |
| 4 | Nguồn có mở thật | ĐẠT |
| 5 | Số lõi ≥2 nguồn độc lập cùng phạm vi | CHƯA ĐẠT ĐẦY ĐỦ: khớp và độ rộng vẫn 1 NGUỒN |
| 6 | Nhật ký truy nguồn 1 nguồn/thiếu | ĐẠT CÓ GIỚI HẠN |
| 7 | Chuỗi 1 gốc 259 phiên, 2 hàng neo | ĐẠT |
| 8 | Tất cả số đăng truy gốc | ĐẠT CÓ GIỚI HẠN: không công bố số chưa xác minh |
| 9 | Không sửa/chép Sổ cũ | ĐẠT |
| 10 | Ngày theo user | ĐẠT |
| 11 | Chế độ vận hành | ĐẠT: ĐẦY ĐỦ |
| 12 | Nền xu hướng | ĐẠT: XẤU |
| 13 | 7 yếu tố chấm đúng/cờ sự kiện | ĐẠT: −2/7 và loại 15/10 khỏi phân phối |
| 14 | Chặn mềm, cứng, không kiểm được | ĐẠT CÓ GIỚI HẠN: phân phối xác minh; ngoại/Sổ cũ thiếu |
| 15 | Ba bước quy đổi | ĐẠT: KHÔNG→KHÔNG→bỏ chống đảo chiều |
| 16 | Không ghi vùng mua khi KHÔNG | ĐẠT |
| 17 | Mốc, R:R, nguồn | ĐẠT: 1690,56 mới; R:R 7,86 chỉ minh họa |
| 18 | Bản đồ dòng tiền có GT nhóm | KHÔNG ĐẠT: chỉ có bản đồ sức giá 133 mã, không mạo nhận là dòng tiền |
| 19 | Website/Zalo đồng số và giữ giao diện | KIỂM SAU ĐĂNG: phải có GitHub deploy + byte verification |
| 20 | Sổ chỉ bổ sung 1 dòng | ĐẠT: 15 cột; không chép cũ |
