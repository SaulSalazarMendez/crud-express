var datos = [];
var i = 1;

function addDato(dato){
    var data = JSON.parse(JSON.stringify(dato));
    data.id = i;
    i++;
    datos.push(data);
}


module.exports = {datos, addDato};