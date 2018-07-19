const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.env.NODE_ENV.trim() !== 'production';

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '..', 'src', 'app', 'index.js')
        ]
    },   
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, '..', 'public', 'index.html'),
            favicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: env ? '[name].[hash].css' : '[name].css',
            chunkFilename: env ? '[id].[hash].css' : '[id].css'
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '../../theme.config$': path.join(__dirname, '..', 'semantic', 'theme.config')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|woff|woff2|eot|ttf|otf)$/,
                use: 'url-loader'
            }
        ]
    }
};