module.exports = (sequelize, type) => {
    return sequelize.define('persona', {
        'personaId':{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING
    })
}