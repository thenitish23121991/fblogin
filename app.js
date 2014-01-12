var express = require('express');
var app = express.createServer();

app.get('/',function(req,res){
res.sendfile(__dirname + '/index.html');
});

app.listen(8080);


app.use(express.static(__dirname+"/assets"));
