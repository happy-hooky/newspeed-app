import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View<ViewStyle>`
  ${({ width }) =>
    width && (typeof width === 'number' ? `width: ${width}px;` : `width: ${width.toString()};`)}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor.toString()};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor.toString()};`}
  ${({ margin }) => margin && `margin: ${margin.toString()};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom.toString()}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop.toString()};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft.toString()};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight.toString()};`}
  ${({ paddingVertical }) => paddingVertical && `padding-vertical: ${paddingVertical.toString()};`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal.toString()};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
`;

export default View;
