import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export function EpisodeTabs() {
  return (
    <View className="mt-6 px-4">

      <View className="flex-row">

        <Text
          className="
            border-b-2
            border-red-600
            pb-2
            text-white
            font-semibold
          "
        >
          EPISODES
        </Text>

        <Text
          className="
            ml-5
            text-zinc-500
          "
        >
          MORE LIKE THIS
        </Text>

        <Text
          className="
            ml-5
            text-zinc-500
          "
        >
          TRAILERS
        </Text>
      </View>

    </View>
  );
}