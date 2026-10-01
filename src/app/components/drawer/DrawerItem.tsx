import React from "react";
import { Pressable, Text } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

interface DrawerItemProps {
  label: string;
  icon: string;
  active?: boolean;
  onPress: () => void;
}

export default function DrawerItem({
  label,
  icon,
  active = false,
  onPress,
}: DrawerItemProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      className={`
        mb-2
        h-12
        flex-row
        items-center
        rounded-xl
        px-4
        ${active ? "bg-primary" : "bg-transparent"}
      `}
    >
      <Ionicons
        name={icon as any}
        size={21}
        color={active ? "#FFFFFF" : "#9CA3AF"}
      />

      <Text
        className={`
          ml-4
          text-base
          font-medium
          ${active ? "text-white" : "text-gray-300"}
        `}
      >
        {label}
      </Text>
    </Pressable>
  );
}