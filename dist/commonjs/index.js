"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Box = require("./Box/Box");

Object.keys(_Box).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Box[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Box[key];
    }
  });
});

var _Text = require("./Text/Text");

Object.keys(_Text).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Text[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Text[key];
    }
  });
});

var _Button = require("./Button/Button");

Object.keys(_Button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Button[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Button[key];
    }
  });
});
//# sourceMappingURL=index.js.map