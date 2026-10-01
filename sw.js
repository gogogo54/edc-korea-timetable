const CACHE="edc-korea-2026-v1";
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","index.html","style.css","manifest.json","assets/icon.svg","assets/edc-10-03.jpg","assets/edc-10-04.jpg"]))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
