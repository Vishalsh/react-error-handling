import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from '../paths';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: paths.TEMPLATE,
});

export default htmlWebpackPlugin;