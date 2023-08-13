import React from 'react';
import { Text, View, Button } from '../atoms/index';
import { Link } from 'expo-router';

const Main = () => {
  return (
    <View design="base">
      <Text>메인페이지</Text>
      <Link href="/search">
        <Button size="basic" design="primary">
          <Text>검색</Text>
        </Button>
      </Link>

      <Link href="/profile">
        <Button size="basic" design="primary">
          <Text>프로필</Text>
        </Button>
      </Link>
    </View>
  );
};

export default Main;
