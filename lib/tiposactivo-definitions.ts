export type TipoActivoDTO = {
    id?: number;
    nomenclatura?: string;
    descripcion?: string;
    fechaCreacion?: string;
    fechaActualizacion?: string;
    activos?: null
}

export type TipoActivoRequest = {
    nomenclatura: string;
    descripcion: string;
}
