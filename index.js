
var config=require('./config/config');
var express=require('./config/express');
var server=express()
server.listen(config.port)
console.log("port Number:"+config.port)

