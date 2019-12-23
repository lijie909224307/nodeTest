var express = require('express');
var app = express();

// 通过 express.static 中间件来设置静态文件路径,
app.use('/public',express.static('public'));

app.get('/',function(req,res){
	res.send('Hello World!');
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听地址为 http://%s:%s',host,port);
});

// test  >  http://localhost:8081/public/image/1337310638.jpg