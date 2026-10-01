import React, {
  useState,
  useEffect,
} from 'react';

import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { HeaderBackButton } from '@react-navigation/elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useAuthStore } from '../store/auth.store';
import { Divider } from '../../../components/utils/Divider';
import type { AuthStackParamList } from "../../navigation/types";
import { useLogout } from '../hooks';
import { getInitials } from '../../../lib/utils';
import Toggle from "../../../components/form/Toggle";

type HomeNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export function SideSettingScreen() {
   const navigation = useNavigation<HomeNavigationProp>();
   const authenticated = useAuthStore(state => state.authenticated);

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className="bg-gray rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Ionicons
              name="arrow-back-sharp" // Or "chevron-back" for an iOS style arrow
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        ),
      });
    }, [navigation]);

  return (
      <SafeAreaView className="flex-1 bg-black pt-8">
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-col gap-6">
                {authenticated ?
                 <>
                <UserCard />
                <Text className='text-white text-2xl -mb-5 mx-6'>DEVICE PREFERENCES</Text>
                <PreferenceCard />
                <View className="mx-6 -mt-8">
                <Text className="text-white/60 text-[17px]">
                    Allow TV shows and movies played on this device
                    to influence your "For You" recommendations and
                    update your "Continue Watching" across your devices.
                </Text>
                </View>
                </>
                :
                <HorizontalCard label="Sign In" screen='Login' navigation={navigation} />
                }
                <HorizontalCard label="Appearance" subtext="Themes" py="py-4" screen='' navigation={navigation} />
                {authenticated &&
                    <>
                     <Text className='text-white text-2xl -mb-5 mx-6'>AUTO-PLAY</Text>
                     <AutoplayCard />
                    </>
                 }
                <Text className='text-white text-2xl -mb-5 mx-6'>AUDIO</Text>
                <HorizontalCard label="Audio Language" subtext="Audio" py="py-4" screen='' navigation={navigation}/>
                {authenticated &&
                    <>
                    <Text className='text-white text-2xl -mb-5 mx-6'>AUTOMATIC SUBTITLES</Text>
                    <SubtitleCard />
                    </>
                }
                <Text className='text-white text-2xl -mb-5 mx-6'>RESTRICTIONS</Text>
                <HorizontalCard label="Content Restrictions" subtext="off" py="py-4" screen='' navigation={navigation}/>
                {authenticated &&
                    <>
                    <Text className='text-white text-2xl -mb-5 mx-6'>STREAMING OPTIONS</Text>
                    <StreamingCard />
                    </>
                }
                <Text className='text-white text-2xl -mb-5 mx-6'>ABOUT</Text>
                <AboutCard />
                <Text className='text-white text-2xl -mb-5 mx-6'>PRIVACY</Text>
                <PrivacyCard />
                {authenticated &&
                <LogoutCard />
                }
                <Text className='text-white text-xl mb-10'>Version 1.0.0</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}


function HorizontalCard({ label, screen, navigation, title='Audio', subtext='', py='py-7' }) {
    return (

          <View className={`flex-row bg-gray rounded-3xl px-3 ${py} shadow-md items-center m-2`}>
              <TouchableOpacity className="flex-1 ml-3 justify-between"
               onPress={() => navigation.navigate(screen)}
              >
                <View>
                  <Text className="text-2xl font-semibold text-white">
                    {label}
                  </Text>
                  {subtext &&
                  <Text className="text-white text-lg">
                    {subtext}
                  </Text>
                  }
                </View>
              </TouchableOpacity>
          </View>

    )
}

function AboutCard() {
    return (

          <View className={`flex-row bg-gray rounded-3xl px-3 py-6 shadow-md items-center mt-2 mx-2 mb-8`}>
              <View className="flex-1 ml-3 justify-between">
                <TouchableOpacity>
                  <Text className="text-2xl text-primary py-4">
                    Muvie Live TV App & Privacy
                  </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity>
                <Text className="text-2xl text-primary py-4">
                 Terms & Conditions
                </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity>
                  <Text className="text-2xl text-primary py-4">
                   Acknowledgements
                  </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity>
                  <Text className="text-2xl text-primary py-4">
                   Provide Feedback
                  </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity>
                  <Text className="text-2xl text-primary py-4">
                   Muvie Live TV App User Guide
                   </Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity>
                  <Text className="text-2xl text-primary py-4">
                   Get Support
                  </Text>
                </TouchableOpacity>
              </View>
          </View>

    )
}

function PrivacyCard() {
    const [shareAnalytics, setShareAnalytics] = useState(true);
    return (

          <View className={`flex-row bg-gray rounded-3xl px-3 py-6 shadow-md items-center mt-2 mx-2 mb-8`}>
              <View className="flex-1 ml-3 justify-between">
              <View className="flex-row justify-between items-center px-2 mt-2" >
                <View className="">
                   <Text className="text-primary text-xl font-semibold">
                     Share Muvie Live TV App Analytics
                  </Text>
                </View>
                <Toggle value={shareAnalytics} onValueChange={setShareAnalytics} size="lg"/>
              </View>
              <Divider />
                <TouchableOpacity>
                <Text className="text-2xl text-primary py-4">
                 About Diagnostics & Privacy
                </Text>
                </TouchableOpacity>
              </View>
          </View>

    )
}

function LogoutCard() {
    const logout = useLogout();
    const handleLogout = () => {
       logout.mutate();
    };

    return (
          <View className={`flex-row bg-gray rounded-3xl px-3 py-3 shadow-md items-center mx-2 mb-8`}>
              <View className="flex-1 ml-3 justify-between">
                <TouchableOpacity
                onPress={handleLogout}
                >
                <Text className="text-2xl text-danger py-4">
                 Sign out
                </Text>
                </TouchableOpacity>
              </View>
          </View>

    )
}

function UserCard() {
   const authenticated = useAuthStore(state => state.authenticated);
   const user = useAuthStore(state => state.user);
   const navigation = useNavigation<HomeNavigationProp>();

    return (
          <View className={`flex-col bg-gray rounded-3xl px-5 py-4 shadow-md mx-2 mb-4 gap-2`}>
              <TouchableOpacity
                  className="flex-row items-center pl-2 pr-6"
                >
                  <View
                    className="h-14 w-14 items-center justify-center rounded-full bg-white"
                     onPress={() => navigation.navigate("Settings")}
                  >
                  {user ?
                        <Text className="text-black text-2xl font-bold">{getInitials(user.name)}</Text>
                      :
                    <Ionicons
                      name="person"
                      size={22}
                      color="#fff"
                    />
                    }
                  </View>

                  <View className="mx-4">
                    <Text className="text-white text-2xl font-semibold">{user ? user.name : 'Muvie Live'}</Text>
                    <Text className="text-white">{user ? user.email : ''}</Text>
                  </View>
              </TouchableOpacity>
              <Divider />
              <TouchableOpacity className="flex-row items-center justify-between pl-2 pb-4"
                onPress={() => navigation.navigate("Settings")}
              >
                <Text className="text-white text-xl font-semibold">Account Settings</Text>
              </TouchableOpacity>
          </View>

    )
}

function PreferenceCard() {
   const navigation = useNavigation<HomeNavigationProp>();
   const [sportScore, setSportScore] = useState(true);
   const [playHistory, setPlayHistory] = useState(true);

    return (
          <View className={`flex-col bg-gray rounded-3xl px-5 py-4 shadow-md mx-2 mb-4 gap-2`}>
              <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className="items-center justify-center"

                  >
                  <Text className="text-white text-xl font-semibold">Show Sport's Scores</Text>
                  </View>
                  <Toggle value={sportScore} onValueChange={setSportScore} size="lg"/>
              </View>
              <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className="items-center justify-center"

                  >
                  <Text className="text-white text-xl font-semibold">Use Play History</Text>
                  </View>
                  <Toggle value={playHistory} onValueChange={setPlayHistory} size="lg"/>
              </View>
          </View>

    )
}

function AutoplayCard() {
   const navigation = useNavigation<HomeNavigationProp>();
   const [playNext, setPlayNext] = useState(true);
   const [playRecom, setPlayRecom] = useState(true);

    return (
          <View className={`flex-col bg-gray rounded-3xl px-5 py-4 shadow-md mx-2 mb-4 gap-2`}>
              <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Play Next Episode</Text>
                  <Text className="w-[270px] text-white">
                  Automatically start the next available episode
                  on this device
                  </Text>
                  </View>
                  <Toggle value={playNext} onValueChange={setPlayNext} size="lg"/>
              </View>
              <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Play a Recommendation</Text>
                  <Text className="w-[270px] text-white">
                    After a series, movie or sporting event,
                    automatically play content recommended
                    for you
                  </Text>
                  </View>
                  <Toggle value={playRecom} onValueChange={setPlayRecom} size="lg"/>
              </View>
          </View>

    )
}

function SubtitleCard() {
   const navigation = useNavigation<HomeNavigationProp>();
   const [languageMatch, setLanguageMatch] = useState(true);
   const [showMute, setShowMute] = useState(true);
   const [skipBack, setSkipBack] = useState(true);

    return (
          <View className={`flex-col bg-gray rounded-3xl px-5 py-4 shadow-md mx-2 mb-4 gap-2`}>
              <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Show on Language Mismatch</Text>
                  <Text className="w-[270px] text-white">
                  Automatically turn on subtitles when the audio
                  language does not match
                  </Text>
                  </View>
                  <Toggle value={languageMatch} onValueChange={setLanguageMatch} size="lg"/>
              </View>
              <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Show when Muted</Text>
                  <Text className="w-[270px] text-white">
                    Automatically turn on subtitles when the volume
                    is muted or turned all the way down
                  </Text>
                  </View>
                  <Toggle value={showMute} onValueChange={setShowMute} size="lg"/>
              </View>
                <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Show on Skip Back</Text>
                  <Text className="w-[270px] text-white">
                    Temporarily turn on subtitles when you
                    skip back mute 30 seconds
                  </Text>
                  </View>
                  <Toggle value={skipBack} onValueChange={setSkipBack} size="lg"/>
              </View>
          </View>

    )
}

function StreamingCard() {
   const navigation = useNavigation<HomeNavigationProp>();
   const [cellular, setCellular] = useState(true);

    return (
          <View className={`flex-col bg-gray rounded-3xl px-5 py-4 shadow-md mx-2 mb-4 gap-2`}>
              <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Use Cellular Data</Text>

                  </View>
                  <Toggle value={cellular} onValueChange={setCellular} size="lg"/>
              </View>
              <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Cellular</Text>
                  <Text className="w-[270px] text-white">
                    Automatic
                  </Text>
                  </View>
              </View>
                <Divider />
               <View
                  className="flex-row justify-between items-center px-2 mt-2"
                >
                  <View
                    className=""

                  >
                  <Text className="text-white text-xl font-semibold">Wi Fi</Text>
                  <Text className="w-[270px] text-white">
                    High Quality
                  </Text>
                  </View>
              </View>
          </View>

    )
}