import { ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';
import { color } from '@/constants';

const sizeType = {
  basic: 24,
  big: 52,
};

const designType = {
  primary: css`
    background-color: ${color.primary};
    border-radius: 4px;
  `,
  primaryBorder: css`
    border-width: 1px;
    border-color: ${color.primary};
    border-radius: 4px;
  `,
};

const Button = styled.Pressable<
  ViewStyle & { size: keyof typeof sizeType; design: keyof typeof designType }
>`
  ${({ design }) => design && designType[`${design}`]}
  ${({ size }) => size && `height: ${sizeType[`${size}`]}px;`}

  ${({ width }) =>
    width && (typeof width === 'number' ? `width: ${width}px;` : `width: ${width.toString()};`)}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor.toString()};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor.toString()};`}
  ${({ margin }) => margin && `margin: ${margin.toString()};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom.toString()}px;`}
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop.toString()};`}
  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft.toString()};`}
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight.toString()};`}

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Button;
