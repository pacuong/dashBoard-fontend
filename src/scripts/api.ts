// src/scripts/api.ts
import axios from "axios";
import { removeToken, getToken, saveToken } from "../utils/auth";

export const BACKEND_API = "https://backend-zma.mhoa.id.vn/";

const api = axios.create({
  baseURL: BACKEND_API,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Response Interceptor: tự refresh khi 401
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await axios.post(
          `${BACKEND_API}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newToken = refreshRes.data.access_token;
        saveToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        removeToken();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
