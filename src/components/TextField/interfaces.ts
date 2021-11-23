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

type TextFieldProps = {
  variant: 'small' | 'medium';
} & Partial<{
  label: string;
  assistiveText: string;
  placeholder: string;
  status: 'success' | 'error' | undefined;
  value: string;
  keyboardType: KeyboardTypeOptions;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  returnKeyType: ReturnKeyTypeOptions;
  onChange: ((e: CustomOnChange) => void) | undefined;
}>;

export { TextFieldProps };
