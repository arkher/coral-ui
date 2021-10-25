import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';

import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
