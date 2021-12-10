import { createRestyleFunction } from '@shopify/restyle';

export const borderWidthValues = {
  none: 0,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
};

export const borderRadiusValues = {
  none: 0,
  nano: 4,
  sm: 8,
  md: 16,
  lg: 24,
  pill: 500,
  circular: '50%' as unknown as number,
};

export const sizeHeightValues = {
  xs: 40,
  sm: 56,
  md: 64,
  lg: 108,
  xl: 140,
};

export const fontSizeValues = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  '5xl': 48,
  '6xl': 56,
  '7xl': 64,
  '8xl': 72,
  '9xl': 80,
  '10xl': 96,
};

export const lineHeightValues = {
  lg: '200%',
  md: '160%',
  sm: '130%',
  xs: '100%',
};

export const letterSpacingValues = {
  lg: 1.5,
  md: 0.5,
  sm: 0,
  xs: -1.5,
};

export const opacityValues = {
  'opacity-5': 0.8,
  'opacity-4': 0.64,
  'opacity-3': 0.32,
  'opacity-2': 0.16,
  'opacity-1': 0.08,
};

export const shadowOffsetValues = {
  xs: { width: 0, height: 1.5 },
  sm: { width: 0, height: 4 },
  md: { width: 0, height: 10 },
  lg: { width: 0, height: 16 },
};

export const shadowOpacityValues = {
  xs: 0.12,
  sm: 0.1,
  md: 0.1,
  lg: 0.1,
};

export const shadowRadiusValues = {
  xs: 3.5,
  sm: 8,
  md: 16,
  lg: 32,
};

export const spacingValues = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 56,
  '5xl': 64,
  '6xl': 80,
  '7xl': 120,
  '8xl': 160,
  '9xl': 200,
};

export const sizeValues = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
  '2xl': 96,
};

export const borderWidth = createRestyleFunction({
  property: 'bw',
  styleProperty: 'borderWidth',
  transform: ({ value }: { value: Custom.BorderWidth }) =>
    borderWidthValues[value],
});

export const borderRadius = createRestyleFunction({
  property: 'br',
  styleProperty: 'borderRadius',
  transform: ({ value }: { value: Custom.Radius }) => borderRadiusValues[value],
});

export const fontSize = createRestyleFunction({
  property: 'fs',
  styleProperty: 'fontSize',
  transform: ({ value }: { value: Custom.FontSize }) => fontSizeValues[value],
});

export const heightComponent = createRestyleFunction({
  property: 'h',
  styleProperty: 'height',
  transform: ({ value }: { value: Custom.HeightComponent }) =>
    sizeHeightValues[value],
});

export const lineHeight = createRestyleFunction({
  property: 'lh',
  styleProperty: 'lineHeight',
  transform: ({ value }: { value: Custom.LineHeight }) =>
    lineHeightValues[value],
});

export const letterSpacing = createRestyleFunction({
  property: 'ls',
  styleProperty: 'letterSpacing',
  transform: ({ value }: { value: Custom.LetterSpacing }) =>
    letterSpacingValues[value],
});

export const opacity = createRestyleFunction({
  property: 'op',
  styleProperty: 'opacity',
  transform: ({ value }: { value: Custom.Opacity }) => opacityValues[value],
});

export const shadowOffset = createRestyleFunction({
  property: 'sof',
  styleProperty: 'shadowOffset',
  transform: ({ value }: { value: Custom.Shadow }) => shadowOffsetValues[value],
});

export const shadowRadius = createRestyleFunction({
  property: 'sr',
  styleProperty: 'shadowRadius',
  transform: ({ value }: { value: Custom.Shadow }) => shadowRadiusValues[value],
});

export const shadowOpacity = createRestyleFunction({
  property: 'sop',
  styleProperty: 'shadowOpacity',
  transform: ({ value }: { value: Custom.Shadow }) =>
    shadowOpacityValues[value],
});
