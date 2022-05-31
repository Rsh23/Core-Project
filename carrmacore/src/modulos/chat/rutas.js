const express = require('express');

const respuesta = require('../../red/respuestas.js');
const controlador = require('./controlador.js');

const router = express.Router();

//  rutas para las peticiones 
router.post('/grupos',chatgruposlistar);
router.post('/participantesgrupo',participantesgrupo);


async function chatgruposlistar(req,res){
    try {
        const items = await controlador.chatgruposlistar(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function participantesgrupo(req,res){
    try {
        const items = await controlador.participantesgrupo(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};




module.exports = router;