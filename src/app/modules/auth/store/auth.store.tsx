import { create } from 'zustand';

import type { User } from '../api/auth.types';

interface AuthState {
  authenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;

  setAuth: (accessToken: string, refreshToken: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  authenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,

  setAuth: (accessToken, refreshToken, user) =>
    set({ authenticated: true, accessToken, refreshToken, user }),

  logout: () =>
    set({ authenticated: false, accessToken: null, refreshToken: null, user: null }),
}));