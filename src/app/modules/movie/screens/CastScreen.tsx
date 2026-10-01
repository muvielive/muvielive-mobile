import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets }
from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";

import { CastCol } from '../components/CastCol';

export function CastScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();

  const movie = {
    title: "Chief of War",
    trailerUrl:
      "../../../../assets/videos/video1.mp4",
    year: "2026",
    duration: "2h 10m",
    genre: "Action • Drama",
    ageRating: "18+",
    description:
      "A warrior returns home and finds himself caught between loyalty, family, and war.",
  };

  return (
    <SafeAreaView className="flex-1 bg-black pt-8">

      <ScrollView showsVerticalScrollIndicator={false}>
      <View className="mb-20">
        <View
          className="flex-row items-center justify-between mb-4"
          style={{
            paddingTop: insets.top + 2,
          }}
        >
          <TouchableOpacity
            className="h-12 w-12 items-center justify-center mr-2"
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color="#fff"
            />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold"></Text>
        </View>
        <CastCol />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}