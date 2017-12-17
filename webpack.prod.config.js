var path = require('path');

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
    }
  ]
  },
  plugins: []
};
