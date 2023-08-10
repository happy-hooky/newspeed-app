import React from 'react';
import { TextInput as StyledInput, StyleSheet } from 'react-native';

interface TextInputProps {
  value?: string;
  style?: Object;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  style,
  placeholder,
  onChangeText,
}) => {
  return (
    <StyledInput
      style={[styles.base, style]}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});
