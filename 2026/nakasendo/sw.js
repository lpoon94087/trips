// Offline cache: pages and assets are served from cache and refreshed in the background.
const CACHE = "nakasendo-v7";
const CORE = [
  "./", "index.html", "days.html", "map.html", "stays.html", "info.html", "places.html", "assets/places.js",
  "assets/style.css", "assets/data.js", "assets/app.js",
  "img/bg.jpg", "img/icon-192.png", "img/apple-touch-icon.png", "manifest.webmanifest"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Map tiles and live weather always go to the network.
  if (url.hostname.includes("arcgisonline") || url.hostname.includes("open-meteo")) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: url.origin === location.origin });
    const net = fetch(e.request).then(r => { if (r.ok || r.type === "opaque") c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
