import globals from '../globals';

import webpack from 'webpack';

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: [globals.CHUNKS.VENDOR, 'manifest'],
  minChunks: Infinity
});

export default commonChunkPlugin;