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
import BottomTab from '../../../components/ui/BottomTab';
import Button from '../../../components/utils/Button';

export function EntryScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();
  const [tab, setTab] = useState('search');

  return (
      <SafeAreaView className="flex-1 bg-black pt-8 px-2">
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-20">
        <View
          className="flex-row items-center justify-between mb-4"
          style={{
            paddingTop: insets.top + 5,
          }}
        >
          <Text className="text-white text-3xl font-bold"></Text>

          <TouchableOpacity
            className="h-12 w-12 items-center justify-center rounded-full bg-white/20 mr-2"
             onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="close-sharp"
              size={24}
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
                <Text className="text-white text-2xl font-bold">
                Welcome to Muvie Live Marketplace
                </Text>
                <Text className="text-white text-center text-[1.3rem]">
                    Buy,sell, and Trade with your community in real time
                    Whether you are clearing out your space. or scaling
                    your own shop, Muvie Live makes trading effortless,
                    fast, and secure.
                </Text>
              </View>
          </View>
          <View className="flex-1 items-center justify-center gap-1 px-6 pt-3 mt-10">
            <TouchableOpacity
                className="h-12 text-xl items-center justify-center bg-primary rounded-2xl px-12"
            >
                <Text className="text-white text-2xl font-bold">SELL</Text>
            </TouchableOpacity>
            <Text className="text-white text-center text-xl">
                List your items with ease and connect to directly with ready buyers.
            </Text>
          </View>
          <View className="flex-1 items-center justify-center gap-1 px-6 pt-3 mt-10">
            <TouchableOpacity
                className="h-12 text-xl items-center justify-center bg-primary rounded-2xl px-12"
            >
                <Text className="text-white text-2xl font-bold">BUY</Text>
            </TouchableOpacity>
            <Text className="text-white text-center text-xl">
                Discover great deals and enjoy smooth transactions.
            </Text>
          </View>
          <View className="flex-1 items-center justify-center gap-1 px-6 pt-3 mt-10">
            <Text className="text-white text-center text-2xl font-semibold">
                Experience a vibrant interactive Marketplace where commerce meets
                engagement.
            </Text>
          </View>
          </View>
        </ScrollView>
        <BottomTab activeTab='market' />
      </SafeAreaView>
  );
}