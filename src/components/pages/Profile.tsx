import React from 'react';
import { Button, Text, View } from '../atoms/index';
import { Link } from 'expo-router';

const ProfilePage = () => {
  return (
    <View>
      <Link href="/(auth)/mypage/inventory" asChild>
        <Button design="primary" size="basic">
          <Text>보관함</Text>
        </Button>
      </Link>
      <Link href="/(auth)/mypage/inquiry" asChild>
        <Button design="primary" size="basic">
          <Text>문의하기</Text>
        </Button>
      </Link>
      <Link href="/(auth)/mypage/alarm" asChild>
        <Button design="primary" size="basic">
          <Text>알림설정</Text>
        </Button>
      </Link>
    </View>
  );
};

export default ProfilePage;
