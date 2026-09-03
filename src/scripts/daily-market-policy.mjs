export const DAILY_PLAYBOOK_POLICY_START = "2026-09-03";
export const REQUIRED_DAILY_PLAYBOOK_LENGTH = 3;
export const DAILY_PLAYBOOK_STATE_ORDER = Object.freeze(["positive", "neutral", "risk_off"]);
export const DAILY_PLAYBOOK_STATE_META = Object.freeze({
  positive: Object.freeze({ label: "TĂNG DẦN", tone: "positive" }),
  neutral: Object.freeze({ label: "GIỮ / CHỜ", tone: "neutral" }),
  risk_off: Object.freeze({ label: "GIẢM RỦI RO", tone: "risk-off" }),
});

export function dailyPlaybookStateMeta(state) {
  return DAILY_PLAYBOOK_STATE_META[String(state || "")] || null;
}

export function validateDailyPlaybookPolicy(entry, options = {}) {
  const policyStart = options.policyStart || DAILY_PLAYBOOK_POLICY_START;
  const date = String(entry?.date || "");

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < policyStart) {
    return { applies: false, valid: true, message: "" };
  }

  if (!Array.isArray(entry?.playbook)) {
    return {
      applies: true,
      valid: false,
      message: `playbook bắt buộc là mảng đúng ${REQUIRED_DAILY_PLAYBOOK_LENGTH} trường hợp từ ${policyStart}.`,
    };
  }

  if (entry.playbook.length !== REQUIRED_DAILY_PLAYBOOK_LENGTH) {
    return {
      applies: true,
      valid: false,
      message: `playbook phải có đúng ${REQUIRED_DAILY_PLAYBOOK_LENGTH} trường hợp từ ${policyStart}; hiện có ${entry.playbook.length}.`,
    };
  }

  const malformed = entry.playbook.findIndex((item) => !String(item?.if || "").trim() || !String(item?.then || "").trim());
  if (malformed >= 0) {
    return {
      applies: true,
      valid: false,
      message: `playbook[${malformed}] thiếu điều kiện IF hoặc hành động THEN.`,
    };
  }

  const states = entry.playbook.map((item) => String(item?.state || ""));
  const unsupported = states.findIndex((state) => !dailyPlaybookStateMeta(state));
  if (unsupported >= 0) {
    return {
      applies: true,
      valid: false,
      message: `playbook[${unsupported}] thiếu state hợp lệ; chỉ dùng positive / neutral / risk_off.`,
    };
  }

  if (states.join("|") !== DAILY_PLAYBOOK_STATE_ORDER.join("|")) {
    return {
      applies: true,
      valid: false,
      message: `playbook phải khóa đúng thứ tự state: ${DAILY_PLAYBOOK_STATE_ORDER.join(" → ")}; hiện là ${states.join(" → ")}.`,
    };
  }

  return { applies: true, valid: true, message: "" };
}
