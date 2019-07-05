var webpack = require("webpack");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var merge = require("webpack-merge");
var webpackBaseConfig = require("./webpack.config.js");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    output: {
        publicPath: "/dist/",
        filename: "[name].[hash].js"
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].[hash].css",
            allChunks: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlwebpackPlugin({
            filename: "../index_prod.html",
            template: "./index.ejs",
            inject: false
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    warnings: false
                }
            }),
        ]
    }
})