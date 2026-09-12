const COMPANY_VISUAL_MODULE_VERSION = "1.0.0";

const initCompanyVisualCards = () => {
  const visualSource = window.COMPANY_VISUALS;
  const logoSource = window.COMPANY_LOGOS;
  if (!visualSource?.visuals || !logoSource?.logos) return;

  const visuals = visualSource.visuals;
  const logos = logoSource.logos;
  let enhanceQueued = false;

  const injectStyles = () => {
    if (document.querySelector("#company-visual-card-style")) return;
    const style = document.createElement("style");
    style.id = "company-visual-card-style";
    style.textContent = `
      .report-visual.is-company-asset>a{background:linear-gradient(135deg,rgba(230,244,239,.72),rgba(248,245,238,.92));border-color:rgba(8,120,90,.2)}
      .report-visual.is-company-asset .report-visual-label{color:#fff;background:rgba(8,120,90,.88);box-shadow:0 2px 8px rgba(8,28,49,.12)}
      .company-visual-logo{position:absolute;left:6px;bottom:6px;z-index:4;width:30px;height:30px;padding:5px;border:1px solid rgba(8,28,49,.1);border-radius:8px;background:rgba(255,255,255,.94);box-shadow:0 4px 12px rgba(8,28,49,.16);display:grid;place-items:center;backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);pointer-events:none}
      .report-visual .company-visual-logo img{position:static!important;z-index:auto!important;width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;transform:none!important;filter:none!important;transition:none!important}
      .report-visual.is-company-asset>a:hover .company-visual-logo img,.report-visual.is-company-asset>a:focus-visible .company-visual-logo img{transform:none!important;filter:none!important}
      .report-visual.is-company-asset>a:focus-visible{outline:3px solid rgba(8,120,90,.34);outline-offset:3px}
      @media (width<=430px){.company-visual-logo{width:27px;height:27px;padding:4px;left:5px;bottom:5px}.report-visual.is-company-asset .report-visual-label{font-size:.36rem}}
      @media (prefers-reduced-motion:reduce){.report-visual.is-company-asset img{transition:none!important}}
    `;
    document.head.appendChild(style);
  };

  const enhanceCard = (card) => {
    const ticker = String(card.querySelector(".ticker-mark")?.textContent || "").trim().toUpperCase();
    const visual = visuals[ticker];
    const logo = logos[ticker];
    if (!ticker || !visual?.verified || visual.kind !== "company-asset" || !visual.src || !visual.sourceUrl || !logo?.path) return;

    const figure = card.querySelector(".report-visual-card");
    const anchor = figure?.querySelector(":scope > a");
    const image = anchor?.querySelector(":scope > img");
    const label = anchor?.querySelector(".report-visual-label");
    if (!figure || !anchor || !image || !label) return;
    if (figure.dataset.companyVisualFailed === ticker) return;
    if (figure.dataset.companyVisual === ticker && image.getAttribute("src") === visual.src) return;

    const fallback = {
      src: image.getAttribute("src") || "",
      alt: image.getAttribute("alt") || "",
      href: anchor.getAttribute("href") || "",
      title: anchor.getAttribute("title") || "",
      ariaLabel: anchor.getAttribute("aria-label") || "",
      label: label.textContent || "",
      reportCover: figure.classList.contains("is-report-cover"),
      illustration: figure.classList.contains("is-illustration"),
      objectPosition: image.style.objectPosition || ""
    };

    const logoWrap = document.createElement("span");
    logoWrap.className = "company-visual-logo";
    logoWrap.setAttribute("aria-hidden", "true");
    const logoImage = document.createElement("img");
    logoImage.src = logo.path;
    logoImage.alt = "";
    logoImage.width = 40;
    logoImage.height = 40;
    logoImage.loading = "lazy";
    logoImage.decoding = "async";
    logoWrap.appendChild(logoImage);

    figure.querySelector(".company-visual-logo")?.remove();
    figure.classList.remove("is-report-cover", "is-illustration");
    figure.classList.add("is-company-asset");
    figure.dataset.companyVisual = ticker;

    anchor.href = visual.sourceUrl;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.title = `${visual.caption || visual.subject || ticker} • Nguồn: ${visual.sourceLabel || ticker}`;
    anchor.setAttribute("aria-label", `${visual.caption || visual.subject || ticker}. Mở nguồn doanh nghiệp đã xác minh.`);

    image.src = visual.src;
    image.alt = visual.alt || visual.caption || `Ảnh hoạt động ${ticker}`;
    image.width = Number(visual.width) || 960;
    image.height = Number(visual.height) || 540;
    image.loading = "lazy";
    image.decoding = "async";
    image.style.objectPosition = visual.objectPosition || "center center";
    image.classList.add("company-visual-image");

    label.textContent = "NGUỒN DN ↗";
    anchor.insertBefore(logoWrap, label);

    image.addEventListener("error", () => {
      figure.dataset.companyVisualFailed = ticker;
      figure.removeAttribute("data-company-visual");
      figure.classList.remove("is-company-asset");
      if (fallback.reportCover) figure.classList.add("is-report-cover");
      if (fallback.illustration) figure.classList.add("is-illustration");
      logoWrap.remove();
      image.classList.remove("company-visual-image");
      image.src = fallback.src;
      image.alt = fallback.alt;
      image.style.objectPosition = fallback.objectPosition;
      anchor.href = fallback.href;
      anchor.title = fallback.title;
      if (fallback.ariaLabel) anchor.setAttribute("aria-label", fallback.ariaLabel);
      else anchor.removeAttribute("aria-label");
      label.textContent = fallback.label;
    }, { once: true });
  };

  const enhanceAll = () => {
    document.querySelectorAll(".report-card-v4").forEach(enhanceCard);
  };

  const scheduleEnhance = () => {
    if (enhanceQueued) return;
    enhanceQueued = true;
    queueMicrotask(() => {
      enhanceQueued = false;
      enhanceAll();
    });
  };

  injectStyles();
  enhanceAll();

  const observer = new MutationObserver(scheduleEnhance);
  if (document.body) observer.observe(document.body, { childList: true, subtree: true });

  window.__XLTVS_COMPANY_VISUALS__ = {
    version: COMPANY_VISUAL_MODULE_VERSION,
    schema: visualSource.meta?.schema || null,
    pilot: visualSource.meta?.pilot === true,
    count: Object.keys(visuals).length
  };
};

if (typeof window !== "undefined" && typeof document !== "undefined") {
  initCompanyVisualCards();
}
