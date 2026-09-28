# Repository governance

This repository uses a fail-closed governance model so production website structure and operational history are not changed by cleanup automation.

## Active branch policy

- `main` is the default production branch.
- Long-lived non-default branches must be declared in `.github/governance/persistent-branches.json`.
- A branch referenced by a workflow `ref:` is treated as an operational dependency and must be declared persistent.
- Open pull-request head branches and branches used as the base of an open stacked pull request are protected from automatic deletion.
- Merged PR head branches are deleted only when the remote branch still points to the exact merged head SHA.
- Branch hygiene runs after merged PRs and weekly to catch branches that were temporarily retained for stacked PRs.

## Pull-request lifecycle

- Use a PR for code, workflow, data-schema, or governance changes.
- Prefer squash merge for one logical change so `main` remains easy to audit and revert.
- A closed, unmerged PR must not be auto-deleted. Close it with an explanation, then archive its branch explicitly if historical evidence is worth retaining.
- Draft PRs or unmanaged branches older than 30 days should be reviewed during the weekly governance audit.
- Persistent dependency branches are not normal feature branches and must not be deleted merely because a related PR merges.

## Archive tags

Historical branches that are no longer active may be replaced by an annotated tag only after:
1. the original branch SHA is revalidated;
2. any open PR dependency is excluded;
3. an archive tag is created under `archive/<phase>/<YYYYMMDD>/<slug>`;
4. the tag is verified to resolve to the audited commit SHA;
5. only then is the branch ref deleted.

The Phase 4C anchors are recorded in `.github/governance/archive-anchors.json`. Archive tags are historical evidence and should be treated as immutable.

## Recommended GitHub rulesets

The repository currently depends on automation that performs normal fast-forward pushes to `main` for synchronized CIVS/EOD state. Do not enable a blanket "require pull request" rule on `main` unless those automation identities have an explicit, tested bypass.

Recommended server-side protections:
- `main`: block deletion and force-pushes.
- `archive/**` tags: block updates and deletions.
- Evaluate new rulesets before activating them when possible.

Rulesets are complementary to the read-only governance audit; the audit detects drift, while rulesets prevent selected classes of destructive changes.

## Governance automation

- `Repository branch hygiene`: safe deletion of merged PR branches.
- `Repository governance audit`: weekly read-only validation of persistent branches, workflow branch dependencies, archive anchors, PR lifecycle, and unmanaged branches.
- Governance automation must not deploy the website or mutate HTML/CSS/public layout.
