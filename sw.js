self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pwa-store-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './polyfills.bundle.js',
        './vendor.bundle.js',
        './main.bundle.js',
        'data.json',
        'https://fonts.googleapis.com/icon?family=Material+Icons'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

