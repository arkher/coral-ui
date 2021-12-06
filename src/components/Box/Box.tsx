import { createBox, createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import {
  borderRadius,
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
  heightComponent,
} from '../../themes';
import { CustomBoxProps } from './interface';

const Box = createBox<Theme>();

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  testID,
  ...props
}) => (
  <Box testID={testID || 'Box'} {...props}>
    {children}
  </Box>
);

export default createRestyleComponent<CustomBoxProps, Theme>(
  [
    borderRadius,
    borderWidth,
    opacity,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    heightComponent,
  ],
  CustomBox,
);
