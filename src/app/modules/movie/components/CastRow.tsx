import React from 'react';

import {
    View,
    Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { CastCard } from './CastCard';

const DATA = [1,2,3,4];

export function CastRow() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
      <View>
      <TouchableOpacity
        className="mx-4 mt-2 flex-row items-center gap-2"
        onPress={() => navigation.navigate('Cast')}
      >
        <Text className="text-white text-3xl font-bold">Cast & Crew</Text>
        <Ionicons name="chevron-forward" size={28} color="#fff" />
      </TouchableOpacity>
    <FlatList
      horizontal
      data={DATA}
      keyExtractor={item =>
        item.toString()
      }
      renderItem={() => (
        <CastCard />
      )}
      showsHorizontalScrollIndicator={
        false
      }
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 50,
      }}
      scrollEnabled={false}
    />
    </View>
  );
}