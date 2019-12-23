var http = require('http');
var querystring = require('querystring');
var util = require('util');

// DEMO
/* 
http.createServer(function(req,res){
	console.log('基站建立完毕,正在监听中....');
	// 创建一个 post 变量,用于暂存请求体的信息
	var post = '';
	// 通过 req 的 data 事件监听函数,每当接收到请求体的数据,就累加到 post 变量中.
	req.on('data',function(chunk){
		post += chunk;
	});
	
	// 在 end 事件触发后,通过 querystring.parse 将 post 解析为真正的 post 请求格式,然后像客户端返回.
	req.on('end',function(){
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
});
 */

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

console.log('基站建立中....');
http.createServer(function(req, res) {
	console.log('来了一个家伙');
	var body = '';
	req.on('data', function(chunk) {
		console.log('采集数据...');
		body += chunk;
	});
	
	req.on('end', function() {
		body = querystring.parse(body);
		res.writeHead(200,{'Content-Type' : 'text/html;charset = utf8'});
		// res 返回又重新进入createServer 的回调.
		if(body.name && body.url){
			res.write('网站名:'+body.name);
			res.write('<br/>');
			res.write('网站URL:'+body.url);
		} else{
			res.write(postHTML);
		}
		res.end();
	});
	console.log('代码执行完,触发 req 的 end 事件!!!!!');
}).listen(3000);
console.log('基站建立完毕,正在监听中....');
