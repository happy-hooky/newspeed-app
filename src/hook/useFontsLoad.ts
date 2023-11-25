import { useFonts } from 'expo-font';
import ASSETS from '../../assets';

const useFontsLoad = () => {
  const [fontsLoaded] = useFonts({
    regular: ASSETS.fontRegular,
    medium: ASSETS.fontMedium,
    bold: ASSETS.fontBold,
  });

  return { fontsLoaded };
};

export default useFontsLoad;
