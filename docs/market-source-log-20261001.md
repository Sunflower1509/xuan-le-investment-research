# Nhật ký nguồn nội bộ — Nhận định VN-Index 01/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2. Tài liệu nội bộ, không đưa vào artifact công khai.
> Ngày phân tích: 01/10/2026. Mốc cắt: hết phiên 01/10/2026 (giờ Việt Nam). Chốt kiểm định: khoảng 15:18 ICT, sau ATC.

## Cổng dữ liệu

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.749,30 | điểm, EOD 01/10 | VNDIRECT Finfo: https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-10-01&size=500 | VNIndex.ai, cập nhật 14:57 01/10: https://vnindex.ai/vnindex-hom-nay | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | -19,32 / -1,092377% | điểm / %, EOD 01/10 | VNDIRECT Finfo | VNIndex.ai: -19,32 / -1,09% | ĐÃ ĐỐI CHIẾU |
| VN-Index mở cửa / cao nhất | 1.765,71 / 1.768,05 | điểm | VNDIRECT Finfo, chuỗi VNINDEX | VNIndex.ai cùng giá trị | ĐÃ ĐỐI CHIẾU |
| VN-Index thấp nhất | 1.737,58 | điểm | VNDIRECT Finfo, chuỗi VNINDEX | VNIndex.ai lúc 14:57 hiển thị 1.740,86; khác thời điểm/luồng dữ liệu, không dùng để thay VNDIRECT | 1 NGUỒN |
| VN30 | 1.890,57 / -16,24 / -0,851684% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| HNX-Index | 268,66 / -2,98 / -1,097040% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| Độ rộng HOSE | 103 tăng / 76 tham chiếu / 172 giảm / 5 sàn | số mã | VNDIRECT Finfo | — | 1 NGUỒN |
| Tỷ lệ tăng/giảm | 103/172 = 0,598837 | HOSE | TỰ TÍNH từ độ rộng VNDIRECT | — | TỰ TÍNH |
| GT khớp lệnh HOSE | 11.186,080397 tỷ | tỷ đồng, khớp lệnh | VNDIRECT Finfo nmValue | VNIndex.ai công bố tổng GTGD 14,03 nghìn tỷ nên khác phạm vi, không dùng để đối chiếu khớp lệnh | 1 NGUỒN |
| GT khớp lệnh phiên trước | 11.316,383085 tỷ | tỷ đồng, 30/09 | VNDIRECT Finfo | — | 1 NGUỒN |
| Thay đổi GT khớp lệnh so 30/09 | -1,151452% | % | TỰ TÍNH = 11.186,080397 / 11.316,383085 - 1 | — | TỰ TÍNH |
| TB20 GT khớp lệnh trước 01/10 | 13.265,132486 tỷ | tỷ đồng, 20 phiên liền trước | TỰ TÍNH từ 20 dòng nmValue VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 0,843269 lần | lần | TỰ TÍNH = 11.186,080397 / 13.265,132486 | — | TỰ TÍNH |
| Ngưỡng 1,2 lần TB20 | 15.918,158984 tỷ | tỷ đồng | TỰ TÍNH = 1,2 × 13.265,132486 | — | TỰ TÍNH |

## Chuỗi kỹ thuật

Chuỗi dùng để tự tính: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 01/10/2026, 249 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-01&size=500

| Số liệu | Giá trị | Công thức / phạm vi | Nhãn |
|---|---:|---|---|
| MA20 | 1.802,9710 | TB số học 20 giá đóng cửa cuối | TỰ TÍNH |
| MA20 cách 5 phiên | 1.815,1055 | TB số học 20 giá đóng cửa kết thúc tại T-5 | TỰ TÍNH |
| MA50 | 1.772,9526 | TB số học 50 giá đóng cửa cuối | TỰ TÍNH |
| MA200 | 1.795,69745 | TB số học 200 giá đóng cửa cuối | TỰ TÍNH |
| RSI14 | 38,0328 | Wilder RSI14 từ cùng chuỗi | TỰ TÍNH |
| MACD | -6,14596 | EMA12 - EMA26 | TỰ TÍNH |
| MACD signal | 1,42336 | EMA9 của MACD | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước 01/10 | 1.758,31 | min(low) của 20 phiên trước | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,384641 | (close-low)/(high-low), thuộc 1/3 giữa | TỰ TÍNH |
| Phiên phân phối còn hiệu lực | 7 | Định nghĩa v3.2: giảm >=0,2% và nmValue > phiên trước; hết hiệu lực sau 25 phiên hoặc tăng >=5% từ close phiên đó | TỰ TÍNH |
| Các phiên phân phối còn hiệu lực | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09 | Tính trên 25 phiên gần nhất | TỰ TÍNH |

01/10 không tạo thêm phiên phân phối vì VN-Index giảm -1,092377% nhưng GT khớp lệnh 11.186,080397 tỷ thấp hơn 11.316,383085 tỷ của 30/09.

## Đóng góp điểm và dòng tiền

Nguồn: VNIndex.ai, trang đã mở sau ATC, cập nhật 14:57 01/10/2026:
https://vnindex.ai/vnindex-hom-nay

| Số liệu | Giá trị | Nhãn |
|---|---:|---|
| Top 5 kéo tăng | TCB +0,66; MSN +0,58; HDB +0,52; PLX +0,28; VBB +0,21 điểm | 1 NGUỒN |
| Top 5 kéo giảm | VIC -12,72; STB -1,45; LPB -1,24; BID -0,81; VCB -0,69 điểm | 1 NGUỒN |
| Tổng điểm top 5 kéo giảm | -16,91 điểm | TỰ TÍNH |
| Tỷ lệ top 5 kéo giảm / mức giảm VN-Index | 16,91 / 19,32 = 87,5259% | TỰ TÍNH |

Bản đồ ngành dùng universe 130 mã của website, giá EOD 01/10 đã khóa từ VNDIRECT/KBS:
- Năng lượng: 7 tăng / 2 tham chiếu / 3 giảm trên 12 mã; trung vị +0,37585%.
- Ngân hàng: 5 tăng / 2 tham chiếu / 10 giảm trên 17 mã; trung vị -0,4274%.
- Chứng khoán: 5 tăng / 0 tham chiếu / 10 giảm trên 15 mã; trung vị -0,5825%.
Các thống kê ngành là TỰ TÍNH từ coverage 130 mã; không đại diện toàn bộ thị trường.

## Phái sinh / đáo hạn

| Số liệu | Giá trị | Nguồn | Nhãn |
|---|---:|---|---|
| VN30F1M đóng cửa | 1.895,0 | DNSE chart API 01/10: https://api.dnse.com.vn/chart-api/v2/ohlcs/derivative?symbol=VN30F1M&resolution=1&from=1790787600&to=1790847000 | 1 NGUỒN |
| Basis VN30F1M | +4,43 điểm / +0,234321% VN30 | TỰ TÍNH từ F1M 1.895,0 và VN30 1.890,57 | TỰ TÍNH |
| Quy tắc đáo hạn | Thứ Năm thứ ba của tháng, nếu nghỉ thì lùi phiên liền trước | HNX: https://eoffice.hnx.vn/vi-vn/huong-dan/chi-tiet-thu-tuc-36-65.html | ĐÃ XÁC MINH |
| Ngày thứ Năm thứ ba tháng 10/2026 | 15/10/2026 | HNX quy tắc + lịch HNX tháng 10 có ngày 15/10/2026 là Thứ Năm và là ngày giao dịch: https://hnx.vn/vi-vn/m-tin-tuc-hnx/Thong%20bao%20Lich%20bieu%20giao%20dich%20mua%20ban%20lai%20TPCP%20cua%20KBNN%20thang%20102026-636444-0.html | ĐÃ XÁC MINH |

## Khối ngoại / tự doanh

- Khối ngoại HOSE tại thời điểm khóa: VNIndex.ai ước tính -25,61 tỷ đồng, cập nhật sau phiên theo giá đóng cửa. Đây là **TẠM TÍNH**, không dùng để chấm yếu tố 5 và không đưa vào bài Zalo.
- Chuỗi bán ròng 6 phiên đến hết 30/09 đã được nguồn hậu phiên ngày 30/09 xác minh, nhưng do số 01/10 chưa có nguồn chính thức đủ đối chiếu nên không suy tiếp thành phiên thứ 7.
- Tự doanh 01/10: **CHƯA XÁC MINH** tại thời điểm khóa; không dùng để chấm điểm.

## Mốc tác nghiệp và R:R

| Mốc / phép tính | Giá trị | Xuất xứ | Nhãn |
|---|---:|---|---|
| Hỗ trợ gần / mốc vô hiệu | 1.737,58 | Đáy VNDIRECT phiên 01/10/2026 | 1 NGUỒN |
| Hỗ trợ mạnh tham chiếu | 1.700 | Số tròn tâm lý; AIS trước phiên cũng nêu vùng 1.720 và xa hơn 1.700 qua SmartF 01/10 | 1 NGUỒN |
| Kháng cự gần | 1.772,95 | MA50 tự tính | TỰ TÍNH |
| Kháng cự mạnh | 1.795,70–1.802,97 | MA200–MA20 tự tính | TỰ TÍNH |
| R:R mở mới tới MA50 | (1.772,9526 - 1.749,30) / (1.749,30 - 1.737,58) = 2,01814 | TỰ TÍNH | TỰ TÍNH |

## Chấm điểm v3.2

1. Giá/MA/cấu trúc: **-1** — close 1.749,30 dưới MA20 1.802,97 và MA50 1.772,95; đồng thời dưới đáy thấp nhất 20 phiên trước 1.758,31.
2. Thanh khoản: **0** — phiên giảm nhưng 0,843× TB20, chưa đạt điều kiện -1 là >=1,2× TB20.
3. Độ rộng: **-1** — 103/172 = 0,599 <=0,67.
4. Chất lượng dòng tiền: **0** — phiên giảm; điều kiện -1 về tập trung top 5 của một phiên tăng không áp dụng. Mô tả riêng: top 5 mã giảm giải thích 87,5% mức giảm chỉ số nhưng độ rộng vẫn âm.
5. Khối ngoại: **0** — số 01/10 mới ở trạng thái TẠM TÍNH, không dùng chấm điểm.
6. Sức khỏe xu hướng: **-1** — 7 phiên phân phối còn hiệu lực trong 25 phiên.
7. Phái sinh/vĩ mô: **0** — basis +0,234% hỗ trợ nhẹ nhưng không đủ để nâng điểm khi bối cảnh quốc tế trước phiên không tạo xác nhận rõ.

**Tổng: -3/7.**

### Cổng chặn
- **CHẶN CỨNG: KÍCH HOẠT** vì có 7 phiên phân phối còn hiệu lực (>=6).
- Điều kiện khối ngoại bán >=5 phiên liên tiếp tại 01/10: **KHÔNG KIỂM ĐƯỢC** do số 01/10 chưa chính thức đối chiếu.
- Chặn xả cuối phiên: không kích hoạt theo công thức, vì close nằm ở 1/3 giữa và thanh khoản chỉ 0,843× TB20.
- R:R <2: không kích hoạt; R:R tới MA50 khoảng 2,02. Tuy nhiên R:R không được phép vượt chặn cứng.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, không mở vị thế mới.**
