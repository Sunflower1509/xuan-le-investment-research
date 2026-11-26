import { test, expect } from "@playwright/test";
const dates=["2026-11-25","2026-11-23","2026-09-17","2026-07-17"];
for(const width of [375,768,1280]){
 test("Daily market v3 "+width+"px, four historical reports",async({page},testInfo)=>{
   await page.setViewportSize({width,height:900});
   test.setTimeout(90000);
   const errors=[];page.on("pageerror",e=>errors.push(e.message));
   await page.goto("./#daily-market",{waitUntil:"domcontentloaded"});
   const root=page.locator("#daily-market"), report=root.locator("[data-role='daily-insight']");
   await expect(report.locator("h3")).toBeVisible();
   const outside=await page.locator("main > section:not(#daily-market)").evaluateAll(a=>a.map(x=>x.id));
   if(width>980){
     await expect(root.locator("[data-dmv3-id]")).toHaveCount(10);
     await root.locator("[data-dmv3-more]").click();
     await expect(root.locator("[data-dmv3-id]")).toHaveCount(20);
   }
   for(const date of dates){
     const id=await page.evaluate(date=>window.DAILY_MARKET_INSIGHTS.entries.find(x=>x.date===date).id,date);
     if(width<=980)await root.locator("[data-dmv3-picker]").selectOption(id);
     else{
       await root.locator("[data-dmv3-month]").selectOption(date.slice(0,7));
       await root.locator("[data-dmv3-search]").fill(date);
       await root.locator("[data-dmv3-id]").click();
       await root.locator("[data-dmv3-search]").fill("");
     }
     await expect(report.locator("time")).toHaveAttribute("datetime",date);
     await expect(report.locator("h3")).toBeVisible();
     await expect(report.locator("details[open]")).toHaveCount(0);
     const original=await page.evaluate(date=>window.DAILY_MARKET_INSIGHTS.entries.find(x=>x.date===date),date);
     await expect(report.locator(".dmv3-scenario")).toHaveCount(original.playbook.length);
     const dimensions=await root.evaluate(x=>({width:x.clientWidth,scroll:x.scrollWidth}));
     expect(dimensions.scroll-dimensions.width).toBeLessThanOrEqual(1);
     const metrics=await report.locator(".dmv3-value").allTextContents();
     const index=original.metrics.find(x=>x.label==="VN-INDEX");
     if(index)expect(metrics.some(x=>x.includes(index.value))).toBeTruthy();
     if(date==="2026-11-25")await expect(report.locator(".dmv3-header .dmv3-state")).toHaveText(/\? CHƯA ĐỦ DỮ LIỆU/);
     const details=report.locator("details").last();
     await details.locator("summary").focus();await details.locator("summary").press("Enter");
     await expect(details).toHaveAttribute("open","");
     await expect(details.locator("a")).toHaveCount(original.sources.length);
     await details.locator("summary").press("Enter");
     await expect(details).not.toHaveAttribute("open","");
     await testInfo.attach(date+"-"+width,{body:await report.screenshot(),contentType:"image/png"});
   }
   expect(await page.locator("main > section:not(#daily-market)").evaluateAll(a=>a.map(x=>x.id))).toEqual(outside);
   expect(errors).toEqual([]);
 });
}
