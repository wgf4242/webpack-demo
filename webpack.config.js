module.exports = {
  entry: {
    app: ["./src/index.js"]
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
