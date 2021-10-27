import { BoxProps, TextProps } from '@shopify/restyle';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';
import { Theme } from '../../themes/default';

type ButtonProps = {
  children?: ReactNode;
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<Theme>;
  bw?: CustomBorderWidth;
  op?: CustomOpacity;
  sof?: CustomShadow;
  sr?: CustomShadow;
  sop?: CustomShadow;
} & Partial<BoxProps<Theme>>;

export { ButtonProps };
