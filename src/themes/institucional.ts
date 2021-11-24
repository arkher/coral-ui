import { createTheme } from '@shopify/restyle';

const palette = {
  transparent: 'transparent',
  'primary-darkest': '#002559',
  'primary-dark': '#093E87',
  'primary-base': '#106CEE',
  'primary-light': '#B8D9FF',
  'primary-lightest': '#E5F1FF',
  black: '#000000',
  'neutral-darkest': '#2D3338',
  'neutral-dark': '#5D6A75',
  'neutral-base': '#B4BBC2',
  'neutral-light': '#DFE2E5',
  'neutral-lightest': '#F7F7F7',
  white: '#FFFFFF',
  'feedback-error-dark': '#990909',
  'feedback-error-base': '#E20A0A',
  'feedback-error-light': '#FFEDED',
  'feedback-info-dark': '#093E87',
  'feedback-info-base': '#106CEE',
  'feedback-info-light': '#E5F1FF',
  'feedback-success-dark': '#035203',
  'feedback-success-base': '#00B649',
  'feedback-success-light': '#E5FFE5',
  'feedback-warning-dark': '#873200',
  'feedback-warning-base': '#FF9C23',
  'feedback-warning-light': '#FBEEE7',
  'highlight-01-dark': '#524C00',
  'highlight-01-base': '#EBDF3B',
  'highlight-01-light': '#FCFBE6',
  'highlight-02-dark': '#BA005D',
  'highlight-02-base': '#F7258E',
  'highlight-02-light': '#FDE3F0',
  'highlight-03-dark': '#420099',
  'highlight-03-base': '#6622C0',
  'highlight-03-light': '#EEE6F8',
  'highlight-04-dark': '#006A80',
  'highlight-04-base': '#1FAFCC',
  'highlight-04-light': '#E1F7FC',
  'highlight-05-dark': '#007367',
  'highlight-05-base': '#1DBFAF',
  'highlight-05-light': '#DDF4F2',
};

const spacingInsetValues = {
  quark: 4,
  nano: 8,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 40,
};

const textVariants = {
  bold: {
    fontFamily: '"Public Sans", sans-serif',
    fontWeight: '700',
  },
  semibold: {
    fontFamily: '"Public Sans", sans-serif',
    fontWeight: '600',
  },
  medium: {
    fontFamily: '"Public Sans", sans-serif',
    fontWeight: '500',
  },
  regular: {
    fontFamily: '"Public Sans", sans-serif',
    fontWeight: '400',
  },
};

const borderRadius = {
  none: 0,
  nano: 4,
  sm: 8,
  md: 16,
  lg: 24,
  pill: 500,
  circular: '50%' as unknown as number,
};

const theme = createTheme({
  colors: palette,
  spacing: spacingInsetValues,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants,
  borderRadii: borderRadius,
});
export type Theme = typeof theme;
export default theme;
