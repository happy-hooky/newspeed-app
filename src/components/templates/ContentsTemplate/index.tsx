import { Text, View } from '@/components/atoms';
import { YoutubeCardList } from '@/components/organisms';
import PlatformSelectBox from './PlatformSelectBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const ContentsTemplate = () => {
  return (
    <SafeAreaView>
      <View width="100%" paddingTop={12} alignItems="flex-start">
        <View
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={20}
          paddingHorizontal={12}
        >
          <View marginTop={4}>
            <Link href={{ pathname: '/(tabs)/main' }}>
              <View flexDirection="row" alignItems="center" gap={4}>
                <Text fontSize={16} fontFamily="medium">
                  Newspeed
                </Text>
              </View>
            </Link>
          </View>
          <PlatformSelectBox />
        </View>
        <YoutubeCardList />
      </View>
    </SafeAreaView>
  );
};

export default ContentsTemplate;
