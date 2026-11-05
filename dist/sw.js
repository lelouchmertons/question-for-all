const CACHE = "caderno330-v97";
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/icon.svg",
  "assets/all-might-brand.png",
  "assets/all-might-footer.png",
  "assets/all-might-hair-a.png?v=1",
  "assets/all-might-chest.svg?v=2",
  "assets/styles.css?v=25",
  "assets/app.js?v=82",
  "assets/questions.js?v=73"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match("index.html")))
  );
});
