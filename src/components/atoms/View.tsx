import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View<ViewStyle>`
  ${({ width }) =>
    width && (typeof width === 'number' ? `width: ${width}px;` : `width: ${width.toString()};`)}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor.toString()};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth}px;`}
  ${({ borderRightWidth }) => borderRightWidth && `border-right-width: ${borderRightWidth}px;`}
  ${({ borderLeftWidth }) => borderLeftWidth && `border-left-width: ${borderLeftWidth}px;`}
  ${({ borderTopWidth }) => borderTopWidth && `border-top-width: ${borderTopWidth}px;`}
  ${({ borderBottomWidth }) => borderBottomWidth && `border-bottom-width: ${borderBottomWidth}px;`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor.toString()};`}
  ${({ borderTopColor }) => borderTopColor && `border-top-color: ${borderTopColor.toString()};`}
  ${({ borderBottomColor }) =>
    borderBottomColor && `border-bottom-color: ${borderBottomColor.toString()};`}
  ${({ borderRightColor }) =>
    borderRightColor && `border-right-color: ${borderRightColor.toString()};`}
  ${({ borderLeftColor }) => borderLeftColor && `border-left-color: ${borderLeftColor.toString()};`}
  ${({ margin }) => margin && `margin: ${margin.toString()};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom.toString()}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop.toString()};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft.toString()};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight.toString()};`}
  ${({ paddingVertical }) => paddingVertical && `padding-vertical: ${paddingVertical.toString()};`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal.toString()};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius.toString()};`}
  ${({ borderBottomEndRadius }) =>
    borderBottomEndRadius && `border-bottom-end-radius: ${borderBottomEndRadius.toString()};`}
  ${({ borderBottomStartRadius }) =>
    borderBottomStartRadius && `border-bottom-start-radius: ${borderBottomStartRadius.toString()};`}
  ${({ shadowColor }) => shadowColor && `shadow-color: ${shadowColor.toString()};`}
  ${({ shadowOpacity }) => shadowOpacity && `shadow-Opacity: ${shadowOpacity.toString()};`}
`;

export default View;
