const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
        test: /\.styl$/,
        loader: [
          "style-loader", 
          "css-loader", 
          "stylus-loader" // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.less$/,
        loader: [
          "style-loader", 
          "css-loader", 
          "less-loader" // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
};
