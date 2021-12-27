import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
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
  const { colors, borderRadii } = useTheme<Theme>();

  const variantBgColor: ColorsOptions = {
    primary: !disabled ? 'primary-base' : 'neutral-lightest',
    secondary: !disabled ? 'transparent' : 'neutral-lightest',
    tertiary: 'transparent',
  };

  const variantPressedBgColor = {
    primary: colors['primary-dark'],
    secondary: colors.white,
    tertiary: colors.white,
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
    <Box
      backgroundColor={variantBgColor[variant]}
      borderColor={variantBorderColor[variant]}
      bw={variantBorderWidth[variant]}
      borderRadius="nano"
      shadowColor="black"
      height={{ phone: 48, tablet: 48 }}
      alignItems="center"
      justifyContent="center"
      flexShrink={1}
      testID="button-box"
      {...props}
    >
      <Pressable
        android_disableSound={loading}
        onPress={() => (!loading ? onPress() : () => undefined)}
        disabled={disabled}
        testID="ds-button"
        style={({ pressed }) => [
          {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            opacity: disabled ? 0.5 : 1,
            borderRadius: borderRadii.nano,
          },
          {
            backgroundColor:
              pressed && !loading
                ? variantPressedBgColor[variant]
                : 'transparent',
          },
        ]}
      >
        {({ pressed }) =>
          loading ? (
            <ActivityIndicator size={16} color={variantLoadingColor[variant]} />
          ) : (
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              {icon && (
                <Box mr="quark">
                  <Icon
                    name={icon}
                    size={24}
                    color={variantIconColor[variant]}
                  />
                </Box>
              )}
              <Text
                fontWeight="600"
                fs="md"
                color={pressed ? 'primary-light' : variantColor[variant]}
                {...textProps}
              >
                {children}
              </Text>
            </Box>
          )
        }
      </Pressable>
    </Box>
  );
};

export default createRestyleComponent<ButtonProps, Theme>(
  [opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
