var express = require('express');
var queso = express.Router();

// middleware that is specific to this router
queso.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
queso.get('/', function(req, res) {
  res.send('queso');
});
// define the about route
queso.get('/about', function(req, res) {
  res.send('pedo');
});

module.exports = queso;