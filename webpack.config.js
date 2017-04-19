const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require('path');
module.exports = {
    // context:"",
    entry: {
        "badge": './src/script/badge.js',
        "button": './src/script/button.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "js/bundle-[name].js", // string
        library: "Badge", // string,
        libraryTarget: "umd", // universal module definition
        publicPath: "http://git"
    },
    plugins: [
        new htmlWebpackPlugin({
            "filename": './views/[name].html',
            "template": './src/template/badge.html',
            "title": "htmlWebpackPlugin",
            "favicon": '',
            "inject": true, //true,false,'head','body';
            "date": new Date(),
            "minify": {
                // "removeComments":true,
                // "removeTagWhitespace":true,
                // "collapseWhitespace":true,
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["common","commonnew"],
            // filename: "commons.js",
            chunks: ["badge", "button"]
        }),
    ],
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    }
};