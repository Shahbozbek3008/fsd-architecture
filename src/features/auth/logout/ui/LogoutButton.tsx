import { useLogoutModel } from '../model';
export const LogoutButton = () => {
  const { handleLogout, isLoading } = useLogoutModel();
  return <button onClick={handleLogout} disabled={isLoading}>{isLoading ? 'Signing out…' : 'Sign Out'}</button>;
};