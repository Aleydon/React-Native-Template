import { StatusBar, Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center h-screen w-max">
      <StatusBar hidden={true} />
      <Text className="text-2xl underline">Hello World</Text>
    </View>
  );
}
