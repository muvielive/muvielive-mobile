import React from 'react';

import {
    View,
    Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

import { CastCard } from './CastCard';

const DATA = [1,2,3,4];

export function MovieInfo() {
  return (
      <View className="gap-3">
          <View className="mx-4 flex-row items-center">
            <Text className="text-white text-3xl font-bold">Information</Text>
          </View>

          <View className="mx-4 gap-1 mt-2">
            <Text className="text-white text-xl font-bold">Released</Text>
            <Text className="text-white text-sm">2025</Text>
          </View>

          <View className="mx-4 gap-1">
            <Text className="text-white text-xl font-bold">Rated</Text>
            <Text className="text-white text-sm">18+</Text>
          </View>

          <View className="mx-4 gap-1">
            <Text className="text-white text-xl font-bold">Region of Origin</Text>
            <Text className="text-white text-sm">Nigeria</Text>
          </View>

          <View className="mx-4 flex-row items-center">
            <Text className="text-white text-3xl font-bold">Language</Text>
          </View>

          <View className="mx-4 gap-1">
            <Text className="text-white text-xl font-bold">Original Audio</Text>
            <Text className="text-white text-sm">English</Text>
          </View>

          <View className="mx-4 gap-1">
            <Text className="text-white text-xl font-bold">Subtitle</Text>
            <Text className="text-white text-sm">English</Text>
          </View>
    </View>
  );
}