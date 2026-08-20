import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { snapshotTriggerState } from '../src/scripts/action-trigger.mjs';
const code=fs.readFileSync(new URL('../src/data/research-data.js',import.meta.url),'utf8');
const sandbox={window:{}}; vm.runInNewContext(code,sandbox);
const data=sandbox.window.RESEARCH_DATA;
const valuations=(data.reports||[]).filter(r=>r.reportType!=='trading');
const coverage=data.coverage||[];
const byTicker=new Map(coverage.map(x=>[x.ticker,x]));
test('mỗi mã định giá chỉ có bản mới nhất và phải có coverage đồng bộ',()=>{
  assert.equal(new Set(valuations.map(r=>r.ticker)).size,valuations.length,'trùng mã định giá');
  assert.equal(new Set(coverage.map(c=>c.ticker)).size,coverage.length,'trùng mã coverage');
  assert.equal(coverage.length,valuations.length,'coverage phải bằng số báo cáo định giá');
  for(const r of valuations){const c=byTicker.get(r.ticker);assert.ok(c,`${r.ticker} có báo cáo nhưng thiếu coverage`);assert.equal(c.reportId,r.id,`${r.ticker} reportId coverage không phải bản đang công bố`);if(r.action){assert.equal(c.action?.basisDate,r.date,`${r.ticker} basisDate vùng hành động lệch ngày báo cáo`);assert.deepEqual(snapshotTriggerState(c.action),snapshotTriggerState(r.action),`${r.ticker} vùng/ngưỡng hành động coverage lệch báo cáo`);if(Number.isFinite(r.action.baseValue)) assert.equal(c.action?.baseValue,r.action.baseValue,`${r.ticker} baseValue coverage lệch báo cáo`);}}
});
test('coverage không tham chiếu báo cáo định giá đã bị thay thế hoặc không tồn tại',()=>{const ids=new Set(valuations.map(r=>r.id));for(const c of coverage) assert.ok(ids.has(c.reportId),`${c.ticker} reportId không tồn tại: ${c.reportId}`);});
