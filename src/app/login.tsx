import { LoginPage } from '@/components/pages';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          title: '',
        }}
      />
      <LoginPage />
    </>
  );
};
