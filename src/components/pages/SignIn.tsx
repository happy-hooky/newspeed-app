import React from 'react';
import { Pressable } from '../atoms/Pressable';
import { Text } from '../atoms/Text';
import { View } from '../atoms/View';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  SignInPage: { loginType: 'apple' | 'kakao' };
  Home:undefined;
};

type SignInPageRouteProp = RouteProp<RootStackParamList, 'SignInPage'>;

const SignInPage = () => {
  const navigation = useNavigation();
  const route = useRoute<SignInPageRouteProp>();

  const { loginType } = route.params;

  return (
    <View>
        <Pressable componentType='kakao' onPress={() => navigation.navigate('Home')} >
            <Text>Sign In</Text>
        </Pressable>
    </View>
  );
};

export default SignInPage;
