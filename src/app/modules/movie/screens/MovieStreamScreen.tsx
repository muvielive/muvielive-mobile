import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets }
from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";

import { StreamPlayer } from '../components/StreamPlayer';
import { MovieMeta } from '../components/MovieMeta';
import { ActionButtons } from '../components/ActionButtons';
import { EpisodeTabs } from '../components/EpisodeTabs';
import { CastRow } from '../components/CastRow';
import { MovieInfo } from '../components/MovieInfo';

export function MovieStreamScreen() {
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
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          {/* Header */}
          <View
            className="flex-row items-center mb-4"
            style={{
              paddingTop: insets.top + 5,
            }}
          >
            <TouchableOpacity
              className="h-12 w-12 items-center justify-center"
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="chevron-back"
                size={26}
                color="#fff"
              />
            </TouchableOpacity>
            <Text className="text-white text-3xl font-monsura-black font-bold left-1/4">Chief of War</Text>
          </View>

          {/* Centered 16:9 video */}
          <StreamPlayer />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}