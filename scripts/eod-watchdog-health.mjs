// Read-only health checks; no trading decisions or quote mutations.
import { isCoverageCurrent } from "./update-eod-market-data.mjs";

const iso = value => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  Number.isFinite(Date.parse(value + "T00:00:00Z")) &&
  new Date(value + "T00:00:00Z").toISOString().slice(0,10) === value;

export function inspectRepositorySession(data, target) {
  if (!iso(target)) throw new Error("Invalid target session");
  const current = data?.meta?.updated || "";
  if (current && !iso(current)) throw new Error("Invalid repository session date");
  if (!current || current < target) return {current, needsEod:true};
  const session = data?.marketSession;
  const complete = isCoverageCurrent(data?.coverage,current) && session?.date === current
    && ["VN-INDEX","VN30","HNX-INDEX"].every(code=>session.indices?.some(row=>row.code===code && Number.isFinite(row.close) && row.close>0))
    && ["advance","decline","unchanged"].every(key=>Number.isInteger(session.breadth?.[key]) && session.breadth[key]>=0);
  if (current > target && !complete) throw new Error("Newer repository session is incomplete; refuse rollback");
  return {current, needsEod:!complete};
}

export function readPublicSessionDate(html) {
  const match = /<p\b[^>]*\bdata-role=["']coverage-eod-label["'][^>]*>([^<]*)<\/p>/i.exec(html);
  const date = match?.[1]?.match(/\bEOD\s+(\d{2})\.(\d{2})\.(\d{4})\b/);
  const value = date ? date[3]+"-"+date[2]+"-"+date[1] : "";
  if (!iso(value)) throw new Error("Public EOD date marker missing or invalid");
  return value;
}

export function comparePublicSession(html,current) {
  if (!iso(current)) throw new Error("Invalid expected session");
  const liveDate = readPublicSessionDate(html);
  if (liveDate>current) throw new Error("Public session is newer; refuse rollback");
  return {liveDate,needsPages:liveDate<current};
}
