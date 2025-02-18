const path = require('path')
const WebpackHtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.ts'),
    delaydemo: path.resolve(__dirname, './src/delaydemo.ts')
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json')
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.ts'
    ],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js'
    }
  },
  mode: 'development',
  devServer: {
    compress: true,
    // disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: true
    })
  ]
}
