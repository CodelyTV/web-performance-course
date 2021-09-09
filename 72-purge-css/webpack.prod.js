const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const common = require("./webpack.common.js");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new GenerateSW(),
    new MiniCssExtractPlugin(),
    new PurgecssPlugin({
      paths: ["index.html"],
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, "dist"),
      src: "index.html",
      dest: "index.html",
      inline: true,
      minify: true,
      extract: true,
      dimensions: [
        {
          width: 375,
          height: 565,
        },
        {
          width: 1100,
          height: 700,
        },
      ],
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
