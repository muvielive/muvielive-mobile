import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import Ionicons from
'react-native-vector-icons/Ionicons';

export function ActionButtons() {
  return (
    <View
      className="mt-5 flex-row items-center justify-center gap-6">
      <ActionItem
        icon="add"
        label="Add to Library"
      />

      <ActionItem
        icon="share-social-outline"
        label="Share"
      />
    </View>
  );
}

function ActionItem({ icon, label }: any) {
  return (
    <TouchableOpacity
      className="items-center py-4 mx-1"
    >
      <Ionicons
        name={icon}
        size={24}
        color="#fff"
      />

      <Text
        className="
          mt-2
          text-lg
          text-white
        "
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}