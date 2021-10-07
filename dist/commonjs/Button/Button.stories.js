"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLoading = exports.BasicButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _reactNative = require("@storybook/react-native");

var _reactNative2 = require("react-native");

var _Text = _interopRequireDefault(require("../Text/Text"));

var _Button = _interopRequireDefault(require("./Button"));

var _buttonNotes = _interopRequireDefault(require("./notes/button-notes.md"));

var _loadingButtonNotes = _interopRequireDefault(require("./notes/loading-button-notes.md"));

var _default2 = require("../../themes/default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Button',
  component: _Button.default
};
exports.default = _default;

const BasicButton = () => {
  const bg = (0, _addonKnobs.select)(`Background`, _default2.colors, 'primaryBase');
  const width = (0, _addonKnobs.number)('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative2.View, {
    style: {
      width,
      marginTop: 8,
      marginLeft: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: (0, _addonActions.action)('clicked'),
    bg: bg,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_Text.default, null, (0, _addonKnobs.text)('Button text', 'Hello Button'))));
};

exports.BasicButton = BasicButton;
BasicButton.story = {
  parameters: {
    notes: {
      markdown: _buttonNotes.default
    }
  }
};

const ButtonLoading = () => {
  const bg = (0, _addonKnobs.select)(`Background`, _default2.colors, 'primaryBase');
  const width = (0, _addonKnobs.number)('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative2.View, {
    style: {
      width,
      marginTop: 8,
      marginLeft: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onPress: (0, _addonActions.action)('loading'),
    loading: true,
    bg: bg,
    alignItems: "center"
  }));
};

exports.ButtonLoading = ButtonLoading;
ButtonLoading.story = {
  parameters: {
    notes: {
      markdown: _loadingButtonNotes.default
    }
  }
};
(0, _reactNative.storiesOf)('Button', module).add('Basic button', BasicButton).add('Loading', ButtonLoading);
//# sourceMappingURL=Button.stories.js.map