import { Text, View } from '@/components/atoms';
import SlideUpModal from '@/components/modal/SlideUpModal';
import { ModalBaseProps } from '@/models/ModalBaseProps';

const PlatformModal = ({ hash, payload }: ModalBaseProps) => {
  return (
    <SlideUpModal hash={hash}>
      <Text>1231</Text>
      <Text>1231</Text>
      <Text>1231</Text>
      <Text>1231</Text>
    </SlideUpModal>
  );
};

export default PlatformModal;
