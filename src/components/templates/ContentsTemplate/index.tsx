import { Text, View } from '@/components/atoms';
import { YoutubeCardList } from '@/components/organisms';
import PlatformSelectBox from './PlatformSelectBox';
import { Link, useLocalSearchParams } from 'expo-router';
import { TextInput } from '@/components/molecules';
import { color } from '@/constants';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ContentsTemplate = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ backgroundColor: color.white }}>
      <View backgroundColor={color.white} width="100%" paddingTop={12} alignItems="flex-start">
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
        <View paddingHorizontal={12} justifyContent="center" marginBottom={20}>
          <TextInput design="search" value={category} />
        </View>
        <View height={height - insets.top - 160}>
          <YoutubeCardList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContentsTemplate;
