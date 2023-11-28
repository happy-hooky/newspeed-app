import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';

const CategoryItem = () => {
  return (
    <View
      flex={1}
      margin={4}
      height={72}
      marginBottom={12}
      backgroundColor={color.white}
      borderRadius={8}
      shadowColor={color.black}
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={8}
      elevation={4}
    >
      <Text></Text>
    </View>
  );
};

export default CategoryItem;
