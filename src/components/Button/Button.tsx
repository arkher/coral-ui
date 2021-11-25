import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { createRestyleComponent, useTheme } from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
} from '../../themes';

import Text from '../Text/Text';
import Box from '../Box/Box';
import { BorderWidthOptions, ButtonProps, ColorsOptions } from './interface';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  variant = 'primary',
  disabled,
  icon,
  ...props
}) => {
  const { colors } = useTheme<Theme>();

  const variantBgColor: ColorsOptions = {
    primary: !disabled ? 'primary-base' : 'neutral-lightest',
    secondary: !disabled ? 'transparent' : 'neutral-lightest',
    tertiary: 'transparent',
  };

  const variantBorderColor: ColorsOptions = {
    primary: !disabled ? 'primary-base' : 'transparent',
    secondary: !disabled ? 'primary-base' : 'transparent',
    tertiary: 'transparent',
  };

  const variantBorderWidth: BorderWidthOptions = {
    primary: 'none',
    secondary: 'xs',
    tertiary: 'none',
  };

  const variantColor: ColorsOptions = {
    primary: !disabled ? 'white' : 'neutral-base',
    secondary: !disabled ? 'primary-base' : 'neutral-base',
    tertiary: !disabled ? 'primary-base' : 'neutral-base',
  };

  const variantIconColor = {
    primary: !disabled ? colors.white : colors['neutral-base'],
    secondary: !disabled ? colors['primary-base'] : colors['neutral-base'],
    tertiary: !disabled ? colors['primary-base'] : colors['neutral-base'],
  };

  const variantLoadingColor = {
    primary: colors.white,
    secondary: colors['primary-base'],
    tertiary: colors['primary-base'],
  };

  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={onPress}
      testID="ds-button"
    >
      <Box
        backgroundColor={variantBgColor[variant]}
        borderColor={variantBorderColor[variant]}
        bw={variantBorderWidth[variant]}
        borderRadius="nano"
        shadowColor="black"
        h="xs"
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {loading ? (
          <ActivityIndicator size={16} color={variantLoadingColor[variant]} />
        ) : (
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            {icon && (
              <Box mr="quark">
                <Icon name={icon} size={24} color={variantIconColor[variant]} />
              </Box>
            )}
            <Text
              fontWeight="600"
              fs="md"
              color={variantColor[variant]}
              {...textProps}
            >
              {children}
            </Text>
          </Box>
        )}
      </Box>
    </TouchableHighlight>
  );
};

export default createRestyleComponent<ButtonProps, Theme>(
  [opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
