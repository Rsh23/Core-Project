const db = require('../../db/mysql_chat.js');


const TABLA  = 'users';


function chatgruposlistar(body){
    return db.chatgruposlistar(TABLA,body);
}

function participantesgrupo(body){
    return db.participantesgrupo(TABLA,body);
}


module.exports = {

    chatgruposlistar,
    participantesgrupo


} 