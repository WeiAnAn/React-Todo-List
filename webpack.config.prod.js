const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "./index.jsx",
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    context: path.resolve(__dirname,''),
    module:{
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
    },
    plugins:[
        new ExtractTextPlugin("style.css")
    ] 
}