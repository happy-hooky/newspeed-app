import { ContentsPage } from '@/components/pages';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
        }}
      />
      <ContentsPage />
    </>
  );
};
