const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            // When using with transpiling loaders, make sure they are in correct order
            use: ['babel-loader', 'eslint-loader'],
                }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}