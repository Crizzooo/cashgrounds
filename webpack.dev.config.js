var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
//

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/src/public/dist')
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
  extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    // {
    //   test: /\.css$/,
    //   loader: 'style!css!postcss',
    //   include: path.join(__dirname, '../node_modules'), // oops, this also includes flexboxgrid
    //   exclude: /flexboxgrid/, // so we have to exclude it
    // },
    {
      test: /\.css$/,
      use: [
        'style-loader', 'css-loader'
      ],
      exclude: /flexboxgrid/
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules',
      include: /flexboxgrid/,
    },
    // "postcss" loader applies autoprefixer to our CSS.
    // "css" loader resolves paths in CSS and adds assets as dependencies.
    // "style" loader turns CSS into JS modules that inject <style> tags.
    // In production, we use a plugin to extract that CSS to a file, but
    // in development "style" loader enables hot editing of CSS.
    // {
    //   test: /\.css$/,
    //   use: [
    //     'style-loader', 'css-loader'
    //   ],
    //   exclude: /flexboxgrid/
    // }
  ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true})
  ]
};
