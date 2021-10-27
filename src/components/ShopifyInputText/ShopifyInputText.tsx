/* eslint-disable react/require-default-props */
import React, { useCallback, useRef, useState } from 'react';
import {
  BoxProps,
  createBox,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  useTheme,
  VariantProps,
} from '@shopify/restyle';

import { SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme, borderWidth } from '../../themes/default';
import Text from '../Text';

type InputProps = {
  label?: string;
  placeholder?: string;
  bw?: CustomBorderWidth;
  p?: CustomSpacing;
} & Partial<BoxProps<Theme>>;

const SimpleBox = createBox<Theme>();

const ShopifyInputText: React.FC<InputProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const { colors, textVariants } = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputElementRef = useRef<TextInput>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    console.log(!!inputElementRef.current?.state);

    // setIsFilled(!!inputElementRef.current?.state);
  }, []);

  return (
    <SafeAreaView>
      {!!label && (
        <Text fs="xxxs" fontWeight="700" color="neutralDarkest">
          {label}
        </Text>
      )}
      <SimpleBox
        bw="thin"
        borderWidth={2}
        borderColor="neutralDark"
        p="nano"
        my="quarck"
        borderRadius="sm"
        flexDirection="row"
        alignItems="center"
        height={56}
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
        <Icon name="close" size={24} color={colors.neutralDark} />
      </SimpleBox>
      <SimpleBox flexDirection="row">
        <Icon
          name="check-circle-outline"
          color={colors.neutralDark}
          size={16}
        />
        <Text mx="quarck" color="neutralDark">
          Feedback message
        </Text>
      </SimpleBox>
    </SafeAreaView>
  );
};

export default createRestyleComponent<InputProps, Theme>(
  [spacing, borderWidth],
  ShopifyInputText,
);
