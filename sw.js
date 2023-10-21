const cacheName = "mi-cache";
const cacheFiles = [
   'offline.html',
   'public/cards',
   'public/offline.jpg',
   'css/offline.css',
   'css/login.css'
]

// GUARDAR EN CACHE  Y BUSCAR EN CACHE -


// se ejecutará una vez se haya instalado

self.addEventListener('install', event => {   

// espera hasta que termine de instalarse el cache
event.waitUntil(

// guarda en cache el archivo de offline
   caches.open(cacheName).then(cache=>{
      cache.addAll(cacheFiles)
   })
);
});


// registra todas las peticiones hacia el servidor
self.addEventListener('fetch', event => {
   console.log(event);

// busca si x archivo está en el cache
event.waitUntil(
   caches.match(event.request).then(cacheRes=>{
      console.log(cacheRes)     
   })
)

})



self.addEventListener('fetch', event => {
   console.log(event);

// busca si x archivo está en el cache
event.respondWith(
   caches.match(event.request).then(cacheRes=>{
      if(cacheRes){
         return cacheRes 
         
      
      }else if (!navigator.onLine){
         return caches.match('offline.html');
      }
      else{
         return fetch(event.request)
      }
   })

) })