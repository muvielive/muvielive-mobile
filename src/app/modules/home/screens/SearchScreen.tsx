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

import { MovieRow } from '../../movie/components/MovieRow';
import BottomTab from '../../../components/ui/BottomTab';
import IconInput from '../../../components/form/IconInput';

export function SearchScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();
  const [tab, setTab] = useState('search');
  const movies = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];

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
          <Text className="text-white text-3xl font-bold">Search</Text>

          <TouchableOpacity
            className="h-12 w-12 items-center justify-center rounded-full bg-white/20"
             onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons
              name="person"
              size={22}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <IconInput
          icon="mail-outline"
          placeholder="Muvie Live"
          keyboardType="search"
          autoCapitalize="none"
        />
          <View className="gap-1 pt-3 mb-20">
              <MovieRow movies={movies} />
              <MovieRow movies={movies} />
              <MovieRow movies={movies} />
              <MovieRow movies={movies} />
          </View>
          </View>
        </ScrollView>
        <BottomTab activeTab='search' />
      </SafeAreaView>
  );
}