import React from 'react';

import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useAuthStore } from '../../auth/store/auth.store';

export function MovieCard() {
    const authenticated = useAuthStore(state => state.authenticated);
    const navigation = useNavigation<HomeNavigationProp>();

    function handleMovieNav() {
        if(authenticated) {
            navigation.navigate("Movie");
        } else {
            navigation.navigate('Login')
        }
    }
  return (
    <TouchableOpacity
      className="
        ml-2
        h-56
        w-36
        overflow-hidden
        rounded-3xl
      "
      onPress={handleMovieNav}
    >
      <Image
        source={{
          uri: 'https://picsum.photos/300/450',
        }}
        className="h-full w-full"
      />
    </TouchableOpacity>
  );
}