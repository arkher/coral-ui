import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, text } from '@storybook/addon-knobs';
import Text from './Text';
import { fontSizes, letterSpacings, lineHeights } from '../../themes/default';
export default {
  title: 'Text',
  component: Text
}; // Stories

export const BasicText = () => {
  const fs = select('FontSize', fontSizes, 'xxxs');
  const lh = select('LineHeight', lineHeights, 'medium');
  const ls = select('LetterSpacing', letterSpacings, 'medium');
  return /*#__PURE__*/React.createElement(Text, {
    fs: fs,
    m: "sm",
    lh: lh,
    ls: ls
  }, text('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nVulputate in faucibus placerat amet. \nErat sagittis faucibus nulla quisque leo convallis suspendisse. \nCommodo vulputate sagittis, ac viverra sodales ut interdum sem. \nVarius eu augue posuere mi purus, nunc, est eget quam.'));
}; // Add all stories to RN/Expo storybook

storiesOf('Text', module).add('Basic', BasicText);
//# sourceMappingURL=Text.stories.js.map