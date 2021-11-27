/* eslint-disable react/destructuring-assignment */
import React, { useState, forwardRef, useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

import Text from '../Text';
import Input from '../Input';
import Box from '../Box';
import { ColorOptions, TextAreaProps, TypeVariantHeight } from './interfaces';
import { InputRef } from '../Input/interfaces';

const TextArea: React.ForwardRefRenderFunction<InputRef, TextAreaProps> = (
  {
    label,
    placeholder,
    variant,
    status,
    maxLength,
    assistiveText,
    autoCapitalize,
    keyboardType,
    value,
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [countChar, setCountChar] = useState(0);
  const { colors, textVariants } = useTheme<Theme>();

  const statusKeyPair = {
    error: colors['feedback-error-base'],
    success: colors['feedback-success-base'],
    default: colors['neutral-dark'],
  };

  const variantHeight: TypeVariantHeight = {
    small: 'lg',
    medium: 'xl',
  };

  const statusBorderColor: ColorOptions = {
    error: 'feedback-error-base',
    success: 'feedback-success-base',
    default: 'neutral-dark',
  };

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="md" fontWeight="700" color="neutral-darkest">
          {label}
        </Text>
      )}

      <Input
        ref={ref}
        placeholder={placeholder}
        h={variantHeight[variant]}
        bw="sm"
        borderColor={
          isFocused ? 'primary-base' : statusBorderColor[status || 'default']
        }
        borderRadius="sm"
        multiline
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        numberOfLines={7}
        my="quark"
        px="xs"
        py="nano"
        value={value}
        onChangeText={newValue => setCountChar(newValue.length)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          flex: 1,
          fontFamily: textVariants?.regular?.fontFamily,
          textAlignVertical: 'top',
        }}
      />

      <Box
        flexDirection="row"
        justifyContent={assistiveText ? 'space-between' : 'flex-end'}
      >
        {!!assistiveText && (
          <Box flexDirection="row" alignItems="center">
            {status === 'success' && (
              <Icon
                name="check-circle"
                size={16}
                color={statusKeyPair[status || 'default']}
              />
            )}
            {status === 'error' && (
              <Icon
                name="alert-circle"
                size={16}
                color={statusKeyPair[status || 'default']}
              />
            )}
            <Text ml="quark" fs="sm" color="neutral-darkest">
              {assistiveText}
            </Text>
          </Box>
        )}
        {!!maxLength && (
          <Text color="neutral-dark">
            {countChar}/{maxLength}
          </Text>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default forwardRef(TextArea);
