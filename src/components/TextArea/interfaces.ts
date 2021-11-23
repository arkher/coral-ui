import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputChangeEventData,
} from 'react-native';
import { InputFowardEvents } from '../Input/interfaces';

type CustomOnChange = NativeSyntheticEvent<TextInputChangeEventData> & {
  current: InputFowardEvents | null;
};

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
  onChange: ((e: CustomOnChange) => void) | undefined;
}>;

export { TextAreaProps };
