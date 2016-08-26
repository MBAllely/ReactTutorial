var HtmlWebpackPlugin       = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    //name of file that webpack will create and store transformed code
    filename: "index_bundle.js",
    //path to destination file
    path: __dirname + '/dist'
  },
  plugins: [HtmlWebpackPluginConfig]
};
