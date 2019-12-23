// 服务器

var http = require('http');
var fs = require('fs');
var url = require('url');

// 创建服务器
http.createServer(function(request, response) {
	// 解析请求 , 包括文件名
	var pathname = url.parse(request.url).pathname;

	console.log('请求的文件名为 ' + pathname);

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function(err, data) {
		if(err){
			console.log(err);
			// HTTP 状态码 : 404 > NOT FOUND
			// Content Type : text/html
			response.writeHead(404,{'Content-Type':'text/html'});
			response.write('你找啥呢????');
		} else {
			// HTTP 状态码 20 > OK
			// Content Type : text/html
			response.writeHead(200,{'Content-Type':'text/html'});
			
			// 相应文件内容
			response.write(data.toString());
		}
		// 发送相应数据
		response.end();
	});
}).listen(8088);
// 控制台会输出以下信息
console.log('导弹发射基站建立完毕. http://127.0.0.1:8088/');