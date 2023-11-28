import React from 'react';
import { Text, View, Button, Image } from '@/components/atoms';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const LoginPage = () => {
  const insets = useSafeAreaInsets();

  return (
    <View flex={1} height="100%" justifyContent="flex-end" alignItems="center">
      <View
        paddingHorizontal={28}
        paddingVertical={80}
        alignItems="flex-start"
        width="100%"
        zIndex={1}
      >
        <Text fontSize={48} fontFamily="bold">
          Newspeed
        </Text>
        <Text fontSize={16} marginTop={12}>
          보고싶은 콘텐츠, 뉴스피드가 찾아드릴게요.
        </Text>
        <Text fontSize={16} marginTop={8}>
          관심사 등록을 위해 로그인해주세요.
        </Text>
      </View>
      <View
        zIndex={1}
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 0.7)"
        paddingHorizontal={40}
        paddingTop={60}
        paddingBottom={40}
        borderRadius={20}
        marginBottom={insets.bottom + 60}
      >
        <Button>
          <View
            width={300}
            height={50}
            backgroundColor="#FEE500"
            borderRadius={7}
            flexDirection="row"
            alignItems="center"
            paddingHorizontal={14}
          >
            <Image src="kakaoLogo" width={22} height={22} />
            <View flex={1} justifyContent="center" alignItems="center">
              <Text color="rgba(0, 0, 0, 0.85)" fontSize={21} fontFamily="medium">
                카카오 로그인
              </Text>
            </View>
          </View>
        </Button>
        <Image src="appleSignIn" width={300} height={60} marginVertical={20} resizeMode="contain" />
        <Button onPress={() => router.replace('/(tabs)/main')}>
          <Text>돌아가기</Text>
        </Button>
      </View>
      <LinearGradient
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
        colors={['rgba(228, 108, 124, 0.4)', 'rgba(237, 166, 37, 0.4)', 'rgba(211, 204, 24, 0.4)']}
      />
    </View>
  );
};

export default LoginPage;
