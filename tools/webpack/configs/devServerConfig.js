import globals from '../globals';

const devServerConfig = {
  devServer: {
    inline: true,
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
    },
    host: globals.WEBPACK_DEV_SERVER_HOSTNAME,
    port: globals.WEBPACK_DEV_SERVER_PORT,
  }
};

export default devServerConfig;