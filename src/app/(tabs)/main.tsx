import { MainPage } from '@/components/pages';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <MainPage />
    </>
  );
};
