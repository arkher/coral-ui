import { createBox, createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import {
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
  heightComponent,
} from '../../themes/default';
import { CustomBoxProps } from './interface';

const Box = createBox<Theme>();

const CustomBox: React.FC<CustomBoxProps> = ({ children, ...props }) => (
  <Box {...props} testID="Box">
    {children}
  </Box>
);

export default createRestyleComponent<CustomBoxProps, Theme>(
  [
    borderWidth,
    opacity,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    heightComponent,
  ],
  CustomBox,
);
