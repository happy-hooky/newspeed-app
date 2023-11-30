import { loadAsync } from 'expo-font';
import ASSETS from '../../assets';
import { useEffect, useMemo, useState } from 'react';

const useFontsLoad = () => {
  const [staticFontLoaded, setStaticFontLoaded] = useState(false);
  const staticFonts = useMemo(() => {
    return {
      regular: ASSETS.fontRegular,
      medium: ASSETS.fontMedium,
      bold: ASSETS.fontBold,
    };
  }, []);

  useEffect(() => {
    loadAsync(staticFonts)
      .then(() => setStaticFontLoaded(true))
      .catch((err) => console.error(err));
  }, [staticFonts]);

  return { staticFontLoaded, staticFonts };
};

export default useFontsLoad;
