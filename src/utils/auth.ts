// src/utils/auth.ts
export const getToken = () => localStorage.getItem("access_token");
export const saveToken = (token: string) => localStorage.setItem("access_token", token);
export const removeToken = () => localStorage.removeItem("access_token");