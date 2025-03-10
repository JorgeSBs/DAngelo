const CACHE_VERSION = 'v1';
const CACHE_NAME = `${CACHE_VERSION}-clinic-cache`;
const ASSETS = [
  // HTML
  './',
  './index.html',
  './about.html',
  './aboutusuario.html',
  './appointment.html',
  './appointmentusuario.html',
  './contact.html',
  './contactusuario.html',
  './featureusuario.html',
  './feature.html',
  './service.html',
  './serviceusuario.html',
  './team.html',
  './teamusuario.html',
  './testimonial.html',
  './testimonialusuario.html',
  './404.html',

  // CSS
  './css/bootstrap.min.css',
  './css/style.css',
  
  // JS
  './js/main.js',
  './lib/animate/animate.min.css',
  './lib/counterup/counterup.min.js',
  './lib/easing/easing.min.js',
  './lib/owlcarousel/owl.carousel.min.js',
  './lib/tempusdominus/js/tempusdominus-bootstrap-4.js',
  './lib/waypoints/waypoints.min.js',
  './lib/wow/wow.min.js',

  // Imágenes
  './img/logo1.jpg',
  './img/logo2.jpg',
  './img/about-1.jpg',
  './img/about-2.jpg',
  './img/carousel-1.jpg',
  './img/carousel-2.jpg',
  './img/carousel-3.jpg',
  './img/feature.jpg',
  './img/header-page.jpg',
  './img/team-1.jpg',
  './img/team-2.jpg',
  './img/team-3.jpg',
  './img/team-4.jpg',
  './img/testimonial-1.jpg',
  './img/testimonial-2.jpg',
  './img/testimonial-3.jpg',
  './img/log.png',
  './img/Register.png',

  // Manifest y otros
  './manifest.json',
];

// Instalación
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(ASSETS).catch(error => {
          console.error('Error al cachear:', error);
        });
      })
  );
});

// Fetch de recursos
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

// Limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});