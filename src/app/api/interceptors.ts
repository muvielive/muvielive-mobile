import { apiClient } from './api-client';
import { useAuthStore } from '../modules/auth/store/auth.store';

apiClient.interceptors.request.use(config => {
  const token = useAuthStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);