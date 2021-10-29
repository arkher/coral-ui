import React, { useCallback, useRef, useState } from 'react';
import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';

import { TextInput, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes/default';
import Box from '../Box';
import { InputProps, InputRef } from './interfaces';

const TextField: React.FC<InputProps> = ({
  placeholder,
  variant,
  editable,
  multiline,
  numberOfLines,
  icon,
  ...props
}) => {
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
        numberOfLines={numberOfLines}
        selectionColor={colors.neutralDark}
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
  TextField,
);
