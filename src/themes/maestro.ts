import theme, { Theme } from './default';

interface MaestroCustomProps extends Theme {
  colors: {
    transparent: string;
    primaryDarkest: string;
    primaryDark: string;
    primaryBase: string;
    primaryLight: string;
    primaryLightest: string;
    secondaryDarkest: string;
    secondaryDark: string;
    secondaryBase: string;
    secondaryLight: string;
    secondaryLightest: string;

    black: string;
    neutralDarkest: string;
    neutralDark: string;
    neutralBase: string;
    neutralLight: string;
    neutralLightest: string;
    white: string;

    feedbackErrorDark: string;
    feedbackErrorBase: string;
    feedbackErrorLight: string;
    feedbackInfoDark: string;
    feedbackInfoBase: string;
    feedbackInfoLight: string;
    feedbackSuccessDark: string;
    feedbackSuccessBase: string;
    feedbackSuccessLight: string;
    feedbackWarningDark: string;
    feedbackWarningBase: string;
    feedbackWarningLight: string;

    highlight01Dark: string;
    highlight01Base: string;
    highlight01Light: string;
    highlight02Dark: string;
    highlight02Base: string;
    highlight02Light: string;
    highlight03Dark: string;
    highlight03Base: string;
    highlight03Light: string;
    highlight04Dark: string;
    highlight04Base: string;
    highlight04Light: string;
    highlight05Dark: string;
    highlight05Base: string;
    highlight05Light: string;
  };
}

const themeMaestro: MaestroCustomProps = {
  ...theme,
  colors: {
    ...theme.colors,
    primaryDarkest: '#06370D',
    primaryDark: '#075F13',
    primaryBase: '#0A7E19',
    primaryLight: '#ABE3B2',
    primaryLightest: '#E7F8E9',
    secondaryDarkest: '#0A225C',
    secondaryDark: '#11358F',
    secondaryBase: '#1D5AF5',
    secondaryLight: '#A9CDF9',
    secondaryLightest: '#E0EEFF',

    black: '#000000',
    neutralDarkest: '#2D3338',
    neutralDark: '#5D6A75',
    neutralBase: '#B4BBC2',
    neutralLight: '#DFE2E5',
    neutralLightest: '#F7F7F7',
    white: '#FFFFFF',
  },
  textVariants: {
    bold: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: '700',
    },
    semibold: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: '600',
    },
    medium: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: '500',
    },
    regular: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: '400',
    },
  },
};

export default themeMaestro;
