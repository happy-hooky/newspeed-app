import React from 'react';
import { Text, View, Image } from '@/components/atoms';
import { color } from '@/constants';

const UserProfile = () => {
  return (
    <View backgroundColor={color.white} padding={50} alignItems="center">
      <View
        alignItems="center"
        justifyContent="center"
        borderRadius={70}
        borderWidth={2}
        borderColor={color.cheese}
        width={120}
        height={120}
      >
        <Image src="userMockImage" borderRadius={70} width={110} height={110} />
      </View>
      <View alignItems="center" top={10}>
        <Text fontSize={22} color={color.black}>
          imzeze
        </Text>
        <Text fontSize={12} color={color.goldenGrow}>
          jihyekim019@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
