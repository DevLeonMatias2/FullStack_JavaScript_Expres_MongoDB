const express = require('express');
const mongoose =  require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');



//crear el servidor
const app = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://leonmat2030:2vEsNBB22byH$zQ@cluster0.z6u22.mongodb.net/VETERINARIA?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, err => {
    console.log(err);
});

// habilitar routing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes());

//puerto ya arrancar el servidor
app.listen(4500,() => {
    console.log('Servidor funcionando')
});