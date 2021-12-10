/**
 * Arquivo necessário por conta das
 * importações do Expo pelo projeto.
 */

const { resolve } = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');

module.exports = ({ config }) => {
  return withUnimodules(config, {
    projectRoot: resolve(__dirname, '../'),
  });
};
