import React from 'react';
import { createText, TextProps } from '@shopify/restyle';
import { Theme } from '../../themes/default';

const Text = createText<Theme>();

const CoralText: React.FC<TextProps<Theme>> = ({ children, ...props }) => (
  <Text variant="regular" {...props}>
    {children}
  </Text>
);

export default CoralText;
