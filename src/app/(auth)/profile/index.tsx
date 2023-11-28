import { ProfilePage } from '@/components/pages';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '마이페이지',
          headerShown: true,
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <ProfilePage />
    </>
  );
};
