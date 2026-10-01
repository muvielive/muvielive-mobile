import React from 'react';

import { View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Logo from "../../../../assets/logos/white-icon.png";
import Favorite from "../../../../assets/icons/favorite.png";
import Menu from "../../../../assets/icons/menu.png";
import Market from "../../../../assets/icons/cart.png";
import TransIconTextBtn from "../utils/TransIconTextBtn";
import { useAuthStore } from '../../modules/auth/store/auth.store';
import { useSidebarStore } from '../../stores/sidebar.store';


interface Props {
  activeTab: string;
}

export default function BottomTabBar({
  activeTab = 'home'
}: Props) {
    const authenticated = useAuthStore(state => state.authenticated);
    const user = useAuthStore(state => state.user);
    const navigation = useNavigation<HomeNavigationProp>();
    const toggle = useSidebarStore(state => state.toggle);


    function handleWatch() {
        return;
    }

  return (
    <View
      className="
        absolute bottom-0
        left-0 right-0
        flex-row justify-around
        bg-black py-3
        border-t border-gray-500
      "
    >
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('Home')}
      >
        <View className={`px-4 py-2 ${activeTab === 'home' && 'bg-primary p-2 rounded-2xl'}`}>
          <Image
            source={Logo}
            className="h-8 w-8"
          />
        </View>
        <Text className="mt-1 text-white font-semibold">
          Muvie Live
        </Text>
      </TouchableOpacity>

      {authenticated ?
        <TouchableOpacity
          className="items-center"
          onPress={toggle}
        >
        <View className={`px-4 py-2 ${activeTab === 'menu' && 'bg-primary rounded-2xl'}`}>
            <Image
              source={Menu}
              className="h-8 w-8"
            />
        </View>
          <Text className="mt-1 text-white">
            Menu
          </Text>
        </TouchableOpacity>
        :
      <TouchableOpacity
        className="items-center"
        onPress={() => navigation.navigate('MarketEntry')}
      >
      <View className={`px-4 py-2 ${activeTab === 'market' && 'bg-primary rounded-2xl'}`}>
          <Image
            source={Market}
            className="h-8 w-8"
          />
      </View>
        <Text className="mt-1 text-white">
          Market Place
        </Text>
      </TouchableOpacity>
    }
      <TouchableOpacity
        className={`items-center`}
        onPress={() => navigation.navigate('Search')}
      >
      <View className={`px-4 py-2 ${activeTab === 'search' && 'bg-primary rounded-2xl'}`}>
        <Ionicons
          name={
            activeTab === 'search'
              ? 'search'
              : 'search-outline'
          }
          size={28}
          color="white"
        />
        </View>
        <Text className="mt-1 text-white">
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
}