import { TextStyle } from 'react-native';
import { styled } from 'styled-components/native';

const Text = styled.Text<TextStyle>`
  ${({ color }) => color && `color: ${color.toString()};`}
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}
 ${({ marginVertical }) => marginVertical && `margin-vertical: ${marginVertical.toString()};`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin-horizontal: ${marginHorizontal.toString()};`}
  ${({ ellipsizeMode }) => ellipsizeMode && `ellipsize-mode: ${ellipsizeMode};`}
  ${({ numberOfLines }) => numberOfLines && `number-of-lines: ${numberOfLines};`}
`;

export default Text;
