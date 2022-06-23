export interface priorityResponse{
    error: boolean;
    status: number;
    body: Body[];
}

interface Body {
    id: number;
    nombre: string;
}