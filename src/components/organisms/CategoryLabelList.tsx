import { Button, Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { ScrollView } from 'react-native';
import { styled } from 'styled-components/native';

const CategoryLabelList = () => {
  // api call

  return (
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
  );
};

export default CategoryLabelList;

const CategoryLabel = styled.View<{ isActive: boolean }>`
  padding-vertical: 6;
  padding-horizontal: 20;
  border-color: ${({ isActive }) => (isActive ? color.cheese : color.twilight)};
  border-width: 2px;
  align-self: center;
  border-radius: 16px;
`;
