const C='mhm-v10-9-2',A=['./','./index.html','./kb.json','./documents.json','./intents.json','./concepts.json','./requirements.json','./conflicts.json','./gateways.json','./approval_registry.json','./manifest.webmanifest','./intelligence.json','./tower_intelligence.json','./timeline.json','./deep_monitoring.json','./mhmrws-logo.png','./golden_questions.json','./golden_questions_40.json','./golden_test_results_40.json','./production_improvements.json','./governance.json','./bilingual_answers.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(async c=>{await Promise.allSettled(A.map(u=>c.add(u)))}).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url),same=u.origin===location.origin;
 const core=same&&(r.mode==='navigate'||/\.(?:html?|json|js|webmanifest)$/i.test(u.pathname));
 if(core){
  e.respondWith(fetch(r).then(resp=>{if(resp&&resp.ok){let cp=resp.clone();caches.open(C).then(c=>c.put(r,cp))}return resp})
   .catch(()=>caches.match(r).then(x=>x||(r.mode==='navigate'?caches.match('./index.html'):undefined))));
  return;
 }
 e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(resp=>{if(same&&resp&&resp.ok){let cp=resp.clone();caches.open(C).then(c=>c.put(r,cp))}return resp})));
});