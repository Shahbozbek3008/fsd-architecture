export interface User {
  id: string; username: string; email: string;
  role: 'admin' | 'user'; avatarUrl: string | null; createdAt: string;
}