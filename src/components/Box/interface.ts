import { BoxProps } from '@shopify/restyle';
import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
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
  style: ViewStyle;
  testID: string;
}> &
  Partial<BoxProps<Theme>>;

export { CustomBoxProps };
