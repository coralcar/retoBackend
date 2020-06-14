
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
//Importar Rutas
const rutaPersonaje = require('./routes/personaje');

//Middlewares
app.use(bodyParser.json());  //Parser para asegurarse que toda la info este en formato JSON
app.use('/personaje', rutaPersonaje);

//RUTAS
app.get('/', (req,res) => {
    res.send('Hello world!');
});

//Conectarse a DB
mongoose.connect( process.env.DB_URL, 
    { useNewUrlParser: true,      //Pasamos estos dos objetos al constructor de MogoClient para usar parsers actuales y evitar
      useUnifiedTopology: true} , //fallas con nuevas versiones. Usados como precaucion, no realmente necesarios.
    () => console.log('Connected to DB') 
);

//Start listening to the server
app.listen(5000);