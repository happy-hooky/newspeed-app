import React from 'react';
import { Text as StyledText, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface TextProps {
  children?: React.ReactNode;
  type?: TextType;
}

type TextType = 'title' | 'buttonText' | 'default';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  default: {
    fontSize: 14,
    color: '#000',
  },
});

const getTextStyle = (type: TextType): StyleProp<TextStyle> => {
  switch (type) {
    case 'title':
      return styles.title;
    case 'buttonText':
      return styles.buttonText;
    default:
      return styles.default;
  }
};

export const Text: React.FC<TextProps> = ({ children, type = 'default' }) => {
  return <StyledText style={getTextStyle(type)}>{children}</StyledText>;
};
