export interface rolResponse {
    error: boolean;
    status: number;
    body: Body[

        // id: number,
        // nombre: string;
    
    ];
}

interface Body{
    id: number,
    nombre: string;
}