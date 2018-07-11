const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    discardComments: {
                        // TODO: Try to remove safe when entire project is over
                        safe: true,
                        removeAll: true
                    }
                }
            })
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js$|\.css$/,
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: true
        })
    ]
});