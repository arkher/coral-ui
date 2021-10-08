/* eslint-disable import/extensions */
/* eslint-disable global-require */
import { configure, getStorybookUI } from '@storybook/react-native';

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  require('./src/components');
}, module);

export default getStorybookUI({
  // Pass AsyncStorage below if you want Storybook to open your
  // last visited story after you close and re-open your app
  asyncStorage: null,
});
