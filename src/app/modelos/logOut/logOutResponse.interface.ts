export interface logOutResponse{
    error: boolean;
    status: number;
    body: Body[];
}

interface Body {
    clave: string;
    rol: string;
    estado: number;
    correo: string;
    token: string;
}