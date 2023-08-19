import { View } from '@/components/atoms';
import { ModalProps } from '@/components/modal';
import { SelectBoxProps } from '@/components/organisms/SelectBox';
import { color } from '@/constants';
import { useModalValue } from '@/util/useModalValue';
import { useRef, useState } from 'react';
import { View as _View, FlatList, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const SelectBoxModal = ({ payload, hash }: ModalProps) => {
  const { deleteModal } = useModalValue(hash);
  const { options, setIsOpen, location } = payload as SelectBoxProps & {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    location: {
      top: number;
      left: number;
    };
  };
  const boxRef = useRef<_View>(null);
  const [width, setWidth] = useState(0);

  const closeModal = () => {
    deleteModal();
    setIsOpen(false);
  };

  return (
    <View
      backgroundColor={'(0, 0, 0, 0)'}
      top={0}
      left={0}
      zIndex={1}
      position="absolute"
      width="100%"
      height="100%"
    >
      <Pressable onPress={closeModal}>
        <View width="100%" height="100%">
          <View
            ref={boxRef}
            onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
            alignItems="flex-end"
            justifyContent="flex-end"
            position="absolute"
            top={location.top + 24 + 8}
            left={location.left - width}
          >
            <Shadow
              distance={4}
              offset={[0, 2]}
              style={{
                borderRadius: 8,
              }}
            >
              <View
                paddingVertical={20}
                paddingHorizontal={20}
                backgroundColor={color.white}
                borderRadius={8}
              >
                <FlatList
                  data={options}
                  renderItem={({ item }) => {
                    return (
                      <Pressable
                        onPress={() => {
                          item.handleSelect();
                          closeModal();
                        }}
                      >
                        {item.element}
                      </Pressable>
                    );
                  }}
                />
              </View>
            </Shadow>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SelectBoxModal;
