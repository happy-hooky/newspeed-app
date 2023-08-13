import React from 'react';
import { Text, View, Button } from '../atoms/index';
import { Link } from 'expo-router';

const LoginPage = () => {
  return (
    <View design="base">
      <Link href="/SignIn">
        <Button size="basic" design="primary">
          <Text>Apple Login</Text>
        </Button>
      </Link>
      <Link href="/SignIn">
        <Button size="basic" design="primary">
          <Text>Kakao Login</Text>
        </Button>
      </Link>
    </View>
  );
};

export default LoginPage;
