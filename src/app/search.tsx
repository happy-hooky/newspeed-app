import Image from '@/components/atoms/Image';
import { SearchPage } from '@/components/pages';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
        }}
      />
      <Image src="back" width={24} height={24} />
      <SearchPage />
    </>
  );
};
