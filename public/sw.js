const CACHE='e-rph-ai-v1'
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/login','/']))))
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
