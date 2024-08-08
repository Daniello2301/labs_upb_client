// this file contain all the interfaces and types that are used in the app
// Path: app/lib/utils.ts

export type Activo = {
    numeroInventario: string;
    descripcion: string;
    estado: boolean;
    serial: string;
    modelo: string;
    tipo: string;
    aula: number;
    bloque: number;
}

export type User = {
    idUpb: number;
    documento: number;
    nombre: string;
    apellido: string;
    email: string;
    roles: string[];
    password: string;
    estado: boolean;
}

export type ActivosTable = {
    numeroInventario: string;
    descripcion: string;
    estado: boolean;
    aula: number;
    bloque: number;
}

export type ActivoForm = {
    numeroInventario: string;
    descripcion: string;
    serial: string;
    modelo: string;
    tipo: string;
    aula: number;
    bloque: number;
}
