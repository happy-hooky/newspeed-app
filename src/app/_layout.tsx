import Modal from '@/util/Modal';
import { Stack } from 'expo-router';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Stack
          screenOptions={{
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            animation: 'none',
            headerShown: false,
          }}
        />
        <Modal />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
