const path = require('path');
const webpack = require('webpack');

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
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }]
    },
}