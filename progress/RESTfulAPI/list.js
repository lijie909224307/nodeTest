var express = require('express');
var app = express();
var fs = require('fs');


app.get('/',function(req,res){
	fs.readFile(__dirname+'/users.json','utf8',function(err,data){
		console.log(data);
		// console.log(typeof data);	// string > 解析出来的是字符串
		res.end(data);
		
		/* var html = '<table border="1px" ><tr><th>name</th><th>password</th><th>profession</th><th>id</th></tr>';
		var dd = JSON.parse(data);
		for (let d in dd) {
			html += '<tr>';
			html += '<td>'+dd[d].name+'</td>';
			html += '<td>'+dd[d].password+'</td>';
			html += '<td>'+dd[d].profession+'</td>';
			html += '<td>'+dd[d].id+'</td>';
			html += '</tr>';
		}
		html += '</table>';
		res.end(html); */
	});
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('部署成功,访问地址 http://%s:%s',host,port);
});