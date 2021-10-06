import {
  BorderProps,
  BoxProps,
  createRestyleComponent,
  TextProps,
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { borderWidth, Theme } from '../../themes/default';
import Box from '../Box/Box';
import Text from '../Text/Text';

export type ButtonProps = {
  children?: ReactNode;
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<Theme>;
  borderProps?: BorderProps<Theme>;
  bw?: BorderWidth;
} & Partial<BoxProps<Theme>>;

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  borderProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <Box
      py="md"
      px="md"
      backgroundColor="primaryBase"
      borderRadius="sm"
      shadowOffset={{ height: 2, width: 0 }}
      shadowRadius={5}
      shadowColor="neutralDarkest"
      shadowOpacity={0.2}
      {...props}
      {...borderProps}
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
  [borderWidth],
  Button,
);
