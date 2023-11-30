import { View as _View, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

const View = styled(_View)<ViewStyle>`
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
  ${({ margin }) => margin && `margin: ${margin.toString()}px;`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom.toString()}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop.toString()}px;`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft.toString()}px;`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight.toString()}px;`}
  ${({ paddingVertical }) =>
    paddingVertical && `padding-vertical: ${paddingVertical.toString()}px;`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal.toString()}px;`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius.toString()}px;`}
  ${({ borderBottomEndRadius }) =>
    borderBottomEndRadius && `border-bottom-end-radius: ${borderBottomEndRadius.toString()}px;`}
  ${({ borderBottomStartRadius }) =>
    borderBottomStartRadius &&
    `border-bottom-start-radius: ${borderBottomStartRadius.toString()}px;`}
  ${({ shadowColor }) => shadowColor && `shadow-color: ${shadowColor.toString()};`}
  ${({ shadowOpacity }) => shadowOpacity && `shadow-opacity: ${shadowOpacity.toString()};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ opacity }) => typeof opacity === 'number' && `opacity: ${opacity};`}
`;

export default View;
