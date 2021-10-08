import React, { ReactNode } from 'react';
import {
  createRestyleComponent,
  createText,
  TextProps,
} from '@shopify/restyle';
import {
  fontSize,
  letterSpacing,
  lineHeight,
  Theme,
} from '../../themes/default';

const Text = createText<Theme>();

type CoralTextProps = Partial<{
  children?: ReactNode;
  fs?: CustomFontSize;
  lh?: CustomLineHeight;
  ls?: CustomLetterSpacing;
}> &
  Partial<TextProps<Theme>>;

const CoralText: React.FC<CoralTextProps> = ({ children, ...props }) => (
  <Text variant="regular" {...props}>
    {children}
  </Text>
);

export default createRestyleComponent<CoralTextProps, Theme>(
  [fontSize, lineHeight, letterSpacing],
  CoralText,
);
