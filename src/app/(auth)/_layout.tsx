import useStorageState from '@/hook/useStorage';
import { Redirect } from 'expo-router';

export default function AuthLayout() {
  const [session, setSession] = useStorageState('session');

  if (!session) return <Redirect href={'/login'} />;
}
