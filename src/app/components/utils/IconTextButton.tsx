import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type IconTextButtonVariant =
  | "primary"
  | "secondary"
  | "white"
  | "black"
  | "outline"
  | "ghost"
  | "danger";

type IconTextButtonSize = "sm" | "md" | "lg";

interface IconTextButtonProps
  extends Omit<PressableProps, "children"> {
  title: string;
  icon: string;
  variant?: IconTextButtonVariant;
  size?: IconTextButtonSize;
  iconSize?: number;
  loading?: boolean;
  disabled?: boolean;
}

const variants: Record<
  IconTextButtonVariant,
  {
    container: string;
    text: string;
    iconColor: string;
  }
> = {
  primary: {
    container: "bg-primary",
    text: "text-white",
    iconColor: "#FFFFFF",
  },
  secondary: {
    container: "bg-secondary",
    text: "text-white",
    iconColor: "#FFFFFF",
  },
  white: {
    container: "bg-white",
    text: "text-black",
    iconColor: "#000000",
  },
  black: {
    container: "bg-black",
    text: "text-white",
    iconColor: "#FFFFFF",
  },
  outline: {
    container: "border border-primary bg-transparent",
    text: "text-primary",
    iconColor: "#E50914",
  },
  ghost: {
    container: "bg-transparent",
    text: "text-white",
    iconColor: "#FFFFFF",
  },
  danger: {
    container: "bg-red-600",
    text: "text-white",
    iconColor: "#FFFFFF",
  },
};

const sizes: Record<
  IconTextButtonSize,
  {
    container: string;
    text: string;
    iconSize: number;
  }
> = {
  sm: {
    container: "h-9 px-3",
    text: "text-sm",
    iconSize: 16,
  },
  md: {
    container: "h-12 px-5",
    text: "text-base",
    iconSize: 20,
  },
  lg: {
    container: "h-14 px-6",
    text: "text-lg",
    iconSize: 24,
  },
};

export default function IconTextButton({
  title,
  icon,
  variant = "primary",
  size = "md",
  iconSize,
  loading = false,
  disabled = false,
  ...props
}: IconTextButtonProps) {
  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={title}
      className={`
        ${currentSize.container}
        ${currentVariant.container}
        flex-row
        items-center
        justify-center
        gap-2
        rounded-xl
        ${isDisabled ? "opacity-50" : "opacity-100"}
      `}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={currentVariant.iconColor}
        />
      ) : (
        <Ionicons
          name={icon as any}
          size={iconSize ?? currentSize.iconSize}
          color={currentVariant.iconColor}
        />
      )}

      <Text
        className={`
          ${currentSize.text}
          ${currentVariant.text}
          font-bold
        `}
      >
        {title}
      </Text>
    </Pressable>
  );
}
