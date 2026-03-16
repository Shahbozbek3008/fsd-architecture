import { ENV } from "@/shared/config/env";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  try {
    const raw = localStorage.getItem("session-storage");
    if (raw) {
      const parsed = JSON.parse(raw) as {
        state?: { session?: { accessToken?: string } };
      };
      const token = parsed?.state?.session?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch {}
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      const isAuthPage = window.location.pathname.startsWith("/auth");

      if (!isAuthPage) {
        localStorage.removeItem("session-storage");
        window.location.href = "/auth";
      }
    }

    return Promise.reject(error);
  },
);
