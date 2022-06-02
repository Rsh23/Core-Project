const db = require('../../db/mysql_util.js');


const TABLA  = 'users';


function ListarRols(body){
    return db.ListarRols(TABLA,body);
}

function ListarOrganizaciones(body){
    return db.ListarOrganizaciones(TABLA,body);
}

function listarestados_tickets(body){
    return db.listarestados_tickets(TABLA,body);
}
function prioridad_tickets(body){
    return db.prioridad_tickets(TABLA,body);
}

module.exports = {

    ListarRols,
    ListarOrganizaciones,
    listarestados_tickets,
    prioridad_tickets


} 