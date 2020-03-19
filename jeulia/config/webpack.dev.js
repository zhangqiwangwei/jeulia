const merge = require('webpack-merge');
const common = require('./base.config.js');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
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
});