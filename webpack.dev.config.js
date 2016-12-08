var webpack = require("webpack");
var path = require("path");
var config = {
    devtool: 'source-map',
    entry:[
        'webpack-hot-middleware/client',
        __dirname + '/src/entry.js'
    ],
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "gcl.js",
        publicPath:"/static/"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
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
            }
        ]
    }
}
module.exports = config;