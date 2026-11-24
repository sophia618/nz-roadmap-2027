const CACHE_NAME = "nz-travel-plan-2027-v58";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=58",
  "./app.js?v=58",
  "./manifest.webmanifest",
  "./assets/hero-aoraki.jpg",
  "./assets/city-auckland-devonport.jpg",
  "./assets/city-queenstown.jpg",
  "./assets/city-milford.jpg",
  "./assets/city-wanaka.jpg",
  "./assets/city-tekapo.jpg",
  "./assets/city-mtcook.jpg",
  "./assets/city-kaikoura.jpg",
  "./assets/city-christchurch.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.url.includes("api.open-meteo.com")) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        return response;
      });
    })
  );
});
