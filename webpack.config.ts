import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { WebpackPluginInstance } from 'webpack';

const root = process.cwd();

const resolve = (dir: string): string => {
  return path.join(root, dir);
};

export default {
  target: 'web',
  mode: 'development',
  
  devtool: 'cheap-module-source-map',
  
  entry: resolve('src/main.ts'),
  output: {
    clean: true,
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: resolve('src'),
        use: [{ loader: 'vue-loader', options: { pad: true } }],
      },
      {
        test: /\.[tj]sx$/,
        include: resolve('src'),
        use: ['babel-loader'],
      },
      {
        test: /\.[tj]s$/,
        include: resolve('src'),
        use: ['babel-loader'],
      },
    ],
  },
  
  plugins: [
    new VueLoaderPlugin() as WebpackPluginInstance,
    new HtmlWebpackPlugin({
      template: resolve('index.html'),
      publicPath: '/',
    }),
  ],
  resolve: {
    mainFiles: ['index', 'module', 'jsnext:main', 'jsnext'],
    extensions: ['.vue', '.ts', '.js'],
    alias: {
      '@': resolve('src'),
    },
  },
};
