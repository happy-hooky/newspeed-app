import React from 'react';
import { Text, View, Image } from '@/components/atoms';
import { color } from '@/constants';
import { CategoryLabelList, SelectBox, YoutubeCardList } from '@/components/organisms';

const MainPage = () => {
  return (
    <View paddingHorizontal={12} paddingTop={12} alignItems="flex-start">
      <View flexDirection="row" alignItems="center" gap={20}>
        <View flex={1} borderRightColor={color.twilight} borderRightWidth={2} paddingRight={20}>
          <CategoryLabelList />
        </View>
        <SelectBox
          options={[
            {
              value: 'youtube',
              selectedElement: <Image src="youtube" width={28} height={20} />,
              element: (
                <View flexDirection="row" gap={12} alignItems="flex-start">
                  <Image src="youtube" width={28} height={20} marginBottom={12} />
                  <Text>Youtube</Text>
                </View>
              ),
            },
            {
              value: 'insta',
              selectedElement: <Image src="instagram" width={20} height={20} />,
              element: (
                <View flexDirection="row" gap={12} alignItems="flex-start">
                  <Image src="instagram" width={20} height={20} />
                  <Text>Instagram</Text>
                </View>
              ),
            },
          ]}
        />
      </View>
      <Text marginVertical={12}>카테고리를 등록해 관심 분야의 최신 피드를 받아보세요 </Text>
      <YoutubeCardList />
    </View>
  );
};

export default MainPage;
