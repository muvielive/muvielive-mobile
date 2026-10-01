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

export function ForgotPasswordScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();

  const login = useLogin();
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit =
    async () => {
        if (!email.trim()) {
          toast.warning("Email is required", {
            title: "Validation Error",
            position: "bottom",
          });
          return;
        }

      try {
        await login.mutateAsync({
          email,
          password,
        });

         toast.success("Welcome back!");
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
                  onPress={() => navigation.goBack()}
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
                <Text className="text-white text-3xl font-bold">Forgot Password</Text>
                <Text className="text-white text-center text-[1.3rem]">
                    Enter your Email to request for password reset.
                </Text>
              </View>
              <FloatingInput
                label="Enter your email"
                value={email}
                onChangeText={setEmail}
                containerClassName="bg-black border border-white rounded-3xl py-2 px-4"
                inputClassName='py-3.5 text-base text-white'
              />

              {login.isPending ? (
                  <ActivityIndicator />
                ) : (
                  <OutlineButton
                    title="Reset Password"
                    onPress={handleSubmit}
                    btnClassName="my-6"
                  />
              )}
             <TouchableOpacity className="my-2"
             onPress={() => navigation.navigate('Login')}
             >
              <Text className="text-primary text-xl">Go back to Sign In</Text>
             </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
  );
}