import * as Keychain from "react-native-keychain";

export const SecureStorage = {
  async set(key: string, value: string) {
    await Keychain.setGenericPassword(key, value, {
      service: key,
    });
  },

  async get(key: string) {
    const credentials = await Keychain.getGenericPassword({
      service: key,
    });

    return credentials?.password ?? null;
  },

  async remove(key: string) {
    await Keychain.resetGenericPassword({
      service: key,
    });
  },
};
