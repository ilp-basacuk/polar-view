/* eslint-disable @typescript-eslint/no-var-requires */
const webpack  = require('webpack');
const tailwind = require("preact-cli-tailwind");
const { parsed } = require('dotenv').config();

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);

  // Environment variables
  const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
  Object.keys(parsed).forEach(
    (key) => {
    plugin.definitions[`process.env.${key}`] = JSON.stringify(parsed[key]);
  });

  // Needed for .env https://github.com/preactjs/preact-cli/issues/244#issuecomment-316558813
  config.node.process = 'mock';

  // Compatibility with react
  config.resolve.alias = {
    ...config.resolve.alias,
    'react': 'preact-compat',
    'react-dom': 'preact-compat'
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      Component: ['preact', 'Component'],
      React: ['preact-compat']
    })
  );

  return config;
};
