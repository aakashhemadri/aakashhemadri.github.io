const staticPage = "aakashhemadri-com"
const assets = [
	"/",
	"/index.html",
	"/style.css",
	"/app.js",
	"/images/icons/android-chrome-192x192.png",
	"/images/icons/android-chrome-512x512.png",
	"/images/icons/favicon-16x16.png",
	"/images/icons/favicon-32x32.png",
	"/images/icons/apple-touch-icon.png",
]

self.addEventListener("install", installEvent => {
	installEvent.waitUntil(
		caches.open(staticPage).then(cache => {
			cache.addAll(assets)
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

