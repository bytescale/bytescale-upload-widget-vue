/* eslint @typescript-eslint/no-var-requires: 0 */
const baseConfig = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3040;

module.exports = {
  ...baseConfig,
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: `index.js`
  },
  cache: true,
  mode: "development",
  entry: [`webpack-dev-server/client?http://localhost:${port}/`, "./src/dev/index.ts"],
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Uploader Demo",
      template: path.resolve(__dirname, "src/dev/index.html"),
      filename: "index.html" // output file
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port
  }
};
