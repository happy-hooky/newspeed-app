import { ImageStyle, Image as _Image } from 'react-native';
import image from '../../../assets/image';

const ImageSource = {
  back: image['back'],
  search: image['search'],
  user: image['user'],
  logo: image['logo'],
  youtube: image['youtube'],
  instagram: image['instagram'],
  delete: image['delete'],
  star: image['star'],
  starFill: image['starFill'],
  userMockImage: image['userMockImage'],
};

interface ImageProps extends ImageStyle {
  src: keyof typeof ImageSource;
}

const Image = ({ src, ...style }: ImageProps) => {
  return <_Image source={ImageSource[src]} style={style} />;
};

export default Image;
