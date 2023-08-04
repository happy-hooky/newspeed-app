import React from 'react';
import { Pressable as StyledPressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PressableProps {
  children?: React.ReactNode;
  onPress?: () => void;
  componentType?: 'apple' | 'kakao' | 'search' | 'profile' | 'default';
}

export const Pressable: React.FC<PressableProps> = ({ children, onPress, componentType = 'default' }) => {
  const getIconName = () => {
    switch(componentType) {
      case 'search':
        return 'ios-search';
      case 'profile':
        return 'ios-person';
      default:
        return null;
    }
  }

  const getComponentStyle = () => {
    switch(componentType) {
      case 'apple':
        return {
          backgroundColor: '#000',
          borderRadius: 5,
          padding: 10,
        };
      case 'kakao':
        return {
          backgroundColor: '#FFEB00',
          borderRadius: 5,
          padding: 10,
        };
      case 'search':
      case 'profile':
        return {
          padding: 10,
        };
      default:
        return {};
    }
  }

  const iconName = getIconName();

  return (
    <StyledPressable style={getComponentStyle()} onPress={onPress}>
      {iconName && <Ionicons name={iconName} size={28} />}
      {children}
    </StyledPressable>
  );
};
