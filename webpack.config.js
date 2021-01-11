/*
* Webpack Constants
*/
// const webpack = require('webpack');
// const helpers = require('./helpers');
// const HMR = helpers.hasProcessFlag('hot');
// const METADATA = {
// title: 'Echoes Player Lite - Open Source Media Player for Youtube',
// baseUrl: '/',
// isDevServer: helpers.isWebpackDevServer()
// };



const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.(html|css)$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}