import { projectTradeLedger } from "./trade-ledger.mjs";
import { distanceToTrigger, triggerDisplayModel } from "./action-trigger.mjs";
import {
  buildPriorityUniverse,
  latestReportDates,
  openPositionTickers,
  priorityDistanceText,
  priorityRelationDescription,
  priorityRelationLabel,
  valuationBase
} from "./priority-engine.mjs";

(() => {
  "use strict";

  const source = window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.reports) || !Array.isArray(source.coverage)) return;
  const dailySource = window.DAILY_MARKET_INSIGHTS;
  const tradeLedgerSource = window.TRADE_LEDGER || { meta: {}, events: [] };

  const reports = [...source.reports];
  const coverage = [...source.coverage];
  const reportById = new Map(reports.map((report) => [report.id, report]));
  const coverageByTicker = new Map(coverage.map((item) => [item.ticker, item]));
  const latestByTicker = new Map();
  [...reports]
    .sort((a, b) => b.date.localeCompare(a.date) || Number(a.reportType === "trading") - Number(b.reportType === "trading"))
    .forEach((report) => {
      if (!latestByTicker.has(report.ticker)) latestByTicker.set(report.ticker, report);
    });

  const ledgerProjection = projectTradeLedger(tradeLedgerSource, coverage);
  const priorityContext = {
    openTickers: openPositionTickers(ledgerProjection),
    reportDates: latestReportDates(reports),
    asOfDate: source.meta.updated
  };

  const getStoredSet = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      return new Set(Array.isArray(value) ? value : []);
    } catch {
      return new Set();
    }
  };

  const state = {
    tab: "reports",
    query: "",
    sector: "all",
    status: "all",
    sort: "newest",
    view: "grid",
    ledgerTab: "open",
    watchlist: getStoredSet("xltvs-watchlist-v1"),
    compare: new Set()
  };

  const refs = {
    results: document.querySelector("[data-role='research-results']"),
    empty: document.querySelector("[data-role='empty-state']"),
    summary: document.querySelector("[data-role='results-summary']"),
    search: document.querySelector("#research-search"),
    sort: document.querySelector("#research-sort"),
    sectorFilters: document.querySelector("[data-role='sector-filters']"),
    statusFilters: document.querySelector("[data-role='status-filters']"),
    reportDialog: document.querySelector("#report-dialog"),
    reportDialogContent: document.querySelector("[data-role='report-dialog-content']"),
    compareDialog: document.querySelector("#compare-dialog"),
    compareContent: document.querySelector("[data-role='compare-content']"),
    watchlistDialog: document.querySelector("#watchlist-dialog"),
    watchlistContent: document.querySelector("[data-role='watchlist-content']"),
    commandDialog: document.querySelector("#command-dialog"),
    commandInput: document.querySelector("#command-input"),
    commandResults: document.querySelector("[data-role='command-results']"),
    compareDock: document.querySelector("[data-role='compare-dock']"),
    compareTickers: document.querySelector("[data-role='compare-tickers']"),
    prioritySummary: document.querySelector("[data-role='priority-summary']"),
    priorityGrid: document.querySelector("[data-role='priority-grid']"),
    actionTable: document.querySelector("[data-role='action-table']"),
    exclusionList: document.querySelector("[data-role='exclusion-list']"),
    dailyInsight: document.querySelector("[data-role='daily-insight']"),
    dailyArchive: document.querySelector("[data-role='daily-archive-list']"),
    dailyIssueCount: document.querySelector("[data-role='daily-issue-count']"),
    ledgerSummary: document.querySelector("[data-role='position-ledger-summary']"),
    ledgerContent: document.querySelector("[data-role='position-ledger-content']"),
    ledgerPending: document.querySelector("[data-role='position-ledger-pending']"),
    ledgerIssues: document.querySelector("[data-role='position-ledger-issues']"),
    ledgerAsOf: document.querySelector("[data-role='ledger-asof']"),
    toast: document.querySelector("[data-role='toast']")
  };

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalize = (value) => String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("vi")
    .trim();

  const number = (value) => Number.isFinite(value)
    ? new Intl.NumberFormat("vi-VN").format(value)
    : "—";

  const decimal = (value, digits = 1) => Number.isFinite(value)
    ? new Intl.NumberFormat("vi-VN", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value)
    : "—";

  const signedPercent = (value) => Number.isFinite(value)
    ? `${value > 0 ? "+" : value < 0 ? "−" : ""}${decimal(Math.abs(value), 2)}%`
    : "—";

  const percentOfPosition = (value) => Number.isFinite(value)
    ? `${decimal(value * 100, 0)}% vị thế`
    : "—";

  const valueLabel = (report) => report?.valueLabel || "Giá trị cơ sở";

  const marketTone = (value) => !Number.isFinite(value) ? "neutral" : value < 0 ? "negative" : value > 0 ? "positive" : "neutral";

  const date = (value) => {
    if (!value) return "—";
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  };

  const dailyEntries = Array.isArray(dailySource?.entries)
    ? [...dailySource.entries].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
    : [];
  let activeDailyId = dailyEntries[0]?.id || null;

  const DAILY_DISCLAIMER = "Nội dung mang tính tham khảo, không phải khuyến nghị mua/bán; nhà đầu tư tự chịu trách nhiệm với quyết định của mình.";

  const dailyActionMeta = (value) => {
    const text = normalize(value).replaceAll("đ", "d");
    if (/khong mua duoi|tuyet doi khong mua/.test(text)) return { label: "KHÔNG MUA ĐUỔI", tone: "avoid" };
    if (/tham do/.test(text)) return { label: "THĂM DÒ NHỎ", tone: "probe" };
    if (/giam|ha margin|dung mua|huy view|phong thu/.test(text)) return { label: "GIẢM RỦI RO", tone: "defensive" };
    if (/giu|nam giu/.test(text)) return { label: "GIỮ", tone: "hold" };
    if (/mua xac nhan|gia tang|co the mua|mo vi the|mua/.test(text)) return { label: "MUA CÓ ĐIỀU KIỆN", tone: "conditional" };
    return { label: "CHỜ XÁC NHẬN", tone: "wait" };
  };

  const dailyInference = (value) => String(value ?? "")
    .replace(DAILY_DISCLAIMER, "")
    .trim();

  const renderDailyInsight = (id = activeDailyId) => {
    if (!refs.dailyInsight || !refs.dailyArchive) return;
    const entry = dailyEntries.find((item) => item.id === id) || dailyEntries[0];
    if (!entry) {
      refs.dailyInsight.innerHTML = `<div class="daily-empty"><strong>Chưa có bản nhận định.</strong><p>Thêm bản đầu tiên vào assets/daily-insights.js.</p></div>`;
      refs.dailyArchive.innerHTML = "";
      if (refs.dailyIssueCount) refs.dailyIssueCount.textContent = "0";
      return;
    }
    activeDailyId = entry.id;
    if (refs.dailyIssueCount) refs.dailyIssueCount.textContent = dailyEntries.length;
    refs.dailyArchive.innerHTML = dailyEntries.map((item, index) => `
      <button class="daily-archive-item${item.id === activeDailyId ? " active" : ""}" type="button" data-action="show-daily-insight" data-id="${escapeHtml(item.id)}" aria-pressed="${item.id === activeDailyId}">
        <span><i>${index === 0 ? "MỚI NHẤT" : escapeHtml(item.edition)}</i><time datetime="${escapeHtml(item.date)}">${date(item.date)}</time></span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.sentimentLabel)} • BẢN NHANH</small>
      </button>`).join("");

    const inference = dailyInference(entry.inference);

    refs.dailyInsight.innerHTML = `
      <header class="daily-insight-header">
        <div class="daily-insight-meta">
          <span class="daily-sentiment ${escapeHtml(entry.sentiment)}"><i></i>${escapeHtml(entry.sentimentLabel)}</span>
          <span>${escapeHtml(entry.dataStatus)}</span>
          <time datetime="${escapeHtml(entry.date)}">Phiên ${date(entry.date)}</time>
        </div>
        <h3>${escapeHtml(entry.title)}</h3>
        <p class="daily-thesis">${escapeHtml(entry.thesis)}</p>
      </header>

      <div class="daily-metrics">${entry.metrics.map((metric) => `
        <div class="daily-metric ${escapeHtml(metric.tone)}">
          <span>${escapeHtml(metric.label)}</span><strong>${escapeHtml(metric.value)}</strong><small>${escapeHtml(metric.change)}</small>
        </div>`).join("")}</div>

      <section class="daily-action-panel" aria-labelledby="daily-action-title-${escapeHtml(entry.id)}">
        <div class="daily-action-heading">
          <div><small>TRADING PLAYBOOK</small><h4 id="daily-action-title-${escapeHtml(entry.id)}">Điều kiện → hành động</h4></div>
          <span>${entry.playbook.length} kịch bản đã khóa</span>
        </div>
        <div class="daily-action-list">${entry.playbook.map((item, index) => {
          const action = dailyActionMeta(item.then);
          return `
            <article class="daily-action-row ${action.tone}">
              <div class="daily-action-signal"><span>${action.label}</span><small>${String(index + 1).padStart(2, "0")}</small></div>
              <div class="daily-action-condition"><small>KHI</small><p>${escapeHtml(item.if)}</p></div>
              <div class="daily-action-decision"><small>THÌ</small><p>${escapeHtml(item.then)}</p></div>
            </article>`;
        }).join("")}</div>
      </section>

      <details class="daily-evidence">
        <summary>
          <span class="daily-evidence-icon"><svg><use href="#i-shield"></use></svg></span>
          <span class="daily-evidence-label"><strong>Dữ liệu, phương pháp và ${entry.sources.length} nguồn kiểm chứng</strong><small>Bối cảnh phiên • mốc kỹ thuật • sai khác dữ liệu</small></span>
          <span class="daily-evidence-toggle" aria-hidden="true">+</span>
        </summary>
        <div class="daily-evidence-body">
          <div class="daily-evidence-grid">
            <section class="daily-evidence-panel">
              <div class="daily-evidence-heading"><small>01 • MARKET BACKDROP</small><h5>Bối cảnh và dòng tiền</h5></div>
              <ul class="daily-backdrop-list">${entry.backdrop.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
              <p class="daily-focus"><svg><use href="#i-chart"></use></svg>${escapeHtml(entry.focus)}</p>
            </section>
            <section class="daily-evidence-panel">
              <div class="daily-evidence-heading"><small>02 • KEY LEVELS</small><h5>Mốc kỹ thuật đã khóa</h5></div>
              <div class="daily-levels">${entry.levels.map((item) => `
                <article><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong><p>${escapeHtml(item.note)}</p></article>`).join("")}</div>
            </section>
          </div>
          <div class="daily-method-row">
            ${inference ? `<div class="daily-inference"><svg><use href="#i-shield"></use></svg><p><strong>Phương pháp và giới hạn dữ liệu</strong>${escapeHtml(inference)}</p></div>` : ""}
            <div class="daily-sources"><span>Nguồn kiểm chứng</span><div>${entry.sources.map((item) => `<a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)} ↗</a>`).join("")}</div></div>
          </div>
        </div>
      </details>

      <footer class="daily-quick-footer">
        <p class="daily-disclaimer"><svg><use href="#i-shield"></use></svg><span>${DAILY_DISCLAIMER}</span></p>
        <nav class="daily-next-actions" aria-label="Đi tiếp từ nhận định thị trường">
          <a href="#action-radar">Xem Action Radar <svg><use href="#i-arrow"></use></svg></a>
          <a href="#research">Mở thư viện báo cáo <svg><use href="#i-arrow"></use></svg></a>
        </nav>
      </footer>`;
  };

  const statusText = {
    all: "Tất cả trạng thái",
    wait: "CHỜ / THEO DÕI",
    avoid: "TRÁNH MUA MỚI",
    reject: "LOẠI",
    unreported: "Chưa có PDF"
  };

  const actionDistance = (item) => distanceToTrigger(item?.close, item?.action);

  const actionTriggerText = (action) => {
    const trigger = triggerDisplayModel(action);
    if (!trigger) return "—";
    if (trigger.kind === "range") return `${number(trigger.low)}–${number(trigger.high)}`;
    if (trigger.kind === "at-or-below") return `≤ ${number(trigger.price)}`;
    return `≥ ${number(trigger.price)}`;
  };

  const priorityUniverse = buildPriorityUniverse(coverage, priorityContext);
  const priorityRank = new Map(priorityUniverse.map((item, index) => [item.ticker, index + 1]));

  const relationLabel = (item) => priorityRelationLabel(item);

  const currentUpside = (item) => {
    const report = latestByTicker.get(item.ticker);
    const base = valuationBase(report, item.action);
    return Number.isFinite(base) && Number.isFinite(item.close) ? ((base / item.close) - 1) * 100 : null;
  };

  const reportQuote = (report) => {
    if (report.reportType !== "trading") {
      const coverageQuote = coverageByTicker.get(report.ticker);
      if (coverageQuote) return coverageQuote;
    }
    return {
      ticker: report.ticker,
      close: report.marketPrice,
      priceDate: report.marketPriceDate || report.date,
      changePct: null,
      action: report.reportType === "trading"
        ? { zoneLow: report.tradeZoneLow, zoneHigh: report.tradeZoneHigh, basisDate: report.date, recommendation: report.recommendation }
        : report.action
    };
  };

  const reportAction = (report, quote = reportQuote(report)) => report.reportType === "trading"
    ? { zoneLow: report.tradeZoneLow, zoneHigh: report.tradeZoneHigh, basisDate: report.date, recommendation: report.recommendation }
    : quote?.action || report.action;

  const reportUpside = (report, quote = reportQuote(report)) => {
    if (report.reportType === "trading") return null;
    const base = valuationBase(report, quote?.action);
    return Number.isFinite(base) && Number.isFinite(quote?.close) ? ((base / quote.close) - 1) * 100 : null;
  };

  let toastTimer;
  const toast = (message) => {
    clearTimeout(toastTimer);
    refs.toast.textContent = message;
    refs.toast.hidden = false;
    toastTimer = setTimeout(() => { refs.toast.hidden = true; }, 2800);
  };

  const saveWatchlist = () => {
    try { localStorage.setItem("xltvs-watchlist-v1", JSON.stringify([...state.watchlist])); } catch {}
  };

  const latestReports = [...latestByTicker.values()].sort((a, b) => b.date.localeCompare(a.date));

  const updateCounts = () => {
    const sectors = new Set([...coverage, ...reports].map((item) => item.sector));
    const pricedCount = coverage.filter((item) => Number.isFinite(item.close) && item.priceDate).length;
    const supplementalCount = coverage.filter((item) => item.priceDate !== source.meta.updated).length;
    const dottedUpdated = date(source.meta.updated).replaceAll("/", ".");
    document.querySelectorAll("[data-role='report-count'],[data-role='report-tab-count']").forEach((el) => { el.textContent = reports.length; });
    document.querySelectorAll("[data-role='coverage-count'],[data-role='coverage-tab-count']").forEach((el) => { el.textContent = coverage.length; });
    document.querySelectorAll("[data-role='sector-count']").forEach((el) => { el.textContent = sectors.size; });
    document.querySelectorAll("[data-role='latest-report-count']").forEach((el) => { el.textContent = latestReports.length; });
    document.querySelectorAll("[data-role='priced-count']").forEach((el) => { el.textContent = pricedCount; });
    document.querySelectorAll("[data-role='supplemental-price-count']").forEach((el) => { el.textContent = supplementalCount; });
    document.querySelectorAll("[data-role='coverage-eod-label']").forEach((el) => { el.textContent = `Action Radar • EOD ${dottedUpdated}`; });
    document.querySelectorAll("[data-role='coverage-lock-label']").forEach((el) => { el.textContent = `Giá khóa ${dottedUpdated.slice(0, 5)}`; });
    updateWatchlistCounts();
  };

  const updateWatchlistCounts = () => {
    document.querySelectorAll("[data-role='watchlist-count'],[data-role='watchlist-tab-count']").forEach((el) => { el.textContent = state.watchlist.size; });
  };

  const renderActionRadar = () => {
    const exclusions = coverage.filter((item) => item.action?.eligibility && item.action.eligibility !== "active");
    const sourcedPrices = coverage.filter((item) => Number.isFinite(item.close) && item.priceDate).length;
    const supplementalPrices = coverage.filter((item) => item.priceDate !== source.meta.updated).length;
    if (refs.prioritySummary) refs.prioritySummary.innerHTML = `
      <div><span>Mã đủ điều kiện xếp hạng</span><strong>${priorityUniverse.length}</strong><small>Entry mới • chưa có vị thế mở • không hard veto</small></div>
      <div><span>Ưu tiên gần nhất</span><strong>${escapeHtml(priorityUniverse[0]?.ticker || "—")}</strong><small>${priorityUniverse[0] ? escapeHtml(relationLabel(priorityUniverse[0])) : "—"}</small></div>
      <div><span>Giá có ngày nguồn</span><strong>${sourcedPrices}/${coverage.length}</strong><small>${supplementalPrices ? `${supplementalPrices} mã theo ngày giá ghi trong PDF mới` : `Đủ dữ liệu EOD phiên ${date(source.meta.updated)}`}</small></div>
      <div><span>Veto / cần đánh giá lại</span><strong>${exclusions.length}</strong><small>Không đưa vào nhóm ưu tiên</small></div>`;

    if (refs.priorityGrid) refs.priorityGrid.innerHTML = priorityUniverse.slice(0, 3).map((item, index) => {
      const action = item.action;
      const distance = actionDistance(item);
      const upside = currentUpside(item);
      const report = item.reportId ? reportById.get(item.reportId) : null;
      const relation = priorityRelationDescription(item, number, decimal);
      return `<article class="priority-card priority-${index + 1}">
        <div class="priority-rank"><span>ƯU TIÊN</span><strong>${String(index + 1).padStart(2, "0")}</strong></div>
        <div class="priority-card-main">
          <div class="priority-card-head"><div><strong class="priority-code">${escapeHtml(item.ticker)}</strong><small>${escapeHtml(item.exchange)} • ${escapeHtml(item.sector)}</small></div><span class="priority-state ${escapeHtml(distance.relation)}">${escapeHtml(relationLabel(item))}</span></div>
          <p class="priority-company">${escapeHtml(item.company)}</p>
          <div class="priority-metrics">
            <div><span>Đóng cửa ${date(item.priceDate)}</span><strong>${number(item.close)}</strong><small class="${marketTone(item.changePct)}">${signedPercent(item.changePct)}</small></div>
            <div><span>Vùng mua đã khóa</span><strong>${actionTriggerText(action)}</strong><small>${date(action.basisDate)}</small></div>
            <div><span>Upside tới định giá cơ sở</span><strong>${Number.isFinite(upside) ? signedPercent(upside) : "—"}</strong><small>${report ? "theo PDF mới nhất" : "theo phân tích đã khóa"}</small></div>
          </div>
          <div class="priority-distance"><div style="--progress:${Math.max(4, Math.min(100, 100 - distance.value * 2))}%"><span></span></div><p><strong>${escapeHtml(relation)}</strong>${escapeHtml(action.condition)}</p></div>
          <div class="priority-actions">${report ? `<button type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">Mở hồ sơ định giá</button>` : `<button type="button" data-action="focus-ticker" data-ticker="${escapeHtml(item.ticker)}">Xem trong Coverage</button>`}<a href="${escapeHtml(item.priceSource)}" target="_blank" rel="noreferrer">Nguồn giá ↗</a></div>
        </div>
      </article>`;
    }).join("");

    if (refs.actionTable) refs.actionTable.innerHTML = `<table class="action-table">
      <thead><tr><th>Hạng</th><th>Mã / trạng thái</th><th>Giá đóng cửa</th><th>Vùng mua đã khóa</th><th>Khoảng cách</th><th>Định giá cơ sở</th><th class="upside-header">Upside tới định giá cơ sở</th><th>Nguồn</th></tr></thead>
      <tbody>${priorityUniverse.map((item, index) => {
        const action = item.action;
        const distance = actionDistance(item);
        const report = latestByTicker.get(item.ticker);
        const base = valuationBase(report, action);
        const upside = Number.isFinite(base) && Number.isFinite(item.close) ? ((base / item.close) - 1) * 100 : null;
        const upsideTone = !Number.isFinite(upside) ? "neutral" : upside > 0 ? "positive" : upside < 0 ? "negative" : "neutral";
        const upsideLabel = !Number.isFinite(upside) ? "Chưa đủ dữ liệu" : upside > 0 ? "Dư địa so với giá đóng cửa" : upside < 0 ? "Giá đóng cửa cao hơn định giá cơ sở" : "Bằng định giá cơ sở";
        const distanceText = priorityDistanceText(item, decimal);
        return `<tr>
          <td data-label="Hạng"><span class="table-rank">${String(index + 1).padStart(2, "0")}</span></td>
          <td data-label="Mã / trạng thái"><strong class="table-ticker">${escapeHtml(item.ticker)}</strong><span class="table-status">${escapeHtml(action.recommendation)}</span></td>
          <td data-label="Giá đóng cửa"><strong>${number(item.close)}</strong><span>${date(item.priceDate)} • <i class="${marketTone(item.changePct)}">${signedPercent(item.changePct)}</i></span>${item.priceNote ? `<em>${escapeHtml(item.priceNote)}</em>` : ""}</td>
          <td data-label="Vùng mua đã khóa"><strong>${actionTriggerText(action)}</strong><span>Khóa ${date(action.basisDate)}</span></td>
          <td data-label="Khoảng cách"><strong class="distance-${escapeHtml(distance.relation)}">${escapeHtml(distanceText)}</strong><span>${escapeHtml(relationLabel(item))}</span></td>
          <td data-label="Định giá cơ sở"><strong>${number(base)}</strong><span>đồng/cp</span></td>
          <td class="upside-cell upside-${upsideTone}" data-label="Upside tới định giá cơ sở"><strong>${Number.isFinite(upside) ? signedPercent(upside) : "—"}</strong><span>${escapeHtml(upsideLabel)}</span></td>
          <td data-label="Nguồn"><a href="${escapeHtml(item.priceSource)}" target="_blank" rel="noreferrer">Giá ↗</a>${item.priceSourceSecondary ? `<a href="${escapeHtml(item.priceSourceSecondary)}" target="_blank" rel="noreferrer">Đối chiếu ↗</a>` : ""}${report ? `<a href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer">PDF ↗</a>` : `<span>PDF chưa tải</span>`}</td>
        </tr>`;
      }).join("")}</tbody>
    </table>`;

    if (refs.exclusionList) refs.exclusionList.innerHTML = exclusions.map((item) => {
      const tag = item.action.eligibility === "veto" ? "HARD VETO" : item.action.eligibility === "invalidated" ? "SETUP VÔ HIỆU" : "CẦN LÀM MỚI";
      return `<article><div><strong>${escapeHtml(item.ticker)}</strong><span>${escapeHtml(tag)}</span></div><p>${escapeHtml(item.action.recommendation)} • ${escapeHtml(item.action.condition)}</p><small>${number(item.close)} đồng/cp • ${date(item.priceDate)}</small></article>`;
    }).join("");
  };

  const LEDGER_REASON_LABELS = {
    target: "ĐẠT TARGET",
    stoploss: "STOPLOSS",
    invalidation: "LUẬN ĐIỂM VÔ HIỆU",
    risk_reduction: "GIẢM RỦI RO",
    manual: "ĐÓNG CHỦ ĐỘNG"
  };

  const ledgerReason = (value) => LEDGER_REASON_LABELS[value] || (value ? String(value).toLocaleUpperCase("vi") : "CHƯA GHI NHẬN");

  const lockedActionLabel = (value) => {
    const trigger = triggerDisplayModel(value);
    if (!trigger) return "Điều kiện —";
    if (trigger.kind === "range") return `Vùng ${number(trigger.low)}–${number(trigger.high)}`;
    if (trigger.kind === "at-or-below") return `Ngưỡng ≤ ${number(trigger.price)}`;
    return `Ngưỡng ≥ ${number(trigger.price)}`;
  };

  const renderLedgerEvent = (event) => {
    const label = event.type === "activated"
      ? event.mode === "automatic-eod" ? "KÍCH HOẠT TỰ ĐỘNG" : "KÍCH HOẠT XÁC NHẬN"
      : event.type === "partial_exit" ? `CHỐT ${decimal(Number(event.portionPct), 0)}%` : "ĐÓNG VỊ THẾ";
    const detail = event.type === "activated"
      ? `${lockedActionLabel(event)} đã khóa`
      : ledgerReason(event.reason);
    return `<li>
      <span class="ledger-event-marker"></span>
      <div><strong>${escapeHtml(label)}</strong><small>${date(event.date)} • ${number(event.price)} đồng/cp</small><p>${escapeHtml(detail)}${event.note ? ` • ${escapeHtml(event.note)}` : ""}</p></div>
      ${event.sourceUrl ? `<a href="${escapeHtml(event.sourceUrl)}" target="_blank" rel="noreferrer">Nguồn ↗</a>` : ""}
    </li>`;
  };

  const renderPositionLedger = () => {
    if (!refs.ledgerSummary || !refs.ledgerContent) return;
    const projection = ledgerProjection;
    const openPositions = projection.positions.filter((position) => position.status !== "closed");
    const closedPositions = projection.positions.filter((position) => position.status === "closed");
    const activeTickers = new Set(openPositions.map((position) => position.ticker));
    const pendingCandidates = coverage.filter((item) => item.action?.eligibility === "active"
      && actionDistance(item)?.relation === "inside"
      && !activeTickers.has(item.ticker));
    const automation = tradeLedgerSource.meta?.automation || {};
    const automationReady = tradeLedgerSource.meta?.schemaVersion === 2 && automation.enabled === true;

    if (refs.ledgerAsOf) refs.ledgerAsOf.textContent = `Giá theo dõi khóa EOD ${date(source.meta.updated)}`;
    document.querySelectorAll("[data-role='ledger-baseline-at']").forEach((item) => { item.textContent = date(automation.baselineDate); });

    refs.ledgerSummary.innerHTML = `
      <div><span>Vị thế đang theo dõi</span><strong>${openPositions.length}</strong><small>Gồm đang mở và chốt một phần</small></div>
      <div><span>Trong vùng • chưa kích hoạt</span><strong>${pendingCandidates.length}</strong><small>Không có chuyển trạng thái hợp lệ để hồi tố</small></div>
      <div><span>Lịch sử đã đóng</span><strong>${closedPositions.length}</strong><small>Không xóa giao dịch âm</small></div>
      <div><span>Bộ xử lý tự động</span><strong class="ledger-auto-state ${automationReady ? "is-ready" : "is-off"}">${automationReady ? "ĐÃ BẬT" : "TẠM DỪNG"}</strong><small>Đã quét đến EOD ${date(automation.lastEvaluatedAt)}</small></div>`;

    document.querySelectorAll("[data-ledger-tab]").forEach((button) => {
      const selected = button.dataset.ledgerTab === state.ledgerTab;
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected) refs.ledgerContent.setAttribute("aria-labelledby", button.id);
    });
    document.querySelectorAll("[data-role='ledger-open-count']").forEach((item) => { item.textContent = openPositions.length; });
    document.querySelectorAll("[data-role='ledger-closed-count']").forEach((item) => { item.textContent = closedPositions.length; });

    if (refs.ledgerPending) {
      refs.ledgerPending.hidden = pendingCandidates.length === 0;
      refs.ledgerPending.innerHTML = pendingCandidates.length
        ? `<strong>TRONG VÙNG — KHÔNG HỒI TỐ</strong><span>${pendingCandidates.map((item) => escapeHtml(item.ticker)).join(" • ")} đang nằm trong vùng nhưng chưa có chuyển trạng thái EOD hợp lệ từ ngoài vào trong.</span>`
        : "";
    }

    if (refs.ledgerIssues) {
      refs.ledgerIssues.hidden = projection.issues.length === 0 && automationReady;
      refs.ledgerIssues.textContent = projection.issues.length
        ? `Tạm dừng hiển thị ${projection.issues.length} sự kiện không hợp lệ; cần kiểm tra sổ dữ liệu.`
        : automationReady ? "" : "Bộ xử lý EOD đang tạm dừng; không phát sinh kích hoạt tự động.";
    }

    const positions = state.ledgerTab === "closed" ? closedPositions : openPositions;
    if (!positions.length) {
      const isOpen = state.ledgerTab === "open";
      refs.ledgerContent.innerHTML = `<div class="ledger-empty" role="status">
        <svg><use href="#i-shield"></use></svg>
        <strong>${isOpen ? "Chưa có vị thế tham chiếu được kích hoạt" : "Chưa có vị thế nào đã đóng"}</strong>
        <p>${isOpen
          ? `Bộ xử lý đã quét đến EOD ${date(automation.lastEvaluatedAt)}; sổ không hồi tố tín hiệu từ đồ thị hoặc dữ liệu quá khứ.`
          : "Lịch sử sẽ xuất hiện khi một vị thế được đóng bằng sự kiện có ngày, giá và lý do rõ ràng."}</p>
        ${isOpen ? `<a href="#action-radar">Xem các mã đang chờ trong Action Radar <svg><use href="#i-arrow"></use></svg></a>` : ""}
      </div>`;
      return;
    }

    refs.ledgerContent.innerHTML = `<div class="ledger-table-wrap"><table class="ledger-table">
      <thead><tr><th>Mã</th><th>Ngày kích hoạt</th><th>Giá kích hoạt</th><th>Giá theo dõi / chốt BQ</th><th>Hiệu suất</th><th>Stop</th><th>Target</th><th>Trạng thái vị thế</th></tr></thead>
      ${positions.map((position) => {
        const isClosed = position.status === "closed";
        const trackedPrice = isClosed ? position.averageExitPrice : position.currentPrice;
        const trackedDate = isClosed ? position.closedAt : position.currentPriceDate;
        const statusLabel = isClosed ? "ĐÃ ĐÓNG" : position.status === "partial" ? "CHỐT 1 PHẦN" : "ĐANG MỞ";
        const statusDetail = isClosed
          ? `${date(position.closedAt)} • ${ledgerReason(position.closeReason)}`
          : position.monitoringState === "stop-alert"
            ? "GIÁ EOD CHẠM/DƯỚI STOP • CHƯA GHI NHẬN CHỐT"
            : position.monitoringState === "target-alert"
              ? "GIÁ EOD CHẠM TARGET • CHƯA GHI NHẬN CHỐT"
              : position.status === "partial" ? `Còn lại ${percentOfPosition(position.remainingFraction)}` : "Chưa phát sinh sự kiện chốt";
        const statusAlert = position.monitoringState === "stop-alert" || position.monitoringState === "target-alert";
        const performanceNote = isClosed
          ? "Đã hiện thực hóa"
          : position.status === "partial" ? "Phần đã chốt + phần còn mở" : "Chưa hiện thực hóa";
        const targets = position.targets.length ? position.targets.map(number).join(" / ") : "—";
        return `<tbody class="ledger-position">
          <tr>
            <td data-label="Mã"><strong class="ledger-ticker">${escapeHtml(position.ticker)}</strong><span>${escapeHtml(position.tradeId)}</span></td>
            <td data-label="Ngày kích hoạt"><strong>${date(position.activatedAt)}</strong><span>${position.activationMode === "automatic-eod" ? "Tự động theo EOD" : "Xác nhận thủ công"}</span></td>
            <td data-label="Giá kích hoạt"><strong>${number(position.activationPrice)}</strong><span>${escapeHtml(lockedActionLabel(position))}</span></td>
            <td data-label="${isClosed ? "Giá chốt bình quân" : "Giá theo dõi"}"><strong>${number(trackedPrice)}</strong><span>${date(trackedDate)}${!isClosed && position.currentPriceSource ? ` • <a href="${escapeHtml(position.currentPriceSource)}" target="_blank" rel="noreferrer">Nguồn ↗</a>` : ""}</span></td>
            <td class="ledger-performance ${marketTone(position.performancePct)}" data-label="Hiệu suất"><strong>${signedPercent(position.performancePct)}</strong><span>${escapeHtml(performanceNote)}</span></td>
            <td data-label="Stop"><strong>${number(position.stop)}</strong><span>${position.stop ? "Mốc đã khóa" : "Chưa có dữ liệu"}</span></td>
            <td data-label="Target"><strong>${escapeHtml(targets)}</strong><span>${position.targets.length ? "Mốc đã khóa" : "Chưa có dữ liệu"}</span></td>
            <td data-label="Trạng thái vị thế"><span class="ledger-status ledger-status-${escapeHtml(position.status)}">${escapeHtml(statusLabel)}</span><small class="${statusAlert ? "ledger-monitor-alert" : ""}">${escapeHtml(statusDetail)}</small></td>
          </tr>
          <tr class="ledger-history-row"><td colspan="8"><details><summary>Xem nhật ký ${position.events.length} sự kiện</summary><ol>${position.events.map(renderLedgerEvent).join("")}</ol></details></td></tr>
        </tbody>`;
      }).join("")}
    </table></div>`;
  };

  const renderFilters = () => {
    const sectors = ["all", ...new Set([...coverage, ...reports].map((item) => item.sector))];
    refs.sectorFilters.innerHTML = sectors.map((sector) => `<button type="button" data-action="set-sector" data-sector="${escapeHtml(sector)}" aria-pressed="${sector === state.sector}">${sector === "all" ? "Tất cả ngành" : escapeHtml(sector)}</button>`).join("");
    refs.statusFilters.innerHTML = Object.entries(statusText).map(([key, label]) => `<button type="button" data-action="set-status" data-status="${key}" aria-pressed="${key === state.status}">${escapeHtml(label)}</button>`).join("");
  };

  const reportMatches = (report) => {
    const text = normalize(`${report.ticker} ${report.company} ${report.sector} ${report.recommendation} ${report.exchange}`);
    return (!state.query || text.includes(normalize(state.query)))
      && (state.sector === "all" || report.sector === state.sector)
      && (state.status === "all" || report.status === state.status);
  };

  const coverageStatus = (item) => latestByTicker.get(item.ticker)?.status || "unreported";
  const coverageMatches = (item) => {
    const text = normalize(`${item.ticker} ${item.company} ${item.sector} ${item.exchange}`);
    return (!state.query || text.includes(normalize(state.query)))
      && (state.sector === "all" || item.sector === state.sector)
      && (state.status === "all" || coverageStatus(item) === state.status)
      && (state.tab !== "watchlist" || state.watchlist.has(item.ticker));
  };

  const sortReports = (items) => [...items].sort((a, b) => {
    if (state.sort === "priority") {
      const ar = priorityRank.get(a.ticker) ?? 999;
      const br = priorityRank.get(b.ticker) ?? 999;
      return ar - br || b.date.localeCompare(a.date);
    }
    if (state.sort === "ticker") return a.ticker.localeCompare(b.ticker);
    if (state.sort === "sector") return a.sector.localeCompare(b.sector, "vi") || a.ticker.localeCompare(b.ticker);
    if (state.sort === "base-desc") return (b.baseValue || -1) - (a.baseValue || -1);
    return b.date.localeCompare(a.date);
  });

  const sortCoverage = (items) => [...items].sort((a, b) => {
    if (state.sort === "priority") {
      const ar = priorityRank.get(a.ticker) ?? 999;
      const br = priorityRank.get(b.ticker) ?? 999;
      return ar - br || a.ticker.localeCompare(b.ticker);
    }
    if (state.sort === "sector") return a.sector.localeCompare(b.sector, "vi") || a.ticker.localeCompare(b.ticker);
    if (state.sort === "newest") {
      const ad = latestByTicker.get(a.ticker)?.date || "0000-00-00";
      const bd = latestByTicker.get(b.ticker)?.date || "0000-00-00";
      return bd.localeCompare(ad) || a.ticker.localeCompare(b.ticker);
    }
    return a.ticker.localeCompare(b.ticker);
  });

  const reportVisual = (report, placement = "card") => {
    const visual = report.visual;
    if (!visual?.src || !visual?.sourceUrl) return "";
    const label = visual.kind === "illustration" ? "Minh họa ngành" : visual.kind === "report-cover" ? "Bìa báo cáo" : "Ảnh hoạt động";
    const sourceTitle = `${visual.kind === "report-cover" ? "Nguồn bìa" : "Nguồn ảnh"}: ${visual.sourceLabel || report.company}`;
    const loading = placement === "dialog" ? "eager" : "lazy";
    const fetchPriority = placement === "dialog" ? "high" : "auto";
    return `<figure class="report-visual report-visual-${escapeHtml(placement)} ${visual.kind === "illustration" ? "is-illustration" : visual.kind === "report-cover" ? "is-report-cover" : ""}">
      <a href="${escapeHtml(visual.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${visual.caption}. ${sourceTitle}`)}" title="${escapeHtml(sourceTitle)}" data-image-fallback="${escapeHtml(report.ticker)}">
        <img src="${escapeHtml(visual.src)}" alt="${escapeHtml(visual.alt || visual.caption)}" width="960" height="540" loading="${loading}" decoding="async" fetchpriority="${fetchPriority}">
        <span class="report-visual-label">${escapeHtml(label)}</span>
      </a>
      ${placement === "dialog" ? `<figcaption><span>${escapeHtml(visual.caption)}</span><a href="${escapeHtml(visual.sourceUrl)}" target="_blank" rel="noopener noreferrer">Nguồn: ${escapeHtml(visual.sourceLabel || report.company)} ↗</a></figcaption>` : ""}
    </figure>`;
  };

  const reportCard = (report) => {
    const isTrading = report.reportType === "trading";
    const watched = state.watchlist.has(report.ticker);
    const compared = state.compare.has(report.id);
    const quote = reportQuote(report);
    const action = reportAction(report, quote);
    const quoteWithAction = { ...quote, action };
    const rank = isTrading ? null : priorityRank.get(report.ticker);
    const distance = actionDistance(quoteWithAction);
    const upside = reportUpside(report, quote);
    const metricMarkup = isTrading
      ? `<div class="card-metric market"><span>Giá tham chiếu ${date(quote?.priceDate)}</span><strong>${number(quote?.close)}</strong><small class="neutral">Phiên sáng</small></div>
          <div class="card-metric emphasis"><span>Mục tiêu kỹ thuật</span><strong>${number(report.targetLow)}–${number(report.targetHigh)}</strong><small>Không phải giá trị cơ sở</small></div>`
      : `<div class="card-metric market"><span>Đóng cửa ${date(quote?.priceDate)}</span><strong>${number(quote?.close)}</strong><small class="${marketTone(quote?.changePct)}">${signedPercent(quote?.changePct)}</small></div>
          <div class="card-metric emphasis"><span>${escapeHtml(valueLabel(report))}</span><strong>${number(report.baseValue)}</strong><small>${Number.isFinite(upside) ? `${signedPercent(upside)} từ giá hiển thị` : "—"}</small></div>`;
    return `<article class="report-card-v4 status-${escapeHtml(report.status)} ${isTrading ? "type-trading" : "type-valuation"}">
      <div class="report-card-topline"></div>
      <div class="report-card-head">
        <div class="report-identity"><span class="ticker-mark">${escapeHtml(report.ticker)}</span><div><h3>${escapeHtml(report.edition)}</h3><p>${escapeHtml(report.sector)} • ${escapeHtml(report.exchange)}</p></div></div>
        ${reportVisual(report)}
        <div class="card-tools">
          <button class="${watched ? "active" : ""}" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(report.ticker)}" aria-label="${watched ? "Bỏ khỏi" : "Thêm vào"} watchlist"><svg><use href="#i-star"></use></svg></button>
          ${isTrading ? "" : `<button class="${compared ? "active" : ""}" type="button" data-action="toggle-compare" data-id="${escapeHtml(report.id)}" aria-label="${compared ? "Bỏ khỏi" : "Thêm vào"} so sánh"><svg><use href="#i-compare"></use></svg></button>`}
        </div>
      </div>
      <div class="report-card-body">
        <div>
          <div class="report-meta-line"><span class="recommendation-label ${escapeHtml(report.status)}">${escapeHtml(report.recommendation)}</span><time datetime="${escapeHtml(report.date)}">PDF ${date(report.date)}</time></div>
          <h3 class="report-company">${escapeHtml(report.company)}</h3>
        </div>
        <div class="card-metrics">
          ${metricMarkup}
        </div>
        ${action && triggerDisplayModel(action) ? `<div class="card-action-band"><span>${isTrading ? "Vùng mua kỹ thuật" : rank ? `Ưu tiên #${rank}` : "Vùng mua"}</span><strong>${actionTriggerText(action)}</strong><small>${distance ? `${decimal(distance.value)}% • ${relationLabel(quoteWithAction)}` : "—"}</small></div>` : ""}
        <p class="report-summary">${escapeHtml(report.summary)}</p>
        <div class="report-card-actions">
          <button class="details-button" type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">${isTrading ? "Chi tiết Trading Desk" : "Dashboard chi tiết"}</button>
          <a class="pdf-button" href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer"><svg><use href="#i-file"></use></svg>PDF</a>
        </div>
      </div>
    </article>`;
  };

  const coverageCard = (item) => {
    const report = item.reportId ? reportById.get(item.reportId) : null;
    const watched = state.watchlist.has(item.ticker);
    const distance = actionDistance(item);
    const rank = priorityRank.get(item.ticker);
    return `<article class="coverage-card ${rank && rank <= 3 ? "is-priority" : ""}">
      <div class="coverage-card-head"><div><h3>${escapeHtml(item.ticker)}</h3><span class="exchange">${escapeHtml(item.exchange)}</span></div><button class="icon-button ${watched ? "active" : ""}" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(item.ticker)}" aria-label="${watched ? "Bỏ khỏi" : "Thêm vào"} watchlist"><svg><use href="#i-star"></use></svg></button></div>
      <p>${escapeHtml(item.company)}</p><span class="sector">${escapeHtml(item.sector)}</span>
      <div class="coverage-quote"><div><span>Đóng cửa ${date(item.priceDate)}</span><strong>${number(item.close)}</strong></div><small class="${marketTone(item.changePct)}">${signedPercent(item.changePct)}</small></div>
      ${distance ? `<div class="coverage-distance"><span>${rank ? `#${rank} • ` : ""}${escapeHtml(relationLabel(item))}</span><strong>${decimal(distance.value)}%</strong></div>` : `<div class="coverage-distance muted"><span>${escapeHtml(item.action?.recommendation || "Chưa có vùng mua")}</span><strong>—</strong></div>`}
      <div class="coverage-card-actions">
        ${report ? `<button class="primary" type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">${escapeHtml(report.recommendation)}</button><button type="button" data-action="toggle-compare" data-id="${escapeHtml(report.id)}">So sánh</button>` : `<button type="button" data-action="no-report">Đã phân tích • Chưa có PDF</button>`}
      </div>
    </article>`;
  };

  const renderResearch = () => {
    let items;
    if (state.tab === "reports") {
      items = sortReports(reports.filter(reportMatches));
      refs.results.innerHTML = items.map(reportCard).join("");
    } else {
      items = sortCoverage(coverage.filter(coverageMatches));
      refs.results.innerHTML = items.map(coverageCard).join("");
    }
    refs.results.classList.toggle("list-view", state.view === "list");
    refs.empty.hidden = items.length !== 0;
    refs.results.hidden = items.length === 0;
    const label = state.tab === "reports" ? "báo cáo" : state.tab === "watchlist" ? "mã trong watchlist" : "mã cổ phiếu";
    refs.summary.textContent = `${items.length} ${label} phù hợp`;
    document.querySelectorAll("[data-action='set-view']").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.view === state.view)));
  };

  const updateCompareDock = () => {
    const selected = [...state.compare].map((id) => reportById.get(id)).filter(Boolean);
    refs.compareDock.hidden = selected.length === 0;
    refs.compareTickers.innerHTML = selected.map((report) => `<span class="compare-chip">${escapeHtml(report.ticker)}</span>`).join("");
    document.querySelectorAll("[data-role='compare-count']").forEach((el) => { el.textContent = selected.length; });
  };

  const defaultSortForTab = (tab) => tab === "reports" ? "newest" : "priority";

  const setTab = (tab) => {
    state.tab = tab;
    state.sort = defaultSortForTab(tab);
    if (refs.sort) refs.sort.value = state.sort;
    document.querySelectorAll("[data-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.tab === tab)));
    renderResearch();
  };

  const resetFilters = () => {
    state.query = "";
    state.sector = "all";
    state.status = "all";
    state.sort = defaultSortForTab(state.tab);
    refs.search.value = "";
    refs.sort.value = "priority";
    renderFilters();
    renderResearch();
  };

  const toggleWatch = (ticker) => {
    if (state.watchlist.has(ticker)) {
      state.watchlist.delete(ticker);
      toast(`${ticker} đã được bỏ khỏi watchlist.`);
    } else {
      state.watchlist.add(ticker);
      toast(`${ticker} đã được thêm vào watchlist.`);
    }
    saveWatchlist();
    updateWatchlistCounts();
    renderResearch();
    if (refs.watchlistDialog.open) renderWatchlistDialog();
  };

  const toggleCompare = (id) => {
    if (reportById.get(id)?.reportType === "trading") return toast("Trading Desk không được so sánh như báo cáo định giá.");
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size >= 3) return toast("Chỉ có thể so sánh tối đa 3 báo cáo.");
    else state.compare.add(id);
    renderResearch();
    updateCompareDock();
  };

  const openReport = (id) => {
    const report = reportById.get(id);
    if (!report) return;
    const isTrading = report.reportType === "trading";
    const quote = reportQuote(report);
    const action = reportAction(report, quote);
    const quoteWithAction = { ...quote, action };
    const liveGap = reportUpside(report, quote);
    const watched = state.watchlist.has(report.ticker);
    const compared = state.compare.has(report.id);
    const metrics = isTrading
      ? `<div class="dialog-metric"><span>Giá tham chiếu</span><strong>${number(report.marketPrice)}</strong><small>${date(report.marketPriceDate || report.date)} • phiên sáng</small></div>
          <div class="dialog-metric"><span>Khung giao dịch</span><strong>${escapeHtml(report.timeframe || "—")}</strong><small>Trading Desk</small></div>
          <div class="dialog-metric emphasis"><span>Vùng mua ưu tiên</span><strong>${number(report.tradeZoneLow)}–${number(report.tradeZoneHigh)}</strong><small>Có điều kiện</small></div>
          <div class="dialog-metric"><span>Stop tham khảo</span><strong>${number(report.stop)}</strong><small>Không tự động kích hoạt</small></div>
          <div class="dialog-metric emphasis"><span>Mục tiêu kỹ thuật</span><strong>${number(report.targetLow)}–${number(report.targetHigh)}</strong><small>Không phải giá trị hợp lý</small></div>
          <div class="dialog-metric"><span>Mốc breakout</span><strong>${number(report.breakout)}</strong><small>Yêu cầu xác nhận</small></div>`
      : `<div class="dialog-metric"><span>Đóng cửa ${date(quote?.priceDate)}</span><strong>${number(quote?.close)}</strong><small class="${marketTone(quote?.changePct)}">${signedPercent(quote?.changePct)}</small></div>
          <div class="dialog-metric"><span>Giá tại ngày định giá</span><strong>${number(report.marketPrice)}</strong><small>${date(report.marketPriceDate || report.date)}</small></div>
          <div class="dialog-metric emphasis"><span>${escapeHtml(valueLabel(report))}</span><strong>${number(report.baseValue)}</strong></div>
          <div class="dialog-metric"><span>Vùng giá trị hợp lý</span><strong>${number(report.rangeLow)}–${number(report.rangeHigh)}</strong></div>
          <div class="dialog-metric emphasis"><span>Upside tới định giá cơ sở</span><strong>${Number.isFinite(liveGap) ? signedPercent(liveGap) : "—"}</strong><small>từ giá hiển thị có ngày nguồn</small></div>
          <div class="dialog-metric"><span>Vùng mua đã khóa</span><strong>${Number.isFinite(action?.zoneLow) ? `${actionTriggerText(action)}` : "—"}</strong><small>${action?.basisDate ? date(action.basisDate) : "—"}</small></div>`;
    const condition = isTrading
      ? `Chỉ xem xét vùng ${number(report.tradeZoneLow)}–${number(report.tradeZoneHigh)} khi cấu trúc giá và dòng tiền xác nhận; stop tham khảo ${number(report.stop)}. Mục tiêu kỹ thuật không được dùng làm giá trị cơ sở.`
      : action?.condition || "Xem trong báo cáo PDF";
    refs.reportDialogContent.innerHTML = `
      <div class="report-dialog-hero">
        <div class="report-dialog-head"><div><p class="terminal-eyebrow">${isTrading ? "Trading Desk Research" : "Equity Valuation Research"} • ${escapeHtml(report.exchange)}</p><h2 class="report-dialog-code" id="report-dialog-title">${escapeHtml(report.ticker)}</h2><p class="report-dialog-company">${escapeHtml(report.company)}</p><p class="report-dialog-meta">${escapeHtml(report.sector)} • ${date(report.date)} • ${escapeHtml(report.edition)}</p></div>${reportVisual(report, "dialog")}<span class="status-badge ${escapeHtml(report.status)}">${escapeHtml(report.recommendation)}</span></div>
      </div>
      <div class="report-dialog-body">
        <div class="dialog-metrics">
          ${metrics}
        </div>
        <div class="dialog-thesis"><h3>${isTrading ? "Kịch bản giao dịch và kỷ luật" : "Luận điểm và điều kiện"}</h3><p>${escapeHtml(report.summary)}</p><dl><div><dt>Khuyến nghị gốc</dt><dd>${escapeHtml(report.recommendation)}</dd></div><div><dt>Trạng thái theo giá nguồn</dt><dd>${escapeHtml(relationLabel(quoteWithAction))}</dd></div><div><dt>Điều kiện</dt><dd>${escapeHtml(condition)}</dd></div><div><dt>Phương pháp</dt><dd>${escapeHtml(report.method || "Xem trong báo cáo PDF")}</dd></div></dl></div>
      </div>
      <div class="dialog-actions">
        <a class="button button-primary" href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer"><svg><use href="#i-file"></use></svg>Mở báo cáo PDF</a>
        <button class="button button-secondary" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(report.ticker)}"><svg><use href="#i-star"></use></svg>${watched ? "Bỏ khỏi watchlist" : "Thêm watchlist"}</button>
        ${isTrading ? "" : `<button class="button button-secondary" type="button" data-action="toggle-compare" data-id="${escapeHtml(report.id)}"><svg><use href="#i-compare"></use></svg>${compared ? "Bỏ so sánh" : "Thêm so sánh"}</button>`}
        <button class="button button-secondary" type="button" data-action="share-report" data-id="${escapeHtml(report.id)}"><svg><use href="#i-share"></use></svg>Chia sẻ</button>
      </div>`;
    refs.reportDialog.showModal();
  };

  const renderCompareDialog = () => {
    const selected = [...state.compare].map((id) => reportById.get(id)).filter((report) => report && report.reportType !== "trading");
    if (selected.length < 2) return toast("Hãy chọn ít nhất 2 báo cáo để so sánh.");
    const rows = [
      ["Doanh nghiệp", (r) => escapeHtml(r.company)],
      ["Ngày định giá", (r) => date(r.date)],
      ["Khuyến nghị", (r) => escapeHtml(r.recommendation)],
      ["Giá hiển thị có ngày nguồn", (r) => `${number(reportQuote(r)?.close)} • ${date(reportQuote(r)?.priceDate)}`],
      ["Giá tại ngày định giá", (r) => number(r.marketPrice)],
      ["Định giá cơ sở", (r) => `${escapeHtml(valueLabel(r))}: ${number(r.baseValue)}`],
      ["Vùng mua đã khóa", (r) => {
        const action = reportAction(r);
        return action?.zoneLow ? `${actionTriggerText(action)}` : "—";
      }],
      ["Vùng giá trị", (r) => `${number(r.rangeLow)}–${number(r.rangeHigh)}`],
      ["Phương pháp", (r) => escapeHtml(r.method || "Xem trong PDF")],
      ["Báo cáo", (r) => `<a class="text-link" href="${escapeHtml(r.file)}" target="_blank" rel="noreferrer">Mở PDF ↗</a>`]
    ];
    refs.compareContent.innerHTML = `<table class="compare-table"><thead><tr><th>Chỉ tiêu</th>${selected.map((r) => `<th><span class="compare-code">${escapeHtml(r.ticker)}</span><br><small>${escapeHtml(r.exchange)}</small></th>`).join("")}</tr></thead><tbody>${rows.map(([label, render]) => `<tr><th>${label}</th>${selected.map((r) => `<td>${render(r)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    refs.compareDialog.showModal();
  };

  const renderWatchlistDialog = () => {
    const items = coverage.filter((item) => state.watchlist.has(item.ticker));
    refs.watchlistContent.innerHTML = items.length
      ? `<div class="watchlist-grid">${items.map((item) => `<div class="watchlist-item"><div><strong>${escapeHtml(item.ticker)}</strong><span>${escapeHtml(item.company)} • ${number(item.close)} • ${date(item.priceDate)}</span></div><div>${item.reportId ? `<button type="button" data-action="open-report" data-id="${escapeHtml(item.reportId)}" aria-label="Mở báo cáo"><svg><use href="#i-file"></use></svg></button>` : ""}<button type="button" data-action="toggle-watch" data-ticker="${escapeHtml(item.ticker)}" aria-label="Bỏ khỏi watchlist"><svg><use href="#i-close"></use></svg></button></div></div>`).join("")}</div>`
      : `<div class="empty-state"><svg><use href="#i-star"></use></svg><h3>Watchlist đang trống</h3><p>Nhấn biểu tượng ngôi sao trên một mã hoặc báo cáo để lưu.</p></div>`;
  };

  const renderCommandResults = (query = "") => {
    const normalized = normalize(query);
    const items = coverage.filter((item) => !normalized || normalize(`${item.ticker} ${item.company} ${item.sector}`).includes(normalized)).slice(0, 9);
    refs.commandResults.innerHTML = `<p class="command-group-label">${normalized ? "Kết quả tìm kiếm" : "Mã nghiên cứu"}</p>${items.map((item) => {
      const report = item.reportId ? reportById.get(item.reportId) : null;
      return `<button class="command-item" type="button" data-action="command-select" data-ticker="${escapeHtml(item.ticker)}" data-id="${escapeHtml(item.reportId || "")}"><span class="command-item-code">${escapeHtml(item.ticker)}</span><span><strong>${escapeHtml(item.company)}</strong><span>${escapeHtml(item.sector)} • ${escapeHtml(item.exchange)}</span></span><small>${report ? escapeHtml(report.recommendation) : "Chưa có PDF"}</small></button>`;
    }).join("")}${items.length ? "" : `<div class="empty-state"><h3>Không có kết quả</h3></div>`}`;
  };

  const openCommand = () => {
    refs.commandInput.value = "";
    renderCommandResults();
    refs.commandDialog.showModal();
    requestAnimationFrame(() => refs.commandInput.focus());
  };

  const shareReport = async (id) => {
    const report = reportById.get(id);
    if (!report) return;
    const url = new URL(report.file, window.location.href).href;
    const payload = { title: `Báo cáo định giá ${report.ticker}`, text: `${report.ticker} — ${report.recommendation}`, url };
    try {
      if (navigator.share) await navigator.share(payload);
      else {
        await navigator.clipboard.writeText(url);
        toast("Đã sao chép đường dẫn báo cáo.");
      }
    } catch (error) {
      if (error?.name !== "AbortError") toast("Không thể chia sẻ. Anh có thể mở PDF và sao chép đường dẫn.");
    }
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    if (action === "open-report") openReport(target.dataset.id);
    if (action === "toggle-watch") toggleWatch(target.dataset.ticker);
    if (action === "toggle-compare") toggleCompare(target.dataset.id);
    if (action === "open-compare") renderCompareDialog();
    if (action === "clear-compare") { state.compare.clear(); renderResearch(); updateCompareDock(); }
    if (action === "open-watchlist") { renderWatchlistDialog(); refs.watchlistDialog.showModal(); }
    if (action === "open-command") openCommand();
    if (action === "close-dialog") target.closest("dialog")?.close();
    if (action === "reset-filters") resetFilters();
    if (action === "set-view") { state.view = target.dataset.view; renderResearch(); }
    if (action === "set-sector") { state.sector = target.dataset.sector; renderFilters(); renderResearch(); }
    if (action === "set-status") { state.status = target.dataset.status; renderFilters(); renderResearch(); }
    if (action === "set-ledger-tab") { state.ledgerTab = target.dataset.ledgerTab; renderPositionLedger(); }
    if (action === "share-report") shareReport(target.dataset.id);
    if (action === "show-daily-insight") {
      renderDailyInsight(target.dataset.id);
      if (window.matchMedia("(max-width: 980px)").matches) refs.dailyInsight?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "no-report") toast("Mã này đã được phân tích nhưng chưa có báo cáo PDF trong thư viện.");
    if (action === "focus-ticker") {
      setTab("coverage");
      state.query = target.dataset.ticker;
      refs.search.value = state.query;
      renderResearch();
      document.querySelector("#research")?.scrollIntoView({ behavior: "smooth" });
    }
    if (action === "command-select") {
      refs.commandDialog.close();
      if (target.dataset.id) openReport(target.dataset.id);
      else {
        setTab("coverage");
        state.query = target.dataset.ticker;
        refs.search.value = state.query;
        renderResearch();
        document.querySelector("#research")?.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  document.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
  document.querySelector(".ledger-tabs")?.addEventListener("keydown", (event) => {
    const tabs = [...event.currentTarget.querySelectorAll("[data-ledger-tab]")];
    const current = tabs.indexOf(document.activeElement);
    if (current < 0 || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
        : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].click();
    tabs[next].focus();
  });
  refs.search.addEventListener("input", () => { state.query = refs.search.value; renderResearch(); });
  refs.sort.value = state.sort;
  refs.sort.addEventListener("change", () => { state.sort = refs.sort.value; renderResearch(); });
  refs.commandInput.addEventListener("input", () => renderCommandResults(refs.commandInput.value));
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (!refs.commandDialog.open) openCommand();
    }
  });
  document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }));

  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll(".desktop-nav a")];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-25% 0px -65%", threshold: [0, .1, .5] });
    ["overview", "daily-market", "position-ledger", "action-radar", "research"].forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
  }

  renderDailyInsight();
  updateCounts();
  renderActionRadar();
  renderPositionLedger();
  renderFilters();
  renderResearch();
  updateCompareDock();
})();
