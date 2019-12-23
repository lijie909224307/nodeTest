var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});
app.use('/static', express.static('static'));

// html文件路径
var htmlPath = __dirname + '/static/html';

// 首页
app.get('/', function(req, res) {
	res.sendFile(htmlPath+'/list.html');
});

// 获取列表数据
app.get('/list',function(req,res){
	fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			data = JSON.parse(data);
			var response = {
				code:0,
				data:data
			}
			res.end(JSON.stringify(response));
		}
	});
});


/* 
app.get('/add', function(req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
		if(err){
			console.log(err);
		}else{
			data = JSON.parse(data);
			// console.log(typeof req.query);	// Object
			data.push(req.query);
			console.log(data);
			// 解决页面乱码
			res.setHeader('Content-Type', 'text/html; charset=utf8');
			res.end(JSON.stringify(data));
		}
	});
});
 */


// 新增页面
app.get('/add.html', function(req, res) {
	res.sendFile(htmlPath + '/add.html');
});
// 保存接口
app.post('/add', urlencodedParser, function(req, res) {
	fs.readFile(__dirname + '/users.json', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			data = JSON.parse(data);
			data.push(req.body);
			// console.log(data);
			fs.writeFile(__dirname + '/users.json',JSON.stringify(data),function(){
				if(err){
					console.log(err);
				}else{
					/* 返回到新增界面
					// res.redirect('/add.html');
					// 或者
					res.status(302);
					res.location('/add.html');
					res.end();
					 */
					// 返回到列表界面
					res.redirect('/');
				}
			});
		}
	});
});



var server = app.listen(8081, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,监听 http://%s:%s', host, port);
});
