import React from "react";
import { Pressable, View } from "react-native";

interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: {
    container: "h-6 w-10",
    thumb: "h-4 w-4",
    translateOn: "translate-x-4",
    translateOff: "translate-x-1",
  },
  md: {
    container: "h-8 w-14",
    thumb: "h-6 w-6",
    translateOn: "translate-x-6",
    translateOff: "translate-x-1",
  },
  lg: {
    container: "h-10 w-16",
    thumb: "h-7 w-7",
    translateOn: "translate-x-7",
    translateOff: "translate-x-1",
  },
};

export default function Toggle({
  value,
  onValueChange,
  disabled = false,
  size = "md",
}: ToggleProps) {
  const currentSize = sizes[size];

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{
        checked: value,
        disabled,
      }}
      disabled={disabled}
      onPress={() => onValueChange(!value)}
      className={`
        ${currentSize.container}
        justify-center rounded-full
        ${value ? "bg-primary" : "bg-gray-700"}
        ${disabled ? "opacity-50" : "opacity-100"}
      `}
    >
      <View
        className={`
          ${currentSize.thumb}
          rounded-full bg-white
          ${value ? currentSize.translateOn : currentSize.translateOff}
        `}
      />
    </Pressable>
  );
}