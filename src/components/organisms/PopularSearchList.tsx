import { Text, View } from '@/components/atoms';
import { color } from '@/constants';

const PopularSearchList = () => {
  return (
    <View marginTop={20} gap={20} flexDirection="row">
      <View
        alignSelf="flex-start"
        paddingVertical={10}
        borderBottomWidth={2}
        borderBottomColor={color.cheese}
      >
        <Text>이창섭</Text>
      </View>
      <View
        alignSelf="flex-start"
        paddingVertical={10}
        borderBottomWidth={2}
        borderBottomColor={color.cheese}
      >
        <Text ellipsizeMode="tail" numberOfLines={1}>
          이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭 이창섭
        </Text>
      </View>
    </View>
  );
};

export default PopularSearchList;
