import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/default';

import Text from '../Text';
import Input from '../Input';
import Box from '../Box';
import { TextAreaProps } from './interfaces';
import { InputFowardEvents } from '../Input/interfaces';

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  variant,
  status,
  maxLength,
  assistiveText,
  autoCapitalize,
  keyboardType,
}) => {
  const [countChar, setCountChar] = useState(0);
  const { colors, textVariants } = useTheme<Theme>();
  const textareaRef = useRef<InputFowardEvents>(null);

  const [variantArea] = useState<CustomHeightComponent>(() => {
    switch (variant) {
      case 'small':
        return 'smallArea';
      case 'medium':
        return 'mediumArea';
      default:
        return variant;
    }
  });

  useEffect(() => {
    if (status === 'error') {
      textareaRef.current?.error();
    }

    if (status === 'success') {
      textareaRef.current?.success();
    }
  }, [status]);

  const statusKeyPair = {
    error: colors.feedbackErrorBase,
    success: colors.feedbackSuccessBase,
    default: colors.neutralDark,
  };

  useEffect(() => {
    if (status === 'error') {
      textareaRef.current?.error();
    }

    if (status === 'success') {
      textareaRef.current?.success();
    }
  }, [status]);

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="xxxs" fontWeight="700" color="neutralDarkest">
          {label}
        </Text>
      )}

      <Input
        ref={textareaRef}
        placeholder={placeholder}
        variant={variantArea}
        multiline
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        numberOfLines={7}
        my="quarck"
        p="xs"
        onChange={() => setCountChar(textareaRef.current?.value?.length || 0)}
        onFocus={() => textareaRef.current?.focus()}
        onBlur={() => textareaRef.current?.blur()}
        style={{
          flex: 1,
          fontFamily: textVariants.regular.fontFamily,
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
                name="check-circle-outline"
                size={24}
                color={statusKeyPair[status || 'default']}
              />
            )}
            {status === 'error' && (
              <Icon
                name="alert-circle-outline"
                size={24}
                color={statusKeyPair[status || 'default']}
              />
            )}
            <Text ml="quarck" fs="xxxxs" color="neutralDarkest">
              {assistiveText}
            </Text>
          </Box>
        )}
        {!!maxLength && (
          <Text color="neutralDark">
            {countChar}/{maxLength}
          </Text>
        )}
      </Box>
    </SafeAreaView>
  );
};

export default TextArea;
