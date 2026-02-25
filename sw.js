// ===== TUTTO SISTEMA SERVICE WORKER =====

const CACHE_NAME = "tutto-v2";

const urlsToCache = [
  "/",
  "index.html",
  "admin.html",
  "cliente.html",
  "cocina.html",
  "mozo.html",
  "dueno.html",
  "style.css",
  "firebase.js",
  "manifest.json",
  "logo.png",
  "icon.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => caches.match(event.request))
  );
});