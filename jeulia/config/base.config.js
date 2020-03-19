const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        jeulia: './src/index.ts'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            filename: 'index.html',
            inject: true,
            chunks: ['jeulia'],
            template: path.resolve( './index.html')
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        library: "Jeulia",
        libraryTarget: "umd",
        auxiliaryComment: "Test Jeulia"
    },
    module: {
        rules  : [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};