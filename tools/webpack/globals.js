import appRootDir from 'app-root-dir';

const globals = {
  PROJECT_ROOT_DIR: appRootDir.get(),
  WEBPACK_DEV_SERVER_HOSTNAME: process.env.npm_config_hostname,
  WEBPACK_DEV_SERVER_PORT: process.env.npm_config_port,
  IS_PRODUCTION_ENVIRONMENT: (process.env.NODE_ENV === "production"),
  CHUNKS: {
    VENDOR: 'vendor'
  }
};

export default globals;