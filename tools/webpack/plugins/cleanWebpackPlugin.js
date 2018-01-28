import CleanWebpackPlugin from 'clean-webpack-plugin';

import paths from '../paths';
import globals from '../globals';

const cleanWebpackPlugin = new CleanWebpackPlugin([paths.DIST], {
  root: globals.PROJECT_ROOT_DIR,
  verbose: true,
  dry: false,
});

export default cleanWebpackPlugin;