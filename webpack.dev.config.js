var webpack = require("webpack");
var path = require("path");
var config = {
    devtool: 'source-map',
    entry:[
        'webpack-hot-middleware/client',
         './src/entry'
    ],
    output: {
        path:path.join(__dirname,'dist'),
        filename: "entry.js",
        publicPath:"/static/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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
                include: path.join(__dirname, 'src'),
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
}
module.exports = config;