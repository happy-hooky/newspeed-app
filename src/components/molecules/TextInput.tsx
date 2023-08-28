import { TextStyle } from 'react-native';
import styled, { css } from 'styled-components/native';
import { color } from '@/constants';
import { Text, View } from '@/components/atoms';

const designType = {
  search: css`
    padding-horizontal: 16px;
    background-color: ${color.white};
    width: 100%;
    height: 32px;
    border-radius: 16px;
    font-size: 14px;
    border-width: 2px;
    border-color: ${color.papaya};
  `,
};

const StyleTextInput = styled.TextInput<TextStyle & { design: keyof typeof designType }>`
  ${({ design }) => design && designType[design]}
`;

const TextInput = ({ design }: { design: keyof typeof designType }) => {
  return (
    <StyleTextInput design={design} flexDirection="row" justifyContent="space-between">
      <View>
        <Text>prefix</Text>
      </View>
      <View>
        <Text>suffix</Text>
      </View>
    </StyleTextInput>
  );
};

export default TextInput;
