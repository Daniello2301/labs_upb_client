export type BloqueDTO = {
    id: number;
    numero: number;
    descripcion: string;
    fechaCreacion: string;
    fechaActualizacion: string;
}

export type BloqueRequest = {
    numero: number;
    descripcion: string;
}