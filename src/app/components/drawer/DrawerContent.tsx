import React from "react";
import {
  Text,
  View,
} from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const menuItems = [
  {
    name: "Home",
    label: "Home",
    icon: "home-outline",
  },
  {
    name: "Movies",
    label: "Movies",
    icon: "film-outline",
  },
  {
    name: "Series",
    label: "TV Series",
    icon: "tv-outline",
  },
  {
    name: "Watchlist",
    label: "My Watchlist",
    icon: "bookmark-outline",
  },
  {
    name: "Downloads",
    label: "Downloads",
    icon: "download-outline",
  },
];

const accountItems = [
  {
    name: "Profile",
    label: "Profile",
    icon: "person-outline",
  },
  {
    name: "Settings",
    label: "Settings",
    icon: "settings-outline",
  },
];

export default function DrawerContent({
  navigation,
  state,
}: DrawerContentComponentProps) {

  // Get the currently active drawer screen
  const currentRoute = state.routes[state.index]?.name;

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-background"
    >
      <View className="flex-1 px-5 pb-6 pt-8">

        {/* Logo */}
        <View className="mb-10">
          <Text className="text-3xl font-bold text-primary">
            MuvieLive
          </Text>

          <Text className="mt-1 text-sm text-gray-400">
            Stream your world
          </Text>
        </View>

        {/* Browse */}
        <View>
          <Text className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Browse
          </Text>

          {menuItems.map((item) => (
            <DrawerItem
              key={item.name}
              label={item.label}
              icon={item.icon}
              active={currentRoute === item.name}
              onPress={() => navigation.navigate(item.name)}
            />
          ))}
        </View>

        {/* Account */}
        <View className="mt-8">
          <Text className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Account
          </Text>

          {accountItems.map((item) => (
            <DrawerItem
              key={item.name}
              label={item.label}
              icon={item.icon}
              active={currentRoute === item.name}
              onPress={() => navigation.navigate(item.name)}
            />
          ))}
        </View>

        {/* Bottom */}
        <View className="mt-auto border-t border-gray-800 pt-5">
          <Text className="text-center text-xs text-gray-600">
            MuvieLive
          </Text>

          <Text className="mt-1 text-center text-xs text-gray-700">
            v1.0.0
          </Text>
        </View>

      </View>
    </DrawerContentScrollView>
  );
}