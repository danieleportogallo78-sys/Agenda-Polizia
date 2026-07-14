const CACHE_NAME = 'registro-pds-v1';
const urlsToCache = [
  '/Agenda-Polizia/',
  '/Agenda-Polizia/index.html',
  '/Agenda-Polizia/manifest.json',
  '/Agenda-Polizia/icon-48.png',
  '/Agenda-Polizia/icon-72.png',
  '/Agenda-Polizia/icon-96.png',
  '/Agenda-Polizia/icon-144.png',
  '/Agenda-Polizia/icon-192.png',
  '/Agenda-Polizia/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
