# Online Presence v1

Realtime online-user counter for the Xuân Lê TVS GitHub Pages site.

## Architecture

- GitHub Pages remains fully static.
- The browser bundle coordinates tabs with a short localStorage lease + BroadcastChannel.
- Only the elected tab opens a WebSocket. The Durable Object independently de-duplicates by the same random browser `visitorId`, so transient leader races do not inflate the count.
- The Worker accepts only the production GitHub Pages origin plus local development origins.
- No application code stores IP addresses, names, phone numbers, email addresses, or browsing history. The only client identifier is a random UUID stored in localStorage.
- On disconnect the UI shows an unavailable/synchronizing state instead of presenting a stale value as current.

## Cloudflare deployment

Cloudflare Durable Objects with WebSocket Hibernation are used so idle realtime connections can stay open without keeping JavaScript execution resident.

### Option A — deploy from GitHub Actions

1. In the GitHub repository, add Actions secrets:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
2. In Cloudflare Workers, note the account's `workers.dev` subdomain (the part after the Worker name and before `.workers.dev`).
3. Run the `Deploy Online Presence Worker` workflow manually and enter that subdomain.
4. The workflow deploys the Worker, verifies `/health`, then enables `assets/js/presence-config.json` with the final `wss://.../v1/presence` endpoint and pushes the activation commit to `main`.

The normal Pages workflow then rebuilds/deploys the site automatically.

### Option B — deploy locally

```bash
cd workers/presence
npm install
npx wrangler login
npm run deploy
```

After deployment, set `assets/js/presence-config.json` to:

```json
{
  "version": 1,
  "enabled": true,
  "websocketUrl": "wss://xuan-le-online-presence.YOUR-SUBDOMAIN.workers.dev/v1/presence"
}
```

Commit that one config change to `main`; the standard Pages workflow will publish it.

## Operational notes

- `online` means unique browser identities with an active registered WebSocket, not verified physical people.
- Multiple tabs in the same browser are designed to count as one.
- Clearing site storage creates a new random browser identity.
- A malicious client can manufacture identities; v1 is an operational presence metric, not an anti-fraud identity system.
