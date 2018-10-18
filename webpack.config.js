const pkg = require('./package.json');
const path = require('path');
const webpack = require('webpack');

const banner = `clean-text.js v${pkg.version}
https://github.com/ORODii/clean-text
Licensed ISC © Andrés Orozco <orodi.20@gmail.com>`;

module.exports = (env, options) => {
  return {
    entry: './src/main.js',
    output: {
      filename: options.mode === 'development' ? 'clean-text.js' : 'clean-text.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'CleanText',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new webpack.BannerPlugin({banner})
    ]
  };
}

