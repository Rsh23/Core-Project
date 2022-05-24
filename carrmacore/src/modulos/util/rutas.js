const express = require('express');

const respuesta = require('../../red/respuestas.js');
const controlador = require('./controlador.js');

const router = express.Router();

//  rutas para las peticiones 
router.post('/combo/rols',listartoles);
router.post('/combo/organizaciones',listarorganizaciones);
router.post('/combo/estados_tickets',listarestados_tickets);
router.post('/combo/prioridad_tickets',prioridad_tickets);


async function listartoles(req,res){
    try {
        const items = await controlador.ListarRols(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function listarorganizaciones(req,res){
    try {
        const items = await controlador.ListarOrganizaciones(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function listarestados_tickets(req,res){
    try {
        const items = await controlador.listarestados_tickets(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function prioridad_tickets(req,res){
    try {
        const items = await controlador.prioridad_tickets(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};



module.exports = router;