import { View, Image } from '@/components/atoms';
import { useModal } from '@/util/useModal';
import { useEffect, useRef, useState } from 'react';
import { Pressable, View as _View } from 'react-native';

export interface SelectBoxProps {
  options: {
    value: string | number;
    element: React.ReactElement;
    selectedElement?: React.JSX.Element;
  }[];
}

const SelectBox = ({ options }: SelectBoxProps) => {
  const boxRef = useRef<_View>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { onModal, closeModal } = useModal();
  const [location, setLocation] = useState({
    top: 0,
    left: 0,
  });

  const getBoxMeasure = () => {
    if (boxRef && boxRef.current) {
      boxRef?.current.measureInWindow((x, y, width) => {
        setLocation({ top: y, left: x + width });
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      onModal({
        type: 'selectBoxModal',
        payload: {
          options: options,
          location,
          setIsOpen,
          closeModal,
        },
      });
    } else {
      closeModal();
    }
  }, [isOpen]);

  return (
    <>
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <View
          ref={boxRef}
          onLayout={getBoxMeasure}
          flexDirection="row"
          alignItems="flex-start"
          gap={20}
          height={24}
        >
          {options[0].selectedElement}
          <Image src="back" width={16} height={16} transform={[{ rotate: '270deg' }]} />
        </View>
      </Pressable>
    </>
  );
};

export default SelectBox;
