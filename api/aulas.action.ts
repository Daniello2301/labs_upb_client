import { axiosInstance } from "./axios";

export async function fetchAulasByBloque(idBloque: number){
    try {
    const response = await axiosInstance.get(`/aulas/bloque/${idBloque}`);
    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}