import { createRestyleFunction, createTheme } from '@shopify/restyle';
import 'typeface-public-sans';

const palette = {
  primaryDarkest: '#002559',
  primaryDark: '#093E87',
  primaryBase: '#106CEE',
  primaryLight: '#B8D9FF',
  primaryLightest: '#E5F1FF',

  neutralDarkest: '#2D3338',
  neutralDark: '#5D6A75',
  neutralBase: '#B4BBC2',
  neutralLight: '#DFE2E5',
  neutralLightest: '#F7F7F7',
  white: '#FFFFFF',

  feedbackErrorDark: '#990909',
  feedbackErrorBase: '#E20A0A',
  feedbackErrorLight: '#FFEDED',
  feedbackInfoDark: '#093E87',
  feedbackInfoBase: '#106CEE',
  feedbackInfoLight: '#E5F1FF',
  feedbackSuccessDark: '#035203',
  feedbackSuccessBase: '#00B649',
  feedbackSuccessLight: '#E5FFE5',
  feedbackWarningDark: '#873200',
  feedbackWarningBase: '#FF9C23',
  feedbackWarningLight: '#FBEEE7',

  highlight01Dark: '#524C00',
  highlight01Base: '#EBDF3B',
  highlight01Light: '#FCFBE6',
  highlight02Dark: '#BA005D',
  highlight02Base: '#F7258E',
  highlight02Light: '#FDE3F0',
  highlight03Dark: '#420099',
  highlight03Base: '#6622C0',
  highlight03Light: '#EEE6F8',
  highlight04Dark: '#006A80',
  highlight04Base: '#1FAFCC',
  highlight04Light: '#E1F7FC',
  highlight05Dark: '#007367',
  highlight05Base: '#1DBFAF',
  highlight05Light: '#DDF4F2',
};

const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
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
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  pill: 500,
  circular: '50%' as unknown as number,
};

const theme = createTheme({
  colors: palette,
  spacing,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants,
  borderRadii: borderRadius,
});
export type Theme = typeof theme;
export default theme;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const colors: any = [
  'primaryDarkest',
  'primaryDark',
  'primaryBase',
  'primaryLight',
  'primaryLightest',
  'neutralDarkest',
  'neutralDark',
  'neutralBase',
  'neutralLight',
  'neutralLightest',
  'white',

  'feedbackErrorDark',
  'feedbackErrorBase',
  'feedbackErrorLight',
  'feedbackInfoDark',
  'feedbackInfoBase',
  'feedbackInfoLight',
  'feedbackSuccessDark',
  'feedbackSuccessBase',
  'feedbackSuccessLight',
  'feedbackWarningDark',
  'feedbackWarningBase',
  'feedbackWarningLight',

  'highlight01Dark',
  'highlight01Base',
  'highlight01Light',
  'highlight02Dark',
  'highlight02Base',
  'highlight02Light',
  'highlight03Dark',
  'highlight03Base',
  'highlight03Light',
  'highlight04Dark',
  'highlight04Base',
  'highlight04Light',
  'highlight05Dark',
  'highlight05Base',
  'highlight05Light',
];

export const borderWidthValues = {
  none: 0,
  hairline: 1,
  thin: 2,
  thick: 4,
  heavy: 8,
};

export const borderWidth = createRestyleFunction({
  property: 'bw',
  styleProperty: 'borderWidth',
  transform: ({ value }: { value: BorderWidth }) => borderWidthValues[value],
});
