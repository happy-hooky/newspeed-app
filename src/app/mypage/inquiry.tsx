import { InquiryPage } from '@/components/pages';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '문의하기',
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <InquiryPage />
    </>
  );
};
