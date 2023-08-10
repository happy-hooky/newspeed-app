import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <AppNavigator />;
}

function AppNavigator() {
  return (
    <Stack>
      <Stack.Screen name="Login" />
      <Stack.Screen name="SignIn" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Search" />
      <Stack.Screen name="Profile" />
    </Stack>
  );
}
