import React from 'react';
import { BoxProps, TextProps } from '@shopify/restyle';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { Theme } from '../../themes/default';
import Box from '../Box/Box';
import Text from '../Text/Text';

export type ButtonProps = {
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<Theme>;
} & Partial<BoxProps<Theme>>;

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <Box
      py="m"
      px="xl"
      backgroundColor="primary"
      borderRadius={{ phone: 8 as never, tablet: 8 as never }}
      shadowOffset={{ height: 2, width: 0 }}
      shadowRadius={5}
      shadowColor="black"
      shadowOpacity={0.2}
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

export default Button;
