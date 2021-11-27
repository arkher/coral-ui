import React, {
  useCallback,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';

import { useTheme } from '@shopify/restyle';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme } from '../../themes';
import Box from '../Box';
import { InputRef, InputProps, TextInputRef } from './interfaces';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    placeholder,
    editable,
    multiline,
    numberOfLines,
    icon,
    maxLength,
    keyboardType,
    autoCapitalize,
    style,
    returnKeyType,
    value,
    onChangeText,
    ...props
  },
  ref,
) => {
  const [isFilled, setIsFilled] = useState(false);
  const inputElementRef = useRef<TextInputRef>(null);

  const { colors } = useTheme<Theme>();

  const handleClear = useCallback(() => {
    inputElementRef.current?.clear();
    setIsFilled(false);
  }, []);

  const handleChange = useCallback(
    (newValue: string) => {
      if (onChangeText) {
        onChangeText(newValue);
      }

      if (inputElementRef.current) {
        inputElementRef.current.value = newValue;
      }

      setIsFilled(!!inputElementRef.current?.value);
    },
    [onChangeText],
  );

  useImperativeHandle(ref, () => ({
    value: inputElementRef.current?.value,
  }));

  return (
    <Box flexDirection="row" alignItems="center" {...props}>
      <TextInput
        testID="Input"
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors['neutral-dark']}
        onChangeText={handleChange}
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        value={value}
        editable={editable}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
        selectionColor={colors['neutral-dark']}
        style={style}
      />

      {icon && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quark">
            <Icon
              name={icon}
              size={24}
              color={isFilled ? colors['primary-base'] : colors['neutral-dark']}
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default forwardRef(Input);
