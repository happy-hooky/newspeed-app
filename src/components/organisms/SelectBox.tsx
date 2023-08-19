import { View, Image } from '@/components/atoms';
import { useModal } from '@/util/useModal';
import { useEffect, useRef, useState } from 'react';
import { Pressable, View as _View } from 'react-native';

export interface SelectBoxProps {
  selectedValue: string;
  options: {
    value: string | number;
    element: React.ReactElement;
    selectedElement?: React.JSX.Element;
    handleSelect: () => void;
  }[];
}

const SelectBox = ({ selectedValue, options }: SelectBoxProps) => {
  const { onModal } = useModal();

  const boxRef = useRef<_View>(null);
  const [isOpen, setIsOpen] = useState(false);
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
        },
      });
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
          justifyContent="space-between"
          height={24}
          width={72}
          gap={20}
        >
          <View alignItems="center" flex={1}>
            {selectedValue
              ? options.filter((option) => option.value === selectedValue)[0].selectedElement
              : options[0].selectedElement}
          </View>
          <Image src="back" width={16} height={16} transform={[{ rotate: '270deg' }]} />
        </View>
      </Pressable>
    </>
  );
};

export default SelectBox;
