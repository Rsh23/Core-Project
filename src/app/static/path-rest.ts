import { environment } from "src/environments/environment";

export class PathRest{
    static readonly POST_LOGIN = '/carrma/usuarios/login';
    static readonly POST_REGISTER = '/carrma/usuarios';
    static readonly POST_ROL = '/carrma/util/combo/rols';
    static readonly POST_ORG = '/carrma/util/combo/organizaciones';
    static readonly POST_CHAT_LISTAR = '/carrma/chat/grupos';
}