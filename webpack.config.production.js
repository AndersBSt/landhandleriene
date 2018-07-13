const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
            deleteOriginalAssets: true
        })/*,
        To analyze bundle requires deleteOriginalAssets to be false. As it requires the original bundle.js and app.css files to analyze
        new BundleAnalyzerPlugin()*/
    ]
});