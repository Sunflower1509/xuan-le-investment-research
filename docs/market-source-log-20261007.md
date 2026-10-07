# Nhật ký nguồn nội bộ — Nhận định VN-Index 07/10/2026

> Mục đích: kiểm soát số liệu theo PROMPT NHẬN ĐỊNH VNINDEX v3.2.
> Ngày phân tích: 07/10/2026. Mốc cắt: hết phiên 07/10/2026 (giờ Việt Nam). Chốt kiểm định: sau ATC.
> Tài liệu nội bộ, không đưa lên giao diện công khai.

## 1. Cổng dữ liệu lõi

| Số liệu | Giá trị | Phạm vi / đơn vị | Nguồn 1 | Nguồn 2 | Nhãn |
|---|---:|---|---|---|---|
| VN-Index đóng cửa | 1.753,39 | điểm, EOD 07/10 | VNDIRECT Finfo | VNIndex.ai EOD 15:00: https://vnindex.ai/vnindex-hom-nay | ĐÃ ĐỐI CHIẾU |
| VN-Index thay đổi | -5,69 / -0,323465% | điểm / %, EOD | VNDIRECT Finfo | VNIndex.ai: -5,69 / -0,32% | ĐÃ ĐỐI CHIẾU |
| Mở / cao / thấp | 1.760,54 / 1.760,54 / 1.743,24 | điểm | VNDIRECT Finfo lịch sử VNINDEX | VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| VN30 | 1.894,20 / -4,62 / -0,243309% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| HNX-Index | 259,82 / -5,71 / -2,150416% | điểm / điểm / % | VNDIRECT Finfo | — | 1 NGUỒN |
| Độ rộng HOSE chuẩn vận hành | 144 tăng / 64 tham chiếu / 147 giảm / 4 sàn | số mã | VNDIRECT Finfo | chưa có nguồn hậu phiên thứ hai cùng phạm vi tại mốc khóa | 1 NGUỒN |
| Tỷ lệ tăng/giảm | 144/147 = 0,979592 | HOSE | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| GT khớp lệnh chuẩn tính chuỗi | 12.473,832326 tỷ | tỷ đồng | VNDIRECT nmValue | — | 1 NGUỒN CÙNG CHUỖI |
| GTGD tổng hiển thị VNIndex.ai | 15,08 nghìn tỷ | tổng giá trị theo phạm vi VNIndex.ai | VNIndex.ai | — | 1 NGUỒN KHÁC PHẠM VI |
| TB20 GT khớp lệnh trước 07/10 | 13.142,898362 tỷ | tỷ đồng | TỰ TÍNH từ VNDIRECT | — | TỰ TÍNH |
| Bội số thanh khoản/TB20 | 0,949093 lần | lần | TỰ TÍNH = 12.473,832326 / 13.142,898362 | — | TỰ TÍNH |

Ghi chú: không dùng 15,08 nghìn tỷ của VNIndex.ai để tính TB20 vì khác phạm vi với chuỗi nmValue VNDIRECT. Toàn bộ so sánh thanh khoản dùng một chuỗi VNDIRECT.

## 2. Kiểm định 133/133 mã website

Nguồn chính: VNDIRECT Finfo exact-date 07/10/2026.
Nguồn đối chiếu: KBS date-specific exact-date vì CafeF chưa có dòng EOD đúng ngày tại thời điểm khóa.

- 133/133 mã: KBS exact-date có OHLC hợp lệ và giá đóng cửa trùng VNDIRECT.
- 127/133 mã: khối lượng khớp trùng trực tiếp.
- Sai khác khối lượng nhỏ: CEO 15.000; HUT 13.000; IDC 300; PVC 500; PVS 5.000; SHS 4.000 cổ phiếu.
- Website giữ nmVolume và pctChange VNDIRECT theo quy ước nguồn chính.
- Data Gate: PASS 133/133.

## 3. Chuỗi kỹ thuật — TỰ TÍNH

Chuỗi: VNDIRECT Finfo, VNINDEX từ 01/10/2025 đến 07/10/2026, 253 phiên:
https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:VNINDEX~date:gte:2025-10-01~date:lte:2026-10-07&size=500

| Chỉ tiêu | Giá trị | Nhãn |
|---|---:|---|
| MA20 | 1.786,5260 | TỰ TÍNH |
| MA20 cách 5 phiên | 1.806,8920 | TỰ TÍNH |
| MA50 | 1.777,3286 | TỰ TÍNH |
| MA200 | 1.796,65465 | TỰ TÍNH |
| RSI14 | 41,495247 | TỰ TÍNH |
| MACD | -11,638507 | TỰ TÍNH |
| MACD signal | -5,836301 | TỰ TÍNH |
| Đáy thấp nhất 20 phiên trước | 1.728,36 | TỰ TÍNH |
| Đỉnh cao nhất 20 phiên trước | 1.848,17 | TỰ TÍNH |
| Vị trí đóng cửa trong biên phiên | 0,586705 | 1/3 giữa |
| Phiên phân phối còn hiệu lực | 8 | TỰ TÍNH |
| Danh sách | 11/09, 14/09, 18/09, 23/09, 24/09, 28/09, 30/09, 02/10 | TỰ TÍNH |

07/10 giảm -0,323465% nhưng GT khớp lệnh 12.473,832326 tỷ thấp hơn 14.489,246570 tỷ của 06/10, nên **không** tạo phiên phân phối mới theo định nghĩa v3.2.

## 4. Đóng góp điểm và chất lượng dòng tiền

Nguồn: VNIndex.ai EOD cập nhật 15:00 ngày 07/10:
https://vnindex.ai/vnindex-hom-nay

Top 5 kéo tăng:
- GVR +0,99 điểm
- MSN +0,96
- BSR +0,67
- MWG +0,58
- MCH +0,45
- Tổng: +3,65 điểm

Top 5 kéo giảm:
- VIC -3,27 điểm
- VHM -1,72
- LPB -1,18
- VPL -0,56
- GAS -0,45
- Tổng: -7,18 điểm
- Độ lớn top 5 kéo giảm / mức giảm chỉ số = 7,18 / 5,69 = 126,186%.

Rubric v3.2 định nghĩa điểm -1 của yếu tố 4 bằng top 5 >70% **mức tăng** hoặc một nhóm duy nhất gánh. 07/10 là phiên giảm và có nhiều cụm tiền vào khác nhau, vì vậy không tự sửa rubric; yếu tố 4 chấm 0. Tỷ lệ 126,186% chỉ dùng mô tả rằng lực kéo giảm ở một số trụ được bù một phần bởi các mã tăng.

## 5. Bản đồ ngành — universe 133 mã website

- Ngân hàng: 6 tăng / 3 tham chiếu / 9 giảm trên 18 mã; trung vị -0,0839%. VIB +2,963%, SSB +2,381%, MSB +1,7361%; LPB -4,328%.
- Chứng khoán: 0 tăng / 1 tham chiếu / 14 giảm trên 15 mã; trung vị -1,5326%.
- Năng lượng: 5 tăng / 3 tham chiếu / 4 giảm trên 12 mã; trung vị 0%; PVP +2,9289%, BSR +2,09%, PVT +1,4286%.
- Bất động sản: 1 tăng / 2 tham chiếu / 7 giảm trên 10 mã; trung vị -1,3027%.
- Công nghiệp: 4 tăng / 1 tham chiếu / 2 giảm trên 7 mã; trung vị +0,5638%; MSR +7,6159%, CTD +5,2721%, PHP +2,4096%.
- Nông nghiệp: 4 tăng / 0 tham chiếu / 2 giảm trên 6 mã; trung vị +0,5690%.
- Cảng biển & logistics: 4 tăng / 0 tham chiếu / 0 giảm trên 4 mã; trung vị +4,0956%: VSC +4,2471%, GMD +4,2308%, HAH +3,9604%, DXP +3,9474%.
- BĐS khu công nghiệp: 3 tăng / 0 tham chiếu / 1 giảm trên 4 mã; trung vị +1,5479%: IDC +5,0147%, SZC +2,0958%, KBC +1,0%.
- BĐS nhà ở: 2 tăng / 2 tham chiếu / 0 giảm trên 4 mã.

Kết luận bản đồ ngành: tiền xoay từ chứng khoán và phần lớn bất động sản sang cảng biển–logistics, BĐS khu công nghiệp, công nghiệp và một phần nông nghiệp/năng lượng. Đây là luân chuyển có bằng chứng nhưng chưa phải lan tỏa toàn thị trường.

## 6. Khối ngoại / tự doanh

- VNIndex.ai EOD 15:00 ước tính khối ngoại HOSE bán ròng khoảng 901,2 tỷ đồng; trang ghi rõ số ước tính theo giá đóng cửa.
- CafeF/nguồn hậu phiên chính thức tại mốc khóa chưa có dữ liệu 07/10 hoàn chỉnh cùng phạm vi; các trang lịch sử vẫn đang dừng ở 06/10.
- Sau khi tìm nhiều nguồn, chưa khóa được **hai nguồn độc lập hậu phiên** cho số 07/10.

=> Khối ngoại 07/10: **TẠM TÍNH / CHƯA XÁC MINH số chính thức**.
=> Yếu tố 5: **0**, không dùng số tạm để chấm.
=> Điều kiện chặn “khối ngoại bán ròng >=5 phiên liên tiếp” tại 07/10: **KHÔNG KIỂM ĐƯỢC**.
=> Không đưa con số -901,2 tỷ vào bài Zalo hay bảng hành động công khai.

Tự doanh tổng phiên 07/10: **CHƯA XÁC MINH** tại thời điểm khóa; không dùng để chấm điểm.

## 7. Phái sinh / đáo hạn / bối cảnh quốc tế

- VN30F1M đóng 1.894,40 điểm theo DNSE chart API, 241 thanh 1 phút.
- VN30 cơ sở đóng 1.894,20.
- Basis = +0,20 điểm = +0,010559%.
- DNSE xác nhận hợp đồng hiện tại đáo hạn 15/10/2026, thanh toán cuối 16/10/2026.
- 07/10 chưa nằm trong 3 phiên trước ngày đáo hạn.

Bối cảnh trước mốc cắt:
- S&P 500 phiên Mỹ 06/10 tăng khoảng 0,58–0,60% lên vùng kỷ lục.
- Nasdaq tăng khoảng 0,45–0,46% lên kỷ lục.
- Lợi suất TPCP Mỹ 10 năm giảm về khoảng 5,286%.
- Brent đóng khoảng 100,58 USD/thùng, vẫn ở vùng cao.

Nguồn: VnEconomy 08:14 07/10 và VOV 11:33 07/10.

Đánh giá: chứng khoán Mỹ/lợi suất hỗ trợ, nhưng giá dầu trên 100 USD/thùng vẫn là biến số bất lợi; bối cảnh pha trộn.
=> Yếu tố 7: **0**.

## 8. Mốc tác nghiệp và R:R

| Mốc / phép tính | Giá trị | Xuất xứ | Nhãn |
|---|---:|---|---|
| Hỗ trợ gần / mốc vô hiệu | 1.743,24 | đáy phiên 07/10, VNDIRECT + VNIndex.ai | ĐÃ ĐỐI CHIẾU |
| Hỗ trợ mạnh | 1.728,36 | đáy thấp nhất 20 phiên trước | TỰ TÍNH |
| Kháng cự gần | 1.777,3286 | MA50 | TỰ TÍNH |
| Kháng cự mạnh | 1.786,5260–1.796,65465 | MA20–MA200 | TỰ TÍNH |
| Khoảng cách tới MA50 | (1.777,3286 - 1.753,39) / 1.777,3286 = 1,346887% | TỰ TÍNH | TỰ TÍNH |
| R:R tới MA50 | (1.777,3286 - 1.753,39) / (1.753,39 - 1.743,24) = 2,358483 | TỰ TÍNH | TỰ TÍNH |

=> R:R >2: không kích hoạt chặn mềm R:R.
=> Giá cách MA50 <=1,5% mà chưa vượt: **CHẶN MỀM KÍCH HOẠT**.

## 9. Chấm điểm v3.2

1. Giá / MA / cấu trúc: **-1** — close 1.753,39 dưới MA20 1.786,526 và MA50 1.777,329; MA20 thấp hơn 1.806,892 của 5 phiên trước.
2. Thanh khoản: **0** — phiên giảm nhưng thanh khoản 0,949× TB20, chưa đạt điều kiện -1 là >=1,2×.
3. Độ rộng: **0** — 144/147 = 0,980, nằm giữa 0,67 và 1,5.
4. Chất lượng dòng tiền: **0** — rubric top 5 >70% áp cho mức tăng; phiên giảm có nhiều cụm ngành tăng thực, không tự sửa rubric.
5. Khối ngoại: **0** — số chính thức 07/10 chưa đủ đối chiếu.
6. Sức khỏe xu hướng: **-1** — 8 phiên phân phối còn hiệu lực /25.
7. Phái sinh / vĩ mô: **0** — basis +0,011% nhưng bối cảnh quốc tế pha trộn.

**Tổng điểm: -2/7.**

### Cổng chặn

CHẶN CỨNG:
- 8 phiên phân phối >=6: **KÍCH HOẠT**.
- Khối ngoại bán ròng >=5 phiên liên tiếp tại 07/10: **KHÔNG KIỂM ĐƯỢC**.
- Xả cuối phiên: không kích hoạt; close ở 1/3 giữa và thanh khoản <TB20.
- Chỉ số xanh nhưng đa số mã đỏ + thanh khoản >=1,2×: không áp dụng vì chỉ số giảm.
- Đóng dưới mốc vô hiệu 1.743,24: chưa xảy ra.

CHẶN MỀM:
- Thanh khoản không xác nhận chiều tăng: không áp dụng vì phiên giảm.
- Xanh điểm nhưng đỏ mã: không áp dụng vì chỉ số giảm.
- Co cụm trụ factor 4=-1: không kích hoạt.
- Cách MA50 chỉ 1,347% và chưa vượt: **KÍCH HOẠT**.
- R:R 2,358 >=2: không kích hoạt.

**Trạng thái theo bảng II.D: KHÔNG — PHÒNG THỦ — tỷ trọng cổ phiếu định hướng <=20%, hạ dần phần yếu, không mở vị thế mới.**
