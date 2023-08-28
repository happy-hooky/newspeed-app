import * as React from 'react';
import { Image, Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { TextInput } from '@/components/molecules';
import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Keyboard, Pressable } from 'react-native';
import { PopularSearchList, SearchHistoryList } from '@/components/organisms';

const SearchPage = () => {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();

  const headerHeight = getDefaultHeaderHeight(frame, false, insets.top);

  return (
    <Pressable onPress={() => Keyboard.dismiss()}>
      <View padding={20} backgroundColor={color.peach}>
        <View height={headerHeight} paddingTop={insets.top}>
          <Pressable onPress={() => router.back()}>
            <Image src="back" width={24} height={24} />
          </Pressable>
        </View>
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
    </Pressable>
  );
};

export default SearchPage;
