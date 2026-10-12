import { test, expect } from "@playwright/test";

async function openMarketBrief(page) {
  await page.goto("./#daily-market", { waitUntil: "domcontentloaded" });
  await page.locator("[data-role='daily-insight'] .daily-decision-brief").waitFor({ state: "visible" });
  await page.waitForFunction(() => document.fonts?.status === "loaded" || !document.fonts);
  await page.waitForTimeout(180);
}

test("Daily Market Research Brief v2.2.2 fill-first headline and full-width thesis", async ({ page }, testInfo) => {
  await openMarketBrief(page);

  const viewport = page.viewportSize();
  const insight = page.locator("[data-role='daily-insight']");
  const brief = insight.locator(".daily-decision-brief");
  const headline = brief.locator(".daily-brief-narrative > .daily-title-line > h3");
  const titleDate = brief.locator(".daily-title-date");
  const thesis = brief.locator(".daily-thesis");
  const evidence = brief.locator(".daily-key-readings article");
  const snapshot = brief.locator(".daily-market-snapshot");
  const snapshotRows = snapshot.locator(".daily-snapshot-row");
  const decision = brief.locator(".daily-decision-bar");

  // The evidence and headline are updated each EOD; test layout and the actual latest
  // data date rather than pinning a superseded 25/09/2026 market snapshot.
  const latestDate = await page.evaluate(() => {
    const entries = window.DAILY_MARKET_INSIGHTS?.entries || [];
    return [...entries].map((item) => item.date).sort().at(-1);
  });
  expect(latestDate).toMatch(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
  await expect(titleDate).toHaveAttribute("datetime", latestDate);
  await expect(titleDate).toHaveText(latestDate.slice(8, 10) + "/" + latestDate.slice(5, 7));
  expect((await headline.innerText()).trim().length).toBeGreaterThan(12);

  await expect(brief.locator(".daily-executive-thesis h4")).toHaveText("Luận điểm chính");
  expect((await thesis.innerText()).trim().length).toBeGreaterThan(40);
  await expect(brief.locator(".daily-evidence-strip h4")).toHaveText("Bằng chứng thị trường");
  await expect(brief.getByText("FACT → INTERPRETATION")).toHaveCount(0);
  await expect(evidence).toHaveCount(3);

  // Evidence values legitimately change by session, while the semantic structure is fixed.
  const breadth = evidence.filter({ hasText: "Độ rộng" });
  const breadthSignalParts = breadth.locator(".daily-reading-signal .daily-semantic-text");
  expect(await breadthSignalParts.count()).toBeGreaterThanOrEqual(2);

  const breadthDetailParts = breadth.locator(".daily-reading-content p .daily-semantic-text");
  expect(await breadthDetailParts.count()).toBeGreaterThanOrEqual(2);

  const liquidityEvidence = evidence.filter({ hasText: "Thanh khoản" });
  expect((await liquidityEvidence.locator(".daily-reading-signal").innerText()).length).toBeGreaterThan(2);

  await expect(snapshotRows).toHaveCount(4);
  for (let i = 0; i < 4; i++) {
    expect((await snapshotRows.nth(i).innerText()).trim().length).toBeGreaterThan(3);
  }

  // Semantic colors are validated against the active theme, not a particular
  // day's advance/decline counts or its direction of liquidity change.
  const colorAudit = await page.evaluate(() => {
    const root = document.querySelector(".daily-insight");
    const tokens = ["--brief-positive", "--brief-negative", "--brief-warning", "--brief-neutral"]
      .map((name) => getComputedStyle(root).getPropertyValue(name).trim());
    const semanticNodes = [...document.querySelectorAll(".daily-insight .daily-semantic-text")];
    return {
      tokens,
      count: semanticNodes.length,
      visible: semanticNodes.every((node) => getComputedStyle(node).color !== "rgba(0, 0, 0, 0)")
    };
  });
  expect(colorAudit.tokens.every(Boolean), "The semantic color tokens must remain present.").toBe(true);
  expect(colorAudit.count, "The market brief must retain semantic text spans.").toBeGreaterThan(4);
  expect(colorAudit.visible, "The semantic text must not become transparent.").toBe(true);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(bodyOverflow, "Daily Market Brief v2.2.2 must not cause document-level horizontal overflow.").toBeLessThanOrEqual(1);

  const computed = await page.evaluate(() => {
    const headline = document.querySelector(".daily-title-line > h3");
    const titleDate = document.querySelector(".daily-title-date");
    const thesis = document.querySelector(".daily-thesis");
    const executiveThesis = document.querySelector(".daily-executive-thesis");
    const metric = document.querySelector(".daily-snapshot-value");
    const evidence = document.querySelector(".daily-evidence-strip");
    const narrative = document.querySelector(".daily-brief-narrative");
    const grid = document.querySelector(".daily-brief-grid");
    const decision = document.querySelector(".daily-decision-bar");
    const snapshot = document.querySelector(".daily-market-snapshot");
    const h = getComputedStyle(headline);
    const t = getComputedStyle(thesis);
    const et = getComputedStyle(executiveThesis);
    const m = getComputedStyle(metric);
    return {
      headlinePx: Number.parseFloat(h.fontSize),
      headlineLineHeight: Number.parseFloat(h.lineHeight),
      headlineHeight: headline.getBoundingClientRect().height,
      headlineWidth: headline.getBoundingClientRect().width,
      narrativeWidth: narrative.getBoundingClientRect().width,
      headlineTextAlign: h.textAlign,
      headlineTextAlignLast: h.textAlignLast,
      headlineWordSpacing: h.wordSpacing,
      headlineTextWrap: h.textWrap,
      dateTop: titleDate.getBoundingClientRect().top,
      headlineTop: headline.getBoundingClientRect().top,
      thesisTop: thesis.getBoundingClientRect().top,
      evidenceTop: evidence.getBoundingClientRect().top,
      decisionTop: decision.getBoundingClientRect().top,
      decisionLeft: decision.getBoundingClientRect().left,
      decisionRight: decision.getBoundingClientRect().right,
      gridLeft: grid.getBoundingClientRect().left,
      gridRight: grid.getBoundingClientRect().right,
      snapshotTop: snapshot.getBoundingClientRect().top,
      snapshotBottom: snapshot.getBoundingClientRect().bottom,
      thesisPx: Number.parseFloat(t.fontSize),
      thesisLineHeight: Number.parseFloat(t.lineHeight),
      thesisMaxWidth: t.maxWidth,
      thesisTextWrap: t.textWrap,
      thesisWordSpacing: t.wordSpacing,
      executiveThesisMaxWidth: et.maxWidth,
      executiveThesisWidth: executiveThesis.getBoundingClientRect().width,
      metricPx: Number.parseFloat(m.fontSize),
      metricNumeric: m.fontVariantNumeric
    };
  });

  expect(computed.dateTop).toBeLessThan(computed.headlineTop);
  expect(computed.thesisTop).toBeGreaterThan(computed.headlineTop);
  expect(computed.evidenceTop).toBeGreaterThan(computed.thesisTop);
  expect(computed.decisionTop).toBeGreaterThan(computed.evidenceTop);
  expect(computed.thesisLineHeight / computed.thesisPx).toBeGreaterThanOrEqual(1.5);
  expect(computed.thesisMaxWidth).toBe("none");
  expect(computed.executiveThesisMaxWidth).toBe("none");
  expect(computed.thesisTextWrap).toBe("wrap");
  expect(["normal", "0px"].includes(computed.thesisWordSpacing)).toBe(true);
  expect(computed.metricPx).toBeGreaterThanOrEqual(21.5);
  expect(computed.metricPx).toBeLessThanOrEqual(22.5);
  expect(computed.metricNumeric).toContain("tabular-nums");

  if (viewport.width >= 1081) {
    const headlineLines = computed.headlineHeight / computed.headlineLineHeight;
    expect(headlineLines, "Desktop headline should stay within about two lines.").toBeLessThanOrEqual(2.2);
    expect(computed.headlineTextAlign, "Desktop headline must keep natural start alignment.").not.toBe("justify");
    expect(computed.headlineTextAlignLast, "Desktop headline last line must not be justified.").not.toBe("justify");
    expect(["normal", "0px"].includes(computed.headlineWordSpacing), "Desktop headline should keep normal word spacing.").toBe(true);
    expect(computed.headlineTextWrap, "Desktop headline should fill the current line before wrapping.").toBe("wrap");
    if (viewport.width >= 1181) {
      expect(computed.headlinePx, "Desktop headline should use a larger natural scale instead of stretching word gaps.").toBeGreaterThanOrEqual(33.5);
      expect(computed.headlinePx).toBeLessThanOrEqual(38.5);
    }
    expect(Math.abs(computed.headlineWidth - computed.narrativeWidth), "Desktop headline should use the full narrative column.").toBeLessThanOrEqual(1.5);
    expect(Math.abs(computed.executiveThesisWidth - computed.narrativeWidth), "Desktop executive thesis should use the full narrative column before wrapping.").toBeLessThanOrEqual(1.5);
    expect(Math.abs(computed.decisionLeft - computed.gridLeft), "Decision bar should align to the left edge of the brief grid.").toBeLessThanOrEqual(1.5);
    expect(Math.abs(computed.decisionRight - computed.gridRight), "Decision bar should align to the right edge of the brief grid.").toBeLessThanOrEqual(1.5);
    expect(computed.decisionTop, "Decision bar should sit below the snapshot row.").toBeGreaterThanOrEqual(computed.snapshotBottom - 1);
  }

  if (viewport.width <= 760) {
    expect(computed.headlineTextAlign).not.toBe("justify");
    expect(computed.snapshotTop).toBeGreaterThan(computed.decisionTop);
  }

  expect(await page.locator("[data-role='daily-archive-list'] .daily-archive-item").count()).toBeGreaterThan(0);

  const screenshot = testInfo.outputPath("daily-market-research-brief-v2-2-2.png");
  await insight.screenshot({ path: screenshot, animations: "disabled" });
  await testInfo.attach("daily-market-research-brief-v2-2-2", { path: screenshot, contentType: "image/png" });
});
