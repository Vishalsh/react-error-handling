import paths from '../paths';

const fontLoader = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: 'file-loader?hash=sha512&digest=hex&name=assets/images/[name]-[hash:8].[ext]',
  include: paths.SRC
};

export default fontLoader;
