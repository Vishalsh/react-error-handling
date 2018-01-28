import entryConfig from './entryConfig';
import outputConfig from './outputConfig';
import resolveConfig from './resolveConfig';
import devServerConfig from './devServerConfig';

const configs = {
  ...entryConfig,
  ...outputConfig,
  ...resolveConfig,
  ...devServerConfig
};

export default configs;