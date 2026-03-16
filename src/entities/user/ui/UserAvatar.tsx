import type { User } from '../types';
interface Props { user: Pick<User, 'username' | 'avatarUrl'>; size?: number; }
export const UserAvatar = ({ user, size = 40 }: Props) => (
  <img
    src={user.avatarUrl ?? `https://ui-avatars.com/api/?name=${user.username}`}
    alt={user.username} width={size} height={size}
    className="rounded-full object-cover"
  />
);