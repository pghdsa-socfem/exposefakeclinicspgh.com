self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('efcpgh').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?utm_source=homescreen',
        '/?utm_source=homescreen',
        '/assets/fonts/fontawesome-webfont.woff2',
        '/assets/fonts/fontawesome-webfont.ttf',
        '/assets/fonts/FontAwesome.otf',
        '/assets/fonts/fontawesome-webfont.svg',
        '/assets/fonts/fontawesome-webfont.woff',
        '/assets/fonts/fontawesome-webfont.eot',
        '/assets/js/main.js',
        '/assets/js/navbar.js',
        '/assets/js/bootstrap.min.js',
        '/assets/img/rose-2x.webp',
        '/assets/img/socfem.webp',
        '/assets/img/rose-1x.webp',
        '/assets/img/socfem.jpg',
        '/assets/img/rose-40.webp',
        '/assets/img/pghdsa-logo.webp',
        '/assets/img/intersectionalism.webp',
        '/assets/img/healthcare.webp',
        '/assets/img/rose.webp',
        '/assets/img/rose-4x.webp',
        '/assets/favicon.webp',
        '/assets/print/WCN-fake-clinics.pdf',
        '/assets/css/main.css',
        '/assets/css/bootstrap-iso.min.css'
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
