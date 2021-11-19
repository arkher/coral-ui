import { ReactNode } from 'react';
import { BoxProps, TextProps } from '@shopify/restyle';
import { Theme } from '../../themes/default';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  icon?: string;
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

type ColorsOptions = {
  [index: string]: keyof Theme['colors'];
};

type BorderWidthOptions = {
  [index: string]: CustomBorderWidth;
};

export { ButtonProps, ColorsOptions, BorderWidthOptions };
