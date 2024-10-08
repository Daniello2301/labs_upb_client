import { axiosInstance } from "./axios";

import { getCookies   } from "next-client-cookies/server";


const cookies = getCookies();

const user = JSON.parse(cookies.get('user') || '{}');

export async function fetchTiposActivos() {
    try {
    const response = await axiosInstance.get("/tipo-activo", {
      headers: {
        Authorization: "Bearer " + `${user?.access_token}`,
      },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
