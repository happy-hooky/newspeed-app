import { Text, View } from '@/components/atoms';
import SlideUpModal from '@/components/modal/SlideUpModal';
import { ModalBaseProps } from '@/models/ModalBaseProps';

const PlatformModal = ({ hash, payload }: ModalBaseProps) => {
  return (
    <SlideUpModal hash={hash}>
      <View
        height={280}
        flex={1}
        backgroundColor="white"
        borderTopLeftRadius={12}
        borderTopRightRadius={12}
      >
        <Text>123</Text>
      </View>
    </SlideUpModal>
  );
};

export default PlatformModal;
