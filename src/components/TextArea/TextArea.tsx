import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/default';

import Text from '../Text';
import Input from '../Input';
import Box from '../Box';
import { TextAreaProps } from './interfaces';
import { InputRef } from '../Input/interfaces';

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  variant,
  status,
  maxLength,
}) => {
  const [countChar, setCountChar] = useState(0);
  const { textVariants } = useTheme<Theme>();
  const textareaRef = useRef<InputRef>(null);

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
    if (!variant) {
      throw new Error('Variant é um campo definitivo.');
    }
  }, [variant]);

  useEffect(() => {
    if (status === 'error') {
      textareaRef.current?.error();
    } else if (status === 'success') {
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
        maxLength={maxLength}
        numberOfLines={7}
        my="quarck"
        px="xs"
        py="nano"
        onChange={() => setCountChar(textareaRef.current?.value?.length || 0)}
        onFocus={() => textareaRef.current?.focus()}
        onBlur={() => textareaRef.current?.blur()}
        style={{
          flex: 1,
          fontFamily: textVariants.regular.fontFamily,
          textAlignVertical: 'top',
        }}
      />

      {maxLength && (
        <Box flexDirection="row" justifyContent="flex-end">
          <Text color="neutralDark">
            {countChar}/{maxLength}
          </Text>
        </Box>
      )}
    </SafeAreaView>
  );
};

export default TextArea;
