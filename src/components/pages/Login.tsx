import React from 'react';
import { Text, View, Button } from '../atoms/index';
import { Link } from 'expo-router';
const LoginPage = () => {
  return (
    <View style="container">
      <Link href="/SignIn">
        <Button componentType="apple">
          <Text type="buttonText">Apple Login</Text>
        </Button>
      </Link>

      <Link href="/SignIn">
        <Button componentType="kakao">
          <Text type="buttonText">Kakao Login</Text>
        </Button>
      </Link>
    </View>
  );
};

export default LoginPage;
