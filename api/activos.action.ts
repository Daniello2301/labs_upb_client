"use server";

import { axiosInstance } from "./axios";
import { z } from "zod";
import { ActivoDataPage, ActivosTable } from "../lib/activo-definitions";
import { getCookies } from "next-client-cookies/server";



const ActivoSchema = z.object({
  id: z.number(),
  numeroInventario: z.string({
    message: "El número de inventario es requerido",
  }),
  descripcion: z.string({
    message: "La descripción es requerida",
  }),
  modelo: z.string({
    message: "El modelo es requerido",
  }),
  serial: z.string({
    message: "El serial es requerido",
  }),
  tipoActivo: z.string({
    message: "El tipo es requerido",
  }),
  aula: z.number({
    message: "El aula es requerido",
  }),
  bloque: z.number({
    message: "El bloque es requerido",
  }),
});
const CreateActivo = ActivoSchema.omit({ id: true });


const ITEMS_PER_PAGE = 6;
export async function fetchFilteredActivos(query: string, currentPage: number) {
  
  const offset = currentPage - 1;

  try {
    const { data } = await axiosInstance.get<ActivoDataPage>(
      `/activos/enable/prestamos?query=${query}&page=${offset}&sizePage=${ITEMS_PER_PAGE}`
    );

    return data?.content as ActivosTable[];
  } catch (error: any) {
    console.log(error?.response?.data.message);
    if (error) {
      return [];
    }
  }
}

export async function fetchActivosCount(query: string) {
  try {
    const { data } = await axiosInstance.get<any>(
      `/activos/enable/prestamos?query=${query}&page=&sizePage=${ITEMS_PER_PAGE}`
    );

    const totalPages = data.totalPages;

    return totalPages;
  } catch (error: any) {
    console.log(error?.response?.data.message);
    if (error) {
      return 0;
    }
  }
}

export async function createActivo(formData: FormData) {

  const cookies = await getCookies();

  const user = JSON.parse(cookies.get("user") || "{}");

  const dataValidated = CreateActivo.safeParse({
      numeroInventario: formData.get("numeroInventario") ,
      serial: formData.get("serial"),
      modelo: formData.get("modelo"),
      descripcion: formData.get("descripcion"),
      tipoActivo: formData.get("tipoActivo"),
      aula: Number(formData.get("aula")),
      bloque: Number(formData.get("bloque")),
  });

  if (!dataValidated.success) {
    return {
      errors: dataValidated.error.flatten().fieldErrors,
      message: "Validation Error: Failed to Create Invoice",
    };
  }

  try {
    const response = await axiosInstance.post<any, any>("/activos/create", dataValidated.data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user?.access_token}`,
      },
    });

    return {
        message: "Activo creado con éxito",
        data: response.data,
    }


  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
      error: error,
    };
  }
}
