import { ReactNode } from 'react';
import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';
import { Theme } from '../../themes/institucional';

type CustomBoxProps = Partial<{
  children: ReactNode;
  bw: Custom.BorderWidth;
  op: Custom.Opacity;
  sof: Custom.Shadow;
  sr: Custom.Shadow;
  sop: Custom.Shadow;
  h: Custom.HeightComponent;
}> &
  Partial<BoxProps<Theme>>;

export { CustomBoxProps };
