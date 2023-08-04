import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/components/pages/Login';
import Home from '../src/components/pages/Home';
import SignIn from '../src/components/pages/SignIn';
import Search from '../src/components/pages/Search';
import Profile from '../src/components/pages/Profile';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignIn: undefined;
  Search: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppLayout = () => {
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Search" component={Search}  />
        <Stack.Screen name="Profile" component={Profile}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppLayout;
