if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}

if(window.caches){
    caches.open('Prueba')
    caches.open('Prueva 2')

    caches.has('prueba')
        .then((result)=>{
            console.log(result);
    })

    caches.open('Cache1').then((cache)=>{
        cache.addAll([
            '/index.html',
            "/css/pages.css",
            "/img/img2.jpg",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        ]).then(()=>{
            //cache.delete('/css/page.css')
            //cache.put('index.html', new Response('Actualizado desde cache'))
        });

        cache.match('index.html')
            .then((res)=>{
                res.text().then((trxt)=>{console.log(trxt)})
                console.log(res)
            })
    })

    caches.keys()
        .then((keys)=>{
            console.log(keys)
        })
}
