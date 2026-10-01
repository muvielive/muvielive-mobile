import React, { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  Text,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export type ToastType = "success" | "error" | "warning" | "info";

type ToastPosition =
  | "top"
  | "top-center"
  | "top-right"
  | "top-left"
  | "bottom"
  | "bottom-center"
  | "bottom-right"
  | "bottom-left"
  | "center";

interface ToastProps {
  visible: boolean;
  type?: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
  onClose: () => void;
}

const toastConfig = {
  success: {
    icon: "checkmark-circle",
    iconColor: "#22C55E",
    border: "border-green-500",
  },
  error: {
    icon: "close-circle",
    iconColor: "#EF4444",
    border: "border-red-500",
  },
  warning: {
    icon: "warning",
    iconColor: "#F59E0B",
    border: "border-yellow-500",
  },
  info: {
    icon: "information-circle",
    iconColor: "#3B82F6",
    border: "border-blue-500",
  },
} as const;

const positionStyles: Record<ToastPosition,
  {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    alignSelf?: "auto" | "flex-start" | "center" | "flex-end";
  }
> = {
  top: { top: 56, left: 16, right: 16 },

  "top-center": { top: 270, alignSelf: "center" },

  "top-left": { top: 16, left: 16 },

  "top-right": { top: 16, right: 16 },

  bottom: { bottom: 16, left: 16, right: 16 },

  "bottom-center": { bottom: 16, alignSelf: "center" },

  "bottom-left": { bottom: 16, left: 16 },

  "bottom-right": { bottom: 16, right: 16 },

  center: {
    alignSelf: "center",
  },
};

export default function Toast({
  visible,
  type = "info",
  title,
  message,
  duration = 10000,
  position = "top-center",
  onClose,
}: ToastProps) {
  const translateY = useRef(new Animated.Value(-120)).current;
  const opacity = useRef(new Animated.Value(0)).current;

   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
   const remainingTimeRef = useRef(duration);
   const startedAtRef = useRef<number | null>(null);

  const config = toastConfig[type];

    const clearToastTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const startToastTimer = (time: number) => {
      clearToastTimer();

      startedAtRef.current = Date.now();

      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        onClose();
      }, time);
    };

    const handlePressIn = () => {
      if (!timerRef.current || startedAtRef.current === null) {
        return;
      }

      const elapsed = Date.now() - startedAtRef.current;

      remainingTimeRef.current = Math.max(
        0,
        remainingTimeRef.current - elapsed
      );

      clearToastTimer();
    };

    const handlePressOut = () => {
      if (remainingTimeRef.current <= 0) {
        onClose();
        return;
      }

      startToastTimer(remainingTimeRef.current);
    };

  useEffect(() => {
    if (!visible) {
        clearToastTimer();

      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -120,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      return;
    }

    remainingTimeRef.current = duration;

    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 18,
        stiffness: 180,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();

    startToastTimer(duration);

    return () => {
      clearToastTimer();
    };

//     const timeout = setTimeout(() => {
//       onClose();
//     }, duration);
//
//     return () => clearTimeout(timeout);
  }, [visible, duration, onClose, opacity, translateY]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View
      style={[
        {
          opacity,
          transform: [{ translateY }],
        },
        positionStyles[position],
      ]}
      className="absolute z-50 w-[92%]"
    >
      <Pressable
         onPressIn={handlePressIn}
         onPressOut={handlePressOut}
         onPress={onClose}
        className={`
          flex-row items-center rounded-2xl border
          bg-[#181818] px-4 py-4
          shadow-lg
          ${config.border}
        `}
      >
        <Ionicons
          name={config.icon}
          size={28}
          color={config.iconColor}
        />

        <View className="ml-3 flex-1">
          {title && (
            <Text className="text-base font-bold text-white">
              {title}
            </Text>
          )}

          <Text className="mt-1 text-sm leading-5 text-white">
            {message}
          </Text>
        </View>

        <Ionicons
          name="close"
          size={20}
          color="#fff"
        />
      </Pressable>
    </Animated.View>
  );
}