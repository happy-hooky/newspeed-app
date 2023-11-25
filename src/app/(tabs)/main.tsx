import { Text } from '@/components/atoms';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '메인',
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <Text>카테고리 선택 페이지</Text>
    </>
  );
};
