import { InternalAxiosRequestConfig } from "axios";
import { baseApi } from "../api/baseApi";

export const tokenInterceptor = () => {
  baseApi.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${
      localStorage.getItem("token") || ""
    }`;
    return request;
  });
};
