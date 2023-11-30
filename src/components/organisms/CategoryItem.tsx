import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { Link } from 'expo-router';

const CategoryItem = () => {
  return (
    <View
      height={72}
      borderRadius={4}
      backgroundColor={color.white}
      shadowColor={color.black}
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.25}
      shadowRadius={2}
      elevation={5}
    >
      <Link
        href={{
          pathname: '/[category]',
          params: { category: 'sample' },
        }}
      >
        <View width="100%" height="100%" padding={12}>
          <Text>123</Text>
        </View>
      </Link>
    </View>
  );
};

export default CategoryItem;
