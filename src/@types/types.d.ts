import * as TOKENS from '../themes/tokens';

declare global {
  namespace Custom {
    type BorderRadius = typeof TOKENS.RADIUS[number];
    type BorderWidth = typeof TOKENS.BORDER_WIDTH[number];
    type Colors = typeof TOKENS.COLORS[number];
    type FontSize = typeof TOKENS.FONT_SIZES[number];
    type HeightComponent = typeof TOKENS.HEIGHTS[number];
    type LineHeight = typeof TOKENS.LINE_HEIGHTS[number];
    type LetterSpacing = typeof TOKENS.LETTER_SPACINGS[number];
    type Opacity = typeof TOKENS.OPACITIES[number];
    type Shadow = typeof TOKENS.SHADOWS[number];
    type Spacing = typeof TOKENS.SPACINGS[number];
    type Size = typeof TOKENS.SIZES[number];
    type Radius = typeof TOKENS.RADIUS[number];
  }
}
