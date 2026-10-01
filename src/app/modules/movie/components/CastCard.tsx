import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

export function CastCard() {
  return (
    <View className="mx-2">
      <View className="relative">
        <View className="h-24 w-24">
            <Image
              source={{
                uri:
                  'https://picsum.photos/200/200',
              }}
              className="h-full w-full rounded-full"
            />
        </View>
        <View className="px-1 items-center">
            <Text className="text-sm font-bold text-white">
             Jason Momoa
            </Text>
            <Text className="text-[11px] font-bold text-white">
              Kalama
            </Text>
        </View>

      </View>
    </View>
  );
}