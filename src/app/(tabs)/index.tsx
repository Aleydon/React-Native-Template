import { View } from 'react-native';

import { TextComponent } from '@/components/Text';

export default function Home() {
  return (
    <View className="h-screen w-screen flex-1 items-center justify-center">
      <TextComponent>React Native Template</TextComponent>
    </View>
  );
}
