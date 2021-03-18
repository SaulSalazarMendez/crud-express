const express = require('express');
var bodyParser = require('body-parser');
const rutas = require('./rutas/rutas');

const app = express();
const port = 3000;

require('./basedatos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.use('/api', rutas);