// 链式流 , 解压
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('copy.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('deconpress.txt'));
console.info('文件解压完成!');

