import theme, { Theme } from './institucional';

interface MaestroCustomProps extends Theme {
  colors: Theme['colors'] & {
    'secondary-darkest': string;
    'secondary-dark': string;
    'secondary-base': string;
    'secondary-light': string;
    'secondary-lightest': string;
  };
}

const themeMaestro: MaestroCustomProps = {
  ...theme,
  colors: {
    ...theme.colors,
    'primary-darkest': '#06370D',
    'primary-dark': '#075F13',
    'primary-base': '#0A7E19',
    'primary-light': '#ABE3B2',
    'primary-lightest': '#E7F8E9',
    'secondary-darkest': '#0A225C',
    'secondary-dark': '#11358F',
    'secondary-base': '#1D5AF5',
    'secondary-light': '#A9CDF9',
    'secondary-lightest': '#E0EEFF',
    black: '#000000',
    'neutral-darkest': '#2D3338',
    'neutral-dark': '#5D6A75',
    'neutral-base': '#B4BBC2',
    'neutral-light': '#DFE2E5',
    'neutral-lightest': '#F7F7F7',
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
