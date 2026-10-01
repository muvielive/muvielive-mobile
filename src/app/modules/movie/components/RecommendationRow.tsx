import React from 'react';

import {
  FlatList,
} from 'react-native';

import { RecommendationCard }
from './RecommendationCard';

const DATA = [1,2,3,4,5];

export function RecommendationRow() {
  return (
    <FlatList
      horizontal
      data={DATA}
      keyExtractor={item =>
        item.toString()
      }
      renderItem={() => (
        <RecommendationCard />
      )}
      showsHorizontalScrollIndicator={
        false
      }
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 50,
      }}
    />
  );
}