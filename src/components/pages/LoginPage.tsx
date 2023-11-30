import React from 'react';
import { Text, View, Button, Image } from '@/components/atoms';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const LoginPage = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View width="100%" flex={1} justifyContent="space-between" alignItems="flex-start">
        <View zIndex={1} paddingHorizontal={16} marginTop={insets.top + 40}>
          <Button onPress={() => router.replace('/(tabs)/main')}>
            <View width={44} height={44} alignItems="center" justifyContent="center">
              <Image src="back" width={20} height={20} marginLeft={4} />
            </View>
          </Button>
        </View>
        <View zIndex={1} width="100%">
          <View paddingVertical={80} width="100%" paddingHorizontal={28}>
            <Text fontSize={48} fontFamily="bold">
              Newspeed
            </Text>
            <Text fontSize={16} marginTop={12} lineHeight={24}>
              보고싶은 콘텐츠, 뉴스피드가 찾아드릴게요. {'\n'}관심사 등록을 위해 로그인해주세요.
            </Text>
          </View>
        </View>
        <LinearGradient
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
          colors={[
            'rgba(211, 204, 24, 0.3)',
            'rgba(237, 166, 37, 0.3)',
            'rgba(228, 108, 124, 0.3)',
            'rgba(255, 255, 255, 0.6)',
          ]}
        />
      </View>

      <View
        width="100%"
        height={320}
        borderRadius={8}
        alignItems="center"
        justifyContent="center"
        backgroundColor="rgba(255, 255, 255, 0.6)"
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
      </View>
    </>
  );
};

export default LoginPage;
