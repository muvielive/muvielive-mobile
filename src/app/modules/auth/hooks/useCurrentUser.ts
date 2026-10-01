import { useQuery } from '@tanstack/react-query';

import { AuthApi } from '../api/auth.api';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: async () => {
      const response = await AuthApi.me();

      return response.data;
    },
  });
};