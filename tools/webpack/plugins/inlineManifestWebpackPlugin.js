import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';

const inlineManifestWebpackPlugin = new InlineManifestWebpackPlugin({
  name: 'webpackManifest'
});

export default inlineManifestWebpackPlugin;
