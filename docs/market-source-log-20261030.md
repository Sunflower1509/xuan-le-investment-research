# NHẬT KÝ NGUỒN — NHẬN ĐỊNH VN-INDEX 30/10/2026 — PROMPT V3.3.1

**Phiên phân tích:** Thứ Sáu 30/10/2026 (xác nhận qua tin HOSE, công bố 16:59). **Ngày thực hiện:** 01/11/2026. **Mốc cắt phân tích:** hết 30/10/2026 giờ Việt Nam. **Không có Sổ tự lưu do người dùng cung cấp**; bản công bố trước và báo cáo nội bộ không tự thay thế Sổ gốc. Không sử dụng diễn biến, sự kiện hoặc con số phiên 02/11. **Bản quy tắc:** `docs/prompt-nhan-dinh-vnindex-v3.md`, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`.

**Ba lượt kiểm tra quy tắc:** 
1. **Lượt 1 (0–I):** ngày giao dịch, nguồn nguyên văn, mốc cắt, chuỗi và đơn vị, nhãn dữ liệu, quy tắc thiếu dữ liệu.
2. **Lượt 2 (II):** năm chỉ tiêu tối thiểu, nền MA20/50/200, 7 yếu tố, 25 phiên phân phối, chặn mềm/cứng, thứ tự 3 bước.
3. **Lượt 3 (III–XII và phụ lục):** mốc có nguồn, 3 kịch bản, R:R, khả năng mở mua, Zalo 250–400 chữ, vị trí nội dung trên website, nhật ký, Sổ và 20 tự kiểm.

## A. Nguồn và đối chiếu EOD (không dùng số tổng làm khớp lệnh)

| Ô | Giá trị và phạm vi | Nguồn gốc trực tiếp/đoạn số gốc | Nguồn đối chiếu | Nhãn |
|---|---|---|---|---|
| VN-Index | **1.741,62; −13,99 điểm; −0,80%** | VNDIRECT raw `"close":1741.62,"change":-13.99,"pctChange":-0.796874020995553` | HOSE 30/10: `VNINDEX 1,741.62 -13.99 -0.80`; VietnamPlus 30/10 16:47 và VNIndex.ai 15:00 trùng | **ĐÃ ĐỐI CHIẾU** |
| Mở / cao / thấp / đóng | **1.747,09 / 1.748,68 / 1.727,00 / 1.741,62** | VNDIRECT 15:10 `"open":1747.09,"high":1748.68,"low":1727` | VNIndex.ai 30/10 15:00 lần lượt `1.747,09 / 1.748,68 / 1.727,00`; lịch sử nmquan cùng số | **ĐÃ ĐỐI CHIẾU** |
| VN30 | **1.855,04, −22,14, −1,18%** | HOSE 30/10 `VN30 1,855.04 -22.14 -1.18` | VNDIRECT marketSession, Taichinh.com, OpenBDS trùng | **ĐÃ ĐỐI CHIẾU** |
| VN Midcap / VN Smallcap | **1.813,09 (−1,38%) / 1.220,78 (−1,00%)** | HOSE `VNMIDCAP 1,813.09 -25.46 -1.38`, `VNSMALLCAP 1,220.78 -12.39 -1.00` | OpenBDS cùng số | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **252,74; −3,87; −1,51%** | Mofi bảng chỉ số phiên 30/10 `252,74 -3,87 -1,51%` | OpenBDS `252,74 -1,51%` | **ĐÃ ĐỐI CHIẾU** |
| HOSE **KHỚP LỆNH** | **11.950,46672721 tỷ; 573.601.499 cổ phiếu** | VNDIRECT `"nmValue":11950466727210,"nmVolume":573601499` | Stockfly `11.950 tỷ` làm tròn, nmquan `11.959,9 tỷ` **lệch 9,4 tỷ** và HOSE trên Stockbiz `12.026 tỷ` **lệch phạm vi**; không thay thế bản raw. | **1 NGUỒN CHÍNH — PHẠM VI ĐỐI CHIẾU CHƯA KHỚP HOÀN TOÀN** |
| HOSE **TỔNG GD** | **14.673,264961429 tỷ; 692.647.474 cp** | VNDIRECT `"accumulatedVal":14673264961429,"accumulatedVol":692647474` | HOSE chỉ số `14,673.26`; VietnamPlus `14.673,3` (làm tròn). **Không dùng cho TB20/phiên phân phối** | **ĐÃ ĐỐI CHIẾU** |
| HOSE **độ rộng tập VNDIRECT** | **67 tăng / 245 giảm / 49 đứng; 8 sàn** | VNDIRECT `"advances":67,"declines":245,"noChange":49,"floorStocks":8` | Taichinh.com cùng tập `67 tăng/245 giảm/49 đứng`; VietnamPlus 72 tăng/253 giảm khác tập, VNIndex.ai 72/252/80 trên 404 mã khác tập | **ĐÃ ĐỐI CHIẾU TRONG PHẠM VI CỦA VNDIRECT** |
| Top 5 gây giảm điểm | **TCB −1,64; VCB −1,55; MBB −0,83; LPB −0,74; BID −0,72** | VNIndex.ai 30/10 bảng đóng góp `-1,64,-1,55,-0,83,-0,74,-0,72` | HOSE bảng top 5 khối lượng không cùng định nghĩa đóng góp, không dùng đối chiếu | **1 NGUỒN** |
| Diễn biến ngành | **VNFIN −1,77%; VNREAL +0,14%; VNENE −0,79%; VNMAT −1,36%** | HOSE bảng các chỉ số ngành ngày 30/10 | Taichinh/VNIndex.ai mô tả ngân hàng −1,7%; không kết luận tiền ròng theo ngành từ giá | **HOSE, chỉ phản ánh sức giá** |
| Ngoại tổng HOSE | **−633 tỷ** (HOSE ghi GT mua **1.277 tỷ**, bán **1.910 tỷ**); **KHÔNG PHẢI RÒNG KHỚP** | HOSE 30/10 mục GTGD NĐTNN `1,277 / 1,910 / -633` | VNIndex.ai ước tính −631,4, nmquan tổng −635,1: khác phương thức, không gộp | **TỔNG CHÍNH THỨC; KHỚP CHƯA XÁC MINH** |
| Ngoại **KHỚP** HOSE + chuỗi 5 phiên | **Không có số cuối phiên đồng phạm vi được đối chiếu** | Thử HOSE tin tổng (gồm thỏa thuận), VNIndex.ai ước tính, nmquan toàn sàn gồm thỏa thuận | Không suy điều kiện 3–5 phiên chỉ từ ròng tổng | **CHƯA XÁC MINH** |
| Tự doanh 30/10 | **Chưa xác minh đồng phạm vi** | nmquan có tổng cổ phiếu +92,8 tỷ; HOSE điểm tin không có bảng tự doanh cùng phạm vi; Stockfly tách +87 và −233 không cùng định nghĩa | Không đưa vào chấm điểm 7 yếu tố hay công bố `+92,8` như dòng tiền khớp | **CHƯA XÁC MINH** |
| Basis VN30F1M | **Chưa xác minh đồng hợp đồng/đúng giờ** | HOSE tổng kết chỉ số, VNIndex.ai thống kê cổ phiếu, HNX thông tin đáo hạn tháng; không có giá hợp đồng basis đúng thời điểm hai nguồn | Giữ yếu tố 7 bằng 0 do thiếu số | **CHƯA XÁC MINH** |
| Cờ sự kiện thị trường | **Không phát hiện cờ méo thanh khoản chung ngày 30/10 có xác minh** | HOSE chỉ liệt kê sự kiện quyền CLW/SMC/VDS — không phải ngày đáo hạn chung; HNX kỳ VN30F tháng 10 đáo hạn 15/10; 30/10 không lấy làm ETF nếu không có thông báo cùng ngày | Không đánh dấu cờ từ suy đoán | **Không gắn cờ khi tính phân phối; lịch tổng thể chưa đầy đủ** |

**Các trang thực tế mở để lấy số đúng ngày:** 
- VNDIRECT Finfo bảng raw 270 phiên/giá trị khớp/phiên phân phối, nhật ký workflow **đọc dữ liệu gốc**: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41308526934 ; API https://api-finfo.vndirect.com.vn/v4/vnmarket_prices
- HOSE công bố 30/10 16:59, nguyên văn qua Stockbiz: https://web.stockbiz.vn/News/2026/10/30/1919879/hose-diem-tin-giao-dich-ngay-30-10-2026.aspx
- VietnamPlus/TTXVN 30/10 16:47: https://www.vietnamplus.vn/chung-khoan-ket-thuc-thang-10-trong-sac-do-vn-index-mat-gan-14-diem-post1145228.vnp
- VNIndex.ai 30/10 15:00, giá và bảng đóng góp: https://vnindex.ai/vnindex-hom-nay
- Taichinh.com đóng 30/10 15:05: https://taichinh.com/chung-khoan
- Mofi bảng HOSE/HNX theo ngày: https://mofi.vn/thi-truong/hose
- Stockfly giá trị khớp, phạm vi riêng 119 mã: https://stockfly.me/thi-truong
- nmquan lịch sử tính theo cả sàn (phạm vi không trùng): https://nmquan.vn/data/chi-so/vn-index/lich-su

**Tìm kiếm khi dữ liệu chỉ có một nguồn/chưa xác minh:**
- Khớp: VNDIRECT exact `nmValue`; Stockfly 11.950 làm tròn; nmquan 11.959,9 (khác ~9,4 tỷ); HOSE điểm tin có 12.026 (khác 75,5 tỷ). Bảo thủ dùng VNDIRECT **1 NGUỒN**, không tự điều chỉnh về mức khác.
- Độ rộng: VNDIRECT 67/245/49; Taichinh 67/245/49; VNIndex.ai 72/252/80 trên tập 404; VietnamPlus 72/253 (khác phạm vi). Chỉ tập VNDIRECT được dùng khi so sánh chuỗi.
- Đóng góp mã: VNIndex.ai top5; HOSE chỉ công bố top mã khối lượng/giá, VietnamPlus nhắc mã ngành nhưng không công bố đóng góp điểm. Gắn 1 NGUỒN.
- Ngoại KHỚP: HOSE tổng; VNIndex.ai ước tính; nmquan tổng → chưa phân tách cùng phương pháp, không chấm.
- Tự doanh: nmquan tổng; Stockfly split khớp/tổng; HOSE không công bố mục độc lập ở bản tin → chưa chốt cùng phạm vi.
- Phái sinh: HNX lịch hợp đồng; HOSE tin thị trường; VNIndex.ai trang chỉ số cơ sở → chưa có basis đúng kỳ.

## B. Phép tính theo chuỗi một gốc, không nội suy

Dữ liệu VNDIRECT `vnmarket_prices` đã đọc **270 dòng** 01/10/2025–30/10/2026 (đủ ≥210 phiên). Chuỗi gồm **đóng/khớp đúng cùng phạm vi**. Trích dòng ngẫu nhiên của lịch sử:
- `"date":"2026-10-28","open":1762.64,"high":1767.48,"low":1753.95,"close":1766.65,"nmValue":12186465422820`
- `"date":"2026-10-29","open":1769.55,"high":1769.55,"low":1747.34,"close":1755.61,"nmValue":12452819462590`
- Phiên nghiên cứu `"date":"2026-10-30","open":1747.09,"high":1748.68,"low":1727,"close":1741.62,"nmValue":11950466727210`.
Chỉ dùng script ở https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/41308526934; không trộn nhà cung cấp. Các ngày giao dịch từ API được kiểm không trùng ngày, giá đóng/giá trị khớp dương.

| Chỉ báo | Tính bằng mã/nguồn | Trạng thái |
|---|---|---|
| MA20 | 20 giá đóng gồm 30/10: **1.736,6910 = 1.736,69** | TỰ TÍNH |
| MA50 | 50 giá đóng: **1.773,0582 = 1.773,06** | TỰ TÍNH |
| MA200 | 200 giá đóng: **1.795,06125 = 1.795,06** | TỰ TÍNH |
| Dốc MA20 | MA20 mới − MA20 cách 5 phiên = **1.736,6910 − 1.737,9280 = −1,2370**, dốc xuống | TỰ TÍNH |
| TB20 khớp | Giá trị khớp của 20 phiên liền trước **12.433,137057889 tỷ** | TỰ TÍNH |
| Bội số khớp | 11.950,46672721 ÷ 12.433,137057889 = **0,961178717 → 0,961×** | TỰ TÍNH |
| Khớp so 29/10 | (11.950,46672721/12.452,81946259−1)×100 = **−4,03%** | TỰ TÍNH |
| Giá nằm ở phần nến | (1.741,62−1.727)/(1.748,68−1.727) = **67,44%**, **không** ở 1/3 thấp → không kích hoạt chặn xả cuối | TỰ TÍNH (có 2 nguồn OHLC) |
| Độ rộng | 67÷245 = **0,27347**, ≤0,67 → điểm −1 | TỰ TÍNH, tập VNDIRECT |
| Top5 gây giảm điểm | 1,64+1,55+0,83+0,74+0,72=**5,48 điểm**; 5,48/13,99=**39,17%** ≤50% → yếu tố chất lượng dòng tiền −1 | TỰ TÍNH từ top5 1 NGUỒN |
| Phiên phân phối | 30/10 giảm −0,7969% nhưng khớp **11.950,47 <12.452,82 tỷ** liền trước → **KHÔNG tạo phiên phân phối mới** | TỰ TÍNH |
| Phân phối đang hiệu lực | **7/25**: 28/09,30/09,02/10,08/10,09/10,19/10,29/10. Bỏ 18/09 ETF (ngoài cửa sổ), 15/10 đáo hạn được xác minh trong nhật ký trước. Không có phiên nào hồi +5% gỡ tương ứng. **≥6 = CHẶN CỨNG** | TỰ TÍNH |
| Nền xu hướng | Đóng 1.741,62 < MA50 1.773,06 và MA200 1.795,06; MA20 dốc xuống; **XẤU** → trần **KHÔNG** | Theo V3.3.1 |
| 7 điểm | Giá/MA 0; thanh khoản 0; độ rộng **−1**; chất lượng dòng tiền **−1**; ngoại 0 (thiếu khớp+chuỗi); phân phối **−1**; phái sinh/vĩ mô 0 (thiếu) = **−3/7** | Theo V3.3.1 |
| Chặn | Cứng: 7/25 phân phối; xả cuối **không** vì đóng >1/3 thấp; xanh điểm đỏ mã **không** vì chỉ số giảm. Ngoại KHỚP/chuỗi, mốc vô hiệu từ Sổ: **KHÔNG KIỂM ĐƯỢC**, không giả đã qua. Mềm: giá dưới đỉnh phiên 1.748,68 và MA50; xem mốc có xuất xứ. | Theo V3.3.1 |
| Ba bước | B1 **KHÔNG, dòng 1 (chặn cứng)**; B2 nền XẤU, vẫn KHÔNG; B3 **không áp dụng chống đảo chiều** do thiếu Sổ người dùng; chốt **KHÔNG dòng 1**. | Theo V3.3.1 |
| R:R chỉ số | **Không áp dụng**: trạng thái KHÔNG, mốc vô hiệu đã công bố trong Sổ gốc chưa được kiểm. | Theo V3.3.1 |
| Vị trí mua | Không ghi vùng mua; tỷ trọng định hướng phòng thủ **≤20%** theo dòng 1 (không ép lệnh trên tài khoản của khách). | Theo V3.3.1 |

## C. Kế hoạch hành động và giới hạn

- Hỗ trợ **1.727,00** (đáy 30/10 đã đối chiếu), **1.736,69** (MA20, thấp hơn giá đóng), **1.677,19** (đáy 20 phiên trước 20/10). Không suy rằng MA20 là điểm mua chỉ vì nó nằm bên dưới.
- Kháng cự **1.748,68** (đỉnh 30/10, đã đối chiếu), **1.755,61** (giá đóng 29/10), **1.773,06** (MA50), **1.795,06** (MA200).
- **NẾU** chỉ số đóng dưới 1.727,00 **THÌ** rà vị thế và thực thi điểm dừng lỗ từng mã đã khóa; không dịch stop xuống để trì hoãn.
- **NẾU** chỉ số đóng lại trên 1.773,06, MA20 quay dốc lên, số phiên phân phối giảm còn tối đa 5 và giá/khớp/độ rộng/ngoại đủ xác nhận **THÌ** tính lại trạng thái; không mua tự động vì một phiên hồi.
- Dòng tiền ngành: chỉ ghi **sức giá âm** của tài chính (VNFIN −1,77%), nguyên vật liệu (VNMAT −1,36%), năng lượng (VNENE −0,79%). VNREAL +0,14% là ngành tương đối đỡ chỉ số nhưng **không có đủ giá + khớp + ngoại cùng nhóm để khẳng định dòng tiền vào thật**. Chưa ghi nhóm ra/vào ròng đã xác minh.

## D. Tự kiểm 20 mục

| # | Mục kiểm | Trạng thái | Chứng cứ/hạn chế |
|---|---|---|---|
| 1 | Ngày, phiên, giờ chốt | ĐẠT | HOSE ngày 30/10, raw 15:10:10 |
| 2 | Không dùng sau mốc cắt | ĐẠT | Tin HOSE 30/10; không dùng diễn biến 31/10–02/11 |
| 3 | Không lấy số từ trí nhớ/snippet | ĐẠT | Nguyên bản HOSE và JSON nguồn |
| 4 | Trang nguồn mở thật | ĐẠT | Đường dẫn phần A |
| 5 | Đối chiếu đủ số lõi và đơn vị | ĐẠT CÓ GIỚI HẠN | Đóng/% 3 nguồn; khớp có khác phạm vi, gắn 1 NGUỒN |
| 6 | Nhật ký tìm kiếm dữ liệu 1 nguồn/thiếu | ĐẠT | Mục A nhiều trang, không dùng số thay thế |
| 7 | Chuỗi đồng nhất, tính bằng công cụ | ĐẠT | 270 phiên VNDIRECT, 2+ dòng neo |
| 8 | Truy ngược mọi số nhận định | ĐẠT | Mục A/B/C |
| 9 | Bảo toàn Sổ gốc | ĐẠT | Không có Sổ người dùng, không sửa dữ liệu cũ |
| 10 | Ngày lấy từ lệnh | ĐẠT | 30/10/2026 |
| 11 | Chế độ vận hành | ĐẠT | ĐẦY ĐỦ, đủ 5 chỉ tiêu |
| 12 | Nền/MA/dốc | ĐẠT | XẤU, giá trị rõ |
| 13 | Chấm 7 yếu tố, thiếu=0 | ĐẠT | −3/7, ngoại/basis không kết luận |
| 14 | Chặn cứng/mềm và thời hạn | ĐẠT CÓ GIỚI HẠN | 7 phân phối đủ cứng; ngoại/Sổ thiếu, ghi không kiểm được |
| 15 | Quy đổi 3 bước, dòng cuối | ĐẠT | KHÔNG dòng 1, không do thiếu |
| 16 | Không ghi vùng mua sai trạng thái | ĐẠT | Không lập vùng mua |
| 17 | Mốc/R:R/kịch bản có nguồn | ĐẠT CÓ GIỚI HẠN | Chưa có mốc vô hiệu từ Sổ; R:R không áp dụng |
| 18 | Dòng tiền ngành bằng chứng thực | ĐẠT | Chỉ nói sức giá, không bịa dòng vốn |
| 19 | Web/Zalo cùng số và layout | CHỜ KIỂM THỬ SAU DEPLOY | Chỉ đạt hoàn toàn khi GitHub Pages kiểm byte thành công |
| 20 | Sổ phần mới và chặn mang sang | ĐẠT | Chỉ một dòng mới và Phần B, không sao Sổ cũ |

## E. Sổ tự lưu — bổ sung phiên mới, **không đăng website**

```
=== SỔ DỮ LIỆU VNINDEX — CẬP NHẬT 30/10/2026 ===
PHẦN A — CHỈ DÒNG MỚI
Ngày;Đóng cửa;Cao;Thấp;% thay đổi;GT khớp HOSE (tỷ);Mã tăng;Mã giảm;Đứng giá;KN ròng HOSE (tỷ);VN30;VN30F1M;Cờ sự kiện;Phân phối;Nhãn
30/10/2026;1741,62;1748,68;1727,00;-0,796874020995553;11950,46672721;67;245;49;;1855,04;;;Không;1 NGUỒN: khớp/top5; CHƯA XÁC MINH: ngoại KHỚP,basis

PHẦN B — TRẠNG THÁI MANG SANG
Trạng thái chốt: KHÔNG
Chế độ: ĐẦY ĐỦ (270 phiên một gốc)
Nền xu hướng: XẤU (1741,62 dưới MA50=1773,06, MA20 dốc xuống)
Mốc vô hiệu theo Sổ gốc: KHÔNG KIỂM ĐƯỢC — chưa có Sổ người dùng
Mốc quan sát rủi ro: 1727,00 (đáy 30/10)
Kháng cự: 1748,68 (đỉnh 30/10); 1773,06 (MA50)
Chặn cứng đang hiệu lực: 7 phân phối/25, gỡ khi còn tối đa 5
Phiên phân phối hợp lệ: 28/09;30/09;02/10;08/10;09/10;19/10;29/10
Khối ngoại KHỚP liên tiếp: CHƯA XÁC MINH
Basis âm >1% VN30 liên tiếp: CHƯA XÁC MINH

PHẦN C — ĐÍNH CHÍNH
Không có đính chính do thiếu Sổ gốc người dùng.
```

**Không đồng nhất thiếu dữ liệu với tín hiệu xấu.** Trạng thái KHÔNG có căn cứ độc lập, xác minh được: 7 phiên phân phối và nền XẤU. Cổng số lõi gắn 1 NGUỒN không được phép lên CÓ.
