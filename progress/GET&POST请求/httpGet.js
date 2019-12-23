var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	// res.end(util.inspect(url.parse(req.url,true)));
	
	
	// http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
	var params = url.parse(req.url,true).query;
	console.log(params);
	res.write("网站名：" + params.name);		// 菜鸟教程
    res.write("\n");
    res.write("网站 URL：" + params.url);	// www.runoob.com
    res.end();
}).listen(3000);