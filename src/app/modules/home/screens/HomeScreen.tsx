import React, { useState } from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { HeroBanner } from '../components/HeroBanner';
import { MovieRow } from '../../movie/components/MovieRow';
import BottomTab from '../../../components/ui/BottomTab';

export function HomeScreen() {
  const [tab, setTab] = useState('home');

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <HeroBanner />

        <MovieRow
          title="Must-See Hits"
        />

        <MovieRow
          title="Trending Now"
        />

        <MovieRow
          title="Action Movies"
        />
      </ScrollView>
      <BottomTab activeTab='home' />
    </SafeAreaView>
  );
}