const C='kleo-v3';
const ASSETS=['/','/index.html','/manifest.json','/icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const isDoc = req.mode==='navigate' || req.destination==='document';
  if(isDoc){
    // network-first : les pages (landing, app) se mettent toujours à jour
    e.respondWith(
      fetch(req).then(resp=>{const cp=resp.clone();caches.open(C).then(c=>c.put(req,cp));return resp;})
        .catch(()=>caches.match(req).then(r=>r||caches.match('/index.html')))
    );
    return;
  }
  // cache-first : assets statiques (images, vidéos, icônes)
  e.respondWith(
    caches.match(req).then(r=>r||fetch(req).then(resp=>{const cp=resp.clone();caches.open(C).then(c=>c.put(req,cp));return resp;}))
  );
});
