import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function VideoPlayer() {
  const [paused, setPaused] = React.useState(false);

  return (
    <View className="relative h-80 w-full bg-gray-900">
      <Video
        source={require('./videos/video2.mp4')}
        style={{
          width: '100%',
          height: '100%',
        }}
        resizeMode="cover"
        repeat={true}
        paused={paused}
        onLoad={() => console.log('VIDEO LOADED')}
        onError={(error) => console.log('VIDEO ERROR:', error)}
      />

      <TouchableOpacity
        className="absolute left-8 top-2 h-10 w-10 items-center justify-center rounded-full bg-black/50"
      >
        <Ionicons
          name="arrow-redo-outline"
          size={28}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-8 -translate-y-8 items-center justify-center rounded-full bg-black/60"
        onPress={() => setPaused(prev => !prev)}
      >
        <Ionicons
          name={paused ? 'play' : 'pause'}
          size={32}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}