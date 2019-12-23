// 链式流 , 压缩或解压文件
// 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。

var fs = require('fs');
var zlib = require('zlib');

// 压缩 copy.txt 文件为 copy.gz
fs.createReadStream('copy.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('copy.txt.gz'));	// 这儿不加个 txt 尾缀文件没有格式
console.log('文件压缩完成!');