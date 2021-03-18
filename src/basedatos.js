const { Sequelize, DataTypes } = require('sequelize');
const PersonaModel = require('./modelos/persona');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'base/db.sqlite'
});
  
const Persona = PersonaModel(sequelize, DataTypes); 

console.log('TABLA', Persona);

sequelize.sync({force: false}).then( () => {
    console.log('Tablas creadas');
});

module.exports = {
    Persona
}