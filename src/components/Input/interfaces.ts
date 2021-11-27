import { BoxProps } from '@shopify/restyle';
import { TextInputProps, TextInput } from 'react-native';
import { Theme } from '../../themes/institucional';

type InputProps = Partial<{
  placeholder: string;
  icon: string;
  bw?: Custom.BorderWidth;
  h?: Custom.HeightComponent;
}> &
  Partial<BoxProps<Theme>> &
  TextInputProps;

type TextInputRef = HTMLInputElement &
  TextInput & {
    focus(): void;
    blur(): void;
    error(): void;
    success(): void;
    clearStatus(): void;
  };

type InputRef = {
  value: string | undefined;
};

export { InputProps, TextInputRef, InputRef };
