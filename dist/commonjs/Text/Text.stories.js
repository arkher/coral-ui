"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicText = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@storybook/react-native");

var _addonKnobs = require("@storybook/addon-knobs");

var _Text = _interopRequireDefault(require("./Text"));

var _default2 = require("../../themes/default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Text',
  component: _Text.default
}; // Stories

exports.default = _default;

const BasicText = () => {
  const fs = (0, _addonKnobs.select)('FontSize', _default2.fontSizes, 'xxxs');
  const lh = (0, _addonKnobs.select)('LineHeight', _default2.lineHeights, 'medium');
  const ls = (0, _addonKnobs.select)('LetterSpacing', _default2.letterSpacings, 'medium');
  return /*#__PURE__*/_react.default.createElement(_Text.default, {
    fs: fs,
    m: "sm",
    lh: lh,
    ls: ls
  }, (0, _addonKnobs.text)('Text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \nVulputate in faucibus placerat amet. \nErat sagittis faucibus nulla quisque leo convallis suspendisse. \nCommodo vulputate sagittis, ac viverra sodales ut interdum sem. \nVarius eu augue posuere mi purus, nunc, est eget quam.'));
}; // Add all stories to RN/Expo storybook


exports.BasicText = BasicText;
(0, _reactNative.storiesOf)('Text', module).add('Basic', BasicText);
//# sourceMappingURL=Text.stories.js.map