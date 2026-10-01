import React from "react";
import {
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IconInputProps extends TextInputProps {
  icon: string;
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
  iconColor?: string;
  iconSize?: number;
}

export default function IconInput({
  icon,
  label,
  error,
  containerClassName = "",
  inputClassName = "",
  iconColor = "#9CA3AF",
  iconSize = 21,
  ...props
}: IconInputProps) {
  return (
    <View className={`w-full ${containerClassName}`}>
      {/* Label */}
      {label && (
        <Text className="mb-2 text-sm font-medium text-text">
          {label}
        </Text>
      )}

      <View
        className={`
          h-16
          w-full
          flex-row
          items-center
          rounded-xl
          border
          px-4
          bg-gray
          ${error ? "border-red-500" : "border-gray-700"}
        `}
      >
        <Ionicons
          name="search"
          size={24}
          color="#fff"
        />
        <TextInput
          {...props}
          placeholderTextColor="#D3D3D3"
          className={`
            ml-3
            text-xl
            text-white
            ${inputClassName}
          `}
        />
      </View>

      {/* Error */}
      {error && (
        <Text className="mt-1 text-sm text-red-500">
          {error}
        </Text>
      )}
    </View>
  );
}