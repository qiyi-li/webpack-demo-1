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
        }),
    ],
};