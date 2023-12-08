import React from 'react';
import { Button, Image, Text, View } from '@/components/atoms';
import { WebView } from 'react-native-webview';
import { Modal } from 'react-native';
import { useState } from 'react';
import axios from 'axios';

const REST_API_KEY = '9e94665b02b6434b5b51eab80cd1b5cd';
const REDIRECT_URI = 'https://www.newspeed.store/login';

const KaKaoLogin = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    setModalVisible(true);
  };

  const handleWebViewNavigationStateChange = (newNavState: { url: string }) => {
    const { url } = newNavState;
    if (!url.includes(REDIRECT_URI)) return;

    const code = url.split('code=')[1];
    if (code) {
      setModalVisible(false);
      void requestToken(code);
    }
  };

  const requestToken = async (code: string) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://kauth.kakao.com/oauth/token',
        params: {
          grant_type: 'authorization_code',
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code,
        },
      });
      const AccessToken = (response as { data: { access_token: string } }).data.access_token;
      console.log(AccessToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button onPress={handleLogin}>
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <WebView
          source={{
            uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
          cacheMode={'LOAD_NO_CACHE'}
          cacheEnabled={false}
          incognito={true}
        />
      </Modal>
    </View>
  );
};

export default KaKaoLogin;
