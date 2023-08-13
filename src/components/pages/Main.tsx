import React from 'react';
import { View } from '../atoms/View';
import { Text } from '../atoms/Text';
import { Pressable } from '../atoms/Button';
import { Link } from 'expo-router';

const Main = () => {
  return (
    <View>
      <Text type="title">메인페이지</Text>
      <Link href="/search">
        <Pressable componentType="search">
          <Text>검색</Text>
        </Pressable>
      </Link>

      <Link href="/profile">
        <Pressable componentType="profile">
          <Text>프로필</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Main;
