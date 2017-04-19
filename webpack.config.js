const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require('path');
module.exports = {
    // context:"",
    entry: {
        "badge": './src/script/badge.js',
        "button": './src/script/button.js',
        "x":"jquery"
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
            "chunks": ['common','badge'],
            "minify": {
                // "removeComments":true,
                // "removeTagWhitespace":true,
                // "collapseWhitespace":true,
            }
        }),
        
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: function (module) {
        //        // this assumes your vendor imports exist in the node_modules directory
        //        return module.context && module.context.indexOf('node_modules') !== -1;
        //     }
        // }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({ 
            name: ["common","x"] //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        })
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