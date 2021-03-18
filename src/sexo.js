var express = require('express');
const datos = require('./data');
var sexo = express.Router();

// middleware that is specific to this router
sexo.use(function timeLog(req, res, next) {  
  next();
});
// define the home page route
sexo.get('/', function(req, res) {    
    res.send(JSON.stringify(datos.datos));
});
// define the about route
sexo.post('/', function(req, res) {
    datos.addDato(req.body);
    //res.send(JSON.stringify(req.body));
    res.send("OK");
});

module.exports = sexo;