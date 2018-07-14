const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.config.common');

module.exports =  merge(common, {
    mode: 'development',
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});