self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('efcpgh').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?utm_source=homescreen',
        '/?utm_source=homescreen'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(resp) {
      return resp || fetch(e.request);
    })
  );
});
