import './global.css';

import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts
} from '@expo-google-fonts/inter';
import { Slot } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Loading from '@/components/Loading';

export default function RootLayout() {
  const [fontsIsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
  });

  return (
    <SafeAreaProvider>
      {fontsIsLoaded ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Slot />
        </SafeAreaView>
      ) : (
        <Loading />
      )}
    </SafeAreaProvider>
  );
}
