import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/upb/lab/iee/api',
  headers: {
    'Content-Type': 'application/json',
  },
});