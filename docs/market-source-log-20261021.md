# NHẬT KÝ NGUỒN KIỂM SOÁT — VN-INDEX 21/10/2026 · Prompt V3.3.1

**Ngày phân tích:** Thứ Tư 21/10/2026 (có giao dịch). **Ngày thực hiện:** 21/10/2026. **Mốc cắt nội dung:** đến hết ngày 21/10, giờ Việt Nam; chứng cứ giá EOD đã chốt tại bản Finfo lúc **15:16** và Stockbiz lúc **15:05**. Không sử dụng giá/tin của ngày 22/10 hoặc những phiên sau. Không có **Sổ dữ liệu tự lưu do người dùng dán vào**; lịch sử bản tin website không tự coi là Sổ gốc. Prompt người dùng **Prompt_Nhan_Dinh_VNINDEX_V3_3_1.md** đã đọc đúng 3 lượt: (1) cổng dữ liệu; (2) 7 yếu tố, chặn mềm/cứng, 3 bước trạng thái; (3) đầu ra, bài đăng, 20 tự kiểm và bảo toàn bố cục.

## I. Chứng cứ nguồn lõi và các phạm vi

| Số liệu | Giá trị / phạm vi | Nguồn 1, trích ngắn chính xác | Nguồn 2, trích ngắn và kết quả | Nhãn |
|---|---|---|---|---|
| VN-Index đóng cửa, thay đổi | **1.738,67 điểm; +46,70; +2,76%** | VNDIRECT Finfo VNINDEX 21/10 `"close":1738.67,"pctChange":2.7600962192001`; nguồn nhật ký đọc 263 phiên | Stockbiz IndexStats cập nhật 15:05: `1.738,67 +46,70/+2,76%` | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.880,57; +35,06; +1,90%** | VNDIRECT marketSession `"close":1880.57` | Stockbiz bảng 15:02:53 `VN30 1.880,57 +35,06/+1,90%` | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **261,67; +3,71; +1,44%** | VNDIRECT marketSession `"close":261.67` | Stockbiz bảng 15:02:53 `HNX-INDEX 261,67 +3,71/+1,44%` | **ĐÃ ĐỐI CHIẾU** |
| VN-Index mở/cao/thấp | **1.696,77 / 1.738,91 / 1.695,95** | VNDIRECT Finfo raw phiên 21/10 `"open":1696.77,"high":1738.91,"low":1695.95` | VNIndex.ai ảnh chụp 14:38 cùng bộ OHLC, nhưng KHÔNG được dùng số giá 14:38 thay EOD | **ĐÃ ĐỐI CHIẾU OHLC** |
| Giá trị/khối lượng khớp **tập chỉ số VNINDEX VNDIRECT** | **17.071,09779449 tỷ đồng; 809.041.972 CP** | VNDIRECT Finfo raw `"nmValue":17071097794490,"nmVolume":809041972` | Stockbiz 14:22 ghi `17.108,03 tỷ` là **tổng giá trị giao dịch** và khác giờ; VNIndex.ai 14:38 ghi `18,19 nghìn tỷ` tổng GD, không cùng phạm vi | **1 NGUỒN** |
| Độ rộng HOSE theo tập chỉ số VNDIRECT | **230 mã tăng / 75 mã giảm / 54 đứng / 3 sàn** | VNDIRECT Finfo marketSession 21/10 `"advance":230,"unchanged":54,"decline":75,"floor":3` | VNIndex.ai 14:38 ghi `233 / 92 / 79`, tập 404 mã, khác giờ/phạm vi; Stockbiz bảng chỉ số không có tập đúng để so | **1 NGUỒN** |
| Giá EOD 133 mã web | **133/133 EOD 21/10** | Workflow khóa EOD `39567984893`: 133 mã nguồn VNDIRECT kiểm từng dòng | KBS date-specific khớp đóng cửa 133/133; CafeF chưa có hàng đúng ngày tại thời điểm khóa | **ĐÃ ĐỐI CHIẾU cho từng mã** |
| Khối ngoại **khớp lệnh HOSE** và chuỗi 5 phiên | **Chưa có số đủ chuẩn EOD hai nguồn cùng phạm vi** | HODL VNINDEX trang đã đọc ghi trong phiên `+199,3 tỷ` và 373 mã, **không nhận là EOD**; VNIndex.ai lúc 14:38 nói `194 tỷ` (khác tập/giờ) | Stockbiz bảng index cung cấp **tổng** giá trị mua/bán ngoại, không đảm bảo khớp lệnh HOSE; không trộn các phạm vi | **CHƯA XÁC MINH** |
| Tự doanh khớp lệnh HOSE | **Chưa chốt đủ cùng phạm vi** | Đã thử Stockbiz thống kê index, HODL dữ liệu thị trường, VNIndex.ai 14:38, chưa thấy ròng tự doanh đúng yêu cầu | Không điền số | **CHƯA XÁC MINH** |
| Phái sinh basis VN30F1M cuối ngày | **Chưa đối chiếu đủ mốc giờ hợp đồng** | Thử bảng phái sinh HNX, Stockbiz, VNIndex.ai; không có 2 số chính xác cùng giờ/hợp đồng | Không dùng để kích hoạt chặn; điểm yếu tố 7 = 0 | **CHƯA XÁC MINH** |
| Top 5 mã đóng góp đúng **EOD** | **Chưa khóa được bảng đóng góp EOD đủ tin cậy** | VNIndex.ai tại ảnh chụp 14:38 có bảng VIC +23,06; VHM +6,69; VCB +1,12; LPB +1,09; VPL +1,08 điểm, **không phải EOD** | Chưa có bảng tổ chức thứ hai chốt 15:16; KHÔNG dùng 33,04/46,70 như chỉ số chất lượng EOD | **TẠM TÍNH trong phiên — KHÔNG ĐĂNG con số này** |
| Sự kiện phái sinh / ETF 21/10 | **Chưa ghi cờ sự kiện đặc thù** | 15/10 là đáo hạn tháng 10 đã xác minh, không tự áp sự kiện sang 21/10; chưa xác nhận cơ cấu ETF đặc thù đúng 21/10 | Không dùng cờ để bỏ phân phối 21/10 một cách tùy tiện | **Không gắn cờ** |

### Đường dẫn và nhật ký tìm kiếm

- **Stockbiz IndicesStats, dữ liệu sau đóng phiên 21/10, 15:05:** https://web.stockbiz.vn/IndicesStats.aspx — đối chiếu chỉ số và phần trăm; trang ảnh chụp 14:22 cũ chỉ xem như bản trong phiên, không làm nguồn EOD.
- **Stockbiz DBC LookupQuote, tiêu đề chỉ số 21/10 lúc 15:02:** https://web.stockbiz.vn/Stocks/DBC/LookupQuote.aspx?Date=21%2F10%2F2026
- **Kiểm toán VNDIRECT Finfo raw 263 phiên, ngày 21/10:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39568126463 — `SOURCE_HISTORY_ROWS_JSON`, `RAW_VENDOR_INDEX_QUOTE`, `VERIFIED_MARKET_EVIDENCE_JSON`, đã đọc toàn bộ 263 dòng trong log; không giả vờ mở API thành công từ trình duyệt.
- **EOD workflow khóa 133 mã và deploy:** https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39567984893 — VNDIRECT–KBS đúng ngày; CafeF thiếu EOD nên KBS dùng đúng điều kiện dự phòng.
- **VNIndex.ai 14:38, số trong phiên, bảng top 5 chưa đủ khóa:** https://vnindex.ai/vnindex-hom-nay
- **Investing.com 14:18, số trong phiên, không dùng như EOD:** https://vn.investing.com/indices/vn-historical-data
- **HODL giá VNINDEX và ngoại khớp trong phiên:** https://hodl.vn/indices/vnindex
- **Stockbiz IndexDetail bản 14:05 chưa chốt:** https://web.stockbiz.vn/IndexDetail.aspx
- **Stockbiz tổng NN (khác phạm vi khớp):** https://web.stockbiz.vn/IndicesStats.aspx
- **HNX phái sinh:** chưa có giá VN30F1M hai nguồn cùng hợp đồng/giờ được đọc; không bịa URL báo cáo ngày 21/10.

**Tìm kiếm nhãn thiếu:** GT khớp thử VNDIRECT (dùng), Stockbiz (tổng GD khác phạm vi/giờ), VNIndex.ai (tổng GD trong phiên). Độ rộng thử VNDIRECT (dùng), VNIndex.ai (404 mã trong phiên, khác tập), Stockbiz (không có bảng cùng tập). Khối ngoại thử HODL (trong phiên), VNIndex.ai (trong phiên), Stockbiz (tổng GD). Tự doanh thử Stockbiz, HODL và VNIndex.ai (chưa có đủ dòng đúng khớp/EOD). Basis thử Stockbiz, VNIndex.ai và tìm HNX (chưa có số cùng hợp đồng/giờ). Top5 thử VNIndex.ai trong phiên, Stockbiz/HOSE tổng và nguồn CTCK (chưa khóa được EOD cùng chuẩn).

## II. Tự tính từ một gốc dữ liệu 263 phiên VNDIRECT

**Bảng lịch sử (a):** 263 bản ghi có ngày và số thực đọc từ **01/10/2025 đến 21/10/2026**; nguồn VNDIRECT Finfo, đã đối chiếu điểm đóng cửa phiên 21/10 với Stockbiz. Không ghép chuỗi, không nội suy, không dùng tổng GD để thay khớp. Hai hàng neo trích đúng bảng: `"date":"2026-10-20","close":1691.97`; `"date":"2026-10-21","close":1738.67`.

| Dữ kiện tự tính | Công thức và kết quả | Nhãn |
|---|---|---|
| MA20 | TB 20 giá đóng cửa đến 21/10: **1.739,199 → 1.739,20** | TỰ TÍNH |
| MA50 | TB 50 đóng cửa: **1.772,5276 → 1.772,53** | TỰ TÍNH |
| MA200 | TB 200 đóng cửa: **1.796,58105 → 1.796,58** | TỰ TÍNH |
| Dốc MA20 | `1739,199 − 1765,796 = −26,597`, dốc xuống 5 phiên | TỰ TÍNH |
| TB20 GT khớp | TB 20 phiên **liền trước** 21/10 (không gồm 21/10): **12.014,22785411 tỷ** | TỰ TÍNH |
| Bội số khớp | `17.071,09779449 / 12.014,22785411 = 1,42090678 → 1,421×` | TỰ TÍNH |
| Khớp so 20/10 | `17.071,09779449 / 11.161,45413595 − 1 ≈ +52,95%` | TỰ TÍNH |
| Độ rộng | `230/75 = 3,0667`, đủ +1 vì ≥1,5 | TỰ TÍNH |
| Nến | `(1738,67−1695,95)/(1738,91−1695,95) = 0,99441`, đóng **1/3 trên** sát đỉnh phiên | TỰ TÍNH |
| Đáy 20 phiên trước | **1.677,19**, từ phiên 20/10/2026 | TỰ TÍNH |
| Chặn gần kháng cự | **MA20 1.739,20 − đóng cửa 1.738,67 = 0,53 điểm**, cách **0,03%**; ngưỡng chặn mềm ≤1,5% | TỰ TÍNH |
| Phân phối còn hiệu lực | **8/25:** 23/09, 24/09, 28/09, 30/09, 02/10, 08/10, 09/10, 19/10. Ngày 21/10 tăng 2,76%, không sinh phân phối mới; chưa đủ hồi 5% từ các phiên đang hiệu lực. Ngày 15/10 loại cờ đáo hạn. | TỰ TÍNH |
| Nền | **XẤU**: đóng 1.738,67 dưới MA50 1.772,53, MA20 còn dốc xuống; vẫn dưới MA200 1.796,58 và **dưới MA20 1.739,20** khoảng 0,53 điểm | TỰ TÍNH |
| 7 yếu tố và điểm | 1 giá/MA **−1**; 2 thanh khoản **+1** (phiên tăng 2,76%, 1,421≥1,2); 3 độ rộng **+1** (230/75=3,067); 4 chất lượng dòng tiền **0** (thiếu bảng top5 EOD, không dùng snapshot 14:38 thành EOD); 5 ngoại **0** chưa khóa cùng phạm vi; 6 phân phối **−1** (8≥5); 7 phái sinh/vĩ mô **0** thiếu giá basis/không có tin bất lợi đặc thù đã xác minh. **TỔNG = 0/7** | TỰ TÍNH |
| Chặn mềm | Giá 1.738,67 chỉ cách MA20 1.739,20 có xuất xứ khoảng 0,03% (≤1,5%) mà chưa vượt; **kích hoạt chặn mềm sát kháng cự**. Không có chặn thanh khoản yếu trong phiên tăng vì 1,421≥1,2; không có chặn xanh điểm đỏ mã (230 tăng >75 giảm). | TỰ TÍNH |
| Chặn cứng | **8 phiên phân phối/25 ≥6**, bắt buộc trạng thái **KHÔNG**. Không chặn xả cuối (nến gần đỉnh); khối ngoại 5 phiên và mốc vô hiệu Sổ gốc **KHÔNG KIỂM ĐƯỢC** (không coi đã gỡ). | TỰ TÍNH |
| Quy đổi 3 bước | Chế độ **ĐẦY ĐỦ** (có MA20, MA50, dốc MA20, TB20 và phân phối); thô **KHÔNG dòng 1** (chặn cứng), trần nền XẤU **KHÔNG**, thiếu Sổ nên bỏ kiểm chống đảo chiều → chốt **KHÔNG dòng 1** | TỰ TÍNH |
| R:R | **KHÔNG ÁP DỤNG**: không có mốc vô hiệu đang hiệu lực từ Sổ gốc để dùng làm mẫu số; không chế mốc cắt lỗ chỉ số | Theo quy tắc |

## III. Ngành và phương án NẾU–THÌ có xuất xứ

- **Bộ mẫu 133 cổ phiếu riêng website, KHÔNG phải toàn HOSE:** ngân hàng 16 tăng / 0 giảm / 2 đứng (18 mã); chứng khoán 14/1/0 (15); bất động sản 8/1/1 (10); bất động sản nhà ở 4/0/0 (4). Năng lượng 5 tăng / 5 giảm / 2 đứng (12); nhóm vận tải xăng dầu PVP và PVT giảm mạnh. Đây là **sức giá**, không đủ chứng cứ vốn ròng thật vào/ra từng ngành.
- **Lực kéo trụ (chỉ nhận xét định tính):** ảnh chụp VNIndex.ai 14:38 cho thấy VIC, VHM, VCB đóng góp dương rõ; **không sử dụng** điểm top 5 trong ảnh chụp đó làm số chốt EOD; dù 21/10 thị trường nhiều mã tăng, chưa gọi là xác nhận xu hướng tăng.
- **NẾU** giá vẫn dưới MA20 **1.739,20** và chặn phân phối còn ≥6, **THÌ KHÔNG mở vị thế mới**; không mua đuổi sau phiên tăng mạnh.
- **NẾU** VNINDEX giữ >MA20, sau đó >MA50 **1.772,53** và >MA200 **1.796,58**, đồng thời số phân phối còn ≤5, thanh khoản/độ rộng/ngoại theo chuẩn được xác nhận, **THÌ** đánh giá lại trạng thái; không phát lệnh tự động.
- **NẾU** VNINDEX đóng dưới **1.695,95** (đáy ngày 21/10, xác minh), **THÌ** rà soát và giảm mã yếu nếu vi phạm mức dừng lỗ riêng; không bắt đáy, không dời stop cũ.
- Tỷ trọng cổ phiếu **định hướng ≤20%**, tiền mặt ≥80% theo KHÔNG dòng 1; không gia tăng đòn bẩy, tùy tài khoản. Không chỉnh các vùng mua, target, stop của 133 mã trên website.

## IV. Phần bổ sung Sổ dữ liệu (nội bộ, KHÔNG chép Sổ cũ)

```text
=== BỔ SUNG SỔ DỮ LIỆU VNINDEX — 21/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
21/10/2026;1738,67;1738,91;1695,95;2,76;17071,09779449;230;75;54;;1880,57;;;Không;1 NGUỒN: GT khớp VNINDEX/độ rộng; CHƯA XÁC MINH: khối ngoại khớp/basis
PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG (dòng 1); chế độ ĐẦY ĐỦ; nền XẤU; điểm 0/7
Chặn cứng: 8 phiên phân phối / 25; chỉ gỡ khi còn ≤5
Phiên phân phối còn hiệu lực: 23/09,24/09,28/09,30/09,02/10,08/10,09/10,19/10
Chặn mềm: giá 1738,67 cách MA20 1739,20 khoảng 0,03%
Mốc vô hiệu Sổ gốc: KHÔNG KIỂM ĐƯỢC
Mốc kỹ thuật công bố 21/10: đáy 1695,95 (không mặc nhận là stop Sổ gốc)
Kháng cự: MA20 1739,20; MA50 1772,53; MA200 1796,58
Mốc kỹ thuật cũ: 1677,19 đáy 20/10, 1682,54 đáy 19/10; không tự sửa hay nâng hạ mốc Sổ
Khối ngoại khớp 5 phiên: KHÔNG KIỂM ĐƯỢC; basis: CHƯA XÁC MINH
Chống đảo chiều: bỏ qua khi không có Sổ gốc người dùng
PHẦN C — ĐÍNH CHÍNH
Không sửa dòng cũ từ Sổ người dùng không được cung cấp.
```

## V. Bảng tự kiểm 20 tiêu chí — kiểm toán trung thực

| # | Điều kiện | Kết quả |
|---|---|---|
| 1 | Có phiên thật, đúng mốc cắt và giờ EOD | ĐẠT |
| 2 | Không sử dụng giá và tin phiên sau | ĐẠT |
| 3 | Không dùng AI suy đoán số lõi hoặc ảnh chụp trong phiên làm EOD | ĐẠT |
| 4 | Các nguồn trong nhật ký đã mở hoặc ghi rõ qua workflow | ĐẠT |
| 5 | Số lõi >=2 nguồn độc lập cùng phạm vi | CHƯA ĐẠT ĐẦY ĐỦ: giá/%, VN30/HNX đạt; GT khớp và độ rộng 1 NGUỒN |
| 6 | Ghi nhật ký tìm kiếm cho dữ liệu 1 NGUỒN/chưa xác minh | ĐẠT CÓ GIỚI HẠN: giá trị tự doanh/basis chưa kiểm được đến EOD |
| 7 | Lịch sử 263 dòng thực đọc, 2 mốc neo và chuỗi một gốc | ĐẠT |
| 8 | Mọi số công bố có thể truy ngược bằng nhật ký | ĐẠT cho số được đưa lên web |
| 9 | Không sửa/chép dòng Sổ cũ | ĐẠT |
| 10 | Đúng phiên 21/10/2026 | ĐẠT |
| 11 | 5 phép tính và chế độ ĐẦY ĐỦ | ĐẠT |
| 12 | Nền MA và độ dốc có kết quả | ĐẠT |
| 13 | 7 yếu tố có điểm và thiếu dữ liệu chấm 0 | ĐẠT |
| 14 | Chặn mềm/cứng đã rà; điều kiện thiếu ghi KHÔNG KIỂM ĐƯỢC | ĐẠT có giới hạn Sổ/ngoại |
| 15 | 3 bước, chốt KHÔNG dòng 1 | ĐẠT |
| 16 | Không tự sinh vùng mua ở trạng thái KHÔNG | ĐẠT |
| 17 | Mốc giá xuất xứ rõ, không dời stop; R:R nêu lý do không áp dụng | ĐẠT |
| 18 | Ngành chỉ nói sức giá khi không có dòng tiền ròng | ĐẠT |
| 19 | Bản tin web và triển khai sau xuất bản | ĐẠT KIỂM THỬ TỰ ĐỘNG: [Pages 39568944881](https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/39568944881) thành công; 169/169 kiểm thử đạt; kiểm tra 133 báo cáo / 133 mã / 47 nhận định / 48 sự kiện vị thế; giữ nguyên 6 khu vực; bước đối chiếu byte sau triển khai thành công. KIỂM THỬ TRỰC QUAN ĐỘC LẬP NHIỀU THIẾT BỊ: chưa thực hiện. |
| 20 | Sổ chỉ có dòng 21/10, không sao Sổ cũ | ĐẠT |
