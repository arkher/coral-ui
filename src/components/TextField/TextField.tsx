import React, { forwardRef, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

import Text from '../Text';
import Box from '../Box';
import Input from '../Input';
import { ColorOptions, TextFieldProps, TypeVariantHeight } from './interfaces';
import { InputRef } from '../Input/interfaces';

const TextField: React.ForwardRefRenderFunction<InputRef, TextFieldProps> = (
  {
    label,
    placeholder,
    variant,
    assistiveText,
    status,
    keyboardType,
    autoCapitalize,
    returnKeyType,
    value,
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const { colors } = useTheme<Theme>();

  const statusKeyPair = {
    error: colors['feedback-error-base'],
    success: colors['feedback-success-base'],
    default: colors['neutral-dark'],
  };

  const statusBorderColor: ColorOptions = {
    error: 'feedback-error-base',
    success: 'feedback-success-base',
    default: 'neutral-dark',
  };

  const variantHeight: TypeVariantHeight = {
    small: 'xs',
    medium: 'sm',
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
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        borderColor={
          isFocused ? 'primary-base' : statusBorderColor[status || 'default']
        }
        bw="sm"
        value={value}
        borderRadius="sm"
        my="quark"
        px="xs"
        icon="close"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          flex: 1,
        }}
      />
      {!!assistiveText && (
        <Box flexDirection="row" alignItems="center">
          {status === 'success' && (
            <Icon name="check-circle" size={16} color={statusKeyPair[status]} />
          )}
          {status === 'error' && (
            <Icon name="alert-circle" size={16} color={statusKeyPair[status]} />
          )}
          <Text ml="quark" fs="sm" color="neutral-darkest">
            {assistiveText}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default forwardRef(TextField);
