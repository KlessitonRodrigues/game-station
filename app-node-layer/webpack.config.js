const path = require('path');
// const webpack = require('webpack');
// require('dotenv').config({ path: './client.env' });
// const compileEnv = new webpack.EnvironmentPlugin(['ENV_VARS']);

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    libraryTarget: 'umd', // make the bundle export
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js', '...'],
    plugins: [],
  },
  //plugins: [compileEnv],
};
