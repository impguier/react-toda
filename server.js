var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require("./webpack.dev.config");

var app = express();
var compile = webpack(config);

app.use(require('webpack-dev-middleware')(compile,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compile));

app.get('*',function(req, res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(8000,'127.0.0.1',function(){});