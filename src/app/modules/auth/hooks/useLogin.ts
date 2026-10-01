import { useMutation } from '@tanstack/react-query';

import { AuthApi } from '../api/auth.api';
import { AuthStorage } from '../../../storage/async-storage';
import { useAuthStore } from '../store/auth.store';

import { Alert } from 'react-native'

export const useLogin = () => {
  const setAuth = useAuthStore(state => state.setAuth);

  return useMutation({
    mutationFn: AuthApi.login,

    onSuccess: async response => {
      const data = response.data.data;
      await AuthStorage.persist(data.access_token, data.refresh_token, data.user);

      setAuth(data.access_token, data.refresh_token, data.user);
    },
  });
};