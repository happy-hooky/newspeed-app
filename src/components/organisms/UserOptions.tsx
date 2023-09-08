import React from 'react';
import { Button, Text, View, Image } from '@/components/atoms';
import { color } from '@/constants';
import { Href, Link } from 'expo-router';

type OptionItemProps = {
  link: Href<string>;
  text: string;
  icon: string;
};

const OptionItem = ({ link, text, icon }: OptionItemProps) => (
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
    <Link href={link} asChild>
      <Button>
        <Text fontSize={16}>
          {icon} {text}
        </Text>
      </Button>
    </Link>
    <Image src="back" width={16} height={16} transform={[{ rotate: '180deg' }]} />
  </View>
);

const UserOptions = () => {
  return (
    <View backgroundColor={color.peach} padding={20} height="100%" alignItems="center">
      <OptionItem link="/mypage/inventory" text="보관함" icon="🌟" />
      <OptionItem link="/mypage/inquiry" text="문의하기" icon="💡" />
      <OptionItem link="/mypage/alarm" text="알림설정" icon="✉️" />
    </View>
  );
};

export default UserOptions;
