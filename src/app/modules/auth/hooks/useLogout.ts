import { useMutation } from "@tanstack/react-query";

import { AuthApi } from "../api/auth.api";
import { AuthStorage } from "../../../storage/async-storage";
import { useAuthStore } from "../store/auth.store";

export const useLogout = () => {
  const clearAuth = useAuthStore((state) => state.logout);

  return useMutation({
//     mutationFn: AuthApi.logout,

    onSettled: async () => {
      await AuthStorage.clear();
      clearAuth();
    },
  });
};