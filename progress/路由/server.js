var http = require('http');
var url = require('url');
/* 
// easy
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello world!');
	response.end();
}).listen(8888);
 */

function start(route){
	function onRequest(request,response){
		var pathName = url.parse(request.url).pathname;	// 解析路径
		console.log(`request for ${pathName} received`);
		route(pathName);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello lijie");
		response.end();
	}
	http.createServer(onRequest).listen(8686);
	console.log('server has established!');
}
exports.start = start;