const db = require('../../db/mysql.js');

const TABLA  = 'users';

function TodosUsuarios(){
  return  db.TodosUsuarios(TABLA);
}

function UnUsuario(id){
    return db.UnUsuario(TABLA,id)
}

function EliminaUsuario(body){
    return db.EliminarUsuario(TABLA,body);
}

function CrearUsuario(body){
    return db.AgregarUsuario(TABLA,body);
}

function ActualizarUsuario(id,body){
    return db.ActualizarUsuario(TABLA,id,body);
}

function LoginUsuario(body){
    return db.LoginUsuario(TABLA,body);
}

function LogOutUsuario(body){
    return db.LogOutUsuario(TABLA,body);
}

module.exports = {

        TodosUsuarios,
        UnUsuario,
        EliminaUsuario,
        CrearUsuario,
        ActualizarUsuario,
        LoginUsuario,
        LogOutUsuario


} 