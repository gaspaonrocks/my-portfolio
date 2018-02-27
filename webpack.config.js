const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ReactLoadablePlugin = require("react-loadable/webpack")
  .ReactLoadablePlugin;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let clientConfig = {
  target: "web",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist/public"),
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
        include: path.resolve("public/"),
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
      favicon: path.resolve("public/favicon.png")
    }),
    new ReactLoadablePlugin({
      filename: path.resolve(__dirname, "dist/public/react-loadable.json")
    }),
    new UglifyJSPlugin()
  ]
};

let serverConfig = {
  target: "node",
  node: {
    __dirname: true
  },
  entry: {
    server: path.resolve("server.js")
  },
  output: {
    path: path.resolve("dist"),
    filename: "server.js"
  },
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  plugins: [new UglifyJSPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    hot: true
  }
};

module.exports = [clientConfig, serverConfig];
