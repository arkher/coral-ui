import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';
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
