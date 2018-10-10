const path = require('path');

const config = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules')
        ]
    },
    entry: ['babel-polyfill', './lib/renderers/dom.jsx'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node-modules/, use: 'babel-loader' }
        ]
    }
};

module.exports = config;