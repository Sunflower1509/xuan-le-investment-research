# Đặc tả displayBrief v3.0
Mở rộng tùy chọn ở cấp entry; giữ nguyên toàn bộ trường dữ liệu v1/v2 để tương thích quy trình hiện hành. Không chuyển đổi 71 bản gốc.
Bắt buộc khi dùng v3: schemaVersion=3, status (positive/neutral/cautious/defensive/insufficient_data), headline, conclusion, marketFacts, analysis, scenarios, dataQuality, sources. publishedAtIso tùy chọn (giờ Việt Nam hoặc ISO có offset). technicalLevels nếu có dữ liệu; context tùy chọn.
marketFacts:
- vnIndex: close, changePoints, changePct, sourceIds
- liquidity: matchedValue, unit, scope, sourceIds; averageComparison tùy chọn: period, changePct, scope, sourceIds. Chỉ đối chiếu cùng phạm vi.
- breadth: advancing, declining, unchanged, scope, sourceIds
- technical: positionVsMA20, positionVsMA50, ma20Slope, sourceIds
analysis: movement, implication, nextSession (không lặp số liệu).
scenarios: 3 phần tử state positive/neutral/risk_off theo thứ tự, condition, confirmation (nếu xác minh được), conclusion. Không biến kịch bản phục hồi thành tín hiệu mua tự động.
technicalLevels: type, label, value, note, sourceIds. Không suy diễn hoặc tự tạo mốc.
dataQuality: status, summary, limitations. sources: id, label, url.
Số liệu mới lưu dạng number; trường chưa xác minh để null hoặc bỏ; không điền 0 thay cho chưa có dữ liệu.
Kiểm thử: node --test tests/*.test.mjs; bash scripts/build/build-assets.sh; node scripts/audit-site.mjs; Playwright trong qa/visual. Chỉ merge sau kết quả đạt.
Rollback: revert commit/PR v3 trên nhánh main và chạy lại Pages; không reset hoặc sửa các bản tin lịch sử.
