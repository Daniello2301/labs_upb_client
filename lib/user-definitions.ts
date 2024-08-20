export type UserDTO ={
    id: number;
    idUPB: number;
    documento: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    roles: string[];
    fechaCreacion: string;
    fechaActualizacion: string;
}

export type AuthRequest = {
    email: string;
    password: string;
}

export type AuthResponse = {
    id: number;
    nombre: string;
    email: string;
    access_token: string;
    refresh_token: string;
    error?: {
        message?: string;
        status?: number;
        error?: string;
    };
}