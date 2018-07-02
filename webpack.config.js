var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Node environment variable
const env = process.env.NODE_ENV.trim();

// Pre-generate both plugins and app list to handle configuration based on different environments
var plugins = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: path.join(__dirname, 'public', 'favicon.ico'),
        filename: 'index.html'
    })
];

var app = [
    path.join(__dirname, 'src', 'app', 'index.js')
]

// Push development configurations to respective lists
if (env === 'development') {
    // HotModuleReplacementPlugin is required to hot load changes in React components
    plugins.push(new webpack.HotModuleReplacementPlugin());

    // Required to connect server to receive notification on when to hot load changes
    app.push('webpack-hot-middleware/client?reload=true');
}

module.exports = {
    mode: env || 'development',
    entry: {
        app: app
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: plugins,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
};