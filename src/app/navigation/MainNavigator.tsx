import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../modules/home/screens/HomeScreen';
import { SideSettingScreen } from '../modules/auth/screens/SideSettingScreen';
import { MovieScreen } from '../modules/movie/screens/MovieScreen';
import { CastScreen } from '../modules/movie/screens/CastScreen';
import { MovieStreamScreen } from '../modules/movie/screens/MovieStreamScreen';
import type { UserStackParamList } from "./types";

const Stack = createNativeStackNavigator<UserStackParamList>();

export function MainNavigator() {
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
           name="Settings"
           component={SideSettingScreen}
        />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
            options={{
                headerShown: false,
            }}
        />
      <Stack.Screen
        name="Cast"
        component={CastScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
        name="MovieStream"
        component={MovieStreamScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  );
}