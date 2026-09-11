const REPORT_PARAM = "report";
const MODULE_VERSION = "1.1.0";

const LINK_HOST_SELECTORS = [
  ".priority-code",
  ".table-ticker",
  ".ledger-ticker",
  ".report-card-v4 .ticker-mark",
  ".coverage-card-head h3",
  ".watchlist-item > div:first-child > strong",
  ".compare-code",
  "[data-role='priority-summary'] > div:nth-child(2) > strong",
  "[data-role='exclusion-list'] article > div:first-child > strong"
];

const normalizeToken = (value) => String(value ?? "").trim().toUpperCase();

export const sortReportsForTickerLink = (reports = []) => [...reports].sort((a, b) =>
  String(b?.date || "").localeCompare(String(a?.date || ""))
  || Number(a?.reportType === "trading") - Number(b?.reportType === "trading")
);

export const buildLatestReportMap = (reports = []) => {
  const latest = new Map();
  for (const report of sortReportsForTickerLink(reports)) {
    const ticker = normalizeToken(report?.ticker);
    if (ticker && report?.id && !latest.has(ticker)) latest.set(ticker, report);
  }
  return latest;
};

export const resolveReportId = (value, reports = []) => {
  const token = normalizeToken(value);
  if (!token) return null;

  const exact = reports.find((report) => normalizeToken(report?.id) === token);
  if (exact?.id) return exact.id;

  return buildLatestReportMap(reports).get(token)?.id || null;
};

export const withReportParam = (href, reportId) => {
  const url = new URL(href);
  if (reportId) url.searchParams.set(REPORT_PARAM, reportId);
  else url.searchParams.delete(REPORT_PARAM);
  return url;
};

export const withoutReportParam = (href) => withReportParam(href, null);

export const displayDateToIso = (value) => {
  const match = String(value ?? "").trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : null;
};

const isPlainPrimaryClick = (event) => event.button === 0
  && !event.metaKey
  && !event.ctrlKey
  && !event.shiftKey
  && !event.altKey;

export const initReportDeepLinks = () => {
  const source = window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.reports)) return;

  const reports = [...source.reports];
  const reportById = new Map(reports.map((report) => [report.id, report]));
  const latestByTicker = buildLatestReportMap(reports);
  const reportDialog = document.querySelector("#report-dialog");
  const originalTitle = document.title;
  let toastTimer;
  let decorateQueued = false;

  const notify = (message) => {
    const toast = document.querySelector("[data-role='toast']");
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2800);
  };

  const injectLinkStyles = () => {
    if (document.querySelector("#report-deeplink-style")) return;
    const style = document.createElement("style");
    style.id = "report-deeplink-style";
    style.textContent = `
      .report-deep-link{color:inherit;font:inherit;letter-spacing:inherit;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-color:currentColor;text-decoration-thickness:.06em;text-underline-offset:.18em;cursor:pointer}
      .report-deep-link:hover{text-decoration-style:solid;text-decoration-thickness:.08em}
      .report-deep-link:focus-visible{outline:2px solid currentColor;outline-offset:3px;border-radius:3px;text-decoration-color:currentColor}
      .priority-code>.report-deep-link,.table-ticker>.report-deep-link,.ledger-ticker>.report-deep-link,.ticker-mark>.report-deep-link,.compare-code>.report-deep-link{display:inline-block}
      .action-table td .table-ticker>.report-deep-link{display:inline-flex!important;align-items:center;min-height:36px;margin:0!important;padding:.3rem .62rem;color:var(--navy);background:linear-gradient(135deg,rgba(8,28,49,.065),rgba(8,120,90,.045));border:1px solid rgba(8,28,49,.2);border-radius:8px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.72);font-family:var(--font-editorial);font-size:1.18rem!important;font-weight:760;line-height:1;text-decoration:none;transition:border-color .16s,background .16s,box-shadow .16s}
      .action-table td .table-ticker>.report-deep-link:hover{color:var(--emerald);background:var(--emerald-pale);border-color:rgba(8,120,90,.45);box-shadow:inset 0 0 0 1px rgba(255,255,255,.78),0 5px 14px rgba(8,120,90,.08)}
      .exclusion-panel .report-exclusion-link{display:inline-flex;align-items:center;width:max-content;margin-top:10px;padding:7px 10px;color:var(--emerald);background:rgba(230,244,239,.72);border:1px solid rgba(8,120,90,.22);border-radius:8px;font-size:.58rem;font-weight:820;line-height:1.2;text-decoration:none;transition:border-color .16s,background .16s,transform .16s}
      .exclusion-panel .report-exclusion-link:hover{background:var(--emerald-pale);border-color:rgba(8,120,90,.45);transform:translateY(-1px)}
      .exclusion-panel .report-exclusion-link:focus-visible{outline:2px solid rgba(8,120,90,.55);outline-offset:3px}
      @media (width<=780px){.action-table td .table-ticker>.report-deep-link{min-height:38px;padding:.32rem .66rem;font-size:1.28rem!important}}
      @media (prefers-reduced-motion:reduce){.report-deep-link,.report-exclusion-link{transition:none}}
    `;
    document.head.appendChild(style);
  };

  const reportUrl = (id, { share = false } = {}) => {
    const canonicalHref = document.querySelector("link[rel='canonical']")?.href;
    const url = withReportParam(share && canonicalHref ? canonicalHref : window.location.href, id);
    if (share) url.hash = "";
    return url;
  };

  const syncReportUrl = (id) => {
    const report = reportById.get(id);
    if (!report) return;
    const url = reportUrl(id);
    if (new URL(window.location.href).searchParams.get(REPORT_PARAM) !== id) {
      window.history.replaceState(window.history.state, "", url);
    }
    document.title = `${report.ticker} | ${report.edition || "Hồ sơ định giá"} | Xuân Lê TVS`;
  };

  const clearReportUrl = () => {
    const current = new URL(window.location.href);
    if (current.searchParams.has(REPORT_PARAM)) {
      window.history.replaceState(window.history.state, "", withoutReportParam(current.href));
    }
    document.title = originalTitle;
  };

  const openReportById = (id) => {
    if (!reportById.has(id)) return false;
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.hidden = true;
    trigger.dataset.action = "open-report";
    trigger.dataset.id = id;
    document.body.appendChild(trigger);
    trigger.click();
    trigger.remove();
    return true;
  };

  const compareReportId = (host, ticker) => {
    if (!host.matches(".compare-code")) return null;
    const headerCell = host.closest("th");
    const headerRow = headerCell?.parentElement;
    const columnIndex = headerRow ? [...headerRow.children].indexOf(headerCell) : -1;
    const table = host.closest(".compare-table");
    if (!table || columnIndex <= 0) return null;

    const dateRow = [...table.querySelectorAll("tbody tr")].find((row) =>
      row.querySelector("th")?.textContent.trim() === "Ngày định giá"
    );
    const reportDate = displayDateToIso(dateRow?.children[columnIndex]?.textContent);
    if (!reportDate) return null;

    const matches = reports.filter((report) =>
      normalizeToken(report?.ticker) === ticker
      && report?.date === reportDate
      && report?.reportType !== "trading"
    );
    return matches.length === 1 ? matches[0].id : null;
  };

  const scopedReportId = (host, ticker) => {
    const compareId = compareReportId(host, ticker);
    if (compareId) return compareId;

    const scope = host.closest(".report-card-v4, .coverage-card, .priority-card, .watchlist-item");
    const trigger = scope?.querySelector("[data-action='open-report'][data-id]");
    const scopedId = trigger?.dataset.id;
    if (scopedId && reportById.has(scopedId)) return scopedId;
    return latestByTicker.get(ticker)?.id || null;
  };

  const decorateTickerLinks = (root = document) => {
    for (const selector of LINK_HOST_SELECTORS) {
      root.querySelectorAll(selector).forEach((host) => {
        if (host.dataset.reportDeepLinked) return;
        const ticker = normalizeToken(host.textContent);
        const id = scopedReportId(host, ticker);
        if (!id) return;

        const anchor = document.createElement("a");
        anchor.className = "report-deep-link";
        anchor.href = reportUrl(id).href;
        anchor.dataset.reportDeepLink = "";
        anchor.dataset.reportId = id;
        anchor.textContent = ticker;
        anchor.title = `Mở hồ sơ định giá ${ticker}`;
        anchor.setAttribute("aria-label", `Mở hồ sơ định giá ${ticker}`);

        host.dataset.reportDeepLinked = id;
        host.replaceChildren(anchor);
      });
    }
  };

  const decorateExclusionLinks = (root = document) => {
    root.querySelectorAll("[data-role='exclusion-list'] article").forEach((article) => {
      if (article.querySelector(".report-exclusion-link")) return;
      const tickerHost = article.querySelector(":scope > div:first-child > strong");
      const ticker = normalizeToken(tickerHost?.textContent);
      const id = latestByTicker.get(ticker)?.id;
      if (!id) return;

      const anchor = document.createElement("a");
      anchor.className = "report-exclusion-link";
      anchor.href = reportUrl(id).href;
      anchor.dataset.reportDeepLink = "";
      anchor.dataset.reportId = id;
      anchor.textContent = "Mở hồ sơ định giá ↗";
      anchor.title = `Mở hồ sơ định giá ${ticker}`;
      anchor.setAttribute("aria-label", `Mở hồ sơ định giá ${ticker}`);
      article.appendChild(anchor);
    });
  };

  const decorateReportLinks = (root = document) => {
    decorateTickerLinks(root);
    decorateExclusionLinks(root);
  };

  const scheduleDecorate = () => {
    if (decorateQueued) return;
    decorateQueued = true;
    queueMicrotask(() => {
      decorateQueued = false;
      decorateReportLinks(document);
    });
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand?.("copy") === true;
    textarea.remove();
    return copied;
  };

  const shareDashboard = async (id) => {
    const report = reportById.get(id);
    if (!report) return;
    const url = reportUrl(id, { share: true }).href;
    const payload = {
      title: `${report.ticker} | Hồ sơ định giá | Xuân Lê TVS`,
      text: `${report.ticker} — ${report.recommendation || "Hồ sơ định giá"}`,
      url
    };

    try {
      if (navigator.share) {
        await navigator.share(payload);
        return;
      }
      if (await copyText(url)) notify("Đã sao chép đường dẫn hồ sơ định giá.");
      else notify("Không thể sao chép tự động. Hãy sao chép URL trên thanh địa chỉ.");
    } catch (error) {
      if (error?.name === "AbortError") return;
      try {
        if (await copyText(url)) notify("Đã sao chép đường dẫn hồ sơ định giá.");
        else notify("Không thể chia sẻ. Hãy sao chép URL trên thanh địa chỉ.");
      } catch {
        notify("Không thể chia sẻ. Hãy sao chép URL trên thanh địa chỉ.");
      }
    }
  };

  injectLinkStyles();
  decorateReportLinks(document);

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const deepLink = target.closest("a[data-report-deep-link][data-report-id]");
    if (deepLink) {
      if (!isPlainPrimaryClick(event)) return;
      event.preventDefault();
      openReportById(deepLink.dataset.reportId);
      return;
    }

    const openAction = target.closest("[data-action='open-report'][data-id], [data-action='command-select'][data-id]");
    const id = openAction?.dataset.id;
    if (id && reportById.has(id)) syncReportUrl(id);
  });

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const shareButton = target?.closest("[data-action='share-report'][data-id]");
    if (!shareButton) return;
    const id = shareButton.dataset.id;
    if (!id || !reportById.has(id)) return;
    event.preventDefault();
    event.stopPropagation();
    void shareDashboard(id);
  }, true);

  reportDialog?.addEventListener("close", clearReportUrl);

  const observer = new MutationObserver(scheduleDecorate);
  if (document.body) observer.observe(document.body, { childList: true, subtree: true });

  const rawInitial = new URL(window.location.href).searchParams.get(REPORT_PARAM);
  if (rawInitial) {
    const initialId = resolveReportId(rawInitial, reports);
    if (!initialId) {
      clearReportUrl();
      notify("Đường dẫn hồ sơ định giá không hợp lệ hoặc đã được thay thế.");
    } else {
      syncReportUrl(initialId);
      queueMicrotask(() => openReportById(initialId));
    }
  }

  window.__XLTVS_REPORT_DEEPLINKS__ = {
    version: MODULE_VERSION,
    reportCount: reportById.size,
    parameter: REPORT_PARAM,
    selectors: [...LINK_HOST_SELECTORS]
  };
};

if (typeof window !== "undefined" && typeof document !== "undefined") {
  initReportDeepLinks();
}
