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
      <View
        width="100%"
        flex={1}
        justifyContent="flex-start"
        alignItems="flex-start"
        backgroundColor={color.black}
      >
        <View zIndex={1} paddingHorizontal={16} marginTop={insets.top + 40}>
          <Link href={{ pathname: '/(tabs)/main' }} replace={true}>
            <View width={44} height={44} alignItems="center" justifyContent="center">
              <Image src="back" width={20} height={20} marginLeft={4} />
            </View>
          </Link>
        </View>
        <View zIndex={1} width="100%" marginTop={40}>
          <View width="100%" paddingHorizontal={28}>
            <Text fontSize={48} fontFamily="bold" color={color.indiPink}>
              Newspeed
            </Text>
            <Text fontSize={16} marginTop={12} lineHeight={24} color={color.indiPink}>
              보고싶은 콘텐츠, 뉴스피드가 찾아드릴게요. {'\n'}관심사 등록을 위해 로그인해주세요.
            </Text>
          </View>
        </View>
      </View>
      <View
        width="100%"
        height="35%"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor={color.black}
      >
        <KaKaoLogin />
        <AppleLogin />
      </View>
    </>
  );
};

export default LoginPage;
