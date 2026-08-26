// ===============================
// Sudeep Portfolio PWA Service Worker
// ===============================

const CACHE_NAME = "sudeep-portfolio-v2";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/main.js",
    "/manifest.json",

    // PWA icons
    "/assets/icons/icon-192.png",
    "/assets/icons/icon-512.png",

    // Project images
    "/assets/images/pet-adoption.png",
    "/assets/images/nexuschat.png"
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

    // HTML pages:
    // Always try the latest version from the network first.
    if (event.request.mode === "navigate") {

        event.respondWith(

            fetch(event.request)
                .then((response) => {

                    return response;

                })
                .catch(() => {

                    return caches.match("/index.html");

                })

        );

        return;
    }


    // Other files:
    // Use cache first, then network.
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