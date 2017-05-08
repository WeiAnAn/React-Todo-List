const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        "./index.jsx",
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    context: path.resolve(__dirname,''),
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        contentBase: path.resolve(__dirname,'dist'),
        historyApiFallback: true
    },
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin,
        new webpack.NamedModulesPlugin
    ]
}