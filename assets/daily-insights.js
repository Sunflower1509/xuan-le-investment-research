/*
 * DAILY MARKET VIEW — cách cập nhật
 * 1) Sao chép một phần tử trong `entries`.
 * 2) Đổi `id`, `date` và nội dung; giữ ngày theo chuẩn YYYY-MM-DD.
 * 3) Đặt bản mới ở bất kỳ vị trí nào: website luôn tự sắp xếp mới nhất lên đầu.
 * 4) Chỉ nhập số liệu đã xác minh và luôn bổ sung đường dẫn trong `sources`.
 */
window.DAILY_MARKET_INSIGHTS = {
  updated: "2026-07-21T08:00:00+07:00",
  entries: [
    {
      id: "market-view-20260720",
      date: "2026-07-20",
      publishedAt: "21/07/2026 • 08:00",
      edition: "Số 02",
      sentiment: "cautious",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "Dữ liệu khóa cuối phiên",
      title: "Ưu tiên kiểm soát rủi ro sau phiên giảm rộng",
      thesis: "Áp lực bán lan rộng trong khi giá trị khớp lệnh tăng mạnh cho thấy bên bán chiếm ưu thế rõ rệt trong phiên 20/07. Quan điểm tác nghiệp là bảo toàn sức mua, chờ thị trường tạo cân bằng và không coi một nhịp hồi đơn lẻ là xác nhận đảo chiều.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "4 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.743,51", change: "−43,94 • −2,46%", tone: "negative" },
        { label: "KHỚP LỆNH HOSE", value: "17.883 tỷ", change: "+69,64% so với phiên trước", tone: "warning" },
        { label: "ĐỘ RỘNG HOSE", value: "45 / 26 / 296", change: "tăng / tham chiếu / giảm", tone: "negative" },
        { label: "KHỐI NGOẠI HOSE", value: "−45,94 tỷ", change: "bán ròng", tone: "neutral" }
      ],
      backdrop: [
        "VN-Index đóng cửa tại 1.743,51 điểm; biên độ trong ngày là 1.733,25–1.787,45 điểm.",
        "VCB, VHM, BID, TCB và HPG là năm mã kéo giảm chỉ số nhiều nhất theo BSC.",
        "Thanh khoản tăng trong một phiên giảm sâu là tín hiệu cần ưu tiên quản trị vị thế hơn là dự đoán đáy."
      ],
      levels: [
        { label: "Mốc kiểm chứng gần", value: "1.733,25", note: "Đáy trong phiên 20/07; dùng để theo dõi phản ứng cung–cầu, không mặc định là hỗ trợ bền vững." },
        { label: "Điều kiện cải thiện", value: "Độ rộng + thanh khoản", note: "Cần thấy số mã tăng mở rộng và áp lực bán không còn tăng cùng thanh khoản." }
      ],
      playbook: [
        { if: "VN-Index giữ trên đáy 20/07 và độ rộng cải thiện", then: "Theo dõi quá trình tạo cân bằng; chỉ chọn lọc mã thỏa đồng thời vùng mua và điều kiện riêng trong báo cáo." },
        { if: "Chỉ số đóng cửa dưới 1.733,25 hoặc độ rộng giảm tiếp tục áp đảo", then: "Ưu tiên giảm rủi ro, không bình quân giá xuống cơ học và chưa mở vị thế chỉ vì giá đã giảm mạnh." }
      ],
      focus: "Trụ ảnh hưởng mạnh: VCB • VHM • BID • TCB • HPG",
      inference: "Phần chiến lược và điều kiện IF–THEN là suy luận phân tích từ dữ liệu phiên, không phải dữ liệu do nguồn công bố và không phải cam kết lợi nhuận.",
      sources: [
        { label: "BSC Brief 20.07", url: "https://www.bsc.com.vn/bao-cao/15664-bsc-brief-20-07-thi-truong-chim-trong-sac-do/" },
        { label: "Dữ liệu lịch sử VN-Index", url: "https://id.investing.com/indices/vn-historical-data" },
        { label: "Đối chiếu diễn biến phiên", url: "https://vtcnews.vn/vn-index-boc-hoi-gan-44-diem-ar1030123.html" }
      ]
    },
    {
      id: "market-view-20260717",
      date: "2026-07-17",
      publishedAt: "17/07/2026 • Sau phiên",
      edition: "Số 01",
      sentiment: "watch",
      sentimentLabel: "THEO DÕI",
      dataStatus: "Bản lưu trữ",
      title: "Động lực tăng suy yếu, thị trường cần thêm xác nhận",
      thesis: "VN-Index khép tuần dưới vùng 1.800–1.810 điểm trong khi khu vực MA200 quanh 1.770 điểm tạo điểm tựa tạm thời. Trạng thái ngắn hạn chưa đủ mạnh để nâng mức rủi ro danh mục.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "3 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.787,45", change: "−16,79 • −0,93%", tone: "negative" },
        { label: "THẤP NHẤT PHIÊN", value: "1.779,58", change: "dữ liệu lịch sử", tone: "neutral" },
        { label: "VÙNG THEO DÕI", value: "quanh 1.770", change: "MA200 theo SSI Research", tone: "warning" },
        { label: "VÙNG CẢN GẦN", value: "1.800–1.810", change: "cần vượt để cải thiện", tone: "neutral" }
      ],
      backdrop: [
        "Chỉ số lùi dưới vùng 1.800–1.810 và áp lực cung tiếp tục chiếm ưu thế.",
        "MA200 quanh 1.770 điểm mới đóng vai trò điểm tựa tạm thời, chưa phải xác nhận đảo chiều.",
        "Ưu tiên quan sát mức độ đồng thuận của thanh khoản và độ rộng khi chỉ số thử phục hồi."
      ],
      levels: [
        { label: "Điểm tựa tạm thời", value: "quanh 1.770", note: "MA200 ngày theo bản tin SSI Research ngày 17/07/2026." },
        { label: "Vùng cần chinh phục", value: "1.800–1.810", note: "Cần vượt để trạng thái ngắn hạn cải thiện rõ hơn." }
      ],
      playbook: [
        { if: "Chỉ số lấy lại 1.800–1.810 với thanh khoản và độ rộng đồng thuận", then: "Đánh giá lại mức độ chấp nhận rủi ro và tập trung vào cổ phiếu dẫn dắt." },
        { if: "Áp lực cung tiếp tục chiếm ưu thế quanh MA200", then: "Giữ tỷ trọng thận trọng và chờ thêm dữ liệu xác nhận." }
      ],
      focus: "Trọng tâm: phản ứng tại MA200 • độ rộng • thanh khoản",
      inference: "Phần chiến lược IF–THEN là suy luận tác nghiệp từ dữ liệu và nhận định kỹ thuật được dẫn nguồn.",
      sources: [
        { label: "SSI Research 17.07", url: "https://www.ssi.com.vn/khach-hang-ca-nhan/ban-tin-thi-truong" },
        { label: "Dữ liệu lịch sử VN-Index", url: "https://id.investing.com/indices/vn-historical-data" }
      ]
    }
  ]
};
