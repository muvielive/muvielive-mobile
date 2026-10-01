import React from 'react';

import {
    View,
    Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { Divider } from '../../../components/utils/Divider';

const DATA = [1,2,3,4];

export function CastCol() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <FlatList
      vertical
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
  );
}

function CastCard() {
  return (
      <>
        <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center justify-between gap-3">
                <View className="h-24 w-24">
                    <Image
                      source={{
                        uri:'https://picsum.photos/200/200',
                      }}
                      className="h-full w-full rounded-full"
                    />
                </View>
                <View>
                    <Text className="text-lg font-bold text-white">
                     Jason Momoa
                    </Text>
                    <Text className="text-[11px] font-bold text-white">
                      Kalama
                    </Text>
                </View>
            </View>
            <View>
                  <Text className="text-white">Actor</Text>
            </View>
        </View>
        <Divider />
       </>
  );
}