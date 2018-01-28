import path from 'path';
import globals from './globals';

const paths = {
  SRC: path.resolve(globals.PROJECT_ROOT_DIR, 'src'),
  APP: path.resolve(globals.PROJECT_ROOT_DIR, 'src/app'),
  DIST: path.resolve(globals.PROJECT_ROOT_DIR, 'dist'),
  TEMPLATE: path.resolve(globals.PROJECT_ROOT_DIR, 'src/app/index.html.ejs'),
  NODE_MODULES: path.resolve(globals.PROJECT_ROOT_DIR, 'node_modules'),
  INDEX: path.resolve(globals.PROJECT_ROOT_DIR, 'src/app/index.js'),
  REPORTS: path.resolve(globals.PROJECT_ROOT_DIR, 'reports')
};

export default paths;