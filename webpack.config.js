var path = require("path");
var webpack = require("webpack");
module.exports = [
  {
    target: 'web',
	  cache: true,
	  entry: [
      './src/tickerpicker.js'
	  ],
	  output: {
      library: 'ticker',
      libraryTarget: 'umd',
		  path: path.join(__dirname, "dist"),
		  publicPath: "dist/",
		  filename: "tickerpicker.js",
		  chunkFilename: "[chunkhash].js"
	  },
	  module: {
		  loaders: [
			  { test: /\.js$/,    loader: "babel-loader", exclude: /node_modules/ }
		  ]
	  },
	  resolve: {
	  },
	  plugins: [
	  ]
  }
];