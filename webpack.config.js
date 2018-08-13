const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/html/index.html",
  filename: "index.html"
});

module.exports = {
  // Entry point, can be multiple if chunking
  entry: {
    propertyReader: './src/js/index.js'
  },
  // Output, where the bundle file or chunks will go / be named
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  // Setup modeles to use loaders on specific file types
  module: {
    rules: [
      {
        // Converts written JS files from es6 -> es5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            retainLines: true
          }
        }
      },
      {
        // Converts CSS files to be more modular and usable on a component level
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              // Determines how many loaders will be used before css-loader is applied
              importLoaders: 1,
              // Configures the generated identification so css id's are unique
              // [name]         - name of your component
              // [local]        - name of class id
              // [hash:base64]  - randomly generated hash which is unique in every components css
              localIdentName: "[name]_[local]_[hash:base64]",
              
              sourceMap: true,
              minimize: true
            }
          }]
      }
    ]
  },
  // Plugins hook to utilize various plugins
  plugins: [htmlPlugin],
  devtool: 'source-map'
};