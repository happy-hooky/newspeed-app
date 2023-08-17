import { ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

const designType = {
  base: css`
    flex: 1;
    align-items: 'center';
    justify-content: 'center';
  `,
};

const View = styled.View<ViewStyle & { design: keyof typeof designType }>``;

export default View;
