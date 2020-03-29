var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js" // 添加缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "666",
      template: "src/assets/test.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
