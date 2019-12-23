// 管道流, 复制文件.
// 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

var fs = require('fs');
// 读取需要复制的文件
var read = fs.createReadStream('test.txt');
// 创建需要写入数据的文件流
var write = fs.createWriteStream('copy.txt');
// 管道读写操作, 读取 test.txt 文件内容,并将内容写入到 copy.txt 文件中
read.pipe(write);
console.log('程序执行完毕!');