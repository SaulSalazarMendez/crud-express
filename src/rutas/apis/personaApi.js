var express = require('express');
const { Persona } = require('../../basedatos');
const { validaPersona } = require('../middleware/personaMiddleware');
var apiPersona = express.Router();

// define the home page route
apiPersona.get('/', async function(req, res) {    
    const personas = await Persona.findAll();
    res.json(personas);
});
// define the about route
apiPersona.post('/',
    validaPersona
,async function(req, res) {    
    req.body.personaId = null;
    const persona = await Persona.create(req.body);    
    res.json(persona);
});
// define put
apiPersona.put('/:idPersona', validaPersona ,async function(req, res) {
    var persona = await Persona.findOne({ where: { personaId: req.params.idPersona } });
    if (persona) {
        Object.assign(persona, req.body);
        persona.personaId = req.params.idPersona;
        await persona.save();        
        res.json({ success: 'se actualizó la persona'});
    } else {
        res.status(406).send({ error: 'No se encontro la persona con id '+ req.params.idPersona});
    }
});
// define delete
apiPersona.delete('/:idPersona', async function(req, res) {
    var persona = await Persona.findOne({ where: { personaId: req.params.idPersona } });
    if (persona) {        
        await persona.destroy();        
        res.json({ success: 'se eliminó la persona'});
    } else {
        res.status(406).send({ error: 'No se encontro la persona con id '+ req.params.idPersona});
    }
});
module.exports = apiPersona;