const webpack = require("webpack");
const path = require("path");
const ReactLoadablePlugin = require("react-loadable/webpack")
  .ReactLoadablePlugin;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-portfolio.bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|eot)$/,
        use: "url-loader"
      },
      {
        test: /.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    }),
    new UglifyJSPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    hot: true
  }
};
