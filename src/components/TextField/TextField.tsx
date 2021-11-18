import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/default';

import Text from '../Text';
import Box from '../Box';
import Input from '../Input';
import { TextFieldProps } from './interfaces';
import { InputFowardEvents } from '../Input/interfaces';

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  variant,
  assistiveText,
  status,
  keyboardType,
  autoCapitalize,
  returnKeyType,
}) => {
  const { colors } = useTheme<Theme>();
  const textfieldRef = useRef<InputFowardEvents>(null);

  useEffect(() => {
    if (status === 'error') {
      textfieldRef.current?.error();
    }

    if (status === 'success') {
      textfieldRef.current?.success();
    }
  }, [status]);

  const statusKeyPair = {
    error: colors.feedbackErrorBase,
    success: colors.feedbackSuccessBase,
    default: colors.neutralDark,
  };

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="xxxs" fontWeight="700" color="neutralDarkest">
          {label}
        </Text>
      )}
      <Input
        ref={textfieldRef}
        placeholder={placeholder}
        variant={variant}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        my="quarck"
        p="nano"
        icon="close"
        style={{
          flex: 1,
        }}
      />
      {!!assistiveText && (
        <Box flexDirection="row" alignItems="center">
          {status === 'success' && (
            <Icon
              name="check-circle-outline"
              size={24}
              color={statusKeyPair[status]}
            />
          )}
          {status === 'error' && (
            <Icon
              name="alert-circle-outline"
              size={24}
              color={statusKeyPair[status]}
            />
          )}
          <Text ml="quarck" fs="xxxxs" color="neutralDarkest">
            {assistiveText}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default TextField;
