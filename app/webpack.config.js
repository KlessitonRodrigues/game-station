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
      hot: true,
      open: false,
      host: 'localhost',
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
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
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
