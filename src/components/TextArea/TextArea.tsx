import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

import Text from '../Text';
import Input from '../Input';
import Box from '../Box';
import { TextAreaProps, TypeVariantHeight } from './interfaces';
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
  value,
  onChange,
}) => {
  const [countChar, setCountChar] = useState(0);
  const { colors, textVariants } = useTheme<Theme>();
  const textareaRef = useRef<InputFowardEvents>(null);

  const statusKeyPair = {
    error: colors['feedback-error-base'],
    success: colors['feedback-success-base'],
    default: colors['neutral-dark'],
  };

  const variantHeight: TypeVariantHeight = {
    small: 'lg',
    medium: 'xl',
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
        <Text fs="md" fontWeight="700" color="neutral-darkest">
          {label}
        </Text>
      )}

      <Input
        ref={textareaRef}
        placeholder={placeholder}
        variant={variantHeight[variant]}
        multiline
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        numberOfLines={7}
        my="quark"
        px="xs"
        py="nano"
        value={value}
        onChange={e => {
          setCountChar(textareaRef.current?.value?.length || 0);
          onChange && onChange({ ...e, current: textareaRef.current });
        }}
        onFocus={() => textareaRef.current?.focus()}
        onBlur={() => textareaRef.current?.blur()}
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

export default TextArea;
