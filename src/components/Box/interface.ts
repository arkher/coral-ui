import { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../themes/default';

type CustomBoxProps = Partial<{
  children: ReactNode;
  bw: CustomBorderWidth;
  op: CustomOpacity;
  sof: CustomShadow;
  sr: CustomShadow;
  sop: CustomShadow;
  h: CustomHeightComponent;
}> &
  Partial<BoxProps<Theme>>;

export { CustomBoxProps };
