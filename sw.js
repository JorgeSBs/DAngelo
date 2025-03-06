const CACHE_VERSION = 'v2';
const CACHE_NAME = `${CACHE_VERSION}-dangelo-cache`;
const ASSETS = [
  // HTML
  '/DAngelo/',
  '/DAngelo/index.html',
  '/DAngelo/about.html',
  '/DAngelo/appointment.html',
  '/DAngelo/contact.html',
  '/DAngelo/feature.html',
  '/DAngelo/service.html',
  '/DAngelo/team.html',
  '/DAngelo/testimonial.html',

  // CSS
  '/DAngelo/css/bootstrap.min.css',
  '/DAngelo/css/style.css',
  '/DAngelo/lib/animate/animate.min.css',

  // JS
  '/DAngelo/js/main.js',
  '/DAngelo/lib/counterup/counterup.min.js',
  '/DAngelo/lib/easing/easing.min.js',
  '/DAngelo/lib/owlcarousel/owl.carousel.min.js',
  '/DAngelo/lib/tempusdominus/js/tempusdominus-bootstrap-4.js',
  '/DAngelo/lib/waypoints/waypoints.min.js',
  '/DAngelo/lib/wow/wow.min.js',

  // Imágenes
  '/DAngelo/img/logo1.jpg',
  '/DAngelo/img/logo2.jpg',
  '/DAngelo/img/about-1.jpg',
  '/DAngelo/img/about-2.jpg',
  '/DAngelo/img/carousel-1.jpg',
  '/DAngelo/img/carousel-2.jpg',
  '/DAngelo/img/carousel-3.jpg',
  '/DAngelo/img/feature.jpg',
  '/DAngelo/img/header-page.jpg',
  '/DAngelo/img/team-1.jpg',
  '/DAngelo/img/team-2.jpg',
  '/DAngelo/img/team-3.jpg',
  '/DAngelo/img/team-4.jpg',
  '/DAngelo/img/testimonial-1.jpg',
  '/DAngelo/img/testimonial-2.jpg',
  '/DAngelo/img/testimonial-3.jpg',

  // Manifest e ícono
  '/DAngelo/manifest.json',
  '/DAngelo/img/icon-192x192.png',
  '/DAngelo/img/icon-512x512.png'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// Fetch de recursos
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
