const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output management',
            template: './src/index.html',
            filaname: 'index.html',
            inject: 'true',
            chunks: ['test'],
        }),
        new HotModuleReplacementPlugin(),
    ],
    devltool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]--[hash:base64:5]',
                            camelCase: true,
                        },
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' },
                ],
            },
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8082,
        overlay: true,
        hot: true,
    },
};