import paths from '../paths';

const resolveConfig = {
  resolve: {
    modules: [
      paths.APP,
      'node_modules'
    ],
    extensions: ['*', '.js', '.jsx'],
  }
};

export default resolveConfig;