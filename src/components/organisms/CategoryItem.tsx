import { Text, View } from '@/components/atoms';
import { color } from '@/constants';

const CategoryItem = () => {
  return (
    <View
      flex={1}
      height={72}
      padding={12}
      borderRadius={4}
      backgroundColor={color.white}
      shadowColor={color.black}
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.25}
      shadowRadius={2}
      elevation={5}
    >
      <Text>123</Text>
    </View>
  );
};

export default CategoryItem;
