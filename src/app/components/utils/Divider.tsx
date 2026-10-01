import { View } from 'react-native';

export function Divider({ color='white' }) {
  return (
    <View className={`my-4 h-[1px] w-full bg-white/10`} />
  );
}
