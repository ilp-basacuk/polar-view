/* eslint-disable @typescript-eslint/no-var-requires */
const webpack  = require('webpack');
const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
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
