import babelLoader from './babelLoader';
import cssLoader from './cssLoader';
// import esLintLoader from './esLintLoader';
import imageLoader from './imageLoader';
import fontLoader from './fontLoader';

const loaders = [
  babelLoader,
  cssLoader,
  // esLintLoader,
  imageLoader,
  fontLoader
];

export default loaders;