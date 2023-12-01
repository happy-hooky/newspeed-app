import { Image } from '@/components/atoms';
import { color } from '@/constants';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        tabBarStyle: { height: insets.bottom + 60, backgroundColor: color.midNight },
        tabBarInactiveTintColor: color.gray,
        tabBarActiveTintColor: color.white,
        tabBarLabelStyle: { fontSize: 14, fontFamily: 'medium' },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          tabBarLabel: '홈',
          headerTitle: '',
          tabBarIcon: () => <Image src="category" width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: '검색',
          headerTitle: '검색하기',
          tabBarIcon: () => <Image src="searchTab" width={24} height={30} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'MY',
          headerTitle: '문의하기',
          tabBarIcon: () => <Image src="user" width={24} height={24} />,
        }}
      />
    </Tabs>
  );
}
