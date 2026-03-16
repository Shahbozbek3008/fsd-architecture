import { apiClient } from '@/shared/api/client';
import type { User }  from '../types';
export const userApi = {
  getMe:    ()                  => apiClient.get<User>('/users/me').then((r) => r.data),
  getById:  (id: string)        => apiClient.get<User>(`/users/${id}`).then((r) => r.data),
  updateMe: (data: Partial<User>) => apiClient.patch<User>('/users/me', data).then((r) => r.data),
};