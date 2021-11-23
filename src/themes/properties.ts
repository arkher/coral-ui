import { createRestyleFunction } from '@shopify/restyle';

export const borderWidthValues = {
  none: 0,
  hairline: 1,
  thin: 2,
  thick: 4,
  heavy: 8,
};

export const sizeHeightValues = {
  small: 40,
  medium: 56,
  'small-area': 108,
  'medium-area': 140,
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
  quark: 4,
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
  transform: ({ value }: { value: Custom.BorderWidth }) =>
    borderWidthValues[value],
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
