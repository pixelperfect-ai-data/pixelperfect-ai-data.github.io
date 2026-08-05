/* 🔒 PROPRIETARY OFFLINE ENGINE | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'pp-vault-hq-cache-v22';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://raw.githubusercontent.com/pixelperfect-ai-data/pixelperfect-assets/main/logo-flat.png',
  'https://raw.githubusercontent.com/pixelperfect-ai-data/pixelperfect-assets/main/banner.png',
  'https://raw.githubusercontent.com/pixelperfect-ai-data/pixelperfect-assets/main/google-icon.png',
  'https://raw.githubusercontent.com/pixelperfect-ai-data/pixelperfect-assets/main/about-banner.png',
  'https://raw.githubusercontent.com/pixelperfect-ai-data/pixelperfect-assets/main/blog-banner.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(i=>i!==CACHE_NAME).map(i=>caches.delete(i)))));});
