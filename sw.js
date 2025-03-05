const CACHE_VERSION = 'v2'; // ¡Cambia la versión!
const CACHE_NAME = `${CACHE_VERSION}-clinic-cache`;
const ASSETS = [
  // HTML
  '/',
  '/index.html',
  '/about.html',
  '/appointment.html',
  '/contact.html',
  '/feature.html',
  '/service.html',
  '/team.html',
  '/testimonial.html',

  // CSS
  '/css/bootstrap.min.css',
  '/css/style.css',
  '/lib/animate/animate.min.css', // Asegúrate de que exista

  // JS
  '/js/main.js',
  '/lib/counterup/counterup.min.js',
  '/lib/easing/easing.min.js',
  '/lib/owlcarousel/owl.carousel.min.js',
  '/lib/tempusdominus/js/tempusdominus-bootstrap-4.js',
  '/lib/waypoints/waypoints.min.js',
  '/lib/wow/wow.min.js',

  // Imágenes (verifica rutas)
  '/img/logo1.jpg',
  '/img/logo2.jpg',
  // ... resto de imágenes
  '/img/about-1.jpg',
  '/img/about-2.jpg',
  '/img/carousel-1.jpg',
  '/img/carousel-2.jpg',
  '/img/carousel-3.jpg',
  '/img/feature.jpg',
  '/img/header-page.jpg',
  '/img/team-1.jpg',
  '/img/team-2.jpg',
  '/img/team-3.jpg',
  '/img/team-4.jpg',
  '/img/testimonial-1.jpg',
  '/img/testimonial-2.jpg',
  '/img/testimonial-3.jpg',
//  '/img/log.png',
 // '/img/Register.png',

  // Manifest
  '/manifest.json'
  '/clinic-website-template.jpg'
];

// Instalación con debug
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return Promise.all(
          ASSETS.map(asset => {
            return cache.add(asset).catch(error => {
              console.error(`Fallo en ${asset}:`, error);
              throw error;
            });
          })
        );
      })
      .catch(error => {
        console.error('Error durante la instalación:', error);
      })
  );
});
