const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = (env, argv) => ({
  entry: {
    app: ["./src/index.js"]
  },
  output: {
    filename: "./[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [ new CleanWebpackPlugin({ verbose: true }) ]
});
