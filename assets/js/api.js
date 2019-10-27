import axios from "axios";
import { getToken } from "$utils/authenticator";
export const API_HOST = process.env.API_HOST || "https://propertysonoma.com";

const api = axios.create({
  baseURL: API_HOST
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
