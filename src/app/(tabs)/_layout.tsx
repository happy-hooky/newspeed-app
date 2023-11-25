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
        tabBarStyle: { height: insets.bottom + 60 },
        tabBarInactiveTintColor: color.gray,
        tabBarActiveTintColor: color.black,
        tabBarLabelStyle: { fontSize: 14, fontFamily: 'regular' },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          tabBarLabel: '홈',
          headerTitle: '메인',
          tabBarIcon: () => <Image src="category" width={30} height={30} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: '검색',
          headerTitle: '검색하기',
          tabBarIcon: () => <Image src="tabSearch" width={32} height={28} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'MY',
          headerTitle: '문의하기',
          tabBarIcon: () => <Image src="user" width={30} height={30} />,
        }}
      />
    </Tabs>
  );
}
