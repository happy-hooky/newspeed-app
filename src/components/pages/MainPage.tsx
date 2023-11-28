import { Button, Image, Text, View } from '@/components/atoms';
import CategoryItem from '@/components/organisms/CategoryItem';
import { color } from '@/constants';
import { FlatList, SafeAreaView } from 'react-native';

const MainPage = () => {
  const categories = [
    {
      id: 1,
      category: '별',
    },
    {
      id: 2,
      category: '구구루루',
    },
    {
      id: 3,
      category: '박효신',
    },
    {
      id: 4,
      category: '플랫타업비트',
    },
    {
      id: 5,
      category: '쿠쿠다스',
    },
  ];

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: color.white }}>
        <View padding={8} flexDirection="row" alignItems="flex-end">
          <Image src="logo" width={32} height={32} />
          <Text fontSize={20} fontFamily="bold" color="rgba(227, 171, 38, 1)">
            Newspeed
          </Text>
        </View>
        <View padding={12} marginTop={40} backgroundColor={color.white} flex={1}>
          <Text marginBottom={20} fontSize={28} fontFamily="bold" lineHeight={40}>
            관심사를{'\n'}선택해주세요.
          </Text>
          <FlatList data={categories} renderItem={CategoryItem} />
          <Button>
            <View width="100%" height={56} justifyContent="center" alignItems="center">
              <Text fontSize={16}>관심사 등록하기</Text>
            </View>
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MainPage;
