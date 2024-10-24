import { axiosInstance } from "./axios";

export async function fetchBloques(){
    try {
    const response = await axiosInstance.get("/bloque/all");   
    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
