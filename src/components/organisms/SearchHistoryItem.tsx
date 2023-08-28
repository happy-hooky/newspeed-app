import { Image, Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';

const SearchHistoryItem = () => {
  const [isCatergory, setIsCategory] = useState(false);

  return (
    <View flexDirection="row" justifyContent="space-between" marginTop={10}>
      <Pressable onPress={() => router.push('/')}>
        <View height={32} justifyContent="center">
          <Text fontSize={16}>구루루</Text>
        </View>
      </Pressable>
      <View flexDirection="row" gap={12} alignItems="center">
        <Pressable onPress={() => setIsCategory(!isCatergory)}>
          <Image src={isCatergory ? 'starFill' : 'star'} width={28} height={28} />
        </Pressable>
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
