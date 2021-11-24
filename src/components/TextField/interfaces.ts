import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

type TextFieldProps = {
  variant: 'small' | 'medium';
} & Partial<{
  label: string;
  assistiveText: string;
  placeholder: string;
  status: 'success' | 'error' | undefined;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType: ReturnKeyTypeOptions;
}>;

type TypeVariantHeight = {
  [index: string]: Custom.HeightComponent;
};

export { TextFieldProps, TypeVariantHeight };
