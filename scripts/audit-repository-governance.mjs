import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const persistent = readJson(".github/governance/persistent-branches.json");
const archive = readJson(".github/governance/archive-anchors.json");
const repository = process.env.GITHUB_REPOSITORY || "";
const token = process.env.GITHUB_TOKEN || "";

const fail = [];
const warn = [];
const info = [];

const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

const parseRemote = (raw) => {
  const rows = new Map();
  for (const line of String(raw || "").split(/\r?\n/)) {
    if (!line.trim()) continue;
    const [sha, ref] = line.trim().split(/\s+/);
    rows.set(ref, sha);
  }
  return rows;
};

const api = async (pathname) => {
  if (!repository || !token) throw new Error("GITHUB_REPOSITORY/GITHUB_TOKEN are required for governance API checks.");
  const response = await fetch(`https://api.github.com${pathname}`, {
    headers: {
      accept: "application/vnd.github+json",
      authorization: `Bearer ${token}`,
      "x-github-api-version": "2022-11-28"
    }
  });
  if (!response.ok) throw new Error(`GitHub API ${pathname} -> HTTP ${response.status}`);
  return response.json();
};

const listOpenPulls = async () => {
  const pulls = [];
  for (let page = 1; page <= 10; page += 1) {
    const batch = await api(`/repos/${repository}/pulls?state=open&per_page=100&page=${page}`);
    pulls.push(...batch);
    if (batch.length < 100) break;
  }
  return pulls;
};

const literalWorkflowRefs = () => {
  const dir = path.join(root, ".github/workflows");
  const refs = [];
  for (const name of fs.readdirSync(dir).filter((x) => /\.ya?ml$/i.test(x))) {
    const rel = `.github/workflows/${name}`;
    const content = fs.readFileSync(path.join(root, rel), "utf8");
    let blockIndent = null;
    for (const line of content.split(/\r?\n/)) {
      const indent = line.match(/^\s*/)?.[0].length || 0;
      if (blockIndent !== null) {
        if (!line.trim() || indent > blockIndent) continue;
        blockIndent = null;
      }
      const block = line.match(/^(\s*)(?:run|script):\s*[|>][-+]?\s*$/);
      if (block) {
        blockIndent = block[1].length;
        continue;
      }
      const match = line.match(/^\s*ref:\s*["']?([A-Za-z0-9._/-]+)["']?\s*(?:#.*)?$/);
      if (match) refs.push({ workflow: rel, ref: match[1] });
    }
  }
  return refs;
};

const main = async () => {
  const repo = await api(`/repos/${repository}`);
  const pulls = await listOpenPulls();
  const heads = parseRemote(git("ls-remote", "--heads", "origin"));
  const tags = parseRemote(git("ls-remote", "--tags", "origin"));

  if (repo.default_branch !== persistent.defaultBranch) {
    fail.push(`Default branch drift: expected ${persistent.defaultBranch}, got ${repo.default_branch}`);
  }

  const persistentNames = new Set(persistent.branches.map((item) => item.name));
  for (const item of persistent.branches) {
    const ref = `refs/heads/${item.name}`;
    if (!heads.has(ref)) fail.push(`Persistent branch missing: ${item.name}`);
  }

  const workflowRefs = literalWorkflowRefs().filter(({ ref }) => ref !== persistent.defaultBranch);
  for (const item of workflowRefs) {
    if (!persistentNames.has(item.ref)) {
      fail.push(`Workflow branch dependency is undeclared: ${item.workflow} -> ${item.ref}`);
      continue;
    }
    if (!heads.has(`refs/heads/${item.ref}`)) {
      fail.push(`Workflow branch dependency is missing remotely: ${item.workflow} -> ${item.ref}`);
    }
  }

  for (const item of persistent.branches) {
    const expected = new Set(item.dependentWorkflows || []);
    const actual = new Set(workflowRefs.filter((x) => x.ref === item.name).map((x) => x.workflow));
    for (const rel of expected) if (!actual.has(rel)) fail.push(`Declared dependency missing from workflow scan: ${item.name} <- ${rel}`);
    for (const rel of actual) if (!expected.has(rel)) fail.push(`Unregistered dependent workflow: ${item.name} <- ${rel}`);
  }

  const archiveTagNames = new Set();
  for (const item of archive.anchors) {
    archiveTagNames.add(item.tag);
    if (!/^archive\/[a-z0-9-]+\/\d{8}\/[a-z0-9][a-z0-9.-]*$/.test(item.tag)) {
      fail.push(`Archive tag violates naming policy: ${item.tag}`);
    }
    const direct = tags.get(`refs/tags/${item.tag}`);
    const peeled = tags.get(`refs/tags/${item.tag}^{}`);
    const target = peeled || direct;
    if (!target) fail.push(`Archive tag missing: ${item.tag}`);
    else if (target !== item.sha) fail.push(`Archive tag moved: ${item.tag} expected=${item.sha} actual=${target}`);
    if (heads.has(`refs/heads/${item.sourceBranch}`)) {
      fail.push(`Archived source branch unexpectedly exists: ${item.sourceBranch}`);
    }
  }

  for (const ref of tags.keys()) {
    const match = ref.match(/^refs\/tags\/(archive\/[^{}]+?)(?:\^\{\})?$/);
    if (!match) continue;
    if (!archiveTagNames.has(match[1])) warn.push(`Unregistered archive tag: ${match[1]}`);
  }

  const openHeads = new Set(pulls.filter((pr) => pr.head?.repo?.full_name === repository).map((pr) => pr.head.ref));
  const managed = new Set([persistent.defaultBranch, ...persistentNames, ...openHeads]);
  const unmanaged = [...heads.keys()]
    .map((ref) => ref.replace(/^refs\/heads\//, ""))
    .filter((name) => !managed.has(name))
    .sort();
  if (unmanaged.length) warn.push(`Unmanaged branch refs: ${unmanaged.join(", ")}`);

  const now = Date.now();
  for (const pr of pulls) {
    const ageDays = Math.floor((now - Date.parse(pr.updated_at || pr.created_at)) / 86400000);
    if (ageDays >= 30) warn.push(`PR #${pr.number} has had no update for ${ageDays} days${pr.draft ? " (draft)" : ""}.`);
  }

  if (repo.delete_branch_on_merge !== true) {
    info.push("Native delete_branch_on_merge is disabled; custom SHA-safe branch hygiene remains authoritative.");
  }

  try {
    const rulesets = await api(`/repos/${repository}/rulesets?per_page=100`);
    if (!Array.isArray(rulesets) || rulesets.length === 0) {
      warn.push("No repository rulesets are active; consider server-side main/archive tag protections documented in docs/REPOSITORY_GOVERNANCE.md.");
    } else {
      info.push(`Repository rulesets: ${rulesets.length}`);
    }
  } catch (error) {
    warn.push(`Ruleset visibility check unavailable: ${error.message}`);
  }

  console.log(JSON.stringify({
    ok: fail.length === 0,
    defaultBranch: repo.default_branch,
    branchCount: [...heads.keys()].length,
    openPullRequests: pulls.map((pr) => ({ number: pr.number, head: pr.head?.ref, base: pr.base?.ref, draft: pr.draft })),
    workflowBranchDependencies: workflowRefs,
    archiveAnchors: archive.anchors.length,
    warnings: warn,
    info,
    failures: fail
  }, null, 2));

  if (fail.length) process.exitCode = 1;
};

main().catch((error) => {
  console.error(error?.stack || String(error));
  process.exitCode = 1;
});
