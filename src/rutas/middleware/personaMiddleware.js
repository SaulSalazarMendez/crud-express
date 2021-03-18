const { body, validationResult } = require('express-validator');

const validaNombrePersona = body('nombre', 'El nombre es obligatorio').exists().trim().not().isEmpty().escape();

const validaEroresPersona = (req,res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({erorres: errores.array()});
    }
    next();
}

const validaPersona = [validaNombrePersona, validaEroresPersona];


module.exports = {
    validaPersona
}