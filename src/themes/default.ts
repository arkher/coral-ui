import { createRestyleFunction, createTheme } from '@shopify/restyle';
// import 'typeface-public-sans';

const palette = {
  primaryDarkest: '#002559',
  primaryDark: '#093E87',
  primaryBase: '#106CEE',
  primaryLight: '#B8D9FF',
  primaryLightest: '#E5F1FF',

  black: '#000000',
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

export const spacingInsetValues = {
  quarck: 4,
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
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
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

export const colors: CustomColors[] = [
  'black',
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

export const fontSizes: CustomFontSize[] = [
  'details',
  'xxxxs',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl',
  'giant',
  'display',
];

export const lineHeights: CustomLineHeight[] = [
  'superdistant',
  'distant',
  'medium',
  'tight',
];

export const letterSpacings: CustomLetterSpacing[] = [
  'superdistant',
  'distant',
  'medium',
  'tight',
];

export const opacities: CustomOpacity[] = [
  'semiopaque',
  'intense',
  'medium',
  'light',
  'semitransparent',
];

export const shadows: CustomShadow[] = [
  'near',
  'medium',
  'distant',
  'superdistant',
];

export const spacings: CustomSpacing[] = [
  'quarck',
  'nano',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'huge',
  'giant',
];

export const spacingsInset: CustomSpacingInset[] = [
  'quarck',
  'nano',
  'xs',
  'sm',
  'md',
  'lg',
];

export const sizes: CustomSize[] = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

export const borderWidthValues = {
  none: 0,
  hairline: 1,
  thin: 2,
  thick: 4,
  heavy: 8,
};

export const fontSizeValues = {
  details: 10,
  xxxxs: 12,
  xxxs: 14,
  xxs: 16,
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48,
  xxl: 56,
  xxxl: 64,
  xxxxl: 72,
  giant: 80,
  display: 96,
};

export const lineHeightValues = {
  superdistant: '200%',
  distant: '160%',
  medium: '130%',
  tight: '100%',
};

export const letterSpacingValues = {
  superdistant: 1.5,
  distant: 0.5,
  medium: 0,
  tight: -1.5,
};

export const opacityValues = {
  semiopaque: 0.8,
  intense: 0.64,
  medium: 0.32,
  light: 0.16,
  semitransparent: 0.08,
};

export const shadowOffsetValues = {
  near: { width: 0, height: 1.5 },
  medium: { width: 0, height: 4 },
  distant: { width: 0, height: 10 },
  superdistant: { width: 0, height: 16 },
};

export const shadowOpacityValues = {
  near: 0.12,
  medium: 0.1,
  distant: 0.1,
  superdistant: 0.1,
};

export const shadowRadiusValues = {
  near: 3.5,
  medium: 8,
  distant: 16,
  superdistant: 32,
};

export const spacingValues = {
  quarck: 4,
  nano: 8,
  xxxs: 16,
  xxs: 24,
  xs: 32,
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64,
  xxl: 80,
  xxxl: 120,
  huge: 160,
  giant: 200,
};

export const sizeValues = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 96,
};

export const borderWidth = createRestyleFunction({
  property: 'bw',
  styleProperty: 'borderWidth',
  transform: ({ value }: { value: CustomBorderWidth }) =>
    borderWidthValues[value],
});

export const fontSize = createRestyleFunction({
  property: 'fs',
  styleProperty: 'fontSize',
  transform: ({ value }: { value: CustomFontSize }) => fontSizeValues[value],
});

export const lineHeight = createRestyleFunction({
  property: 'lh',
  styleProperty: 'lineHeight',
  transform: ({ value }: { value: CustomLineHeight }) =>
    lineHeightValues[value],
});

export const letterSpacing = createRestyleFunction({
  property: 'ls',
  styleProperty: 'letterSpacing',
  transform: ({ value }: { value: CustomLetterSpacing }) =>
    letterSpacingValues[value],
});

export const opacity = createRestyleFunction({
  property: 'op',
  styleProperty: 'opacity',
  transform: ({ value }: { value: CustomOpacity }) => opacityValues[value],
});

export const shadowOffset = createRestyleFunction({
  property: 'sof',
  styleProperty: 'shadowOffset',
  transform: ({ value }: { value: CustomShadow }) => shadowOffsetValues[value],
});

export const shadowRadius = createRestyleFunction({
  property: 'sr',
  styleProperty: 'shadowRadius',
  transform: ({ value }: { value: CustomShadow }) => shadowRadiusValues[value],
});

export const shadowOpacity = createRestyleFunction({
  property: 'sop',
  styleProperty: 'shadowOpacity',
  transform: ({ value }: { value: CustomShadow }) => shadowOpacityValues[value],
});
