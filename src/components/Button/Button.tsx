import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { color, createRestyleComponent, useTheme } from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
} from '../../themes/default';

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
    primary: !disabled ? 'primaryBase' : 'neutralLightest',
    secondary: !disabled ? 'transparent' : 'neutralLightest',
    tertiary: 'transparent',
  };

  const variantBorderColor: ColorsOptions = {
    primary: !disabled ? 'primaryBase' : 'transparent',
    secondary: !disabled ? 'primaryBase' : 'transparent',
    tertiary: 'transparent',
  };

  const variantBorderWidth: BorderWidthOptions = {
    primary: 'none',
    secondary: 'hairline',
    tertiary: 'none',
  };

  const variantColor: ColorsOptions = {
    primary: !disabled ? 'white' : 'neutralBase',
    secondary: !disabled ? 'primaryBase' : 'neutralBase',
    tertiary: !disabled ? 'primaryBase' : 'neutralBase',
  };

  const variantIconColor = {
    primary: !disabled ? colors.white : colors.neutralBase,
    secondary: !disabled ? colors.primaryBase : colors.neutralBase,
    tertiary: !disabled ? colors.primaryBase : colors.neutralBase,
  };

  const variantLoadingColor = {
    primary: colors.white,
    secondary: colors.primaryBase,
    tertiary: colors.primaryBase,
  };

  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress}>
      <Box
        backgroundColor={variantBgColor[variant]}
        borderColor={variantBorderColor[variant]}
        bw={variantBorderWidth[variant]}
        borderRadius="sm"
        shadowColor="black"
        height={{ phone: 48, tablet: 48 }}
        alignItems="center"
        justifyContent="center"
        {...props}
      >
        {loading ? (
          <ActivityIndicator size={16} color={variantLoadingColor[variant]} />
        ) : (
          <Box flexDirection="row" alignItems="center" justifyContent="center">
            {icon && (
              <Box mr="quarck">
                <Icon name={icon} size={24} color={variantIconColor[variant]} />
              </Box>
            )}
            <Text
              fontWeight="600"
              fs="xxxs"
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
  [borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
