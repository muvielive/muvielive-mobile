import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

interface FloatingInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function FloatingInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
  containerClassName='',
  inputClassName=''
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || value.length > 0;

  return (
    <View className={`relative w-full ${containerClassName}`}>
      <Text
        pointerEvents="none"
        className={`text-white absolute left-3 z-10 native:transition-all duration-200 ${
          isFloating
            ? 'top-2.5 left-2 px-1 text-sm text-white mb-2'
            : 'top-3.5 text-base text-gray-400'
        }`}
      >
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
//         className={`w-full px-3 ${inputClassName}`}
        className={`w-full ${inputClassName} ${isFloating ? 'pt-4' : 'pt-0'}`}
      />
    </View>
  );
}
