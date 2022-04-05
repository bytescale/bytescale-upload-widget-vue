/* eslint @typescript-eslint/no-var-requires: 0 */
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const src = path.resolve(__dirname, "src");
const { VueLoaderPlugin } = require("vue-loader");

/**
 * Creates the dist that's published to NPM.
 */
module.exports = {
  output: {
    libraryTarget: "commonjs2"
  },
  cache: false,
  mode: "production",
  target: "browserslist",
  entry: "./src/index.ts",
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Remember to keep in sync with `tsconfig.json`
      "@upload-io/vue-uploader": path.resolve(__dirname, "src")
    }
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader" // Options are in 'babel.config.js'
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json",
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        include: [src]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ],
        include: [src]
      }
    ]
  }
};
