import paths from '../paths';
import globals from '../globals';
import packageJson from '../../../package.json';

const entryConfig = {
  entry: {
    index: paths.INDEX,
    [globals.CHUNKS.VENDOR]: Object.keys(packageJson.dependencies)
  }
};

export default entryConfig;