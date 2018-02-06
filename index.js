var express    =    require('express');
var app        =    express();
var path = require('path');
var bodyParser = require('body-parser');
var main = require('./router/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req,res,next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, DELETE');
    res.header('Acces-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    
    res.header("Cache-Control", 'no-cache');
    next();

})

app.use('/', main);



var server     =    app.listen(3000,function(){
    console.log("We have started our server on port 3000");
});