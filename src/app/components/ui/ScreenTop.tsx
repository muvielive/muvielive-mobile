import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "@react-native-vector-icons/material-design-icons";

import Logo from "../../../../assets/logos/green-white.png";
import { useAuthStore } from '../../modules/auth/store/auth.store';
import { getInitials } from '../../lib/utils';

export default function ScreenTop() {
    const authenticated = useAuthStore(state => state.authenticated);
    const user = useAuthStore(state => state.user);
    const { width, height } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<HomeNavigationProp>();

    return (
        <View
          className="flex-row items-center justify-between pl-2 pr-6"
          style={{
            paddingTop: insets.top,
          }}
        >
          <Image
            source={Logo}
            resizeMode="contain"
            className="h-14 w-36"
          />

          <View className="flex-row items-center gap-6">
          <TouchableOpacity
             className="h-11 w-11 items-center justify-center rounded-full bg-white/15"
             onPress={() => navigation.navigate("Settings")}
          >
           <Ionicons name="volume-mute" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
              className="h-11 w-11 items-center justify-center rounded-full bg-white/15"
              onPress={() => navigation.navigate("Settings")}
          >
            <MaterialCommunityIcons
                name="cast"
                size={24}
                color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity
             className="h-11 w-11 items-center justify-center rounded-full bg-white/15"
             onPress={() => navigation.navigate("Settings")}
          >
          {authenticated ?
                <Text className="text-white text-xl font-bold">{getInitials(user.name)}</Text>
              :
            <Ionicons
              name="person"
              size={20}
              color="#fff"
            />
            }
          </TouchableOpacity>
          </View>
        </View>
    );
}