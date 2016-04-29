var webpack = require('webpack');
var config = {
  entry: "./src/client/client.js",
  output: {
    path: __dirname + "/dist/client",
    filename: "bundle.js"
  },
  devServer:{
      inline:true,
      port:3000
  }
  ,
  plugins:[]
  ,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
        query: {
            presets: ['react', 'es2015','stage-0']
        }
      },
      { test: /\.css$/,loader:'style!css',exclude:/node_modules/
      },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' }
    ]
  }
};

config.devtool='source-map';
//config.plugins.push(new webpack.optimize.UglifyJsPlugin());

module.exports = config;