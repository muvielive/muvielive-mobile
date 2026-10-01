import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from "@react-native-vector-icons/material-design-icons";
import Orientation from 'react-native-orientation-locker';

import Rotate from "../../../../../assets/icons/rotate.png";
import Backward from "../../../../../assets/icons/backward.png";
import Forward from "../../../../../assets/icons/forward.png";
import Previous from "../../../../../assets/icons/previous.png";
import Next from "../../../../../assets/icons/next.png";
import { SettingModal } from './SettingModal';

export function StreamPlayer() {
  const { width, height } = useWindowDimensions();
  const [fullscreen, setFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const videoWidth = fullscreen ? width : width;
  const videoHeight = videoWidth * (13/16);

  const toggleFullscreen = () => {
    if (fullscreen) {
      Orientation.lockToPortrait();
      setFullscreen(false);
    } else {
      Orientation.lockToLandscape();
      setFullscreen(true);
    }

    showControls();
  };

  const startHideTimer = () => {
    if (hideControlsTimer.current) {
      clearTimeout(hideControlsTimer.current);
    }

    hideControlsTimer.current = setTimeout(() => {
      setControlsVisible(false);
    }, 40000000);
  };

  const showControls = () => {
    setControlsVisible(true);
    Alert.alert("I'm here")
    startHideTimer();
  };

  // Start timer when player mounts
  useEffect(() => {
    startHideTimer();

    return () => {
      if (hideControlsTimer.current) {
        clearTimeout(hideControlsTimer.current);
      }
    };
  }, []);


  return (
      <>
      <StatusBar
        hidden={fullscreen}
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    <View
      className={
        fullscreen
          ? "absolute inset-0 z-50 bg-black"
          : "w-full bg-black"
      }
    >
    <View
      style={{
        width: fullscreen ? width : videoWidth,
        height: fullscreen ? height : videoHeight,
      }}
      className={`relative overflow-hidden bg-black ${fullscreen ? 'top-0' : 'top-1/2'}`}
    >

        {controlsVisible && (
        <View
            className={
              fullscreen
                ? "absolute right-0 top-0 z-50 flex-row items-center gap-2 px-4 pt-3"
                : "flex-row items-center justify-end gap-2 px-4"
            }
          >
            <TouchableOpacity className="h-10 w-10 items-center justify-center">
              <Text className="text-xl font-bold text-white">1x</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-11 w-11 items-center justify-center"
              onPress={toggleFullscreen}
            >
              <Image source={Rotate} className="h-7 w-7" />
            </TouchableOpacity>

            <TouchableOpacity
              className="h-11 w-11 items-center justify-center"
              onPress={() => navigation.navigate("Settings")}
            >
              <MaterialCommunityIcons
                name="cast"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>

            <TouchableOpacity className="h-10 w-10 items-center justify-center">
              <Ionicons
                name="logo-closed-captioning"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>

            {/* Settings */}
            <TouchableOpacity
                className="h-10 w-10 items-center justify-center"
                onPress={() => setModalOpen(true)}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
              <SettingModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Welcome!"
              >
                <Text className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  This is a responsive modal component built natively with React Native and styled easily using NativeWind utility classes.
                </Text>
              </SettingModal>
          </View>
          )}
        <Video
          source={require('./videos/video2.mp4')}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
          repeat
          paused={false}
          onPress={showControls}
        />
        {controlsVisible && (
        <View className="absolute inset-0 items-center justify-center">
          <View className="flex-row items-center gap-4">

            {/* Previous */}
            <TouchableOpacity
              className="relative h-14 w-14 items-center justify-center rounded-full bg-black/60"
            >
              <Image
                source={Previous}
                className="h-6 w-6"
              />

            </TouchableOpacity>

            <TouchableOpacity
              className="h-14 w-14 items-center justify-center rounded-full bg-black/60"
            >
                <View className="relative h-8 w-8">
                  <Image
                    source={Backward}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />

                  <Text className="absolute left-[9px] top-[8px] text-[10px] font-bold text-white">
                    10
                  </Text>
                </View>
            </TouchableOpacity>

            {/* Play */}
            <TouchableOpacity
              className="h-16 w-16 items-center justify-center rounded-full bg-black/60"
            >
              <Ionicons
                name="play"
                size={32}
                color="#fff"
              />
            </TouchableOpacity>

            {/* Forward */}
            <TouchableOpacity
              className="h-14 w-14 items-center justify-center rounded-full bg-black/60"
            >
                <View className="relative h-8 w-8">
                  <Image
                    source={Forward}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />

                  <Text className="absolute right-[9px] top-[8px] text-[10px] font-bold text-white">
                    10
                  </Text>
                </View>
            </TouchableOpacity>

            {/* Next */}
            <TouchableOpacity
              className="h-14 w-14 items-center justify-center rounded-full bg-black/60"
            >
              <Image
                source={Next}
                className="h-6 w-6"
              />
            </TouchableOpacity>
          </View>
        </View>
        )}
      </View>
    </View>
    </>
  );
}