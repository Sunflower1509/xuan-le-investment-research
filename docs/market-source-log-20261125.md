# Nhật ký nguồn sơ bộ 25/11/2026

- HOSE/Stockbiz 16:50:52: 1687,45 −9,69 −0,57%; VN30 −0,70%, VNMIDCAP −1,24%, VNSMALLCAP −0,89%; toàn sàn khớp 8809, thỏa thuận 7979, tổng 16788 tỷ; chỉ số VNINDEX GTGD 16091,20 tỷ. URL: https://web.stockbiz.vn/News/2026/11/25/1927143/hose-diem-tin-giao-dich-ngay-25-11-2026.aspx.
- VNIndex.ai: đóng cửa cùng số HOSE; MA20 = trung bình 20 giá đóng cửa 28/10–25/11 = 1723,846, MA50 = trung bình 50 giá đóng 16/09–25/11 = 1743,7578; MA20 5 phiên trước =1740,489; chênh −16,643 điểm. URL: https://vnindex.ai/vnindex-hom-nay.
- nmquan: 8431,6 tỷ khớp ngày 25/11; TB20 liền trước, 27/10–23/11 = 11452,575 tỷ, tỷ số 0,7362187; không chia 8809 cho TB20 nmquan. URL: https://nmquan.vn/data/chi-so/vn-index/lich-su.
- Độ rộng 84 tăng, 227 giảm, 53 đứng: https://taichinh.com/chung-khoan; trang có lỗi nhãn ngày so sánh 24/11; ngày 24/11 là nghỉ giao dịch, không sử dụng nhãn đó. VNIndex.ai tập 404 mã khác phạm vi.
- Không có Sổ gốc; chưa đối chiếu đủ ngoại khớp 5 phiên, basis, lịch sự kiện để chốt số phiên phân phối, MA200. Không tự lấp. Dữ liệu 136 mã chưa khóa tại lúc lập; không ghi đè giá cũ hoặc xác nhận đã triển khai. 

## Đối chiếu bổ sung
- BSC 25/11: VN-Index 1.687,45; -9,69 (-0,57%); khớp rổ VN-Index 8.786 tỷ, dưới MA20 thanh khoản 23,4%; MA20 giá 1.723,85. Độ rộng báo cáo 87/238/82 khác bộ 84/227/53 của taichinh.com. Không khẳng định hai phạm vi đồng nhất. https://www.bsc.com.vn/en/Report/ReportFile/16213
- BSC tổng ngoại HOSE −5.674,4 tỷ; VOH xác nhận số tổng trên 5.674 tỷ; không gán thành ngoại khớp ròng. https://voh.com.vn/kinh-te/khoi-ngoai-ban-rong-ky-luc-gan-5-700-ty-dong-trong-phien-25-11-682274.html
- HNX xác nhận 24/11 nghỉ và giao dịch trở lại 25/11. https://knowledge.hnx.vn/vi-vn/chi-tiet-lich-nghi-gd-60023839.html?_page=1
- Trang phiên VNIndex.ai riêng không truy cập lại được; giữ nguồn bảng lịch sử đã mở. Không dùng làm nguồn đối chiếu mới.
- Kiểm thử Visual smoke QA lần trước thất bại do thiếu signalParts/detailParts độ rộng; bổ sung đúng hợp đồng renderer, không sửa CSS hoặc bài test.

## Kiểm toán bổ sung — nguồn cố định và QA
- HOSE (25/11, 16:50:52): dòng VNINDEX 1687,45; -9,69; -0,57%; khớp toàn sàn 8809 tỷ; thỏa thuận 7979 tỷ; tổng 16788 tỷ. https://web.stockbiz.vn/News/2026/11/25/1927143/hose-diem-tin-giao-dich-ngay-25-11-2026.aspx
- Thời báo Tài chính Việt Nam (25/11, 17:28): 84 tăng, 227 giảm, 53 tham chiếu; chỉ số đóng 1687,45 (-0,57%). Bài có ngày cố định: https://thoibaotaichinhvietnam.vn/chung-khoan-ngay-25-11-luc-cau-suy-yeu-vn-index-quay-dau-giam-diem-207506.html. Thay link trang tổng hợp thay đổi theo ngày trong nội dung công khai. Chưa xác định được phạm vi đếm chi tiết giữa nguồn này và BSC, giữ số nguồn riêng biệt.
- VNIndex.ai bảng lịch sử đã mở: 25/11 đóng 1687,45; 23/11 đóng 1697,14; giá trị GD bao gồm thỏa thuận. https://vnindex.ai/vnindex-hom-nay
- Kiểm thử giao diện của commit 886a37e1a93d4ef35bf17de53aa1832a8a1bf4f5 đã hoàn tất thành công: https://github.com/Sunflower1509/xuan-le-investment-research/actions/runs/45612891124. Bản sửa nguồn tiếp theo cần kiểm thử lại; chưa hợp nhất nhánh chính.
