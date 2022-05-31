const mysql = require('mysql');
const config = require('../config.js');
const bcrypt = require("bcryptjs");
const randtoken = require('rand-token');

const dbconfig = {

    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,

}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);
    conexion.connect((err) => {
        if(err){
            console.log('error en la db',err);
        }else{
            console.log('db OK');
        }
    });
    conexion.on('error', err =>{
        console.log('error en la db',err);
    });
}

conMysql();

function ListarRols(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(true){
                    conexion.query(`SELECT * FROM rols`,(error,result) =>{
                        if(error){
                            return reject(error);
                        }else{
                            resolve(result);
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
        
    })
}

function ListarOrganizaciones(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(true){
                    conexion.query(`SELECT * FROM organizacion`,(error,result) =>{
                        if(error){
                            return reject(error);
                        }else{
                            resolve(result);
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
        
    })
}

function listarestados_tickets(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`SELECT * FROM estados_tickets`,(error,result) =>{
                        if(error){
                            return reject(error);
                        }else{
                            resolve(result);
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
        
    })
}


function prioridad_tickets(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`SELECT * FROM prioridad_tickets`,(error,result) =>{
                        if(error){
                            return reject(error);
                        }else{
                            resolve(result);
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
        
    })
}

module.exports = {

    ListarRols,
    ListarOrganizaciones,
    listarestados_tickets,
    prioridad_tickets

}