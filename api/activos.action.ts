"use server"

import { axiosInstance } from "./axios";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ActivoDataPage, ActivosTable } from "../lib/activo-definitions";


const ActivoSchema = z.object({
    id: z.number(),
    numeroInventario: z.string({
        required_error: "El número de inventario es requerido",
    }),
    descripcion: z.string({
        required_error: "La descripción es requerida",
    }),
    modelo: z.string({
        required_error: "El modelo es requerido",
    }),
    serial: z.string({
        required_error: "El serial es requerido",
    }),
    tipo: z.string({
        required_error: "El tipo es requerido",
    }),
    aula: z.number({
        required_error: "El aula es requerida",
    }),
    bloque: z.number({
        required_error: "El bloque es requerido",
    }),
});

const CreateActivo = ActivoSchema.omit({ id: true });

export type State = {
    errors?:{
        numeroInventario?: string[];
        descripcion?: string[];
        modelo?: string[];
        serial?: string[];
        tipo?: string[];
        aula?: string[];
        bloque?: string[];
    };
    message?: string | null;
}

export type errorResponse = {
    error?: string;
    message?: string;
    response?: string;
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredActivos(query: string, currentPage: number){

    const offset = (currentPage - 1);

    try {
        const{ data } = await axiosInstance.get<ActivoDataPage>(`/activos/enable/prestamos?query=${query}&page=${offset}&sizePage=${ITEMS_PER_PAGE}`);

        return data?.content as ActivosTable[];
        
    } catch (error : any) { 
        console.log(error?.response?.data.message)
        if(error){
            return [];
        }
    }
}

export async function fetchActivosCount(query: string){
    try {
        const{ data } = await axiosInstance.get<any>(`/activos/enable/prestamos?query=${query}&page=&sizePage=${ITEMS_PER_PAGE}`);
        
        const totalPages = data.totalPages;
 
        return totalPages;

    } catch (error : any) {
        console.log(error?.response?.data.message)
        if(error){
            return 0;
        }
    }
}