(() => {
  "use strict";

  const source = window.RESEARCH_DATA;
  if (!source || !Array.isArray(source.reports) || !Array.isArray(source.coverage)) return;

  const reports = [...source.reports];
  const coverage = [...source.coverage];
  const reportById = new Map(reports.map((report) => [report.id, report]));
  const latestByTicker = new Map();
  [...reports]
    .sort((a, b) => b.date.localeCompare(a.date))
    .forEach((report) => {
      if (!latestByTicker.has(report.ticker)) latestByTicker.set(report.ticker, report);
    });

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

  const date = (value) => {
    if (!value) return "—";
    const [year, month, day] = value.split("-");
    return `${day}/${month}/${year}`;
  };

  const statusText = {
    all: "Tất cả trạng thái",
    wait: "CHỜ / THEO DÕI",
    avoid: "TRÁNH MUA MỚI",
    reject: "LOẠI",
    unreported: "Chưa có PDF"
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
    const sectors = new Set(coverage.map((item) => item.sector));
    document.querySelectorAll("[data-role='report-count'],[data-role='report-tab-count']").forEach((el) => { el.textContent = reports.length; });
    document.querySelectorAll("[data-role='coverage-count'],[data-role='coverage-tab-count']").forEach((el) => { el.textContent = coverage.length; });
    document.querySelectorAll("[data-role='sector-count']").forEach((el) => { el.textContent = sectors.size; });
    document.querySelectorAll("[data-role='latest-report-count']").forEach((el) => { el.textContent = latestReports.length; });
    updateWatchlistCounts();
  };

  const updateWatchlistCounts = () => {
    document.querySelectorAll("[data-role='watchlist-count'],[data-role='watchlist-tab-count']").forEach((el) => { el.textContent = state.watchlist.size; });
  };

  const renderFeatured = () => {
    const report = reportById.get("VCB-20260714") || reports[0];
    const host = document.querySelector("[data-role='featured-report']");
    if (!host || !report) return;
    const span = Math.max(1, report.rangeHigh - report.rangeLow);
    const basePos = Math.min(100, Math.max(0, ((report.baseValue - report.rangeLow) / span) * 100));
    const marketPos = Number.isFinite(report.marketPrice)
      ? Math.min(100, Math.max(0, ((report.marketPrice - report.rangeLow) / span) * 100))
      : null;
    host.innerHTML = `
      <div class="featured-head">
        <div class="featured-head-top">
          <div><p class="featured-kicker">01 / Báo cáo định giá nổi bật</p><h3>${escapeHtml(report.ticker)} <span>— ${escapeHtml(report.recommendation)}</span></h3><p class="featured-company">${escapeHtml(report.company)} • ${escapeHtml(report.exchange)}</p></div>
          <span class="status-badge ${escapeHtml(report.status)}">${escapeHtml(report.recommendation)}</span>
        </div>
      </div>
      <div class="featured-body">
        <div class="metric-grid">
          <div class="dashboard-metric"><span>Giá thị trường</span><strong>${number(report.marketPrice)}</strong><small>đồng/cp</small></div>
          <div class="dashboard-metric emphasis"><span>Giá trị cơ sở</span><strong>${number(report.baseValue)}</strong><small>đồng/cp</small></div>
          <div class="dashboard-metric"><span>Chênh lệch cơ sở</span><strong>${escapeHtml(report.gapLabel || "—")}</strong><small>tại ngày định giá</small></div>
        </div>
        <div class="valuation-rail">
          <div class="valuation-rail-title"><span>Vùng giá trị hợp lý</span><strong>${number(report.rangeLow)}–${number(report.rangeHigh)} đồng/cp</strong></div>
          <div class="value-track">
            <span class="value-marker" style="left:${basePos}%"><i></i><b>Cơ sở</b></span>
            ${marketPos === null ? "" : `<span class="value-marker market" style="left:${marketPos}%"><i></i><b>Thị trường</b></span>`}
          </div>
          <div class="rail-labels"><span>${number(report.rangeLow)}</span><span>${number(report.rangeHigh)}</span></div>
        </div>
        <p class="featured-summary">${escapeHtml(report.summary)}</p>
        <div class="featured-actions">
          <button class="button button-secondary" type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">Xem dashboard chi tiết</button>
          <a class="button button-primary" href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer"><svg><use href="#i-file"></use></svg>Mở báo cáo PDF</a>
        </div>
      </div>`;
  };

  const renderDashboard = () => {
    renderFeatured();
    const counts = latestReports.reduce((acc, report) => {
      const key = report.status === "wait" ? "wait" : "risk";
      acc[key] += 1;
      return acc;
    }, { wait: 0, risk: 0 });
    const total = Math.max(1, counts.wait + counts.risk);
    const waitShare = (counts.wait / total) * 100;
    const donut = document.querySelector("[data-role='recommendation-donut']");
    if (donut) donut.style.setProperty("--wait", `${waitShare}%`);
    const legend = document.querySelector("[data-role='recommendation-legend']");
    if (legend) legend.innerHTML = `
      <div class="legend-row"><i style="background:var(--gold)"></i><span>CHỜ / THEO DÕI</span><strong>${counts.wait}</strong></div>
      <div class="legend-row"><i style="background:var(--red)"></i><span>TRÁNH / LOẠI</span><strong>${counts.risk}</strong></div>`;

    const sectorCounts = coverage.reduce((acc, item) => {
      acc[item.sector] = (acc[item.sector] || 0) + 1;
      return acc;
    }, {});
    const sectorHost = document.querySelector("[data-role='sector-mini-list']");
    if (sectorHost) sectorHost.innerHTML = Object.entries(sectorCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([sector, count]) => `<span>${escapeHtml(sector)} · ${count}</span>`).join("");

    const activity = document.querySelector("[data-role='activity-list']");
    if (activity) activity.innerHTML = reports.slice(0, 3).map((report) => `
      <button class="activity-item" type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">
        <span class="activity-code">${escapeHtml(report.ticker)}</span>
        <span><strong>${escapeHtml(report.recommendation)}</strong><span>${escapeHtml(report.edition)}</span></span>
        <time datetime="${escapeHtml(report.date)}">${date(report.date)}</time>
      </button>`).join("");
  };

  const renderFilters = () => {
    const sectors = ["all", ...new Set(coverage.map((item) => item.sector))];
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
    if (state.sort === "ticker") return a.ticker.localeCompare(b.ticker);
    if (state.sort === "sector") return a.sector.localeCompare(b.sector, "vi") || a.ticker.localeCompare(b.ticker);
    if (state.sort === "base-desc") return (b.baseValue || -1) - (a.baseValue || -1);
    return b.date.localeCompare(a.date);
  });

  const sortCoverage = (items) => [...items].sort((a, b) => {
    if (state.sort === "sector") return a.sector.localeCompare(b.sector, "vi") || a.ticker.localeCompare(b.ticker);
    if (state.sort === "newest") {
      const ad = latestByTicker.get(a.ticker)?.date || "0000-00-00";
      const bd = latestByTicker.get(b.ticker)?.date || "0000-00-00";
      return bd.localeCompare(ad) || a.ticker.localeCompare(b.ticker);
    }
    return a.ticker.localeCompare(b.ticker);
  });

  const reportCard = (report) => {
    const watched = state.watchlist.has(report.ticker);
    const compared = state.compare.has(report.id);
    return `<article class="report-card-v4 status-${escapeHtml(report.status)}">
      <div class="report-card-topline"></div>
      <div class="report-card-head">
        <div class="report-identity"><span class="ticker-mark">${escapeHtml(report.ticker)}</span><div><h3>${escapeHtml(report.edition)}</h3><p>${escapeHtml(report.sector)} • ${escapeHtml(report.exchange)}</p></div></div>
        <div class="card-tools">
          <button class="${watched ? "active" : ""}" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(report.ticker)}" aria-label="${watched ? "Bỏ khỏi" : "Thêm vào"} watchlist"><svg><use href="#i-star"></use></svg></button>
          <button class="${compared ? "active" : ""}" type="button" data-action="toggle-compare" data-id="${escapeHtml(report.id)}" aria-label="${compared ? "Bỏ khỏi" : "Thêm vào"} so sánh"><svg><use href="#i-compare"></use></svg></button>
        </div>
      </div>
      <div class="report-card-body">
        <div>
          <div class="report-meta-line"><span class="recommendation-label ${escapeHtml(report.status)}">${escapeHtml(report.recommendation)}</span><time datetime="${escapeHtml(report.date)}">${date(report.date)}</time></div>
          <h3 class="report-company">${escapeHtml(report.company)}</h3>
        </div>
        <div class="card-metrics">
          <div class="card-metric emphasis"><span>Giá trị cơ sở</span><strong>${number(report.baseValue)}</strong></div>
          <div class="card-metric"><span>Vùng hợp lý</span><strong>${number(report.rangeLow)}–${number(report.rangeHigh)}</strong></div>
        </div>
        <p class="report-summary">${escapeHtml(report.summary)}</p>
        <div class="report-card-actions">
          <button class="details-button" type="button" data-action="open-report" data-id="${escapeHtml(report.id)}">Dashboard chi tiết</button>
          <a class="pdf-button" href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer"><svg><use href="#i-file"></use></svg>PDF</a>
        </div>
      </div>
    </article>`;
  };

  const coverageCard = (item) => {
    const report = item.reportId ? reportById.get(item.reportId) : null;
    const watched = state.watchlist.has(item.ticker);
    return `<article class="coverage-card">
      <div class="coverage-card-head"><div><h3>${escapeHtml(item.ticker)}</h3><span class="exchange">${escapeHtml(item.exchange)}</span></div><button class="icon-button ${watched ? "active" : ""}" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(item.ticker)}" aria-label="${watched ? "Bỏ khỏi" : "Thêm vào"} watchlist"><svg><use href="#i-star"></use></svg></button></div>
      <p>${escapeHtml(item.company)}</p><span class="sector">${escapeHtml(item.sector)}</span>
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

  const setTab = (tab) => {
    state.tab = tab;
    document.querySelectorAll("[data-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.tab === tab)));
    renderResearch();
  };

  const resetFilters = () => {
    state.query = "";
    state.sector = "all";
    state.status = "all";
    state.sort = "newest";
    refs.search.value = "";
    refs.sort.value = "newest";
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
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size >= 3) return toast("Chỉ có thể so sánh tối đa 3 báo cáo.");
    else state.compare.add(id);
    renderResearch();
    updateCompareDock();
  };

  const openReport = (id) => {
    const report = reportById.get(id);
    if (!report) return;
    const watched = state.watchlist.has(report.ticker);
    const compared = state.compare.has(report.id);
    refs.reportDialogContent.innerHTML = `
      <div class="report-dialog-hero">
        <div class="report-dialog-head"><div><p class="terminal-eyebrow">Equity Research • ${escapeHtml(report.exchange)}</p><h2 class="report-dialog-code" id="report-dialog-title">${escapeHtml(report.ticker)}</h2><p class="report-dialog-company">${escapeHtml(report.company)}</p><p class="report-dialog-meta">${escapeHtml(report.sector)} • ${date(report.date)} • ${escapeHtml(report.edition)}</p></div><span class="status-badge ${escapeHtml(report.status)}">${escapeHtml(report.recommendation)}</span></div>
      </div>
      <div class="report-dialog-body">
        <div class="dialog-metrics">
          <div class="dialog-metric"><span>Giá thị trường</span><strong>${number(report.marketPrice)}</strong></div>
          <div class="dialog-metric emphasis"><span>Giá trị cơ sở</span><strong>${number(report.baseValue)}</strong></div>
          <div class="dialog-metric"><span>Cận dưới</span><strong>${number(report.rangeLow)}</strong></div>
          <div class="dialog-metric"><span>Cận trên</span><strong>${number(report.rangeHigh)}</strong></div>
        </div>
        <div class="dialog-thesis"><h3>Luận điểm tóm tắt</h3><p>${escapeHtml(report.summary)}</p><dl><div><dt>Khuyến nghị</dt><dd>${escapeHtml(report.recommendation)}</dd></div><div><dt>Phương pháp</dt><dd>${escapeHtml(report.method || "Xem trong báo cáo PDF")}</dd></div><div><dt>Chênh lệch</dt><dd>${escapeHtml(report.gapLabel || "—")}</dd></div></dl></div>
      </div>
      <div class="dialog-actions">
        <a class="button button-primary" href="${escapeHtml(report.file)}" target="_blank" rel="noreferrer"><svg><use href="#i-file"></use></svg>Mở báo cáo PDF</a>
        <button class="button button-secondary" type="button" data-action="toggle-watch" data-ticker="${escapeHtml(report.ticker)}"><svg><use href="#i-star"></use></svg>${watched ? "Bỏ khỏi watchlist" : "Thêm watchlist"}</button>
        <button class="button button-secondary" type="button" data-action="toggle-compare" data-id="${escapeHtml(report.id)}"><svg><use href="#i-compare"></use></svg>${compared ? "Bỏ so sánh" : "Thêm so sánh"}</button>
        <button class="button button-secondary" type="button" data-action="share-report" data-id="${escapeHtml(report.id)}"><svg><use href="#i-share"></use></svg>Chia sẻ</button>
      </div>`;
    refs.reportDialog.showModal();
  };

  const renderCompareDialog = () => {
    const selected = [...state.compare].map((id) => reportById.get(id)).filter(Boolean);
    if (selected.length < 2) return toast("Hãy chọn ít nhất 2 báo cáo để so sánh.");
    const rows = [
      ["Doanh nghiệp", (r) => escapeHtml(r.company)],
      ["Ngày định giá", (r) => date(r.date)],
      ["Khuyến nghị", (r) => escapeHtml(r.recommendation)],
      ["Giá thị trường", (r) => number(r.marketPrice)],
      ["Giá trị cơ sở", (r) => number(r.baseValue)],
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
      ? `<div class="watchlist-grid">${items.map((item) => `<div class="watchlist-item"><div><strong>${escapeHtml(item.ticker)}</strong><span>${escapeHtml(item.company)} • ${escapeHtml(item.sector)}</span></div><div>${item.reportId ? `<button type="button" data-action="open-report" data-id="${escapeHtml(item.reportId)}" aria-label="Mở báo cáo"><svg><use href="#i-file"></use></svg></button>` : ""}<button type="button" data-action="toggle-watch" data-ticker="${escapeHtml(item.ticker)}" aria-label="Bỏ khỏi watchlist"><svg><use href="#i-close"></use></svg></button></div></div>`).join("")}</div>`
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
    if (action === "share-report") shareReport(target.dataset.id);
    if (action === "no-report") toast("Mã này đã được phân tích nhưng chưa có báo cáo PDF trong thư viện.");
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
  refs.search.addEventListener("input", () => { state.query = refs.search.value; renderResearch(); });
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
    ["overview", "dashboard", "research", "framework"].forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
  }

  updateCounts();
  renderDashboard();
  renderFilters();
  renderResearch();
  updateCompareDock();
})();
