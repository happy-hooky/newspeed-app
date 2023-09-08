import { Button, Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { Fragment, useState } from 'react';
import { ScrollView } from 'react-native';
import { styled } from 'styled-components/native';

const CategoryLabelList = () => {
  // api call
  const dummy = [
    { id: 1, value: '카테고리1' },
    { id: 2, value: '카테고리2' },
    { id: 3, value: '카테고리3' },
  ];
  const POPULAR_CATEGORY = 'popular';
  const [selectedCategory, setSelectedCategory] = useState(POPULAR_CATEGORY);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View flexDirection="row" columnGap={8}>
        <Button onPress={() => setSelectedCategory(POPULAR_CATEGORY)}>
          <CategoryLabel isActive={selectedCategory === POPULAR_CATEGORY}>
            <Text>인기</Text>
          </CategoryLabel>
        </Button>
        {dummy.map((category) => {
          return (
            <Fragment key={category.id}>
              <Button onPress={() => setSelectedCategory(category.value)}>
                <CategoryLabel isActive={selectedCategory === category.value}>
                  <Text>{category.value}</Text>
                </CategoryLabel>
              </Button>
            </Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CategoryLabelList;

const CategoryLabel = styled.View<{ isActive: boolean }>`
  padding-vertical: 6px;
  padding-horizontal: 20px;
  border-color: ${({ isActive }) => (isActive ? color.cheese : color.twilight)};
  border-width: 2px;
  align-self: center;
  border-radius: 16px;
`;
