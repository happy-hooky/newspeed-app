import { TextStyle } from 'react-native';
import styled, { css } from 'styled-components/native';
import { color } from '@/constants';

const designType = {
  search: css`
    padding-horizontal: 16px;
    background-color: ${color.white};
    width: 100%;
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
  `,
};

const TextInput = styled.TextInput<TextStyle & { design: keyof typeof designType }>`
  ${({ design }) => design && designType[design]}
`;

export default TextInput;
