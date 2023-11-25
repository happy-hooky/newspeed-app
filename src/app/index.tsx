import useAuth from '@/hook/useAuth';
import useFontsLoad from '@/hook/useFontsLoad';
import { Redirect } from 'expo-router';

export default () => {
  useAuth();
  const isFontLoaded = useFontsLoad();

  if (!isFontLoaded) return null;
  if (isFontLoaded) {
    return (
      <>
        <Redirect href={'/(tabs)/main'} />
      </>
    );
  }
};
