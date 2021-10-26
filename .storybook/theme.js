import { create } from '@storybook/theming';
import logoPath from '../assets/coral-brand.png';

export default create({
  base: 'light',
  brandTitle: 'DS Mobile - Storybook',
  brandUrl: 'https://zeroheight.com/8c4ad0d2d/p/5469c7-coral-design-system',
  brandImage: logoPath,

  fontBase: '"Public Sans", sans-serif',
});
