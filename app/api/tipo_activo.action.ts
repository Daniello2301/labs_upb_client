import { axiosInstance } from "./axios";



export async function fetchTiposActivos(userData: any) {
    
    console.log(userData)
    
    /* try {
    const response = await axiosInstance.get("/tipo-activo", {
      headers: {
        Authorization: "Bearer " + `${userData.access_token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  } */
}
