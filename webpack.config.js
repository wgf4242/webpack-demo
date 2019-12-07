module.export = {
  entry: ["@babel/polyfill", "./src/index.js"],
  rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
};
