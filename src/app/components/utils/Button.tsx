import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

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
  }
};

export default function Button({
  title,
  variant = "primary",
  loading = false,
  disabled = false,
  btnClassName = '',
  ...props
}: ButtonProps) {
  const currentVariant = variants[variant];
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      disabled={isDisabled}
      className={`
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
          className={`text-2xl font-bold ${currentVariant.text}`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}