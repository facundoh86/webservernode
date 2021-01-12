

const express = require('express');


// Aqui se declara un variable que guarda el producto de la funcion express
// ahora podemos usar express como lo deseemos
const  app     = express();
const  hbs    = require('hbs');

const port = process.env.PORT || 3000;

//Importacion archivo helpers
require('./hbs/helpers');


//Express HBS engine
hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');



// Montar esa carepta en mi web o app web
app.use(express.static( __dirname + '/public' ) );


app.get('/', (req, res) =>  {
  
        res.render('home' , {
            nombre: 'Facundo'
        });
})
app.get('/about', (req, res) =>  {
    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando puerto  ${ port }`);
});