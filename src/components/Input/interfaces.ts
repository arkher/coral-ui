import { BoxProps } from '@shopify/restyle';
import { TextInputProps, TextInput } from 'react-native';
import { Theme } from '../../themes/default';

type InputProps = {
  variant: CustomHeightComponent;
} & Partial<{
  placeholder: string;
  icon: string;
  bw: CustomBorderWidth;
  p: CustomSpacing;
}> &
  Partial<BoxProps<Theme>> &
  TextInputProps;

type InputRef = HTMLInputElement &
  TextInput & {
    focus(): void;
    blur(): void;
    error(): void;
    success(): void;
    clearStatus(): void;
  };

export { InputProps, InputRef };
