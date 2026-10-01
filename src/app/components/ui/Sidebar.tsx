import React from 'react';

import { View, Text, Pressable, Dimensions, Image } from 'react-native';

import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import Logo from "../../../../assets/logos/green-white.png";
import Library from "../../../../assets/icons/library.png";
import Friends from "../../../../assets/icons/friends.png";
import Group from "../../../../assets/icons/group.png";
import Music from "../../../../assets/icons/music.png";
import Chart from "../../../../assets/icons/chart.png";
import Market from "../../../../assets/icons/cart.png";
import { useSidebarStore } from '../../stores/sidebar.store';

const WIDTH =
  Math.min(
    Dimensions.get('window').width * 0.4,
    350,
  );

export function Sidebar() {
  const isOpen = useSidebarStore(state => state.isOpen);
  const close = useSidebarStore(state => state.close);

  const sidebarStyle =
    useAnimatedStyle(() => ({
      transform: [
        {
          translateX: withSpring(
            isOpen ? 0 : -WIDTH,
          ),
        },
      ],
    }));

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}

      <Pressable
        className="
          absolute
          inset-0
          bg-transparent
          z-40
        "
        onPress={close}
      />

      {/* Sidebar */}

      <Animated.View
        style={[
          {
            width: WIDTH,
          },
          sidebarStyle,
        ]}
        className="
          absolute
          left-0
          top-0
          bottom-0
          bg-black/95
          z-50
          px-6
          pt-28
          flex-col
          items-center
          gap-5
        "
      >
        <View className="mb-8">
         <Image
           source={Logo}
           className="h-16 w-30"
           resizeMode="contain"
         />
        </View>
        <View className="items-center gap-1">
            <Image
               source={Library}
               className="h-8 w-8"
               resizeMode="contain"
            />
        <Text className="mb-6 text-white">
          Library
        </Text>
        </View>

        <View className="items-center gap-1">
            <Image
               source={Friends}
               className="h-8 w-8"
               resizeMode="contain"
            />
        <Text className="mb-6 text-white">
          Friends
        </Text>
        </View>

        <View className="items-center gap-1">
           <Image
              source={Group}
              className="h-8 w-8"
              resizeMode="contain"
           />
           <Text className="mb-6 text-white">
               Join Group
           </Text>
        </View>

        <View className="items-center gap-1">
           <Image
              source={Music}
              className="h-8 w-8"
              resizeMode="contain"
           />
           <Text className="mb-6 text-white">
               Music Player
           </Text>
        </View>

        <View className="items-center gap-1">
           <Image
              source={Chart}
              className="h-8 w-8"
              resizeMode="contain"
           />
           <Text className="mb-6 text-white">
               Chart
           </Text>
        </View>

        <View className="items-center gap-1">
           <Image
              source={Market}
              className="h-8 w-8"
              resizeMode="contain"
           />
           <Text className="mb-6 text-white">
               Market Place
           </Text>
        </View>
      </Animated.View>
    </>
  );
}