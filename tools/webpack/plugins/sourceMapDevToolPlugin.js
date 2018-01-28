import globals from '../globals';

import webpack from 'webpack';

const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({
  test: [/\.js$/, /\.jsx$/],
  exclude: globals.CHUNKS.VENDOR
});

export default sourceMapDevToolPlugin;
