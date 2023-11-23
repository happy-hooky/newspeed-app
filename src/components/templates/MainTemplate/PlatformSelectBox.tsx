import { Image, Text, View } from '@/components/atoms';
import { useModal } from '@/util/useModal';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PlatformSelectBox = () => {
  const { onModal } = useModal();
  const [selectedPlatform, setSelectedPlatform] = useState('YOUTUBE');

  const openPlatformModal = () => {
    onModal({
      type: 'platformModal',
    });
  };

  return (
    <TouchableOpacity onPress={openPlatformModal}>
      <View width={60} flexDirection="row" alignItems="flex-start" justifyContent="center" gap={12}>
        <Image src="youtube" width={28} height={20} />
        <Image src="back" width={16} height={16} transform={[{ rotate: '270deg' }]} />
      </View>
    </TouchableOpacity>
  );
};

export default PlatformSelectBox;
