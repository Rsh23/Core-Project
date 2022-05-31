const express = require('express');
const morgan = require('morgan');
const config = require('./config.js');


const clientes = require('./modulos/usuarios/rutas.js');
const util = require('./modulos/util/rutas.js');
const chat  = require('./modulos/chat/rutas.js');



const app = express();

// middleware 
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// configuracion
app.set('port',config.app.port);


// rutas 
app.use('/carrma/usuarios',clientes);
app.use('/carrma/util',util);
app.use('/carrma/chat',chat);

module.exports = app;