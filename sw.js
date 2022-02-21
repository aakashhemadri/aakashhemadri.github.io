const staticPage = "aakashhemadri-com"
const assets = {
	"/",
	"index.html",
	"style.css",
	"app.js"
	"images/",
}

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticPage).then(cache => {
			cache.AddAll(assets)
		})
	)
})

self.addEventListener("fetch", fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request)
		})
	)
})

