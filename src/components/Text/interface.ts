import { TextProps } from '@shopify/restyle';
import { ReactNode } from 'markdown-to-jsx/node_modules/@types/react';
import { Theme } from '../../themes/institucional';

type CustomTextProps = Partial<{
  children?: ReactNode;
  fs?: Custom.FontSize;
  lh?: Custom.LineHeight;
  ls?: Custom.LetterSpacing;
  testID?: string;
}> &
  Partial<TextProps<Theme>>;

export { CustomTextProps };
