import * as React from 'react';
import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { TextInput } from '@/components/molecules';
import { SearchHistoryItem } from '@/components/organisms';
import { FlatList, SafeAreaView } from 'react-native';

const history = [
  { id: 1, text: '1' },
  { id: 2, text: '2' },
  { id: 3, text: '3' },
  { id: 4, text: '4' },
  { id: 5, text: '5' },
  { id: 6, text: '6' },
];

const SearchPage = () => {
  return (
    <SafeAreaView style={{ backgroundColor: color.white }}>
      <View width="100%" height="100%" backgroundColor={color.white}>
        <View height={120} justifyContent="center" paddingHorizontal={20}>
          <TextInput design="search" />
        </View>
        <View paddingHorizontal={20}>
          <Text fontSize={18} fontFamily="bold">
            검색 기록
          </Text>
        </View>
        <FlatList
          data={history}
          renderItem={(item) => <SearchHistoryItem id={item.id} text={item.text} />}
          contentContainerStyle={{ margin: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;
