// 从流中读取数据
var fs = require('fs');
var readStream = fs.createReadStream('test.txt');
readStream.setEncoding('utf8');
var data = '';
readStream.on('data', function(chunk) {
	data += chunk;
});
readStream.on('end',function(){
	console.log(data);
})
readStream.on('error',function(err){
	console.log(err.stack);
});
console.log('程序执行完毕!');