import React from "react";
import {
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export default function Input({
  label,
  error,
  containerClassName = "",
  inputClassName = "",
  ...props
}: InputProps) {
  return (
    <View className={`w-full ${containerClassName}`}>
      {label && (
        <Text className="text-sm font-medium text-white -mb-1">
          {label}
        </Text>
      )}

      <TextInput
        {...props}
        placeholderTextColor="#9CA3AF"
        className={`
          h-12
          w-full
          rounded-xl
          border
          text-base
          text-white
          ${error ? "border-red-500" : "border-gray-700"}
          ${inputClassName}
        `}
      />

      {error && (
        <Text className="mt-1 text-sm text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}

