import React, { useCallback, useRef, useState } from 'react';
import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';

import {
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes/default';
import Text from '../Text';
import Box from '../Box';
import { InputProps, InputRef } from './interfaces';

const TextField: React.FC<InputProps> = ({
  label,
  placeholder,
  variant,
  assistiveText,
  status,
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

  const getBorderStatusColor = (): CustomColors => {
    switch (status) {
      case 'error':
        return 'feedbackErrorBase';
      case 'success':
        return 'feedbackSuccessBase';
      default:
        return 'neutralDark';
    }
  };

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="xxxs" fontWeight="700" color="neutralDarkest">
          {label}
        </Text>
      )}
      <Box
        bw="thin"
        borderWidth={2}
        borderColor={isFocused ? 'primaryBase' : getBorderStatusColor()}
        p="nano"
        my="quarck"
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
          style={{
            flex: 1,
            fontFamily: textVariants.regular.fontFamily,
          }}
        />
        <TouchableWithoutFeedback onPress={handleClear}>
          <Icon
            name="close"
            size={24}
            color={
              isFocused || isFilled
                ? getBorderStatusColor()
                : colors.neutralDark
            }
          />
        </TouchableWithoutFeedback>
      </Box>
      {!!assistiveText && (
        <Box flexDirection="row">
          <Icon
            name={
              status === 'success'
                ? 'check-circle-outline'
                : 'information-outline'
            }
            color={colors.neutralDark}
            size={16}
          />
          <Text mx="quarck" color="neutralDark">
            {assistiveText}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default createRestyleComponent<InputProps, Theme>(
  [spacing, borderWidth],
  TextField,
);
