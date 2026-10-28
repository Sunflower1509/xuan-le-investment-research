# Quy tắc loại tự động khỏi Danh mục tham khảo đầu tư

**Phiên bản chính sách:** `eod-midpoint-stop-v1`  
**Có hiệu lực:** 28/10/2026, từ bản giá EOD được xác minh  
**Phạm vi:** Danh mục tham khảo công khai (không phải sổ giao dịch thực tế)

## 1. Quy tắc bắt buộc

- Vùng mua do chủ website xác lập bằng AmiBroker, lưu tại `src/data/reference-portfolio.mjs`.
- Mốc chuẩn là trung bình số học chưa làm tròn: `(zoneLow + zoneHigh) / 2`.
- **Loại khỏi danh mục theo dõi khi giá đóng cửa EOD <= 95% mốc chuẩn** (chênh lệch từ -5%).
- Chênh lệch từ **-7% trở xuống** được ghi `critical-7`; còn lại dùng `stop-5`. Cả hai đều phải loại.
- Chỉ dùng giá hợp lệ có cùng ngày với `RESEARCH_DATA.meta.updated` và nguồn HTTPS theo quy trình đối chiếu EOD chung.
- Không xử lý giá trong phiên, giá chưa xác minh, dữ liệu thiếu, hoặc giá có ngày không khớp.
- Mã đã loại không tự quay lại khi giá tăng. Không ghi đè hay xóa lịch sử loại.
- Không điều chỉnh vùng mua theo biến động giá; không sửa định giá, Trade Ledger hoặc tự tạo lệnh bán.

## 2. Mẫu sự kiện bất biến

Dữ liệu lưu trong `src/data/reference-portfolio-exits.json`, mỗi mã tối đa một sự kiện loại cho phiên bản theo dõi hiện tại. Sự kiện ghi: mã, ngày EOD, giá tại ngày loại, giá trung bình vùng mua, ngưỡng -5% chưa làm tròn, chênh lệch %, mức độ, nguồn giá, phiên bản vùng và chính sách.

Sự kiện đầu tiên: **DGW ngày 28/10/2026**, giá đóng cửa 42.350 đồng/cp, giá TB vùng 46.750 đồng/cp, chênh lệch -9,41%; mức độ `critical-7`.

Không dùng mức giảm từ giá TB làm lợi nhuận/lỗ thực tế của tài khoản. Một ngưỡng tham chiếu không bảo đảm khả năng bán đúng giá; lệnh thực tế phụ thuộc giá khớp, thanh khoản và trượt giá.

## 3. Quy trình EOD tự động

1. Workflow `.github/workflows/eod-daily.yml` khóa EOD theo quy trình xác minh hiện có.
2. Chạy `node scripts/process-reference-portfolio-exits.mjs` sau khi có giá EOD hợp lệ.
3. Nếu phát sinh vi phạm, thêm sự kiện vào JSON và đưa file vào commit EOD cùng dữ liệu giá.
4. `scripts/audit-site.mjs` từ chối bản phát hành nếu có mã chạm ngưỡng nhưng chưa ghi sự kiện loại.
5. Website công khai chỉ hiển thị các mã chưa có sự kiện loại tại bộ lọc `Đang theo dõi`. Bộ lọc `Đã loại (lịch sử)` hiển thị dữ liệu tại ngày loại, không chạy theo giá mới.
6. Workflow `.github/workflows/pages.yml` cũng chạy bộ xử lý trước kiểm thử và phát hành để không bỏ sót khi có cập nhật thủ công.

Cơ chế xử lý là **idempotent**: chạy lại cùng một ngày không phát sinh sự kiện trùng.

## 4. Xử lý ngoại lệ và thay đổi chính sách

- Nếu thiếu giá hoặc sai nguồn, phải chặn xuất bản dữ liệu rủi ro mới; không tự loại theo giá suy đoán.
- Nếu dữ liệu điều chỉnh quyền cổ đông chưa đồng nhất với vùng AmiBroker, cần thẩm định và cập nhật vùng có phê duyệt trước khi dùng.
- Muốn theo dõi lại một mã đã loại phải có **quyết định phê duyệt mới và hồ sơ/vùng mua phiên bản mới**; lịch sử cũ không bị xóa. Việc mở lại một chu kỳ theo dõi mới đòi hỏi đặc tả và kiểm thử riêng, **không tự thao tác vào file lịch sử**.
- Các mốc -5% và -7% là chính sách theo dõi công khai. Không giả định đã đặt lệnh bán hay xác nhận giao dịch thực tế.

## 5. Nghiệm thu

Chạy `node --test tests/*.test.mjs`, `node scripts/process-reference-portfolio-exits.mjs`, `node scripts/audit-site.mjs` trong quy trình build đã thiết lập. Kiểm tra desktop/mobile, quyền truy cập bộ lọc, giá/nguồn/ngày loại, tính bất biến lịch sử và kết quả build/Pages sau triển khai.

Các cập nhật thiết kế khác không được sửa hoặc xóa hệ thống loại tự động nếu chưa được phê duyệt.
