import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const CategoryItem = () => {
  return (
    <View height={72} alignItems="center" justifyContent="center">
      <View zIndex={1} borderRadius={4} backgroundColor={color.black} width="99%" height={68}>
        <Link
          href={{
            pathname: '/[category]',
            params: { category: 'sample' },
          }}
        >
          <View width="100%" height="100%" padding={12} justifyContent="center">
            <Text color={color.white} fontSize={20} fontFamily="bold">
              123
            </Text>
          </View>
        </Link>
      </View>
      <LinearGradient
        colors={['rgba(211, 204, 24, 1)', 'rgba(237, 166, 37, 1)', 'rgba(228, 108, 124, 1)']}
        start={{ x: 0, y: 0 }}
        style={{
          borderRadius: 4,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></LinearGradient>
    </View>
  );
};

export default CategoryItem;
