import React, { useCallback, useRef, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../themes/default';

import Text from '../Text';
import Input from '../Input';
import Box from '../Box';
import { TextAreaProps } from './interfaces';

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  variant,
  status,
  maxLength,
}) => {
  const [countChar, setCountChar] = useState(0);
  const { colors, textVariants } = useTheme<Theme>();
  const textareaRef = useRef<any>(null);

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
        placeholderTextColor={colors.neutralDark}
        variant={variantArea}
        onChange={() => setCountChar(textareaRef.current?.value?.length || 0)}
        multiline
        maxLength={maxLength}
        numberOfLines={7}
        my="quarck"
        p="xs"
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
