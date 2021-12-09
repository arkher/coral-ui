import { BoxProps } from '@shopify/restyle';
import { TextInputProps, TextInput } from 'react-native';
import { TextInputMaskOptionProp } from 'react-native-masked-text';
import { Theme } from '../../themes/institucional';

export type TextInputMaskType =
  | 'credit-card'
  | 'cpf'
  | 'cnpj'
  | 'zip-code'
  | 'only-numbers'
  | 'money'
  | 'cel-phone'
  | 'date'
  | 'datetime';

export type OptionsPerType = {
  date: TextInputMaskOptionProp;
  money: TextInputMaskOptionProp;
};

type InputProps = Partial<{
  placeholder: string;
  icon: string;
  bw?: Custom.BorderWidth;
  h?: Custom.HeightComponent;
  type?: TextInputMaskType;
  options?: TextInputMaskOptionProp;
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
