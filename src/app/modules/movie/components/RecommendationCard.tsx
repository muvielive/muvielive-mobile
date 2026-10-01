import React from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

export function RecommendationCard() {
  return (
    <View
      className="
        mr-3
        w-28
      "
    >
      <View className="relative">

        <Image
          source={{
            uri:
              'https://picsum.photos/300/450',
          }}
          className="
            h-40
            rounded-lg
          "
        />

        <View
          className="
            absolute
            right-1
            top-1
            rounded
            bg-red-600
            px-1
          "
        >
          <Text
            className="
              text-[10px]
              font-bold
              text-white
            "
          >
            98%
          </Text>
        </View>

      </View>
    </View>
  );
}