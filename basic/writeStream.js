// 写入流 写入会直接覆盖整个文件

var fs = require('fs');
var data = 'asdf测试写入数据23asd455';

var writeStream = fs.createWriteStream('test.txt');

// 使用 UTF8 写入数据
writeStream.write(data,'UTF8');

// 标记文件末尾
writeStream.end();

writeStream.on('finish',function(){
	console.log('写入完成!');
});
writeStream.on('error',function(err){
	console.log(err.stack);
});
console.log('程序执行完毕!');
