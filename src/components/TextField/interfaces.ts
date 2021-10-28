import { BoxProps } from '@shopify/restyle';
import { TextInput } from 'react-native';
import { Theme } from '../../themes/default';

type InputProps = {
  variant: 'small' | 'medium';
} & Partial<{
  label: string;
  assistiveText: string;
  placeholder: string;
  bw: CustomBorderWidth;
  p: CustomSpacing;
  status: 'success' | 'error' | undefined;
}> &
  Partial<BoxProps<Theme>>;

type InputRef = HTMLInputElement & TextInput;

export { InputProps, InputRef };
