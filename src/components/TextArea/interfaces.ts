import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import { Theme } from '../../themes/institucional';

type TextAreaProps = {
  variant: 'small' | 'medium';
} & Partial<{
  label: string;
  placeholder: string;
  status: 'success' | 'error' | undefined;
  maxLength: number;
  assistiveText: string;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType: ReturnKeyTypeOptions;
  value: string;
}>;

type TypeVariantHeight = {
  [index: string]: Custom.HeightComponent;
};

type ColorOptions = {
  [index: string]: keyof Theme['colors'];
};

export { TextAreaProps, TypeVariantHeight, ColorOptions };
