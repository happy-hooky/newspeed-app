import {
  TextStyle,
  TextInput as _TextInput,
  TextInputProps as _TextInputProps,
} from 'react-native';
import styled, { css } from 'styled-components/native';
import { color } from '@/constants';
import { Image } from '@/components/atoms';

const designType = {
  search: css`
    padding-left: 16px;
    padding-right: 16px;
    background-color: ${color.whiteSmoke};
    width: 100%;
    height: 44px;
    border-radius: 4px;
    font-size: 14px;
  `,
};

const StyleTextInput = styled.View<TextStyle & { design: keyof typeof designType }>`
  ${({ design }) => design && designType[design]}
`;

interface TextInputProps {
  design: keyof typeof designType;
}

const TextInput = ({ design, ...textinputProps }: TextInputProps & _TextInputProps) => {
  return (
    <StyleTextInput
      design={design}
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={16}
    >
      {design === 'search' && <Image src="search" width={16} height={16} />}
      <_TextInput
        style={{ flex: 1, fontSize: 16 }}
        selectionColor={color.black}
        {...textinputProps}
      />
    </StyleTextInput>
  );
};

export default TextInput;
