const webpack = require('webpack')
const path = require('path')

const buildPath = path.resolve(__dirname, 'dist')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/index.jsx')
  ],
  // Server Configuration options
  devServer: {
    contentBase: '.', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 8090, // Port Number
    host: 'localhost' // Change to '0.0.0.0' for external facing server
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: buildPath, // Path of output file
    filename: 'ReactQuickAccess.min.js',
    libraryTarget: 'umd',
    library: 'ReactQuickAccess'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  }
}

module.exports = config
