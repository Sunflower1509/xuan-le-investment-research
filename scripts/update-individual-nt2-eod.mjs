#!/usr/bin/env node
// NT2 is NOT a Research Terminal coverage report. Verify EOD independently.
// Never generate a fake valuation PDF or mutate the existing coverage universe.
import fs from "node:fs";
import vm from "node:vm";
import { parseVndirect, parseCafeF } from "./update-eod-market-data.mjs";
import { validateNt2Snapshot } from "../src/scripts/individual-recommendations-core.mjs";

const date=process.argv.find((arg,i,args)=>args[i-1]==="--date");
if(!/^\d{4}-\d{2}-\d{2}$/.test(date||""))throw Error("Required --date YYYY-MM-DD");
const sandbox={window:{}};
vm.runInNewContext(fs.readFileSync("src/data/research-data.js","utf8"),sandbox);
if(sandbox.window.RESEARCH_DATA?.meta?.updated!==date)throw Error("NT2 EOD date must equal verified Research Terminal EOD");
const file="src/data/individual-nt2-eod.json";
const previous=JSON.parse(fs.readFileSync(file,"utf8"));
if(!validateNt2Snapshot(previous) || previous.priceDate>date)throw Error("NT2 snapshot invalid or newer than selected EOD");

const primaryUrl="https://api-finfo.vndirect.com.vn/v4/stock_prices?sort=date&q=code:NT2~date:"+date+"&size=10";
const secondaryUrl="https://cafef.vn/du-lieu/DuLieu.aspx?cat_id=1009&symbol=NT2";
const fetchText=async(url)=>{
  let last;
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const response=await fetch(url,{
        headers:{accept:"text/html,application/json,*/*","user-agent":"Mozilla/5.0 XuanLeTVS-NT2-Crosscheck/1.0"},
        signal:AbortSignal.timeout(18000)
      });
      if(!response.ok)throw Error("HTTP "+response.status);
      return await response.text();
    }catch(error){last=error;if(attempt<3)await new Promise(resolve=>setTimeout(resolve,attempt*1000));}
  }
  throw last;
};
const [primaryText,secondaryHtml]=await Promise.all([fetchText(primaryUrl),fetchText(secondaryUrl)]);
const quote=parseVndirect(JSON.parse(primaryText),"NT2",date);
const cafeF=parseCafeF(secondaryHtml,date);
if(quote.close!==cafeF.close)throw Error("Unresolved NT2 EOD mismatch: VNDIRECT="+quote.close+", CafeF="+cafeF.close);
const next={
  schemaVersion:1,ticker:"NT2",priceDate:date,
  close:quote.close,changePct:quote.changePct,volume:quote.volume,
  open:quote.open,high:quote.high,low:quote.low,
  priceSource:primaryUrl,priceSourceSecondary:secondaryUrl,
  verifiedBy:"VNDIRECT Finfo + CafeF exact-date closing price",
  verificationStatus:"crosschecked-automated",
  explanation:"Giá đóng cửa được đối chiếu theo ngày giữa VNDIRECT và CafeF. Nếu thiếu dữ liệu hoặc nguồn bất đồng, giữ snapshot cũ."
};
if(!validateNt2Snapshot(next))throw Error("Invalid NT2 EOD result");
if(JSON.stringify(next)!==JSON.stringify(previous)){
  fs.writeFileSync(file,JSON.stringify(next,null,2)+"\n");
}
console.log(JSON.stringify({ticker:"NT2",date,close:next.close,cafeFClose:cafeF.close,volume:next.volume,status:"crosschecked"},null,2));
