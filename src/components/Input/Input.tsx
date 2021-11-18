import React, {
  useCallback,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';
import { TextInput, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes/default';
import Box from '../Box';
import { InputProps, InputRef } from './interfaces';

const Input: React.FC<InputProps> = (
  {
    placeholder,
    variant,
    editable,
    multiline,
    numberOfLines,
    icon,
    maxLength,
    keyboardType,
    autoCapitalize,
    ...props
  },
  ref,
) => {
  const { colors, textVariants } = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputElementRef = useRef<InputRef>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputElementRef.current?.value);
  }, []);

  const handleClear = useCallback(() => {
    inputElementRef.current?.clear();
    setIsFilled(false);
  }, []);

  useImperativeHandle(ref, () => undefined);

  return (
    <Box
      bw="thin"
      borderRadius="sm"
      flexDirection="row"
      alignItems="center"
      h={variant}
      {...props}
    >
      <TextInput
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors.neutralDark}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        editable={editable}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
        selectionColor={colors.neutralDark}
        onChangeText={value => {
          if (maxLength && value?.length <= maxLength) {
            // eslint-disable-next-line no-param-reassign
            ref.current.value = value;
          }
        }}
        style={{
          flex: 1,
          fontFamily: textVariants.regular.fontFamily,
          textAlignVertical: 'top',
        }}
      />

      {icon && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quarck">
            <Icon
              name={icon}
              size={24}
              color={
                isFocused || isFilled ? colors.primaryBase : colors.neutralDark
              }
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default createRestyleComponent<InputProps, Theme>(
  [spacing, borderWidth],
  forwardRef(Input as ForwardRefRenderFunction<InputProps>),
);
