import useFontsLoad from '@/hook/useFontsLoad';
import { useFonts } from 'expo-font';
import { Redirect } from 'expo-router';

export default () => {
  const { staticFontLoaded, staticFonts } = useFontsLoad();
  const [isFontLoaded] = useFonts(staticFonts);

  if (!staticFontLoaded || !isFontLoaded) return null;
  if (staticFontLoaded && isFontLoaded) return <Redirect href={'/(tabs)/main'} />;
};
