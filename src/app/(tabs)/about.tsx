import { TextComponent } from '@/components/Text';
import { Link } from 'expo-router';
import { Button, View } from 'react-native';

export default function About() {
  return (
    <View className="flex-1 items-center justify-center text-center">
      <TextComponent>Check out more templates {'\n'}</TextComponent>

      <Link asChild href="https://github.com/Aleydon">
        <Button title="Github" />
      </Link>
    </View>
  );
}
