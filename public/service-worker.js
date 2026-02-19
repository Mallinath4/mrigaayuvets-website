
/* eslint-env serviceworker */


/* =====================================================
   MrigAayuVets Service Worker
   Caching Strategy: Cache First for assets,
   Network First for API calls
   ===================================================== */

const CACHE_NAME = 'mrigaayuvets-v1';
const RUNTIME_CACHE = 'mrigaayuvets-runtime-v1';

// Files to cache immediately on install
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/favicon-96x96.png',
  '/logo192.png',
  '/logo512.png',
  '/apple-touch-icon.png',
  '/browserconfig.xml',
];

// ===================== INSTALL =====================
// Pre-cache critical assets when SW installs
self.addEventListener('install', (event) => {
  console.log('🐾 MrigAayuVets SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 MrigAayuVets SW: Pre-caching assets...');
      return cache.addAll(PRECACHE_URLS);
    }).then(() => {
      // Force new SW to activate immediately without waiting
      return self.skipWaiting();
    })
  );
});

// ===================== ACTIVATE =====================
// Clean up old caches from previous versions
self.addEventListener('activate', (event) => {
  console.log('✅ MrigAayuVets SW: Activated');
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => !currentCaches.includes(name))
          .map((name) => {
            console.log(`🗑️ MrigAayuVets SW: Deleting old cache: ${name}`);
            return caches.delete(name);
          })
      );
    }).then(() => {
      // Take control of all open pages immediately
      return self.clients.claim();
    })
  );
});

// ===================== FETCH =====================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (Cloudinary, Google Fonts, etc.)
  if (url.origin !== location.origin) {
    event.respondWith(networkFirst(request));
    return;
  }

  // API calls → Network First (always fresh data)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Static assets → Cache First (fast loads)
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf)$/)
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // HTML pages → Stale While Revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// ===================== STRATEGIES =====================

// Cache First: serve from cache, fall back to network
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    return caches.match('/index.html'); // offline fallback
  }
}

// Network First: try network, fall back to cache
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch {
    const cached = await caches.match(request);
    return cached || caches.match('/index.html');
  }
}

// Stale While Revalidate: serve cache immediately, update in background
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);

  const networkFetch = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cached);

  return cached || networkFetch;
}

// ===================== SKIP WAITING MESSAGE =====================
// Triggered from serviceWorkerRegistration.js on update
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
