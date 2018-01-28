import webpack from 'webpack';

import globals from '../globals';

const definePlugin = new webpack.DefinePlugin({
  IS_PRODUCTION_ENVIRONMENT: globals.IS_PRODUCTION_ENVIRONMENT
});

export default definePlugin;
