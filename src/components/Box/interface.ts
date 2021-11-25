import { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

type CustomBoxProps = Partial<{
  children: ReactNode;
  br: Custom.BorderRadius;
  bw: Custom.BorderWidth;
  op: Custom.Opacity;
  sof: Custom.Shadow;
  sr: Custom.Shadow;
  sop: Custom.Shadow;
  h: Custom.HeightComponent;
}> &
  Partial<BoxProps<Theme>>;

export { CustomBoxProps };
