const rutas = require('express').Router();

const apiPersona = require('./apis/personaApi');

rutas.use('/persona', apiPersona);

module.exports = rutas;