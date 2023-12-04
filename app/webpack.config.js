// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const isProduction = process.env.NODE_ENV == 'production';

  const config = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      globalObject: 'this',
    },
    devServer: {
      open: true,
      host: 'localhost',
      open: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: 'body',
        scriptLoading: 'defer',
        template: './src/index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: 'asset',
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'libs',
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
      plugins: [new TsconfigPathsPlugin()],
    },
  };

  if (isProduction) config.mode = 'production';
  else config.mode = 'development';
  return config;
};
