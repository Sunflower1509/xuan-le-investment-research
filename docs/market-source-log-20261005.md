# Nhật ký nguồn nội bộ — Nhận định VN-Index 05/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2.
> Ngày phân tích: 05/10/2026. Mốc cắt: hết phiên 05/10/2026 (giờ Việt Nam). Chốt kiểm định: sau ATC.
> Tài liệu nội bộ, không đưa lên giao diện công khai.

## 1. Cổng dữ liệu lõi

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.753,20 | điểm, EOD 05/10 | VNDIRECT Finfo: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-05&size=500 | VNIndex.ai, cập nhật 15:00 05/10: https://vnindex.ai/vnindex-hom-nay | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | +15,49 / +0,891403% | điểm / %, EOD | VNDIRECT Finfo | VNIndex.ai: +15,49 / +0,89% | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.738,92 / 1.756,30 / 1.738,78 | điểm | VNDIRECT Finfo lịch sử VNINDEX | VNIndex.ai cùng giá trị | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.894,46 / +18,47 / +0,984547% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| HNX-Index | 269,62 / +2,87 / +1,075914% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| Độ rộng HOSE chuẩn vận hành | 155 tăng / 49 tham chiếu / 151 giảm / 4 sàn | số mã | VNDIRECT Finfo | — | 1 NGUỒN |
| Tỷ lệ tăng/giảm | 155/151 = 1,026490 | HOSE | TỰ TÍNH từ độ rộng VNDIRECT | — | TỰ TÍNH |
| GT khớp lệnh HOSE | 10.126,045753 tỷ | tỷ đồng, khớp lệnh | VNDIRECT Finfo nmValue | Nguồn công khai thứ hai tại thời điểm khóa chỉ có tổng GTGD, không cùng phạm vi | 1 NGUỒN |
| GT khớp lệnh 02/10 | 14.447,305005 tỷ | tỷ đồng, khớp lệnh | VNDIRECT Finfo | — | 1 NGUỒN |
| Thay đổi GT khớp lệnh so 02/10 | -29,907680% | % | TỰ TÍNH = 10.126,045753 / 14.447,305005 - 1 | — | TỰ TÍNH |
| TB20 GT khớp lệnh trước 05/10 | 13.130,727702 tỷ | tỷ đồng, 20 phiên liền trước | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 0,771172 lần | lần | TỰ TÍNH = 10.126,045753 / 13.130,727702 | — | TỰ TÍNH |
| Ngưỡng 0,8 lần TB20 | 10.504,582162 tỷ | tỷ đồng | TỰ TÍNH | — | TỰ TÍNH |
| Ngưỡng 1,2 lần TB20 | 15.756,873243 tỷ | tỷ đồng | TỰ TÍNH | — | TỰ TÍNH |

## 2. Kiểm định 131/131 mã website

Nguồn chính: VNDIRECT Finfo exact-date 05/10/2026.
Nguồn đối chiếu: KBS date-specific exact-date vì CafeF chưa có dòng EOD đúng ngày tại thời điểm khóa.

- 131/131 mã: giá đóng cửa KBS exact-date trùng VNDIRECT.
- 127/131 mã: khối lượng khớp trùng trực tiếp.
- Sai khác khối lượng: CEO chênh 7.600; HUT chênh 6.000; SHS chênh 300; TNG chênh 600 cổ phiếu.
- Website giữ nmVolume và pctChange VNDIRECT theo quy ước nguồn chính.
- Data Gate: PASS 131/131.

## 3. Chuỗi kỹ thuật — TỰ TÍNH

Chuỗi: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 05/10/2026, 251 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-05&size=500

| Chỉ tiêu | Giá trị | Công thức / phạm vi | Nhãn |
|---|---:|---|---|
| MA20 | 1.793,7805 | TB số học 20 close cuối | TỰ TÍNH |
| MA20 cách 5 phiên | 1.812,7585 | TB20 kết thúc tại T-5 | TỰ TÍNH |
| MA50 | 1.774,7890 | TB số học 50 close cuối | TỰ TÍNH |
| MA200 | 1.795,82125 | TB số học 200 close cuối | TỰ TÍNH |
| RSI14 | 40,9782 | Wilder RSI14 | TỰ TÍNH |
| MACD | -10,65046 | EMA12 - EMA26 | TỰ TÍNH |
| MACD signal | -2,72709 | EMA9 của MACD | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước | 1.728,36 | min(low), 20 phiên trước 05/10 | TỰ TÍNH |
| Đỉnh cao nhất 20 phiên trước | 1.874,48 | max(high), 20 phiên trước 05/10 | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,823059 | (close-low)/(high-low), thuộc 1/3 trên | TỰ TÍNH |
| Phiên phân phối còn hiệu lực | 8 | Theo định nghĩa v3.2 | TỰ TÍNH |
| Danh sách phiên phân phối | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10 | 25 phiên gần nhất | TỰ TÍNH |

05/10 không tạo phiên phân phối mới vì VN-Index tăng +0,891403%.

## 4. Đóng góp điểm và chất lượng dòng tiền

Nguồn: VNIndex.ai, dữ liệu EOD cập nhật 15:00 05/10:
https://vnindex.ai/vnindex-hom-nay

| Số liệu | Giá trị | Nhãn |
|---|---:|---|
| Top 5 kéo tăng | VIC +12,80; LPB +1,72; HPG +0,78; VHM +0,68; GEE +0,37 điểm | 1 NGUỒN |
| Tổng top 5 kéo tăng | +16,35 điểm | TỰ TÍNH |
| Tỷ lệ top 5 / mức tăng VN-Index | 16,35 / 15,49 = 105,551969% | TỰ TÍNH |
| Top 5 kéo giảm | VPL -0,48; HDB -0,41; BID -0,32; VPX -0,19; VCB -0,17 điểm | 1 NGUỒN |

Bản đồ ngành từ universe 131 mã website:
- Ngân hàng: 7 tăng / 1 tham chiếu / 10 giảm trên 18 mã; trung vị -0,2556%. LPB +6,9652% nhưng không đại diện độ rộng nhóm.
- Chứng khoán: 4 tăng / 1 tham chiếu / 10 giảm trên 15 mã; trung vị -0,3584%.
- Năng lượng: 3 tăng / 0 tham chiếu / 9 giảm trên 12 mã; trung vị -0,6884%.
- Công nghiệp: 6 tăng / 0 tham chiếu / 1 giảm trên 7 mã; trung vị +1,0638%.
- Cảng biển & logistics: 4 tăng / 0 tham chiếu / 0 giảm trên 4 mã; trung vị +1,47405%.
- Bất động sản: 3 tăng / 1 tham chiếu / 5 giảm trên 9 mã; trung vị -0,5168%.

Các thống kê ngành là TỰ TÍNH từ coverage 131 mã, không đại diện toàn bộ thị trường.

## 5. Khối ngoại / tự doanh

- VNIndex.ai EOD 15:00 ước tính khối ngoại HOSE bán ròng khoảng 272,87 tỷ đồng. Nguồn ghi rõ là số ước tính theo giá đóng cửa:
  https://vnindex.ai/vnindex-hom-nay
- Stockbiz tại ảnh chụp dữ liệu sớm trong ngày ghi -22,273626 tỷ đồng và trang vẫn hiển thị mốc cập nhật trước khi chốt EOD, nên không dùng để đối chiếu số cuối phiên.
- Tại mốc khóa, chưa có hai nguồn hậu phiên độc lập cùng phạm vi khớp lệnh xác nhận con số khối ngoại 05/10.

=> Khối ngoại 05/10: **CHƯA XÁC MINH số hậu phiên chính thức**; yếu tố 5 chấm 0.
=> Chặn cứng "khối ngoại bán ròng >=5 phiên liên tiếp" của 05/10: **KHÔNG KIỂM ĐƯỢC**.
=> Số -272,87 tỷ chỉ giữ trong nhật ký với tính chất TẠM TÍNH, không đưa vào bài Zalo.

Tự doanh tổng phiên 05/10: **CHƯA XÁC MINH** tại thời điểm khóa; không dùng để chấm điểm.

## 6. Phái sinh / đáo hạn / bối cảnh quốc tế

| Số liệu | Giá trị | Nguồn | Nhãn |
|---|---:|---|---|
| VN30F1M đóng cửa | 1.900,10 | DNSE chart API 05/10 | 1 NGUỒN |
| VN30 cơ sở | 1.894,46 | VNDIRECT | 1 NGUỒN |
| Basis | +5,64 điểm / +0,297710% | TỰ TÍNH | TỰ TÍNH |
| Quy tắc đáo hạn | Thứ Năm thứ ba trong tháng, nếu trùng nghỉ thì lùi phiên liền trước | HNX: https://www.upcom.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html | ĐÃ XÁC MINH |
| Ngày thứ Năm thứ ba tháng 10/2026 | 15/10/2026 | TỰ TÍNH từ lịch tháng + quy tắc HNX; không có ngày nghỉ giao dịch chính thức tại mốc này | TỰ TÍNH |

05/10 không nằm trong 3 phiên trước hoặc đúng ngày đáo hạn.
Bối cảnh quốc tế trước mốc cắt: phần lớn thị trường châu Á tăng trong phiên 05/10 sau dữ liệu việc làm Mỹ yếu hơn dự kiến, kỳ vọng Fed chưa cần tăng lãi suất và giá dầu không tăng quá mạnh.
Nguồn: https://baotintuc.vn/chung-khoan-chau-a-tang-diem-sau-bao-cao-viec-lam-cua-my-post1391461.html

=> Yếu tố phái sinh/vĩ mô: +1.

## 7. Mốc tác nghiệp và R:R

| Mốc / phép tính | Giá trị | Xuất xứ | Nhãn |
|---|---:|---|---|
| Hỗ trợ gần / mốc vô hiệu | 1.738,78 | đáy phiên 05/10, VNDIRECT + VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| Hỗ trợ mạnh | 1.728,36 | đáy phiên 02/10 trong chuỗi VNDIRECT | TỰ TÍNH |
| Kháng cự gần | 1.774,7890 | MA50 | TỰ TÍNH |
| Kháng cự mạnh | 1.793,7805–1.795,82125 | MA20–MA200 | TỰ TÍNH |
| Khoảng cách tới MA50 | (1.774,789 - 1.753,20) / 1.774,789 = 1,216426% | TỰ TÍNH | TỰ TÍNH |
| R:R tới MA50 | (1.774,789 - 1.753,20) / (1.753,20 - 1.738,78) = 1,497157 | TỰ TÍNH | TỰ TÍNH |

R:R <2 kích hoạt CHẶN MỀM.
Giá đóng cửa cách MA50 khoảng 1,22%, cũng kích hoạt CHẶN MỀM "cách kháng cự mạnh <=1,5% mà chưa vượt" nếu dùng MA50 làm kháng cự vận hành gần.

## 8. Chấm điểm v3.2

1. **Giá / MA / cấu trúc: -1** — close 1.753,20 dưới MA20 1.793,78 và MA50 1.774,79; MA20 cũng thấp hơn mức 1.812,76 của 5 phiên trước.
2. **Thanh khoản: -1** — phiên tăng nhưng thanh khoản chỉ 0,771× TB20, thấp hơn ngưỡng 0,8×.
3. **Độ rộng: 0** — 155/151 = 1,026; không đạt +1 (>=1,5) và không chạm -1 (<=0,67).
4. **Chất lượng dòng tiền: -1** — top 5 kéo tăng đóng góp 105,55% mức tăng chỉ số, vượt ngưỡng 70%; kéo trụ rõ.
5. **Khối ngoại: 0** — số hậu phiên chính thức 05/10 chưa đủ hai nguồn cùng phạm vi; không dùng số tạm để chấm.
6. **Sức khỏe xu hướng: -1** — 8 phiên phân phối còn hiệu lực /25.
7. **Phái sinh / vĩ mô: +1** — basis +0,298%, 05/10 không thuộc tuần đáo hạn và bối cảnh châu Á trước mốc cắt không bất lợi rõ.

**Tổng điểm: -3/7.**

### Cổng chặn
- **CHẶN CỨNG: KÍCH HOẠT** — 8 phiên phân phối còn hiệu lực >=6.
- Khối ngoại bán ròng >=5 phiên liên tiếp tại 05/10: **KHÔNG KIỂM ĐƯỢC** vì số hậu phiên 05/10 chưa xác minh đủ.
- Xả cuối phiên: KHÔNG kích hoạt; close nằm 1/3 trên và thanh khoản <TB20.
- Chỉ số xanh nhưng đa số mã đỏ: KHÔNG kích hoạt; 155 tăng >151 giảm.
- R:R <2: **CHẶN MỀM KÍCH HOẠT**, R:R ~1,50.
- Giá cách MA50 <=1,5% và chưa vượt: **CHẶN MỀM KÍCH HOẠT**, khoảng cách ~1,22%.
- Dòng tiền co cụm vào trụ: **CHẶN MỀM KÍCH HOẠT** do yếu tố 4 = -1.
- Đóng dưới mốc vô hiệu 1.738,78: chưa xảy ra.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, không mở vị thế mới.**
