import { DurableObject } from "cloudflare:workers";

const PROTOCOL_VERSION = 1;
const MAX_SOCKET_COUNT = 5000;
const MAX_MESSAGE_BYTES = 1024;
const AUTO_PING = JSON.stringify({ type: "ping" });
const AUTO_PONG = JSON.stringify({ type: "pong" });
const DEFAULT_ALLOWED_ORIGINS = new Set([
  "https://sunflower1509.github.io",
  "http://localhost:8080",
  "http://127.0.0.1:8080",
]);

function allowedOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  return configured.length ? new Set(configured) : DEFAULT_ALLOWED_ORIGINS;
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "x-robots-tag": "noindex, nofollow, nosnippet",
      ...extraHeaders,
    },
  });
}

function isAllowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  return Boolean(origin && allowedOrigins(env).has(origin));
}

function readAttachment(ws) {
  try { return ws.deserializeAttachment() || null; } catch { return null; }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, service: "xuan-le-online-presence", protocol: PROTOCOL_VERSION });
    }

    if (url.pathname !== "/v1/presence") return json({ error: "not_found" }, 404);
    if (request.method !== "GET") {
      return json({ error: "method_not_allowed" }, 405, { allow: "GET" });
    }
    if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
      return json({ error: "websocket_upgrade_required" }, 426);
    }
    if (!isAllowedOrigin(request, env)) return json({ error: "origin_not_allowed" }, 403);

    const id = env.PRESENCE.idFromName("global-v1");
    return env.PRESENCE.get(id).fetch(request);
  },
};

export class PresenceRoom extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx.setWebSocketAutoResponse(
      new WebSocketRequestResponsePair(AUTO_PING, AUTO_PONG),
    );
  }

  async fetch(request) {
    if (request.headers.get("Upgrade")?.toLowerCase() !== "websocket") {
      return json({ error: "websocket_upgrade_required" }, 426);
    }

    const activeSockets = this.ctx.getWebSockets();
    if (activeSockets.length >= MAX_SOCKET_COUNT) {
      return json({ error: "presence_capacity_reached" }, 503);
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    this.ctx.acceptWebSocket(server);
    server.serializeAttachment({ visitorId: null, protocol: null });

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(ws, message) {
    if (typeof message !== "string" || message.length > MAX_MESSAGE_BYTES) {
      ws.close(1008, "invalid-message");
      return;
    }

    let data;
    try { data = JSON.parse(message); } catch {
      ws.close(1008, "invalid-json");
      return;
    }

    const attachment = readAttachment(ws);

    if (data?.type === "hello") {
      if (attachment?.visitorId) {
        ws.close(1008, "hello-already-registered");
        return;
      }
      const visitorId = String(data.visitorId || "");
      const protocol = Number(data.protocol);
      if (protocol !== PROTOCOL_VERSION || !/^[a-f0-9-]{32,36}$/i.test(visitorId)) {
        ws.close(1008, "invalid-hello");
        return;
      }
      ws.serializeAttachment({ visitorId, protocol });
      ws.send(JSON.stringify({ type: "hello-ack", protocol: PROTOCOL_VERSION }));
      this.broadcastPresence();
      return;
    }

    if (!attachment?.visitorId) {
      ws.close(1008, "hello-required");
      return;
    }

    // Fallback for runtimes that do not apply the automatic ping/pong response.
    if (data?.type === "ping") {
      ws.send(AUTO_PONG);
      return;
    }

    ws.close(1008, "unsupported-message");
  }

  webSocketClose(ws, code, reason) {
    try { ws.close(code, reason); } catch { /* runtime may already have completed close */ }
    this.broadcastPresence();
  }

  webSocketError(ws) {
    try { ws.close(1011, "websocket-error"); } catch { /* noop */ }
    this.broadcastPresence();
  }

  broadcastPresence() {
    const visitors = new Set();
    const registeredSockets = [];

    for (const ws of this.ctx.getWebSockets()) {
      if (ws.readyState !== 1) continue;
      const attachment = readAttachment(ws);
      if (!attachment?.visitorId) continue;
      visitors.add(attachment.visitorId);
      registeredSockets.push(ws);
    }

    const payload = JSON.stringify({
      type: "presence",
      online: visitors.size,
      at: new Date().toISOString(),
      protocol: PROTOCOL_VERSION,
    });

    for (const ws of registeredSockets) {
      try { ws.send(payload); } catch { /* stale sockets are cleaned up by runtime */ }
    }
  }
}
