/* 🔒 PROPRIETARY OFFLINE ENGINE | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'pp-vault-hq-cache-v20';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo-flat.png',
  './logo-3d.png',
  './google-icon.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(i=>i!==CACHE_NAME).map(i=>caches.delete(i)))));});
