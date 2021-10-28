import React from 'react';
import { createRestyleComponent, createText } from '@shopify/restyle';
import {
  fontSize,
  letterSpacing,
  lineHeight,
  Theme,
} from '../../themes/default';
import { CustomTextProps } from './interface';

const Text = createText<Theme>();

const CustomText: React.FC<CustomTextProps> = ({ children, ...props }) => (
  <Text variant="regular" {...props}>
    {children}
  </Text>
);

export default createRestyleComponent<CustomTextProps, Theme>(
  [fontSize, lineHeight, letterSpacing],
  CustomText,
);
