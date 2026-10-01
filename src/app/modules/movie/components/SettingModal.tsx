import React from 'react';
import { Modal, View, Pressable, Text, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

import Settings from "../../../../../assets/icons/settings.png";
import Speed from "../../../../../assets/icons/play-speed.png";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function SettingModal({ isOpen, onClose, title, children }: CustomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
      statusBarTranslucent={true} // Extends background overlay behind the status bar
    >
      {/* Background Overlay */}
      <Pressable
        className="flex-1 justify-end items-center bg-black/50 pb-20"
        onPress={onClose}
      >
        {/* Modal Card Content (Stop propagation to prevent closing when clicking inside the card) */}
        <Pressable
          className="w-full max-w-md bg-gray rounded-2xl p-5 shadow-xl gap-4"
          onPress={(e) => e.stopPropagation()}
        >

          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-5">
            <Image
              source={Settings}
              className="h-7 w-7"
            />
            <Text className="text-2xl text-white dark:text-white">
              Quality
            </Text>
            </View>
            <View className="flex-row items-center gap-1">
                <Text className="text-white text-xl">480p</Text>
                <Pressable onPress={onClose} className="active:opacity-60">
                 <Ionicons name="chevron-forward" size={22} color="#fff" />
                </Pressable>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-5">
            <Image
              source={Speed}
              className="h-7 w-7"
            />
            <Text className="text-2xl text-white dark:text-white">
              Playback Speed
            </Text>
            </View>
            <View className="flex-row items-center gap-1">
                <Text className="text-white text-xl">1x</Text>
                <Pressable onPress={onClose} className="active:opacity-60">
                 <Ionicons name="chevron-forward" size={22} color="#fff" />
                </Pressable>
            </View>
          </View>
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-5">
            <Ionicons name="logo-closed-captioning" size={22} color="#fff" />
            <Text className="text-2xl text-white dark:text-white">
              Captions
            </Text>
            </View>
            <View className="flex-row items-center gap-1">
                <Text className="text-white text-xl">Auto</Text>
                <Pressable onPress={onClose} className="active:opacity-60">
                 <Ionicons name="chevron-forward" size={22} color="#fff" />
                </Pressable>
            </View>
          </View>

        </Pressable>
      </Pressable>
    </Modal>
  );
}
