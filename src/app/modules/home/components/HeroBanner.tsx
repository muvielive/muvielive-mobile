import React from "react";
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import Logo from "../../../../../assets/logos/green-white.png";
import IconTextButton from "../../../components/utils/IconTextButton";
import type { AuthStackParamList } from "../../navigation/types";
import { useAuthStore } from '../../auth/store/auth.store';
import ScreenTop from '../../../components/ui/ScreenTop';

type HomeNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function HeroBanner() {
  const authenticated = useAuthStore(state => state.authenticated);
  const user = useAuthStore(state => state.user);
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();


  function handleWatch() {
    console.log("Clicked watch button");
  }

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
      }}
      style={{
        width,
        height: height * 0.60,
      }}
      resizeMode="cover"
    >
      {/* DARK OVERLAY */}
      <View className="flex-1 bg-black/40">
        <ScreenTop />

        {/* CONTENT */}
        <View className="flex-1 justify-end px-4 pb-10">

          <Text
            className="
              text-center
              text-[40px]
              font-monsura-black
              font-bold
              text-white
              uppercase
              scale-y-150
              scale-x-150
            "
          >
            Chief of War
          </Text>

          {/* META */}
          <View className="mt-4 flex-row items-center justify-center">
            <Text className="text-white">
              TV Show
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              Sci-Fi
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              Adventure
            </Text>

            <Text className="mx-2 text-white">
              •
            </Text>

            <Text className="text-white">
              18
            </Text>
          </View>

          {/* TAGLINE */}
          <Text
            className="
              mt-4
              text-center
              text-xl
              font-semibold
              text-white
            "
          >
            Another Season Is Coming
          </Text>

          {/* BUTTONS */}
          <View className="mt-6 flex-row justify-center gap-2">
            <IconTextButton
              title="Watch Now"
              icon="play"
              variant="primary"
              onPress={handleWatch}
            />

            <IconTextButton
              title="Add to Favorite"
              icon="add"
              variant="white"
              onPress={() => {
                console.log("Favorite clicked");
              }}
            />
          </View>

          {/* DOTS */}
          <View className="mt-8 flex-row justify-center">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <View
                key={item}
                className={`
                  mx-1
                  h-2
                  rounded-full
                  ${
                    index === 1
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40"
                  }
                `}
              />
            ))}
          </View>

        </View>
      </View>
    </ImageBackground>
  );
}