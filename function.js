const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "/index.html",
    "/acercade.html",
    "/contacto.html",
    "/diseños.html",
    "/productos.html",
    "/success.html",
    "/SUSCRIBE.html",
    "/ubicacion.html",
    "assets/css/stylesheets.css",
    "js/app.js",
    "/js/main.js",
    "/js/sw.js",
    "http://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
    "http://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
];

self.addEventListener("install", (e) => {
    console.log("entrando a instalar");
    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAAll(APP_SHELL));

    e.waitUntil(cacheStatic);

});

self.addEventListener("fetch", (e) => {
    console.log("fetch!  ", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );
});