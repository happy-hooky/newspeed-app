import { View } from '@/components/atoms';
import { ModalState } from '@/recoil/system';
import { useCallback, useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { useSetRecoilState } from 'recoil';

interface SlideUpModalProps {
  hash: string;
  children: JSX.Element;
}

const SlideUpModal = ({ hash, children }: SlideUpModalProps) => {
  const setModalState = useSetRecoilState(ModalState);
  const [visible, setVisible] = useState(true);

  const onClose = useCallback(() => {
    setVisible(false);
    setModalState((prev) => prev.filter((item) => item.hash !== hash));
  }, [setModalState, hash]);

  return (
    <>
      <View
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        backgroundColor="rgba(0 0 0 / 0.3)"
      />
      <Modal animationType="slide" transparent={true} visible={visible}>
        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={onClose}>
          <View flex={1} flexDirection="row" alignItems="flex-end">
            {children}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default SlideUpModal;
