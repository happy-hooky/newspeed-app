import React from 'react';
import { View as StyledView, StyleSheet } from 'react-native';

interface ViewProps {
  children?: React.ReactNode;
  style?: Object;
}

export const View: React.FC<ViewProps> = ({ children, style }) => {
  return (
    <StyledView style={[styles.base, style]}>
      {children}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});