import * as React from 'react';
import { View } from '../atoms/View';
import { Text } from '../atoms/Text';
import { Pressable } from '../atoms/Button';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text type="title">메인페이지</Text>
      <Pressable componentType="search" onPress={() => navigation.navigate('Search')}>
        <Text>검색</Text>
      </Pressable>
      <Pressable componentType="profile" onPress={() => navigation.navigate('Profile')}>
        <Text>프로필</Text>
      </Pressable>
    </View>
  );
};

export default Main;
