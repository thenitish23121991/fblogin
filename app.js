var app = require('express').createServer();

app.get('/',function(req,res){
res.sendfile(__dirname + '/index.html');
});

app.listen(8080);
