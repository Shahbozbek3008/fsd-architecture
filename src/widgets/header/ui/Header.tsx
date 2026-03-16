import { LogoutButton } from '@/features/auth/logout/ui';
export const Header = () => (
  <header className="h-16 border-b flex items-center justify-between px-6">
    <span className="font-semibold">Dashboard</span>
    <LogoutButton />
  </header>
);