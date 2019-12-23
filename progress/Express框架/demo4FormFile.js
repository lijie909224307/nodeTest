var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(multer({	// ??? 何用 ???
	dest: '/tmp/'
}).array('image'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/html/file.html');
});

app.post('/file_upload',function(req,res){
	console.log(req.files[0]);	// 上传的文件信息
	var des_file = __dirname + '/upload/' + req.files[0].originalname;
	// 如果文件夹不存在,不会报错,但是没有上传成功.
	fs.readFile(req.files[0].path,function(err,data){
		fs.writeFile(des_file,data,function(err){
			var response = {};
			if(err){
				console.log(err);
			}else{
				response = {
					message : 'File uploaded successfully!',
					filename:req.files[0].originalname
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('基站建立完毕,正在监听 http://%s:%s',host,port);
});