import { ReactNode } from 'react';
import { BoxProps, TextProps } from '@shopify/restyle';
import { Theme } from '../../themes/institucional';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  icon?: string;
  children?: ReactNode;
  onPress: () => void;
  loading?: boolean;
  textProps?: TextProps<Theme>;
  bw?: Custom.BorderWidth;
  br?: Custom.BorderRadius;
  op?: Custom.Opacity;
  sof?: Custom.Shadow;
  sr?: Custom.Shadow;
  sop?: Custom.Shadow;
} & Partial<BoxProps<Theme>>;

type ColorsOptions = {
  [index: string]: keyof Theme['colors'];
};

type BorderWidthOptions = {
  [index: string]: Custom.BorderWidth;
};

export { ButtonProps, ColorsOptions, BorderWidthOptions };
