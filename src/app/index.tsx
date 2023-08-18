import { View } from '@/components/atoms';
import Image from '@/components/atoms/Image';
import { MainPage } from '@/components/pages';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: color.white,
          },
          headerLeft: () => <Image src="logo" width={32} height={32} />,
          headerRight: () => (
            <View flexDirection="row">
              <Image src="search" width={16} height={16} />
              <Image src="user" width={16} height={16} marginLeft={16} />
            </View>
          ),
        }}
      />
      <MainPage />
    </>
  );
};
