import { axiosInstance } from "./axios";

import { getCookies   } from "next-client-cookies/server";

const cookies = getCookies();

const user = JSON.parse(cookies.get('user') || '{}');

export async function fetchBloques(){
    try {
    const response = await axiosInstance.get("/bloque/all");   
    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
