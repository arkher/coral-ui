import { TextProps } from '@shopify/restyle';
import { ReactNode } from 'react';
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
