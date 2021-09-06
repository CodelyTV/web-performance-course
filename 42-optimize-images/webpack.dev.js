const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    contentBase: "./dist",
    writeToDisk: (path) =>
      /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/i.test(path),
  },
});
