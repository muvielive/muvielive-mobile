import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "white" | "black" | "gray";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
}

const variants: Record<
  ButtonVariant,
  {
    container: string;
    text: string;
  }
> = {
  primary: {
    container: "bg-primary",
    text: "text-white",
  },
  secondary: {
    container: "bg-secondary",
    text: "text-white",
  },
  outline: {
    container: "border border-primary bg-transparent",
    text: "text-primary",
  },
  danger: {
    container: "bg-red-600",
    text: "text-white",
  },
  white: {
    container: "bg-white",
    text: "text-black",
  },
  black: {
    container: "bg-black",
    text: "text-white",
  },
  gray: {
    container: "bg-gray",
    text: "text-white",
  }
};

export default function OutlineButton({
  title,
  variant = "primary",
  loading = false,
  disabled = false,
  btnClassName = '',
  labelClassName='text-2xl font-bold',
  ...props
}: ButtonProps) {
  const currentVariant = variants[variant];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      className={`h-12 text-xl items-center justify-center rounded-full border-2 border-white px-6
        ${btnClassName}
        ${currentVariant.container}
        ${isDisabled ? "opacity-50" : "opacity-100"}
      `}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#FFFFFF"
        />
      ) : (
        <Text
          className={`${labelClassName} ${currentVariant.text}`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}