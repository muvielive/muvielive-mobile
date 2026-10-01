import { apiClient } from '../../../api/api-client';
import { ENDPOINTS } from '../../../api/endpoints';

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from './auth.types';

export const AuthApi = {
  login: (payload: LoginRequest) =>
    apiClient.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, payload),

  register: (payload: RegisterRequest) =>
    apiClient.post<RegisterResponse>(ENDPOINTS.AUTH.REGISTER, payload),

//   logout: () =>
};