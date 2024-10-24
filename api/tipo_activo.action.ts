import { axiosInstance } from "./axios";

export async function fetchTiposActivos(token: string) {
    try {
    const response = await axiosInstance.get("/tipo-activo", {
      headers: {
        Authorization: "Bearer " + `${token}`,
      },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
