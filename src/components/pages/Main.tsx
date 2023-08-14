import React from 'react';
import { Text, View, Button } from '@/components/atoms/index';
import { Link } from 'expo-router';

const MainPage = () => {
  return (
    <View design="base">
      <Link href="/search" asChild>
        <Button size="basic" design="primary">
          <Text>검색</Text>
        </Button>
      </Link>
      <Link href="/mypage" asChild>
        <Button size="basic" design="primaryBorder">
          <Text>마이페이지</Text>
        </Button>
      </Link>
      <Link href="/login" asChild>
        <Button size="basic" design="primaryBorder">
          <Text>로그인</Text>
        </Button>
      </Link>
    </View>
  );
};

export default MainPage;
