
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//Importar Rutas
const postsRoute = require('./routes/posts');

//Middlewares
app.use('/posts', postsRoute);

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