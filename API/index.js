const express = require('express');
const mongoose =  require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');



//crear el servidor
const app = express();

//Hablitar cors
const whitelist = ['http://localhost:3200'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if( existe ) {
            callback(null,true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
};

app.use(cors(corsOptions));

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