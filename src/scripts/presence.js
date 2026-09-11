const OnlinePresence = (() => {
  "use strict";

  const CONFIG_URL = "assets/js/presence-config.json?v=1";
  const VISITOR_KEY = "xl_presence_visitor_v1";
  const LEADER_KEY = "xl_presence_leader_v1";
  const COUNT_KEY = "xl_presence_count_v1";
  const CHANNEL_NAME = "xl-presence-v1";
  const LEASE_MS = 8000;
  const RENEW_MS = 2500;
  const FOLLOWER_CHECK_MS = 3000;
  const FRESH_COUNT_MS = 15000;
  const MAX_RECONNECT_MS = 30000;
  const HELLO_TIMEOUT_MS = 8000;

  let config = null;
  let visitorId = "";
  let tabId = createId();
  let channel = null;
  let socket = null;
  let isLeader = false;
  let renewTimer = null;
  let followerTimer = null;
  let reconnectTimer = null;
  let helloTimer = null;
  let reconnectAttempt = 0;
  let mounted = false;
  let node = null;
  let valueNode = null;
  let labelNode = null;

  function createId() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    const bytes = new Uint8Array(16);
    if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(bytes);
    else for (let i = 0; i < bytes.length; i += 1) bytes[i] = Math.floor(Math.random() * 256);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function safeSet(key, value) {
    try { localStorage.setItem(key, value); return true; } catch { return false; }
  }

  function safeRemove(key) {
    try { localStorage.removeItem(key); } catch { /* noop */ }
  }

  function getVisitorId() {
    const existing = safeGet(VISITOR_KEY);
    if (existing && /^[a-f0-9-]{32,36}$/i.test(existing)) return existing;
    const created = createId();
    safeSet(VISITOR_KEY, created);
    return created;
  }

  function parseJson(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  async function loadConfig() {
    try {
      const response = await fetch(CONFIG_URL, { cache: "no-store", credentials: "same-origin" });
      if (!response.ok) return null;
      const data = await response.json();
      if (!data?.enabled || typeof data.websocketUrl !== "string") return null;
      const url = new URL(data.websocketUrl, location.href);
      const localDev = ["localhost", "127.0.0.1"].includes(url.hostname);
      if (url.protocol !== "wss:" && !(localDev && url.protocol === "ws:")) return null;
      return { websocketUrl: url.href, version: Number(data.version) || 1 };
    } catch {
      return null;
    }
  }

  function injectStyles() {
    if (document.getElementById("xl-presence-v1-styles")) return;
    const style = document.createElement("style");
    style.id = "xl-presence-v1-styles";
    style.textContent = `
      .xl-presence-v1{display:inline-flex;align-items:center;gap:7px;min-height:36px;padding:0 11px;border:1px solid rgba(25,63,48,.14);border-radius:999px;background:rgba(255,255,255,.72);box-shadow:0 6px 20px rgba(25,63,48,.06);color:#163d2f;font-size:12px;font-weight:700;line-height:1;white-space:nowrap;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
      .xl-presence-v1__dot{width:7px;height:7px;border-radius:50%;background:#a2aaa5;box-shadow:0 0 0 3px rgba(162,170,165,.14);transition:background .2s ease,box-shadow .2s ease}
      .xl-presence-v1[data-state="live"] .xl-presence-v1__dot{background:#21a366;box-shadow:0 0 0 3px rgba(33,163,102,.14);animation:xl-presence-pulse 2.4s ease-out infinite}
      .xl-presence-v1[data-state="connecting"] .xl-presence-v1__dot{background:#d39a28;box-shadow:0 0 0 3px rgba(211,154,40,.14)}
      .xl-presence-v1[data-state="offline"]{opacity:.72}.xl-presence-v1__value{font-variant-numeric:tabular-nums;min-width:1ch}.xl-presence-v1__label{font-weight:600;color:#607067}
      @keyframes xl-presence-pulse{0%,55%{box-shadow:0 0 0 3px rgba(33,163,102,.14)}100%{box-shadow:0 0 0 8px rgba(33,163,102,0)}}
      @media (prefers-reduced-motion:reduce){.xl-presence-v1[data-state="live"] .xl-presence-v1__dot{animation:none}}
      @media (max-width:1120px){.xl-presence-v1{padding:0 9px}.xl-presence-v1__label{display:none}}
      @media (max-width:720px){.xl-presence-v1{min-height:34px;gap:6px;padding:0 8px;font-size:11px}}
    `;
    document.head.append(style);
  }

  function mount() {
    if (mounted) return true;
    const tools = document.querySelector(".header-tools");
    if (!tools) return false;
    injectStyles();
    node = document.createElement("div");
    node.className = "xl-presence-v1";
    node.dataset.state = "connecting";
    node.setAttribute("role", "status");
    node.setAttribute("aria-live", "polite");
    node.setAttribute("aria-atomic", "true");
    node.title = "Số trình duyệt đang hoạt động. ID ngẫu nhiên được lưu cục bộ để tránh đếm trùng nhiều tab; ứng dụng không lưu IP.";
    node.innerHTML = '<span class="xl-presence-v1__dot" aria-hidden="true"></span><strong class="xl-presence-v1__value">—</strong><span class="xl-presence-v1__label">đang online</span>';
    valueNode = node.querySelector(".xl-presence-v1__value");
    labelNode = node.querySelector(".xl-presence-v1__label");
    const zalo = tools.querySelector(".header-zalo");
    tools.insertBefore(node, zalo || null);
    mounted = true;
    setUi("connecting");
    return true;
  }

  function setUi(state, count = null) {
    if (!mounted) return;
    node.dataset.state = state;
    if (state === "live" && Number.isInteger(count) && count >= 0) {
      valueNode.textContent = new Intl.NumberFormat("vi-VN").format(count);
      labelNode.textContent = "đang online";
      node.setAttribute("aria-label", `${count} người dùng đang online`);
      return;
    }
    valueNode.textContent = "—";
    labelNode.textContent = state === "offline" ? "mất kết nối" : "đang đồng bộ";
    node.setAttribute("aria-label", state === "offline" ? "Bộ đếm online đang mất kết nối" : "Bộ đếm online đang đồng bộ");
  }

  function readLease() {
    return parseJson(safeGet(LEADER_KEY));
  }

  function writeLease() {
    return safeSet(LEADER_KEY, JSON.stringify({ tabId, expiresAt: Date.now() + LEASE_MS }));
  }

  function ownLease() {
    const lease = readLease();
    return Boolean(lease && lease.tabId === tabId && lease.expiresAt > Date.now());
  }

  function tryBecomeLeader() {
    const now = Date.now();
    const lease = readLease();
    if (lease && lease.tabId !== tabId && lease.expiresAt > now) {
      if (isLeader) becomeFollower();
      return false;
    }
    if (!writeLease()) {
      becomeLeader();
      return true;
    }
    const confirmed = readLease();
    if (confirmed?.tabId === tabId) {
      becomeLeader();
      return true;
    }
    return false;
  }

  function becomeLeader() {
    if (isLeader) return;
    isLeader = true;
    clearInterval(renewTimer);
    renewTimer = setInterval(() => {
      if (!isLeader) return;
      const current = readLease();
      if (current && current.tabId !== tabId && current.expiresAt > Date.now()) {
        becomeFollower();
        return;
      }
      writeLease();
      channel?.postMessage({ type: "leader", tabId, at: Date.now() });
    }, RENEW_MS);
    channel?.postMessage({ type: "leader", tabId, at: Date.now() });
    connect();
  }

  function becomeFollower() {
    if (!isLeader) return;
    isLeader = false;
    clearInterval(renewTimer);
    renewTimer = null;
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
    clearTimeout(helloTimer);
    helloTimer = null;
    if (socket) {
      try { socket.close(1000, "leader-changed"); } catch { /* noop */ }
      socket = null;
    }
    useFreshSharedCount();
  }

  function releaseLeadership() {
    if (ownLease()) safeRemove(LEADER_KEY);
    becomeFollower();
    channel?.postMessage({ type: "leader-released", tabId, at: Date.now() });
  }

  function publishCount(count, at = Date.now()) {
    const payload = { type: "presence", count, at };
    safeSet(COUNT_KEY, JSON.stringify(payload));
    channel?.postMessage(payload);
    setUi("live", count);
  }

  function useFreshSharedCount() {
    const shared = parseJson(safeGet(COUNT_KEY));
    if (shared && Number.isInteger(shared.count) && Date.now() - Number(shared.at) < FRESH_COUNT_MS) {
      setUi("live", shared.count);
    } else if (navigator.onLine === false) {
      setUi("offline");
    } else {
      setUi("connecting");
    }
  }

  function scheduleReconnect() {
    if (!isLeader || reconnectTimer || navigator.onLine === false) return;
    const base = Math.min(MAX_RECONNECT_MS, 1000 * (2 ** Math.min(reconnectAttempt, 5)));
    const delay = Math.round(base * (0.75 + Math.random() * 0.5));
    reconnectAttempt += 1;
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      connect();
    }, delay);
  }

  function connect() {
    if (!isLeader || !config || navigator.onLine === false) {
      if (navigator.onLine === false) setUi("offline");
      return;
    }
    if (socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)) return;
    setUi("connecting");
    let ws;
    try { ws = new WebSocket(config.websocketUrl); } catch { scheduleReconnect(); return; }
    socket = ws;

    ws.addEventListener("open", () => {
      if (!isLeader || ws !== socket) {
        ws.close(1000, "not-leader");
        return;
      }
      reconnectAttempt = 0;
      ws.send(JSON.stringify({ type: "hello", protocol: 1, visitorId }));
      clearTimeout(helloTimer);
      helloTimer = setTimeout(() => {
        if (ws === socket && ws.readyState === WebSocket.OPEN) ws.close(1013, "hello-timeout");
      }, HELLO_TIMEOUT_MS);
    });

    ws.addEventListener("message", (event) => {
      if (ws !== socket) return;
      const data = parseJson(typeof event.data === "string" ? event.data : "");
      if (!data) return;
      if (data.type === "hello-ack") {
        clearTimeout(helloTimer);
        helloTimer = null;
      }
      if (data.type === "presence" && Number.isInteger(data.online) && data.online >= 0) {
        clearTimeout(helloTimer);
        helloTimer = null;
        const at = Number.isFinite(Date.parse(data.at)) ? Date.parse(data.at) : Date.now();
        publishCount(data.online, at);
      }
    });

    ws.addEventListener("close", () => {
      clearTimeout(helloTimer);
      helloTimer = null;
      if (ws === socket) socket = null;
      if (!isLeader) return;
      setUi(navigator.onLine === false ? "offline" : "connecting");
      scheduleReconnect();
    });

    ws.addEventListener("error", () => {
      if (ws === socket && ws.readyState === WebSocket.OPEN) ws.close(1011, "socket-error");
    });
  }

  function onChannelMessage(event) {
    const message = event.data;
    if (!message || typeof message !== "object") return;
    if (message.type === "presence" && Number.isInteger(message.count) && Date.now() - Number(message.at) < FRESH_COUNT_MS) {
      setUi("live", message.count);
    }
    if (message.type === "leader" && message.tabId !== tabId && isLeader) {
      const lease = readLease();
      if (lease?.tabId !== tabId && lease?.expiresAt > Date.now()) becomeFollower();
    }
    if (message.type === "leader-released" && !isLeader) {
      setTimeout(tryBecomeLeader, Math.round(100 + Math.random() * 250));
    }
  }

  function installCoordination() {
    if ("BroadcastChannel" in globalThis) {
      channel = new BroadcastChannel(CHANNEL_NAME);
      channel.addEventListener("message", onChannelMessage);
    }
    addEventListener("storage", (event) => {
      if (event.key === COUNT_KEY) useFreshSharedCount();
      if (event.key === LEADER_KEY) {
        const lease = parseJson(event.newValue);
        if (isLeader && lease?.tabId && lease.tabId !== tabId && lease.expiresAt > Date.now()) becomeFollower();
        if (!isLeader && (!lease || lease.expiresAt <= Date.now())) setTimeout(tryBecomeLeader, 100 + Math.random() * 300);
      }
    });
    followerTimer = setInterval(() => {
      if (isLeader) return;
      const lease = readLease();
      if (!lease || lease.expiresAt <= Date.now()) tryBecomeLeader();
      else useFreshSharedCount();
    }, FOLLOWER_CHECK_MS);
  }

  async function start() {
    config = await loadConfig();
    if (!config) return;
    if (!mount()) return;
    visitorId = getVisitorId();
    installCoordination();
    useFreshSharedCount();
    tryBecomeLeader();

    addEventListener("online", () => {
      if (isLeader) {
        reconnectAttempt = 0;
        connect();
      } else tryBecomeLeader();
    });
    addEventListener("offline", () => setUi("offline"));
    addEventListener("pagehide", releaseLeadership);
    addEventListener("pageshow", () => {
      if (!isLeader) setTimeout(tryBecomeLeader, 50 + Math.random() * 200);
    });
  }

  function init() {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
    else start();
  }

  return { init };
})();

OnlinePresence.init();
