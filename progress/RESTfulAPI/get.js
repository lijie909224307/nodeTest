var express = require('express');
var app = express();
var fs = require('fs');

// 这儿是 :id
app.get('/:id',function(req,res){
	// console.log(id);	// undefined
	fs.readFile(__dirname+'/users.json','utf8',function(err,data){
		data = JSON.parse(data);
		var user = data['user'+req.params.id];	// url 中的路径参数用 params
		console.log(user);
		res.end(JSON.stringify(user));
	});
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听 http://%s:%s',host,port);
});
