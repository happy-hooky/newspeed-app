import { ImageStyle, Image as _Image } from 'react-native';
import ASSETS from '../../../assets';
interface ImageProps extends ImageStyle {
  src: keyof typeof ASSETS;
}

const Image = ({ src, ...style }: ImageProps) => {
  return <_Image source={ASSETS[src]} style={style} />;
};

export default Image;
