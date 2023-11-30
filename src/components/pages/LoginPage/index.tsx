import React from 'react';
import { Text, View, Image } from '@/components/atoms';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { color } from '@/constants';
import AppleLogin from '@/components/pages/LoginPage/AppleLogin';
import KaKaoLogin from '@/components/pages/LoginPage/KaKaoLogin';

const LoginPage = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View width="100%" flex={1} justifyContent="space-between" alignItems="flex-start">
        <View zIndex={1} paddingHorizontal={16} marginTop={insets.top + 40}>
          <Link href={{ pathname: '/(tabs)/main' }} replace={true}>
            <View width={44} height={44} alignItems="center" justifyContent="center">
              <Image src="back" width={20} height={20} marginLeft={4} />
            </View>
          </Link>
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
            color.white,
          ]}
        />
      </View>
      <View
        width="100%"
        height={320}
        borderRadius={8}
        alignItems="center"
        justifyContent="center"
        backgroundColor={color.white}
      >
        <KaKaoLogin />
        <AppleLogin />
      </View>
    </>
  );
};

export default LoginPage;
