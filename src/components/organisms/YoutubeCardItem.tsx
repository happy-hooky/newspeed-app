import { Text, View } from '@/components/atoms';
import { color } from '@/constants';
import { YoutubeContentsResponse } from '@/models/request/YoutubeContentsResponse';
import { Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

interface YoutubeCardItemProps {
  data: YoutubeContentsResponse;
}

const YoutubeCardItem = ({ data }: YoutubeCardItemProps) => {
  return (
    <View width="100%" paddingBottom={20}>
      <Shadow
        distance={1}
        offset={[0, 1]}
        style={{
          flexDirection: 'row',
          width: '100%',
          borderRadius: 12,
        }}
      >
        <View width="100%">
          <View width="100%" height={180}>
            <Image
              source={{ uri: data.youtube.thumnailUrl }}
              style={{
                width: '100%',
                height: '100%',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
          </View>
          <View
            width="100%"
            height={80}
            borderRightColor={color.twilight}
            borderLeftColor={color.twilight}
            borderBottomColor={color.twilight}
            borderRightWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            borderBottomEndRadius={12}
            borderBottomStartRadius={12}
            backgroundColor={color.white}
          >
            <View padding={12} flexDirection="row" gap={12} flex={1} alignItems="center">
              <Image
                source={{ uri: data.host.profileImgUrl }}
                width={36}
                height={36}
                borderRadius={18}
              />
              <View flex={1}>
                <View flex={1}>
                  <Text ellipsizeMode="tail" numberOfLines={2}>
                    {data.youtube.title}
                  </Text>
                </View>
                <View gap={12} flexDirection="row">
                  <Text color={color.goldenGrow} fontSize={11}>
                    {data.host.nickName}
                  </Text>
                  <Text color={color.goldenGrow} fontSize={11}>
                    조회수 {data.youtube.views}
                  </Text>
                  <Text color={color.goldenGrow} fontSize={11}>
                    {data.youtube.todayBefore}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Shadow>
    </View>
  );
};

export default YoutubeCardItem;
