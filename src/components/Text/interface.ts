import { TextProps } from '@shopify/restyle';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';
import { Theme } from '../../themes/default';

type CustomTextProps = Partial<{
  children?: ReactNode;
  fs?: CustomFontSize;
  lh?: CustomLineHeight;
  ls?: CustomLetterSpacing;
}> &
  Partial<TextProps<Theme>>;

export { CustomTextProps };
