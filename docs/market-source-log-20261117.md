# SỔ KIỂM TOÁN NGUỒN — VN-INDEX PHIÊN 17/11/2026 (Prompt v3.3.1)

**Thời điểm kiểm tra:** chiều 17/11/2026, bắt đầu lúc 15:02 giờ Việt Nam. **Ngày phân tích yêu cầu:** 17/11/2026. Mốc cắt: chỉ dữ kiện của chính phiên 17/11, không dùng phiên 18/11 hoặc về sau. **Không có Sổ dữ liệu tự lưu do người dùng dán.**

## Ba lượt đọc Prompt

Tài liệu gốc đang dùng trên website: `docs/prompt-nhan-dinh-vnindex-v3.md`, tiêu đề “PROMPT NHẬN ĐỊNH VNINDEX — BẢN v3.3.1”, SHA `d3776d82a27f643bdc40b13729f564003417e2d0`, 42.703 ký tự. Đã mở/đọc ba lượt: (1) cổng dữ liệu 0–I, phân biệt KHỚP và TỔNG; (2) II–VI, điểm số/chặn/đảo chiều; (3) VII–XII, chuẩn web/Zalo, Sổ, tự kiểm và bảo toàn layout. Tệp đính kèm riêng chưa được tìm thấy trong Files; không khẳng định đã mở một tệp đính kèm không có trong danh mục.

## I. Đối chiếu số lõi

| Trường | Giá trị và phạm vi | Nguồn trực tiếp + đoạn nguyên văn ngắn | Nguồn 2 + đoạn nguyên văn ngắn | Nhãn |
|---|---|---|---|---|
| VNINDEX đóng / thay đổi | **1.726,72; −10,17; −0,59%** | VNIndex.ai EOD 17/11 15:00 “1.726,72 điểm-10,17 (-0,59%)”; https://vnindex.ai/vnindex-hom-nay | Stockbiz EOD “VN-Index 1.726,72▼10,17 (−0,59%)”; https://stockbiz.vn/thi-truong | **ĐÃ ĐỐI CHIẾU** |
| Mở/cao/thấp | **1.733,58/1.735,04/1.715,67** | VNIndex.ai EOD 17/11 “Mở cửa 1.733,58”, “Cao nhất 1.735,04”, “Thấp nhất 1.715,67”; https://vnindex.ai/vnindex-hom-nay | Chưa có bảng OHLC thứ hai mở đủ số cuối phiên | **1 NGUỒN** |
| VN30 | **1.837,13; −0,39%** | Stockbiz EOD 17/11 “VN30 1.837,13▼7,12 (−0,39%)”; https://stockbiz.vn/thi-truong | VNDIRECT Finfo EOD trong `src/data/research-data.js` “close:1837.13”, “changePct:-0.3860...” ngày 17/11 | **ĐÃ ĐỐI CHIẾU** |
| HNX-Index | **248,60; −2,48%** | Stockbiz EOD “HNX-Index 248,60▼6,31 (−2,48%)”; https://stockbiz.vn/thi-truong | Finfo EOD 17/11 trong `src/data/research-data.js`, “close:248.6” | **ĐÃ ĐỐI CHIẾU** |
| Độ rộng HOSE theo VNDIRECT | **107 tăng/199 giảm/62 đứng** | Finfo `marketSession.breadth` EOD 17/11; https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-11-17&size=500 | VNIndex.ai dùng rổ **404** mã 110/202/92 (khác phạm vi), https://vnindex.ai/vnindex-hom-nay | **1 NGUỒN cùng phạm vi**, không được ép trùng |
| **Giá trị KHỚP LỆNH HOSE ngày 17/11/2026, tỷ đồng** | **CHƯA XÁC MINH** | nmquan lịch sử mở toàn văn lúc kiểm tra chỉ đến **16-11-2026**, https://nmquan.vn/data/chi-so/vn-index/lich-su | VNSignal lịch sử chỉ đến 16/11, https://vnsignal.vn/chi-so/vnindex/lich-su-gia; CafeF tổng hợp cũng còn 16/11, https://cafef.vn/du-lieu/lich-su-giao-dich-hvn-1.chn | **CHƯA XÁC MINH** |
| **TỔNG giá trị giao dịch (KHỚP + THỎA THUẬN)** | **14.639 tỷ** (Stockbiz); VNIndex.ai khoảng 14,64 nghìn tỷ | Stockbiz EOD “Thanh khoản nhóm VN-Index đạt 14.639 tỷ đồng” https://stockbiz.vn/thi-truong | VNIndex.ai “Giá trị giao dịch 14,64 nghìn tỷ” https://vnindex.ai/vnindex-hom-nay | **ĐÃ ĐỐI CHIẾU theo làm tròn**, tuyệt đối **KHÔNG** thay số KHỚP |
| Ngoại HOSE ròng **TỔNG** | −358 tỷ (Stockbiz) | Stockbiz “Khối ngoại bán ròng 358 tỷ đồng”, https://stockbiz.vn/thi-truong | VNIndex.ai “Khối ngoại bán ròng 358 tỷ trên HOSE”, https://vnindex.ai/vnindex-hom-nay | Chỉ TỔNG, không dùng cho ngoại **KHỚP** /5 phiên |

**Phân định phạm vi:** VNDIRECT HOSE `breadth` dùng tập có 368 mã, VNIndex.ai rộng hơn 404 mã. Stockbiz nhóm 80 mã vốn hóa lớn không thay độ rộng toàn HOSE. Giá trị 14.639 tỷ **bao gồm thỏa thuận**, không dùng làm thanh khoản khớp.

## II. Nhật ký tìm số chưa có (đã mở nhiều hơn 3 trang)

- `nmquan.vn/data/chi-so/vn-index/lich-su` — **có dữ liệu 16/11, không có dòng 17/11** tại thời điểm kiểm tra.
- `vnsignal.vn/chi-so/vnindex/lich-su-gia` — **có dữ liệu 16/11, không có dòng 17/11**.
- CafeF `cafef.vn/du-lieu/lich-su-giao-dich-hvn-1.chn` — **có dữ liệu đóng phiên 16/11, chưa có 17/11**.
- `stockbiz.vn/thi-truong` — **có tổng 14.639 tỷ, không ghi riêng giá trị KHỚP 17/11**.
- `vnindex.ai/vnindex-hom-nay` — **có tổng 14,64 nghìn tỷ, không có dòng KHỚP và THỎA THUẬN tách riêng**.
- `dalink.net/thi-truong/chi-so/VNINDEX` — cập nhật 11:56/12:46 theo giờ trong phiên 17/11, **không thể dùng 4.058 tỷ khớp buổi sáng thay EOD**.

## III. Chuỗi chỉ báo chỉ được giữ như kết quả kiểm toán nội bộ, KHÔNG dùng vượt cổng

- VNIndex.ai hiển thị bảng 60 giá đóng liên tục, neo 17/11 **1.726,72**, 16/11 **1.736,89**, dùng một gốc (a), tính bằng JS:
  - MA20 trung bình 20 giá gồm ngày 17/11 = **1.740,489 → 1.740,49** (TỰ TÍNH).
  - MA50 trung bình 50 giá gồm 17/11 = **1.755,4564 → 1.755,46** (TỰ TÍNH).
  - MA20 5 phiên trước = **1.731,0265**, dốc 5 phiên = **+9,4625 → +9,46 điểm** (TỰ TÍNH).
  - MA200 thiếu 200 hàng, không quyết định chế độ.
- nmquan lịch sử 30 phiên đến 16/11 cho 20 giá trị **KHỚP** liền trước 17/11, 20 kỳ, trung bình **12.351,715 → 12.351,72 tỷ** (TỰ TÍNH). Không có giá trị KHỚP 17/11, **không thể tính bội số** hoặc khẳng định phiên 17 có/thêm phân phối.
- 16/11 kiểm toán đã ghi 5 phân phối hiệu lực (19/10,29/10,02/11,06/11,12/11 sau loại 15/10 đáo hạn). Phiên 17 giảm −0,59%, nhưng **CHƯA THỂ** xác định thêm phân phối hay không do chưa có giá trị KHỚP 17/11 so 16/11. Cấm đưa số phân phối giả.
- Giá đóng 17/11 =1.726,72 dưới MA20/MA50, nhưng kết luận trạng thái cuối bị **chặn ở cổng lõi**, không được đi vào bảng 7 yếu tố.

## IV. Cổng dữ liệu, quyết định xuất bản

**Cổng số liệu lõi: KHÔNG ĐẠT** — thiếu **giá trị khớp lệnh HOSE (không gồm thỏa thuận) đúng ngày 17/11**. Bất kỳ số lõi thiếu đều bắt buộc in:

**KHÔNG ĐỦ DỮ LIỆU — KHÔNG NHẬN ĐỊNH**

Đúng Prompt mục 0.7 và VII, **không chấm điểm 7 yếu tố, không quyết định CÓ/CHỜ/KHÔNG cho 17/11, không viết bài Zalo 250–400 chữ, không xuất bản nhận định VNINDEX ngày 17/11 vào website**, vì làm vậy phải dùng số giả hoặc số sai phạm vi. Chỉ cập nhật giá cổ phiếu EOD đã khóa độc lập.

## V. Kiểm toán hệ thống và EOD

- Lúc 15:02–15:05 kích hoạt workflow qua bảo trì comment đã chạy tới **16/11** do quy tắc tự bảo vệ `15:15`, xem run `44043540500`. Không coi run đó là EOD 17.
- Lượt đặt đích tạm 17/11 `44044393890` vượt EOD 135/135 nhưng bị chặn bởi hai bài test cố định ngày 16/11; CafeF chưa có đúng ngày cho NT2, hệ thống giữ snapshot NT2 16/11, không tự điền.
- Hai bài test được sửa từ cố định ngày sang đánh giá ngày EOD hiện hành và việc NT2 stale phải bị đánh dấu stale, **không bỏ kiểm thử**; một lỗi escape Regex của test đã được phát hiện, sửa lại trước khi xuất bản. Workflow đã **trả về cấu hình lịch tự động cũ**; không đổi lịch, ngưỡng giá, stop hay cấu trúc.
- Run thành công **`44045509869`** ngày 17/11 đã xác minh **135/135 mã**: tất cả đối chiếu giá đóng VNDIRECT với **KBS đúng ngày** (0 CafeF trực tiếp do CafeF chưa đăng dòng target); đã chạy toàn bộ bộ test, audit site, mutation/layout guard và post-deploy byte verification thành công. Link https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/44045509869 .
- Dữ liệu `src/data/research-data.js` `meta.updated = 2026-11-17`, `marketSession.date = 2026-11-17`; `src/data/individual-nt2-eod.json` còn ngày 16/11 do chưa có CafeF 17, đúng fail-safe.
- Không sửa `index.html`, `src/index.css`, thứ tự sections, vùng mua, stoploss hoặc vị thế lịch sử.

## VI. Tự kiểm liên quan ngày 17

| Tiêu chí | Kết quả |
|---|---|
| 1. Ngày giao dịch và mốc cắt | ĐẠT |
| 2. Không dùng phiên tương lai | ĐẠT |
| 3–4. Số trích nguồn mở thật | ĐẠT |
| 5. Toàn bộ số lõi đủ / cùng phạm vi | **KHÔNG ĐẠT (thiếu KHỚP 17/11)** |
| 6. Nhật ký tìm thiếu ba nguồn | ĐẠT |
| 7. Chuỗi phép tính một gốc | ĐẠT đối với chỉ số kiểm toán; không xuất báo cáo |
| 8–9. Không tự điền / sửa Sổ | ĐẠT |
| 10–11. Ngày và cổng chế độ | **Không vận hành bước chế độ do cổng lõi thất bại** |
| 12–17. Nền, điểm, veto, vùng mua, R:R | **Không thực hiện; đúng yêu cầu DỪNG** |
| 18. Bản đồ dòng tiền | Không xuất vì cổng lõi thất bại |
| 19. Đồng bộ web–Zalo và bảo toàn bố cục | ĐẠT về bảo vệ bố cục; **không phát hành nội dung VNINDEX 17** |
| 20. Sổ gốc | KHÔNG ĐẠT HOÀN TOÀN vì chưa được cung cấp |

**Về sau cần bổ sung nếu nguồn đúng phiên công bố:** giá trị KHỚP HOSE ngày 17/11 có ghi ngày, phạm vi và số, đối chiếu độc lập; sau đó tính phân phối, kiểm 7 yếu tố, chỉ khi đủ mới được đăng bản nhận định và Zalo. Tài liệu này không tuyên bố sẽ tự động hoàn thành sau cuộc trò chuyện.
