const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');





app.get('/', function(req, res) {

    // let salida = {
    //     nombre: 'nestor',
    //     ocupación: 'ingeniero',
    //     url: req.url
    // };



    res.render('home.hbs', {
        nombre: 'nescalro',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function(req, res) {
    res.render('about.hbs', {
        nombre: 'nescalro',
        anio: new Date().getFullYear()
    });
})

app.get('/data', function(req, res) {

    let salida = {
        nombre: 'nestor',
        ocupación: 'ingeniero',
        url: req.url
    };

    res.send('hola data');
})

app.listen(port);