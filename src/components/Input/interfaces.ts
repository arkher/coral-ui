import { BoxProps } from '@shopify/restyle';
import { TextInputProps, TextInput } from 'react-native';
import { Theme } from '../../themes/institucional';

type InputProps = {
  variant: Custom.HeightComponent;
} & Partial<{
  placeholder: string;
  icon: string;
  bw: Custom.BorderWidth;
  p: Custom.Spacing;
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

type InputFowardEvents = {
  value: string;
  focus: () => void;
  blur: () => void;
  error: () => void;
  success: () => void;
  clear: () => void;
};

export { InputProps, InputRef, InputFowardEvents };
