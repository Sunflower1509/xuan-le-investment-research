export const DAILY_PLAYBOOK_POLICY_START = "2026-09-03";
export const REQUIRED_DAILY_PLAYBOOK_LENGTH = 3;

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

  return { applies: true, valid: true, message: "" };
}
