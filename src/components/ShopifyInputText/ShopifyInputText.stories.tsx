import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import ShopifyInputText from './ShopifyInputText';

export default {
  title: 'Experimental/ShopifyInputText',
  component: ShopifyInputText,
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=222%3A4012';

export const BasicShopifyInputText = (): React.ReactNode => (
  <ShopifyInputText label="Label" placeholder="Placeholder" />
);

BasicShopifyInputText.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
