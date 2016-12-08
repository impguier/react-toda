var webpack = require("webpack");
var path = require("path");
var config = {
    entry: __dirname + '/src/entry.js',
    output: {
        path:__dirname+ "/dist",
        filename: "entry.js"
    },
    plugins: [
        //????
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module:{
        loaders:[
            /*
                babel加载器
                exclude除去的意思
                query的preset,进行es2015,react加载?
            *
             */
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
}
module.exports = config