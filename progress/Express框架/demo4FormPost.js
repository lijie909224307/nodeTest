var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use('/public',express.static('public'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/html/post.html');;
});

app.post('/process_post',urlencodedParser,function(req,res){
	
	var response = {
		'firstName':req.body.first_name,
		'lastName':req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听 http://%s:%s',host,port);
});