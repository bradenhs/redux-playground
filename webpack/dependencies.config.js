var webpack = require('webpack');

var PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  entry: {
    dependencies: Object.keys(require('../package.json').dependencies || {}),
  },
  output: {
    path: 'build',
    filename: 'dependencies.bundle.js',
    library: 'dependencies',
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'webpack/generated/dependencies-manifest.json',
      name: 'dependencies'
    }),
  ],
}
