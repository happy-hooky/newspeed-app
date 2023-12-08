import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { Image } from '@/components/atoms';

const AppleLogin = () => {
  const [showWebView, setShowWebView] = useState(false);

  const parseQueryString = (url: string): { [key: string]: string } => {
    console.log('Apple Login URL:', url);
    const params: { [key: string]: string } = {};
    const queryString = url.split('?')[1];
    if (!queryString) {
      return params;
    }
    queryString.split('&').forEach((paramString) => {
      const [key, value] = paramString.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
    });
    return params;
  };

  const handleNavigationStateChange = (event: { url: string | URL }) => {
    if (
      typeof event.url === 'string' &&
      event.url.startsWith('https://www.newspeed.store/user/oauth/callback')
    ) {
      console.log('Apple Login Callback URL:', event.url);
      setShowWebView(false);
      const params = parseQueryString(event.url);
      const code = params.code;

      console.log('Apple Login Response:', { code });
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setShowWebView(true)}>
        <Image src="appleSignIn" width={300} height={60} marginVertical={20} resizeMode="contain" />
      </TouchableOpacity>
      {showWebView && (
        <Modal visible={showWebView} onRequestClose={() => setShowWebView(false)}>
          <WebView
            originWhitelist={['*']}
            source={{
              uri: 'https://appleid.apple.com/auth/authorize?response_type=code&client_id=com.newspeed.service&redirect_uri=https://www.newspeed.store/user/oauth/callback/apple',
            }}
            onNavigationStateChange={handleNavigationStateChange}
          />
        </Modal>
      )}
    </>
  );
};

export default AppleLogin;
