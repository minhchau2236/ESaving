const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ],
    alias: {
      'ag-grid-community': path.resolve('./node_modules/ag-grid-community')
    }
  },
  entry: ['babel-polyfill', './lib/renderers/dom.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node-modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        // exclude: [
        //   path.resolve('node_modules/ag-grid-community/dist/styles/ag-grid.css'),
        //   path.resolve('node_modules/ag-grid-community/dist/styles/ag-theme-balham.css'),
        // ],
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            },
          }
        ]
      }
    ]
  }
};

module.exports = config;