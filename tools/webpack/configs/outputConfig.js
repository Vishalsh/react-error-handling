import paths from '../paths';
import globals from '../globals';

const outputConfig = {
  output: {
    path: paths.DIST,
    filename: `[name]-${globals.IS_PRODUCTION_ENVIRONMENT ? '[chunkhash:8]' : '[hash:8]'}.js`,
  }
};

export default outputConfig;