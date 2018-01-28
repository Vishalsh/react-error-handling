import paths from '../paths';

const imageLoader = {
  test: /\.(ttf|eot|woff|woff2)$/,
  loader: 'file-loader?mimetype=application/font-woff&name=assets/fonts/[name]-[hash:8].[ext]',
  include: paths.SRC
};


export default imageLoader;
