const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");
const buildExtensionPlugin = require('./plugins/buildExtension.ts')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ["console.info", "console.debug", "console.log"],
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new buildExtensionPlugin()
  ],
  devtool: process.env === 'devlopment' ? 'inline-source-map' : false
}