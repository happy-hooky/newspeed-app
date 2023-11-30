import { Button, Image, Text, View } from '@/components/atoms';

const KaKaoLogin = () => {
  return (
    <Button>
      <View
        width={300}
        height={50}
        backgroundColor="#FEE500"
        borderRadius={7}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal={14}
      >
        <Image src="kakaoLogo" width={22} height={22} />
        <View flex={1} justifyContent="center" alignItems="center">
          <Text color="rgba(0, 0, 0, 0.85)" fontSize={21} fontFamily="medium">
            카카오 로그인
          </Text>
        </View>
      </View>
    </Button>
  );
};

export default KaKaoLogin;
