import { BoxProps, createBox, createRestyleComponent } from '@shopify/restyle';
import React, { ReactNode } from 'react';
import {
  borderWidth,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
} from '../../themes/default';

const Box = createBox<Theme>();

type CoralBoxProps = Partial<{
  children?: ReactNode;
  bw?: CustomBorderWidth;
  op?: CustomOpacity;
  sof?: CustomShadow;
  sr?: CustomShadow;
  sop?: CustomShadow;
}> &
  Partial<BoxProps<Theme>>;

const CoralBox: React.FC<CoralBoxProps> = ({ children, ...props }) => (
  <Box {...props}>{children}</Box>
);

export default createRestyleComponent<CoralBoxProps, Theme>(
  [borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity],
  CoralBox,
);
