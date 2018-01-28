import paths from '../paths';

const babelLoader = {
  test: /\.js$/,
  include: paths.APP,
  exclude: paths.NODE_MODULES,
  use: [{
    loader: 'babel-loader'
  }],
};

export default babelLoader;