// ===============================
// Sudeep Portfolio PWA Service Worker
// ===============================

const CACHE_NAME = "sudeep-portfolio-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/main.js",
    "/manifest.json",
    "/assets/icons/icon-192.png",
    "/assets/icons/icon-512.png"
];


// ===============================
// INSTALL
// ===============================

self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                return cache.addAll(FILES_TO_CACHE);

            })

    );

    self.skipWaiting();

});


// ===============================
// ACTIVATE
// ===============================

self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames
                        .filter((cacheName) => {
                            return cacheName !== CACHE_NAME;
                        })
                        .map((cacheName) => {
                            return caches.delete(cacheName);
                        })

                );

            })

    );

    self.clients.claim();

});


// ===============================
// FETCH
// ===============================

self.addEventListener("fetch", (event) => {

    event.respondWith(

        caches.match(event.request)
            .then((cachedResponse) => {

                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request);

            })

    );

});