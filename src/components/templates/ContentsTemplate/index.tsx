import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { CategoryLabelList, YoutubeCardList } from '@/components/organisms';
import PlatformSelectBox from './PlatformSelectBox';

const ContentsTemplate = () => {
  return (
    <View paddingHorizontal={12} paddingTop={12} alignItems="flex-start">
      <View flexDirection="row" alignItems="center" gap={20}>
        <View flex={1} borderRightColor={color.twilight} borderRightWidth={2} paddingRight={20}>
          <CategoryLabelList />
        </View>
        <PlatformSelectBox />
      </View>
      <Text marginVertical={12}>카테고리를 등록해 관심 분야의 최신 피드를 받아보세요 </Text>
      <YoutubeCardList />
    </View>
  );
};

export default ContentsTemplate;
