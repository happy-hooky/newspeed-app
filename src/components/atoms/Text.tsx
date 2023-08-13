import { TextStyle } from 'react-native';
import { styled } from 'styled-components/native';

const Text = styled.Text<TextStyle>`
  ${({ color }) => color && `color: ${color.toString()};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
`;

export default Text;
