#!/usr/bin/env node

import fs from "node:fs";

const dailyPath = "src/data/daily-insights.js";
const auditPath = "scripts/audit-site.mjs";

const oldPlaybook = `      playbook: [
        { if: "VN-Index giữ trên 1.800–1.805 và độ rộng cải thiện rõ", then: "TIẾP TỤC GIỮ vị thế khỏe; chỉ mua thăm dò ở cổ phiếu có setup riêng và sức mạnh tương đối tốt, tuyệt đối không mua đuổi sau nhịp kéo mạnh." },
        { if: "VN-Index vượt 1.850 với thanh khoản và độ rộng cùng cải thiện, đồng thời áp lực bán ròng khối ngoại thu hẹp", then: "CÓ THỂ NÂNG DẦN mức giải ngân ở nhóm dẫn dắt xác nhận xu hướng; vẫn chia lệnh và tuân thủ stoploss từng mã." },
        { if: "Chỉ số tiếp tục dao động 1.830–1.850 nhưng số mã giảm vẫn áp đảo hoặc khối ngoại tiếp tục bán mạnh", then: "KHÔNG MUA ĐUỔI; ưu tiên bảo toàn lợi nhuận ở mã đã tăng nóng và chờ điểm vào có R:R tốt hơn." },
        { if: "VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng", then: "GIẢM phần trading, dừng bắt đáy sớm và đánh giá lại các setup ngắn hạn; không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }
      ],`;

const newPlaybook = `      playbook: [
        { if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.850, đồng thời độ rộng và thanh khoản cùng cải thiện; không xuất hiện VETO rủi ro mới", then: "NÂNG DẦN TỶ TRỌNG ở cổ phiếu dẫn dắt/setup đã xác nhận; chia lệnh và không mua đuổi." },
        { if: "CHƯA XÁC NHẬN / ĐI NGANG — VN-Index vẫn giữ trên vùng 1.800–1.805 nhưng chưa đủ điều kiện xác nhận vượt 1.850, hoặc độ rộng/thanh khoản chưa đồng thuận", then: "GIỮ TỶ TRỌNG VỪA PHẢI, tiếp tục nắm mã khỏe; chỉ thăm dò setup có R:R tốt và không mua đuổi." },
        { if: "MẤT MỐC PHÒNG THỦ / RISK-OFF — VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng / xuất hiện VETO rõ", then: "GIẢM PHẦN TRADING, dừng bắt đáy sớm và không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }
      ],`;

let daily = fs.readFileSync(dailyPath, "utf8");
if (!daily.includes(oldPlaybook)) {
  throw new Error("Daily insight 03/09 không còn khớp baseline 4-state đã khóa; dừng để tránh sửa nhầm dữ liệu.");
}
daily = daily.replace(oldPlaybook, newPlaybook);
if ((daily.match(/id: "market-view-20260903"/g) || []).length !== 1) {
  throw new Error("Không xác định duy nhất market-view-20260903.");
}
fs.writeFileSync(dailyPath, daily);

let audit = fs.readFileSync(auditPath, "utf8");
const importNeedle = `import { parseActionTrigger } from "../src/scripts/action-trigger.mjs";\n`;
const importReplacement = `${importNeedle}import { validateDailyPlaybookPolicy } from "../src/scripts/daily-market-policy.mjs";\n`;
if (!audit.includes(importNeedle)) throw new Error("Không tìm thấy điểm chèn import daily-market-policy trong audit-site.mjs.");
if (!audit.includes("validateDailyPlaybookPolicy")) audit = audit.replace(importNeedle, importReplacement);

const auditNeedle = `    if (!isIsoDate(entry.date) || !entry.title || !entry.thesis) fail(scope, "thiếu ngày, tiêu đề hoặc luận điểm chính");\n    if (!Array.isArray(entry.sources) || !entry.sources.length) fail(scope, "phải có ít nhất một nguồn");\n`;
const auditReplacement = `    if (!isIsoDate(entry.date) || !entry.title || !entry.thesis) fail(scope, "thiếu ngày, tiêu đề hoặc luận điểm chính");\n    const playbookPolicy = validateDailyPlaybookPolicy(entry);\n    if (!playbookPolicy.valid) fail(scope, playbookPolicy.message);\n    if (!Array.isArray(entry.sources) || !entry.sources.length) fail(scope, "phải có ít nhất một nguồn");\n`;
if (!audit.includes(auditNeedle)) throw new Error("Không tìm thấy điểm chèn validator playbook trong audit-site.mjs.");
audit = audit.replace(auditNeedle, auditReplacement);
fs.writeFileSync(auditPath, audit);

console.log("Applied 3-state daily market policy to 03/09 and wired site audit validator.");