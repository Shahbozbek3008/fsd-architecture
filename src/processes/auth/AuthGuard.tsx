import { type FC, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSessionModel } from '@/entities/session/model';
import { ROUTES } from '@/app/router';
interface Props { children: ReactNode; }
export const AuthGuard: FC<Props> = ({ children }) => {
  const { isAuthenticated } = useSessionModel();
  return isAuthenticated ? <>{children}</> : <Navigate to={ROUTES.auth} replace />;
};