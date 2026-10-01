import React, {
  useState,
} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Alert,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import Logo from "../../../../../assets/logos/green-white-icon.png";
import Agreement from "../../../../../assets/icons/agreement.png";
import { useLogin } from '../hooks';

import FloatingInput from '../../../components/form/FloatingInput';
import OutlineButton from '../../../components/utils/OutlineButton';
import { useToast } from "../../../components/ui/ToastProvider";
import { getApiErrorMessage } from "../../../lib/utils";

export function LoginScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();

  const login = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin =
    async () => {
        if (!username.trim()) {
          toast.warning("Email or Phone No is required", {
            title: "Validation Error",
            position: "bottom",
          });
          return;
        }

      if (!password.trim()) {
        toast.warning("Password is required", {
            title: "Validation Error",
            position: "bottom",
        });
        return;
      }

      try {
        await login.mutateAsync({
          username,
          password,
        });

         toast.success("Welcome back!");

         navigation.navigate('Home');
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          'Login failed';

          toast.error(
            getApiErrorMessage(error, "Login failed")
          );
      }
    };

  return (
      <SafeAreaView className="flex-1 bg-black pt-8 px-2">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
           className="flex-row justify-between pl-2"
           style={{
               paddingTop: insets.top + 5,
           }}
        >
              <View></View>
                <TouchableOpacity
                  className="h-11 w-11 items-center justify-center rounded-full bg-white/20"
                  onPress={() => navigation.navigate('Settings')}
                >
                  <Ionicons
                    name="close-sharp"
                    size={28}
                    color="#fff"
                  />
                  </TouchableOpacity>
          </View>
          <View className="flex-col items-center gap-1 px-6 pt-6">
              <Image
                source={Logo}
                resizeMode="contain"
                className="h-28 w-28"
              />
              <View className="items-center gap-3 mb-4">
                <Text className="text-white text-3xl font-bold">Continue with Email</Text>
                <Text className="text-white text-center text-[1.3rem]">
                    Enter your Email to sign in with an existing account or
                    or create a new one.
                </Text>
              </View>
              <FloatingInput
                label="Email or Phone"
                value={username}
                onChangeText={setUsername}
                containerClassName="bg-black border border-white rounded-3xl py-2"
                inputClassName='px-4 py-3.5 text-base text-white'
              />
              <FloatingInput
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                containerClassName="bg-black border border-white rounded-3xl py-2"
                inputClassName='px-4 py-3.5 text-base text-white'
              />

              {login.isPending ? (
                  <ActivityIndicator />
                ) : (
                  <OutlineButton
                    title="Sign In"
                    onPress={handleLogin}
                    btnClassName="my-4"
                  />
              )}
             <TouchableOpacity className="my-2"
             onPress={() => navigation.navigate('ForgotPassword')}
             >
              <Text className="text-primary text-xl">Forgot Password?</Text>
             </TouchableOpacity>
             <OutlineButton
               title="Create New Account"
               onPress={() => navigation.navigate('Register')}
               btnClassName="my-6"
               labelClassName="text-[18px]"
               variant="gray"
             />
             <View className="gap-3 mt-3 mb-5">
               <Image
                 source={Agreement}
                 resizeMode="contain"
                 className="h-20 w-20"
               />
              <Text className='text-white text-[1.1rem]'>
              Your Muvie Live  Account information is used to allow
              you to sign in securely and  access your data.
              Muvie Live records certain data for security, support
              and reporting purposes. if you agree, Muvie Live may
              also use your Muvie Live Account to send you marketing
              emails and communications, including based on your
              use of Muvie Live services.
              </Text>
              <Text className="text-white">
              See how your data is managed...
              </Text>
             </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}