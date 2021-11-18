import React from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/default';

import Text from '../Text';
import Box from '../Box';
import Input from '../Input';
import { TextFieldProps } from './interfaces';

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  variant,
  assistiveText,
  status,
  keyboardType,
  autoCapitalize,
}) => {
  const { colors } = useTheme<Theme>();

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="xxxs" fontWeight="700" color="neutralDarkest">
          {label}
        </Text>
      )}
      <Input
        placeholder={placeholder}
        placeholderTextColor={colors.neutralDark}
        variant={variant}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        my="quarck"
        p="nano"
        icon="close"
      />
      {!!assistiveText && (
        <Box flexDirection="row" alignItems="baseline">
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

export default TextField;
