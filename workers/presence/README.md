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

### Production — Cloudflare Workers Builds

The production Worker is connected directly to the GitHub repository through Cloudflare Workers Builds.

- Production branch: `main`
- Build command: `npm --prefix workers/presence install --no-audit --no-fund`
- Deploy command: `npm --prefix workers/presence run deploy`
- Worker name: `xuan-le-online-presence`
- Production URL: `https://xuan-le-online-presence.info-kinhte24h.workers.dev`
- Health endpoint: `/health`
- WebSocket endpoint: `/v1/presence`

A push to `main` automatically triggers a Cloudflare build/deploy. No Cloudflare API token or GitHub Actions secret is required for the normal deployment path.

The frontend runtime configuration is published from `assets/js/presence-config.json`. It currently points to:

```text
wss://xuan-le-online-presence.info-kinhte24h.workers.dev/v1/presence
```

### Local development

```bash
cd workers/presence
npm install
npx wrangler login
npm run deploy
```

## Operational notes

- `online` means unique browser identities with an active registered WebSocket, not verified physical people.
- Multiple tabs in the same browser are designed to count as one.
- Clearing site storage creates a new random browser identity.
- A malicious client can manufacture identities; v1 is an operational presence metric, not an anti-fraud identity system.
- Production `workers.dev` remains public because the website must connect to it without authentication. Preview URLs are explicitly disabled in `wrangler.jsonc`.
