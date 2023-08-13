import { ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

const designType = {
  base: css`
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  `,
};
const View = styled.View<ViewStyle & { design: keyof typeof designType }>``;

export default View;
