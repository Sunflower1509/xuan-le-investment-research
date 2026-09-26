import { test, expect } from "@playwright/test";

async function openMarketBrief(page) {
  await page.goto("./#daily-market", { waitUntil: "domcontentloaded" });
  await page.locator("[data-role='daily-insight'] .daily-decision-brief").waitFor({ state: "visible" });
  await page.waitForFunction(() => document.fonts?.status === "loaded" || !document.fonts);
  await page.waitForTimeout(180);
}

test("Daily Market Research Brief v2.2 semantic colors and consolidated hierarchy", async ({ page }, testInfo) => {
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

  await expect(titleDate).toHaveText("25/09");
  await expect(titleDate).toHaveAttribute("datetime", "2026-09-25");
  await expect(headline).toHaveText("Hồi kỹ thuật nhưng chưa qua cổng xác nhận");
  expect(await headline.innerText()).not.toContain("PHÒNG THỦ");
  expect(await headline.innerText()).not.toContain("25/09");

  await expect(brief.locator(".daily-executive-thesis h4")).toHaveText("Luận điểm chính");
  await expect(thesis).toContainText("nhịp hồi kỹ thuật");
  await expect(brief.locator(".daily-evidence-strip h4")).toHaveText("Bằng chứng thị trường");
  await expect(brief.getByText("FACT → INTERPRETATION")).toHaveCount(0);
  await expect(evidence).toHaveCount(3);

  const breadth = evidence.filter({ hasText: "Độ rộng" });
  const breadthSignalParts = breadth.locator(".daily-reading-signal .daily-semantic-text");
  await expect(breadthSignalParts).toHaveCount(3);
  await expect(breadthSignalParts.nth(0)).toHaveText("▼ 176 giảm");
  await expect(breadthSignalParts.nth(2)).toHaveText("▲ 132 tăng");

  const breadthDetailParts = breadth.locator(".daily-reading-content p .daily-semantic-text");
  await expect(breadthDetailParts.nth(0)).toHaveText("49 tham chiếu");
  await expect(breadthDetailParts.nth(2)).toHaveText("3 mã giảm sàn");

  const liquidityEvidence = evidence.filter({ hasText: "Thanh khoản" });
  await expect(liquidityEvidence.locator(".daily-reading-signal")).toContainText("−18,0%");

  await expect(snapshotRows).toHaveCount(4);
  await expect(snapshotRows.nth(0).locator(".daily-direction")).toContainText("Tăng");
  await expect(snapshotRows.nth(1).locator(".daily-direction")).toContainText("Độ rộng tiêu cực");
  await expect(snapshotRows.nth(2).locator(".daily-direction")).toContainText("Dưới TB20");
  await expect(snapshotRows.nth(3).locator(".daily-direction")).toContainText("Kỹ thuật yếu");

  const colorAudit = await page.evaluate(() => {
    const root = document.querySelector(".daily-insight");
    const evidenceRows = [...document.querySelectorAll(".daily-key-readings article")];
    const breadth = evidenceRows.find((row) => row.textContent.includes("Độ rộng"));
    const liquidity = evidenceRows.find((row) => row.textContent.includes("Thanh khoản"));
    const snapshotRows = [...document.querySelectorAll(".daily-snapshot-row")];
    const liquiditySnapshot = snapshotRows.find((row) => row.textContent.includes("GIÁ TRỊ KHỚP LỆNH"));

    const toRgb = (value) => {
      const node = document.createElement("span");
      node.style.color = value;
      document.body.appendChild(node);
      const rgb = getComputedStyle(node).color;
      node.remove();
      return rgb;
    };

    const tokens = {
      positive: getComputedStyle(root).getPropertyValue("--brief-positive").trim(),
      negative: getComputedStyle(root).getPropertyValue("--brief-negative").trim(),
      warning: getComputedStyle(root).getPropertyValue("--brief-warning").trim(),
      neutral: getComputedStyle(root).getPropertyValue("--brief-neutral").trim()
    };

    const breadthSignal = breadth.querySelectorAll(".daily-reading-signal .daily-semantic-text");
    const breadthDetail = breadth.querySelectorAll(".daily-reading-content p .daily-semantic-text");
    const liquiditySignal = liquidity.querySelectorAll(".daily-reading-signal .daily-semantic-text");
    const liquidityChange = liquiditySnapshot.querySelectorAll(":scope > small .daily-semantic-text");
    const liquidityBadge = liquiditySnapshot.querySelector(".daily-direction");

    return {
      expected: Object.fromEntries(Object.entries(tokens).map(([key, value]) => [key, toRgb(value)])),
      breadthDown: getComputedStyle(breadthSignal[0]).color,
      breadthUp: getComputedStyle(breadthSignal[2]).color,
      reference: getComputedStyle(breadthDetail[0]).color,
      floorDown: getComputedStyle(breadthDetail[2]).color,
      liquidityDown: getComputedStyle(liquiditySignal[2]).color,
      liquiditySnapshotDown: getComputedStyle(liquidityChange[0]).color,
      liquidityBadge: getComputedStyle(liquidityBadge).color
    };
  });

  expect(colorAudit.breadthUp).toBe(colorAudit.expected.positive);
  expect(colorAudit.breadthDown).toBe(colorAudit.expected.negative);
  expect(colorAudit.reference).toBe(colorAudit.expected.neutral);
  expect(colorAudit.floorDown).toBe(colorAudit.expected.negative);
  expect(colorAudit.liquidityDown).toBe(colorAudit.expected.negative);
  expect(colorAudit.liquiditySnapshotDown).toBe(colorAudit.expected.negative);
  expect(colorAudit.liquidityBadge).toBe(colorAudit.expected.warning);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(bodyOverflow, "Daily Market Brief v2.2 must not cause document-level horizontal overflow.").toBeLessThanOrEqual(1);

  const computed = await page.evaluate(() => {
    const headline = document.querySelector(".daily-title-line > h3");
    const titleDate = document.querySelector(".daily-title-date");
    const thesis = document.querySelector(".daily-thesis");
    const metric = document.querySelector(".daily-snapshot-value");
    const evidence = document.querySelector(".daily-evidence-strip");
    const decision = document.querySelector(".daily-decision-bar");
    const snapshot = document.querySelector(".daily-market-snapshot");
    const h = getComputedStyle(headline);
    const t = getComputedStyle(thesis);
    const m = getComputedStyle(metric);
    return {
      headlinePx: Number.parseFloat(h.fontSize),
      headlineLineHeight: Number.parseFloat(h.lineHeight),
      headlineHeight: headline.getBoundingClientRect().height,
      dateTop: titleDate.getBoundingClientRect().top,
      headlineTop: headline.getBoundingClientRect().top,
      thesisTop: thesis.getBoundingClientRect().top,
      evidenceTop: evidence.getBoundingClientRect().top,
      decisionTop: decision.getBoundingClientRect().top,
      snapshotTop: snapshot.getBoundingClientRect().top,
      snapshotBottom: snapshot.getBoundingClientRect().bottom,
      thesisPx: Number.parseFloat(t.fontSize),
      thesisLineHeight: Number.parseFloat(t.lineHeight),
      metricPx: Number.parseFloat(m.fontSize),
      metricNumeric: m.fontVariantNumeric
    };
  });

  expect(computed.dateTop).toBeLessThan(computed.headlineTop);
  expect(computed.thesisTop).toBeGreaterThan(computed.headlineTop);
  expect(computed.evidenceTop).toBeGreaterThan(computed.thesisTop);
  expect(computed.decisionTop).toBeGreaterThan(computed.evidenceTop);
  expect(computed.thesisLineHeight / computed.thesisPx).toBeGreaterThanOrEqual(1.5);
  expect(computed.metricPx).toBeGreaterThanOrEqual(21.5);
  expect(computed.metricPx).toBeLessThanOrEqual(22.5);
  expect(computed.metricNumeric).toContain("tabular-nums");

  if (viewport.width >= 1081) {
    const headlineLines = computed.headlineHeight / computed.headlineLineHeight;
    expect(headlineLines, "Desktop headline should stay within about two lines.").toBeLessThanOrEqual(2.2);
    expect(computed.decisionTop).toBeLessThanOrEqual(computed.snapshotBottom + 40);
  }

  if (viewport.width <= 760) {
    expect(computed.snapshotTop).toBeGreaterThan(computed.decisionTop);
  }

  await expect(page.locator("[data-role='daily-archive-list'] .daily-archive-item i")).toHaveCount(1);

  const screenshot = testInfo.outputPath("daily-market-research-brief-v2-2.png");
  await insight.screenshot({ path: screenshot, animations: "disabled" });
  await testInfo.attach("daily-market-research-brief-v2-2", { path: screenshot, contentType: "image/png" });
});
