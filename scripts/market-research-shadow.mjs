import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { validDate,hash,FINFO,CAFEF,parseFinfo,parseCafeF,inspectCore,makePreview } from "./market-research-core.mjs";

const out=path.resolve(process.env.RUNNER_TEMP||"/tmp","market-research-preview");
await fs.mkdir(out,{recursive:true});
const report={schema:"market-research-preview-v1",mode:"SHADOW_ONLY",publicationAllowed:false,attempts:[]};
const save=async()=>fs.writeFile(path.join(out,"audit.json"),JSON.stringify(report,null,2)+"\n");
async function fetchSource(url,name) {
  for(let attempt=1;attempt<=3;attempt++){
    try{
      const response=await fetch(url,{headers:{accept:"application/json","user-agent":"XuanLeMarketResearchAudit/1.0"},signal:AbortSignal.timeout(20000),redirect:"error"});
      if(!response.ok)throw Error("HTTP "+response.status);
      const raw=await response.text();
      const payload=JSON.parse(raw);
      report.attempts.push({source:name,url,attempt,status:"received",sha256:hash(raw)});
      await fs.writeFile(path.join(out,name+".json"),raw);
      return payload;
    }catch(err){
      report.attempts.push({source:name,url,attempt,status:"failed",error:String(err.message)});
      if(attempt<3)await new Promise(r=>setTimeout(r,2000*attempt));
    }
  }
  throw Error(name+" unavailable");
}
try {
  const sandbox={window:{}};
  vm.runInNewContext(await fs.readFile("src/data/research-data.js","utf8"),sandbox,{timeout:2000});
  const data=sandbox.window.RESEARCH_DATA;
  const date=process.env.RESEARCH_DATE||data?.meta?.updated;
  report.date=date;
  if(!validDate(date)||data?.meta?.updated!==date||data?.marketSession?.date!==date||!Array.isArray(data.coverage)||!data.coverage.length||data.coverage.some(r=>r.priceDate!==date)) throw Error("No complete locked EOD for requested date");
  const local=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date());
  const parts=Object.fromEntries(local.map(p=>[p.type,p.value]));
  const today=parts.year+"-"+parts.month+"-"+parts.day;
  if(date>today||(date===today&&Number(parts.hour)*60+Number(parts.minute)<15*60+15)) throw Error("Target not a completed session");
  const start=new Date(date+"T12:00:00Z");start.setUTCDate(start.getUTCDate()-400);
  const a=new URL(FINFO);a.searchParams.set("sort","date");a.searchParams.set("size","500");a.searchParams.set("q","code:VNINDEX~date:gte:"+start.toISOString().slice(0,10)+"~date:lte:"+date);
  const rows=parseFinfo(await fetchSource(a.href,"finfo"),date);
  report.history={count:rows.length,first:rows[0].date,last:date,samples:[rows[0],rows.at(-1)],calendar:"not independently certified",indicators:"withheld"};
  const b=new URL(CAFEF);b.searchParams.set("Symbol","VNINDEX");b.searchParams.set("StartDate",date.split("-").reverse().join("/"));b.searchParams.set("EndDate",date.split("-").reverse().join("/"));b.searchParams.set("PageIndex","1");b.searchParams.set("PageSize","10");
  let cafe=null;
  try{cafe=parseCafeF(await fetchSource(b.href,"cafef"),date)}catch(err){report.cafefError=String(err.message)}
  report.gate=inspectCore(rows,data.marketSession,cafe,date);
  report.preview=makePreview(rows.at(-1),report.gate);
  report.status="BLOCKED_NOT_PUBLISHABLE";
  await fs.writeFile(path.join(out,"zalo-draft.txt"),"BẢN RÀ SOÁT NỘI BỘ — KHÔNG ĐĂNG\n"+report.preview.title+"\n\n"+report.preview.narrative+"\n\n"+report.preview.disclaimer+"\n");
} catch(err) {
  report.status="FAILED_CLOSED";
  report.error=String(err.message);
  process.exitCode=1;
}finally{await save();console.log(JSON.stringify({status:report.status,date:report.date,publicationAllowed:false,issues:report.gate?.issues,error:report.error}))}
