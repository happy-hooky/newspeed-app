import Modal from '@/util/Modal';
import { Stack } from 'expo-router';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import useAuth from '@/util/useAuth';

export default function Layout() {
  const queryClient = new QueryClient();
  useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Stack
          screenOptions={{
            headerBackTitleVisible: false,
            headerShadowVisible: false,
            animation: 'none',
          }}
        />
        <Modal />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
