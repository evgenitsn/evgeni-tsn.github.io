var CACHE_STATIC_NAME = 'static-v2';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';
var STATIC_FILES = [
  '/',
  '/index.html',
  '/resources/js/index.js',
  '/resources/css/queries.min.css',
  '/resources/css/style.min.css',
  '/resources/fonts/ADAM.CG PRO.otf',
  '/resources/fonts/Avenir Next Bold.otf',
  '/resources/fonts/avenir-next-lt-pro-594537bb0d333.otf',
  '/resources/fonts/RemachineScript_Personal_Use.ttf',
  '/resources/images/logos/android.png',
  '/resources/images/logos/angular.png',
  '/resources/images/logos/bootstrap.png',
  '/resources/images/logos/csharp.png',
  '/resources/images/logos/css.png',
  '/resources/images/logos/dotnet.png',
  '/resources/images/logos/firebase.png',
  '/resources/images/logos/html5.png',
  '/resources/images/logos/java.png',
  '/resources/images/logos/jquery.png',
  '/resources/images/logos/js.png',
  '/resources/images/logos/mongodb.png',
  '/resources/images/logos/nodejs.png',
  '/resources/images/logos/php.png',
  '/resources/images/logos/react.png',
  '/resources/images/logos/redux.png',
  '/resources/images/logos/sass.png',
  '/resources/images/logos/webpack.png',
  '/resources/images/1.jpg',
  '/resources/images/2.jpg',
  '/resources/images/3.jpg',
  '/resources/images/4.jpg',
  '/resources/images/5.jpg',
  '/resources/images/6.jpg',
  '/resources/images/7.jpg',
  '/resources/images/8.jpg',
  '/resources/images/Fakebook.png',
  '/resources/images/hero.jpg',
  '/resources/images/logo-dot.svg',
  '/resources/images/logo-old.svg',
  '/resources/images/logo-semicolon-black.svg',
  '/resources/images/Motivy-logo.svg',
  '/resources/images/Motivy-screenshot.png',
  '/resources/images/Pictify.png',
  '/resources/images/Portfolio-logo.svg',
  '/resources/images/Portfolio-screenshot.png',
  '/resources/images/Pucanka.png',
  '/vendors/css/animate.css',
  '/vendors/css/font-awesome.min.css',
  '/vendors/css/grid.css',
  '/vendors/css/normalize.css',
  '/vendors/fonts/fontawesome-webfont.eot',
  '/vendors/fonts/fontawesome-webfont.svg',
  '/vendors/fonts/fontawesome-webfont.ttf',
  '/vendors/fonts/fontawesome-webfont.woff',
  '/vendors/fonts/fontawesome-webfont.woff2',
  '/vendors/fonts/FontAwesome.otf',
  '/vendors/js/html5shiv.min.js',
  '/vendors/js/jquery.min.js',
  '/vendors/js/jquery.waypoints.min.js',
  '/vendors/js/respond.min.js',
  '/vendors/js/selectivizr.min.js',
];

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(err) {

            });
        }
      })
  );
});