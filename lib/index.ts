import { axiosInstance } from "../api/axios";

export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export const fetcherPost = (url: string, data: any) =>
    axiosInstance.post(url, data).then((res) => res.data);

export const fetcherPut = (url: string, data: any) =>
    axiosInstance.put(url, data).then((res) => res.data);

export const fetcherDelete = (url: string) => axiosInstance.delete(url).then((res) => res.data);