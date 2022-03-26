let cacheData = "cache-1"

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/favicon.ico",
                "/manifest.json",
                "/logo192.png",
                "/index.html",
                "/",
                "/users",
                "/products",
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response) {
                    return response
                }
                const requestUrl = event.request.clone()
                fetch(requestUrl)
            })
        )
    }
})