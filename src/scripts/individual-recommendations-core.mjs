// Read-only public individual recommendation scenarios: no brokerage orders, Trade Ledger or valuation mutations.
const positive = (x) => Number.isFinite(x) && x > 0;
const isoDate = (s) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s || "")) return false;
  const [y,m,d] = s.split("-").map(Number);
  const parsed = new Date(Date.UTC(y,m-1,d));
  return parsed.getUTCFullYear()===y && parsed.getUTCMonth()===m-1 && parsed.getUTCDate()===d;
};
const https = (s) => typeof s === "string" && /^https:\/\/[^ ]+/.test(s);
const around = (x,y) => Math.abs(x-y) < 1e-7;
const roundUpTick = (price, exchange) => {
  const tick = exchange === "HNX" ? 100 : price < 10000 ? 10 : price < 50000 ? 50 : 100;
  return Math.ceil((price - 1e-8) / tick) * tick;
};

export const validateIndividualRecommendations = (config) => {
  if (config?.schemaVersion !== 1 || !isoDate(config.publishedOn)
    || config.riskReviewPct !== 5 || config.riskCriticalPct !== 7
    || !Array.isArray(config.entries) || config.entries.length !== 4
    || config.rewardMultiples?.join(",") !== "2,3") return false;
  const expected = ["POW","NT2","VIX","SHS"];
  return config.entries.every((entry,i) => entry?.ticker === expected[i]
    && ["HNX","HOSE"].includes(entry.exchange)
    && positive(entry.zoneLow) && positive(entry.zoneHigh) && entry.zoneLow <= entry.zoneHigh);
};

export const validateNt2Snapshot = (snapshot) => {
  return snapshot?.schemaVersion===1 && snapshot.ticker==="NT2"
    && isoDate(snapshot.priceDate) && positive(snapshot.close)
    && positive(snapshot.open) && positive(snapshot.high) && positive(snapshot.low)
    && snapshot.low <= Math.min(snapshot.open,snapshot.close)
    && snapshot.high >= Math.max(snapshot.open,snapshot.close)
    && Number.isFinite(snapshot.changePct)
    && Number.isInteger(snapshot.volume) && snapshot.volume >= 0
    && https(snapshot.priceSource) && https(snapshot.priceSourceSecondary)
    && ["crosschecked-manual","crosschecked-automated"].includes(snapshot.verificationStatus);
};

export const validateIndividualExitState = (config,state) => {
  if (!validateIndividualRecommendations(config) || state?.schemaVersion !== 1 || !Array.isArray(state.events)) return false;
  const permitted=new Set(config.entries.map(e=>e.ticker)),seen=new Set();
  for(const event of state.events){
    if(!permitted.has(event?.ticker) || seen.has(event.ticker) || event.kind!=="midpoint-eod-stop"
      || !isoDate(event.date) || event.date < config.publishedOn
      || event.id !== "individual-"+event.ticker+"-"+event.date || event.policyVersion!=="individual-eod-5-7-v1"
      || !positive(event.midpoint) || !positive(event.close)
      || !positive(event.zoneLow) || !positive(event.zoneHigh)
      || !positive(event.stopFive) || !positive(event.stopSeven)
      || !Number.isFinite(event.deltaPct) || !https(event.priceSource)
      || !around(event.midpoint,(event.zoneLow+event.zoneHigh)/2)
      || !around(event.stopFive,event.midpoint*.95) || !around(event.stopSeven,event.midpoint*.93)
      || !around(event.deltaPct,(event.close/event.midpoint-1)*100)
      || event.close > event.stopFive
      || event.severity !== (event.close*100 <= event.midpoint*93 ? "critical-7" : "stop-5"))return false;
    seen.add(event.ticker);
  }
  return true;
};

export const buildIndividualRows=(config,source,nt2Snapshot,exitState={schemaVersion:1,events:[]})=>{
  if(!validateIndividualRecommendations(config) || !validateNt2Snapshot(nt2Snapshot)
     || !isoDate(source?.meta?.updated) || !Array.isArray(source.coverage)
     || !validateIndividualExitState(config,exitState))throw Error("Dữ liệu khuyến nghị riêng không hợp lệ.");
  const dataByTicker=new Map(source.coverage.map(q=>[q.ticker,q]));
  const archive=new Map(exitState.events.map(e=>[e.ticker,e]));
  return config.entries.map(entry=>{
    const mid=(entry.zoneLow+entry.zoneHigh)/2;
    const five=mid*.95,seven=mid*.93;
    const target1=roundUpTick(mid+2*(mid-five),entry.exchange);
    const target2=roundUpTick(mid+3*(mid-five),entry.exchange);
    const quote=entry.ticker==="NT2"?nt2Snapshot:dataByTicker.get(entry.ticker);
    const priceDate=quote?.priceDate || null;
    const close=positive(quote?.close) && isoDate(priceDate) && https(quote.priceSource) ? quote.close:null;
    const fresh=close!==null && priceDate===source.meta.updated && Number.isFinite(quote?.changePct);
    const deltaPct=fresh ?(close/mid-1)*100:null;
    const relation= !fresh ? "unavailable":close < entry.zoneLow?"below":close >entry.zoneHigh?"above":"inside";
    const exclusion=archive.get(entry.ticker)||null;
    return {
      ...entry,midpoint:mid,stopFive:five,stopSeven:seven,
      target1,target2,rr1:(target1-mid)/(mid-five),rr2:(target2-mid)/(mid-five),
      close,priceDate,changePct:fresh?quote.changePct:null,deltaPct,relation,fresh,
      source:close!==null?quote.priceSource:null,
      sourceSecondary:close!==null?quote.priceSourceSecondary:null,
      valuationStatus:entry.ticker==="NT2"?"not-covered":quote?.action?.eligibility||"unknown",
      exclusion
    };
  });
};

export const planIndividualExits=(config,source,nt2Snapshot,state)=>{
  const rows=buildIndividualRows(config,source,nt2Snapshot,state);
  if(source.meta.updated<config.publishedOn)return {nextState:state,added:[],rows};
  const added=[];
  for(const row of rows){
    if(row.exclusion || !row.fresh || row.close===null || row.close>row.stopFive)continue;
    added.push({
      id:"individual-"+row.ticker+"-"+row.priceDate,
      kind:"midpoint-eod-stop",ticker:row.ticker,date:row.priceDate,
      policyVersion:"individual-eod-5-7-v1",
      zoneLow:row.zoneLow,zoneHigh:row.zoneHigh,midpoint:row.midpoint,
      stopFive:row.stopFive,stopSeven:row.stopSeven,
      close:row.close,deltaPct:row.deltaPct,
      severity:row.close*100 <= row.midpoint*93?"critical-7":"stop-5",
      priceSource:row.source
    });
  }
  const nextState=added.length?{...state,events:[...state.events,...added]}:state;
  if(!validateIndividualExitState(config,nextState))throw Error("Sự kiện loại vi phạm cấu trúc.");
  return {nextState,added,rows:buildIndividualRows(config,source,nt2Snapshot,nextState)};
};
