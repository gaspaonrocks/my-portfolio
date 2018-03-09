const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { ReactLoadablePlugin } = require("react-loadable/webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

let angularAppConfig = {
  resolve: [".ts", ".tsx"],
  target: "web",
  entry: {
    main: ["./src\\main.ts"],
    polyfills: ["./src\\polyfills.ts"],
    styles: ["./src\\styles.scss"]
  },
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist/hackouphene"),
    filename: "hackouphene.bundle.js",
    chunkFilename: "hack.[id].bundle.js",
    crossOriginLoading: false
  },
  module: {
    rules: [
      {
        test: /.html$/,
        use: "html-loader"
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg|ttf|woff|woff2|eot)$/,
        use: "url-loader",
        options: {
          name: "[name].[hash:20].[ext]",
          limit: 10000
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              precision: 8,
              includePaths: []
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [new CheckerPlugin(), new HardSourceWebpackPlugin()]
};

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
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              precision: 8,
              includePaths: []
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg|ttf|woff|woff2|eot)$/,
        loader: "url-loader",
        options: {
          name: "[name].[hash:20].[ext]",
          limit: 10000
        }
      },
      {
        test: /.html$/,
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
  plugins: [new UglifyJSPlugin(), new CleanWebpackPlugin(["dist"])],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    hot: true
  }
};

module.exports = [clientConfig, serverConfig];
