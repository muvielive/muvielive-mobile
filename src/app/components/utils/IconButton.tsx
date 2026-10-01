import React from "react";
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  View,
} from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

type IconButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "outline"
  | "ghost"
  | "danger";

type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps extends Omit<PressableProps, "children"> {
  icon: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  iconSize?: number;
  loading?: boolean;
  accessibilityLabel: string;
}

const variants: Record<IconButtonVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  black: "bg-black",
  outline: "border border-primary bg-transparent",
  ghost: "bg-transparent",
  danger: "bg-red-600",
};

const sizes: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
};

export default function IconButton({
  icon,
  variant = "primary",
  size = "md",
  iconSize,
  loading = false,
  disabled = false,
  accessibilityLabel,
  ...props
}: IconButtonProps) {
  const isDisabled = disabled || loading;

  const defaultIconSize = {
    sm: 18,
    md: 22,
    lg: 26,
  }[size];

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      className={`
        ${sizes[size]}
        ${variants[variant]}
        items-center
        justify-center
        rounded-full
        ${isDisabled ? "opacity-50" : "opacity-100"}
      `}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <View className="items-center justify-center">
          <Ionicons
            name={icon as any}
            size={iconSize ?? defaultIconSize}
            color="#FFFFFF"
          />
        </View>
      )}
    </Pressable>
  );
}