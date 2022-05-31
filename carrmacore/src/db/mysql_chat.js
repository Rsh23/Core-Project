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

function chatgruposlistar(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`select grupos_chat.*
                    from grupos_chat 
                    inner join usuarios_grupos_chat 
                    on grupos_chat.id = usuarios_grupos_chat.id_grupo 
                    inner join 
                    users on usuarios_grupos_chat.id_usuario = users.id
                    where users.correo = '${body.correo}';`,(error,result) =>{
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


function participantesgrupo(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`select users.id,
                    users.nombres,
                    users.correo,
                    users.telefono,
                    (select nombre from organizacion where id = users.id_organizacion)
            from users 
            inner join usuarios_grupos_chat 
            on usuarios_grupos_chat.id_usuario = users.id 
            where usuarios_grupos_chat.id_grupo = '${body.id_grupo}';`,(error,result) =>{
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

    chatgruposlistar,
    participantesgrupo

}