var express = require('express');
var app = express();

app.use('/public',express.static('public'));

app.get('/',function(req,res){
	res.sendFile( __dirname + '/public/html/' + 'get.html');
});
app.get('/index.html',function(req,res){
	res.sendFile( __dirname + '/public/html/' + 'get.html');
});

app.get('/process_get',function(req,res){
	var response = {
		'firstName' : req.query.first_name,
		'lastName' : req.query.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听 http://%s:%s',host,port);
});