import cleanWebpackPlugin from './cleanWebpackPlugin';
import extractTextPlugin from './extractTextPlugin';
import htmlWebpackPlugin from './htmlWebpackPlugin';
import commonChunkPlugin from './commonChunkPlugin';
import uglifyJsPlugin from './uglifyJsPlugin';
import sourceMapDevToolPlugin from './sourceMapDevToolPlugin';
import styleLintWebpackPlugin from './styleLintWebpackPlugin';
import visualizerPlugin from './visualizerPlugin';
import definePlugin from './definePlugin';
import inlineManifestWebpackPlugin from './inlineManifestWebpackPlugin';
import globals from '../globals';

let commonPlugins = [
  cleanWebpackPlugin,
  extractTextPlugin,
  htmlWebpackPlugin,
  commonChunkPlugin,
  styleLintWebpackPlugin,
  definePlugin,
  inlineManifestWebpackPlugin
];

const developmentPlugins = [
  sourceMapDevToolPlugin,
  visualizerPlugin
];

const productionPlugins = [
  uglifyJsPlugin
];

const plugins = globals.IS_PRODUCTION_ENVIRONMENT ? [...commonPlugins, ...productionPlugins] : [...commonPlugins, ...developmentPlugins];

export default plugins;