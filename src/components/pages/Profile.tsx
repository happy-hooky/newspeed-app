import React from 'react';
import { Button, Text, View, Image } from '@/components/atoms';
import { color } from '@/constants';
import { Link } from 'expo-router';

const ProfilePage = () => {
  return (
    <View flex={1} width="100%">
      <View>
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
        <View backgroundColor={color.peach} padding={20} height="100%" alignItems="center">
          <Link href="/mypage/inventory" asChild>
            <Button>
              <View
                width="100%"
                height={60}
                alignItems="center"
                paddingLeft={20}
                paddingRight={20}
                justifyContent="space-between"
                flexDirection="row"
                borderRadius={8}
                marginBottom={20}
                backgroundColor={color.white}
              >
                <Text fontSize={16}>🌟보관함</Text>
                <Image src="back" width={16} height={16} transform={[{ rotate: '180deg' }]} />
              </View>
            </Button>
          </Link>
          <Link href="/mypage/inquiry" asChild>
            <Button>
              <View
                width="100%"
                height={60}
                alignItems="center"
                paddingLeft={20}
                paddingRight={20}
                justifyContent="space-between"
                flexDirection="row"
                marginBottom={20}
                borderRadius={8}
                backgroundColor={color.white}
              >
                <Text fontSize={16}>💡문의하기</Text>
                <Image src="back" width={16} height={16} transform={[{ rotate: '180deg' }]} />
              </View>
            </Button>
          </Link>
          <Link href="/mypage/alarm" asChild>
            <Button>
              <View
                width="100%"
                height={60}
                alignItems="center"
                paddingLeft={20}
                paddingRight={20}
                justifyContent="space-between"
                flexDirection="row"
                marginBottom={20}
                borderRadius={8}
                backgroundColor={color.white}
              >
                <Text fontSize={16}>✉️알림설정</Text>
                <Image src="back" width={16} height={16} transform={[{ rotate: '180deg' }]} />
              </View>
            </Button>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;
