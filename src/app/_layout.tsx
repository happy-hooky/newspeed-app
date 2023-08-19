import Modal from '@/util/Modal';
import { Stack } from 'expo-router';
import { RecoilRoot } from 'recoil';

export default function Layout() {
  return (
    <RecoilRoot>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      />
      <Modal />
    </RecoilRoot>
  );
}
