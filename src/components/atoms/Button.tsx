import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PressableProps {
  children?: React.ReactNode;
  onPress?: () => void;
  componentType?: 'apple' | 'kakao' | 'search' | 'profile' | 'default';
}

const StyledPressable = styled.Pressable`
  padding: 10px;
  border-radius: 5px;

  ${(props) => {
    switch (props.componentType) {
      case 'apple':
        return 'background-color: #000;';
      case 'kakao':
        return 'background-color: #FFEB00;';
      case 'search':
      case 'profile':
        return '';
      default:
        return '';
    }
  }}
`;

export const Pressable: React.FC<PressableProps> = ({
  children,
  onPress,
  componentType = 'default',
}) => {
  const getIconName = () => {
    switch (componentType) {
      case 'search':
        return 'ios-search';
      case 'profile':
        return 'ios-person';
      default:
        return null;
    }
  };

  const iconName = getIconName();

  return (
    <StyledPressable componentType={componentType} onPress={onPress}>
      {iconName && <Ionicons name={iconName} size={28} />}
      {children}
    </StyledPressable>
  );
};
