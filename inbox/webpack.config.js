const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.resolve(__dirname, 'App');
// const BUILD_DIR = path.resolve(__dirname, 'servers');

module.exports = {
  entry: './src/index.js',
  devServer: {
    publicPath: './public',
    contentBase: path.join(__dirname, "./src"),
    hot:true
  },
  output: { path: __dirname, filename: './public/bundle.js' },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ]
  }
}
