import { apiClient } from "@/shared/api/client";
import type { LoginPayload, LoginResponse } from "../types";
export const loginApi = {
  login: (payload: LoginPayload) =>
    apiClient.post<LoginResponse>("/auth/login", payload).then((r) => r.data),
};
