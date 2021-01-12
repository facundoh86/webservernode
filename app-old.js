

// 1 paso

const http = require('http');

// crear el servidor

http.createServer(( req, res ) => {

    //Aqui regresamos un JSON y que se aun servicio

    res.writeHead(200, { 'Content-type': 'application/json'});

    let salida ={
        nombre: 'facundo',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // Podemos agregar lo que queramos a una pagina web
    // res.write('Hola Mundo');
    res.end();
})

// especificar el puerto

.listen(8080);

console.log('Escuchando el puerto 8080');