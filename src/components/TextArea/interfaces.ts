import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

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
}>;

export { TextAreaProps };
