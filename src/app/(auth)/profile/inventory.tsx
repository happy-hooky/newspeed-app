import { InventoryPage } from '@/components/pages';
import { color } from '@/constants';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: '보관함',
          headerShadowVisible: false,
          headerTintColor: color.black,
        }}
      />
      <InventoryPage />
    </>
  );
};
