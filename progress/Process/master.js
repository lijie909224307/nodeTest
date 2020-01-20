const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
	// exec 第一个参数加参数,空格隔开!!! ,第二个参数为子进程的输出返回,,
	var wordProcess = child_process.exec('node support.js '+i,function(error,stdout,stderr){
		if(error){
			// 执行报错.
			console.log(error.stack);
			console.log('Error Code :' + error.code);
			console.log('Error received :' + error.signal);
		}
		console.log("stdout : " + stdout);	// 脚本的输出以参数形式返回,从这输出
		console.log("stderr : " + stderr);
	});
	wordProcess.on('exit',function(code){
		console.log('子进程已退出,退出码 : '+code);
	});
}
