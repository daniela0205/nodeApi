var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// upload file routes
var job_routes = require('./routes/job');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Cors

// routs

app.use('/api',job_routes);

// exportar
module.exports = app;