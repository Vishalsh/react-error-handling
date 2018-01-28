import configs from './tools/webpack/configs';
import loaders from './tools/webpack/loaders';
import plugins from './tools/webpack/plugins';
import globals from './tools/webpack/globals';

console.log(`Launching Webpack in ${ globals.IS_PRODUCTION_ENVIRONMENT ? "production" : "development" } environment at ${globals.WEBPACK_DEV_SERVER_HOSTNAME}:${globals.WEBPACK_DEV_SERVER_PORT}...`);

const webpackConfig = {
  ...configs,
  module: {
    rules: loaders
  },
  plugins
};

export default webpackConfig;
