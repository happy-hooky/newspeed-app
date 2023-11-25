import * as React from 'react';
import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { TextInput } from '@/components/molecules';
import { PopularSearchList, SearchHistoryList } from '@/components/organisms';

const SearchPage = () => {
  return (
    <View>
      <View padding={20} backgroundColor={color.peach}>
        <TextInput design="search" />
        <View marginTop={28}>
          <Text>검색 기록</Text>
          <SearchHistoryList />
        </View>
      </View>
      <View
        paddingTop={32}
        paddingHorizontal={20}
        overflow="hidden"
        backgroundColor={color.white}
        height="100%"
      >
        <Text>추천 검색어</Text>
        <PopularSearchList />
      </View>
    </View>
  );
};

export default SearchPage;
