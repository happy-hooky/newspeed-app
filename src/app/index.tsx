import { Button, View, Image } from '@/components/atoms';
import { MainPage } from '@/components/pages';
import { color } from '@/constants';
import { Link, Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '',
          contentStyle: {
            backgroundColor: color.white,
          },
          headerLeft: () => <Image src="logo" width={32} height={32} />,
          headerRight: () => (
            <View flexDirection="row">
              <Link href="/search" asChild>
                <Button>
                  <Image src="search" width={16} height={16} />
                </Button>
              </Link>
              <Link href="/(auth)/mypage" asChild>
                <Button>
                  <Image src="user" width={16} height={16} marginLeft={16} />
                </Button>
              </Link>
            </View>
          ),
        }}
      />
      <MainPage />
    </>
  );
};
