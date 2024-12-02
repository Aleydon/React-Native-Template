import TextComponent from '@components/Text';
import { StatusBar, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center h-screen w-max">
      <StatusBar hidden={true} />
      <TextComponent>Hello World</TextComponent>
    </View>
  );
}
