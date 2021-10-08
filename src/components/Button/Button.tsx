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
    </SimpleBox>
  </TouchableHighlight>
);

export default createRestyleComponent<ButtonProps, Theme>(
  [borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity],
  Button,
);
