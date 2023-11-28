import { ProfilePage } from '@/components/pages';
import { color } from '@/constants';
import useStorageState from '@/hook/useStorage';
import { Redirect, Stack } from 'expo-router';

export default () => {
  const [session, setSession] = useStorageState('session');

  if (!session) return <Redirect href={'/login'} />;
  return (
    <>
      <Stack.Screen
        options={{
          title: '문의하기',
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <ProfilePage />
    </>
  );
};
