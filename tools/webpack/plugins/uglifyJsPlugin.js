import webpack from 'webpack';

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: {
    dead_code: true,
    drop_console: true,
    drop_debugger: true,
    join_vars: true,
    unused: true,
    pure_funcs: [
      'console.log'
    ],
    warnings: false
  },
  output: {
    comments: false
  },
});

export default uglifyJsPlugin;