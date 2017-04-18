const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

module.exports = {
    // context:"",
    entry: {
        "badge": './src/script/badge.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "js/bundle-[name].js", // string
        library: "Badge", // string,
        libraryTarget: "umd", // universal module definition
        // publicPath:"http://git"
    },
    plugins: [
        new htmlWebpackPlugin({
            "filename":'./views/[name].html',
            "template":'./src/template/badge.html',
            "title":"htmlWebpackPlugin",
            "favicon":'',
            "inject":true,//true,false,'head','body';
            "date":new Date(),
            "minify":{
                // "removeComments":true,
                // "removeTagWhitespace":true,
                // "collapseWhitespace":true,
            }
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            }
        ]
        
    }
};