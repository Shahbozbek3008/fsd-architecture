import { apiClient } from '@/shared/api/client';
export const logoutApi = {
  logout: () => apiClient.post('/auth/logout').then((r) => r.data),
};