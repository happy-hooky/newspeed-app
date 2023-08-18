import React from 'react';
import { Text, View, Button } from '@/components/atoms/index';
import { color } from '@/constants';
import { styled } from 'styled-components/native';
import { ScrollView } from 'react-native';
import Image from '@/components/atoms/Image';

const MainPage = () => {
  return (
    <View>
      <View paddingHorizontal={12} paddingTop={12} alignItems="flex-start">
        <View flexDirection="row" alignItems="center" gap={20}>
          <View flex={1} borderRightColor={color.twilight} borderRightWidth={1} paddingRight={20}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View flexDirection="row" columnGap={8}>
                <Button>
                  <CategoryLabel isActive>
                    <Text>인기</Text>
                  </CategoryLabel>
                </Button>
                <Button>
                  <CategoryLabel isActive={false}>
                    <Text>인기</Text>
                  </CategoryLabel>
                </Button>
                <Button>
                  <CategoryLabel isActive={false}>
                    <Text>인기</Text>
                  </CategoryLabel>
                </Button>
                <Button>
                  <CategoryLabel isActive={false}>
                    <Text>인기</Text>
                  </CategoryLabel>
                </Button>
                <Button>
                  <CategoryLabel isActive={false}>
                    <Text>인기</Text>
                  </CategoryLabel>
                </Button>
              </View>
            </ScrollView>
          </View>
          <View flexDirection="row" alignItems="flex-start" gap={20}>
            <Image src="youtube" width={28} height={20} />
            <Image src="back" width={16} height={16} transform={[{ rotate: '270deg' }]} />
          </View>
        </View>
        <Text marginVertical={12}>카테고리를 등록해 관심 분야의 최신 피드를 받아보세요 </Text>
      </View>
    </View>
  );
};

export default MainPage;

const CategoryLabel = styled.View<{ isActive: boolean }>`
  padding-vertical: 6;
  padding-horizontal: 20;
  border-color: ${({ isActive }) => (isActive ? color.cheese : color.twilight)};
  border-width: 2px;
  align-self: center;
  border-radius: 16px;
`;
