var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/app/index.js'],
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            filename: 'index.html'
        }),
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
        open: true,
        proxy: {
            "/api": "http://localhost:8081"
        }
    }
};