import React from 'react';
import { Text, View, Button, Image } from '@/components/atoms';
import { color } from '@/constants';

const LoginPage = () => {
  return (
    <View backgroundColor={color.white} flex={1} justifyContent="center" alignItems="center">
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
      <Image src="appleSignIn" width={300} resizeMode="contain" />
    </View>
  );
};

export default LoginPage;
