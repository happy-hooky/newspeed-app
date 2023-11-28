import { AlarmPage } from '@/components/pages';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '알림설정',
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <AlarmPage />
    </>
  );
};
