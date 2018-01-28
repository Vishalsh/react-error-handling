import ExtractTextPlugin from 'extract-text-webpack-plugin';

import globals from '../globals';

const extractTextPlugin = new ExtractTextPlugin({
  filename: `[name]-${globals.IS_PRODUCTION_ENVIRONMENT ? '[chunkhash:8]' : '[hash:8]'}.css`,
});

export default extractTextPlugin;