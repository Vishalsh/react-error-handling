import path from 'path';
import VisualizerPlugin from 'webpack-visualizer-plugin';

import paths from '../paths';
import globals from '../globals';

const visualizerPlugin = new VisualizerPlugin({
  filename: path.join('..', path.relative(
    globals.PROJECT_ROOT_DIR,
    path.join(paths.REPORTS, 'webpackStats', 'webpackStats.html')
  ))
});

export default visualizerPlugin;
