import { useMutation } from '@tanstack/react-query';

import { AuthApi } from '../api/auth.api';

// import {
//   storage,
//   StorageKeys,
// } from '@/storage/mmkv';

// import { useAuthStore } from '../store/auth.store';

export const useRegister = () => {
    return '';
//   const setAuth = useAuthStore(
//     state => state.setAuth,
//   );
//
//   return useMutation({
//     mutationFn: AuthApi.register,
//
//     onSuccess: response => {
//       const data = response.data;
//
//       storage.set(
//         StorageKeys.ACCESS_TOKEN,
//         data.access_token,
//       );
//
//       storage.set(
//         StorageKeys.REFRESH_TOKEN,
//         data.refresh_token,
//       );
//
//       storage.set(
//         StorageKeys.USER,
//         JSON.stringify(data.user),
//       );
//
//       setAuth(
//         data.access_token,
//         data.refresh_token,
//         data.user,
//       );
//     },
//   });
};