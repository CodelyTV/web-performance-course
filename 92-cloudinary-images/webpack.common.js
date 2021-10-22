const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CLOUDINARY_URL =
  "https://res.cloudinary.com/webperf-codelytv/image/upload/";
const CLOUDINARY_PRESET = "f_auto,q_auto";
const CLOUDNINARY_FOLDER = "/CodelyTv/";
const PUBLIC_PATH = `${CLOUDINARY_URL}${CLOUDINARY_PRESET}${CLOUDNINARY_FOLDER}`;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/data", to: "data" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|svg|png|je?pg|webp|avif|jxl)$/i,
        type: "asset/resource",
        generator: {
          emit: false,
          filename: "[file]",
          publicPath: PUBLIC_PATH,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  performance: {
    hints: "warning",
  },
};
