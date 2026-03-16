import { useQuery } from '@tanstack/react-query';
import { userApi }   from '../api';
export const useCurrentUser = () =>
  useQuery({ queryKey: ['user', 'me'], queryFn: userApi.getMe });