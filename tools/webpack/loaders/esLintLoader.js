import paths from '../paths';

const esLintLoader = {
  enforce: 'pre',
  test: /\.jsx?$/i,
  loader: 'eslint-loader',
  exclude: paths.NODE_MODULES
};

export default esLintLoader;
