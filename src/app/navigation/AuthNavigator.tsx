import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../modules/auth/screens/LoginScreen';
import { RegisterScreen } from '../modules/auth/screens/RegisterScreen';
import { ForgotPasswordScreen } from '../modules/auth/screens/ForgotPasswordScreen';
import { HomeScreen } from '../modules/home/screens/HomeScreen';
import { SearchScreen } from '../modules/home/screens/SearchScreen';
import { EntryScreen } from '../modules/market/screens/EntryScreen';
import { SideSettingScreen } from '../modules/auth/screens/SideSettingScreen';
import type { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
    >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
           name="Settings"
           component={SideSettingScreen}
        />
        <Stack.Screen
          name="MarketEntry"
          component={EntryScreen}
          options={{
              headerShown: false,
          }}
        />
        <Stack.Screen
           name="Login"
           component={LoginScreen}
           options={{
             headerShown: false,
           }}
       />
       <Stack.Screen
           name="Register"
           component={RegisterScreen}
           options={{
             headerShown: false,
           }}
       />
        <Stack.Screen
           name="ForgotPassword"
           component={ForgotPasswordScreen}
           options={{
             headerShown: false,
           }}
       />
    </Stack.Navigator>
  );
}