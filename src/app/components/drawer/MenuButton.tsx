import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

interface MenuButtonProps {
  onPress: () => void;
}

export default function MenuButton({
  onPress,
}: MenuButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Open menu"
      className="h-11 w-11 items-center justify-center rounded-full bg-black/40"
    >
      <Ionicons
        name="menu-outline"
        size={26}
        color="#FFFFFF"
      />
    </Pressable>
  );
}