import { View } from '@/components/atoms';
import { color } from '@/constants';
import { ModalState } from '@/recoil/atom/system';
import { useEffect, useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { useSetRecoilState } from 'recoil';

interface SlideUpModalProps {
  hash: string;
  children: JSX.Element[];
  height?: number;
}

const SlideUpModal = ({ hash, children, height = 300 }: SlideUpModalProps) => {
  const setModalState = useSetRecoilState(ModalState);
  const [visible, setVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
    if (!visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: height,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, height, slideAnim, fadeAnim]);

  useEffect(() => {
    let timeId: NodeJS.Timeout | undefined = undefined;
    if (!visible) {
      timeId = setTimeout(() => {
        setModalState((prev) => prev.filter((item) => item.hash !== hash));
      }, 300);
    }

    return () => clearTimeout(timeId);
  }, [hash, visible, setModalState]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: 'black',
            opacity: fadeAnim,
          }}
        />
      </TouchableWithoutFeedback>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height,
          bottom: 0,
          left: 0,
          transform: [
            {
              translateY: slideAnim,
            },
          ],
        }}
      >
        <View
          width="100%"
          height="100%"
          borderTopLeftRadius={12}
          borderTopRightRadius={12}
          backgroundColor={color.white}
          padding={40}
        >
          {children}
        </View>
      </Animated.View>
    </>
  );
};

export default SlideUpModal;
