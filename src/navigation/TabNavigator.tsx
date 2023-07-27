import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import Home from '../components/pages/Home';
import Search from '../components/pages/Search';
import Favorite from '../components/pages/Favorite';
import MyPage from '../components/pages/MyPage';

const Tab = createBottomTabNavigator();

type TabNames = '메인' | '검색' | '즐겨찾기' | '마이페이지';

const ICONS: Record<TabNames, string> = {
  '메인': 'home',
  '검색': 'search',
  '즐겨찾기': 'heart',
  '마이페이지': 'person',
};

function TabNavigator() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = `${ICONS[route.name as TabNames]}${focused ? '' : '-outline'}`;

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="메인" component={Home} />
  <Tab.Screen name="검색" component={Search} />
  <Tab.Screen name="즐겨찾기" component={Favorite} />
  <Tab.Screen name="마이페이지" component={MyPage} />
</Tab.Navigator>
  );
}

export default TabNavigator;
