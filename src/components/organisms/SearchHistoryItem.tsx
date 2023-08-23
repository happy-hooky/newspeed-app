import { Image, Text, View } from '@/components/atoms';
import { color } from '@/constants';

const SearchHistoryItem = () => {
  return (
    <View flexDirection="row" justifyContent="space-between" marginTop={10}>
      <View height={32} justifyContent="center">
        <Text fontSize={16}>구루루</Text>
      </View>
      <View flexDirection="row" gap={8}>
        <View
          height={32}
          paddingHorizontal={16}
          borderRadius={4}
          alignItems="center"
          justifyContent="center"
          backgroundColor={color.white}
          borderColor={color.cheese}
          borderWidth={2}
        >
          <Text>카테고리</Text>
        </View>
        <View
          width={32}
          height={32}
          backgroundColor={color.white}
          borderWidth={2}
          borderColor={color.cheese}
          borderRadius={4}
          alignItems="center"
          justifyContent="center"
        >
          <Image src="delete" width={16} height={16} />
        </View>
      </View>
    </View>
  );
};
export default SearchHistoryItem;
