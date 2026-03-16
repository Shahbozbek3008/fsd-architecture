import { apiClient } from '@/shared/api/client';
import type { Session } from '../types';
export const sessionApi = {
  refresh: (refreshToken: string) =>
    apiClient.post<Session>('/auth/refresh', { refreshToken }).then((r) => r.data),
};