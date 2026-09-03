#!/usr/bin/env node

import fs from "node:fs";
import vm from "node:vm";

const file = "src/data/daily-insights.js";
const targetDate = "2026-09-03";
const targetId = "market-view-20260903";
const expectedPreviousUpdated = "2026-08-18";

const entry = `    {
      id: "market-view-20260903",
      date: "2026-09-03",
      publishedAt: "03/09/2026 • Sau phiên",
      edition: "Số 10",
      sentiment: "watch",
      sentimentLabel: "THẬN TRỌNG",
      dataStatus: "HOSE + VNDIRECT Finfo + CafeF • EOD 03.09.2026",
      title: "VN-Index hồi cuối phiên nhưng độ rộng yếu, chưa nên mua đuổi",
      thesis: "VN-Index giảm 4,40 điểm (-0,24%) còn 1.827,72 sau khi có lúc lùi về 1.802,11. Điểm số được VIC nâng đỡ đáng kể trong khi VN30 giảm 1,08%, độ rộng VNDIRECT nghiêng mạnh về bên giảm và khối ngoại bán ròng khoảng 1.531 tỷ đồng trên HoSE. Trạng thái tác nghiệp: THẬN TRỌNG, giữ tỷ trọng vừa phải và không mua đuổi; chỉ nâng rủi ro khi vùng 1.830–1.850 được hấp thụ với độ rộng và thanh khoản cải thiện.",
      author: "Xuân Lê TVS",
      role: "Môi giới và tư vấn đầu tư",
      readingTime: "2 phút đọc",
      metrics: [
        { label: "VN-INDEX", value: "1.827,72", change: "−4,40 • −0,24%", tone: "warning" },
        { label: "GTGD HOSE", value: "17.464,38 tỷ", change: "Khớp lệnh toàn sàn khoảng 14.696 tỷ", tone: "neutral" },
        { label: "ĐỘ RỘNG VNDIRECT", value: "90 tăng / 234 giảm", change: "49 đứng giá • áp lực bán chiếm ưu thế", tone: "warning" },
        { label: "KHỐI NGOẠI HOSE", value: "BÁN RÒNG", change: "Khoảng −1.531 tỷ đồng", tone: "warning" }
      ],
      backdrop: [
        "VN-Index có lúc giảm về 1.802,11 nhưng hồi lại 1.827,72 vào cuối phiên. Tuy nhiên VN30 giảm 1,08% và chỉ 6/30 mã tăng theo thống kê thị trường, cho thấy sức khỏe nhóm vốn hóa lớn yếu hơn mức giảm của VN-Index.",
        "VIC tăng khoảng 3,6% và riêng mã này được Báo Đầu tư ước tính kéo hơn 13 điểm cho VN-Index; vì vậy mức giảm 0,24% của chỉ số che bớt áp lực bán thực tế ở ngân hàng và chứng khoán.",
        "Dầu khí và phân bón giữ sức mạnh tương đối tốt hơn; ngược lại nhóm tài chính chịu áp lực rõ. Khối ngoại bán ròng khoảng 1.531 tỷ đồng trên HoSE, tập trung ở nhiều cổ phiếu vốn hóa lớn."
      ],
      levels: [
        { label: "Vùng phòng thủ ngắn hạn", value: "1.800–1.805", note: "Mốc 1.802,11 là đáy thực tế phiên 03/09. Nếu đóng cửa thủng vùng này, ưu tiên giảm rủi ro trading và không bình quân giá xuống cơ học." },
        { label: "Vùng cung / xác nhận", value: "1.830–1.850", note: "Đây là vùng áp lực cung đã được các bên phân tích cảnh báo trước phiên. Chỉ nâng mức xác nhận khi giá vượt vùng với độ rộng và thanh khoản cải thiện, không chỉ nhờ một vài cổ phiếu trụ." },
        { label: "Mốc đóng cửa", value: "1.827,72", note: "Đứng ngay dưới vùng 1.830–1.850; do độ rộng yếu và khối ngoại bán ròng mạnh, chưa đủ cơ sở để chuyển sang trạng thái mua chủ động toàn thị trường." }
      ],
      playbook: [
        { if: "VN-Index giữ trên 1.800–1.805 và độ rộng cải thiện rõ", then: "TIẾP TỤC GIỮ vị thế khỏe; chỉ mua thăm dò ở cổ phiếu có setup riêng và sức mạnh tương đối tốt, tuyệt đối không mua đuổi sau nhịp kéo mạnh." },
        { if: "VN-Index vượt 1.850 với thanh khoản và độ rộng cùng cải thiện, đồng thời áp lực bán ròng khối ngoại thu hẹp", then: "CÓ THỂ NÂNG DẦN mức giải ngân ở nhóm dẫn dắt xác nhận xu hướng; vẫn chia lệnh và tuân thủ stoploss từng mã." },
        { if: "Chỉ số tiếp tục dao động 1.830–1.850 nhưng số mã giảm vẫn áp đảo hoặc khối ngoại tiếp tục bán mạnh", then: "KHÔNG MUA ĐUỔI; ưu tiên bảo toàn lợi nhuận ở mã đã tăng nóng và chờ điểm vào có R:R tốt hơn." },
        { if: "VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng", then: "GIẢM phần trading, dừng bắt đáy sớm và đánh giá lại các setup ngắn hạn; không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }
      ],
      focus: "1.800–1.805 • vùng cung 1.830–1.850 • độ rộng • khối ngoại • ngân hàng/chứng khoán yếu • dầu khí/phân bón có sức mạnh tương đối",
      inference: "Số liệu chỉ số và giá trị giao dịch lấy từ điểm tin giao dịch HOSE ngày 03/09/2026; VN-Index 1.827,72, VN30 1.961,57 và GTGD VN-Index 17.464,38 tỷ đồng. Website tiếp tục dùng độ rộng VNDIRECT đã khóa cho cùng phiên là 90 tăng, 49 đứng giá, 234 giảm để nhất quán với marketSession; Báo Đầu tư ghi nhận độ rộng HoSE 93 tăng/236 giảm nên không hòa giải hai universe bằng suy đoán. Đáy phiên 1.802,11, diễn biến VIC, nhóm ngành và khối ngoại được đối chiếu với Báo Đầu tư/CafeF. Không bổ sung MA, basis phái sinh hoặc số liệu tự doanh vì chưa tái lập đủ nguồn trong lần cập nhật này. Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán.",
      sources: [
        { label: "VNDIRECT Finfo — chỉ số & độ rộng EOD 03/09/2026", url: "https://api-finfo.vndirect.com.vn/v4/vnmarket_prices?sort=code&q=date:2026-09-03&size=500" },
        { label: "HOSE — Điểm tin giao dịch ngày 03/09/2026 (CafeF đăng lại)", url: "https://cafef.vn/du-lieu/hose-2968500/hose-diem-tin-giao-dich-ngay-03092026.chn" },
        { label: "Báo Đầu tư — Chứng khoán phiên 3/9", url: "https://baodautu.vn/chung-khoan-phien-39-co-phieu-dau-khi-phan-bon-di-nguoc-chieu-trong-vn-index-phien-dieu-chinh-d693163.html" },
        { label: "CafeF — Khối ngoại bán ròng gần 1.500 tỷ đồng", url: "https://cafef.vn/khoi-ngoai-dot-ngot-ban-rong-gan-1500-ty-dong-phien-dau-thang-9-xa-manh-loat-co-phieu-ngan-hang-188260903152131269.chn" },
        { label: "Vietstock — vùng 1.830–1.850 trước phiên 03/09", url: "https://en.vietstock.vn/2026/09/vn-index-may-reach-1850-points-after-long-holidays-36-642320.htm" }
      ]
    },`;

function loadData(code) {
  const sandbox = { window: {} };
  vm.runInNewContext(code, sandbox, { filename: file });
  return sandbox.window.DAILY_MARKET_INSIGHTS;
}

function validate(data) {
  if (!data || typeof data !== "object") throw new Error("Không đọc được DAILY_MARKET_INSIGHTS");
  if (data.updated !== targetDate) throw new Error(`updated phải là ${targetDate}, nhận ${data.updated}`);
  const entries = Array.isArray(data.entries) ? data.entries : [];
  const dates = entries.map((row) => row.date);
  const ids = entries.map((row) => row.id);
  if (new Set(dates).size !== dates.length) throw new Error("Trùng ngày trong daily insights");
  if (new Set(ids).size !== ids.length) throw new Error("Trùng id trong daily insights");
  const target = entries.find((row) => row.id === targetId && row.date === targetDate);
  if (!target) throw new Error("Thiếu entry 03/09/2026 sau cập nhật");
  if (!target.thesis || target.sentimentLabel !== "THẬN TRỌNG") throw new Error("Entry 03/09 thiếu thesis/trạng thái đã khóa");
  if (!Array.isArray(target.sources) || target.sources.length < 4) throw new Error("Entry 03/09 thiếu nguồn kiểm chứng");
  for (const source of target.sources) {
    const url = new URL(source.url);
    if (url.protocol !== "https:") throw new Error(`Nguồn không phải HTTPS: ${source.url}`);
  }
}

let code = fs.readFileSync(file, "utf8");
let data = loadData(code);

if (data.entries?.some((row) => row.id === targetId || row.date === targetDate)) {
  validate(data);
  console.log(JSON.stringify({ status: "already-updated", updated: data.updated, entries: data.entries.length }, null, 2));
  process.exit(0);
}

if (data.updated !== expectedPreviousUpdated) {
  throw new Error(`Không cập nhật vì daily.updated hiện là ${data.updated}, khác mốc kỳ vọng ${expectedPreviousUpdated}`);
}

const updatedMarker = `  updated: "${expectedPreviousUpdated}",`;
const entriesMarker = "  entries: [\n";
if ((code.match(new RegExp(updatedMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length !== 1) {
  throw new Error("Không tìm thấy đúng một updated marker kỳ vọng");
}
if ((code.match(/  entries: \[\n/g) || []).length !== 1) {
  throw new Error("Không tìm thấy đúng một entries marker");
}

code = code.replace(updatedMarker, `  updated: "${targetDate}",`);
code = code.replace(entriesMarker, `${entriesMarker}${entry}\n`);

const after = loadData(code);
validate(after);
fs.writeFileSync(file, code);
console.log(JSON.stringify({ status: "updated", updated: after.updated, entries: after.entries.length, newest: after.entries[0]?.date }, null, 2));
