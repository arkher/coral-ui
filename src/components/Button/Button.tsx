import { createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
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
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <Box
      backgroundColor="primaryBase"
      borderRadius="sm"
      shadowColor="black"
      height={{ phone: 48, tablet: 48 }}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text color="white" {...textProps}>
          {children}
        </Text>
      )}
    </Box>
  </TouchableHighlight>
);

export default createRestyleComponent<ButtonProps, Theme>(
  [borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
