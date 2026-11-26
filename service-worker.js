const CACHE_NAME = "nz-travel-plan-2027-v61";
const WEATHER_URL = new URL("./weather-data.json", self.location).href;
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css?v=61",
  "./app.js?v=61",
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

  if (request.url.startsWith(WEATHER_URL)) {
    event.respondWith(
      fetch(request, { cache: "no-store" })
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(WEATHER_URL, clone));
          }
          return response;
        })
        .catch(() => caches.match(WEATHER_URL))
    );
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
