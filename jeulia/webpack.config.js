var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//let isDev = process.env.NODE_ENV;

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: "development",
    module: {
        rules: [

            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            chunks: ['main'],
            template: path.resolve( './index.html')
        }),
        //new  webpack.DllReferencePlugin({
        //    // 描述 react 动态链接库的文件内容
        //    manifest: require('../dist/site/vendor-manifest.json'),
        //}),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
        // 抽离css
        //new ExtractTextPlugin('static/[name].min.css')
    ],
    devtool:"eval-source-map",
    devServer: {
        host: '127.0.0.1',
        historyApiFallback: true,
        port: 8080,
        proxy: {
            // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
            // koa 代码在 ./mock 目录中，启动命令为 npm run mock
            '/api': {
                // 下面这个 target 的地址，如果直接写域名(例如 localhost)报错，那么就换成 ip
                target: 'http://127.0.0.1:3000',
                secure: false,
                changeOrigin: true
            }
        },
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    },
};

