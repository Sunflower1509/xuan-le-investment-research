(() => {
  "use strict";

  const data = window.RESEARCH_DATA;
  const mapping = window.COMPANY_LOGOS;
  if (!data || !Array.isArray(data.coverage) || !mapping?.logos) return;

  const AVATAR_CLASS = "company-logo-avatar";
  const STYLE_ID = "xltvs-company-logo-avatar-v1";
  const normalizeTicker = (value) => String(value || "").trim().toUpperCase();
  const logos = new Map(Object.entries(mapping.logos));
  const coverageTickers = data.coverage.map((item) => normalizeTicker(item?.ticker)).filter(Boolean);
  const missing = coverageTickers.filter((ticker) => !logos.has(ticker));
  window.__XLTVS_COMPANY_LOGO_STATUS__ = Object.freeze({
    coverage: coverageTickers.length,
    mapped: logos.size,
    missing: Object.freeze([...missing])
  });

  if (missing.length) console.error(`Company logo mapping thiếu ${missing.length} mã: ${missing.join(", ")}`);

  const ensureStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .company-logo-shell{display:grid;place-items:center;position:relative;isolation:isolate;overflow:hidden;background:#fff;border:1px solid #dcd8ce;box-shadow:0 4px 12px rgba(8,28,49,.08);flex:0 0 auto}
      .${AVATAR_CLASS}{display:block;width:100%;height:100%;object-fit:contain;background:#fff}
      .company-logo-code{position:absolute;z-index:2;right:2px;bottom:2px;max-width:calc(100% - 4px);overflow:hidden;color:#fff!important;background:rgba(8,28,49,.86);border-radius:4px;margin:0!important;padding:1px 3px;font-family:var(--font-sans)!important;font-size:.38rem!important;font-weight:850!important;letter-spacing:.02em;line-height:1.2;text-overflow:ellipsis;white-space:nowrap}
      .company-logo-identity{display:grid!important;grid-template-columns:42px minmax(0,1fr);align-items:start;gap:10px;min-width:0}
      .company-logo-coverage{width:42px;height:42px;border-radius:10px}
      .company-logo-meta{min-width:0}
      .company-logo-report{width:46px;height:46px;border-radius:11px}
      .ticker-mark.company-logo-report-host{position:relative;overflow:hidden;background:#fff;border:1px solid #dcd8ce;box-shadow:0 4px 12px rgba(8,28,49,.08)}
      .stock-watch-identity{display:flex;align-items:center;gap:10px;min-width:0}
      .company-logo-watchlist{width:40px;height:40px;border-radius:9px}
      .stock-watch-meta{min-width:0}
      .command-item-code.company-logo-command-host{position:relative;overflow:hidden;background:#fff;border:1px solid #dcd8ce;box-shadow:0 4px 12px rgba(8,28,49,.08)}
      .company-logo-command{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;box-shadow:none}
      @media (width<=720px){.company-logo-identity{grid-template-columns:38px minmax(0,1fr);gap:8px}.company-logo-coverage{width:38px;height:38px}.company-logo-watchlist{width:36px;height:36px}}
    `;
    document.head.append(style);
  };

  const makeImage = (ticker, logo, placement) => {
    const img = document.createElement("img");
    img.className = `${AVATAR_CLASS} company-logo-${placement}`;
    img.src = logo.path;
    img.alt = placement === "command" ? "" : logo.alt;
    img.width = placement === "report" ? 46 : placement === "command" ? 42 : 40;
    img.height = img.width;
    img.loading = "lazy";
    img.decoding = "async";
    img.dataset.ticker = ticker;
    return img;
  };

  const codeBadge = (ticker) => {
    const label = document.createElement("span");
    label.className = "company-logo-code";
    label.textContent = ticker;
    return label;
  };

  const enhanceReports = (root = document) => {
    root.querySelectorAll(".report-card-v4:not([data-logo-enhanced='1'])").forEach((card) => {
      const host = card.querySelector(".ticker-mark");
      const ticker = normalizeTicker(host?.textContent);
      const logo = logos.get(ticker);
      if (!host || !ticker || !logo) return;
      host.textContent = "";
      host.classList.add("company-logo-report-host");
      const img = makeImage(ticker, logo, "report");
      img.addEventListener("error", () => {
        host.classList.remove("company-logo-report-host");
        host.textContent = ticker;
      }, { once: true });
      host.append(img, codeBadge(ticker));
      card.dataset.logoEnhanced = "1";
    });
  };

  const enhanceCoverage = (root = document) => {
    root.querySelectorAll(".coverage-card:not([data-logo-enhanced='1'])").forEach((card) => {
      const head = card.querySelector(".coverage-card-head");
      const identity = head?.firstElementChild;
      const ticker = normalizeTicker(identity?.querySelector("h3")?.textContent);
      const logo = logos.get(ticker);
      if (!head || !identity || !ticker || !logo) return;

      const meta = document.createElement("div");
      meta.className = "company-logo-meta";
      while (identity.firstChild) meta.append(identity.firstChild);
      const shell = document.createElement("span");
      shell.className = "company-logo-shell company-logo-coverage";
      const img = makeImage(ticker, logo, "coverage");
      img.addEventListener("error", () => shell.remove(), { once: true });
      shell.append(img);
      identity.classList.add("company-logo-identity");
      identity.append(shell, meta);
      card.dataset.logoEnhanced = "1";
    });
  };

  const enhanceWatchlist = (root = document) => {
    root.querySelectorAll(".watchlist-item:not([data-logo-enhanced='1'])").forEach((item) => {
      const identity = item.firstElementChild;
      const ticker = normalizeTicker(identity?.querySelector("strong")?.textContent);
      const logo = logos.get(ticker);
      if (!identity || !ticker || !logo) return;

      const meta = document.createElement("div");
      meta.className = "stock-watch-meta";
      while (identity.firstChild) meta.append(identity.firstChild);
      const shell = document.createElement("span");
      shell.className = "company-logo-shell company-logo-watchlist";
      const img = makeImage(ticker, logo, "watchlist");
      img.addEventListener("error", () => shell.remove(), { once: true });
      shell.append(img);
      identity.classList.add("stock-watch-identity");
      identity.append(shell, meta);
      item.dataset.logoEnhanced = "1";
    });
  };

  const enhanceCommand = (root = document) => {
    root.querySelectorAll(".command-item:not([data-logo-enhanced='1'])").forEach((item) => {
      const ticker = normalizeTicker(item.dataset.ticker);
      const host = item.querySelector(".command-item-code");
      const logo = logos.get(ticker);
      if (!ticker || !host || !logo) return;
      host.textContent = "";
      host.classList.add("company-logo-command-host");
      const img = makeImage(ticker, logo, "command");
      img.addEventListener("error", () => img.remove(), { once: true });
      host.append(img, codeBadge(ticker));
      item.dataset.logoEnhanced = "1";
    });
  };

  let scheduled = false;
  const enhanceAll = () => {
    scheduled = false;
    ensureStyles();
    const research = document.querySelector("[data-role='research-results']") || document;
    enhanceReports(research);
    enhanceCoverage(research);
    enhanceWatchlist(document.querySelector("[data-role='watchlist-content']") || document);
    enhanceCommand(document.querySelector("[data-role='command-results']") || document);
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(enhanceAll);
  };
  const observe = (selector) => {
    const root = document.querySelector(selector);
    if (root) new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  };

  enhanceAll();
  observe("[data-role='research-results']");
  observe("[data-role='watchlist-content']");
  observe("[data-role='command-results']");
})();
