import ExtractTextPlugin from 'extract-text-webpack-plugin';

const cssLoader = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        minimize: true
      }
    },
      'sass-loader'
    ]
  }),
};

export default cssLoader;