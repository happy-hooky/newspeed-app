import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable } from '../atoms/Pressable';
import { Text } from '../atoms/Text';
import { View } from '../atoms/View';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <View style='container'>
        <Pressable componentType='apple' onPress={() => navigation.navigate('SignIn', { loginType: 'apple' })} >
            <Text type='buttonText'>Apple Login</Text>
        </Pressable>
        <Pressable componentType='kakao' onPress={() => navigation.navigate('SignIn', { loginType: 'kakao' })} >
            <Text type='buttonText'>Kakao Login</Text>
        </Pressable>
    </View>
  );
};

export default LoginPage;
