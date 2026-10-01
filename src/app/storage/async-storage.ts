import { storage, StorageKeys } from './mmkv';
import { SecureStorage } from './secure-storage';

import type { User } from '../modules/auth/api/auth.types';

const SECURE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER: 'user',
};

interface AuthSession {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const AuthStorage = {
  async persist(accessToken: string, refreshToken: string, user: User) {
    await SecureStorage.set(SECURE_KEYS.ACCESS_TOKEN, accessToken);
    await SecureStorage.set(SECURE_KEYS.REFRESH_TOKEN, refreshToken);
    await SecureStorage.set(SECURE_KEYS.USER, JSON.stringify(user));

//     storage.set(StorageKeys.USER, JSON.stringify(user));
  },

  async load(): Promise<AuthSession | null> {
    const accessToken = await SecureStorage.get(SECURE_KEYS.ACCESS_TOKEN);
    const refreshToken = await SecureStorage.get(SECURE_KEYS.REFRESH_TOKEN);
    const userRaw = await SecureStorage.get(SECURE_KEYS.USER);
//     const userRaw = storage.getString(StorageKeys.USER);

    if (!accessToken || !refreshToken || !user) {
      return null;
    }
    const user = JSON.parse(userRaw) as User;
    return {
      accessToken,
      refreshToken,
      user,
    };
  },

  async clear() {
    await SecureStorage.remove(SECURE_KEYS.ACCESS_TOKEN);
    await SecureStorage.remove(SECURE_KEYS.REFRESH_TOKEN);
    await SecureStorage.remove(SECURE_KEYS.USER);
  },
};