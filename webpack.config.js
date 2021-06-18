const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development', 
    entry: '/script/script.js',
    output : {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app')
        // publicPath: ''
    },
    plugins: [
        new HTMLWebpackPlugin({
           template: path.resolve(__dirname, 'src/index.html'),
           filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        })
    ],
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        }
                    },
                    'css-loader', 'sass-loader'],
              },
              {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./img/${filename('[ext]')}`
                    }
                }],
              },
              {
                test: /\.html$/i,
                use: ['html-loader']
              },
        ]
    }
};