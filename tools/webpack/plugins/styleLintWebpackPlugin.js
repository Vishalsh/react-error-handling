import StyleLintPlugin from 'stylelint-webpack-plugin';

import paths from '../paths';

const styleLintWebpackPlugin = new StyleLintPlugin({
  configFile: '.stylelintrc',
  context: paths.APP,
  files: '**/*.s?(a|c)ss',
  syntax: 'scss' // this does not effect anything right now. May be work in future.
});

export default styleLintWebpackPlugin;
