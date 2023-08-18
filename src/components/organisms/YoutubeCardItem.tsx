import { View } from '@/components/atoms';
import { color } from '@/constants';
import { Shadow } from 'react-native-shadow-2';

const YoutubeCardItem = () => {
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
          <View
            borderTopLeftRadius={12}
            borderTopRightRadius={12}
            width="100%"
            height={180}
            backgroundColor={color.cheese}
          ></View>
          <View
            width="100%"
            height={60}
            borderRightColor={color.twilight}
            borderLeftColor={color.twilight}
            borderBottomColor={color.twilight}
            borderRightWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            borderBottomEndRadius={12}
            borderBottomStartRadius={12}
            backgroundColor={color.white}
          ></View>
        </View>
      </Shadow>
    </View>
  );
};

export default YoutubeCardItem;
