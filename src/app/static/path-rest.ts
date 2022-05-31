import { environment } from "src/environments/environment";

export class PathRest{

    // METODOS POST
    static readonly POST_LOGIN = '/carrma/usuarios/login';
    static readonly POST_REGISTER = '/carrma/usuarios';
    static readonly POST_ROL = '/carrma/util/combo/rols';
    static readonly POST_ORG = '/carrma/util/combo/organizaciones';
    static readonly POST_CHAT_LISTAR = '/carrma/chat/grupos';
    static readonly POST_STATUS_TICKET = '/carrma/util/combo/estados_tickets';
    static readonly POST_PRIORITY_TICKETS = '/carrma/util/combo/prioridad_tickets';
}