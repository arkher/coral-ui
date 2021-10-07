import {
  BoxProps,
  createRestyleComponent,
  TextProps,
  createBox,
} from '@shopify/restyle';
import React, { ReactNode } from 'react';
import { ActivityIndicator, TouchableHighlight, View } from 'react-native';
import {
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
} from '../../themes/default';
import Text from '../Text/Text';

export type ButtonProps = {
  children?: ReactNode;
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<Theme>;
  bw?: CustomBorderWidth;
  op?: CustomOpacity;
  sof?: CustomShadow;
  sr?: CustomShadow;
  sop?: CustomShadow;
} & Partial<BoxProps<Theme>>;

const SimpleBox = createBox<Theme>();

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  loading,
  textProps,
  ...props
}) => (
  <TouchableHighlight underlayColor="transparent" onPress={onPress}>
    <SimpleBox
      py="md"
      px="md"
      backgroundColor="primaryBase"
      borderRadius="sm"
      shadowColor="black"
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="white" style={{ height: 16 }} />
      ) : (
        <Text color="white" {...textProps}>
          {children}
        </Text>
      )}
    </SimpleBox>
  </TouchableHighlight>
);

export default createRestyleComponent<ButtonProps, Theme>(
  [borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
