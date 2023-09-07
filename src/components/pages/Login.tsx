import React from 'react';
import { Text, View, Button, Image } from '@/components/atoms';
import { color } from '@/constants';
import { Link } from 'expo-router';

const LoginPage = () => {
  return (
    <View backgroundColor={color.white}>
      <View alignItems="center" justifyContent="center" height={162}>
        <Link href="/" asChild>
          <Button>
            <Image src="logo" width={32} height={32} />
          </Button>
        </Link>
      </View>
      <Button size="basic" design="primary">
        <Text>Apple Login</Text>
      </Button>
      <Button size="basic" design="primary">
        <Text>Kakao Login</Text>
      </Button>
    </View>
  );
};

export default LoginPage;
