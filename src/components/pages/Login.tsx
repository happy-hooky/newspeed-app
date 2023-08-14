import React from 'react';
import { Text, View, Button } from '../atoms/index';

const LoginPage = () => {
  return (
    <View design="base">
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
