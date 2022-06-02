const express = require('express');

const respuesta = require('../../red/respuestas.js');
const controlador = require('./controlador.js');

const router = express.Router();

//  rutas para las peticiones 
router.get('/',todousuarios);
router.get('/:id', unusuario);
router.post('/', crearusuario);
router.post('/login', loginsuario);
router.post('/:id', actualizarusuario);
router.put('/', eliminausuario);
router.put('/logout', logoutusuario);

 async function todousuarios(req,res){
    try {
        const items = await controlador.TodosUsuarios();
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function unusuario(req,res){
    try {
        const items = await controlador.UnUsuario(req.params.id);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function eliminausuario(req,res){
    try {
        const items = await controlador.EliminaUsuario(req.body);
        respuesta.success(req,res,'Usuario Eliminado',200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function crearusuario(req,res){
    try {
        const items = await controlador.CrearUsuario(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function actualizarusuario(req,res){
    try {
        const items = await controlador.ActualizarUsuario(req.params.id,req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function loginsuario(req,res){
    try {
        const items = await controlador.LoginUsuario(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

async function logoutusuario(req,res){
    try {
        const items = await controlador.LogOutUsuario(req.body);
        respuesta.success(req,res,items,200);
    } catch (error) {respuesta.error(req,res,error,500);}
};

module.exports = router;