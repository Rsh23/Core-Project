export interface groupResponse{
    error: boolean;
    status: number;
    body: Body[];
}

interface Body {
    id: string;
    nombre: string;
    tipo: string;
    id_creador: number;
    fecha_creacion: Date;
    url_imagen: string;
    dias_expiracion: number;
}