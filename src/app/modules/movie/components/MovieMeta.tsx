import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function MovieMeta({ movie }) {
   const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View className="px-4 pt-4">

      <Text className="text-4xl font-monsura-black font-semibold text-white">
        {movie.title}
      </Text>

      <View className="mt-4 flex-row items-center">
        <Text className="text-white">
          {movie.year}
        </Text>

             <Text className="mx-2 text-white">
               •
             </Text>

             <Text className="text-white">
               {movie.duration}
             </Text>

             <View className="bg-gray border border-white rounded-sm py-0.5 px-1 ml-2">
             <Text className="text-white text-[11px]">
               {movie.ageRating}
             </Text>
             </View>
      </View>

      <View className="mt-5 flex-row gap-3">
         <Pressable
            className="h-14 flex-1 flex-row items-center justify-center rounded-lg bg-primary"
            onPress={() => navigation.navigate('MovieStream')}
         >
            <Ionicons
              name="play"
              size={24}
              color="#fff"
            />

            <Text className="ml-2 font-bold text-xl text-white">
              Play
            </Text>
         </Pressable>

      </View>

      <Text
        className="
          mt-2
          leading-6
          text-white
          text-xl
        "
      >
        Successful Los Angeles lawyer
        Mickey Haller, sidelined after
        an accident, takes on a murder
        case to get back on...
      </Text>

    </View>
  );
}