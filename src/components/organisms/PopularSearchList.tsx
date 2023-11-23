import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const PopularSearchList = () => {
  return (
    <View marginTop={20} gap={20} flexDirection="row" flexWrap="wrap" alignItems="flex-start">
      <TouchableOpacity
        onPress={() => {
          router.push('/');
        }}
      >
        <View
          alignSelf="flex-start"
          paddingVertical={10}
          paddingHorizontal={4}
          borderBottomWidth={2}
          borderBottomColor={color.cheese}
        >
          <Text ellipsizeMode="tail" numberOfLines={1} maxWidth={152} height={14}>
            이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularSearchList;
