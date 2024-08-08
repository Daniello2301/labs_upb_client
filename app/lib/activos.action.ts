"use server"

import { axiosInstance } from "./axios";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ActivosTable } from "@/lib/definitions";


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

const ITEMS_PER_PAGE = 7;
export async function fetchFilteredActivos(query: string, currentPage: number): Promise<ActivosTable[]> {

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const{ data } = await axiosInstance.get(`/activos/enable/${currentPage}/${ITEMS_PER_PAGE}/${query}`);
        
        return data?.Items;
        
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los activos");
    }
}

export async function fetchActivosCount(query: string) {
    try {
        const{ data } = await axiosInstance.get(`/activos/enable/0/${ITEMS_PER_PAGE}/${query}`);
        
       /*  console.log(data) */

        const totalPages = parseInt(data?.totalPages);

        /* console.log("pages", totalPages); */

        return totalPages;

    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los activos 2");
    }
}