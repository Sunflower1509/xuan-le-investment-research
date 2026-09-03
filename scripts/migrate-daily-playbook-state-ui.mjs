#!/usr/bin/env node

import fs from "node:fs";

const read = (path) => fs.readFileSync(path, "utf8");
const write = (path, value) => fs.writeFileSync(path, value);
const replaceOnce = (source, needle, replacement, scope) => {
  const first = source.indexOf(needle);
  if (first < 0) throw new Error(`${scope}: expected source block not found`);
  if (source.indexOf(needle, first + needle.length) >= 0) throw new Error(`${scope}: expected source block is not unique`);
  return source.slice(0, first) + replacement + source.slice(first + needle.length);
};

const dailyPath = "src/data/daily-insights.js";
let daily = read(dailyPath);
const oldPlaybook = `      playbook: [\n        { if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.850, đồng thời độ rộng và thanh khoản cùng cải thiện; không xuất hiện VETO rủi ro mới", then: "NÂNG DẦN TỶ TRỌNG ở cổ phiếu dẫn dắt/setup đã xác nhận; chia lệnh và không mua đuổi." },\n        { if: "CHƯA XÁC NHẬN / ĐI NGANG — VN-Index vẫn giữ trên vùng 1.800–1.805 nhưng chưa đủ điều kiện xác nhận vượt 1.850, hoặc độ rộng/thanh khoản chưa đồng thuận", then: "GIỮ TỶ TRỌNG VỪA PHẢI, tiếp tục nắm mã khỏe; chỉ thăm dò setup có R:R tốt và không mua đuổi." },\n        { if: "MẤT MỐC PHÒNG THỦ / RISK-OFF — VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng / xuất hiện VETO rõ", then: "GIẢM PHẦN TRADING, dừng bắt đáy sớm và không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }\n      ],`;
const newPlaybook = `      playbook: [\n        { state: "positive", if: "XÁC NHẬN TÍCH CỰC — VN-Index đóng vượt 1.850, đồng thời độ rộng và thanh khoản cùng cải thiện; không xuất hiện VETO rủi ro mới", then: "NÂNG DẦN TỶ TRỌNG ở cổ phiếu dẫn dắt/setup đã xác nhận; chia lệnh và không mua đuổi." },\n        { state: "neutral", if: "CHƯA XÁC NHẬN / ĐI NGANG — VN-Index vẫn giữ trên vùng 1.800–1.805 nhưng chưa đủ điều kiện xác nhận vượt 1.850, hoặc độ rộng/thanh khoản chưa đồng thuận", then: "GIỮ TỶ TRỌNG VỪA PHẢI, tiếp tục nắm mã khỏe; chỉ thăm dò setup có R:R tốt và không mua đuổi." },\n        { state: "risk_off", if: "MẤT MỐC PHÒNG THỦ / RISK-OFF — VN-Index đóng dưới 1.800 hoặc xuyên đáy 1.802,11 với áp lực bán mở rộng / xuất hiện VETO rõ", then: "GIẢM PHẦN TRADING, dừng bắt đáy sớm và không bình quân giá xuống khi chưa có tín hiệu hấp thụ cung." }\n      ],`;
daily = replaceOnce(daily, oldPlaybook, newPlaybook, dailyPath);
write(dailyPath, daily);

const policyPath = "src/scripts/daily-market-policy.mjs";
const policy = `export const DAILY_PLAYBOOK_POLICY_START = "2026-09-03";\nexport const REQUIRED_DAILY_PLAYBOOK_LENGTH = 3;\nexport const DAILY_PLAYBOOK_STATE_ORDER = Object.freeze(["positive", "neutral", "risk_off"]);\nexport const DAILY_PLAYBOOK_STATE_META = Object.freeze({\n  positive: Object.freeze({ label: "TĂNG DẦN", tone: "positive" }),\n  neutral: Object.freeze({ label: "GIỮ / CHỜ", tone: "neutral" }),\n  risk_off: Object.freeze({ label: "GIẢM RỦI RO", tone: "risk-off" }),\n});\n\nexport function dailyPlaybookStateMeta(state) {\n  return DAILY_PLAYBOOK_STATE_META[String(state || "")] || null;\n}\n\nexport function validateDailyPlaybookPolicy(entry, options = {}) {\n  const policyStart = options.policyStart || DAILY_PLAYBOOK_POLICY_START;\n  const date = String(entry?.date || "");\n\n  if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(date) || date < policyStart) {\n    return { applies: false, valid: true, message: "" };\n  }\n\n  if (!Array.isArray(entry?.playbook)) {\n    return {\n      applies: true,\n      valid: false,\n      message: \`playbook bắt buộc là mảng đúng \${REQUIRED_DAILY_PLAYBOOK_LENGTH} trường hợp từ \${policyStart}.\`,\n    };\n  }\n\n  if (entry.playbook.length !== REQUIRED_DAILY_PLAYBOOK_LENGTH) {\n    return {\n      applies: true,\n      valid: false,\n      message: \`playbook phải có đúng \${REQUIRED_DAILY_PLAYBOOK_LENGTH} trường hợp từ \${policyStart}; hiện có \${entry.playbook.length}.\`,\n    };\n  }\n\n  const malformed = entry.playbook.findIndex((item) => !String(item?.if || "").trim() || !String(item?.then || "").trim());\n  if (malformed >= 0) {\n    return {\n      applies: true,\n      valid: false,\n      message: \`playbook[\${malformed}] thiếu điều kiện IF hoặc hành động THEN.\`,\n    };\n  }\n\n  const states = entry.playbook.map((item) => String(item?.state || ""));\n  const unsupported = states.findIndex((state) => !dailyPlaybookStateMeta(state));\n  if (unsupported >= 0) {\n    return {\n      applies: true,\n      valid: false,\n      message: \`playbook[\${unsupported}] thiếu state hợp lệ; chỉ dùng positive / neutral / risk_off.\`,\n    };\n  }\n\n  if (states.join("|") !== DAILY_PLAYBOOK_STATE_ORDER.join("|")) {\n    return {\n      applies: true,\n      valid: false,\n      message: \`playbook phải khóa đúng thứ tự state: \${DAILY_PLAYBOOK_STATE_ORDER.join(" → ")}; hiện là \${states.join(" → ")}.\`,\n    };\n  }\n\n  return { applies: true, valid: true, message: "" };\n}\n`;
write(policyPath, policy);

const appPath = "src/scripts/app.js";
let app = read(appPath);
app = replaceOnce(
  app,
  `import { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";\n`,
  `import { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";\nimport { dailyPlaybookStateMeta } from "./daily-market-policy.mjs";\n`,
  `${appPath} import`,
);
const oldMeta = `  const dailyActionMeta = (value) => {\n    const text = normalize(value).replaceAll("đ", "d");\n    if (/khong mua duoi|tuyet doi khong mua/.test(text)) return { label: "KHÔNG MUA ĐUỔI", tone: "avoid" };\n    if (/tham do/.test(text)) return { label: "THĂM DÒ NHỎ", tone: "probe" };\n    if (/giam|ha margin|dung mua|huy view|phong thu/.test(text)) return { label: "GIẢM RỦI RO", tone: "defensive" };\n    if (/giu|nam giu/.test(text)) return { label: "GIỮ", tone: "hold" };\n    if (/mua xac nhan|gia tang|co the mua|mo vi the|mua/.test(text)) return { label: "MUA CÓ ĐIỀU KIỆN", tone: "conditional" };\n    return { label: "CHỜ XÁC NHẬN", tone: "wait" };\n  };`;
const newMeta = `  const dailyLegacyActionMeta = (value) => {\n    const text = normalize(value).replaceAll("đ", "d");\n    if (/khong mua duoi|tuyet doi khong mua/.test(text)) return { label: "KHÔNG MUA ĐUỔI", tone: "avoid" };\n    if (/tham do/.test(text)) return { label: "THĂM DÒ NHỎ", tone: "probe" };\n    if (/giam|ha margin|dung mua|huy view|phong thu/.test(text)) return { label: "GIẢM RỦI RO", tone: "defensive" };\n    if (/giu|nam giu/.test(text)) return { label: "GIỮ", tone: "hold" };\n    if (/mua xac nhan|gia tang|co the mua|mo vi the|mua/.test(text)) return { label: "MUA CÓ ĐIỀU KIỆN", tone: "conditional" };\n    return { label: "CHỜ XÁC NHẬN", tone: "wait" };\n  };\n\n  const dailyActionMeta = (item) => dailyPlaybookStateMeta(item?.state) || dailyLegacyActionMeta(item?.then);`;
app = replaceOnce(app, oldMeta, newMeta, `${appPath} action meta`);
app = replaceOnce(app, `          const action = dailyActionMeta(item.then);`, `          const action = dailyActionMeta(item);`, `${appPath} render call`);
write(appPath, app);

const cssPath = "src/styles/site.css";
let css = read(cssPath);
const oldClasses = `.daily-action-row{--action:#51606a;--action-soft:#eef1f2;border:1px solid var(--line);border-left:3px solid var(--action);background:#fff;box-shadow:0 6px 18px rgba(8,28,49,.035);border-radius:11px;grid-template-columns:140px minmax(0,.9fr) minmax(0,1.12fr);display:grid;overflow:hidden}\n.daily-action-row.hold{--action:var(--emerald);--action-soft:var(--emerald-pale)}\n.daily-action-row.probe,.daily-action-row.wait{--action:#a97718;--action-soft:var(--gold-pale)}\n.daily-action-row.avoid,.daily-action-row.defensive{--action:var(--red);--action-soft:var(--red-pale)}\n.daily-action-row.conditional{--action:#08785a;--action-soft:#e5f4ef}`;
const newClasses = `.daily-action-row{--action:#51606a;--action-soft:#eef1f2;border:1px solid var(--line);border-left:3px solid var(--action);background:#fff;box-shadow:0 6px 18px rgba(8,28,49,.035);border-radius:11px;grid-template-columns:140px minmax(0,.9fr) minmax(0,1.12fr);display:grid;overflow:hidden}\n.daily-action-row.positive{--action:#0f766e;--action-soft:#ecfdf5}\n.daily-action-row.neutral{--action:#a16207;--action-soft:#fffbeb}\n.daily-action-row.risk-off{--action:#b42318;--action-soft:#fef2f2}\n.daily-action-row.hold{--action:var(--emerald);--action-soft:var(--emerald-pale)}\n.daily-action-row.probe,.daily-action-row.wait{--action:#a97718;--action-soft:var(--gold-pale)}\n.daily-action-row.avoid,.daily-action-row.defensive{--action:var(--red);--action-soft:var(--red-pale)}\n.daily-action-row.conditional{--action:#08785a;--action-soft:#e5f4ef}`;
css = replaceOnce(css, oldClasses, newClasses, `${cssPath} state palette`);
const oldLabels = `.daily-action-condition small,.daily-action-decision small{color:var(--gold);letter-spacing:.12em;font-size:.52rem;font-weight:900;display:block}\n.daily-action-decision small{color:var(--emerald)}`;
const newLabels = `.daily-action-condition small,.daily-action-decision small{color:var(--daily-muted);letter-spacing:.12em;font-size:.52rem;font-weight:900;display:block}\n.daily-action-decision small{color:var(--action)}`;
css = replaceOnce(css, oldLabels, newLabels, `${cssPath} KHI/THI hierarchy`);
write(cssPath, css);

console.log("Daily playbook state UI migration applied successfully.");
