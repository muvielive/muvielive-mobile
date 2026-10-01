import React, {
  useState,
} from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
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
import Input from '../../../components/form/Input';
import FloatingInput from '../../../components/form/FloatingInput';
import OutlineButton from '../../../components/utils/OutlineButton';

export function RegisterScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();

  const login = useLogin();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =
    async () => {
      if (!name.trim()) {
        Alert.alert(
          'Validation Error',
          'name is required',
        );
        return;
      }
      if (!email.trim()) {
        Alert.alert(
          'Validation Error',
          'Email is required',
        );
        return;
      }

      if (!password.trim()) {
        Alert.alert(
          'Validation Error',
          'Password is required',
        );
        return;
      }

      try {
        await login.mutateAsync({
          email,
          password,
        });

        Alert.alert(
          'Success',
          'Login successful',
        );
      } catch (error: any) {
        const message =
          error?.response?.data?.message ??
          'Login failed';

        Alert.alert(
          'Login Error',
          message,
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
                  onPress={() => navigation.navigate('Login')}
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
                <Text className="text-white text-3xl font-bold">Create New Account</Text>
                <Text className="text-white text-center text-[1.3rem]">
                    Enter your details to create a new account.
                </Text>
              </View>
              <FloatingInput
                label="Name"
                value={name}
                onChangeText={setName}
                containerClassName="bg-black border border-white rounded-3xl py-2"
                inputClassName='px-4 py-3.5 text-base text-white'
              />
              <FloatingInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                containerClassName="bg-black border border-white rounded-3xl py-2"
                inputClassName='px-4 py-3.5 text-base text-white'
              />
              <FloatingInput
                label="Phone (optional)"
                value={phone}
                onChangeText={setPhone}
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
                    title="Sign Up"
                    onPress={handleLogin}
                    btnClassName="mt-4 mb-6"
                  />
              )}

              <Text className="text-primary text-xl">Already have an account?</Text>
             <OutlineButton
               title="Sign In"
               onPress={() => navigation.navigate('Login')}
               btnClassName="mb-6 mt-3"
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
